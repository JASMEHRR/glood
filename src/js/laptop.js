// The 3D laptop: rounded-box aluminium body, opening lid, screen, keyboard, soft floor shadow,
// and sticker planes that live on the lid so they turn and open with it.
//
// Nothing animates by itself. `state` and `slots` are plain objects that GSAP tweens from the
// scroll timeline; call `render()` after changing them.

import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const W = 3.0;        // laptop width
const D = 2.1;        // laptop depth
const BASE_H = 0.12;
const LID_H = 0.07;
const FLOOR_Y = -1.25;
const LOGO_WIDTH = 1.5;
const FLY_HEIGHT = 4.2; // how far above the lid a sticker starts its slap

export const POSES = {
  // `enter` 1 parks the laptop just below the bottom of the frame, however tall the viewport is.
  hero: { x: 0, fit: 1, y: -0.15, enter: 1, rotX: 0.5, rotY: -0.7, rotZ: 0.1, lid: 0, screen: 0, shadow: 0, camY: 0.9, lookY: 0.1 },
  landing: { x: 0, fit: 1, y: -0.15, enter: 0, rotX: 0.62, rotY: -0.42, rotZ: 0.05, lid: 0, screen: 0, shadow: 1, camY: 1.1, lookY: 0.0 },
  face: { x: 0, fit: 1, y: 0.05, enter: 0, rotX: 1.34, rotY: 0.14, rotZ: -0.04, lid: 0, screen: 0, shadow: 1, camY: 0.5, lookY: 0.35 },
  bombed: { x: 0, fit: 1, y: 0.05, enter: 0, rotX: 1.3, rotY: -0.1, rotZ: 0.03, lid: 0, screen: 0, shadow: 1, camY: 0.5, lookY: 0.35 },
  // `fit` pulls the camera back for wide poses (the open laptop in 3/4 view), mostly on portrait screens.
  open: { x: -0.3, y: -1.16, enter: 0, fit: 1.3, rotX: 0.05, rotY: -0.5, rotZ: 0, lid: -1.9, screen: 1, shadow: 1, camY: 0.75, lookY: -0.25 },
};

// Deterministic random so the sticker layout is the same on every visit.
function mulberry32(seed) {
  return () => {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Where the stickers land on the lid (x across, z front-to-back, lid centred on 0,0).
// The centre is left for the logo; later stickers overlap its edges, like a real sticker bomb.
function layout(count, rand) {
  const spots = [
    [-1.05, -0.62], [1.02, 0.6], [-1.08, 0.62], [1.06, -0.6], [0.02, -0.74], [-0.02, 0.76],
    [-0.4, -0.62], [0.42, 0.62], [-1.12, 0.0], [1.12, 0.02], [0.44, -0.66], [-0.46, 0.66],
    [-0.74, 0.3], [0.76, -0.3],
  ];
  const big = count <= 9; // fewer stickers on mobile, so make each one bigger
  const out = [];
  for (let i = 0; i < count; i++) {
    const [x, z] = spots[i % spots.length];
    out.push({
      x: x + (rand() - 0.5) * 0.14,
      z: z + (rand() - 0.5) * 0.12,
      size: (big ? 0.98 : 0.8) + (rand() - 0.5) * 0.16,
      spin: THREE.MathUtils.degToRad(-15 + rand() * 30),
      tiltX: (rand() - 0.5) * 1.1,
      tiltZ: (rand() - 0.5) * 1.1,
      driftX: (rand() - 0.5) * 0.5,
      driftZ: (rand() - 0.5) * 0.4,
    });
  }
  return out;
}

function roundedRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function blobShadowTexture() {
  const c = document.createElement('canvas');
  c.width = 256;
  c.height = 256;
  const ctx = c.getContext('2d');
  ctx.filter = 'blur(18px)';
  ctx.fillStyle = '#000';
  roundedRectPath(ctx, 48, 58, 160, 140, 26);
  ctx.fill();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.decoding = 'async';
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Could not load ${url}`));
    img.src = url;
  });
}

// Draw any image (SVG or bitmap) at w x h, scaled to fit maxSize, and wrap it as a texture.
function imageTexture(img, w, h, maxSize, renderer) {
  const scale = Math.min(1, maxSize / Math.max(w, h));
  const c = document.createElement('canvas');
  c.width = Math.max(1, Math.round(w * scale));
  c.height = Math.max(1, Math.round(h * scale));
  c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  return tex;
}

export function createLaptop(canvas, { mobile, stickers, logo }) {
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ canvas, antialias: !mobile, alpha: true, powerPreference: 'high-performance' });
  } catch (err) {
    console.warn('[glood] WebGL unavailable:', err.message);
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.5 : 2));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  const envScene = new RoomEnvironment();
  scene.environment = pmrem.fromScene(envScene, 0.04).texture;
  envScene.traverse((o) => { o.geometry?.dispose(); o.material?.dispose?.(); });
  pmrem.dispose();

  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 60);
  const key = new THREE.DirectionalLight(0xfff4e6, 1.6);
  key.position.set(3, 6, 5);
  const rim = new THREE.DirectionalLight(0xcfe8ff, 1.1);
  rim.position.set(-5, 3, -4);
  scene.add(key, rim, new THREE.HemisphereLight(0xffffff, 0x8a5a10, 0.35));

  // ---------- materials ----------
  const aluminium = new THREE.MeshPhysicalMaterial({ color: 0x3f4248, metalness: 0.78, roughness: 0.54, envMapIntensity: 0.7 });
  const keyMat = new THREE.MeshStandardMaterial({ color: 0x18191b, roughness: 0.62, metalness: 0.1 });
  const wellMat = new THREE.MeshStandardMaterial({ color: 0x232427, roughness: 0.75, metalness: 0.3 });
  const padMat = new THREE.MeshPhysicalMaterial({ color: 0x55585e, metalness: 0.6, roughness: 0.28 });
  const bezelMat = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.18, metalness: 0.0 });

  // ---------- laptop ----------
  const root = new THREE.Group();   // position + rotation from the scroll story
  const body = new THREE.Group();   // offset so rotations pivot around the closed laptop's centre
  body.position.y = -(BASE_H + LID_H) / 2;
  root.add(body);
  scene.add(root);

  const base = new THREE.Mesh(new RoundedBoxGeometry(W, BASE_H, D, 4, 0.045), aluminium);
  base.position.y = BASE_H / 2;
  body.add(base);

  const well = new THREE.Mesh(new THREE.PlaneGeometry(W * 0.88, D * 0.46), wellMat);
  well.rotation.x = -Math.PI / 2;
  well.position.set(0, BASE_H + 0.001, -D * 0.12);
  body.add(well);

  const cols = 14;
  const rows = 5;
  const pitch = (W * 0.86) / cols;
  const keyGeo = new RoundedBoxGeometry(pitch * 0.84, 0.022, pitch * 0.8, 2, 0.012);
  const keys = new THREE.InstancedMesh(keyGeo, keyMat, cols * rows - 6); // minus the six keys the space bar replaces
  const m = new THREE.Matrix4();
  let k = 0;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (r === rows - 1 && c >= 4 && c <= 9) continue; // space bar goes here
      const x = (c - (cols - 1) / 2) * pitch;
      const z = -D * 0.12 + (r - (rows - 1) / 2) * pitch;
      keys.setMatrixAt(k++, m.makeTranslation(x, BASE_H + 0.012, z));
    }
  }
  body.add(keys);
  const space = new THREE.Mesh(new RoundedBoxGeometry(pitch * 5.84, 0.022, pitch * 0.8, 2, 0.012), keyMat);
  space.position.set(0, BASE_H + 0.012, -D * 0.12 + 2 * pitch);
  body.add(space);

  const pad = new THREE.Mesh(new RoundedBoxGeometry(1.05, 0.006, 0.6, 2, 0.02), padMat);
  pad.position.set(0, BASE_H, D * 0.3);
  body.add(pad);

  // Lid hinges at the back edge of the base.
  const lidPivot = new THREE.Group();
  lidPivot.position.set(0, BASE_H + 0.002, -D / 2);
  body.add(lidPivot);
  const lid = new THREE.Mesh(new RoundedBoxGeometry(W, LID_H, D, 4, 0.035), aluminium);
  lid.position.set(0, LID_H / 2, D / 2);
  lidPivot.add(lid);

  // Screen on the underside of the lid.
  const bezel = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.07, D - 0.07), bezelMat);
  bezel.rotation.x = Math.PI / 2;
  bezel.position.set(0, -0.001, D / 2);
  lidPivot.add(bezel);
  const screenCanvas = document.createElement('canvas');
  screenCanvas.width = mobile ? 768 : 1280;
  screenCanvas.height = Math.round(screenCanvas.width * ((D - 0.3) / (W - 0.2)));
  const screenTex = new THREE.CanvasTexture(screenCanvas);
  screenTex.colorSpace = THREE.SRGBColorSpace;
  const screenMat = new THREE.MeshBasicMaterial({ map: screenTex, color: 0x000000, toneMapped: false });
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(W - 0.2, D - 0.3), screenMat);
  // Faces out of the lid underside with the image top toward the lid's front edge, so it reads
  // upright once the lid is open. Offset away from the hinge to leave a chin.
  screen.rotation.x = Math.PI / 2;
  screen.position.set(0, -0.002, D / 2 + 0.04);
  lidPivot.add(screen);

  // Sticker layer sits on the lid's top surface, centred on the lid.
  const stickerLayer = new THREE.Group();
  stickerLayer.position.set(0, LID_H + 0.001, D / 2);
  lidPivot.add(stickerLayer);

  // Soft floor shadow that follows the laptop.
  const shadowTex = blobShadowTexture();
  const shadowMat = new THREE.MeshBasicMaterial({ map: shadowTex, color: 0x5c2c00, transparent: true, opacity: 0.5, depthWrite: false });
  const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), shadowMat);
  shadow.rotation.x = -Math.PI / 2;
  shadow.renderOrder = -1;
  scene.add(shadow);

  // ---------- stickers ----------
  const rand = mulberry32(0x61007d);
  const spots = layout(stickers.length, rand);
  const plane = new THREE.PlaneGeometry(1, 1);
  plane.rotateX(-Math.PI / 2); // lie flat, facing up out of the lid

  function makeSlot(def, spot, index) {
    const holder = new THREE.Group();
    // Unlit and not tone mapped so the print colours match the 2D art exactly. applyState() dims them
    // a little as the lid turns away from the key light, which is enough to sit them in the scene.
    const mat = new THREE.MeshBasicMaterial({
      transparent: true, depthWrite: false, toneMapped: false,
      polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2,
    });
    const mesh = new THREE.Mesh(plane, mat);
    mesh.renderOrder = 10 + index * 2;
    const shadowMatS = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0, depthWrite: false });
    const drop = new THREE.Mesh(plane, shadowMatS);
    drop.renderOrder = 9 + index * 2;
    drop.visible = false;
    holder.add(mesh);
    stickerLayer.add(holder, drop);
    const slot = {
      def, spot, holder, mesh, drop, index, aspect: def.aspect || 1,
      // animated by the story timeline
      h: 0, scale: 1, tilt: 0, alpha: 0,
    };
    setSlotSize(slot);
    return slot;
  }

  // Size the plane to the sticker's aspect ratio and keep the rotated sticker inside the lid edges.
  function setSlotSize(slot) {
    const { spot } = slot;
    const w = slot.aspect >= 1 ? spot.size : spot.size * slot.aspect;
    const h = slot.aspect >= 1 ? spot.size / slot.aspect : spot.size;
    slot.mesh.scale.set(w, 1, h);
    slot.drop.scale.set(w, 1, h);
    const c = Math.abs(Math.cos(spot.spin));
    const s = Math.abs(Math.sin(spot.spin));
    const halfX = (w * c + h * s) / 2;
    const halfZ = (w * s + h * c) / 2;
    const maxX = Math.max(0, W / 2 - 0.05 - halfX);
    const maxZ = Math.max(0, D / 2 - 0.05 - halfZ);
    spot.cx = THREE.MathUtils.clamp(spot.x, -maxX, maxX);
    spot.cz = THREE.MathUtils.clamp(spot.z, -maxZ, maxZ);
  }

  const logoSpot = { x: -0.02, z: 0.02, size: LOGO_WIDTH, spin: THREE.MathUtils.degToRad(-6), tiltX: 0.4, tiltZ: -0.3, driftX: 0, driftZ: 0 };
  const slots = [makeSlot(logo, logoSpot, 0), ...stickers.map((s, i) => makeSlot(s, spots[i], i + 1))];

  const texSize = mobile ? 384 : 768;
  const loaded = Promise.all(slots.map(async (slot) => {
    try {
      const img = await loadImage(slot.def.url);
      // An SVG with only a viewBox can report a 0x0 natural size; fall back to the manifest's size.
      const w = img.naturalWidth || slot.def.width || 512;
      const h = img.naturalHeight || slot.def.height || Math.round(w / (slot.def.aspect || 1));
      slot.image = img;
      slot.aspect = w / h;
      setSlotSize(slot);
      slot.mesh.material.map = imageTexture(img, w, h, texSize, renderer);
      slot.drop.material.map = slot.mesh.material.map;
      slot.mesh.material.needsUpdate = true;
      slot.drop.material.needsUpdate = true;
    } catch (err) {
      // A missing sticker just leaves a gap on the lid; the rest of the story still runs.
      console.warn(`[glood] ${err.message}`);
    }
  })).then(() => {
    drawScreen();
    api.render();
  });

  // Laptop screen: a mini version of the sticker gallery.
  function drawScreen() {
    const ctx = screenCanvas.getContext('2d');
    const cw = screenCanvas.width;
    const ch = screenCanvas.height;
    ctx.fillStyle = '#fff4dc';
    ctx.fillRect(0, 0, cw, ch);
    const bar = ch * 0.16;
    ctx.fillStyle = '#ffa905';
    ctx.fillRect(0, 0, cw, bar);
    ctx.fillStyle = '#111';
    ctx.fillRect(0, bar - 4, cw, 4);
    const logoSlot = slots[0];
    if (logoSlot.image) {
      const lh = bar * 0.8;
      ctx.drawImage(logoSlot.image, cw * 0.03, bar * 0.1, lh * logoSlot.aspect, lh);
    }
    ctx.fillStyle = '#111';
    ctx.font = `700 ${Math.round(bar * 0.26)}px "Space Grotesk", system-ui, sans-serif`;
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';
    ctx.fillText('STICKERS   DROPS   STORY', cw * 0.96, bar / 2);

    const pool = slots.slice(1).filter((s) => s.image);
    const gcols = 5;
    const grows = 2;
    const pad = cw * 0.025;
    const cellW = (cw - pad * (gcols + 1)) / gcols;
    const cellH = (ch - bar - pad * (grows + 1)) / grows;
    for (let i = 0; i < gcols * grows && i < pool.length; i++) {
      const col = i % gcols;
      const row = Math.floor(i / gcols);
      const x = pad + col * (cellW + pad);
      const y = bar + pad + row * (cellH + pad);
      ctx.fillStyle = '#111';
      roundedRectPath(ctx, x + 6, y + 6, cellW, cellH, 16);
      ctx.fill();
      ctx.fillStyle = '#fff';
      roundedRectPath(ctx, x, y, cellW, cellH, 16);
      ctx.fill();
      ctx.lineWidth = 4;
      ctx.strokeStyle = '#111';
      ctx.stroke();
      const s = pool[i];
      const boxW = cellW * 0.8;
      const boxH = cellH * 0.8;
      const fit = Math.min(boxW / s.aspect, boxH);
      const iw = fit * s.aspect;
      const ih = fit;
      ctx.drawImage(s.image, x + (cellW - iw) / 2, y + (cellH - ih) / 2, iw, ih);
    }
    screenTex.needsUpdate = true;
  }

  // ---------- state ----------
  const state = { ...POSES.hero, shake: 0, shakeSeed: 0 };
  let width = 1;
  let height = 1;
  let baseDist = 7;
  let enterDrop = 4;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    // Keep the laptop (plus margin) inside the frame on narrow screens.
    const tanHalf = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2));
    const hfov = 2 * Math.atan(tanHalf * camera.aspect);
    baseDist = Math.max(7.2, (W * (camera.aspect < 1 ? 1.14 : 1.3)) / 2 / Math.tan(hfov / 2));
    enterDrop = baseDist * tanHalf + 2.6; // half the visible height plus the laptop's size
    camera.updateProjectionMatrix();
  }

  const lidNormal = new THREE.Vector3();
  const keyDir = key.position.clone().normalize();

  function applyState() {
    root.position.set(state.x, state.y - state.enter * enterDrop, 0);
    root.rotation.set(state.rotX, state.rotY, state.rotZ, 'YXZ');
    lidPivot.rotation.x = state.lid;
    screenMat.color.setScalar(state.screen);
    lidPivot.updateWorldMatrix(true, false);
    lidNormal.set(0, 1, 0).transformDirection(lidPivot.matrixWorld);
    const stickerLight = 0.8 + 0.2 * Math.max(0, lidNormal.dot(keyDir));

    const sx = Math.sin(state.shakeSeed * 12.9898) * 0.06;
    const sy = Math.cos(state.shakeSeed * 78.233) * 0.05;
    const fit = camera.aspect < 1 ? state.fit : 1 + (state.fit - 1) * 0.25;
    camera.position.set(sx * state.shake, state.camY + sy * state.shake, baseDist * fit);
    camera.lookAt(0, state.lookY, 0);

    for (const slot of slots) {
      const { spot } = slot;
      const visible = slot.alpha > 0.001 && Boolean(slot.mesh.material.map);
      slot.holder.visible = visible;
      slot.drop.visible = visible && slot.h > 0.01;
      if (!visible) continue;
      const lift = slot.h / FLY_HEIGHT;
      slot.holder.position.set(spot.cx + spot.driftX * lift, 0.002 + slot.index * 0.0004 + slot.h, spot.cz + spot.driftZ * lift);
      slot.holder.rotation.set(spot.tiltX * lift, spot.spin + spot.tiltZ * lift * 0.6, spot.tiltZ * lift);
      slot.holder.scale.setScalar(slot.scale);
      slot.mesh.material.opacity = slot.alpha;
      slot.mesh.material.color.setScalar(stickerLight);
      // A soft shadow on the lid that tightens as the sticker comes in to land.
      slot.drop.position.set(spot.cx + 0.05 + lift * 0.3, 0.0018 + slot.index * 0.0004, spot.cz + 0.06 + lift * 0.2);
      slot.drop.rotation.set(0, spot.spin, 0);
      slot.drop.scale.set(slot.mesh.scale.x * (1 + lift * 0.5), 1, slot.mesh.scale.z * (1 + lift * 0.5));
      slot.drop.material.opacity = 0.2 * Math.min(1, lift * 3) * (1 - lift) * slot.alpha;
    }

    // Floor shadow: footprint shrinks as the laptop tilts up, fades as it lifts off the floor.
    const tiltCos = Math.abs(Math.cos(state.rotX));
    const openness = Math.min(1, Math.abs(state.lid) / 1.9);
    const lowest = root.position.y - 0.1 - (D / 2) * Math.sin(Math.abs(state.rotX));
    const gap = Math.max(0, lowest - FLOOR_Y);
    const spread = 1 + gap * 0.35;
    shadow.position.set(state.x, FLOOR_Y, -openness * 0.35);
    shadow.rotation.z = -state.rotY;
    shadow.scale.set(W * 1.55 * spread, (D * tiltCos + 0.35 + openness * 0.5) * 1.6 * spread, 1);
    shadowMat.opacity = 0.48 * state.shadow * Math.max(0, 1 - gap / 3.2);
  }

  const api = {
    state,
    slots,
    loaded,
    FLY_HEIGHT,
    resize() { resize(); api.render(); },
    render() {
      applyState();
      renderer.render(scene, camera);
    },
    // Screen-space box (CSS px, relative to the canvas) of a sticker slot as it rests on the lid in `pose`.
    projectSlot(index, pose) {
      const saved = { ...state };
      const savedSlot = { h: slots[index].h, scale: slots[index].scale, alpha: slots[index].alpha };
      Object.assign(state, pose, { shake: 0 });
      Object.assign(slots[index], { h: 0, scale: 1, alpha: 1 });
      applyState();
      scene.updateMatrixWorld(true);
      camera.updateMatrixWorld(); // the camera is not in the scene graph, so update it directly
      const mesh = slots[index].mesh;
      const pts = [[-0.5, -0.5], [0.5, -0.5], [0.5, 0.5], [-0.5, 0.5]].map(([x, z]) =>
        new THREE.Vector3(x, 0, z).applyMatrix4(mesh.matrixWorld).project(camera));
      const center = new THREE.Vector3(0, 0, 0).applyMatrix4(mesh.matrixWorld).project(camera);
      Object.assign(state, saved);
      Object.assign(slots[index], savedSlot);
      applyState();
      const toPx = (v) => ({ x: (v.x * 0.5 + 0.5) * width, y: (-v.y * 0.5 + 0.5) * height });
      const px = pts.map(toPx);
      const xs = px.map((p) => p.x);
      return { ...toPx(center), width: Math.max(...xs) - Math.min(...xs) };
    },
    dispose() {
      renderer.dispose();
    },
  };

  resize();
  return api;
}

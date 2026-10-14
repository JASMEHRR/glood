// GLOOD pitch deck on the web: a Prezi-style zooming canvas.
//
// The canvas is the website's landing page (the big GLOOD logo, eyes following the mouse). The 13
// content slides sit around it like slapped-on stickers; the camera flies between them, zooming
// out and back in, and each slide's stickers, cards and text slap in on arrival, like the laptop
// story on the home page.
//
// Slide content is not duplicated: it comes from deck/deck.html, the same file the PowerPoint is
// built from (deck/build-deck.mjs), and deck/team.js builds the six team slides for both.

import '@fontsource/lilita-one/400.css';
import '@fontsource/bungee/400.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/500.css';
import '@fontsource/space-grotesk/700.css';
import './present.css';
import { gsap } from 'gsap';
import deckHtml from './deck.html?raw';
import logoSvg from '../src/assets/glood-logo.svg?raw';
import { animateLogoFace } from '../src/js/logo-face.js';
import { motionEnabled } from '../src/js/chrome.js';

const STICKER_URLS = import.meta.glob('../src/stickers/**/*.{webp,svg}', { eager: true, query: '?url', import: 'default' });
const SHOT_URLS = import.meta.glob('./shots/*.webp', { eager: true, query: '?url', import: 'default' });

const POP = '.sticker, .logo-pop, .pfp, .browser, .phone, .card, .chip, .eyebrow, .num';
const SCALE = 0.25; // content slides sit on the canvas at a quarter of the landing page's size
// Where each content slide sits on the canvas: centre x, centre y (landing page = 1600 x 900) and
// tilt. A loop around the landing page, clockwise from the top left.
const SLOTS = [
  [200, -163, -3], [600, -163, 2], [1000, -163, -2], [1400, -163, 3],
  [1850, 112, 2], [1850, 450, -3], [1850, 788, 2],
  [1400, 1063, -2], [1000, 1063, 3], [600, 1063, -2], [200, 1063, 2],
  [-250, 675, -3], [-250, 225, 2],
];
const OVERVIEW = { cx: 800, cy: 450, w: 2500 + 160, h: 1450 + 160, rot: 0 };
const animate = motionEnabled();

const viewport = document.querySelector('.viewport');
const world = document.querySelector('.world');
const counter = document.querySelector('.deck-count');
const notesPanel = document.querySelector('.deck-notes');
const notesBtn = document.querySelector('[data-go="notes"]');

// ---------- build the canvas ----------

const hero = document.createElement('div');
hero.className = 'hero';
hero.innerHTML = `
  <p class="hero-kicker">Die-cut stickers</p>
  <div class="hero-logo">${logoSvg}</div>
  <p class="hero-tag">Stick it everywhere.</p>`;
for (const [file, cls] of [['skill-issue', 's1'], ['chai-over-everything', 's2'], ['lap-1-delulu', 's3'], ['mochi-chan', 's4']]) {
  const img = document.createElement('img');
  img.className = `hero-sticker ${cls}`;
  img.src = STICKER_URLS[`../src/stickers/custom/${file}.svg`];
  img.alt = '';
  hero.append(img);
}
world.append(hero);
const heroSvg = hero.querySelector('svg');
heroSvg.removeAttribute('width');
heroSvg.removeAttribute('height');
heroSvg.setAttribute('aria-label', 'GLOOD');
animateLogoFace(heroSvg, { reducedMotion: !animate });

const source = new DOMParser().parseFromString(deckHtml, 'text/html');
const style = document.createElement('style');
style.textContent = source.querySelector('style').textContent;
document.head.prepend(style); // before present.css, so the deck page can override the print layout

// deck.html points at files for the PowerPoint build; swap in the bundled copies.
const clearLogo = URL.createObjectURL(new Blob([logoSvg.replace(/<rect class="glood-bg"[^>]*\/>/, '')], { type: 'image/svg+xml' }));
for (const img of source.querySelectorAll('img[src]')) {
  const src = img.getAttribute('src');
  const shot = src.match(/^\.\.\/screenshots\/(.+)\.png$/);
  const url = shot ? SHOT_URLS[`./shots/${shot[1]}.webp`] : src.endsWith('glood-logo-clear.svg') ? clearLogo : STICKER_URLS[src];
  if (!url) console.warn(`[deck] missing asset ${src}`);
  img.src = url || '';
  img.alt = '';
  img.decoding = 'async';
}
for (const node of [...source.body.children]) {
  if (node.matches('section.slide, #team')) world.append(node);
}
await import('./team.js'); // builds the team slides in place of #team, and numbers the last slide

const slides = [...world.querySelectorAll('.slide')];
const views = slides.map((slide, i) => {
  slide.setAttribute('aria-roledescription', 'slide');
  slide.setAttribute('aria-label', `${i + 1} of ${slides.length}`);
  if (i === 0) return { cx: 800, cy: 450, w: 1600, h: 900, rot: 0 }; // the cover is the landing page
  const [cx, cy, rot] = SLOTS[(i - 1) % SLOTS.length];
  slide.style.transform = `translate(${cx - 800}px, ${cy - 450}px) rotate(${rot}deg) scale(${SCALE})`;
  return { cx, cy, w: 1600 * SCALE, h: 900 * SCALE, rot };
});

// ---------- entrance animations ----------

function kindOf(el) {
  if (el.matches('.sticker, .logo-pop, .pfp')) return 'sticker';
  if (el.matches('.chip, .eyebrow, .num')) return 'chip';
  if (el.matches('.card, .browser, .phone')) return 'card';
  return 'text';
}

function entrance(slide) {
  const sel = `${POP}, h2, h3, p, ul`;
  // Outermost items only: a card brings its own text and chips with it.
  const items = [...slide.querySelectorAll(sel)].filter((el) => {
    const up = el.parentElement.closest(sel);
    return !up || !slide.contains(up);
  });
  const tl = gsap.timeline({ paused: true });
  let at = 0.1;
  let prevChip = false;
  items.forEach((el, i) => {
    const kind = kindOf(el);
    if (kind === 'chip' && prevChip) at -= 0.06; // a run of chips arrives as a quick wave
    if (kind === 'sticker') {
      // The slap from the home page: big, squash, settle.
      tl.from(el, { opacity: 0, scale: 1.6, rotation: `+=${i % 2 ? 15 : -15}`, duration: 0.28, ease: 'power2.in' }, at)
        .to(el, { keyframes: [{ scale: 0.9, duration: 0.08 }, { scale: 1, duration: 0.2, ease: 'back.out(3)' }] }, at + 0.28);
      at += 0.18;
    } else if (kind === 'card') {
      tl.from(el, { opacity: 0, scale: 0.6, y: 40, duration: 0.5, ease: 'back.out(1.5)' }, at);
      at += 0.12;
    } else if (kind === 'chip') {
      tl.from(el, { opacity: 0, scale: 0, rotation: '-=90', duration: 0.4, ease: 'back.out(2)' }, at);
      at += 0.1;
    } else {
      tl.from(el, { opacity: 0, y: 30, duration: 0.5, ease: 'power3.out' }, at);
      at += 0.1;
    }
    prevChip = kind === 'chip';
  });
  return tl.progress(1); // finished state until the camera arrives
}
const entrances = slides.map(entrance);

// ---------- camera ----------

const cam = { cx: 0, cy: 0, k: 1, rot: 0 };
let current = -1; // -1 = overview
let flight = null;

function fit(view) {
  return Math.min(innerWidth / view.w, innerHeight / view.h);
}

function render() {
  world.style.transform =
    `translate(${innerWidth / 2}px, ${innerHeight / 2}px) rotate(${-cam.rot}deg) scale(${cam.k}) translate(${-cam.cx}px, ${-cam.cy}px)`;
}

function flyTo(view, onArrive) {
  flight?.kill();
  const from = { ...cam };
  const to = { cx: view.cx, cy: view.cy, k: fit(view), rot: view.rot };
  if (!animate) {
    Object.assign(cam, to);
    render();
    onArrive?.();
    return;
  }
  // Prezi-style arc: zoom out far enough to see both ends, travel, zoom back in.
  const dx = Math.abs(to.cx - from.cx);
  const dy = Math.abs(to.cy - from.cy);
  const outK = 0.85 * Math.min(innerWidth / (dx + 1600 * SCALE), innerHeight / (dy + 900 * SCALE));
  const bump = Math.max(0, Math.log(Math.min(from.k, to.k)) - Math.log(outK));
  const lnA = Math.log(from.k);
  const lnB = Math.log(to.k);
  const state = { t: 0 };
  let arrived = false;
  world.style.willChange = 'transform';
  flight = gsap.to(state, {
    t: 1,
    duration: bump > 0.2 ? 1.25 : 0.8,
    ease: 'power2.inOut',
    onUpdate() {
      const t = state.t;
      cam.cx = from.cx + (to.cx - from.cx) * t;
      cam.cy = from.cy + (to.cy - from.cy) * t;
      cam.rot = from.rot + (to.rot - from.rot) * t;
      cam.k = Math.exp(lnA + (lnB - lnA) * t - bump * Math.sin(Math.PI * t));
      render();
      if (!arrived && t > 0.7) {
        arrived = true;
        onArrive?.(); // start the slaps just before the camera settles
      }
    },
    onComplete() {
      world.style.willChange = 'auto'; // re-rasterise sharp at the final zoom
      if (!arrived) onArrive?.();
    },
  });
}

function go(i) {
  i = Math.max(-1, Math.min(slides.length - 1, i));
  if (i === current) return;
  entrances.forEach((tl) => tl.progress(1));
  current = i;
  document.body.classList.toggle('is-overview', i < 0);
  counter.textContent = i < 0 ? `Overview` : `${i + 1} / ${slides.length}`;
  slides.forEach((s, n) => s.toggleAttribute('aria-current', n === i));
  history.replaceState(null, '', i < 0 ? '#overview' : `#${i + 1}`);
  showNotes();
  flyTo(i < 0 ? OVERVIEW : views[i], () => {
    if (i >= 0 && animate) entrances[i].restart();
  });
}

// ---------- controls ----------

function showNotes() {
  notesPanel.textContent = current >= 0 ? slides[current].dataset.notes || '' : 'Pick a slide to see its notes.';
}
function toggleNotes() {
  notesPanel.hidden = !notesPanel.hidden;
  notesBtn.setAttribute('aria-pressed', String(!notesPanel.hidden));
}
function toggleFull() {
  if (document.fullscreenElement) document.exitFullscreen();
  else document.documentElement.requestFullscreen?.().catch(() => {});
}
const next = () => go(current < 0 ? 0 : current + 1);
const prev = () => go(current <= 0 ? 0 : current - 1);

document.querySelector('.deck-bar').addEventListener('click', (e) => {
  const action = e.target.closest('[data-go]')?.dataset.go;
  ({ prev, next, overview: () => go(current < 0 ? 0 : -1), notes: toggleNotes, full: toggleFull })[action]?.();
});

addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return;
  const key = e.key.toLowerCase();
  if (['arrowright', 'arrowdown', 'pagedown', ' ', 'enter'].includes(key)) next();
  else if (['arrowleft', 'arrowup', 'pageup', 'backspace'].includes(key)) prev();
  else if (key === 'home') go(0);
  else if (key === 'end') go(slides.length - 1);
  else if (key === 'o' || (key === 'escape' && !document.fullscreenElement)) go(current < 0 ? 0 : -1);
  else if (key === 'n') toggleNotes();
  else if (key === 'f') toggleFull();
  else return;
  e.preventDefault();
});

// Click: in the overview, open the slide you clicked; on a slide, move on. Swipe on touch screens.
let down = null;
viewport.addEventListener('pointerdown', (e) => {
  down = { x: e.clientX, y: e.clientY };
});
viewport.addEventListener('pointerup', (e) => {
  if (!down) return;
  const dx = e.clientX - down.x;
  const moved = Math.hypot(dx, e.clientY - down.y);
  down = null;
  if (moved > 50 && Math.abs(dx) > 50) return dx < 0 ? next() : prev();
  if (moved > 10) return;
  if (current < 0) {
    const hit = e.target.closest('.slide');
    go(hit ? slides.indexOf(hit) : 0);
  } else next();
});

addEventListener('resize', () => {
  flight?.kill();
  const view = current < 0 ? OVERVIEW : views[current];
  Object.assign(cam, { cx: view.cx, cy: view.cy, k: fit(view), rot: view.rot });
  render();
});

// The control bar fades away while presenting and comes back when the mouse moves.
let idle;
addEventListener('pointermove', () => {
  document.body.classList.remove('is-idle');
  clearTimeout(idle);
  idle = setTimeout(() => document.body.classList.add('is-idle'), 2500);
});

// Decode every picture up front so the first flight past them does not stutter.
await Promise.all([...world.querySelectorAll('img')].map((img) => img.decode().catch(() => {})));

// Start on the overview, then fly to the slide in the address (or the cover).
const startAt = location.hash === '#overview' ? -1 : Math.max(1, Number(location.hash.slice(1)) || 1) - 1;
Object.assign(cam, { ...OVERVIEW, k: fit(OVERVIEW) });
render();
current = -2; // force the first go() to run
go(startAt);

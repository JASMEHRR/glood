// Generates the original GLOOD sticker designs as SVG files.
//
//   npm run stickers
//
// Output: src/stickers/custom/<slug>.svg and src/stickers/custom/custom-stickers.json
//
// Style rules shared by every design: flat bold colours, thick black outlines, a white die-cut
// border that follows the artwork, and a thin dark cut edge. All text is converted to outlines
// (Bungee / Lilita One, SIL Open Font License) so the files render identically as <img> tags
// and as WebGL textures, where web fonts are not available.
//
// Each file is first drawn on a generous canvas, then Chromium measures the die-cut shape and
// the viewBox is cropped tight around it. Chromium also measures `peelInset` (how far the artwork
// sits in from the bottom-right corner) so the gallery's peel hover folds at the sticker's edge.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import opentype from 'opentype.js';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'src', 'stickers', 'custom');

const C = {
  orange: '#ffa905',
  red: '#e10b19',
  crimson: '#e10b37',
  cyan: '#00bbd1',
  ink: '#111111',
  white: '#ffffff',
  yellow: '#ffd400',
  pink: '#ff8fc7',
  green: '#3ddc84',
  purple: '#8a6bff',
  cream: '#fff1d6',
  skin: '#ffe0c2',
  grey: '#cfd3d6',
  chai: '#c8742b',
  soil: '#8b5a2b',
};

const SW = 10;       // default black outline width
const BORDER = 20;   // white die-cut border beyond the black outline
const EDGE = 6;      // thin dark cut line around the white border

// ---------- tiny SVG builder ----------
// Every drawable returns { art, geom }. `geom(extra)` is the bare geometry used to build the
// die-cut layers: it is stroked with (outline width + extra) so the border follows the art.

const attrs = (o) => Object.entries(o).filter(([, v]) => v !== undefined && v !== null)
  .map(([k, v]) => `${k}="${v}"`).join(' ');

function shape(tag, geo, { fill = C.white, stroke = C.ink, sw = SW, cut = true, lineOnly = false, extra = {} } = {}) {
  const paint = { fill: lineOnly ? 'none' : fill, stroke, 'stroke-width': stroke === 'none' ? undefined : sw,
    'stroke-linejoin': 'round', 'stroke-linecap': 'round', ...extra };
  return {
    art: `<${tag} ${attrs({ ...geo, ...paint })}/>`,
    geom: (grow) => (cut ? `<${tag} ${attrs({ ...geo, fill: lineOnly ? 'none' : undefined, 'stroke-width': (stroke === 'none' ? 0 : sw) + grow })}/>` : ''),
  };
}
const P = (d, o) => shape('path', { d }, o);
const circle = (cx, cy, r, o) => shape('circle', { cx, cy, r }, o);
const ellipse = (cx, cy, rx, ry, o) => shape('ellipse', { cx, cy, rx, ry }, o);
const rect = (x, y, width, height, rx, o) => shape('rect', { x, y, width, height, rx }, o);

function group(transform, children) {
  return {
    art: `<g transform="${transform}">${children.map((c) => c.art).join('')}</g>`,
    geom: (grow) => `<g transform="${transform}">${children.map((c) => c.geom(grow)).join('')}</g>`,
  };
}

let FONTS;
async function loadFonts() {
  const load = async (rel) => {
    const buf = await readFile(path.join(ROOT, 'node_modules', rel));
    return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
  };
  FONTS = {
    bungee: await load('@fontsource/bungee/files/bungee-latin-400-normal.woff'),
    lilita: await load('@fontsource/lilita-one/files/lilita-one-latin-400-normal.woff'),
  };
}

// opentype.js 2.0's Path.toPathData() can emit "NaN" after getBoundingBox() has been called,
// so glyph commands are serialised here instead.
function commandsToD(commands) {
  const n = (v) => Math.round(v * 10) / 10;
  return commands.map((c) => {
    switch (c.type) {
      case 'M': case 'L': return `${c.type}${n(c.x)} ${n(c.y)}`;
      case 'Q': return `Q${n(c.x1)} ${n(c.y1)} ${n(c.x)} ${n(c.y)}`;
      case 'C': return `C${n(c.x1)} ${n(c.y1)} ${n(c.x2)} ${n(c.y2)} ${n(c.x)} ${n(c.y)}`;
      case 'Z': return 'Z';
      default: throw new Error(`Unknown path command ${c.type}`);
    }
  }).join('');
}

// Text converted to a path, centred on (x, y) by its ink bounds.
function text(str, { font = 'lilita', size, x = 300, y, fill = C.white, sw = 16, rotate = 0, cut = true }) {
  const f = FONTS[font];
  for (const ch of str) {
    if (ch !== ' ' && f.charToGlyphIndex(ch) === 0) throw new Error(`Font ${font} has no glyph for "${ch}" in "${str}"`);
  }
  const bb = f.getPath(str, 0, 0, size).getBoundingBox();
  const dx = x - (bb.x1 + bb.x2) / 2;
  const dy = y - (bb.y1 + bb.y2) / 2;
  const d = commandsToD(f.getPath(str, dx, dy, size).commands);
  const node = P(d, { fill, sw, cut, extra: { 'paint-order': 'stroke' } });
  return rotate ? group(`rotate(${rotate} ${x} ${y})`, [node]) : node;
}

function star(cx, cy, rOuter, rInner, points, o) {
  const pts = [];
  for (let i = 0; i < points * 2; i++) {
    const r = i % 2 ? rInner : rOuter;
    const a = (Math.PI * i) / points - Math.PI / 2;
    pts.push(`${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`);
  }
  return P(`M${pts.join(' L')} Z`, o);
}

function sparkle(cx, cy, r, fill = C.yellow) {
  const k = r * 0.28;
  return P(`M${cx},${cy - r} Q${cx + k},${cy - k} ${cx + r},${cy} Q${cx + k},${cy + k} ${cx},${cy + r} ` +
    `Q${cx - k},${cy + k} ${cx - r},${cy} Q${cx - k},${cy - k} ${cx},${cy - r} Z`, { fill, sw: 7 });
}

function heart(cx, cy, s, o) {
  return P(`M${cx},${cy + s * 0.9} C${cx - s * 1.6},${cy - s * 0.1} ${cx - s * 0.9},${cy - s * 1.25} ${cx},${cy - s * 0.45} ` +
    `C${cx + s * 0.9},${cy - s * 1.25} ${cx + s * 1.6},${cy - s * 0.1} ${cx},${cy + s * 0.9} Z`, o);
}

// ---------- the designs ----------

const DESIGNS = [
  {
    slug: 'lap-1-delulu', title: 'Lap 1 Delulu', category: 'racing',
    defs: `<pattern id="lap-1-delulu-chk" width="56" height="56" patternUnits="userSpaceOnUse" patternTransform="rotate(-8)">` +
      `<rect width="56" height="56" fill="#fff"/><rect width="28" height="28" fill="#111"/><rect x="28" y="28" width="28" height="28" fill="#111"/></pattern>`,
    draw: () => [
      // flag behind the helmet
      P('M108,440 L150,120', { sw: 14, fill: 'none', lineOnly: true }),
      P('M148,132 C205,104 248,158 312,128 L326,258 C262,288 220,236 160,262 Z', { fill: 'url(#lap-1-delulu-chk)' }),
      // helmet
      P('M190,330 C185,215 265,150 365,152 C455,154 515,215 520,300 L522,352 C522,372 508,384 488,384 L236,384 C208,384 192,362 190,330 Z', { fill: C.red }),
      P('M200,302 C205,226 268,180 348,172 L354,202 C290,208 240,246 234,304 Z', { fill: C.yellow, sw: 8 }),
      P('M355,212 C425,208 482,238 505,286 C510,300 502,312 488,312 L372,312 C345,312 332,292 336,262 C339,232 342,214 355,212 Z', { fill: C.cyan }),
      P('M380,234 C410,230 440,238 462,254', { stroke: C.white, sw: 10, lineOnly: true, cut: false }),
      P('M192,346 L522,346 L522,352 C522,372 508,384 488,384 L236,384 C212,384 196,368 192,346 Z', { fill: C.ink, sw: 8 }),
      circle(268, 318, 36, { fill: C.white, sw: 8 }),
      text('1', { font: 'bungee', size: 50, x: 268, y: 318, fill: C.ink, sw: 0, cut: false }),
      // words
      text('LAP 1', { font: 'bungee', size: 84, x: 318, y: 78, fill: C.yellow, rotate: -4 }),
      group('rotate(-4 300 460)', [
        rect(70, 410, 460, 104, 22, { fill: C.yellow }),
        text('DELULU', { font: 'bungee', size: 80, x: 300, y: 462, fill: C.red, sw: 14 }),
      ]),
    ],
  },
  {
    slug: 'mochi-chan', title: 'Mochi-chan', category: 'anime',
    draw: () => [
      sparkle(500, 120, 34), sparkle(96, 330, 24, C.pink), sparkle(520, 420, 20, C.cyan),
      // body
      P('M205,470 C205,410 245,385 300,385 C355,385 395,410 395,470 L395,520 C395,540 382,552 362,552 L238,552 C218,552 205,540 205,520 Z', { fill: C.cyan }),
      P('M282,398 L276,446 M318,398 L324,446', { stroke: C.white, sw: 7, lineOnly: true, cut: false }),
      // hood with cat ears
      P('M150,225 L160,92 L262,150 Z', { fill: C.cyan }),
      P('M450,225 L440,92 L338,150 Z', { fill: C.cyan }),
      P('M168,180 L173,124 L220,152 Z', { fill: C.pink, sw: 6 }),
      P('M432,180 L427,124 L380,152 Z', { fill: C.pink, sw: 6 }),
      circle(300, 272, 168, { fill: C.cyan }),
      ellipse(300, 290, 128, 116, { fill: C.skin }),
      // hair fringe
      P('M176,268 C170,196 226,164 300,164 C374,164 430,196 424,268 L402,234 L382,264 L356,224 L332,258 L300,214 L270,258 L244,224 L220,264 L198,234 Z', { fill: C.orange }),
      // eyes
      ellipse(250, 304, 31, 40, { fill: C.ink, sw: 6 }),
      ellipse(350, 304, 31, 40, { fill: C.ink, sw: 6 }),
      ellipse(250, 322, 21, 17, { fill: C.purple, stroke: 'none', cut: false }),
      ellipse(350, 322, 21, 17, { fill: C.purple, stroke: 'none', cut: false }),
      circle(239, 290, 11, { fill: C.white, stroke: 'none', cut: false }),
      circle(339, 290, 11, { fill: C.white, stroke: 'none', cut: false }),
      circle(260, 324, 5, { fill: C.white, stroke: 'none', cut: false }),
      circle(360, 324, 5, { fill: C.white, stroke: 'none', cut: false }),
      ellipse(204, 348, 22, 12, { fill: C.pink, stroke: 'none', cut: false }),
      ellipse(396, 348, 22, 12, { fill: C.pink, stroke: 'none', cut: false }),
      P('M280,350 Q290,364 300,350 Q310,364 320,350', { sw: 7, lineOnly: true, cut: false }),
      text('MOCHI', { font: 'lilita', size: 58, x: 300, y: 488, fill: C.white, sw: 12 }),
    ],
  },
  {
    slug: 'one-more-game', title: 'One More Game', category: 'gaming',
    draw: () => [
      text('ONE MORE', { font: 'bungee', size: 70, x: 300, y: 150, fill: C.yellow, rotate: -3 }),
      P('M130,300 C130,240 170,215 220,215 L380,215 C430,215 470,240 470,300 L488,395 C496,440 468,470 432,462 C405,456 392,430 372,410 L228,410 C208,430 195,456 168,462 C132,470 104,440 112,395 Z', { fill: C.purple }),
      P('M168,262 C180,246 198,240 220,240', { stroke: C.white, sw: 8, lineOnly: true, cut: false }),
      P('M203,262 h24 a6 6 0 0 1 6 6 v20 h20 a6 6 0 0 1 6 6 v24 a6 6 0 0 1 -6 6 h-20 v20 a6 6 0 0 1 -6 6 h-24 a6 6 0 0 1 -6 -6 v-20 h-20 a6 6 0 0 1 -6 -6 v-24 a6 6 0 0 1 6 -6 h20 v-20 a6 6 0 0 1 6 -6 z', { fill: C.ink, sw: 6 }),
      circle(392, 266, 18, { fill: C.yellow, sw: 7 }),
      circle(428, 302, 18, { fill: C.red, sw: 7 }),
      circle(392, 338, 18, { fill: C.green, sw: 7 }),
      circle(356, 302, 18, { fill: C.cyan, sw: 7 }),
      circle(262, 370, 27, { fill: C.ink, sw: 6 }),
      circle(338, 370, 27, { fill: C.ink, sw: 6 }),
      circle(262, 370, 12, { fill: '#444', stroke: 'none', cut: false }),
      circle(338, 370, 12, { fill: '#444', stroke: 'none', cut: false }),
      text('GAME', { font: 'bungee', size: 104, x: 300, y: 530, fill: C.red, rotate: 3 }),
    ],
  },
  {
    slug: 'gym-then-biryani', title: 'Gym Then Biryani', category: 'gym',
    draw: () => [
      group('rotate(-3 300 300)', [rect(40, 40, 520, 520, 64, { fill: C.cyan })]),
      text('GYM THEN', { font: 'bungee', size: 66, x: 300, y: 138, fill: C.white }),
      group('rotate(-12 300 290)', [
        rect(150, 276, 300, 30, 10, { fill: C.grey }),
        rect(80, 236, 44, 110, 14, { fill: C.red }),
        rect(118, 206, 52, 170, 16, { fill: C.red }),
        rect(476, 236, 44, 110, 14, { fill: C.red }),
        rect(430, 206, 52, 170, 16, { fill: C.red }),
        P('M240,282 L240,300 M260,282 L260,300 M340,282 L340,300 M360,282 L360,300', { sw: 5, lineOnly: true, cut: false }),
      ]),
      text('BIRYANI', { font: 'lilita', size: 132, x: 300, y: 462, fill: C.orange, sw: 18, rotate: -3 }),
    ],
  },
  {
    slug: 'brb-overthinking', title: 'BRB Overthinking', category: 'memes',
    draw: () => [
      P('M110,120 H490 C530,120 555,145 555,185 V385 C555,425 530,450 490,450 H262 L172,532 L190,450 H110 C70,450 45,425 45,385 V185 C45,145 70,120 110,120 Z', { fill: C.pink }),
      text('BRB', { font: 'bungee', size: 170, x: 300, y: 250, fill: C.white, sw: 20 }),
      group('rotate(-3 300 380)', [
        rect(76, 344, 448, 76, 14, { fill: C.ink }),
        text('OVERTHINKING', { font: 'lilita', size: 60, x: 300, y: 382, fill: C.yellow, sw: 0, cut: false }),
      ]),
      text('?', { font: 'lilita', size: 110, x: 530, y: 92, fill: C.yellow, rotate: 14 }),
      text('?', { font: 'lilita', size: 76, x: 70, y: 100, fill: C.cyan, rotate: -16 }),
    ],
  },
  {
    slug: 'skill-issue', title: 'Skill Issue', category: 'gaming',
    draw: () => [
      heart(230, 120, 30, { fill: C.red, sw: 8 }),
      heart(300, 120, 30, { fill: C.white, sw: 8 }),
      heart(370, 120, 30, { fill: C.white, sw: 8 }),
      group('rotate(-5 300 300)', [
        P('M70,190 H530 A20 20 0 0 1 550,210 V268 A32 32 0 0 0 550,332 V390 A20 20 0 0 1 530,410 H70 A20 20 0 0 1 50,390 V332 A32 32 0 0 0 50,268 V210 A20 20 0 0 1 70,190 Z', { fill: C.red }),
        rect(82, 208, 436, 184, 12, { fill: 'none', stroke: C.yellow, sw: 5, cut: false, extra: { 'stroke-dasharray': '16 12' } }),
        text('SKILL', { font: 'bungee', size: 96, x: 300, y: 256, fill: C.white }),
        text('ISSUE', { font: 'bungee', size: 96, x: 300, y: 348, fill: C.yellow }),
      ]),
    ],
  },
  {
    slug: 'main-character', title: 'Main Character Energy', category: 'anime',
    draw: () => [
      star(300, 300, 272, 222, 16, { fill: C.yellow }),
      text('MAIN', { font: 'lilita', size: 122, x: 300, y: 205, fill: C.crimson, sw: 18 }),
      text('CHARACTER', { font: 'lilita', size: 82, x: 300, y: 303, fill: C.white, sw: 16 }),
      text('ENERGY', { font: 'bungee', size: 70, x: 300, y: 395, fill: C.cyan, sw: 16 }),
      sparkle(452, 150, 22, C.white), sparkle(150, 452, 18, C.white),
    ],
  },
  {
    slug: 'chai-over-everything', title: 'Chai Over Everything', category: 'memes',
    draw: () => [
      text('CHAI >', { font: 'lilita', size: 118, x: 300, y: 84, fill: C.orange, sw: 18, rotate: -4 }),
      P('M262,196 C238,172 282,156 262,128', { sw: 9, lineOnly: true }),
      P('M302,196 C278,172 322,156 302,128', { sw: 9, lineOnly: true }),
      P('M342,196 C318,172 362,156 342,128', { sw: 9, lineOnly: true }),
      P('M212,214 L388,214 L362,466 C360,484 347,494 330,494 L270,494 C253,494 240,484 238,466 Z', { fill: '#dff6ff' }),
      P('M220,290 L380,290 L362,466 C360,484 347,494 330,494 L270,494 C253,494 240,484 238,466 Z', { fill: C.chai, sw: 8 }),
      P('M246,236 L262,470 M300,236 L300,474 M354,236 L338,470', { stroke: C.white, sw: 6, lineOnly: true, cut: false, extra: { opacity: 0.7 } }),
      P('M230,302 C260,316 340,316 370,302', { stroke: '#f1c58f', sw: 7, lineOnly: true, cut: false }),
      group('rotate(-2 300 560)', [
        rect(40, 520, 520, 84, 18, { fill: C.ink }),
        text('EVERYTHING', { font: 'bungee', size: 62, x: 300, y: 562, fill: C.yellow, sw: 0, cut: false }),
      ]),
    ],
  },
  {
    slug: 'protein-over-people', title: 'Protein Over People', category: 'gym',
    draw: () => [
      text('PROTEIN', { font: 'bungee', size: 84, x: 300, y: 84, fill: C.cyan, rotate: -4 }),
      rect(272, 128, 56, 52, 10, { fill: C.ink }),
      rect(214, 170, 172, 58, 16, { fill: C.ink }),
      rect(222, 216, 156, 276, 28, { fill: C.crimson }),
      rect(222, 290, 156, 96, 0, { fill: C.white, sw: 8 }),
      text('WHEY', { font: 'bungee', size: 44, x: 300, y: 338, fill: C.ink, sw: 0, cut: false }),
      P('M236,410 L256,410 M236,432 L250,432 M236,454 L256,454', { stroke: C.white, sw: 6, lineOnly: true, cut: false }),
      P('M242,236 C248,226 258,222 270,222', { stroke: C.white, sw: 7, lineOnly: true, cut: false }),
      text('> PEOPLE', { font: 'lilita', size: 110, x: 300, y: 560, fill: C.yellow, sw: 18, rotate: -3 }),
    ],
  },
  {
    slug: 'pit-stop-snacks', title: 'Pit Stop For Snacks', category: 'racing',
    draw: () => [
      text('PIT STOP', { font: 'bungee', size: 80, x: 300, y: 90, fill: C.white }),
      circle(300, 300, 152, { fill: '#222' }),
      circle(300, 300, 120, { fill: 'none', stroke: C.orange, sw: 12, cut: false }),
      circle(300, 300, 84, { fill: C.grey, sw: 8 }),
      circle(300, 300, 26, { fill: C.ink, sw: 6 }),
      ...[0, 72, 144, 216, 288].map((a) => {
        const r = (a * Math.PI) / 180;
        return circle(300 + 52 * Math.cos(r), 300 + 52 * Math.sin(r), 9, { fill: '#666', sw: 4, cut: false });
      }),
      // donut resting on the tyre
      circle(432, 412, 64, { fill: '#f0b35e' }),
      P('M378,398 C380,362 420,346 452,356 C488,366 500,398 488,428 C472,450 440,440 424,452 C402,466 376,440 378,398 Z', { fill: C.pink, sw: 7 }),
      circle(432, 408, 18, { fill: C.white, sw: 7 }),
      ...[[404, 380, 20], [458, 380, -30], [470, 420, 60], [412, 432, -50], [440, 372, 80]].map(([x, y, a]) =>
        rect(x - 8, y - 3, 16, 6, 3, { fill: [C.yellow, C.cyan, C.white][Math.abs(a) % 3], stroke: 'none', cut: false, extra: { transform: `rotate(${a} ${x} ${y})` } })),
      text('FOR SNACKS', { font: 'lilita', size: 92, x: 300, y: 540, fill: C.pink, sw: 18, rotate: -3 }),
    ],
  },
  {
    slug: 'ramen-mode', title: 'Ramen Mode On', category: 'anime',
    draw: () => [
      P('M340,286 L520,96 L536,110 L358,300 Z', { fill: '#d99a55', sw: 8 }),
      P('M372,292 L548,122 L562,138 L390,306 Z', { fill: '#d99a55', sw: 8 }),
      P('M132,292 C148,250 188,262 204,244 C224,222 258,250 284,232 C310,214 340,246 366,230 C396,214 420,248 450,240 C470,236 482,262 470,292 Z', { fill: '#ffd98a' }),
      P('M180,270 C200,256 220,280 240,266 M290,260 C310,246 330,272 350,258', { sw: 6, lineOnly: true, cut: false }),
      ellipse(392, 262, 44, 30, { fill: C.white, sw: 8 }),
      circle(392, 262, 16, { fill: C.orange, sw: 6 }),
      rect(214, 250, 18, 36, 6, { fill: C.green, sw: 6 }),
      rect(244, 258, 18, 30, 6, { fill: C.green, sw: 6 }),
      P('M110,300 H490 C490,420 405,490 300,490 C195,490 110,420 110,300 Z', { fill: C.red }),
      rect(236, 478, 128, 30, 10, { fill: C.red }),
      rect(96, 284, 408, 34, 17, { fill: C.cream }),
      P('M170,380 C190,366 210,394 230,380 M270,408 C290,394 310,422 330,408 M370,380 C390,366 410,394 430,380', { stroke: C.white, sw: 7, lineOnly: true, cut: false }),
      text('RAMEN MODE', { font: 'bungee', size: 66, x: 300, y: 562, fill: C.white }),
      rect(222, 604, 156, 70, 35, { fill: C.green }),
      circle(342, 639, 26, { fill: C.white, sw: 7 }),
      text('ON', { font: 'bungee', size: 38, x: 272, y: 639, fill: C.white, sw: 10 }),
    ],
  },
  {
    slug: 'touch-grass-later', title: 'Touch Grass Later', category: 'gaming',
    draw: () => [
      text('TOUCH GRASS?', { font: 'lilita', size: 80, x: 300, y: 100, fill: C.white, rotate: -3 }),
      rect(116, 404, 368, 56, 28, { fill: C.soil }),
      P('M146,424 L170,250 L204,380 L234,186 L266,372 L300,158 L332,372 L362,196 L392,380 L428,238 L454,424 Z', { fill: C.green }),
      P('M234,230 L240,300 M300,206 L302,290 M362,240 L358,300', { stroke: '#a8f5c8', sw: 6, lineOnly: true, cut: false }),
      text('LATER.', { font: 'bungee', size: 116, x: 300, y: 540, fill: C.crimson, sw: 18, rotate: 3 }),
    ],
  },
];

// ---------- build ----------

function render(design, viewBox) {
  const parts = design.draw();
  const geom = (grow) => parts.map((p) => p.geom(grow)).join('');
  const outer = 2 * BORDER;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox.join(' ')}" width="${viewBox[2]}" height="${viewBox[3]}" role="img" aria-label="${design.title} sticker">` +
    `<title>${design.title}</title>` +
    (design.defs ? `<defs>${design.defs}</defs>` : '') +
    `<g class="cut-edge" fill="#1b1b1b" stroke="#1b1b1b" stroke-linejoin="round" stroke-linecap="round">${geom(outer + EDGE * 2)}</g>` +
    `<g class="cut" fill="#fff" stroke="#fff" stroke-linejoin="round" stroke-linecap="round">${geom(outer)}</g>` +
    parts.map((p) => p.art).join('') +
    `</svg>\n`;
}

async function main() {
  await loadFonts();
  await mkdir(OUT, { recursive: true });
  const draft = DESIGNS.map((d) => ({ d, svg: render(d, [-200, -200, 1000, 1100]) }));

  // Measure each die-cut shape in Chromium and crop the viewBox to it.
  const browser = await chromium.launch();
  const boxes = [];
  try {
    const page = await browser.newPage();
    for (const { svg } of draft) {
      await page.setContent(`<body style="margin:0">${svg}</body>`);
      const box = await page.evaluate(() => {
        const g = document.querySelector('.cut-edge');
        const b = g.getBBox({ stroke: true });
        return { x: b.x, y: b.y, w: b.width, h: b.height };
      });
      boxes.push(box);
    }
  } finally {
    await browser.close();
  }

  const final = draft.map(({ d }, i) => {
    const b = boxes[i];
    // getBBox ignores stroke width in some engines, so pad by the widest cut stroke.
    const pad = BORDER + EDGE + 16;
    const vb = [Math.floor(b.x - pad), Math.floor(b.y - pad), Math.ceil(b.w + pad * 2), Math.ceil(b.h + pad * 2)];
    return { d, vb, svg: render(d, vb) };
  });

  const insets = await measurePeelInsets(final.map((f) => f.svg));
  const manifest = [];
  for (const [i, { d, vb, svg }] of final.entries()) {
    await writeFile(path.join(OUT, `${d.slug}.svg`), svg);
    manifest.push({ slug: d.slug, title: d.title, category: d.category, file: `${d.slug}.svg`, width: vb[2], height: vb[3], peelInset: insets[i], generated: true });
    console.log(`${d.slug}.svg  ${vb[2]}x${vb[3]}  ${(svg.length / 1024).toFixed(1)} KB  peel inset ${insets[i]}`);
  }
  // Keep hand-made SVGs that were added to the manifest directly (no "generated" flag), see README.md.
  const manifestPath = path.join(OUT, 'custom-stickers.json');
  if (existsSync(manifestPath)) {
    const existing = JSON.parse(await readFile(manifestPath, 'utf8'));
    const generatedSlugs = new Set(manifest.map((m) => m.slug));
    manifest.push(...existing.filter((e) => !e.generated && !generatedSlugs.has(e.slug)));
  }
  await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
}

// Rasterise each SVG and find the opaque pixel furthest along the bottom-right diagonal.
async function measurePeelInsets(svgs) {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.setContent('<body></body>');
    return await page.evaluate(async (list) => {
      const out = [];
      for (const svg of list) {
        const img = new Image();
        img.src = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
        await img.decode();
        const w = img.naturalWidth;
        const h = img.naturalHeight;
        const c = document.createElement('canvas');
        c.width = w;
        c.height = h;
        const ctx = c.getContext('2d', { willReadFrequently: true });
        ctx.drawImage(img, 0, 0);
        const data = ctx.getImageData(0, 0, w, h).data;
        let best = 0;
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            if (data[(y * w + x) * 4 + 3] > 40 && x + y > best) best = x + y;
          }
        }
        out.push(Math.round((((w - 1) + (h - 1) - best) / Math.min(w, h)) * 10000) / 10000);
      }
      return out;
    }, svgs);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

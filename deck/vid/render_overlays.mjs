// Renders the video's graphics to transparent PNGs in deck/vid/work/gfx:
// team avatars (cut from the deck's own team slides), title chips, name cards, the GLOOD logo,
// intro and outro text, and the GLOOD sticker set (SVG originals rasterised; photo stickers are
// used directly from their WebP files by edit.py).
//
//   node deck/vid/render_overlays.mjs

import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { chromium } from 'playwright';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(DIR, '../..');
const OUT = path.join(DIR, 'work', 'gfx');
await mkdir(OUT, { recursive: true });

const CHIPS = [
  [2, 'Our startup'], [3, 'Solution'], [4, 'Our website · glood.vercel.app'], [5, 'How you buy'],
  [6, 'Pricing'], [7, 'Key achievements'],
];
const TEAM = [
  [8, 'JasMehr Singh', 'Founder & CEO', '#e10b19'], [9, 'Prashant Pal', 'Head of Design', '#8a6bff'],
  [10, 'Meenakshi Sharma', 'Marketing Lead', '#ff8fc7'], [11, 'Rishabh Sharma', 'Sales & Customer Lead', '#00bbd1'],
  [12, 'Sanyam', 'Operations Lead', '#3ddc84'], [13, 'Aniket Kumar', 'Finance Lead', '#ffd400'],
];
const SVG_STICKERS = ['skill-issue', 'chai-over-everything', 'lap-1-delulu', 'mochi-chan', 'one-more-game',
  'gym-then-biryani', 'touch-grass-later', 'main-character', 'ramen-mode', 'pit-stop-snacks', 'brb-overthinking',
  'protein-over-people'];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });

// Avatars: the circular profile pictures from the deck's team slides.
await page.goto(pathToFileURL(path.join(ROOT, 'deck', 'deck.html')).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const pfps = page.locator('.pfp');
for (let i = 0; i < 6; i++) await pfps.nth(i).screenshot({ path: path.join(OUT, `avatar-${8 + i}.png`), omitBackground: true });

// Sticker originals, 420 px wide.
for (const s of SVG_STICKERS) {
  const url = pathToFileURL(path.join(ROOT, 'src', 'stickers', 'custom', `${s}.svg`)).href;
  await page.setContent(`<body style="margin:0;background:transparent"><img id="s" src="${url}" style="width:420px;display:block"></body>`);
  await page.waitForFunction(() => document.getElementById('s').complete);
  await page.locator('#s').screenshot({ path: path.join(OUT, `sticker-${s}.png`), omitBackground: true });
}

// Chips, name cards, logo, intro and outro.
const logo = await readFile(path.join(ROOT, 'src', 'assets', 'glood-logo.svg'), 'utf8');
const spec = {
  chips: CHIPS.map(([slide, text]) => ({ slide, text })),
  names: TEAM.map(([slide, name, role, color]) => ({ slide, name, role, color, avatar: pathToFileURL(path.join(OUT, `avatar-${slide}.png`)).href })),
  logo,
};
await page.addInitScript((s) => { window.SPEC = s; }, spec);
await page.goto(pathToFileURL(path.join(DIR, 'overlays.html')).href, { waitUntil: 'networkidle' });
await page.waitForFunction(() => window.READY);
await page.evaluate(() => document.fonts.ready);
const outs = page.locator('[data-out]');
const n = await outs.count();
for (let i = 0; i < n; i++) {
  const el = outs.nth(i);
  const id = await el.getAttribute('data-out');
  // Pad the shot so hard shadows and rotated corners are not clipped.
  const box = await el.boundingBox();
  await page.screenshot({ path: path.join(OUT, `${id}.png`), omitBackground: true, fullPage: true,
    clip: { x: box.x - 24, y: box.y - 24, width: box.width + 48, height: box.height + 48 } });
}
await browser.close();
console.log(`Rendered ${n} graphics, 6 avatars and ${SVG_STICKERS.length} stickers into ${OUT}`);

// Builds the GLOOD deck from deck/deck.html into an editable, animated .pptx.
//
// Layers on every slide, bottom to top:
//   1. Backdrop: the website's landing page (big GLOOD logo), captured from the built site
//   2. Tint: a see-through colour panel so content stays readable (not on the cover)
//   3. Artwork: what is left of the slide design, transparent background, text hidden
//   4. Pop-ups: each sticker, card, screenshot, chip and avatar as its own transparent picture
//   5. Text: every piece of text as an editable PowerPoint text box
// pack_pptx.py assembles the layers; effects.ps1 adds Morph transitions and entrance animations in
// PowerPoint and embeds the fonts (install deck/fonts/*.ttf first).
//
//   npm run build && node deck/build-deck.mjs

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { preview } from 'vite';
import { chromium } from 'playwright';

const DIR = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(DIR, '..');
const OUT = path.join(DIR, 'out');
await mkdir(OUT, { recursive: true });

const POP = '.sticker, .logo-pop, .pfp, .browser, .phone, .card, .chip, .eyebrow, .num';

// The logo SVG carries an orange background rectangle (the site hides it with CSS); the deck needs it
// transparent so it can float over the backdrop.
const logo = await readFile(path.join(ROOT, 'src/assets/glood-logo.svg'), 'utf8');
await writeFile(path.join(OUT, 'glood-logo-clear.svg'), logo.replace(/<rect class="glood-bg"[^>]*\/>/, ''));
const SHADOW_PAD = 16; // room for hard shadows and drop shadows around each pop-up

const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const errors = [];

// ---- 1. Backdrop: the landing page hero of the built site, without the nav and scroll hint ----
const server = await preview({ root: ROOT, preview: { port: 4180 }, logLevel: 'error' });
const site = await browser.newPage({ viewport: { width: 1600, height: 900 }, deviceScaleFactor: 1.5 });
await site.goto(server.resolvedUrls.local[0], { waitUntil: 'networkidle' });
await site.addStyleTag({ content: '.nav, .scroll-hint, .story-progress, .captions, .cursor-ring { display: none !important; }' });
await site.waitForTimeout(2500); // fonts, sticker scatter, eyes settled
const backdrop = path.join(OUT, 'backdrop.png');
await site.screenshot({ path: backdrop });
await site.close();
await server.close();

// ---- 2. The deck ----
const page = await browser.newPage({ viewport: { width: 1700, height: 1000 }, deviceScaleFactor: 1.5 });
page.on('pageerror', (e) => errors.push(e.message));
page.on('requestfailed', (r) => errors.push(`failed: ${r.url()}`));
await page.goto(pathToFileURL(path.join(DIR, 'deck.html')).href, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

const slidesData = await page.evaluate((POP) => {
  const inSvg = (n) => !!n.closest?.('svg');
  const ownText = (el) => [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
  const rotation = (el, slide) => {
    let deg = 0;
    for (let e = el; e && e !== slide; e = e.parentElement) {
      const t = getComputedStyle(e).transform;
      if (t && t !== 'none') {
        const [a, b] = t.match(/matrix\(([^)]+)\)/)[1].split(',').map(Number);
        deg += (Math.atan2(b, a) * 180) / Math.PI;
      }
    }
    return deg;
  };
  return [...document.querySelectorAll('.slide')].map((slide, si) => {
    const sr = slide.getBoundingClientRect();
    const order = new Map([...slide.querySelectorAll('*')].map((el, i) => [el, i]));
    // Pop-ups: outermost matches only (a chip inside a card travels with its card).
    const pops = [...slide.querySelectorAll(POP)].filter((el) => !el.parentElement.closest(POP) || !slide.contains(el.parentElement.closest(POP)));
    pops.forEach((el, i) => el.setAttribute('data-pop', `${si}-${i}`));
    const popOf = (el) => {
      const p = el.closest('[data-pop]');
      return p && slide.contains(p) ? pops.indexOf(p) : -1;
    };

    const all = [...slide.querySelectorAll('*')].filter((el) => !inSvg(el) && ownText(el));
    const blocks = all.filter((el) => getComputedStyle(el).display !== 'inline' || !all.includes(el.parentElement));
    const blockOf = (node) => {
      for (let e = node.parentElement; e; e = e.parentElement) if (blocks.includes(e)) return e;
      return null;
    };
    const texts = blocks.map((el) => {
      const cs = getComputedStyle(el);
      const r = el.getBoundingClientRect();
      const runs = [];
      const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
      for (let n = walker.nextNode(); n; n = walker.nextNode()) {
        if (blockOf(n) !== el || !n.textContent) continue;
        const s = getComputedStyle(n.parentElement);
        let text = n.textContent.replace(/\s+/g, ' ');
        if (s.textTransform === 'uppercase') text = text.toUpperCase();
        runs.push({
          text,
          font: s.fontFamily.split(',')[0].replace(/["']/g, '').trim(),
          size: parseFloat(s.fontSize),
          weight: Number(s.fontWeight),
          color: s.color,
          stroke: parseFloat(s.webkitTextStrokeWidth) || 0,
          shadow: s.textShadow !== 'none' ? s.textShadow : '',
        });
      }
      if (runs.length) {
        runs[0].text = runs[0].text.replace(/^ /, '');
        runs[runs.length - 1].text = runs[runs.length - 1].text.replace(/ $/, '');
      }
      if (cs.display === 'list-item') runs.unshift({ ...runs[0], text: '•  ', weight: 400 });
      const px = (v) => parseFloat(v) || 0;
      const lh = cs.lineHeight === 'normal' ? px(cs.fontSize) * 1.2 : px(cs.lineHeight);
      return {
        order: order.get(el),
        pop: popOf(el),
        cx: r.left + r.width / 2 - sr.left,
        cy: r.top + r.height / 2 - sr.top,
        w: el.offsetWidth,
        h: el.offsetHeight,
        rot: rotation(el, slide),
        pad: [cs.paddingLeft, cs.paddingTop, cs.paddingRight, cs.paddingBottom].map(px),
        border: [cs.borderLeftWidth, cs.borderTopWidth, cs.borderRightWidth, cs.borderBottomWidth].map(px),
        // grid/flex centring (the round icon dots) counts as centred text in PowerPoint
        align: cs.justifyItems === 'center' || cs.justifyContent === 'center' ? 'center' : cs.textAlign,
        lineHeight: lh,
        fontSize: px(cs.fontSize),
        runs,
      };
    });

    return {
      cover: slide.hasAttribute('data-cover'),
      tint: getComputedStyle(slide).backgroundColor,
      notes: slide.getAttribute('data-notes'),
      pops: pops.map((el) => {
        const r = el.getBoundingClientRect();
        const kind = el.matches('.sticker, .logo-pop, .pfp') ? 'sticker' : el.matches('.chip, .eyebrow, .num') ? 'chip' : 'card';
        return { order: order.get(el), kind, x: r.left - sr.left, y: r.top - sr.top, w: r.width, h: r.height };
      }),
      texts,
    };
  });
}, POP);

// Pictures only from here: no text, no slide colour, no dot texture (the backdrop has its own).
await page.addStyleTag({
  content: `
    body { background: transparent !important; }
    .slide { background: transparent !important; }
    .slide::before { display: none !important; }
    .slide *:not(svg *) { color: transparent !important; -webkit-text-stroke-color: transparent !important; text-shadow: none !important; }
    .art-pass [data-pop] { visibility: hidden !important; }
    .solo * { visibility: hidden !important; }
    .solo .on, .solo .on * { visibility: visible !important; }
  `,
});

const slideEls = page.locator('.slide');
const manifest = [];
for (let si = 0; si < slidesData.length; si++) {
  const d = slidesData[si];
  const slide = slideEls.nth(si);
  await slide.scrollIntoViewIfNeeded();
  const art = path.join(OUT, `s${String(si + 1).padStart(2, '0')}-art.png`);
  await page.evaluate(() => document.body.classList.add('art-pass'));
  await slide.screenshot({ path: art, omitBackground: true });
  await page.evaluate(() => document.body.classList.remove('art-pass'));

  const box = await slide.boundingBox();
  const pops = [];
  for (let pi = 0; pi < d.pops.length; pi++) {
    const p = d.pops[pi];
    const x = Math.max(0, p.x - SHADOW_PAD);
    const y = Math.max(0, p.y - SHADOW_PAD);
    const w = Math.min(1600, p.x + p.w + SHADOW_PAD) - x;
    const h = Math.min(900, p.y + p.h + SHADOW_PAD) - y;
    const file = path.join(OUT, `s${String(si + 1).padStart(2, '0')}-pop${String(pi).padStart(2, '0')}.png`);
    await page.evaluate((id) => {
      document.body.classList.add('solo');
      document.querySelector(`[data-pop="${id}"]`).classList.add('on');
    }, `${si}-${pi}`);
    await page.screenshot({ path: file, omitBackground: true, clip: { x: box.x + x, y: box.y + y, width: w, height: h } });
    await page.evaluate((id) => {
      document.body.classList.remove('solo');
      document.querySelector(`[data-pop="${id}"]`).classList.remove('on');
    }, `${si}-${pi}`);
    pops.push({ ...p, image: file, x, y, w, h });
  }
  manifest.push({ ...d, art, pops });
}
await browser.close();
if (errors.length) {
  console.error(errors.join('\n'));
  process.exit(1);
}

const json = path.join(OUT, 'slides.json');
await writeFile(json, JSON.stringify({ backdrop, slides: manifest }, null, 2));
const raw = path.join(OUT, 'deck-raw.pptx');
const plan = path.join(OUT, 'effects.json');
execFileSync('python', ['-I', path.join(DIR, 'pack_pptx.py'), json, raw, plan], { stdio: 'inherit' });
execFileSync('powershell', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', path.join(DIR, 'effects.ps1'),
  raw, plan, path.join(DIR, 'GLOOD_Startup_Presentation.pptx')], { stdio: 'inherit' });

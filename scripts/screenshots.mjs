// Builds nothing: run `npm run build` first. Serves ./dist with `vite preview`, then uses Playwright
// to capture the scroll story and gallery at desktop and mobile sizes into ./screenshots.
//
//   npm run build && npm run shots

import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'screenshots');

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900, mobile: false },
  { name: 'mobile', width: 390, height: 844, mobile: true },
];

// Story progress (0 to 1) for each shot. Timeline units / 100, see src/js/story.js.
const STORY_SHOTS = [
  ['01-hero', 0],
  ['02-logo-landing', 0.2],
  ['03-mid-slap', 0.52],
  ['04-sticker-bombed', 0.82],
  ['05-lid-open', 1],
];

async function main() {
  await mkdir(OUT, { recursive: true });
  const server = await preview({ root: ROOT, preview: { port: 4173, strictPort: false }, logLevel: 'warn' });
  const url = server.resolvedUrls.local[0];
  const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  const problems = [];
  try {
    for (const vp of VIEWPORTS) {
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        deviceScaleFactor: vp.mobile ? 2 : 1,
        isMobile: vp.mobile,
        hasTouch: vp.mobile,
      });
      const page = await context.newPage();
      page.on('console', (msg) => {
        if (['error', 'warning'].includes(msg.type())) problems.push(`[${vp.name}] console ${msg.type()}: ${msg.text()}`);
      });
      page.on('pageerror', (err) => problems.push(`[${vp.name}] page error: ${err.message}`));
      page.on('requestfailed', (req) => problems.push(`[${vp.name}] request failed: ${req.url()}`));

      await page.goto(url, { waitUntil: 'networkidle' });
      await page.waitForSelector('.pin-spacer', { timeout: 20000 });
      await page.waitForTimeout(1500); // textures

      const pinDistance = await page.evaluate(() => document.querySelector('.pin-spacer').offsetHeight - window.innerHeight);
      for (const [name, progress] of STORY_SHOTS) {
        await page.evaluate((y) => window.scrollTo({ top: y, behavior: 'instant' }), Math.round(pinDistance * progress));
        await page.waitForTimeout(1600); // let the scrub smoothing settle
        await page.screenshot({ path: path.join(OUT, `${vp.name}-${name}.png`) });
      }

      await page.evaluate(() => document.querySelector('#gallery').scrollIntoView({ behavior: 'instant' }));
      await page.waitForTimeout(1200);
      await page.screenshot({ path: path.join(OUT, `${vp.name}-06-gallery.png`) });

      if (!vp.mobile) {
        const card = page.locator('.sticker-card').nth(1);
        await card.scrollIntoViewIfNeeded();
        await page.waitForTimeout(700);
        await card.hover();
        await page.waitForTimeout(900);
        await card.screenshot({ path: path.join(OUT, `${vp.name}-07-peel-hover.png`) });
      }

      for (const [name, sel] of [['08-drops', '#drops'], ['09-story', '#about'], ['10-footer', '.footer']]) {
        await page.evaluate((s) => document.querySelector(s).scrollIntoView({ behavior: 'instant' }), sel);
        await page.waitForTimeout(900);
        await page.screenshot({ path: path.join(OUT, `${vp.name}-${name}.png`) });
      }
      await context.close();
    }

    // Reduced motion: the finished laptop as a still.
    const rm = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' });
    const page = await rm.newPage();
    page.on('pageerror', (err) => problems.push(`[reduced] page error: ${err.message}`));
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    await page.screenshot({ path: path.join(OUT, 'reduced-motion-still.png'), fullPage: false });
    await page.evaluate(() => window.scrollTo(0, 420));
    await page.waitForTimeout(400);
    await page.screenshot({ path: path.join(OUT, 'reduced-motion-still-laptop.png') });
    await rm.close();
  } finally {
    await browser.close();
    await server.close();
  }
  if (problems.length) {
    console.log('Problems found:\n' + [...new Set(problems)].join('\n'));
    process.exitCode = 1;
  } else {
    console.log(`Screenshots saved to ${OUT}, no console errors.`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

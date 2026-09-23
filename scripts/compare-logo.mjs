// Renders src/assets/glood-logo.svg in Chromium and compares it with the same crop of glood-logo.png.
//
//   node scripts/compare-logo.mjs
//
// Writes screenshots/logo-compare.png (PNG | SVG | difference) and prints a pixel match score.

import { readFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

async function main() {
  const meta = JSON.parse(await readFile(path.join(ROOT, '.logo-work', 'meta.json'), 'utf8'));
  const svg = await readFile(path.join(ROOT, 'src', 'assets', 'glood-logo.svg'), 'utf8');
  const png = (await readFile(path.join(ROOT, 'glood-logo.png'))).toString('base64');
  const [cx0, cy0, cx1, cy1] = meta.crop_in_source;
  const W = meta.width;
  const H = meta.height;

  await mkdir(path.join(ROOT, 'screenshots'), { recursive: true });
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: W * 3, height: H } });
    const svgUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`;
    await page.setContent(`<body style="margin:0;background:#222"><canvas id="c" width="${W * 3}" height="${H}"></canvas></body>`);
    const result = await page.evaluate(async ({ png, svgUrl, W, H, crop }) => {
      const load = (src) => new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; });
      const [a, b] = await Promise.all([load(`data:image/png;base64,${png}`), load(svgUrl)]);
      const c = document.getElementById('c');
      const ctx = c.getContext('2d', { willReadFrequently: true });
      ctx.drawImage(a, crop[0], crop[1], crop[2] - crop[0], crop[3] - crop[1], 0, 0, W, H);
      ctx.drawImage(b, W, 0, W, H);
      const pa = ctx.getImageData(0, 0, W, H);
      const pb = ctx.getImageData(W, 0, W, H);
      const diff = ctx.createImageData(W, H);
      let off = 0;
      let total = 0;
      for (let i = 0; i < pa.data.length; i += 4) {
        const dv = Math.abs(pa.data[i] - pb.data[i]) + Math.abs(pa.data[i + 1] - pb.data[i + 1]) + Math.abs(pa.data[i + 2] - pb.data[i + 2]);
        total += dv;
        const bad = dv > 90;
        if (bad) off++;
        diff.data[i] = bad ? 255 : pa.data[i] * 0.25;
        diff.data[i + 1] = bad ? 0 : pa.data[i + 1] * 0.25;
        diff.data[i + 2] = bad ? 80 : pa.data[i + 2] * 0.25;
        diff.data[i + 3] = 255;
      }
      ctx.putImageData(diff, W * 2, 0);
      return { pixels: W * H, off, meanDiff: total / (W * H * 3) };
    }, { png, svgUrl, W, H, crop: [cx0, cy0, cx1, cy1] });
    await page.locator('#c').screenshot({ path: path.join(ROOT, 'screenshots', 'logo-compare.png') });
    const match = (100 * (1 - result.off / result.pixels)).toFixed(2);
    console.log(`pixels matching (colour diff <= 90): ${match}%   mean channel diff: ${result.meanDiff.toFixed(2)} / 255`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

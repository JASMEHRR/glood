// Traces the masks from scripts/logo_masks.py into the GLOOD logo SVGs.
//
//   python scripts/logo_masks.py && node scripts/trace-logo.mjs
//
// Writes:
//   src/assets/glood-logo.svg          full logo on orange, matches glood-logo.png
//   src/assets/glood-logo-sticker.svg  same artwork with a white die-cut border, no background
//
// Animatable parts carry classes: .glood-eye (pupil + shine, inside a clip of the O),
// .glood-brow, .glood-smile.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import potrace from 'potrace';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const WORK = path.join(ROOT, '.logo-work');
const OUT = path.join(ROOT, 'src', 'assets');

const COLORS = {
  orange: '#ffa905',
  red: '#e10b19',
  crimson: '#e10b37',
  cyan: '#00bbd1',
  cyanRim: '#00cae2', // thin lighter rim inside the O edges, as in the PNG
  black: '#000000',
  white: '#ffffff',
  pinkShine: '#ff94c7',
  blueShine: '#8ddfff',
  pupilShine: '#ffd2f1',
  whiteShine: '#efe8ff',
};

const TRACE_OPTS = { turdSize: 6, optTolerance: 0.25, alphaMax: 1.0, threshold: 128 };

function trace(name) {
  const file = path.join(WORK, `${name}.png`);
  if (!existsSync(file)) throw new Error(`Missing mask ${file}. Run python scripts/logo_masks.py first.`);
  return new Promise((resolve, reject) => {
    const tracer = new potrace.Potrace(TRACE_OPTS);
    tracer.loadImage(file, (err) => {
      if (err) return reject(new Error(`Could not trace ${name}: ${err.message}`));
      const tag = tracer.getPathTag();
      const match = tag.match(/ d="([^"]+)"/);
      if (!match) return reject(new Error(`No path traced for ${name}`));
      // Round coordinates to 1 decimal to keep the file small.
      resolve(match[1].replace(/(\d+\.\d)\d+/g, '$1').replace(/\s+/g, ' ').trim());
    });
  });
}

async function main() {
  const meta = JSON.parse(await readFile(path.join(WORK, 'meta.json'), 'utf8'));
  const { width: W, height: H } = meta;
  const names = ['outline', 'brow-left', 'brow-right', 'smile', 'letter-g', 'letter-l', 'letter-d', 'letter-o1', 'letter-o2',
    'o1-inner', 'o2-inner', 'pupil-left', 'pupil-right', 'diecut',
    ...Object.entries(meta.highlights).filter(([, has]) => has).map(([k]) => `hl-${k}`)];
  const d = {};
  for (const n of names) d[n] = await trace(n);
  const hl = (key, color) => (d[`hl-${key}`] ? `<path class="glood-shine" fill="${color}" d="${d[`hl-${key}`]}"/>` : '');

  const eye = (side, idx) => {
    const [x0, y0, x1, y1] = meta.pupils[idx];
    const cx = ((x0 + x1) / 2).toFixed(1);
    const cy = ((y0 + y1) / 2).toFixed(1);
    return `<g clip-path="url(#glood-clip-o${idx + 1})">` +
      `<g class="glood-eye glood-eye-${side}" data-cx="${cx}" data-cy="${cy}">` +
      `<path fill="${COLORS.black}" d="${d[`pupil-${side}`]}"/>${hl(`p${idx + 1}`, COLORS.pupilShine)}</g></g>`;
  };

  // Shared artwork. Letter fills are traced slightly grown so they tuck under the black outline (no hairline gaps).
  const art = [
    `<g class="glood-letters">`,
    `<path fill="${COLORS.crimson}" d="${d['letter-g']}"/>`,
    `<path fill="${COLORS.orange}" d="${d['letter-l']}"/>`,
    `<path fill="${COLORS.cyan}" stroke="${COLORS.cyanRim}" stroke-width="12" stroke-linejoin="round" d="${d['letter-o1']}"/>`,
    `<path fill="${COLORS.cyan}" stroke="${COLORS.cyanRim}" stroke-width="12" stroke-linejoin="round" d="${d['letter-o2']}"/>`,
    `<path fill="${COLORS.red}" d="${d['letter-d']}"/>`,
    `</g>`,
    `<path class="glood-outline" fill="${COLORS.black}" fill-rule="evenodd" d="${d.outline}"/>`,
    `<path class="glood-brow glood-brow-left" fill="${COLORS.black}" d="${d['brow-left']}"/>`,
    `<path class="glood-brow glood-brow-right" fill="${COLORS.black}" d="${d['brow-right']}"/>`,
    `<path class="glood-smile" fill="${COLORS.black}" d="${d.smile}"/>`,
    hl('g', COLORS.pinkShine), hl('o1', COLORS.blueShine), hl('o2', COLORS.blueShine), hl('d', COLORS.whiteShine),
    eye('left', 0),
    eye('right', 1),
  ].join('\n');

  const defs = `<defs>` +
    `<clipPath id="glood-clip-o1"><path d="${d['o1-inner']}"/></clipPath>` +
    `<clipPath id="glood-clip-o2"><path d="${d['o2-inner']}"/></clipPath>` +
    `</defs>`;

  const header = () =>
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" role="img" aria-label="GLOOD">`;

  const logo = `${header()}\n<title>GLOOD</title>\n${defs}\n` +
    `<rect class="glood-bg" width="${W}" height="${H}" fill="${COLORS.orange}"/>\n${art}\n</svg>\n`;

  // Sticker: thin dark edge, white die-cut border, artwork on top.
  const sticker = `${header()}\n<title>GLOOD sticker</title>\n${defs}\n` +
    `<path fill="#1a1a1a" d="${d.diecut}" stroke="#1a1a1a" stroke-width="7" stroke-linejoin="round"/>\n` +
    `<path fill="${COLORS.white}" d="${d.diecut}"/>\n${art}\n</svg>\n`;

  await mkdir(OUT, { recursive: true });
  await writeFile(path.join(OUT, 'glood-logo.svg'), logo);
  await writeFile(path.join(OUT, 'glood-logo-sticker.svg'), sticker);
  console.log(`glood-logo.svg ${(logo.length / 1024).toFixed(1)} KB, glood-logo-sticker.svg ${(sticker.length / 1024).toFixed(1)} KB`);
  console.log(`viewBox 0 0 ${W} ${H}, crop of PNG (source px): ${meta.crop_in_source.join(', ')}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});

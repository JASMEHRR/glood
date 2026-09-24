// Sticker catalogue: original SVG designs plus the screened, optimised photo stickers.
// To add stickers later, see "Adding stickers" in README.md.

import customList from '../stickers/custom/custom-stickers.json';
import photoList from '../stickers/photo/photo-stickers.json';
import sizeList from '../stickers/sizes.json';
import logoStickerUrl from '../assets/glood-logo-sticker.svg?url';

const customUrls = import.meta.glob('../stickers/custom/*.svg', { eager: true, query: '?url', import: 'default' });
const photoUrls = import.meta.glob('../stickers/photo/*.{webp,png,jpg,jpeg,svg}', { eager: true, query: '?url', import: 'default' });

export const CATEGORIES = [
  { id: 'racing', label: 'Racing' },
  { id: 'anime', label: 'Anime vibe' },
  { id: 'gaming', label: 'Gaming' },
  { id: 'gym', label: 'Gym' },
  { id: 'memes', label: 'Memes' },
  { id: 'sports', label: 'Sports' },
  { id: 'music', label: 'Music' },
  { id: 'screen', label: 'TV & film' },
  { id: 'heroes', label: 'Superheroes' },
];

const CATEGORY_IDS = new Set(CATEGORIES.map((c) => c.id));

// Every sticker is printed at one fixed size, and its price is set by the band that size falls in.
// Bands and prices are from GLOOD's size chart (source-assets/size-reference.png). Size is the longest side.
export const SIZE_BANDS = [
  { id: 's', short: 'Small', label: '1 to 2 in', price: 20 },
  { id: 'm', short: 'Medium', label: '2 to 3 in', price: 30 },
  { id: 'l', short: 'Large', label: '3+ in', price: 50 },
];
export const bandById = (id) => SIZE_BANDS.find((b) => b.id === id);

// Each sticker's size band, price and product name come from GLOOD's VentureAdda listing, copied
// into src/stickers/sizes.json by scripts/import_prices.py (price 20/30/50 = band s/m/l).
// A sticker not listed there (the new GLOOD originals, which are not on VentureAdda yet) falls back
// to Medium and is marked sizeConfirmed: false.
export const FALLBACK_BAND = 'm';
function listing(slug) {
  const entry = sizeList[slug];
  const band = bandById(entry?.size);
  if (entry && !band) console.warn(`[glood] Unknown size "${entry.size}" for "${slug}" in sizes.json`);
  if (!band) return { band: bandById(FALLBACK_BAND), price: bandById(FALLBACK_BAND).price, sizeConfirmed: false };
  const price = Number.isFinite(entry.price) ? entry.price : band.price;
  return { band, price, name: entry.name, sizeConfirmed: true };
}

function resolve(list, urls, folder, kind) {
  return list.flatMap((entry) => {
    const url = urls[`../stickers/${folder}/${entry.file}`];
    if (!url) {
      console.warn(`[glood] Sticker file missing for "${entry.slug}": ${folder}/${entry.file}`);
      return [];
    }
    if (!CATEGORY_IDS.has(entry.category)) {
      console.warn(`[glood] Unknown category "${entry.category}" for "${entry.slug}"`);
      return [];
    }
    const { band, price, name, sizeConfirmed } = listing(entry.slug);
    // The VentureAdda product name is the title when there is one, so both shops call it the same.
    return [{ ...entry, title: name || entry.title, url, kind, aspect: entry.width / entry.height, band, price, sizeConfirmed }];
  });
}

export const STICKERS = [
  ...resolve(customList, customUrls, 'custom', 'original'),
  ...resolve(photoList, photoUrls, 'photo', 'photo'),
];

export const LOGO_STICKER = {
  slug: 'glood-logo',
  title: 'GLOOD',
  url: logoStickerUrl,
  aspect: 1604 / 1019,
};

export const bySlug = (slug) => STICKERS.find((s) => s.slug === slug);

// Newest originals, featured in the Fresh Drops section.
export const FRESH_DROPS = ['lap-1-delulu', 'mochi-chan', 'gym-then-biryani', 'one-more-game'].map(bySlug).filter(Boolean);

// Which stickers get slapped onto the laptop, in order. The logo always goes first.
const LAPTOP_ORDER = [
  'lap-1-delulu', 'one-more-game', 'mochi-chan', 'box-box-box', 'gym-then-biryani', 'skill-issue',
  'plus-1000-aura', 'chai-over-everything', 'main-character', 'jet-fuel-only', 'touch-grass-later',
  'brb-overthinking', 'pit-stop-snacks', 'dont-touch-laptop',
];

export function laptopStickers(count) {
  return LAPTOP_ORDER.map(bySlug).filter(Boolean).slice(0, count);
}

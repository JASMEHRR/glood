// Sticker catalogue: original SVG designs plus the screened, optimised photo stickers.
// To add stickers later, see "Adding stickers" in README.md.

import customList from '../stickers/custom/custom-stickers.json';
import photoList from '../stickers/photo/photo-stickers.json';
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
    return [{ ...entry, url, kind, aspect: entry.width / entry.height }];
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

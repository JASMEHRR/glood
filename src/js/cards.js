// Sticker card and peel figure, shared by the gallery, Fresh Drops, the product page and the cart.

import { CATEGORIES } from './stickers.js';
import { productUrl, SIZES } from './shop.js';

export const CATEGORY_LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));
const TILTS = [-2.2, 1.6, -1, 2.4, -1.8, 0.8, 1.9, -2.6];
const FROM_PRICE = Math.min(...SIZES.map((s) => s.price));

// Square frame > peel box with the sticker's own aspect ratio > image + folded-corner flap.
export function stickerFigure(sticker, { eager = false } = {}) {
  const frame = document.createElement('div');
  frame.className = 'sticker-art';
  const fig = document.createElement('div');
  fig.className = 'peel';
  fig.style.setProperty('--ar', `${sticker.width} / ${sticker.height}`);
  fig.style.setProperty('--arn', (sticker.width / sticker.height).toFixed(4));
  fig.style.setProperty('--inset', String(sticker.peelInset ?? 0)); // where the artwork's corner starts
  const img = document.createElement('img');
  img.src = sticker.url;
  img.alt = `${sticker.title} sticker`;
  img.width = sticker.width;
  img.height = sticker.height;
  img.loading = eager ? 'eager' : 'lazy';
  img.decoding = 'async';
  img.draggable = false;
  // The folded-back corner: a mirrored copy of the same image, painted as paper backing.
  const flap = document.createElement('span');
  flap.className = 'peel-flap';
  flap.setAttribute('aria-hidden', 'true');
  const back = img.cloneNode();
  back.alt = '';
  flap.append(back);
  fig.append(img, flap);
  frame.append(fig);
  return frame;
}

/** A gallery card that links to the sticker's own page. */
export function stickerCard(sticker, i = 0) {
  const li = document.createElement('li');
  li.className = 'sticker-card';
  li.dataset.category = sticker.category;
  li.style.setProperty('--tilt', `${TILTS[i % TILTS.length]}deg`);

  const a = document.createElement('a');
  a.className = 'card-link';
  a.href = productUrl(sticker.slug);
  if (sticker.kind === 'original') {
    const badge = document.createElement('span');
    badge.className = 'badge-original';
    badge.textContent = 'GLOOD original';
    a.append(badge);
  }
  const meta = document.createElement('div');
  meta.className = 'sticker-meta';
  meta.innerHTML = `<h3></h3><p><span class="tag tag-${sticker.category}"></span><span class="price">from ₹${FROM_PRICE}</span></p>`;
  meta.querySelector('h3').textContent = sticker.title;
  meta.querySelector('.tag').textContent = CATEGORY_LABEL[sticker.category] ?? sticker.category;
  a.append(stickerFigure(sticker), meta);
  li.append(a);
  return li;
}

/** Cards pop in as they scroll into view. */
export function revealOnScroll(cards) {
  if (!('IntersectionObserver' in window)) {
    cards.forEach((c) => c.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    }
  }, { rootMargin: '0px 0px -8% 0px' });
  cards.forEach((c) => io.observe(c));
}

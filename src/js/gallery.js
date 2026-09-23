// Sticker gallery grid with category filters, lazy-loaded images and the peel hover,
// plus the Fresh Drops row.

import { CATEGORIES, STICKERS, FRESH_DROPS } from './stickers.js';

const LABEL = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.label]));
const TILTS = [-2.2, 1.6, -1, 2.4, -1.8, 0.8, 1.9, -2.6];

// Square frame > peel box with the sticker's own aspect ratio > image + folded-corner flap.
function stickerFigure(sticker) {
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
  img.loading = 'lazy';
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

function card(sticker, i) {
  const li = document.createElement('li');
  li.className = 'sticker-card';
  li.dataset.category = sticker.category;
  li.style.setProperty('--tilt', `${TILTS[i % TILTS.length]}deg`);
  const meta = document.createElement('div');
  meta.className = 'sticker-meta';
  meta.innerHTML = `<h3></h3><p><span class="tag tag-${sticker.category}"></span><span class="price">from ₹20</span></p>`;
  meta.querySelector('h3').textContent = sticker.title;
  meta.querySelector('.tag').textContent = LABEL[sticker.category];
  if (sticker.kind === 'original') {
    const badge = document.createElement('span');
    badge.className = 'badge-original';
    badge.textContent = 'GLOOD original';
    li.append(badge);
  }
  li.append(stickerFigure(sticker), meta);
  return li;
}

export function buildGallery({ grid, filterBar, status }) {
  const cards = STICKERS.map((s, i) => card(s, i));
  grid.append(...cards);

  const counts = Object.fromEntries(CATEGORIES.map((c) => [c.id, STICKERS.filter((s) => s.category === c.id).length]));
  const filters = [{ id: 'all', label: 'All' }, ...CATEGORIES];
  for (const f of filters) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip';
    btn.dataset.filter = f.id;
    btn.setAttribute('aria-pressed', String(f.id === 'all'));
    btn.innerHTML = `<span></span><small>${f.id === 'all' ? STICKERS.length : counts[f.id]}</small>`;
    btn.querySelector('span').textContent = f.label;
    filterBar.append(btn);
  }

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-filter]');
    if (!btn) return;
    const id = btn.dataset.filter;
    for (const b of filterBar.querySelectorAll('button')) b.setAttribute('aria-pressed', String(b === btn));
    let shown = 0;
    cards.forEach((c) => {
      const match = id === 'all' || c.dataset.category === id;
      c.hidden = !match;
      if (match) {
        shown++;
        c.classList.remove('pop');
        void c.offsetWidth; // restart the pop-in animation
        c.classList.add('pop');
      }
    });
    status.textContent = `${shown} sticker${shown === 1 ? '' : 's'} shown`;
  });

  // Cards pop in as they scroll into view.
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      }
    }, { rootMargin: '0px 0px -8% 0px' });
    cards.forEach((c) => io.observe(c));
  } else {
    cards.forEach((c) => c.classList.add('in'));
  }
}

export function buildDrops(list) {
  FRESH_DROPS.forEach((s, i) => {
    const li = document.createElement('li');
    li.className = 'drop-card';
    li.style.setProperty('--tilt', `${[-3, 2, -1.5, 3][i % 4]}deg`);
    li.innerHTML = `<span class="drop-no">Drop 0${i + 1}</span><span class="new-burst" aria-hidden="true">NEW</span>`;
    const title = document.createElement('h3');
    title.textContent = s.title;
    li.append(stickerFigure(s), title);
    list.append(li);
  });
}

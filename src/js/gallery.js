// Sticker gallery grid with category filters, plus the Fresh Drops row.

import { CATEGORIES, STICKERS, FRESH_DROPS } from './stickers.js';
import { stickerCard, stickerFigure, revealOnScroll } from './cards.js';
import { productUrl } from './shop.js';

export function buildGallery({ grid, filterBar, status }) {
  const cards = STICKERS.map((s, i) => stickerCard(s, i));
  grid.append(...cards);

  const counts = Object.fromEntries(CATEGORIES.map((c) => [c.id, STICKERS.filter((s) => s.category === c.id).length]));
  const filters = [{ id: 'all', label: 'All' }, ...CATEGORIES.filter((c) => counts[c.id] > 0)];
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

  revealOnScroll(cards);
}

export function buildDrops(list) {
  FRESH_DROPS.forEach((s, i) => {
    const li = document.createElement('li');
    li.className = 'drop-card';
    li.style.setProperty('--tilt', `${[-3, 2, -1.5, 3][i % 4]}deg`);
    const a = document.createElement('a');
    a.className = 'card-link';
    a.href = productUrl(s.slug);
    a.innerHTML = `<span class="drop-no">Drop 0${i + 1}</span><span class="new-burst" aria-hidden="true">NEW</span>`;
    const title = document.createElement('h3');
    title.textContent = s.title;
    a.append(stickerFigure(s), title);
    li.append(a);
    list.append(li);
  });
}

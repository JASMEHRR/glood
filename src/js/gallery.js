// Sticker gallery grid with category filters, the "Shop by category" tiles, and Fresh Drops.
//
// One filter function serves every way in: the chips above the grid, the category tiles, the nav's
// Categories menu, and links like index.html?cat=racing#gallery (used by product pages and shareable).

import { CATEGORIES, STICKERS, FRESH_DROPS } from './stickers.js';
import { stickerCard, stickerFigure, revealOnScroll } from './cards.js';
import { productUrl } from './shop.js';
import { CATEGORY_EVENT } from './chrome.js';

const COUNTS = Object.fromEntries(CATEGORIES.map((c) => [c.id, STICKERS.filter((s) => s.category === c.id).length]));
const VALID = new Set(['all', ...CATEGORIES.map((c) => c.id)]);

export function buildGallery({ grid, filterBar, status, tiles }) {
  const cards = STICKERS.map((s, i) => stickerCard(s, i));
  grid.append(...cards);

  const filters = [{ id: 'all', label: 'All' }, ...CATEGORIES.filter((c) => COUNTS[c.id] > 0)];
  for (const f of filters) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `chip chip-${f.id}`;
    btn.dataset.filter = f.id;
    btn.setAttribute('aria-pressed', String(f.id === 'all'));
    btn.innerHTML = `<span></span><small>${f.id === 'all' ? STICKERS.length : COUNTS[f.id]}</small>`;
    btn.querySelector('span').textContent = f.label;
    filterBar.append(btn);
  }

  function applyFilter(id, { scroll = false, updateUrl = true } = {}) {
    if (!VALID.has(id)) id = 'all';
    for (const b of filterBar.querySelectorAll('button')) b.setAttribute('aria-pressed', String(b.dataset.filter === id));
    // Bring the active chip into view sideways only (the chip row scrolls on phones), never the page.
    const chip = filterBar.querySelector(`[data-filter="${id}"]`);
    if (chip && filterBar.scrollWidth > filterBar.clientWidth) {
      filterBar.scrollTo({ left: chip.offsetLeft - (filterBar.clientWidth - chip.offsetWidth) / 2, behavior: 'smooth' });
    }
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
    if (updateUrl) {
      const url = id === 'all' ? `${location.pathname}#gallery` : `${location.pathname}?cat=${id}#gallery`;
      history.replaceState(null, '', url);
    }
    // The grid, not the sticky filter bar: a stuck element scrolls to where it is stuck, not where it lives.
    if (scroll) grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  filterBar.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-filter]');
    if (btn) applyFilter(btn.dataset.filter);
  });

  if (tiles) buildTiles(tiles, (id) => applyFilter(id, { scroll: true }));
  // The nav's Categories menu on this page filters in place instead of reloading.
  window.addEventListener(CATEGORY_EVENT, (e) => applyFilter(e.detail, { scroll: true }));

  const initial = new URLSearchParams(location.search).get('cat');
  if (initial && VALID.has(initial)) applyFilter(initial, { updateUrl: false });

  revealOnScroll(cards);
}

// "Shop by category": one tile per category, with a fan of three of its stickers.
function buildTiles(list, onPick) {
  CATEGORIES.filter((c) => COUNTS[c.id] > 0).forEach((c, i) => {
    const picks = STICKERS.filter((s) => s.category === c.id).slice(0, 3);
    const li = document.createElement('li');
    li.className = `cat-tile cat-${c.id}`;
    li.style.setProperty('--tilt', `${[-2, 1.5, -1, 2, -1.5, 1, 2.2, -2.4, 1.2][i % 9]}deg`);
    const a = document.createElement('a');
    a.href = `?cat=${c.id}#gallery`;
    a.className = 'cat-link';
    a.innerHTML = `<span class="cat-fan" aria-hidden="true"></span><span class="cat-name"></span><span class="cat-count">${COUNTS[c.id]} stickers</span>`;
    a.querySelector('.cat-name').textContent = c.label;
    const fan = a.querySelector('.cat-fan');
    for (const s of picks) {
      const img = document.createElement('img');
      img.src = s.url;
      img.alt = '';
      img.loading = 'lazy';
      img.decoding = 'async';
      fan.append(img);
    }
    a.addEventListener('click', (e) => {
      e.preventDefault();
      onPick(c.id);
    });
    li.append(a);
    list.append(li);
  });
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

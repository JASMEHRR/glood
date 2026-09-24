import '../base.js';
import { mountNav, mountFooter, escapeHtml } from '../js/chrome.js';
import { stickerCard, revealOnScroll } from '../js/cards.js';
import { onCart, getCart, describe, count, total, rupees, setQty, clearCart, productUrl, similarTo, MAX_QTY } from '../js/shop.js';
import { openCheckout } from '../js/checkout.js';

mountNav();
mountFooter();

const $ = (sel) => document.querySelector(sel);
const list = $('.cart-lines');
let checkoutOpen = false;
let similarFor = null;

function renderLine(l) {
  return `
    <li class="cart-line" data-slug="${escapeHtml(l.slug)}">
      <a class="cart-thumb" href="${productUrl(l.slug)}"><img src="${l.sticker.url}" alt="" loading="lazy"></a>
      <div class="cart-line-info">
        <a class="cart-line-name" href="${productUrl(l.slug)}">${escapeHtml(l.sticker.title)}</a>
        <span class="cart-line-size">${l.band.short}, ${l.band.label} · ${rupees(l.unit)} each</span>
      </div>
      <div class="stepper">
        <button type="button" data-step="-1" aria-label="${l.qty === 1 ? 'Remove' : 'One less'} ${escapeHtml(l.sticker.title)}">${l.qty === 1 ? '&times;' : '&minus;'}</button>
        <span aria-live="polite">${l.qty}</span>
        <button type="button" data-step="1" aria-label="One more ${escapeHtml(l.sticker.title)}" ${l.qty >= MAX_QTY ? 'disabled' : ''}>+</button>
      </div>
      <span class="cart-line-total">${rupees(l.total)}</span>
    </li>`;
}

function showLayout(cart) {
  const empty = cart.length === 0;
  $('.cart-layout').hidden = empty;
  $('.cart-empty').hidden = !empty;
}

onCart((cart) => {
  const lines = describe(cart);
  // While the checkout dialog is open (including its "order ready" screen once the cart has been
  // cleared), the page underneath keeps its layout instead of flipping to the empty state.
  if (!checkoutOpen) showLayout(cart);
  list.innerHTML = lines.map(renderLine).join('');
  $('.sum-count').textContent = String(count(cart));
  $('.sum-price').textContent = rupees(total(lines));
  $('.cart-checkout').textContent = lines.length ? `Checkout · ${rupees(total(lines))}` : 'Checkout';

  // Suggestions follow what is in the cart. Rebuilt only when the set of stickers changes, not on
  // every quantity tap.
  const key = cart.map((e) => e.slug).sort().join(',');
  if (key !== similarFor) {
    similarFor = key;
    const picks = similarTo(key ? key.split(',') : [], 8);
    const grid = $('.similar-grid');
    grid.replaceChildren(...picks.map((s, i) => stickerCard(s, i)));
    $('.similar').hidden = picks.length === 0;
    revealOnScroll([...grid.children]);
  }
});

list.addEventListener('click', (e) => {
  const btn = e.target.closest('button[data-step]');
  if (!btn) return;
  const { slug } = btn.closest('li').dataset;
  const current = getCart().find((x) => x.slug === slug);
  setQty(slug, (current?.qty ?? 0) + Number(btn.dataset.step));
});

$('.cart-clear').addEventListener('click', () => {
  if (window.confirm('Remove every sticker from your cart?')) clearCart();
});

$('.cart-checkout').addEventListener('click', () => {
  if (getCart().length === 0) return;
  checkoutOpen = true;
  openCheckout({ source: 'cart', onPlaced: () => clearCart() });
  document.querySelector('dialog.checkout').addEventListener('close', () => {
    checkoutOpen = false;
    showLayout(getCart());
  }, { once: true });
});

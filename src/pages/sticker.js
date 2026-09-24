import '../base.js';
import { bySlug } from '../js/stickers.js';
import { mountNav, mountFooter, toast, escapeHtml } from '../js/chrome.js';
import { stickerFigure, stickerCard, revealOnScroll, CATEGORY_LABEL } from '../js/cards.js';
import { SIZES, DEFAULT_SIZE, MAX_QTY, sizeById, rupees, addToCart, onCart, similarTo } from '../js/shop.js';
import { openCheckout } from '../js/checkout.js';

mountNav();
mountFooter();

const slug = new URLSearchParams(window.location.search).get('s') ?? '';
const sticker = bySlug(slug);
const $ = (sel) => document.querySelector(sel);

if (!sticker) {
  $('.not-found').hidden = false;
  document.title = 'Sticker not found | GLOOD';
} else {
  renderProduct();
}

function renderProduct() {
  document.title = `${sticker.title} sticker | GLOOD`;
  $('.product').hidden = false;
  $('.product-title').textContent = sticker.title;
  $('.product-sheet').append(stickerFigure(sticker, { eager: true }));
  $('.product-tags').innerHTML =
    `<span class="tag tag-${sticker.category}">${escapeHtml(CATEGORY_LABEL[sticker.category] ?? sticker.category)}</span>` +
    (sticker.kind === 'original' ? '<span class="badge-original static">GLOOD original</span>' : '');

  let size = DEFAULT_SIZE;
  let qty = 1;

  const options = $('.size-options');
  options.innerHTML = SIZES.map((s) => `
    <label class="size-option opt-${s.id}">
      <input type="radio" name="size" value="${s.id}" ${s.id === size ? 'checked' : ''}>
      <span class="size-dot" aria-hidden="true"></span>
      <span class="size-text"><strong>${s.short}</strong><small>${s.label}</small></span>
      <span class="size-cost">${rupees(s.price)}</span>
    </label>`).join('');

  const paint = () => {
    const s = sizeById(size);
    $('.price-now').textContent = rupees(s.price * qty);
    $('.price-size').textContent = qty > 1 ? `${qty} x ${rupees(s.price)}, ${s.label}` : s.label;
    $('.qty-value').textContent = String(qty);
    $('.qty-minus').disabled = qty <= 1;
    $('.qty-plus').disabled = qty >= MAX_QTY;
  };
  options.addEventListener('change', (e) => {
    if (e.target.name === 'size') {
      size = e.target.value;
      paint();
    }
  });
  $('.qty-minus').addEventListener('click', () => { qty = Math.max(1, qty - 1); paint(); });
  $('.qty-plus').addEventListener('click', () => { qty = Math.min(MAX_QTY, qty + 1); paint(); });
  paint();

  $('.btn-add').addEventListener('click', () => {
    addToCart(sticker.slug, size, qty);
    toast(`<strong>${qty} x ${escapeHtml(sticker.title)}</strong> added. <a href="cart.html">View cart</a>`);
  });
  // Buy now checks out just this sticker and leaves the cart as it is.
  $('.btn-buy').addEventListener('click', () => {
    openCheckout({ source: 'buynow', lines: [{ slug: sticker.slug, size, qty }] });
  });

  onCart((cart) => {
    const here = cart.filter((e) => e.slug === sticker.slug);
    const n = here.reduce((a, e) => a + e.qty, 0);
    const note = $('.in-cart');
    note.hidden = n === 0;
    note.innerHTML = n ? `${n} in your cart. <a href="cart.html">Go to cart</a>` : '';
  });

  const similar = similarTo([sticker.slug], 8);
  if (similar.length) {
    const cards = similar.map((s, i) => stickerCard(s, i));
    $('.similar-grid').append(...cards);
    $('.similar').hidden = false;
    revealOnScroll(cards);
  }
}

import '../base.js';
import { bySlug } from '../js/stickers.js';
import { mountNav, mountFooter, toast, escapeHtml } from '../js/chrome.js';
import { stickerFigure, stickerCard, revealOnScroll, CATEGORY_LABEL } from '../js/cards.js';
import { MAX_QTY, rupees, addToCart, onCart, similarTo } from '../js/shop.js';
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

  let qty = 1;
  const band = sticker.band;
  $('.fixed-size').classList.add(`opt-${band.id}`);
  $('.fixed-size-band').textContent = `${band.short}, ${band.label}`;

  const paint = () => {
    $('.price-now').textContent = rupees(sticker.price * qty);
    $('.price-size').textContent = qty > 1 ? `${qty} x ${rupees(sticker.price)}` : `${band.short} sticker`;
    $('.qty-value').textContent = String(qty);
    $('.qty-minus').disabled = qty <= 1;
    $('.qty-plus').disabled = qty >= MAX_QTY;
  };
  $('.qty-minus').addEventListener('click', () => { qty = Math.max(1, qty - 1); paint(); });
  $('.qty-plus').addEventListener('click', () => { qty = Math.min(MAX_QTY, qty + 1); paint(); });
  paint();

  $('.btn-add').addEventListener('click', () => {
    addToCart(sticker.slug, qty);
    toast(`<strong>${qty} x ${escapeHtml(sticker.title)}</strong> added. <a href="cart.html">View cart</a>`);
  });
  // Buy now checks out just this sticker and leaves the cart as it is.
  $('.btn-buy').addEventListener('click', () => {
    openCheckout({ source: 'buynow', lines: [{ slug: sticker.slug, qty }] });
  });

  onCart((cart) => {
    const n = cart.find((e) => e.slug === sticker.slug)?.qty ?? 0;
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

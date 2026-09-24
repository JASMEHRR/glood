// The cart and the WhatsApp order message.
//
// Modelled on VentureAdda's cart: the cart is a scratchpad in localStorage, not a record, so browsing
// and adding need no account and no server. Only the slug and quantity are stored. Every sticker has
// one fixed size, so its title, image, size and price are looked up from the catalogue each time: a
// stored cart can never show a stale price, and a sticker that has been removed simply drops out.

import { STICKERS, bySlug, SIZE_BANDS } from './stickers.js';
import { WHATSAPP_NUMBER } from '../config.js';

export { SIZE_BANDS };
export const MAX_QTY = 99;
export const rupees = (n) => `₹${n}`;

const STORAGE_KEY = 'glood:cart';
const listeners = new Set();
let snapshot = null;

// Anything that does not validate is dropped rather than repaired: the string is editable in
// devtools and survives every deploy, so it must never be able to render "₹NaN". Carts saved while
// the site still offered a size choice have one line per size; those are merged per sticker.
function read() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const merged = new Map();
    for (const e of parsed) {
      if (!e || typeof e.slug !== 'string' || !bySlug(e.slug) || !Number.isFinite(e.qty) || e.qty <= 0) continue;
      merged.set(e.slug, Math.min(MAX_QTY, (merged.get(e.slug) ?? 0) + Math.floor(e.qty)));
    }
    return [...merged].map(([slug, qty]) => ({ slug, qty }));
  } catch {
    // Private browsing, blocked storage or malformed JSON: an empty cart is the right answer.
    return [];
  }
}

function write(next) {
  snapshot = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Quota or blocked storage. The cart still works for this visit, it just will not survive a reload.
  }
  for (const fn of listeners) fn(next);
}

export function getCart() {
  if (snapshot === null) snapshot = read();
  return snapshot;
}

/** Calls fn now and whenever the cart changes (in this tab or another). Returns an unsubscribe. */
export function onCart(fn) {
  listeners.add(fn);
  fn(getCart());
  return () => listeners.delete(fn);
}

window.addEventListener('storage', (event) => {
  if (event.key !== null && event.key !== STORAGE_KEY) return;
  snapshot = read();
  for (const fn of listeners) fn(snapshot);
});

/** The single write path for quantities. Zero or less removes the line. */
export function setQty(slug, qty) {
  if (!bySlug(slug)) return;
  const cart = getCart();
  const next = Math.min(MAX_QTY, Math.floor(qty));
  if (next <= 0) {
    write(cart.filter((e) => e.slug !== slug));
    return;
  }
  const i = cart.findIndex((e) => e.slug === slug);
  if (i === -1) write([...cart, { slug, qty: next }]);
  else write(cart.map((e, j) => (j === i ? { ...e, qty: next } : e)));
}

export function addToCart(slug, qty = 1) {
  const existing = getCart().find((e) => e.slug === slug);
  setQty(slug, (existing?.qty ?? 0) + qty);
}

export function clearCart() {
  write([]);
}

/** Cart entries joined with catalogue data: the sticker, its size band and the line price. */
export function describe(entries) {
  return entries.map((e) => {
    const sticker = bySlug(e.slug);
    return { ...e, sticker, band: sticker.band, unit: sticker.price, total: sticker.price * e.qty };
  });
}

export const count = (entries) => entries.reduce((n, e) => n + e.qty, 0);
export const total = (lines) => lines.reduce((n, l) => n + l.total, 0);

export function productUrl(slug) {
  return `sticker.html?s=${encodeURIComponent(slug)}`;
}

/** Up to `limit` stickers like these: same categories first, then anything else. */
export function similarTo(slugs, limit = 8) {
  const own = new Set(slugs);
  const cats = new Set(slugs.map((s) => bySlug(s)?.category).filter(Boolean));
  const same = STICKERS.filter((s) => !own.has(s.slug) && cats.has(s.category));
  const rest = STICKERS.filter((s) => !own.has(s.slug) && !cats.has(s.category));
  return [...same, ...rest].slice(0, limit);
}

// ---------- the order message ----------

const ALPHABET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
export function newOrderId() {
  let id = '';
  const bytes = new Uint8Array(5);
  crypto.getRandomValues(bytes);
  for (const b of bytes) id += ALPHABET[b % ALPHABET.length];
  return `GLD-${id}`;
}

export const PAYMENT_LABELS = { cod: 'Cash on delivery', upi: 'UPI (settled on WhatsApp)' };

export function orderMessage({ lines, orderId, buyer, payment, forSomeoneElse }) {
  return [
    'Hi GLOOD! I want to order these stickers:',
    '',
    ...lines.map((l) => `${l.qty} x ${l.sticker.title} (${l.band.label}), ${rupees(l.total)}`),
    '',
    `Total: ${rupees(total(lines))}`,
    `Order: ${orderId}`,
    `Paying by: ${PAYMENT_LABELS[payment]}`,
    '',
    `${forSomeoneElse ? 'For' : 'Name'}: ${buyer.name}`,
    `Number: ${buyer.phone}`,
    `Deliver to: ${buyer.address}`,
  ].join('\n');
}

const digits = (s) => String(s ?? '').replace(/\D/g, '');

export const hasShopNumber = () => {
  const to = digits(WHATSAPP_NUMBER);
  return to.length >= 8 && to.length <= 15;
};

/** wa.me link with the order written out. Without a configured number, WhatsApp lets the buyer pick the chat. */
export function whatsappLink(message) {
  return `https://wa.me/${hasShopNumber() ? digits(WHATSAPP_NUMBER) : ''}?text=${encodeURIComponent(message)}`;
}

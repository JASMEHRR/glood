// Prices, the cart, and the WhatsApp order message.
//
// Modelled on VentureAdda's cart: the cart is a scratchpad in localStorage, not a record, so browsing
// and adding need no account and no server. Only the slug, size and quantity are stored. Titles,
// images and prices are looked up from the catalogue every time, so a stored cart can never show a
// stale price, and a sticker that has been removed simply drops out.

import { STICKERS, bySlug } from './stickers.js';
import { WHATSAPP_NUMBER } from '../config.js';

// From GLOOD's own size chart (source-assets/size-reference.png). Size is the longest side.
export const SIZES = [
  { id: 's', label: '1 to 2 in', short: 'Small', price: 20 },
  { id: 'm', label: '2 to 3 in', short: 'Medium', price: 30 },
  { id: 'l', label: '3+ in', short: 'Large', price: 50 },
];
export const DEFAULT_SIZE = 'm';
export const MAX_QTY = 99;

export const sizeById = (id) => SIZES.find((s) => s.id === id);
export const rupees = (n) => `₹${n}`;

const STORAGE_KEY = 'glood:cart';
const listeners = new Set();
let snapshot = null;

// Anything that does not validate is dropped rather than repaired: the string is editable in
// devtools and survives every deploy, so it must never be able to render "₹NaN".
function read() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((e) => e && typeof e.slug === 'string' && bySlug(e.slug) && sizeById(e.size)
        && Number.isFinite(e.qty) && e.qty > 0)
      .map((e) => ({ slug: e.slug, size: e.size, qty: Math.min(MAX_QTY, Math.floor(e.qty)) }));
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

const sameLine = (a, slug, size) => a.slug === slug && a.size === size;

/** The single write path for quantities. Zero or less removes the line. */
export function setQty(slug, size, qty) {
  if (!bySlug(slug) || !sizeById(size)) return;
  const cart = getCart();
  const next = Math.min(MAX_QTY, Math.floor(qty));
  if (next <= 0) {
    write(cart.filter((e) => !sameLine(e, slug, size)));
    return;
  }
  const i = cart.findIndex((e) => sameLine(e, slug, size));
  if (i === -1) write([...cart, { slug, size, qty: next }]);
  else write(cart.map((e, j) => (j === i ? { ...e, qty: next } : e)));
}

export function addToCart(slug, size, qty = 1) {
  const existing = getCart().find((e) => sameLine(e, slug, size));
  setQty(slug, size, (existing?.qty ?? 0) + qty);
}

export function clearCart() {
  write([]);
}

/** Cart entries joined with catalogue data and prices. */
export function describe(entries) {
  return entries.map((e) => {
    const sticker = bySlug(e.slug);
    const size = sizeById(e.size);
    return { ...e, sticker, sizeInfo: size, unit: size.price, total: size.price * e.qty };
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
    ...lines.map((l) => `${l.qty} x ${l.sticker.title} (${l.sizeInfo.label}), ${rupees(l.total)}`),
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

/** wa.me link with the order written out. Without a configured number, WhatsApp lets the buyer pick the chat. */
export function whatsappLink(message) {
  const to = digits(WHATSAPP_NUMBER);
  const valid = to.length >= 8 && to.length <= 15;
  return `https://wa.me/${valid ? to : ''}?text=${encodeURIComponent(message)}`;
}

export const hasShopNumber = () => {
  const to = digits(WHATSAPP_NUMBER);
  return to.length >= 8 && to.length <= 15;
};

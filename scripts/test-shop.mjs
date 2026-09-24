// End-to-end check of the shop: product page, cart, checkout, WhatsApp message, motion switch.
// Serves ./dist, so run `npm run build` first. Set GLOOD_URL to test a deployed site instead.
//
//   npm run build && npm run test:shop
//   GLOOD_URL=https://glood.vercel.app/ npm run test:shop
//
// Exits non-zero if any check fails. window.open is stubbed so no real WhatsApp tab opens;
// the test reads the link it was given instead.

import { preview } from 'vite';
import { chromium } from 'playwright';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
let failures = 0;
function check(label, ok, detail = '') {
  console.log(`${ok ? 'PASS' : 'FAIL'}  ${label}${ok || !detail ? '' : `\n      ${detail}`}`);
  if (!ok) failures++;
}

const remote = process.env.GLOOD_URL;
const server = remote ? null : await preview({ root: ROOT, preview: { port: 4176 }, logLevel: 'error' });
const base = remote ? (remote.endsWith('/') ? remote : `${remote}/`) : server.resolvedUrls.local[0];
console.log(`Testing ${base}`);
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const errors = [];

try {
  const context = await browser.newContext({ viewport: { width: 1280, height: 900 }, reducedMotion: 'reduce' });
  await context.addInitScript(() => {
    window.__opened = [];
    window.open = (url) => { window.__opened.push(url); return null; };
  });
  const page = await context.newPage();
  page.on('pageerror', (e) => errors.push(e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push(m.text()); });

  // ---- motion is on by default, even when the device asks for reduced motion ----
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  check('home loads with motion on (story pinned)', await page.evaluate(() =>
    !document.documentElement.classList.contains('reduced-motion') && !!document.querySelector('.pin-spacer')));
  check('gallery has every sticker', (await page.locator('.sticker-grid > li').count()) === 167,
    `found ${await page.locator('.sticker-grid > li').count()}`);
  check('gallery cards show fixed prices', (await page.locator('.sticker-card .price').first().textContent()).includes('₹'));

  // ---- categories: tiles, nav menu, shareable links ----
  const shownCount = () => page.evaluate(() => [...document.querySelectorAll('.sticker-grid > li')].filter((li) => !li.hidden).length);
  const shownCats = () => page.evaluate(() => [...new Set([...document.querySelectorAll('.sticker-grid > li')].filter((li) => !li.hidden).map((li) => li.dataset.category))]);
  check('shop-by-category tiles are on the home page', (await page.locator('.cat-tile').count()) === 9);
  await page.locator('.cat-racing .cat-link').click();
  await page.waitForTimeout(400);
  check('racing tile filters the gallery to racing only', JSON.stringify(await shownCats()) === '["racing"]' && (await shownCount()) > 0);
  check('racing tile puts the category in the address', page.url().includes('?cat=racing#gallery'));
  await page.click('.cat-menu-btn');
  check('nav categories menu opens', await page.isVisible('.cat-menu-panel'));
  await page.click('.cat-menu-list a[data-cat="music"]');
  await page.waitForTimeout(400);
  check('nav menu filters in place on the home page', JSON.stringify(await shownCats()) === '["music"]' && page.url().includes('?cat=music'));
  check('menu closes after picking', !(await page.isVisible('.cat-menu-panel')));
  await page.goto(`${base}?cat=heroes#gallery`, { waitUntil: 'networkidle' });
  await page.waitForTimeout(800);
  check('a ?cat= link opens the gallery already filtered', JSON.stringify(await shownCats()) === '["heroes"]' &&
    (await page.getAttribute('.chip[data-filter="heroes"]', 'aria-pressed')) === 'true');
  check('a ?cat= link lands on the gallery', await page.evaluate(() => {
    const r = document.querySelector('#gallery').getBoundingClientRect();
    return r.top < window.innerHeight && r.bottom > 0;
  }));

  // ---- product page: one fixed size per sticker, price copied from VentureAdda ----
  await page.goto(`${base}sticker.html?s=f1-logo`, { waitUntil: 'networkidle' });
  check('product title is the VentureAdda name', (await page.textContent('.product-title')) === 'F1 Logo');
  check('F1 Logo is Small, Rs 20 (size chart and VentureAdda agree)', (await page.textContent('.price-now')) === '₹20' &&
    (await page.textContent('.fixed-size-band')) === 'Small, 1 to 2 in');
  check('no size picker on the page', (await page.locator('input[name="size"]').count()) === 0);
  await page.click('.btn-add');
  check('cart badge shows 1', (await page.textContent('.cart-count')) === '1');

  await page.goto(`${base}sticker.html?s=kalesh-aurat`, { waitUntil: 'networkidle' });
  check('category tag links to its category', (await page.getAttribute('.product-tags a.tag', 'href')) === 'index.html?cat=memes#gallery');
  await page.click('.cat-menu-btn');
  check('nav menu on other pages links to the filtered gallery', (await page.getAttribute('.cat-menu-list a[data-cat="sports"]', 'href')) === 'index.html?cat=sports#gallery');
  await page.keyboard.press('Escape');
  check('Kalesh Aurat is Large, Rs 50', (await page.textContent('.price-now')) === '₹50' &&
    (await page.textContent('.fixed-size-band')) === 'Large, 3+ in');
  await page.click('.qty-plus');
  check('quantity 2 shows Rs 100', (await page.textContent('.price-now')) === '₹100');
  await page.click('.btn-add');
  check('cart badge shows 3', (await page.textContent('.cart-count')) === '3');
  check('similar stickers are listed', (await page.locator('.similar-grid > li').count()) > 0);

  // ---- cart ----
  await page.goto(`${base}cart.html`, { waitUntil: 'networkidle' });
  check('cart lists 2 lines', (await page.locator('.cart-line').count()) === 2);
  check('cart total is Rs 120', (await page.textContent('.sum-price')) === '₹120');
  await page.locator('.cart-line').first().locator('button[data-step="1"]').click();
  check('stepper raises the total to Rs 140', (await page.textContent('.sum-price')) === '₹140');

  // Carts saved while sizes were selectable are merged per sticker; junk is dropped.
  await page.evaluate(() => {
    const cart = JSON.parse(localStorage.getItem('glood:cart'));
    cart.push({ slug: 'baka', size: 's', qty: 1 }, { slug: 'baka', size: 'l', qty: 2 },
      { slug: 'not-a-sticker', qty: 3 }, { slug: 'box-box-box', qty: 'lots' });
    localStorage.setItem('glood:cart', JSON.stringify(cart));
  });
  await page.reload({ waitUntil: 'networkidle' });
  check('old per-size lines merge, junk is dropped', (await page.locator('.cart-line').count()) === 3 &&
    (await page.textContent('.sum-price')) === '₹230');

  // ---- checkout from the cart ----
  await page.click('.cart-checkout');
  await page.waitForSelector('dialog.checkout[open]');
  await page.click('.checkout-place');
  check('empty form is refused with a message', ((await page.textContent('.checkout-error')) || '').includes('Add a name'));
  await page.fill('input[name="fullname"]', 'Test Buyer');
  await page.fill('input[name="phone"]', '+91 98765 43210');
  await page.fill('textarea[name="address"]', 'Hostel J, room 214');
  await page.check('input[name="payment"][value="upi"]');
  await page.click('.checkout-place');
  await page.waitForSelector('.checkout-done:not([hidden])');
  const opened = await page.evaluate(() => window.__opened);
  const message = opened[0] ? decodeURIComponent(new URL(opened[0]).searchParams.get('text')) : '';
  check('WhatsApp opened once from the click', opened.length === 1 && opened[0].startsWith('https://wa.me/'), JSON.stringify(opened));
  check('message lists each sticker with its size', message.includes('2 x F1 Logo (1 to 2 in), ₹40') &&
    message.includes('2 x Kaali Sadi Aurat (3+ in), ₹100') && message.includes('3 x Baka (2 to 3 in), ₹90'), message);
  check('message has total, payment, buyer', message.includes('Total: ₹230') && message.includes('Paying by: UPI') &&
    message.includes('Name: Test Buyer') && message.includes('Number: 919876543210') && message.includes('Deliver to: Hostel J, room 214'), message);
  check('message has an order id', /Order: GLD-[23456789A-HJKMNP-Z]{5}/.test(message), message);
  check('confirmation screen shows the order', ((await page.textContent('.done-id')) || '').includes('₹230'));
  check('cart is emptied after placing', (await page.evaluate(() => localStorage.getItem('glood:cart'))) === '[]');
  await page.click('.done-close');
  // The dialog's close event is dispatched as a separate task, so wait for the page to react.
  const emptyShown = await page.waitForSelector('.cart-empty', { state: 'visible', timeout: 2000 }).then(() => true, () => false);
  check('empty cart state after closing', emptyShown);

  // ---- buy now leaves the cart alone and remembers the buyer ----
  await page.goto(`${base}sticker.html?s=baka`, { waitUntil: 'networkidle' });
  await page.click('.btn-buy');
  await page.waitForSelector('dialog.checkout[open]');
  check('buyer details are remembered', (await page.inputValue('input[name="fullname"]')) === 'Test Buyer');
  await page.click('.checkout-place');
  await page.waitForSelector('.checkout-done:not([hidden])');
  const opened2 = await page.evaluate(() => window.__opened);
  const msg2 = decodeURIComponent(new URL(opened2.at(-1)).searchParams.get('text'));
  check('buy now orders just that sticker', msg2.includes('1 x Baka (2 to 3 in), ₹30') && msg2.includes('Total: ₹30'), msg2);
  check('buy now does not touch the cart', (await page.evaluate(() => localStorage.getItem('glood:cart'))) === '[]');

  // ---- unknown product ----
  await page.goto(`${base}sticker.html?s=nope`, { waitUntil: 'networkidle' });
  check('unknown sticker shows the not-found message', await page.isVisible('.not-found'));

  // ---- motion switch ----
  await page.goto(base, { waitUntil: 'networkidle' });
  await page.click('.motion-toggle');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  check('motion off: still laptop, no pinned story', await page.evaluate(() =>
    document.documentElement.classList.contains('reduced-motion') && document.documentElement.classList.contains('story-still') && !document.querySelector('.pin-spacer')));
  check('motion off is remembered', (await page.textContent('.motion-label')) === 'Motion off');
  await page.click('.motion-toggle');
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);
  check('motion back on', await page.evaluate(() => !!document.querySelector('.pin-spacer')));

  check('no page or console errors', errors.length === 0, errors.join(' | '));
  await context.close();
} finally {
  await browser.close();
  await server?.close();
}

console.log(failures ? `\n${failures} check(s) failed` : '\nAll shop checks passed');
process.exitCode = failures ? 1 : 0;

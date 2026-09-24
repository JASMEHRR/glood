// End-to-end check of the shop: product page, cart, checkout, WhatsApp message, motion switch.
// Serves ./dist, so run `npm run build` first.
//
//   npm run build && npm run test:shop
//
// Exits non-zero on the first failed check. window.open is stubbed so no real WhatsApp tab opens;
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

const server = await preview({ root: ROOT, preview: { port: 4176 }, logLevel: 'error' });
const base = server.resolvedUrls.local[0];
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
  check('gallery has every sticker', (await page.locator('.sticker-grid > li').count()) === 165,
    `found ${await page.locator('.sticker-grid > li').count()}`);

  // ---- product page ----
  await page.goto(`${base}sticker.html?s=lap-1-delulu`, { waitUntil: 'networkidle' });
  check('product page shows the sticker', (await page.textContent('.product-title')) === 'Lap 1 Delulu');
  check('default price is Medium', (await page.textContent('.price-now')) === '₹30');
  await page.click('.opt-l');
  await page.click('.qty-plus');
  check('Large x2 is ₹100', (await page.textContent('.price-now')) === '₹100');
  await page.click('.btn-add');
  await page.waitForTimeout(300);
  check('cart badge shows 2', (await page.textContent('.cart-count')) === '2');
  check('similar stickers are listed', (await page.locator('.similar-grid > li').count()) > 0);

  // Add a second product, Small x1.
  await page.goto(`${base}sticker.html?s=mochi-chan`, { waitUntil: 'networkidle' });
  await page.click('.opt-s');
  await page.click('.btn-add');
  check('cart badge shows 3', (await page.textContent('.cart-count')) === '3');

  // ---- cart ----
  await page.goto(`${base}cart.html`, { waitUntil: 'networkidle' });
  check('cart lists 2 lines', (await page.locator('.cart-line').count()) === 2);
  check('cart total is ₹120', (await page.textContent('.sum-price')) === '₹120');
  await page.locator('.cart-line').first().locator('button[data-step="1"]').click();
  check('stepper raises the total to ₹170', (await page.textContent('.sum-price')) === '₹170');

  // Cart survives a reload and rejects junk written into storage.
  await page.evaluate(() => {
    const cart = JSON.parse(localStorage.getItem('glood:cart'));
    cart.push({ slug: 'not-a-sticker', size: 'm', qty: 3 }, { slug: 'mochi-chan', size: 'xl', qty: 1 }, { slug: 'baka', size: 's', qty: 'lots' });
    localStorage.setItem('glood:cart', JSON.stringify(cart));
  });
  await page.reload({ waitUntil: 'networkidle' });
  check('bad cart entries are dropped on load', (await page.locator('.cart-line').count()) === 2);

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
  check('message lists both stickers with sizes', message.includes('3 x Lap 1 Delulu (3+ in), ₹150') && message.includes('1 x Mochi-chan (1 to 2 in), ₹20'), message);
  check('message has total, payment, buyer', message.includes('Total: ₹170') && message.includes('Paying by: UPI') &&
    message.includes('Name: Test Buyer') && message.includes('Number: 919876543210') && message.includes('Deliver to: Hostel J, room 214'), message);
  check('message has an order id', /Order: GLD-[23456789A-HJKMNP-Z]{5}/.test(message), message);
  check('confirmation screen shows the order', ((await page.textContent('.done-id')) || '').includes('₹170'));
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
  check('buy now orders just that sticker', msg2.includes('1 x BAKA! (2 to 3 in), ₹30') && msg2.includes('Total: ₹30'), msg2);
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
  await server.close();
}

console.log(failures ? `\n${failures} check(s) failed` : '\nAll shop checks passed');
process.exitCode = failures ? 1 : 0;

// Checkout, modelled on VentureAdda's CheckoutModal.
//
// No money is taken on the site and there is no server: placing an order writes it out as a
// WhatsApp message to GLOOD, and the buyer presses send. That is why the WhatsApp window is opened
// straight from the click (no awaits first, or popup blockers eat it), and why the confirmation
// screen keeps an "Open WhatsApp" button for when it was blocked anyway.
//
// The buyer's own details are remembered on this device so the next order is two taps. Details typed
// for somebody else are not.

import { describe, total, rupees, setQty, getCart, onCart, MAX_QTY, newOrderId, orderMessage,
  whatsappLink, hasShopNumber, PAYMENT_LABELS } from './shop.js';
import { escapeHtml } from './chrome.js';

const BUYER_KEY = 'glood:buyer';

function readBuyer() {
  try {
    const v = JSON.parse(window.localStorage.getItem(BUYER_KEY) || 'null');
    if (!v || typeof v !== 'object') return { name: '', phone: '', address: '' };
    const str = (x) => (typeof x === 'string' ? x : '');
    return { name: str(v.name), phone: str(v.phone), address: str(v.address) };
  } catch {
    return { name: '', phone: '', address: '' };
  }
}

function rememberBuyer(buyer) {
  try {
    window.localStorage.setItem(BUYER_KEY, JSON.stringify(buyer));
  } catch {
    // Not worth an error: the order still goes through, they just retype it next time.
  }
}

let dialog;

function ensureDialog() {
  if (dialog) return dialog;
  dialog = document.createElement('dialog');
  dialog.className = 'checkout';
  dialog.setAttribute('aria-labelledby', 'checkout-title');
  document.body.append(dialog);
  return dialog;
}

/**
 * @param {object} opts
 * @param {'cart'|'buynow'} opts.source  cart: lines come from (and edit) the cart. buynow: a single
 *   product, edited locally, and the cart is left alone.
 * @param {{slug:string,size:string,qty:number}[]} [opts.lines]  for buynow
 * @param {() => void} [opts.onPlaced]
 */
export function openCheckout({ source, lines: buyNowLines = [], onPlaced = () => {} }) {
  const dlg = ensureDialog();
  const remembered = readBuyer();
  let local = buyNowLines.map((l) => ({ ...l }));
  const entries = () => (source === 'cart' ? getCart() : local);
  const state = { forSomeoneElse: false, placed: null };

  dlg.innerHTML = `
    <form class="checkout-form" novalidate>
      <header class="checkout-head">
        <h2 id="checkout-title">Order from GLOOD</h2>
        <button type="button" class="checkout-close" aria-label="Close">&times;</button>
      </header>
      <ul class="checkout-lines"></ul>
      <p class="checkout-total"><span>Total</span><strong></strong></p>

      <fieldset class="checkout-fields">
        <label class="check"><input type="checkbox" name="someoneElse"> I&rsquo;m ordering for someone else</label>
        <label class="field"><span class="field-label" data-self="Your name" data-other="Their name">Your name</span>
          <input name="fullname" required maxlength="60" autocomplete="name" placeholder="Aarav"></label>
        <label class="field"><span class="field-label" data-self="Your WhatsApp number" data-other="Their WhatsApp number">Your WhatsApp number</span>
          <input name="phone" required inputmode="tel" autocomplete="tel" placeholder="919876543210">
          <small>With country code, so GLOOD can reach you.</small></label>
        <label class="field"><span class="field-label">Deliver to</span>
          <textarea name="address" required maxlength="240" rows="2" autocomplete="street-address" placeholder="House, street, area, city, PIN"></textarea></label>
      </fieldset>

      <fieldset class="checkout-pay">
        <legend>Paying by</legend>
        <label class="choice"><input type="radio" name="payment" value="cod" checked>
          <span><strong>${PAYMENT_LABELS.cod}</strong><small>Pay when your stickers arrive.</small></span></label>
        <label class="choice"><input type="radio" name="payment" value="upi">
          <span><strong>UPI</strong><small>You and GLOOD settle it on WhatsApp.</small></span></label>
      </fieldset>

      <p class="checkout-note wa">WhatsApp opens with your order written out, in a chat from you to GLOOD.
        You press send. Nothing reaches GLOOD until you do.</p>
      ${hasShopNumber() ? '' : '<p class="checkout-note setup">Shop number not set yet (src/config.js): WhatsApp will ask you which chat to send the order to.</p>'}
      <p class="checkout-note small">No money is paid on this site.</p>
      <p class="checkout-error" role="alert"></p>

      <footer class="checkout-actions">
        <button type="button" class="btn btn-ghost checkout-cancel">Cancel</button>
        <button type="submit" class="btn checkout-place">Place order</button>
      </footer>
    </form>
    <section class="checkout-done" hidden></section>`;

  const form = dlg.querySelector('form');
  const list = dlg.querySelector('.checkout-lines');
  const totalEl = dlg.querySelector('.checkout-total strong');
  const placeBtn = dlg.querySelector('.checkout-place');
  const err = dlg.querySelector('.checkout-error');
  form.fullname.value = remembered.name;
  form.phone.value = remembered.phone;
  form.address.value = remembered.address;

  function renderLines() {
    const lines = describe(entries());
    list.innerHTML = lines.map((l) => `
      <li data-slug="${escapeHtml(l.slug)}" data-size="${l.size}">
        <img src="${l.sticker.url}" alt="" width="48" height="48" loading="lazy">
        <span class="line-name">${escapeHtml(l.sticker.title)}<small>${l.sizeInfo.label}</small></span>
        <span class="stepper">
          <button type="button" data-step="-1" aria-label="${l.qty === 1 ? 'Remove' : 'One less'} ${escapeHtml(l.sticker.title)}">&minus;</button>
          <span aria-live="polite">${l.qty}</span>
          <button type="button" data-step="1" aria-label="One more ${escapeHtml(l.sticker.title)}" ${l.qty >= MAX_QTY ? 'disabled' : ''}>+</button>
        </span>
        <span class="line-total">${rupees(l.total)}</span>
      </li>`).join('');
    totalEl.textContent = rupees(total(lines));
    placeBtn.textContent = lines.length ? `Place order · ${rupees(total(lines))}` : 'Nothing to order';
    placeBtn.disabled = lines.length === 0;
  }

  list.addEventListener('click', (e) => {
    const btn = e.target.closest('button[data-step]');
    if (!btn) return;
    const li = btn.closest('li');
    const { slug, size } = li.dataset;
    const step = Number(btn.dataset.step);
    if (source === 'cart') {
      const current = getCart().find((x) => x.slug === slug && x.size === size);
      setQty(slug, size, (current?.qty ?? 0) + step);
    } else {
      local = local.map((x) => (x.slug === slug && x.size === size ? { ...x, qty: Math.min(MAX_QTY, x.qty + step) } : x))
        .filter((x) => x.qty > 0);
      renderLines();
    }
  });
  const stopCartWatch = source === 'cart' ? onCart(() => { if (!state.placed) renderLines(); }) : null;
  renderLines();

  form.someoneElse.addEventListener('change', () => {
    state.forSomeoneElse = form.someoneElse.checked;
    for (const label of form.querySelectorAll('.field-label[data-self]')) {
      label.textContent = state.forSomeoneElse ? label.dataset.other : label.dataset.self;
    }
    // Clear on the way in, put your own back on the way out, so neither is left half-typed.
    form.fullname.value = state.forSomeoneElse ? '' : remembered.name;
    form.phone.value = state.forSomeoneElse ? '' : remembered.phone;
  });

  function close() {
    stopCartWatch?.();
    if (dlg.open) dlg.close();
  }
  dlg.querySelector('.checkout-close').addEventListener('click', close);
  dlg.querySelector('.checkout-cancel').addEventListener('click', close);
  dlg.addEventListener('close', () => stopCartWatch?.(), { once: true });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const lines = describe(entries());
    const buyer = {
      name: form.fullname.value.trim(),
      phone: form.phone.value.replace(/\D/g, ''),
      address: form.address.value.trim(),
    };
    const problems = [];
    if (!lines.length) problems.push('Your order is empty.');
    if (!buyer.name) problems.push('Add a name.');
    if (buyer.phone.length < 10 || buyer.phone.length > 15) problems.push('Add a WhatsApp number with country code (10 to 15 digits).');
    if (!buyer.address) problems.push('Add where to deliver.');
    if (problems.length) {
      err.textContent = problems.join(' ');
      return;
    }
    err.textContent = '';
    const payment = form.payment.value === 'upi' ? 'upi' : 'cod';
    const orderId = newOrderId();
    const message = orderMessage({ lines, orderId, buyer, payment, forSomeoneElse: state.forSomeoneElse });
    const link = whatsappLink(message);

    // Opened here, inside the submit handler, while it still counts as a user gesture.
    window.open(link, '_blank', 'noopener');

    rememberBuyer(state.forSomeoneElse ? { ...remembered, address: buyer.address } : buyer);
    state.placed = { orderId, lines, link };
    showDone(orderId, lines, link);
    onPlaced(orderId);
  });

  function showDone(orderId, lines, link) {
    form.hidden = true;
    const done = dlg.querySelector('.checkout-done');
    done.hidden = false;
    done.innerHTML = `
      <header class="checkout-head">
        <h2 id="checkout-title">Order ready to send</h2>
        <button type="button" class="checkout-close" aria-label="Close">&times;</button>
      </header>
      <p class="done-id">Order <strong>${orderId}</strong> · ${rupees(total(lines))}</p>
      <p class="checkout-note wa">WhatsApp should be opening with your order written out.
        <strong>Press send there</strong> so GLOOD gets it. If it did not open, use the button below.</p>
      <footer class="checkout-actions">
        <button type="button" class="btn btn-ghost done-close">Done</button>
        <a class="btn btn-wa" href="${link}" target="_blank" rel="noopener noreferrer">Open WhatsApp</a>
      </footer>`;
    done.querySelector('.checkout-close').addEventListener('click', close);
    done.querySelector('.done-close').addEventListener('click', close);
  }

  dlg.showModal();
  (form.fullname.value ? form.address : form.fullname).focus();
}


// Shared page chrome: nav (with the motion switch and cart count), footer, toast, and the
// motion preference.

import logoStickerUrl from '../assets/glood-logo-sticker.svg?url';
import { INSTAGRAM_URL } from '../config.js';
import { onCart, count } from './shop.js';

const MOTION_KEY = 'glood:motion';

/**
 * Motion is ON unless the visitor has switched it off with the nav toggle. At the owner's request this
 * deliberately does not follow the device's reduce-motion setting (see DECISIONS.md); the toggle is
 * the way to turn it off, and the choice is remembered.
 */
export function motionEnabled() {
  try {
    return window.localStorage.getItem(MOTION_KEY) !== 'off';
  } catch {
    return true;
  }
}

function setMotion(on) {
  try {
    window.localStorage.setItem(MOTION_KEY, on ? 'on' : 'off');
  } catch {
    // Blocked storage: the switch still applies to this page view.
  }
}

export function applyMotionClass() {
  document.documentElement.classList.toggle('reduced-motion', !motionEnabled());
}

const CART_ICON = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M3 4h2.2l2.1 10.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.5L21 8H6.3" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="10" cy="20" r="1.6" fill="currentColor"/><circle cx="17" cy="20" r="1.6" fill="currentColor"/></svg>';

/**
 * Fills <header class="nav"></header>. `reloadOnMotion` is for the home page, whose scroll story is
 * built once at load: switching motion there reloads so the story is rebuilt the right way.
 */
export function mountNav({ home = false, reloadOnMotion = false } = {}) {
  const nav = document.querySelector('header.nav');
  if (!nav) throw new Error('Missing <header class="nav">');
  const base = home ? '' : 'index.html';
  nav.innerHTML = `
    <a class="nav-logo" href="${home ? '#top' : 'index.html'}" aria-label="GLOOD home">
      <img src="${logoStickerUrl}" alt="" width="1604" height="1019" />
    </a>
    <nav aria-label="Main">
      <a href="${base}#gallery">Stickers</a>
      <a href="${base}#drops">Fresh drops</a>
      <a href="${base}#about">Story</a>
    </nav>
    <div class="nav-actions">
      <button type="button" class="motion-toggle" aria-pressed="true">
        <span class="motion-dot" aria-hidden="true"></span><span class="motion-label">Motion on</span>
      </button>
      <a class="btn btn-small cart-link" href="cart.html" aria-label="Cart">
        ${CART_ICON}<span class="cart-word">Cart</span><span class="cart-count" hidden>0</span>
      </a>
    </div>`;

  const toggle = nav.querySelector('.motion-toggle');
  const paint = () => {
    const on = motionEnabled();
    toggle.setAttribute('aria-pressed', String(on));
    toggle.querySelector('.motion-label').textContent = on ? 'Motion on' : 'Motion off';
    toggle.title = on ? 'Turn animations off' : 'Turn animations on';
  };
  paint();
  toggle.addEventListener('click', () => {
    setMotion(!motionEnabled());
    if (reloadOnMotion) {
      window.location.reload();
      return;
    }
    applyMotionClass();
    paint();
  });

  const badge = nav.querySelector('.cart-count');
  const link = nav.querySelector('.cart-link');
  onCart((cart) => {
    const n = count(cart);
    badge.hidden = n === 0;
    badge.textContent = String(n);
    link.setAttribute('aria-label', n ? `Cart, ${n} sticker${n === 1 ? '' : 's'}` : 'Cart, empty');
  });
}

export function mountFooter() {
  const footer = document.querySelector('footer.footer');
  if (!footer) return;
  footer.innerHTML = `
    <img class="footer-logo" src="${logoStickerUrl}" alt="GLOOD" width="1604" height="1019" loading="lazy" />
    <p class="footer-tagline">Stick it everywhere.</p>
    <a class="btn btn-insta" href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="17.4" cy="6.6" r="1.4" fill="currentColor"/></svg>
      Follow GLOOD on Instagram
    </a>
    <p class="footer-small">&copy; GLOOD stickers</p>`;
}

let toastTimer;
/** A small confirmation that slides in at the bottom. `html` is trusted markup built by the caller. */
export function toast(html) {
  let el = document.querySelector('.toast');
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.append(el);
  }
  el.innerHTML = html;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 3200);
}

export const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

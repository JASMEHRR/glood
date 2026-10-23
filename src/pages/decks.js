// Decks tab behind a passcode. The deck list ships encrypted (scripts/seal-decks.mjs), and only the
// right passcode decrypts it; the passcode itself is never in the code. The deck pages stay open by URL.
import '../base.js';
import { mountNav, mountFooter } from '../js/chrome.js';
import sealed from './decks.sealed.json';

mountNav();
mountFooter();

const KEY = 'glood:decks';
const lock = document.getElementById('lock');
const decks = document.getElementById('decks');
const grid = document.getElementById('grid');
const err = document.getElementById('err');
const bytes = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

async function unseal(pass) {
  const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
  const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt: bytes(sealed.salt), iterations: sealed.iter, hash: 'SHA-256' },
    base, { name: 'AES-GCM', length: 256 }, false, ['decrypt']);
  // AES-GCM refuses to decrypt with a wrong key, so a wrong passcode throws here
  return new TextDecoder().decode(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: bytes(sealed.iv) }, key, bytes(sealed.data)));
}

function open(html) {
  grid.innerHTML = html; // our own cards, authenticated by AES-GCM
  lock.hidden = true;
  decks.hidden = false;
}

try {
  const saved = sessionStorage.getItem(KEY);
  if (saved?.includes('class="deck"')) open(saved); // older sessions stored just 'ok'
} catch {}

document.getElementById('pinform').addEventListener('submit', async (e) => {
  e.preventDefault();
  const input = document.getElementById('pin');
  const button = e.target.querySelector('button');
  button.disabled = true;
  err.textContent = '';
  try {
    const html = await unseal(input.value.trim());
    try { sessionStorage.setItem(KEY, html); } catch {}
    open(html);
  } catch {
    err.textContent = 'Wrong passcode';
    lock.classList.remove('shake'); void lock.offsetWidth; lock.classList.add('shake');
    input.value = '';
    input.focus();
  } finally {
    button.disabled = false;
  }
});

// Decks page behind a simple passcode. This only hides the list from casual visitors: the code ships
// in the page, and the deck links themselves stay reachable by URL.
import '../base.js';
import { mountNav, mountFooter } from '../js/chrome.js';

mountNav();
mountFooter();

const PASS = '1610';
const KEY = 'glood:decks';
const lock = document.getElementById('lock');
const decks = document.getElementById('decks');
const err = document.getElementById('err');

function open() {
  lock.hidden = true;
  decks.hidden = false;
}

try {
  if (sessionStorage.getItem(KEY) === 'ok') open();
} catch {}

document.getElementById('pinform').addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.getElementById('pin');
  if (input.value.trim() === PASS) {
    try { sessionStorage.setItem(KEY, 'ok'); } catch {}
    open();
  } else {
    err.textContent = 'Wrong passcode';
    lock.classList.remove('shake'); void lock.offsetWidth; lock.classList.add('shake');
    input.value = '';
    input.focus();
  }
});

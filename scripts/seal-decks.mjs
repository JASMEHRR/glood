// Locks the Decks tab: encrypts the deck cards with the passcode, so neither the passcode nor the
// list ships in readable form (the repo is public). Re-run after adding a deck or changing the code.
//   node scripts/seal-decks.mjs <passcode>
// Reads scripts/decks.private.html (gitignored), writes src/pages/decks.sealed.json.
import { webcrypto as crypto } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';

const pass = process.argv[2];
if (!pass) {
  console.error('usage: node scripts/seal-decks.mjs <passcode>');
  process.exit(1);
}
const ITER = 600000; // slows down guessing; a 4-digit code still falls to a patient offline attack
const html = readFileSync(new URL('./decks.private.html', import.meta.url), 'utf8');
const salt = crypto.getRandomValues(new Uint8Array(16));
const iv = crypto.getRandomValues(new Uint8Array(12));
const base = await crypto.subtle.importKey('raw', new TextEncoder().encode(pass), 'PBKDF2', false, ['deriveKey']);
const key = await crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations: ITER, hash: 'SHA-256' }, base,
  { name: 'AES-GCM', length: 256 }, false, ['encrypt']);
const data = new Uint8Array(await crypto.subtle.encrypt({ name: 'AES-GCM', iv }, key, new TextEncoder().encode(html)));
const b64 = (u) => Buffer.from(u).toString('base64');
writeFileSync(new URL('../src/pages/decks.sealed.json', import.meta.url),
  JSON.stringify({ iter: ITER, salt: b64(salt), iv: b64(iv), data: b64(data) }) + '\n');
console.log(`sealed ${html.split('class="deck"').length - 1} decks`);

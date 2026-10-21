import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig({
  build: {
    target: 'es2022',
    assetsInlineLimit: 0, // keep stickers as separate cacheable files
    // The largest chunk is Three.js (about 550 kB, 138 kB gzipped). It is already split out and
    // loaded with import() after the home page has rendered, so it never blocks first paint.
    chunkSizeWarningLimit: 600,
    rolldownOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        sticker: resolve(import.meta.dirname, 'sticker.html'),
        cart: resolve(import.meta.dirname, 'cart.html'),
        decks: resolve(import.meta.dirname, 'decks.html'),
        deck: resolve(import.meta.dirname, 'deck/index.html'), // the pitch deck, at /deck/
      },
    },
  },
});

import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'es2022',
    assetsInlineLimit: 0, // keep stickers as separate cacheable files
    // The largest chunk is Three.js (about 550 kB, 138 kB gzipped). It is already split out and
    // loaded with import() after the page has rendered, so it never blocks first paint.
    chunkSizeWarningLimit: 600,
  },
});

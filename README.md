# GLOOD

Website for GLOOD stickers. Stick it everywhere.

A big GLOOD logo whose eyes follow your cursor, which flies onto a 3D laptop as you scroll. More stickers
slap onto the lid until it is fully sticker-bombed, then the lid opens and the screen lights up with the
sticker gallery. Below that: the gallery with category filters and a peel-on-hover effect, Fresh Drops,
the brand story, and the footer.

Built with Vite, plain JavaScript, Three.js and GSAP (ScrollTrigger). No paid services, no API keys.

## Run it locally

You need [Node.js](https://nodejs.org/) 20.19 or newer.

```bash
npm install
```

```bash
npm run dev
```

Open the address it prints (usually http://localhost:5173).

To check the production build:

```bash
npm run build
```

```bash
npm run preview
```

## Deploy on Vercel (free) in 3 clicks

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Pick the `glood` repository and click **Import**.
3. Click **Deploy**. `vercel.json` already tells Vercel it is a Vite site that builds into `dist`, so there is
   nothing to fill in.

Every push to `main` redeploys automatically.

## Change the Instagram link

Edit `src/config.js` and replace the placeholder with your profile URL.

## Adding stickers later

Every sticker needs one entry in a manifest file. The site reads the manifest, builds the gallery card and
the filter counts from it, and Vite takes care of hashing and caching the image.

Categories (the `category` field) must be one of: `racing`, `anime`, `gaming`, `gym`, `memes`.

### Option A: you already have a clean sticker image (easiest)

1. Export the sticker as a PNG or WebP with a transparent background, a white die-cut border, and at most
   1200px on its longest side.
2. Put it in `src/stickers/photo/`, for example `src/stickers/photo/pit-crew.webp`.
3. Add an entry to `src/stickers/photo/photo-stickers.json`:

   ```json
   {
     "slug": "pit-crew",
     "title": "Pit Crew",
     "category": "racing",
     "file": "pit-crew.webp",
     "width": 900,
     "height": 700
   }
   ```

   `width` and `height` are the image's pixel size (used for the aspect ratio). You can also add
   `"peelInset": 0.1` to fine-tune where the hover peel starts (0 is the bounding box corner).
4. Run `npm run dev` and check the gallery.

A hand-made SVG works the same way: put it in `src/stickers/custom/` and add the entry to
`src/stickers/custom/custom-stickers.json` (leave out the `generated` field).

### Option B: raw images with a plain white background

1. Put the image in `source-assets/sticker-board/` or `source-assets/sticker-set/`.
2. Check it for copyrighted or trademarked content (characters, team or club logos, album art, other brands).
   Add a line for it to `SAFE` (or `RISKY`, with the reason) in `scripts/process_assets.py`.
3. Run `npm run assets`. It removes the white background, adds a white die-cut border, converts it to WebP,
   updates `photo-stickers.json` and rewrites `ASSETS.md`. Entries you added by hand (Option A) are kept.

Note: `source-assets/` is not in git (about 360 MB of originals), so Option B only works on the computer
that has those files.

### Option C: a new original design in the GLOOD style

Add a design to `DESIGNS` in `scripts/build-stickers.mjs` and run `npm run stickers`. It writes the SVG and
its manifest entry.

### Putting a sticker on the 3D laptop

The laptop uses the list `LAPTOP_ORDER` in `src/js/stickers.js` (14 on desktop, the first 8 on phones, after the
logo). Swap slugs in that list to change which stickers get slapped on.

## Useful scripts

| Command | What it does |
|---|---|
| `npm run dev` | Local dev server with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run shots` | Screenshots of the scroll story and every section at 1440px and 390px into `screenshots/` (run `npm run build` first, and `npx playwright install chromium` once) |
| `npm run stickers` | Regenerates the original SVG stickers |
| `npm run assets` | Screens and optimises raw sticker images (needs Python with Pillow and numpy) |
| `npm run logo` | Re-traces the logo SVG from `glood-logo.png` and prints how closely it matches |

## Project notes

- `ASSETS.md`: every source image, which ones are used, and which were excluded for copyright reasons.
- `DECISIONS.md`: choices made while building, and why.
- Respects `prefers-reduced-motion`: the scroll story is replaced by a still of the sticker-bombed laptop.
- Falls back to a flat sticker collage if WebGL is not available.

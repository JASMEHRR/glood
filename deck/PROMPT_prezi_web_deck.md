Build me a Prezi-style presentation that runs in the browser: one zooming canvas where a camera flies between slides, with animated content on every slide. It must look like a designed product, not a template.

## 1. What I'm presenting

- Topic / brand: [e.g. GLOOD, a student sticker brand]
- Audience and setting: [e.g. college class, projector, 7 minutes]
- Slides, in order (title + what goes on it):
  1. [Cover: ...]
  2. [...]
  ...
- Images / logos / screenshots to use: [file paths or "make simple placeholders"]
- Speaker notes: [paste per slide, or "write short ones"]
- Website or brand to copy the design language from: [URL or folder, or describe colours, fonts, style]

If something above is missing, make a sensible choice and list your assumptions at the end. Do not invent facts or numbers; leave a clear placeholder like [NUMBER] instead.

## 2. The experience

- **Canvas:** all slides live on one big canvas. The cover is a full-screen hero (big logo or title). The other slides sit around it like cards or stickers, each slightly tilted (±2 to 3 degrees) and at a smaller scale, so the overview looks like a designed collage, not a grid.
- **Camera flights between slides, Prezi-style:** zoom out, travel, zoom back in, along an arc (not a straight slide). Use a log-scale zoom so it feels natural, rotate to cancel each slide's tilt, and ease in-out. About 0.8 s for close slides and 1.2 s for far ones.
- **Entrance animations when the camera arrives** (start around 70% of the flight so it feels connected):
  - headings: float up and fade in
  - cards and images: pop in (scale 0.6 to 1 with a slight overshoot)
  - chips and tags: quick staggered wave
  - stickers or logos: "slap" (land at 160%, squash to 90%, settle at 100%, random tilt)
  - Everything is staggered so a slide builds in about 1 s.
- **Overview:** press O (or click the button) to zoom out to the whole canvas. Click any slide to fly there.
- **Controls:**
  - arrow keys, space, PageUp/PageDown or a click on the stage to move
  - Home / End for the first and last slide
  - F for full screen
  - N for speaker notes
  - swipe on touch screens
- **Deep links:** `#5` in the URL opens slide 5, and the URL updates as you move.
- **Control bar:** small, bottom centre, in the brand style. It fades out after 2.5 s without mouse movement and the cursor hides too, so it's clean on a projector.
- **Notes panel:** shows the current slide's notes. Hidden by default.

## 3. Design quality bar

- Follow the brand's design language exactly (colours as CSS variables, real fonts loaded locally or from Google Fonts, the same border, shadow and corner style).
- Slides are designed at a fixed 1600 x 900 and scaled by the camera, so the layout never reflows.
- Strong hierarchy: one big headline per slide, short supporting text, max about 30 words of body per slide.
- Text must stay sharp after zooming: turn off `will-change` once the camera stops, so the browser re-renders crisply.
- Respect `prefers-reduced-motion` or a motion toggle: jump between slides with no flights or entrances.

## 4. Technical

- Plain HTML, CSS and JavaScript. GSAP from a CDN with a pinned version for the timing. No build step needed, so I can double-click the file. (If a Vite project already exists, add it as a page there instead.)
- **Structure:** each slide is a `<section class="slide" data-notes="...">`. Content is written once in HTML; the script positions the slides on the canvas from a small layout list (x, y, tilt).
- **Camera:** a single transform on the canvas element,
  `translate(viewport centre) rotate(-cam.rot) scale(cam.k) translate(-cam.x, -cam.y)`,
  where `k = min(viewportW / slideW, viewportH / slideH)` for the target slide. Recalculate on resize.
- Decode all images before the first flight (`img.decode()`) to avoid a stutter.
- **Accessibility:** `aria-roledescription="slide"`, `aria-current` on the active slide, visible focus styles on buttons, and a live region announcing "Slide 3 of 14".
- **Performance target:** smooth at 60 fps on a normal laptop. Use only transforms and opacity; no layout animations, no blur filters during flights.

## 5. Check your work before handing it over

1. Open it in a browser (Playwright or similar). Step through every slide and take a screenshot of each after it has built, plus the overview.
2. Look at the screenshots yourself:
   - no overlapping or cut-off text
   - nothing hidden behind the control bar
   - the same alignment across slides
3. Check the console for errors and missing files.
4. Test the keyboard controls, the overview click, deep links, full screen and a phone-sized viewport.
5. Fix what you find, then send me the screenshots, the file location, and the list of assumptions or placeholders.

## 6. Deliver

- The presentation (folder with `index.html` + assets), opening on the cover.
- A one-paragraph "how to present" note: keys, full screen, and that it works offline if all assets are local.
- If I want it online: deploy it (for example to Vercel) and give me the link.

Rules for any text you write: no em dashes or en dashes, no made-up facts or numbers.

# Prompt: build or change the animated GLOOD PowerPoint (and the web deck)

Paste everything below into a new chat (Claude Code on this PC, with access to E:\imp\glood).

---

I want to build or change my GLOOD startup presentation. It is already set up in `E:\imp\glood\deck\`. Read these files first and reuse them instead of starting over:

- `deck.html`: the slides, written as HTML in the GLOOD website's design. This is the single source for both the PowerPoint and the web deck.
- `team.js`: builds the six team slides, including the chibi sticker avatars drawn in SVG.
- `build-deck.mjs`: turns `deck.html` into the PowerPoint (run with `npm run deck`).
- `pack_pptx.py`: assembles the .pptx with python-pptx.
- `effects.ps1`: adds the animations in PowerPoint itself and embeds the fonts.
- `make_fonts.py`: builds installable .ttf fonts from the site's font files.
- `index.html`, `present.js`, `present.css`: the Prezi-style web deck, live at https://glood.vercel.app/deck/

## How the PowerPoint is made

1. **Slides are designed as HTML**
   - Each slide is a `<section class="slide">` of 1600 x 900 px.
   - Speaker notes go in a `data-notes` attribute.
   - The cover slide has `data-cover`.
2. **Playwright renders each slide in layers**
   1. **Backdrop:** the website's landing page with the big GLOOD logo, captured from the built site with the nav hidden. Content slides get a soft, blurred copy.
   2. **Tint:** a see-through colour panel (72% opacity) in the slide's colour, so text stays readable. The cover has no tint.
   3. **Artwork:** what is left of the slide (borders, dots), with transparent background and the text hidden.
   4. **Pop-ups:** every sticker, card, screenshot, chip, eyebrow and page number, saved as its own transparent PNG so each one can animate on its own.
   5. **Text:** every text block is read from the page (position, size, rotation, font, colour, outline, hard shadow) and placed as a real, editable PowerPoint text box in the same spot.
3. **`pack_pptx.py` builds the 16:9 deck** (10 x 5.625 in)
   - Places the backdrop (named `!!Backdrop`), then the tint (named `!!Tint`), then the artwork, then the pop-ups, then the text boxes.
   - Writes the speaker notes.
   - Adds a **Morph transition** to every slide by writing the `p159:morph` XML directly. Setting it through COM gave the wrong effect.
   - The `!!` names make Morph treat the backdrop and tint as the same object across slides, so the background blurs and the colour glides between slides.
4. **`effects.ps1` uses PowerPoint COM** to add entrance animations, all set to play automatically after the previous one:
   - stickers, avatars and the logo: Bounce (id 26), like the website's slap
   - cards and screenshots: Zoom (id 23)
   - chips: Grow & Turn (id 31), in quick staggered waves
   - free text such as headings: Float In (id 42)
   - text inside a card: Fade (id 10), together with its card

   It then saves with `SaveAs(path, 24, -1)`, which embeds the TrueType fonts.
5. **Fonts**
   - Lilita One, Bungee and Space Grotesk come from `node_modules/@fontsource`.
   - `make_fonts.py` merges their latin and latin-ext subsets into .ttf files in `deck/fonts`. Install those once on the PC so PowerPoint can embed them.
   - Lilita One has no ₹ sign, so ₹ is set in Space Grotesk Bold.
6. **Checking**
   - Export every slide to PNG through PowerPoint COM (`Slide.Export`) and look at each one.
   - Render a preview video with `Presentation.CreateVideo` and look at a contact sheet of frames, to confirm Morph and the animations really play.

## How the web deck works (glood.vercel.app/deck/)

- It is a Vite page. `present.js` imports `deck.html` as raw text, re-uses its styles and slides, and runs `team.js`.
- **Cover:** the real landing page. The logo's eyes follow the mouse (`src/js/logo-face.js`).
- **Layout:** the 13 content slides sit around the logo at quarter size, slightly tilted, like stickers on a canvas.
- **Camera:** the camera flies between slides Prezi-style, zooming out, travelling, then zooming in, done with GSAP.
- **On arrival:** each slide's stickers slap in (1.6x, then 0.9x, then 1.0x), cards pop up, chips spin in and text floats up.
- **Controls:** arrow keys, space or click to move. O for overview, N for notes, F for full screen. Swipe on phones. A link like `/deck/#5` opens a slide directly.
- **Screenshots:** the website screenshots used in slides are in `deck/shots/*.webp`.
- **Publishing:** build with `npm run build`. A push to main auto-deploys to Vercel.

## Design language (GLOOD website)

- Colours: orange `#ffa905`, red `#e10b19`, cyan `#00bbd1`, yellow `#ffd400`, pink `#ff8fc7`, green `#3ddc84`, purple `#8a6bff`, cream `#fff4dc`, black.
- Fonts: Lilita One (headings), Bungee (labels and chips, uppercase), Space Grotesk (body).
- Look: neo-brutalist. Thick black borders (4px), hard offset shadows `7px 7px 0 #000`, rounded corners (22px), slightly tilted cards and chips, die-cut stickers with a white border, a dotted paper texture.
- Sticker art: `src/stickers/custom/*.svg` and `src/stickers/photo/*.webp`. The logo is `src/assets/glood-logo.svg`; its orange background rect `.glood-bg` must be hidden or removed when it floats over something.

## Facts to keep right (verified)

| Fact | Value |
|---|---|
| Designs on the website | 167 |
| Categories | 9 (Racing, Anime, Gaming, Gym, Memes, Sports, Music, TV & Film, Superheroes) |
| Anime designs | 22 |
| Prices | ₹20 Small (1 to 2 in), ₹30 Medium (2 to 3 in), ₹50 Large (3+ in); same as VentureAdda |
| Payment | UPI or cash on delivery, orders on WhatsApp |
| Other | Open 24/7; listed on VentureAdda |

## Team (spell exactly; avatar genders as shown)

| Name | Role | Avatar |
|---|---|---|
| JasMehr Singh (capital M) | Founder & CEO | boy, crown and tie |
| Prashant Pal | Head of Design | boy, beret and pencil |
| Meenakshi Sharma | Marketing Lead | girl, bow and megaphone (the only girl) |
| Rishabh Sharma | Sales & Customer Lead | boy, headset |
| Sanyam | Operations Lead | boy, cap |
| Aniket Kumar | Finance Lead | boy, glasses and ₹ coin |

## Run it

From `E:\imp\glood` (Windows with PowerPoint installed):

```
npm run build          (needed for the landing-page backdrop)
npm run deck           (builds deck/GLOOD_Startup_Presentation.pptx)
```

## Lessons learned

- **Prezi can't do these animations.** Its AI editor has none, the classic editor only fades, and its PowerPoint import stalled. That is why the web deck exists.
- **Edit files with the Edit/Write tools,** not PowerShell `[IO.File]`; a path mix-up emptied files twice.
- **Close only the browser tabs you opened,** and keep one open so the tab group survives.
- **Writing style:** no em dashes or en dashes in anything written for me. Only verified facts and realistic numbers.

Now, here is what I want this time: [describe the change]

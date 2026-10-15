# Prompt: make GLOOD motion-graphics overlay clips for a video

Paste everything below into a new chat (Claude Code on this PC, with access to E:\imp\glood).

---

I edit my videos in CapCut and want GLOOD-style motion graphics as **see-through overlay clips** that I place over the footage myself. A working version already exists in `E:\imp\glood\deck\vid\`. Read these files first and reuse them instead of starting over:

- `clip_pack.py`: makes the labelled overlay clips; imports `edit.py` for sprites and motion
- `edit.py`: graphics loading, the slap and slide-in motion curves, sound generation
- `render_overlays.mjs` + `overlays.html`: render title chips, name cards, avatars, logo and stickers to transparent PNGs in the GLOOD style
- `find_slides.py`: finds when each slide appears in a presentation recording (gives the timestamps)

## What each clip must be

- **Format:** 1920 x 1080, 30 fps, **ProRes 4444 with alpha** (`prores_ks -profile:v 4444 -pix_fmt yuva444p10le`), with its own sound (`pcm_s16le`): pops for sticker landings, whooshes for cards.
- **File name** says exactly where it goes:
  `<type><nn>_REC-<m>m<ss.s>s_<what>_<who>.mov`
  REC = start time in the original recording.
- **`PLACEMENT.txt`** lists every clip in order with recording time and project time (+ intro length).
- **`HOW_TO_CAPCUT.md`** gives step-by-step placement.

## The effects

1. **Sticker-bomb transition** (T##, 1.9 s), for each slide or speaker change:
   - About 45 GLOOD stickers slap onto a jittered grid covering the whole frame, in random order, over about 0.5 s. Each one copies the website slap: lands at 1.6x, squashes to 0.9x, settles at 1.0x, with up to ±18 degrees of tilt and a slightly random size.
   - Underneath, a GLOOD-orange panel with the site's dotted texture grows from the centre as a circle, so coverage is complete.
   - While the screen is covered, the next speaker's name card (or the slide title chip) slaps in big in the middle.
   - Then the stickers pop off (shrink and spin) at staggered times and the panel shrinks back, revealing the next slide.
   - The real cut sits in the middle of the clip.
2. **Name card** (N##): white card with a thick black border and hard shadow, the person's sticker avatar, name in Lilita One, role chip in Bungee. It springs up from the bottom with an ease-out-back curve, holds about 6.5 s, then slides out.
3. **Title chip** (C##): black pill with yellow Bungee text ("02 OUR STARTUP"). It springs in from the left, holds about 4 s, then slides out.
4. **Intro and outro cards:** the blurred GLOOD landing page with a slow zoom. The logo, title and team bar slap in, and stickers land in the corners.
5. **Logo PNG** for the top-right corner.

## GLOOD design language

- **Colours:** orange `#ffa905`, red `#e10b19`, cyan `#00bbd1`, yellow `#ffd400`, pink `#ff8fc7`, green `#3ddc84`, purple `#8a6bff`, cream `#fff4dc`, black.
- **Fonts:** Lilita One (headings), Bungee (labels, uppercase), Space Grotesk (body), from `node_modules/@fontsource`.
- **Look:** neo-brutalist. Thick black borders, hard offset shadows (no blur), slight tilts, die-cut stickers with a white border.
- **Stickers:** `src/stickers/custom/*.svg` (rasterised by `render_overlays.mjs`) and `src/stickers/photo/*.webp`.

## Team (spell exactly)

| Name | Role | Avatar |
|---|---|---|
| JasMehr Singh (capital M) | Founder & CEO | boy |
| Prashant Pal | Head of Design | boy |
| Meenakshi Sharma | Marketing Lead | girl |
| Rishabh Sharma | Sales & Customer Lead | boy |
| Sanyam | Operations Lead | boy |
| Aniket Kumar | Finance Lead | boy |

## Lessons learned

- **Check single frames** extracted with `ffmpeg -ss`, composited over a solid colour to see the transparency. Grid previews made with a select + tile filter once showed fake glitches.
- **Prefer many short clips over one full-length overlay.** It is faster, smaller per file, survives a closed session, and is easier to place in CapCut.
- **Edit files with the Edit/Write tools.** PowerShell `[IO.File]` resolved paths against the wrong folder and emptied files.
- **Run Python as `python -I`** and add the script's own folder to `sys.path` before importing `edit`.
- **Writing style:** no em dashes or en dashes in anything written for me.

Now, here is what I want this time: [describe the new clips, e.g. new timestamps, a different video, a new transition style]

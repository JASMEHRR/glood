# Prompt: edit a presentation recording with GLOOD sticker animations

Paste everything below into a new chat (Claude Code on this PC, with access to E:\imp\glood).

---

I have a phone recording of my team presenting the GLOOD startup deck. I want it edited into a 16:9 assignment video with GLOOD-style sticker animations. Everything for this already exists in `E:\imp\glood\deck\vid\`. Read these files first, then reuse or adapt them instead of starting over:

- `find_slides.py`: finds when each slide is on screen
- `render_overlays.mjs` + `overlays.html`: render all graphics as transparent PNGs
- `edit.py`: does the full edit (picture, animations, sound)

## What the finished video has

1. **Picture**
   - The phone video was upright (478 x 850). The landscape classroom shot sits in a strip: `crop=478:246:0:302`.
   - Cropped to 16:9 and upscaled to 1920 x 1080 (lanczos).
   - Steadied with ffmpeg `deshake`, denoised with `hqdn3d`, then `unsharp` plus a small contrast and saturation lift.
   - Do NOT use vidstab. It took the projector content changing for camera motion and garbled the picture after slide changes.
2. **Slide-change detection**
   - Samples the video twice a second and compares the projected screen area (box 110,335 to 390,505 in the phone frame) with the 14 rendered slides in `deck/out/ppt5/s1..s14.png`, using normalised colour thumbnails.
   - Then picks the best order that only moves forward (dynamic programming), so people walking in front of the screen do not flip it.
   - Output goes to `work/slides.json`. Check the times against a contact sheet of frames.
3. **Animations on every slide change**, composited frame by frame in Python with numpy and Pillow:
   - **Sticker slap:** 3 GLOOD stickers slap onto the corners, staggered 0.13 s apart. This copies the website: the sticker lands at 1.6x scale, squashes to 0.9x, springs back to 1.0x with a ±5 to 15 degree tilt. After about 2.5 s each one pops off (shrinks and spins away).
   - **Camera shake:** a small shake, about 7 px and decaying over 0.25 s, each time a sticker lands. To allow it, the picture is decoded slightly larger and the shake moves the crop window.
   - **Flash:** a quick white flash marks the cut.
   - **Slide-title chip:** a black pill with yellow Bungee text ("02 OUR STARTUP") springs in from the left with an ease-out-back curve, holds 4 s, then slides out.
   - **Team name cards:** on team slides, a white card with a hard black shadow shows the person's sticker avatar, name in Lilita One and role chip. It springs up from the bottom and holds 7 s.
   - **Always on:** a small GLOOD logo top right, and an orange progress bar along the bottom.
4. **Intro (4 s) and outro (5 s)**
   - Both use the blurred GLOOD landing page (`deck/out/backdrop.png`) with a slow zoom.
   - The logo, title and team bar slap in, and stickers land in the four corners.
   - The outro shows "Thank you!", the tagline and pills, then fades to black.
5. **Sound**
   - Voices: `highpass=90`, `afftdn` denoise, then `loudnorm` to -16 LUFS. Delayed by the intro length.
   - Effects track made in numpy: a pop (falling sine with fast decay) on every sticker landing, and a whoosh (smoothed noise) on every card.
   - Mixed together with `amix`, padded or trimmed to the video length, with a fade-out at the end.
6. **Encoding**
   - Python pipes raw frames from an ffmpeg decoder, composites them, and pipes them into an `h264_nvenc` encoder (GTX 1650; CQ 20).
   - A final ffmpeg pass muxes in the audio as AAC 192k with `+faststart`.

## Design language (GLOOD website)

- Colours: orange `#ffa905`, red `#e10b19`, cyan `#00bbd1`, yellow `#ffd400`, pink `#ff8fc7`, green `#3ddc84`, purple `#8a6bff`, cream `#fff4dc`, black.
- Fonts: Lilita One (headings), Bungee (labels and chips, uppercase), Space Grotesk (body). They come from `node_modules/@fontsource`.
- Look: neo-brutalist. Thick black borders, hard offset shadows (no blur), slightly tilted cards and chips, die-cut stickers with a white border.
- Sticker art: `src/stickers/custom/*.svg` (GLOOD originals) and `src/stickers/photo/*.webp`.
- Team avatars come from the deck's own team slides (`deck/deck.html` + `deck/team.js`).

## Team (spell exactly)

| Name | Role |
|---|---|
| JasMehr Singh (capital M) | Founder & CEO |
| Prashant Pal | Head of Design |
| Meenakshi Sharma | Marketing Lead |
| Rishabh Sharma | Sales & Customer Lead |
| Sanyam | Operations Lead |
| Aniket Kumar | Finance Lead |

## How to run it

From `E:\imp\glood\deck\vid`, with ffmpeg on PATH:

```
python -I find_slides.py "<video>.mp4" ..\out\ppt5 work\slides.json
node ..\..\deck\vid\render_overlays.mjs      (run from E:\imp\glood: node deck/vid/render_overlays.mjs)
python -I edit.py --test                     (first 40 s only, to check the look)
python -I edit.py                            (full video, about 20 minutes)
```

The output is `GLOOD_Presentation_Edited.mp4`.

## Lessons learned

- **Check single frames, not grids.** Extract them with `ffmpeg -ss <time> -frames:v 1`. A contact-sheet grid built with a select + tile filter once showed fake glitches.
- **Edit files with the Edit/Write tools.** A PowerShell `[IO.File]` read and write can resolve paths against a different folder, and twice it emptied a file.
- **Keep the session open during long renders.** The render runs as a background process, and closing the session stops it.
- **Source quality limits the result.** WhatsApp shrinks video to 478 px wide. Use the original phone recording if possible for a sharper result.
- **Writing style:** no em dashes or en dashes in anything written for me.

Now, here is what I want this time: [describe the new video or change]

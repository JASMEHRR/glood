"""Finds when each slide is on screen in the presentation recording.

Samples the video twice a second, compares the projected screen with the 14 rendered slides, and
picks the best slide order that only ever moves forward (dynamic programming), so a person walking
in front of the screen cannot flip the answer back and forth.

    python -I find_slides.py <video> <slides dir with s1.png..s14.png> <out.json>
"""
import json
import subprocess
import sys

import numpy as np
from PIL import Image

VIDEO, SLIDES, OUT = sys.argv[1], sys.argv[2], sys.argv[3]
FPS = 2
W, H = 478, 850
# The projected screen, in the phone frame (pixels). Kept a little inside the screen edges so
# small camera shifts still land on the slide.
BOX = (110, 335, 390, 505)
GRID = (24, 14)


def describe(img):
    """Small colour thumbnail, each channel normalised so projector brightness does not matter."""
    a = np.asarray(img.convert("RGB").resize(GRID, Image.BILINEAR), dtype=np.float32)
    a = a - a.mean(axis=(0, 1))
    a = a / (a.std() + 1e-6)
    return a.ravel()


slides = []
for i in range(1, 15):
    im = Image.open(f"{SLIDES}/s{i}.png").convert("RGB")
    # The box covers the middle of the screen; take the same share of the slide.
    sw, sh = im.size
    slides.append(describe(im.crop((int(sw * 0.06), int(sh * 0.06), int(sw * 0.94), int(sh * 0.94)))))
slides = np.stack(slides)

raw = subprocess.run(["ffmpeg", "-v", "error", "-i", VIDEO, "-vf", f"fps={FPS}", "-f", "rawvideo", "-pix_fmt", "rgb24", "-"],
                     capture_output=True, check=True).stdout
frames = np.frombuffer(raw, np.uint8).reshape(-1, H, W, 3)
desc = np.stack([describe(Image.fromarray(f).crop(BOX)) for f in frames])
sim = desc @ slides.T / slides.shape[1]  # correlation, -1..1

# Best non-decreasing slide sequence.
n, k = sim.shape
score = np.full((n, k), -1e9)
back = np.zeros((n, k), int)
score[0] = sim[0]
score[0, 1:] -= 0.5  # the video starts on the cover
for t in range(1, n):
    best_prev = np.maximum.accumulate(score[t - 1])
    arg_prev = np.zeros(k, int)
    for j in range(1, k):
        arg_prev[j] = j if score[t - 1, j] >= best_prev[j - 1] else arg_prev[j - 1]
    score[t] = best_prev + sim[t] - 0.02 * (arg_prev != np.arange(k))  # small cost per change
    back[t] = arg_prev
path = [int(np.argmax(score[-1]))]
for t in range(n - 1, 0, -1):
    path.append(int(back[t, path[-1]]))
path = path[::-1]

changes = [{"slide": path[0] + 1, "t": 0.0}]
for t in range(1, n):
    if path[t] != path[t - 1]:
        changes.append({"slide": path[t] + 1, "t": t / FPS})
raw_best = [int(i) + 1 for i in sim.argmax(1)]
json.dump({"changes": changes, "duration": n / FPS, "raw_best": raw_best}, open(OUT, "w"), indent=1)
for c in changes:
    print(f"slide {c['slide']:2d} at {int(c['t'] // 60)}:{c['t'] % 60:05.2f}")
agree = np.mean(np.array(raw_best) == np.array(path) + 1)
print(f"frames where the single best match agrees with the chosen order: {agree:.0%}")

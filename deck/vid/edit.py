"""Edits the GLOOD presentation recording into a 16:9 video with GLOOD-style motion graphics.

  1. Picture: crops the landscape picture out of the upright phone video, steadies the shake
     (ffmpeg deshake), cleans and sharpens it, scales to 1920 x 1080.
  2. Graphics (composited here, frame by frame): intro and outro cards, GLOOD stickers that slap on
     with a small camera shake at every slide change, a title chip per slide, a name card on each
     team member's slide, a small GLOOD logo and a progress bar.
  3. Sound: cleans and levels the voices, adds a pop for every sticker and a whoosh for every card.

    python -I edit.py          full video -> GLOOD_Presentation_Edited.mp4
    python -I edit.py --test   first 40 s only -> work/test.mp4, to check the look quickly
    python -I edit.py --plan   just print what will be animated
(run from deck/vid; needs ffmpeg on PATH, numpy and Pillow; work/slides.json from find_slides.py and
work/gfx from render_overlays.mjs)
"""
import json
import math
import random
import subprocess
import sys
import wave
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

HERE = Path(__file__).resolve().parent
WORK = HERE / "work"
GFX = WORK / "gfx"
SRC = HERE / "WhatsApp Video 2026-10-14 at 8.23.46 PM.mp4"
ROOT = HERE.parents[1]
OUT = HERE / "GLOOD_Presentation_Edited.mp4"

W, H, FPS = 1920, 1080, 30
PAD_X, PAD_Y = 12, 7  # extra picture around the frame, so the camera shake never shows an edge
INTRO, OUTRO = 4.0, 5.0
SR = 44100

changes = json.load(open(WORK / "slides.json"))["changes"]
probe = subprocess.run(["ffprobe", "-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", str(SRC)],
                       capture_output=True, text=True, check=True)
SRC_DUR = float(probe.stdout)
TEST = "--test" in sys.argv
if TEST:
    SRC_DUR = 40.0
    OUT = WORK / "test.mp4"
    changes = [c for c in changes if c["t"] < SRC_DUR - 3]
MAIN_FRAMES = int(SRC_DUR * FPS)
TOTAL = INTRO + MAIN_FRAMES / FPS + OUTRO


# ---------------------------------------------------------------- sprites

def load(name, width=None):
    im = Image.open(name if isinstance(name, Path) else GFX / f"{name}.png").convert("RGBA")
    if width:
        im = im.resize((width, round(im.height * width / im.width)), Image.LANCZOS)
    return im


STICKERS = [load(p, 230) for p in sorted(GFX.glob("sticker-*.png"))]
PHOTO = ["f1-logo", "box-box-box", "smooth-operator", "baka", "plus-1000-aura", "pixel-heart", "kalesh-aurat",
         "spotify-code", "avengers-icons", "only-gains", "real-madrid", "the-boys"]
for slug in PHOTO:
    p = ROOT / "src" / "stickers" / "photo" / f"{slug}.webp"
    if p.exists():
        STICKERS.append(load(p, 230))
random.Random(7).shuffle(STICKERS)

BUG = load("bug", 150)
CHIP = {int(p.stem.split("-")[1]): load(p.stem) for p in GFX.glob("chip-*.png")}
NAME = {int(p.stem.split("-")[1]): load(p.stem) for p in GFX.glob("name-*.png")}
BIG_LOGO = load("big-logo", 820)
END_LOGO = load("big-logo", 560)
INTRO_TITLE = load("intro-title", 1180)
INTRO_TEAM = load("intro-team", 1500)
OUTRO_TITLE = load("outro-title", 1300)
OUTRO_PILLS = load("outro-pills", 1100)
BACKDROP = Image.open(ROOT / "deck" / "out" / "backdrop.png").convert("RGB").resize((W, H), Image.LANCZOS)
SOFT = BACKDROP.filter(ImageFilter.GaussianBlur(14))

_cache = {}


def transformed(sprite, scale, rot):
    key = (id(sprite), round(scale, 2), round(rot))
    if key not in _cache:
        if len(_cache) > 3000:
            _cache.clear()
        im = sprite
        if key[1] != 1:
            im = im.resize((max(1, round(im.width * key[1])), max(1, round(im.height * key[1]))), Image.BICUBIC)
        if key[2]:
            im = im.rotate(key[2], resample=Image.BICUBIC, expand=True)
        _cache[key] = np.asarray(im, dtype=np.float32) / 255.0
    return _cache[key]


def paste(frame, sprite, cx, cy, scale=1.0, rot=0.0, alpha=1.0):
    """Alpha-blends a sprite centred on (cx, cy) into an HxWx3 float32 frame."""
    if alpha <= 0.01 or scale <= 0.02:
        return
    a = transformed(sprite, scale, rot)
    h, w = a.shape[:2]
    x0, y0 = round(cx - w / 2), round(cy - h / 2)
    fx0, fy0, fx1, fy1 = max(0, x0), max(0, y0), min(W, x0 + w), min(H, y0 + h)
    if fx0 >= fx1 or fy0 >= fy1:
        return
    part = a[fy0 - y0:fy1 - y0, fx0 - x0:fx1 - x0]
    k = part[..., 3:4] * alpha
    region = frame[fy0:fy1, fx0:fx1]
    region *= 1 - k
    region += part[..., :3] * k


# ---------------------------------------------------------------- motion curves

def ease_out_back(u, s=1.8):
    u -= 1
    return 1 + u * u * ((s + 1) * u + s)


def slap(u, life, base_rot):
    """The website's slap: lands big, squashes, settles; pops off at the end of its life."""
    if u < 0 or u > life:
        return None
    if u < 0.18:
        q = u / 0.18
        scale, alpha = 1.6 - 0.7 * q * q, min(1, u / 0.06)
    elif u < 0.4:
        scale, alpha = 0.9 + 0.1 * ease_out_back((u - 0.18) / 0.22), 1
    else:
        scale, alpha = 1, 1
    rot = base_rot
    if u > life - 0.25:
        v = (u - (life - 0.25)) / 0.25
        scale *= 1 - v * v
        rot += 30 * v
        alpha = 1 - v
    return scale, rot, alpha


def slide_in(u, hold, dx, dy):
    """Card that springs in from (dx, dy) away, holds, and slides back out. Returns offset, alpha."""
    if u < 0 or u > hold + 0.3:
        return None
    if u < 0.45:
        p = ease_out_back(u / 0.45, 1.4)
        return dx * (1 - p), dy * (1 - p), min(1, u / 0.1)
    if u > hold:
        v = (u - hold) / 0.3
        return dx * v * v, dy * v * v, 1 - v
    return 0, 0, 1


# ---------------------------------------------------------------- the edit plan

SLOTS = [(215, 215), (1690, 330), (1700, 850), (1060, 905)]  # corners kept clear of the logo and cards
events = []  # (start time, kind, data)
pops, whooshes, flashes, shakes = [], [], [], []
n_sticker = 0

for c in changes[1:]:
    t = INTRO + c["t"]
    flashes.append(t)
    slots = random.Random(c["slide"]).sample(SLOTS, 3)
    for j, (x, y) in enumerate(slots):
        start = t + 0.1 + 0.13 * j
        rot = random.Random(c["slide"] * 10 + j).choice([-14, -9, -5, 6, 10, 15])
        events.append((start, "sticker", (STICKERS[n_sticker % len(STICKERS)], x, y, rot, 2.6 - 0.13 * j)))
        n_sticker += 1
        pops.append(start + 0.18)
        shakes.append(start + 0.18)
    if c["slide"] in CHIP:
        events.append((t + 0.35, "card", (CHIP[c["slide"]], "chip", 4.2)))
        whooshes.append(t + 0.35)
    if c["slide"] in NAME:
        events.append((t + 0.45, "card", (NAME[c["slide"]], "name", 7.0)))
        whooshes.append(t + 0.45)

# Intro and outro stickers in the four corners.
for j, (x, y) in enumerate([(215, 215), (1705, 215), (215, 880), (1705, 880)]):
    s = 1.5 + 0.12 * j
    events.append((s, "sticker", (STICKERS[(j + 5) % len(STICKERS)], x, y, [-12, 9, 8, -10][j], INTRO - s - 0.05)))
    pops.append(s + 0.18)
OUT0 = INTRO + MAIN_FRAMES / FPS
for j, (x, y) in enumerate([(215, 215), (1705, 215), (215, 880), (1705, 880)]):
    s = OUT0 + 1.4 + 0.12 * j
    events.append((s, "sticker", (STICKERS[(j + 9) % len(STICKERS)], x, y, [10, -12, -8, 12][j], 10)))
    pops.append(s + 0.18)
for s in [0.2, 0.75, OUT0 + 0.2, OUT0 + 0.7]:  # logo and title slaps on the cards
    pops.append(s + 0.18)
whooshes += [1.2, OUT0 + 1.1]
events.sort(key=lambda e: e[0])


def shake_offset(t):
    dx = dy = 0.0
    for s in shakes:
        u = t - s
        if 0 <= u < 0.25:
            e = 7 * math.exp(-u / 0.07)
            dx += e * math.sin(2 * math.pi * 26 * u)
            dy += e * 0.6 * math.cos(2 * math.pi * 21 * u)
    return max(-PAD_X, min(PAD_X, round(dx))), max(-PAD_Y, min(PAD_Y, round(dy)))


def draw_overlays(frame, t, main):
    for start, kind, data in events:
        if start > t:
            break
        u = t - start
        if kind == "sticker":
            sprite, x, y, rot, life = data
            st = slap(u, life, rot)
            if st:
                paste(frame, sprite, x, y, st[0], st[1], st[2])
        else:
            sprite, which, hold = data
            m = slide_in(u, hold, -sprite.width - 80, 0) if which == "chip" else slide_in(u, hold, 0, sprite.height + 80)
            if m:
                cx = 40 + sprite.width / 2 + m[0]
                cy = H - 52 - sprite.height / 2 + m[1]
                paste(frame, sprite, cx, cy, 1, 0, m[2])
    for f in flashes:
        u = t - f
        if 0 <= u < 0.18:
            frame += (1 - frame) * (0.28 * (1 - u / 0.18))
    if main:
        paste(frame, BUG, W - 40 - BUG.width / 2, 34 + BUG.height / 2, 1, 0, 0.92)
        p = (t - INTRO) / (MAIN_FRAMES / FPS)
        frame[H - 10:H - 7, :] = 0
        frame[H - 7:H, :int(W * p)] = (1.0, 0.663, 0.02)
        frame[H - 7:H, int(W * p):] *= 0.55


def card_frame(t, start, title_sprites):
    """Intro/outro: the website backdrop slowly zooming, with logo and text slapping in."""
    u = t - start
    z = 1 + 0.05 * u / 5
    bg = SOFT.resize((round(W * z), round(H * z)), Image.BILINEAR)
    ox, oy = (bg.width - W) // 2, (bg.height - H) // 2
    frame = np.asarray(bg.crop((ox, oy, ox + W, oy + H)), dtype=np.float32) / 255.0
    frame *= 0.92
    for sprite, cx, cy, at in title_sprites:
        st = slap(u - at, 99, 0)
        if st:
            paste(frame, sprite, cx, cy, st[0], 0, st[2])
    return frame


# ---------------------------------------------------------------- sound effects

def sfx_track():
    n = int(TOTAL * SR) + SR
    out = np.zeros(n, np.float32)
    tt = np.arange(int(0.12 * SR)) / SR
    pop = np.sin(2 * np.pi * (1300 - 4500 * tt) * tt) * np.exp(-tt * 42) * 0.55
    rng = np.random.default_rng(3)
    wt = np.arange(int(0.4 * SR)) / SR
    noise = rng.standard_normal(len(wt)).astype(np.float32)
    noise = np.convolve(noise, np.ones(24) / 24, mode="same")  # soften the hiss
    whoosh = noise * np.sin(np.pi * wt / 0.4) ** 2 * 0.35
    for s, clip in [(p, pop) for p in pops] + [(w, whoosh) for w in whooshes]:
        i = int(s * SR)
        out[i:i + len(clip)] += clip[: max(0, n - i)]
    out = np.clip(out, -1, 1)
    pcm = (np.repeat(out[:, None], 2, axis=1) * 32767).astype(np.int16)
    with wave.open(str(WORK / "sfx.wav"), "wb") as f:
        f.setnchannels(2)
        f.setsampwidth(2)
        f.setframerate(SR)
        f.writeframes(pcm.tobytes())


# ---------------------------------------------------------------- render

def main():
    sfx_track()
    # Steadying: ffmpeg deshake. (vidstab was tried first and garbled the picture after slide changes,
    # taking the projector content changing for camera motion.) The second crop hides deshake's edges.
    vf = ("crop=478:246:0:302,deshake=rx=16:ry=16:edge=mirror,"
          "hqdn3d=1.5:1.5:3:3,crop=420:236:29:5,"
          f"scale={W + 2 * PAD_X}:{H + 2 * PAD_Y}:flags=lanczos,unsharp=5:5:0.7:5:5:0,"
          f"eq=contrast=1.06:saturation=1.12,fps={FPS}")
    dec = subprocess.Popen(["ffmpeg", "-v", "error", *(["-t", str(SRC_DUR)] if TEST else []), "-i", str(SRC), "-vf", vf,
                            "-f", "rawvideo", "-pix_fmt", "rgb24", "-"], stdout=subprocess.PIPE)
    enc = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{W}x{H}",
                            "-r", str(FPS), "-i", "-", "-c:v", "h264_nvenc", "-preset", "p6", "-rc", "vbr", "-cq", "20",
                            "-b:v", "0", "-pix_fmt", "yuv420p", str(WORK / "video_only.mp4")], stdin=subprocess.PIPE)
    fb = (W + 2 * PAD_X) * (H + 2 * PAD_Y) * 3

    def emit(frame):
        enc.stdin.write((np.clip(frame, 0, 1) * 255 + 0.5).astype(np.uint8).tobytes())

    intro = [(BIG_LOGO, 960, 390, 0.2), (INTRO_TITLE, 960, 790, 0.75), (INTRO_TEAM, 960, 960, 1.2)]
    for i in range(int(INTRO * FPS)):
        t = i / FPS
        f = card_frame(t, 0, intro)
        draw_overlays(f, t, False)
        if t > INTRO - 0.3:
            f += (1 - f) * ((t - (INTRO - 0.3)) / 0.3) * 0.8  # flash into the recording
        emit(f)

    i = 0
    last = None
    while i < MAIN_FRAMES:
        buf = dec.stdout.read(fb)
        if len(buf) < fb:
            break
        t = INTRO + i / FPS
        big = np.frombuffer(buf, np.uint8).reshape(H + 2 * PAD_Y, W + 2 * PAD_X, 3)
        dx, dy = shake_offset(t)
        frame = big[PAD_Y + dy:PAD_Y + dy + H, PAD_X + dx:PAD_X + dx + W].astype(np.float32) / 255.0
        if i < 9:
            frame += (1 - frame) * (1 - i / 9) * 0.8
        draw_overlays(frame, t, True)
        last = frame
        emit(frame)
        i += 1
        if i % 900 == 0:
            print(f"  {i / FPS / 60:.1f} of {SRC_DUR / 60:.1f} min", flush=True)
    dec.stdout.close()
    dec.wait()
    while i < MAIN_FRAMES and last is not None:  # if the decoder came up a frame short, hold the last one
        emit(last)
        i += 1

    outro = [(END_LOGO, 960, 300, 0.2), (OUTRO_TITLE, 960, 650, 0.7), (OUTRO_PILLS, 960, 900, 1.1)]
    for k in range(int(OUTRO * FPS)):
        t = OUT0 + k / FPS
        f = card_frame(t, OUT0, outro)
        if k < 9 and last is not None:  # quick cross-fade from the last frame
            f = f * (k / 9) + last * (1 - k / 9)
        draw_overlays(f, t, False)
        if t > TOTAL - 0.7:
            f *= max(0, (TOTAL - t) / 0.7)  # fade to black
        emit(f)
    enc.stdin.close()
    enc.wait()
    print(f"  video done: {TOTAL:.1f} s")

    audio = (f"[1:a]atrim=0:{SRC_DUR},highpass=f=90,afftdn=nf=-25,loudnorm=I=-16:TP=-1.5:LRA=11,"
             f"adelay={int(INTRO * 1000)}:all=1[v];[2:a]volume=0.8[s];"
             "[v][s]amix=inputs=2:duration=longest:normalize=0,"
             f"apad=whole_dur={TOTAL:.3f},atrim=0:{TOTAL:.3f},afade=t=out:st={TOTAL - 1.2:.2f}:d=1.2[a]")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-i", str(WORK / "video_only.mp4"), "-i", str(SRC), "-i", str(WORK / "sfx.wav"),
                    "-filter_complex", audio, "-map", "0:v", "-map", "[a]", "-c:v", "copy", "-c:a", "aac", "-b:a", "192k",
                    "-movflags", "+faststart", str(OUT)], check=True)
    print(f"Saved {OUT}")


if __name__ == "__main__":
    if "--plan" in sys.argv:
        print(f"{len(events)} animated items, {len(pops)} pops, {len(whooshes)} whooshes, {TOTAL:.1f} s")
    else:
        main()

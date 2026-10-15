"""Exports the GLOOD effects as short, labelled overlay clips for CapCut, each with its own sound.

Every file name says where it goes:  <order>_REC-<m>m<ss.s>s_<what>.mov
REC time = time in the ORIGINAL recording (add 4 s if the intro is in front of it in the project).

  T##  sticker-bomb transition: the whole screen fills with GLOOD stickers on GLOOD orange, the next
       title/name card slaps in the middle, then everything pops off to reveal the next slide.
       The real slide change happens while the screen is fully covered.
  N##  speaker name card (lower third), on each team member's slide
  C##  slide title chip (lower third)
All clips: 1920 x 1080, 30 fps, ProRes 4444 with transparency, with sound.

    python -I clip_pack.py   (run from deck/vid; reuses graphics and motion from edit.py)
"""
import math
import random
import subprocess
import sys
import wave
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))  # python -I leaves out the script's folder
import edit as E  # noqa: E402

OUT = E.HERE / "overlay_pack"
OUT.mkdir(exist_ok=True)
W, H, FPS, SR = E.W, E.H, E.FPS, E.SR
NAMES = {2: "Our-startup", 3: "Solution", 4: "Website", 5: "How-you-buy", 6: "Pricing", 7: "Achievements",
         8: "JasMehr", 9: "Prashant", 10: "Meenakshi", 11: "Rishabh", 12: "Sanyam", 13: "Aniket", 14: "Thank-you"}
WIPE = 1.9  # seconds; the slide change sits in the middle, at WIPE / 2
ORANGE = np.array([1.0, 0.663, 0.02], np.float32)

YY, XX = np.mgrid[0:H, 0:W].astype(np.float32)
DIST = np.hypot(XX - W / 2, YY - H / 2)
FULL_R = math.hypot(W / 2, H / 2) + 40
DOTS = ((XX % 26 - 13) ** 2 + (YY % 26 - 13) ** 2 < 2.6 ** 2)  # the site's dotted paper texture


def label(t):
    return f"{int(t // 60)}m{t % 60:04.1f}s"


def paste(frame, sprite, cx, cy, scale=1.0, rot=0.0, alpha=1.0):
    """Premultiplied RGBA paste."""
    if alpha <= 0.01 or scale <= 0.02:
        return
    a = E.transformed(sprite, scale, rot)
    h, w = a.shape[:2]
    x0, y0 = round(cx - w / 2), round(cy - h / 2)
    fx0, fy0, fx1, fy1 = max(0, x0), max(0, y0), min(W, x0 + w), min(H, y0 + h)
    if fx0 >= fx1 or fy0 >= fy1:
        return
    part = a[fy0 - y0:fy1 - y0, fx0 - x0:fx1 - x0]
    k = part[..., 3:4] * alpha
    region = frame[fy0:fy1, fx0:fx1]
    region *= 1 - k
    region[..., :3] += part[..., :3] * k
    region[..., 3:] += k


def encode(path, frames_fn, n, pops, whooshes):
    """Writes a ProRes 4444 clip with alpha and a matching sound track."""
    wav = E.WORK / "clip_sfx.wav"
    dur = n / FPS
    buf = np.zeros(int(dur * SR) + SR // 2, np.float32)
    tt = np.arange(int(0.12 * SR)) / SR
    pop = np.sin(2 * np.pi * (1300 - 4500 * tt) * tt) * np.exp(-tt * 42) * 0.32
    wt = np.arange(int(0.45 * SR)) / SR
    noise = np.convolve(np.random.default_rng(5).standard_normal(len(wt)), np.ones(24) / 24, mode="same")
    whoosh = (noise * np.sin(np.pi * wt / 0.45) ** 2 * 0.45).astype(np.float32)
    for s, clip in [(p, pop) for p in pops] + [(w, whoosh) for w in whooshes]:
        i = int(max(0, s) * SR)
        buf[i:i + len(clip)] += clip[: max(0, len(buf) - i)]
    pcm = (np.repeat(np.clip(buf, -1, 1)[:, None], 2, axis=1) * 32767).astype(np.int16)
    with wave.open(str(wav), "wb") as f:
        f.setnchannels(2)
        f.setsampwidth(2)
        f.setframerate(SR)
        f.writeframes(pcm.tobytes())
    enc = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgba", "-s", f"{W}x{H}",
                            "-r", str(FPS), "-i", "-", "-i", str(wav), "-map", "0:v", "-map", "1:a",
                            "-c:v", "prores_ks", "-profile:v", "4444", "-pix_fmt", "yuva444p10le", "-alpha_bits", "8",
                            "-qscale:v", "9", "-vendor", "apl0", "-c:a", "pcm_s16le", "-t", f"{dur:.3f}", str(path)],
                           stdin=subprocess.PIPE)
    for i in range(n):
        f = frames_fn(i / FPS)
        a = f[..., 3:]
        np.divide(f[..., :3], a, out=f[..., :3], where=a > 1e-4)  # premultiplied -> straight alpha
        enc.stdin.write((np.clip(f, 0, 1) * 255 + 0.5).astype(np.uint8).tobytes())
    enc.stdin.close()
    enc.wait()
    print(f"  {path.name}  ({path.stat().st_size / 1e6:.0f} MB)")


# ---------------------------------------------------------------- the sticker-bomb transition

def sticker_layout(seed):
    """About 45 stickers on a jittered grid that covers the whole frame, in a random slap order."""
    rng = random.Random(seed)
    spots = []
    cols, rows = 9, 5
    for r in range(rows):
        for c in range(cols):
            x = (c + 0.5) * W / cols + rng.uniform(-40, 40)
            y = (r + 0.5) * H / rows + rng.uniform(-35, 35)
            spots.append((x, y))
    rng.shuffle(spots)
    out = []
    for k, (x, y) in enumerate(spots):
        out.append({"sprite": E.STICKERS[(seed + k) % len(E.STICKERS)], "x": x, "y": y,
                    "rot": rng.uniform(-18, 18), "scale": rng.uniform(1.15, 1.45),
                    "in": 0.04 + 0.5 * k / len(spots), "out": 1.22 + 0.45 * rng.random()})
    return out


def center_card(slide):
    if slide in E.NAME:
        return E.NAME[slide], 1.55
    if slide in E.CHIP:
        return E.CHIP[slide], 1.9
    return E.OUTRO_TITLE, 0.95


def transition(slide, seed):
    layout = sticker_layout(seed)
    card, card_scale = center_card(slide)
    mid = WIPE / 2

    def frame(u):
        f = np.zeros((H, W, 4), np.float32)
        # GLOOD orange panel grows from the centre underneath the stickers, so the cover is complete.
        if 0.2 < u < 1.75:
            grow = min(1, (u - 0.2) / 0.38)
            shrink = min(1, max(0, (u - 1.3) / 0.4))
            r = FULL_R * (1 - (1 - grow) ** 3) * (1 - shrink ** 2)
            m = (DIST < r).astype(np.float32)[..., None]
            col = np.where(DOTS[..., None], ORANGE * 0.86, ORANGE)
            f[..., :3] = col * m
            f[..., 3:] = m
        for s in layout:
            st = E.slap(u - s["in"], s["out"] - s["in"], s["rot"])
            if st:
                paste(f, s["sprite"], s["x"], s["y"], st[0] * s["scale"], st[1], st[2])
        # The next title or speaker slaps in the middle while the screen is covered.
        st = E.slap(u - (mid - 0.32), 0.95, -3)
        if st:
            paste(f, card, W / 2, H / 2, st[0] * card_scale, st[1], st[2])
        return f

    pops = sorted({round(s["in"] + 0.18, 2) for s in layout})[::3] + [mid - 0.32 + 0.18]
    return frame, pops, [0.0, 1.2]


# ---------------------------------------------------------------- lower thirds

def lower_third(sprite, kind, hold):
    dur = hold + 0.35

    def frame(u):
        f = np.zeros((H, W, 4), np.float32)
        m = E.slide_in(u, hold, -sprite.width - 80, 0) if kind == "chip" else E.slide_in(u, hold, 0, sprite.height + 80)
        if m:
            paste(f, sprite, 40 + sprite.width / 2 + m[0], H - 52 - sprite.height / 2 + m[1], 1, 0, m[2])
        return f

    return frame, dur


# ---------------------------------------------------------------- export

def main():
    for old in ["2_overlay_transparent.mov", "3_sticker_sounds.wav"]:  # replaced by the clips below
        (OUT / old).unlink(missing_ok=True)
    rows = []
    for n, c in enumerate(E.changes[1:], start=1):
        s, t = c["slide"], c["t"]
        name = NAMES[s]
        start = max(0.0, t - WIPE / 2)
        fn, pops, wh = transition(s, seed=s * 7)
        f = OUT / f"T{n:02d}_REC-{label(start)}_sticker-bomb_into_{name}.mov"
        encode(f, fn, int(WIPE * FPS), pops, wh)
        rows.append((start, f.name, f"over the recording, {name} slide starts mid-way"))
        lt_start = t + WIPE / 2 - 0.1
        if s in E.NAME:
            fn, dur = lower_third(E.NAME[s], "name", 6.5)
            f = OUT / f"N{n:02d}_REC-{label(lt_start)}_name-card_{name}.mov"
            encode(f, fn, int(dur * FPS), [], [0.0])
            rows.append((lt_start, f.name, f"over {name}'s slide, bottom left"))
        elif s in E.CHIP:
            fn, dur = lower_third(E.CHIP[s], "chip", 4.0)
            f = OUT / f"C{n:02d}_REC-{label(lt_start)}_title-chip_{name}.mov"
            encode(f, fn, int(dur * FPS), [], [0.0])
            rows.append((lt_start, f.name, f"over the {name} slide, bottom left"))
    E.BUG.save(OUT / "LOGO_top-right_whole-video.png")
    lines = ["Where each clip goes. REC = time in your original recording.",
             "In the CapCut project the recording starts at 0:04 (after the intro), so add 4 s.", ""]
    for start, fname, where in sorted(rows):
        lines.append(f"REC {int(start // 60)}:{start % 60:05.2f}   project {int((start + 4) // 60)}:{(start + 4) % 60:05.2f}   {fname}   ({where})")
    lines += ["", "1_intro.mp4                  -> very start of the project, before the recording",
              "4_outro.mp4                  -> right after the recording ends",
              "LOGO_top-right_whole-video.png -> track above everything, stretched over the whole recording, top-right corner"]
    (OUT / "PLACEMENT.txt").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("  PLACEMENT.txt")


if __name__ == "__main__":
    main()

"""Exports the GLOOD video edit as an overlay pack for CapCut (or Premiere), so the effects can go on
top of the original 4K recording instead of the WhatsApp copy.

Pack (deck/vid/overlay_pack/):
  1_intro.mp4                 4 s intro card with its pops (goes BEFORE the recording)
  2_overlay_transparent.mov   transparent graphics, exactly as long as the recording; place it on the
                              track above the recording, starting at the same moment
  3_sticker_sounds.wav        pops and whooshes for the overlay, same length, same start
  4_outro.mp4                 5 s outro card (goes AFTER the recording)
  timestamps.txt              every slide change
  HOW_TO_CAPCUT.md            step by step

The overlay is ProRes 4444 with alpha (the format CapCut and Premiere read transparency from).
Reuses the plan, graphics and motion from edit.py, so both stay identical.

    python -I overlay_pack.py          (run from deck/vid; needs work/sfx.wav from a full edit.py run)
    python -I overlay_pack.py --test   (first 20 s of the overlay only, to check size and look)
"""
import subprocess
import sys
from pathlib import Path

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))  # python -I leaves out the script's folder
import edit as E  # noqa: E402

OUTDIR = E.HERE / "overlay_pack"
OUTDIR.mkdir(exist_ok=True)
REC = E.MAIN_FRAMES / E.FPS  # recording length in seconds
TEST = "--test" in sys.argv


def paste_rgba(frame, sprite, cx, cy, scale=1.0, rot=0.0, alpha=1.0):
    """Like edit.paste, but onto a premultiplied RGBA canvas (HxWx4 float32)."""
    if alpha <= 0.01 or scale <= 0.02:
        return
    a = E.transformed(sprite, scale, rot)
    h, w = a.shape[:2]
    x0, y0 = round(cx - w / 2), round(cy - h / 2)
    fx0, fy0, fx1, fy1 = max(0, x0), max(0, y0), min(E.W, x0 + w), min(E.H, y0 + h)
    if fx0 >= fx1 or fy0 >= fy1:
        return
    part = a[fy0 - y0:fy1 - y0, fx0 - x0:fx1 - x0]
    k = part[..., 3:4] * alpha
    region = frame[fy0:fy1, fx0:fx1]
    region *= 1 - k
    region[..., :3] += part[..., :3] * k
    region[..., 3:] += k


def overlay_frame(tau):
    """Graphics at recording time tau (seconds from the first frame of the recording)."""
    t = tau + E.INTRO  # edit.py's timeline starts with the intro
    frame = np.zeros((E.H, E.W, 4), np.float32)
    for start, kind, data in E.events:
        if start > t:
            break
        u = t - start
        if kind == "sticker":
            sprite, x, y, rot, life = data
            st = E.slap(u, life, rot)
            if st:
                paste_rgba(frame, sprite, x, y, st[0], st[1], st[2])
        else:
            sprite, which, hold = data
            m = E.slide_in(u, hold, -sprite.width - 80, 0) if which == "chip" else E.slide_in(u, hold, 0, sprite.height + 80)
            if m:
                paste_rgba(frame, sprite, 40 + sprite.width / 2 + m[0], E.H - 52 - sprite.height / 2 + m[1], 1, 0, m[2])
    for f in E.flashes:
        u = t - f
        if 0 <= u < 0.18:
            k = 0.28 * (1 - u / 0.18)
            frame *= 1 - k
            frame += k  # white, premultiplied
    paste_rgba(frame, E.BUG, E.W - 40 - E.BUG.width / 2, 34 + E.BUG.height / 2, 1, 0, 0.92)
    p = tau / REC
    frame[E.H - 10:E.H - 7, :] = (0, 0, 0, 1)
    frame[E.H - 7:E.H, :int(E.W * p)] = (1.0, 0.663, 0.02, 1)
    frame[E.H - 7:E.H, int(E.W * p):] = (0, 0, 0, 0.45)
    # premultiplied -> straight alpha, which is what the encoder expects
    a = frame[..., 3:]
    np.divide(frame[..., :3], a, out=frame[..., :3], where=a > 1e-4)
    return frame


def export_overlay():
    seconds = 20.0 if TEST else REC
    out = OUTDIR / ("overlay_test.mov" if TEST else "2_overlay_transparent.mov")
    enc = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgba", "-s", f"{E.W}x{E.H}",
                            "-r", str(E.FPS), "-i", "-", "-c:v", "prores_ks", "-profile:v", "4444", "-pix_fmt", "yuva444p10le",
                            "-alpha_bits", "8", "-qscale:v", "11", "-vendor", "apl0", str(out)], stdin=subprocess.PIPE)
    n = int(seconds * E.FPS)
    for i in range(n):
        f = overlay_frame(i / E.FPS)
        enc.stdin.write((np.clip(f, 0, 1) * 255 + 0.5).astype(np.uint8).tobytes())
        if i and i % 1800 == 0:
            print(f"  overlay {i / E.FPS / 60:.0f} of {seconds / 60:.1f} min", flush=True)
    enc.stdin.close()
    enc.wait()
    print(f"  {out.name}: {out.stat().st_size / 1e6:.0f} MB for {seconds:.0f} s")


def export_cards():
    """Intro and outro as normal videos with their own sound, cut from edit.py's full timeline."""
    sfx = E.WORK / "sfx.wav"
    for name, t0, dur, sprites in [
        ("1_intro.mp4", 0.0, E.INTRO, [(E.BIG_LOGO, 960, 390, 0.2), (E.INTRO_TITLE, 960, 790, 0.75), (E.INTRO_TEAM, 960, 960, 1.2)]),
        ("4_outro.mp4", E.OUT0, E.OUTRO, [(E.END_LOGO, 960, 300, 0.2), (E.OUTRO_TITLE, 960, 650, 0.7), (E.OUTRO_PILLS, 960, 900, 1.1)]),
    ]:
        enc = subprocess.Popen(["ffmpeg", "-v", "error", "-y", "-f", "rawvideo", "-pix_fmt", "rgb24", "-s", f"{E.W}x{E.H}",
                                "-r", str(E.FPS), "-i", "-", "-ss", f"{t0:.3f}", "-t", f"{dur:.3f}", "-i", str(sfx),
                                "-map", "0:v", "-map", "1:a", "-c:v", "libx264", "-crf", "16", "-pix_fmt", "yuv420p",
                                "-c:a", "aac", "-b:a", "192k", "-shortest", str(OUTDIR / name)], stdin=subprocess.PIPE)
        for k in range(int(dur * E.FPS)):
            t = t0 + k / E.FPS
            f = E.card_frame(t, t0, sprites)
            E.draw_overlays(f, t, False)
            if name.startswith("4") and t > E.TOTAL - 0.7:
                f *= max(0, (E.TOTAL - t) / 0.7)
            enc.stdin.write((np.clip(f, 0, 1) * 255 + 0.5).astype(np.uint8).tobytes())
        enc.stdin.close()
        enc.wait()
        print(f"  {name}")
    subprocess.run(["ffmpeg", "-v", "error", "-y", "-ss", f"{E.INTRO:.3f}", "-t", f"{REC:.3f}", "-i", str(sfx),
                    str(OUTDIR / "3_sticker_sounds.wav")], check=True)
    print("  3_sticker_sounds.wav")


def export_timestamps():
    names = {1: "Cover", 2: "Our startup", 3: "Solution", 4: "Our website", 5: "How you buy", 6: "Pricing",
             7: "Key achievements", 8: "JasMehr Singh", 9: "Prashant Pal", 10: "Meenakshi Sharma",
             11: "Rishabh Sharma", 12: "Sanyam", 13: "Aniket Kumar", 14: "Thank you"}
    lines = ["Slide changes in the recording (time from the first frame of the recording)", ""]
    for c in E.changes:
        t = c["t"]
        lines.append(f"{int(t // 60)}:{t % 60:05.2f}  slide {c['slide']:2d}  {names[c['slide']]}")
    (OUTDIR / "timestamps.txt").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print("  timestamps.txt")


if __name__ == "__main__":
    if TEST:
        export_overlay()
    else:
        export_cards()
        export_timestamps()
        export_overlay()

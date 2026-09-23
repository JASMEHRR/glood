"""Split glood-logo.png into one black-on-white mask per logo part, ready for tracing.

Run from the repo root:  python scripts/logo_masks.py
Output: .logo-work/*.png and .logo-work/meta.json (consumed by scripts/trace-logo.mjs).
"""

import json
import sys
from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "glood-logo.png"
WORK = ROOT / ".logo-work"
SCALE = 0.5  # trace at half resolution: plenty of detail, smaller path data
PAD = 70     # orange margin around the artwork, in traced pixels
DIECUT = 34  # white die-cut border width for the sticker version, in traced pixels

PALETTE = {
    "orange": (0xFF, 0xA9, 0x05),
    "black": (0x00, 0x00, 0x00),
    "red": (0xE1, 0x0B, 0x28),
    "cyan": (0x00, 0xBB, 0xD1),
    "light": (0xF4, 0xD8, 0xF2),
    "lightblue": (0x8D, 0xDF, 0xFF),
    "pink": (0xFF, 0x94, 0xC7),
}


def components(mask: np.ndarray) -> list[np.ndarray]:
    """4-connected components of a boolean mask, largest first."""
    h, w = mask.shape
    labels = np.zeros((h, w), dtype=np.int32)
    comps = []
    for y0, x0 in zip(*np.nonzero(mask)):
        if labels[y0, x0]:
            continue
        idx = len(comps) + 1
        labels[y0, x0] = idx
        q = deque([(y0, x0)])
        pts = []
        while q:
            y, x = q.popleft()
            pts.append((y, x))
            for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
                if 0 <= ny < h and 0 <= nx < w and mask[ny, nx] and not labels[ny, nx]:
                    labels[ny, nx] = idx
                    q.append((ny, nx))
        comps.append(np.array(pts))
    comps.sort(key=len, reverse=True)
    return comps


def to_mask(shape, pts) -> np.ndarray:
    m = np.zeros(shape, dtype=bool)
    m[pts[:, 0], pts[:, 1]] = True
    return m


def fill_holes(mask: np.ndarray) -> np.ndarray:
    """Fill enclosed holes: everything not reachable from the border through False pixels."""
    outside = ~mask
    border = np.zeros_like(mask)
    border[0, :] = border[-1, :] = border[:, 0] = border[:, -1] = True
    reach = np.zeros_like(mask)
    q = deque(zip(*np.nonzero(outside & border)))
    for y, x in q:
        reach[y, x] = True
    h, w = mask.shape
    while q:
        y, x = q.popleft()
        for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
            if 0 <= ny < h and 0 <= nx < w and outside[ny, nx] and not reach[ny, nx]:
                reach[ny, nx] = True
                q.append((ny, nx))
    return ~reach


def save(name: str, mask: np.ndarray, grow: int = 0) -> None:
    img = Image.fromarray(np.where(mask, 0, 255).astype(np.uint8))
    if grow:
        img = img.filter(ImageFilter.MinFilter(grow * 2 + 1))  # grow the black shape
    img.save(WORK / f"{name}.png")


def bbox(mask):
    ys, xs = np.nonzero(mask)
    return [int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())]


def main() -> int:
    if not SRC.exists():
        print(f"Missing {SRC}")
        return 1
    WORK.mkdir(exist_ok=True)
    full = Image.open(SRC).convert("RGB")
    img = full.resize((round(full.width * SCALE), round(full.height * SCALE)), Image.LANCZOS)
    a = np.asarray(img).astype(np.int32)

    names = list(PALETTE)
    pal = np.array([PALETTE[n] for n in names])
    dist = ((a[:, :, None, :] - pal[None, None, :, :]) ** 2).sum(-1)
    cls = np.array(names)[dist.argmin(-1)]

    art = cls != "orange"
    x0, y0, x1, y1 = bbox(art)
    crop = (max(0, x0 - PAD), max(0, y0 - PAD), min(img.width, x1 + PAD + 1), min(img.height, y1 + PAD + 1))
    cls = cls[crop[1]:crop[3], crop[0]:crop[2]]
    shape = cls.shape
    mid_x = shape[1] / 2

    black = cls == "black"
    red = cls == "red"
    cyan = cls == "cyan"
    lights = np.isin(cls, ["light", "lightblue", "pink"])

    # Cyan letters: the two O's, left then right.
    o_parts = sorted((to_mask(shape, c) for c in components(cyan)[:2]), key=lambda m: bbox(m)[0])
    o_inner = [fill_holes(m) for m in o_parts]  # cyan plus everything it encloses

    # Pupils: black blobs sitting inside an O.
    pupils = []
    for inner in o_inner:
        blob = components(black & inner)[0]
        pupils.append(to_mask(shape, blob))
    black_rest = black & ~pupils[0] & ~pupils[1]

    # Black strokes: big outline plus brows and smile (all separate components).
    black_comps = [to_mask(shape, c) for c in components(black_rest) if len(c) > 30]
    outline = black_comps[0]
    extras = black_comps[1:]
    letters_top = bbox(outline)[1]
    o_bottom = max(bbox(m)[3] for m in o_inner)  # the G's tail hangs lower than the smile, so use the O's
    brows = sorted((m for m in extras if bbox(m)[3] < letters_top + 40), key=lambda m: bbox(m)[0])
    smiles = [m for m in extras if bbox(m)[1] > o_bottom]
    inner_black = [m for m in extras if not any(m is b for b in brows + smiles)]
    for m in inner_black:
        outline = outline | m  # letter counters, part of the outline artwork
    if len(brows) != 2 or len(smiles) != 1:
        print(f"Unexpected shapes: {len(brows)} brows, {len(smiles)} smiles")
        return 1

    reds = sorted((to_mask(shape, c) for c in components(red)[:2]), key=lambda m: bbox(m)[0])
    letter_g, letter_d = reds

    # The L is filled with the background orange, so it only exists as an orange area enclosed by
    # the outline. The sticker version has no orange background, so it needs its own fill.
    orange = cls == "orange"
    enclosed_orange = orange & fill_holes(~orange)  # orange not reachable from the image edge
    letter_l = to_mask(shape, components(enclosed_orange)[0])

    # Highlights, assigned to whichever letter they sit on.
    hl = {"g": np.zeros(shape, bool), "o1": np.zeros(shape, bool), "o2": np.zeros(shape, bool),
          "p1": np.zeros(shape, bool), "p2": np.zeros(shape, bool), "d": np.zeros(shape, bool)}
    pupil_filled = [fill_holes(p) for p in pupils]
    for c in components(lights):
        if len(c) < 20:
            continue
        iy, ix = int(c[:, 0].mean()), int(c[:, 1].mean())
        if pupil_filled[0][iy, ix]:
            key = "p1"
        elif pupil_filled[1][iy, ix]:
            key = "p2"
        elif o_inner[0][iy, ix]:
            key = "o1"
        elif o_inner[1][iy, ix]:
            key = "o2"
        else:
            key = "g" if ix < mid_x else "d"
        hl[key] |= to_mask(shape, c)

    save("outline", outline)
    save("brow-left", brows[0])
    save("brow-right", brows[1])
    save("smile", smiles[0])
    save("letter-g", letter_g, grow=3)
    save("letter-d", letter_d, grow=3)
    save("letter-l", letter_l, grow=3)
    save("letter-o1", o_parts[0], grow=3)
    save("letter-o2", o_parts[1], grow=3)
    save("o1-inner", o_inner[0])
    save("o2-inner", o_inner[1])
    save("pupil-left", pupils[0])
    save("pupil-right", pupils[1])
    for key, m in hl.items():
        if m.any():
            save(f"hl-{key}", m)

    # Die-cut sticker silhouette: all artwork, holes filled, grown by a rounded border.
    silhouette = Image.fromarray(np.where(fill_holes(cls != "orange"), 255, 0).astype(np.uint8))
    grown = silhouette.filter(ImageFilter.GaussianBlur(DIECUT * 0.9)).point(lambda v: 255 if v > 8 else 0)
    grown = fill_holes(np.asarray(grown) > 0)
    save("diecut", grown)

    meta = {
        "width": shape[1], "height": shape[0], "scale": SCALE,
        "crop_in_source": [round(v / SCALE) for v in crop],
        "pupils": [bbox(p) for p in pupils],
        "o_inner": [bbox(m) for m in o_inner],
        "highlights": {k: bool(m.any()) for k, m in hl.items()},
    }
    (WORK / "meta.json").write_text(json.dumps(meta, indent=2), encoding="utf-8")
    print(json.dumps(meta, indent=2))
    return 0


if __name__ == "__main__":
    sys.exit(main())

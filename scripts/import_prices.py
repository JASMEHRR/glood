"""Copy each sticker's price (and product name) from GLOOD's live VentureAdda listing.

Run from the repo root:  python scripts/import_prices.py

On VentureAdda every GLOOD product already has its price, and the price is the size band:
Rs 20 = Small (1 to 2 in), Rs 30 = Medium (2 to 3 in), Rs 50 = Large (3+ in). This script:
  1. Reads the public GLOOD menu from VentureAdda's Firestore (menu items are world-readable by
     design, it is a price list; no key or login needed).
  2. Downloads each product photo and matches it to a sticker in src/stickers/photo/ by picture,
     one product per sticker, strongest matches first.
  3. Adds any VentureAdda product that has no sticker file here yet (same clean-up as
     process_assets.py: background removed, die-cut border, WebP) as a hand-added sticker.
  4. Writes src/stickers/sizes.json (slug -> band, price, and the VentureAdda product name and id)
     and .logo-work/va-matches.jpg, every pair side by side for checking by eye.

The site uses the VentureAdda product name as each sticker's title, so both shops match.

Needs Pillow and numpy.
"""

import json
import re
import sys
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFont

sys.path.insert(0, str(Path(__file__).resolve().parent))
from process_assets import optimise  # noqa: E402  (same clean-up as every other photo sticker)

ROOT = Path(__file__).resolve().parent.parent
PHOTO_DIR = ROOT / "src" / "stickers" / "photo"
WORK = ROOT / ".logo-work" / "va-photos"
OUT = ROOT / "src" / "stickers" / "sizes.json"
SHEET = ROOT / ".logo-work" / "va-matches.jpg"

PROJECT = "ventureadda"
GLOOD_VENTURE_ID = "3KHid4o2sqQ4J49cE2dV"
RUN_QUERY = f"https://firestore.googleapis.com/v1/projects/{PROJECT}/databases/(default)/documents:runQuery"
PRICE_TO_BAND = {20: "s", 30: "m", 50: "l"}
MIN_SIMILARITY = 0.80  # below this a pair is reported for a manual look, not trusted
# VentureAdda menu sections -> site filters (for products added from VentureAdda).
CATEGORY_MAP = {"Memes & Gaming": "memes", "F1, Cars & Car Logos": "racing", "F1": "racing", "Music & Artists": "music",
                "Sports": "sports", "Anime": "anime", "TV Shows & Movies": "screen", "Marvel & DC": "heroes"}
N = 40                 # descriptor side in pixels


def fetch_menu() -> list[dict]:
    query = {"structuredQuery": {"from": [{"collectionId": "menuItems"}], "where": {"fieldFilter": {
        "field": {"fieldPath": "ventureId"}, "op": "EQUAL", "value": {"stringValue": GLOOD_VENTURE_ID}}}}}
    req = urllib.request.Request(RUN_QUERY, data=json.dumps(query).encode(), headers={"Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=60) as resp:
        rows = json.load(resp)
    items = []
    for row in rows:
        doc = row.get("document")
        if not doc:
            continue
        f = doc["fields"]
        price = f.get("price", {})
        price = int(price.get("integerValue", price.get("doubleValue", 0)) or 0)
        photo = f.get("photo", {}).get("mapValue", {}).get("fields", {}).get("url", {}).get("stringValue")
        items.append({"id": doc["name"].rsplit("/", 1)[-1], "name": f.get("name", {}).get("stringValue", "").strip(),
                      "price": price, "photo": photo, "category": f.get("category", {}).get("stringValue", "")})
    return items


def download(item: dict) -> Path:
    path = WORK / f"{item['id']}.webp"
    if not path.exists():
        urllib.request.urlretrieve(item["photo"], path)
    return path


def descriptor(img: Image.Image) -> np.ndarray:
    """Content on white, cropped to its ink, padded square, shrunk, mean-removed and normalised."""
    rgba = img.convert("RGBA")
    white = Image.new("RGBA", rgba.size, (255, 255, 255, 255))
    white.alpha_composite(rgba)
    rgb = white.convert("RGB")
    a = np.asarray(rgb).astype(np.int16)
    ink = a.min(axis=2) < 235
    ys, xs = np.nonzero(ink)
    if len(xs):
        rgb = rgb.crop((xs.min(), ys.min(), xs.max() + 1, ys.max() + 1))
    side = max(rgb.size)
    square = Image.new("RGB", (side, side), (255, 255, 255))
    square.paste(rgb, ((side - rgb.width) // 2, (side - rgb.height) // 2))
    v = np.asarray(square.resize((N, N), Image.LANCZOS)).astype(np.float32).ravel()
    v -= v.mean()
    return v / (np.linalg.norm(v) + 1e-6)


def main() -> int:
    WORK.mkdir(parents=True, exist_ok=True)
    try:
        items = [i for i in fetch_menu() if i["photo"] and i["price"] in PRICE_TO_BAND]
    except OSError as err:
        print(f"Could not read the VentureAdda menu: {err}")
        return 1
    with ThreadPoolExecutor(8) as pool:
        paths = list(pool.map(download, items))
    manifest = json.loads((PHOTO_DIR / "photo-stickers.json").read_text(encoding="utf-8"))

    va = np.stack([descriptor(Image.open(p)) for p in paths])
    ours = np.stack([descriptor(Image.open(PHOTO_DIR / e["file"])) for e in manifest])
    sim = ours @ va.T  # cosine similarity, stickers x products

    pairs = sorted(((sim[i, j], i, j) for i in range(len(manifest)) for j in range(len(items))), reverse=True)
    used_s, used_p, match = set(), set(), {}
    for s, i, j in pairs:
        if i in used_s or j in used_p:
            continue
        used_s.add(i)
        used_p.add(j)
        match[i] = (j, float(s))

    sizes, weak = {}, []
    for i, e in enumerate(manifest):
        if i not in match:
            continue
        j, s = match[i]
        item = items[j]
        sizes[e["slug"]] = {"size": PRICE_TO_BAND[item["price"]], "price": item["price"], "name": item["name"],
                            "ventureadda_id": item["id"], "similarity": round(s, 3)}
        if s < MIN_SIMILARITY:
            weak.append((e["slug"], item["name"], round(s, 3)))
    OUT.write_text(json.dumps(sizes, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    # Side-by-side sheet: our sticker | the VentureAdda product it was matched to.
    cell, cols = 120, 6
    order = sorted(match.items(), key=lambda kv: kv[1][1])  # weakest first
    rows = (len(order) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * cell * 2, rows * (cell + 26)), (40, 40, 40))
    draw = ImageDraw.Draw(sheet)
    font = ImageFont.truetype("arial.ttf", 11)
    for k, (i, (j, s)) in enumerate(order):
        x, y = (k % cols) * cell * 2, (k // cols) * (cell + 26)
        for n, img in enumerate((Image.open(PHOTO_DIR / manifest[i]["file"]), Image.open(paths[j]))):
            t = img.convert("RGBA")
            t.thumbnail((cell - 8, cell - 8))
            tile = Image.new("RGBA", (cell, cell), (255, 255, 255, 255))
            tile.alpha_composite(t, ((cell - t.width) // 2, (cell - t.height) // 2))
            sheet.paste(tile.convert("RGB"), (x + n * cell, y + 26))
        colour = (255, 90, 90) if s < MIN_SIMILARITY else (255, 255, 255)
        draw.text((x + 2, y + 2), f"{manifest[i]['slug'][:16]} {s:.2f}", fill=colour, font=font)
        draw.text((x + 2, y + 13), f"{items[j]['name'][:22]} Rs{items[j]['price']}", fill=colour, font=font)
    sheet.save(SHEET, quality=82)

    # Products with no sticker file here yet become new hand-added stickers (no "source" key, so
    # process_assets.py keeps them).
    added = []
    taken = {e["slug"] for e in manifest}
    for j, item in enumerate(items):
        if j in used_p or sim[:, j].max(initial=0) >= 0.95:
            continue
        slug = re.sub(r"[^a-z0-9]+", "-", item["name"].lower()).strip("-") or item["id"].lower()
        while slug in taken:
            slug += "-2"
        taken.add(slug)
        w, h, inset = optimise(paths[j], PHOTO_DIR / f"{slug}.webp", from_board=True)
        manifest.append({"slug": slug, "title": item["name"], "category": CATEGORY_MAP.get(item["category"], "memes"),
                         "file": f"{slug}.webp", "width": w, "height": h, "peelInset": inset, "ventureadda_id": item["id"]})
        sizes[slug] = {"size": PRICE_TO_BAND[item["price"]], "price": item["price"], "name": item["name"],
                       "ventureadda_id": item["id"], "similarity": 1.0}
        added.append(item["name"])
    if added:
        (PHOTO_DIR / "photo-stickers.json").write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")
        OUT.write_text(json.dumps(sizes, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")

    unmatched_products = [items[j]["name"] for j in range(len(items)) if j not in used_p]
    counts = {b: sum(1 for v in sizes.values() if v["size"] == b) for b in "sml"}
    print(f"{len(items)} VentureAdda products, {len(manifest)} photo stickers, {len(sizes)} matched. Bands {counts}.")
    print(f"Weak matches (< {MIN_SIMILARITY}), check these: {weak}")
    print(f"VentureAdda products with no sticker file before this run: {unmatched_products}")
    print(f"Added as new stickers from their VentureAdda photos: {added}")
    return 0


if __name__ == "__main__":
    sys.exit(main())

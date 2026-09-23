"""Catalogue, screen and optimise the sticker images in ./source-assets.

Run from the repo root:  python scripts/process_assets.py

What it does:
  1. Every image in source-assets/sticker-board and source-assets/sticker-set gets a
     verdict below (SAFE or RISKY) after a manual visual review.
  2. RISKY files are moved to source-assets/_risky (never used on the site).
  3. SAFE files are cleaned (plain white background removed, fresh white die-cut
     border added), cropped, resized to max 1200px and saved as WebP in
     src/stickers/photo/.
  4. src/stickers/photo/photo-stickers.json and ASSETS.md are regenerated.

Needs Pillow and numpy (both free).
"""

import json
import shutil
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "source-assets"
RISKY_DIR = SRC / "_risky"
OUT_DIR = ROOT / "src" / "stickers" / "photo"
MAX_SIDE = 1200

# Verdicts from a manual review of every image.
# SAFE entries: (slug, title, filter category, note)
# RISKY entries: reason string
SAFE = {
    "sticker-board/5.png": ("box-box-box", "BOX BOX BOX", "racing", "Pit radio phrase with generic tyre graphics, no team or supplier logo"),
    "sticker-board/9.png": ("checkered-flags", "Checkered Flags", "racing", "Generic chequered flags"),
    "sticker-board/17.png": ("baka", "BAKA!", "anime", "Text only, no characters"),
    "sticker-board/20 (2).png": ("reading-bubble", "Reading Bubble", "memes", "Original text sticker"),
    "sticker-board/20 (3).png": ("villains", "Villains Do It For Me", "memes", "Original text sticker"),
    "sticker-board/27.png": ("dropped-this", "You Dropped This", "memes", "Generic stick figure meme"),
    "sticker-board/28.png": ("dont-touch-laptop", "Don't Touch My Laptop", "gaming", "Original pixel text bubble"),
    "sticker-board/30 (3).png": ("own-muse", "I Am My Own Muse", "memes", "Mouth photo of unknown origin, text is original. Check the photo source before printing more"),
    "sticker-board/30 (5).png": ("crumpled-cash", "Crumpled Cash", "memes", "Currency image, no brand content"),
    "sticker-board/33.png": ("plus-1000-aura", "+1000 AURA", "gaming", "Original text sticker"),
    "sticker-board/34.png": ("pixel-heart", "Pixel Heart", "gaming", "Generic pixel art"),
    "sticker-board/35.png": ("it-is-what-it-is", "It Is What It Is", "memes", "Common phrase"),
    "sticker-board/44.png": ("suit-up", "SUIT UP!", "memes", "Catchphrase in plain type, no show logo or characters"),
    "sticker-board/50.png": ("after-cigarette", "After Cigarette", "memes", "Generic cigarette drawing with text"),
    "sticker-board/73.png": ("favourite-hoon", "Main Apni Favourite Hoon", "memes", "Short quote in plain type, no film stills or actors"),
    "sticker-board/74.png": ("kalesh-aurat", "Kalesh Aurat", "memes", "Original text and bow"),
    "sticker-board/79.png": ("need-money", "Need Money For Porsche", "racing", "Meme phrase in plain type, no logo or car"),
    "sticker-board/96.png": ("mentally-unstable", "Mentally Unstable", "memes", "Original type sticker"),
    "sticker-board/97.png": ("no-kushi", "No Kushi Only Gham", "memes", "Wordplay text only, no film stills"),
    "sticker-board/100.png": ("dafa-ho", "DAFA HO", "memes", "Original text sticker"),
    "sticker-board/123.png": ("hundred-bill", "Hundred Bill", "memes", "Currency illustration, no brand content"),
    "sticker-board/125.png": ("starry-night", "Starry Night", "memes", "Van Gogh painting, public domain"),
    "sticker-board/129.png": ("loading-420", "Loading 4:20", "gaming", "Original loading-bar design"),
    "sticker-board/134.png": ("japan-stamp", "Pagoda Stamp", "anime", "Generic travel stamp illustration"),
    "sticker-board/137.png": ("manifest-bow", "Manifest", "memes", "Original text and bow"),
    "sticker-board/138.png": ("mumbai-stamp", "Mumbai Stamp", "memes", "Generic landmark stamp"),
    "sticker-board/139.png": ("great-wave-stamp", "Great Wave Stamp", "anime", "Hokusai wave, public domain"),
    "sticker-board/143.png": ("creation-hands", "Creation Hands", "memes", "Michelangelo parody, public domain source"),
    "sticker-set/Sticker_01.png": ("jet-fuel-only", "Jet Fuel Only", "racing", "Original hazard-stripe text sticker"),
    "sticker-set/Sticker_03.png": ("street-legal-ish", "Street Legal(ish)", "racing", "Original text sticker"),
    "sticker-set/Sticker_07.png": ("hello-single", "Hello I'm Single", "memes", "Generic name-tag format"),
    "sticker-set/Sticker_08.png": ("hello-taken", "Hello I'm Taken", "memes", "Generic name-tag format"),
    "sticker-set/Sticker_09.png": ("donut-poke", "Donut Poke", "memes", "Generic donut and glove drawing"),
}

# Board files that are lower-resolution copies of sticker-set files. Kept in place, not used.
DUPLICATES = {
    "sticker-board/144.png": "sticker-set/Sticker_01.png",
    "sticker-board/146.png": "sticker-set/Sticker_03.png",
    "sticker-board/150.png": "sticker-set/Sticker_07.png",
    "sticker-board/151.png": "sticker-set/Sticker_08.png",
    "sticker-board/152.png": "sticker-set/Sticker_09.png",
}

F1 = "F1 team, driver or series branding"
ANIME = "Anime/manga character or symbol"
MARVEL_DC = "Marvel/DC character or logo"
TV = "TV/movie still, character or show branding"
MUSIC = "Musician likeness, album art or artist branding"
SPORT = "Real athlete likeness or club crest"
BRAND = "Third-party brand logo or trade dress"
CAR = "Car maker logo or recognisable car design"
GAME = "Video game logo or trade dress"

RISKY = {
    "sticker-board/1.png": F1 + " (Ferrari car and livery)",
    "sticker-board/2.png": F1 + " (F1 logo)",
    "sticker-board/3.png": F1 + " (Ferrari logo) plus Disney/Pixar Cars character",
    "sticker-board/4.png": F1 + " (Ferrari team kit, real driver)",
    "sticker-board/6.png": F1 + " (team steering wheel with sponsor marks)",
    "sticker-board/7.png": F1 + " (Red Bull livery, real driver)",
    "sticker-board/8.png": F1 + " (Ferrari kit, real driver)",
    "sticker-board/10.png": "Real F1 driver likeness (podium shoey)",
    "sticker-board/11.png": ANIME + " (One Piece)",
    "sticker-board/12.png": ANIME + " (Chainsaw Man)",
    "sticker-board/13.png": ANIME + " (One Punch Man)",
    "sticker-board/14.png": ANIME + " (One Piece)",
    "sticker-board/15.png": ANIME + " (Naruto, Akatsuki cloud)",
    "sticker-board/16.png": ANIME + " (Naruto)",
    "sticker-board/18.png": ANIME + " (Demon Slayer)",
    "sticker-board/19.png": ANIME + " (One Piece)",
    "sticker-board/20.png": ANIME + " (Attack on Titan)",
    "sticker-board/20 (4).png": TV + " (The Boys logo)",
    "sticker-board/20 (5).png": BRAND + " (Hot Wheels logo parody)",
    "sticker-board/20 (6).png": MUSIC + " (Starboy logo parody)",
    "sticker-board/20 (7).png": BRAND + " (Spotify code)",
    "sticker-board/21.png": ANIME + " (Jujutsu Kaisen)",
    "sticker-board/22.png": ANIME + " (Naruto)",
    "sticker-board/23.png": ANIME + " (Jujutsu Kaisen)",
    "sticker-board/24.png": ANIME + " (Solo Leveling)",
    "sticker-board/25.png": "Painting of uncertain copyright status used as a meme",
    "sticker-board/26.png": BRAND + " (Parental Advisory mark)",
    "sticker-board/29.png": BRAND + " (OnlyFans logo parody)",
    "sticker-board/30.png": BRAND + " (Disney logo lettering)",
    "sticker-board/30 (2).png": BRAND + " (Red Bull can)",
    "sticker-board/30 (4).png": BRAND + " (Nike and Adidas logos)",
    "sticker-board/30 (6).png": BRAND + " (BASF cassette label)",
    "sticker-board/30 (7).png": F1 + " (McLaren speedmark)",
    "sticker-board/31.png": GAME + " (GTA 'wasted' screen)",
    "sticker-board/32.png": BRAND + " (platform verified badge)",
    "sticker-board/36.png": TV + " (Breaking Bad reference) and musician likeness",
    "sticker-board/37.png": TV + " (Breaking Bad)",
    "sticker-board/38.png": TV + " (Stranger Things)",
    "sticker-board/39.png": TV + " (The Office still)",
    "sticker-board/40.png": TV + " (show cast illustration)",
    "sticker-board/41.png": TV + " (Suits)",
    "sticker-board/42.png": TV + " (The Office actor)",
    "sticker-board/43.png": TV + " (character illustration)",
    "sticker-board/45.png": TV + " (Brooklyn Nine-Nine catchphrase in show colours)",
    "sticker-board/46.png": MUSIC + " (Taylor Swift branding)",
    "sticker-board/47.png": MUSIC + " (Kendrick Lamar name logo)",
    "sticker-board/48.png": MUSIC + " (The Weeknd)",
    "sticker-board/49.png": MUSIC + " (Eminem / Slim Shady)",
    "sticker-board/50 (2).png": F1 + " (Mercedes kit, real driver)",
    "sticker-board/50 (3).png": MUSIC + " (Yeezus album art)",
    "sticker-board/50 (4).png": SPORT + " (Real Madrid crest)",
    "sticker-board/50 (5).png": TV + " (Friends cast still)",
    "sticker-board/50 (6).png": MUSIC + " (album art in Spotify player frame)",
    "sticker-board/51.png": MUSIC + " (Kendrick Lamar album art)",
    "sticker-board/52.png": MUSIC + " (SZA album art)",
    "sticker-board/53.png": MUSIC + " (Seedhe Maut)",
    "sticker-board/54.png": MUSIC + " (Lana Del Rey)",
    "sticker-board/55.png": MUSIC + " (Frank Ocean album art)",
    "sticker-board/56.png": MUSIC + " (Drake album art)",
    "sticker-board/57.png": MUSIC + " (Seedhe Maut)",
    "sticker-board/58.png": MUSIC + " (Travis Scott Utopia)",
    "sticker-board/59.png": MARVEL_DC + " (Avengers icons)",
    "sticker-board/60.png": MARVEL_DC + " (Hulk)",
    "sticker-board/61.png": MARVEL_DC + " (Infinity Gauntlet)",
    "sticker-board/62.png": MARVEL_DC + " (Mjolnir)",
    "sticker-board/63.png": MARVEL_DC + " (Superman)",
    "sticker-board/64.png": MARVEL_DC + " (Spider-Man meme)",
    "sticker-board/65.png": MARVEL_DC + " (Spider-Man)",
    "sticker-board/66.png": TV + " (Star Wars quote in Star Wars lettering)",
    "sticker-board/67.png": MARVEL_DC + " (Batman)",
    "sticker-board/68.png": MARVEL_DC + " (Spider-Verse)",
    "sticker-board/69.png": MARVEL_DC + " (Deadpool and Wolverine)",
    "sticker-board/70.png": TV + " (film actors illustration)",
    "sticker-board/71.png": TV + " (film scene illustration)",
    "sticker-board/72.png": TV + " (actor likeness meme)",
    "sticker-board/75.png": CAR + " (Porsche 911 GT3 RS)",
    "sticker-board/76.png": CAR + " (Mercedes-AMG logo)",
    "sticker-board/77.png": TV + " (Pixar Cars character)",
    "sticker-board/78.png": CAR + " (Toyota Supra script)",
    "sticker-board/80.png": CAR + " (BMW M logo)",
    "sticker-board/81.png": CAR + " (Ferrari logo)",
    "sticker-board/82.png": BRAND + " (NOS logo)",
    "sticker-board/83.png": SPORT + " (FC Barcelona crest)",
    "sticker-board/84.png": SPORT + " (Real Madrid slogan)",
    "sticker-board/85.png": SPORT + " (Virat Kohli)",
    "sticker-board/86.png": SPORT + " (Michael Jordan, Bulls kit)",
    "sticker-board/87.png": SPORT + " (Stephen Curry)",
    "sticker-board/88.png": SPORT + " (footballer)",
    "sticker-board/89.png": SPORT + " (Arsenal crest)",
    "sticker-board/90.png": SPORT + " (footballer, Spain kit)",
    "sticker-board/91.png": SPORT + " (Manchester United crest)",
    "sticker-board/92.png": SPORT + " (footballer)",
    "sticker-board/93.png": SPORT + " (Messi poster)",
    "sticker-board/94.png": GAME + " (GTA San Andreas meme in GTA lettering)",
    "sticker-board/95.png": BRAND + " (Diet Coke can)",
    "sticker-board/98.png": "Photo of a real person (likeness)",
    "sticker-board/99.png": "Book title branding (Verity)",
    "sticker-board/101.png": BRAND + " (I love NY trade mark parody)",
    "sticker-board/102.png": SPORT + " (Jordan 23 in Bulls lettering)",
    "sticker-board/103.png": BRAND + " (Nike Air Jordan / Off-White)",
    "sticker-board/121.png": BRAND + " (Marlboro)",
    "sticker-board/122.png": CAR + " (Porsche) and another seller's watermark",
    "sticker-board/124.png": BRAND + " (Supreme)",
    "sticker-board/126.png": MUSIC + " (Starboy)",
    "sticker-board/127.png": CAR + " (Porsche) and another seller's watermark",
    "sticker-board/128.png": CAR + " (Porsche RWB)",
    "sticker-board/130.png": GAME + " (Pokemon Charizard)",
    "sticker-board/131.png": MARVEL_DC + " (Infinity Gauntlet)",
    "sticker-board/132.png": ANIME + " style character, suggestive",
    "sticker-board/133.png": BRAND + " (Google Chrome dino)",
    "sticker-board/135.png": SPORT + " (Conor McGregor)",
    "sticker-board/136.png": ANIME + " (Bleach)",
    "sticker-board/140.png": ANIME + " (Cowboy Bebop)",
    "sticker-board/141.png": BRAND + " (Pinterest)",
    "sticker-board/142.png": CAR + " (Toyota Supra)",
    "sticker-board/145.png": BRAND + " (Hoonigan)",
    "sticker-board/147.png": MUSIC + " (Starboy album art)",
    "sticker-board/148.png": CAR + " (Lamborghini Huracan)",
    "sticker-board/149.png": CAR + " (Lamborghini Countach)",
    "sticker-board/153.png": SPORT + " (Virat Kohli name and number)",
    "sticker-set/Sticker_02.png": BRAND + " (Hoonigan)",
    "sticker-set/Sticker_04.png": MUSIC + " (Starboy album art)",
    "sticker-set/Sticker_05.png": CAR + " (Lamborghini Huracan)",
    "sticker-set/Sticker_06.png": CAR + " (Lamborghini Countach)",
    "sticker-set/Sticker_10.png": SPORT + " (Virat Kohli name and number)",
}

OTHER_FILES = {
    "Glood_Logo.png": "GLOOD logo master (copied to ./glood-logo.png)",
    "board-photo.png": "Photo of the physical sticker board. Reference only, contains many risky designs, not used on the site",
    "size-reference.png": "Size and price reference graphic. Shows an F1 logo, so not used on the site",
    "board-doc.pdf": "Print sheet of the board designs (156 pages). Reference only",
    "sticker-set/Stickers_Sheet.pdf": "Print sheet of the board designs (153 pages). Reference only",
    "STICKER.zip": "Original archive of sticker-board/ (already extracted, contents identical)",
}

CATEGORY_LABELS = {"racing": "Racing", "anime": "Anime vibe", "gaming": "Gaming", "gym": "Gym", "memes": "Memes"}


def remove_white_background(img: Image.Image) -> Image.Image:
    """Make near-white pixels connected to the image edge transparent (flood fill)."""
    rgba = np.array(img.convert("RGBA"))
    rgb = rgba[..., :3].astype(np.int16)
    near_white = (rgb.min(axis=2) >= 236) & (rgba[..., 3] > 0)
    h, w = near_white.shape
    background = np.zeros((h, w), dtype=bool)
    stack = [(y, x) for y in (0, h - 1) for x in range(w)] + [(y, x) for x in (0, w - 1) for y in range(h)]
    while stack:
        y, x = stack.pop()
        if background[y, x] or not near_white[y, x]:
            continue
        background[y, x] = True
        if y > 0: stack.append((y - 1, x))
        if y < h - 1: stack.append((y + 1, x))
        if x > 0: stack.append((y, x - 1))
        if x < w - 1: stack.append((y, x + 1))
    rgba[background, 3] = 0
    return Image.fromarray(rgba)


def add_die_cut_border(img: Image.Image, border: int) -> Image.Image:
    """Add a rounded white border around the opaque shape, like a die-cut sticker."""
    pad = border * 2
    padded = Image.new("RGBA", (img.width + pad * 2, img.height + pad * 2), (0, 0, 0, 0))
    padded.paste(img, (pad, pad))
    alpha = padded.getchannel("A").point(lambda v: 255 if v > 24 else 0)
    # Blur-then-threshold gives a rounded dilation instead of MaxFilter's square corners.
    grown = alpha.filter(ImageFilter.GaussianBlur(border * 0.9)).point(lambda v: 255 if v > 6 else 0)
    grown = grown.filter(ImageFilter.GaussianBlur(1.2))
    white = Image.new("RGBA", padded.size, (255, 255, 255, 0))
    white.putalpha(grown)
    white.alpha_composite(padded)
    return white.crop(white.getchannel("A").getbbox())


def peel_inset(img: Image.Image) -> float:
    """How far the artwork sits in from the bottom-right corner, along the 45 degree diagonal,
    as a fraction of the shorter side. The CSS peel starts its fold there."""
    alpha = np.asarray(img.getchannel("A")) > 40
    ys, xs = np.nonzero(alpha)
    w, h = img.size
    return round(((w - 1) + (h - 1) - int((xs + ys).max())) / min(w, h), 4)


def optimise(src: Path, dest: Path, from_board: bool) -> tuple[int, int, float]:
    img = Image.open(src)
    if from_board:
        img = remove_white_background(img)
    else:
        img = img.convert("RGBA")
    bbox = img.getchannel("A").point(lambda v: 255 if v > 8 else 0).getbbox()
    if bbox is None:
        raise ValueError(f"{src} is fully transparent after background removal")
    img = img.crop(bbox)
    if from_board:
        img = add_die_cut_border(img, border=max(6, round(max(img.size) * 0.035)))
    img.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
    img.save(dest, "WEBP", quality=82, method=6)
    return (*img.size, peel_inset(img))


def main() -> int:
    board = sorted(p.relative_to(SRC).as_posix() for p in (SRC / "sticker-board").glob("*.png"))
    sset = sorted(p.relative_to(SRC).as_posix() for p in (SRC / "sticker-set").glob("*.png"))
    already_risky = {f"{d}/{p.name}" for d in ("sticker-board", "sticker-set") for p in (RISKY_DIR / d).glob("*.png")}
    all_images = sorted(set(board) | set(sset) | already_risky)

    unknown = [f for f in all_images if f not in SAFE and f not in RISKY and f not in DUPLICATES]
    if unknown:
        print("No verdict for:", *unknown, sep="\n  ")
        return 1

    for rel in RISKY:
        src, dest = SRC / rel, RISKY_DIR / rel
        if src.exists():
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.move(src, dest)
        elif not dest.exists():
            print(f"Missing risky file: {rel}")
            return 1

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    manifest = []
    for rel, (slug, title, category, note) in SAFE.items():
        w, h, inset = optimise(SRC / rel, OUT_DIR / f"{slug}.webp", from_board=rel.startswith("sticker-board"))
        manifest.append({"slug": slug, "title": title, "category": category, "file": f"{slug}.webp",
                         "width": w, "height": h, "peelInset": inset, "source": rel})
        print(f"ok  {rel} -> {slug}.webp {w}x{h}")
    # Keep stickers that were added by hand (entries without a "source"), see README.md.
    manifest_path = OUT_DIR / "photo-stickers.json"
    if manifest_path.exists():
        existing = json.loads(manifest_path.read_text(encoding="utf-8"))
        generated = {e["slug"] for e in manifest}
        manifest += [e for e in existing if "source" not in e and e["slug"] not in generated]
    manifest_path.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")

    lines = [
        "# ASSETS",
        "",
        "Every image found in `./source-assets`, with the verdict from a manual visual review.",
        "Regenerate with `python scripts/process_assets.py`.",
        "",
        f"Totals: {len(all_images)} sticker images. {len(SAFE)} safe and used, {len(RISKY)} risky and moved to "
        f"`source-assets/_risky`, {len(DUPLICATES)} low-res duplicates of safe files.",
        "",
        "## Safe (used on the site)",
        "",
        "Optimised copies live in `src/stickers/photo/` (WebP, max 1200px, white background removed, die-cut border added).",
        "",
        "| Source file | Output | Filter | Notes |",
        "|---|---|---|---|",
    ]
    for rel, (slug, title, category, note) in SAFE.items():
        lines.append(f"| `{rel}` | `{slug}.webp` ({title}) | {CATEGORY_LABELS[category]} | {note} |")
    lines += ["", "## Duplicates (not used, higher-res copy used instead)", "", "| File | Same design as |", "|---|---|"]
    lines += [f"| `{rel}` | `{orig}` |" for rel, orig in DUPLICATES.items()]
    lines += [
        "",
        "## Risky (moved to `source-assets/_risky`, NOT used)",
        "",
        "Flagged because they contain copyrighted or trademarked material. Selling these without a licence can get",
        "listings removed or lead to legal notices, so the site does not show them.",
        "",
        "| File | Reason |",
        "|---|---|",
    ]
    lines += [f"| `{rel}` | {reason} |" for rel, reason in RISKY.items()]
    lines += ["", "## Other files", "", "| File | What it is |", "|---|---|"]
    lines += [f"| `{rel}` | {what} |" for rel, what in OTHER_FILES.items()]
    lines += [
        "",
        "## Original GLOOD designs",
        "",
        "The custom SVG stickers in `src/stickers/custom/` were designed for this site and are generated by",
        "`npm run stickers` (`scripts/build-stickers.mjs`). They contain no third-party material.",
        "",
    ]
    (ROOT / "ASSETS.md").write_text("\n".join(lines), encoding="utf-8")
    print(f"\n{len(SAFE)} safe, {len(RISKY)} risky, {len(DUPLICATES)} duplicates. ASSETS.md written.")
    return 0


if __name__ == "__main__":
    sys.exit(main())

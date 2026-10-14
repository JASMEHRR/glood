"""Builds installable .ttf files for the deck from the site's @fontsource woff2 subsets.

Each family ships as separate unicode-range subsets (latin, latin-ext); this merges them back into one
font so PowerPoint gets the full set, including the rupee sign. Fonts are OFL licensed.
"""
import pathlib
import sys

from fontTools.merge import Merger
from fontTools.ttLib import TTFont

ROOT = pathlib.Path(sys.argv[1])  # node_modules/@fontsource
OUT = pathlib.Path(sys.argv[2])
OUT.mkdir(parents=True, exist_ok=True)

FONTS = {
    "LilitaOne-Regular.ttf": ("lilita-one", "400", "Lilita One", "Regular"),
    "Bungee-Regular.ttf": ("bungee", "400", "Bungee", "Regular"),
    "SpaceGrotesk-Regular.ttf": ("space-grotesk", "400", "Space Grotesk", "Regular"),
    "SpaceGrotesk-Bold.ttf": ("space-grotesk", "700", "Space Grotesk", "Bold"),
}

for name, (pkg, weight, family, style) in FONTS.items():
    parts = []
    for subset in ("latin", "latin-ext"):
        src = ROOT / pkg / "files" / f"{pkg}-{subset}-{weight}-normal.woff2"
        f = TTFont(src)
        f.flavor = None
        tmp = OUT / f"_{subset}.ttf"
        f.save(tmp)
        parts.append(str(tmp))
    font = Merger().merge(parts)
    for p in parts:
        pathlib.Path(p).unlink()
    # Clean family/style names so Windows groups Regular and Bold as one family.
    names = font["name"]
    full = f"{family} {style}" if style != "Regular" else family
    for nid, value in {1: family, 2: style, 4: f"{family} {style}", 6: f"{family.replace(' ', '')}-{style}", 16: family, 17: style}.items():
        names.setName(value, nid, 3, 1, 0x409)
    bold = style == "Bold"
    font["OS/2"].fsSelection = (0x20 if bold else 0x40)
    font["OS/2"].usWeightClass = 700 if bold else 400
    font["head"].macStyle = 1 if bold else 0
    font["OS/2"].fsType = 0  # installable embedding, as the OFL allows
    font.save(OUT / name)
    print(name, len(font.getBestCmap()), "glyphs mapped,", "has rupee" if 0x20B9 in font.getBestCmap() else "no rupee")

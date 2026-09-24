# ASSETS

Every image found in `./source-assets`, with the verdict from a manual visual review.
Regenerate with `python scripts/process_assets.py`.

Totals: 163 sticker images. 33 clear, 120 flagged for copyright or trademark (kept in `source-assets/_risky`), 10 low-res duplicates.

## Clear

Optimised copies live in `src/stickers/photo/` (WebP, max 1200px, white background removed, die-cut border added).

| Source file | Output | Filter | Notes |
|---|---|---|---|
| `sticker-board/5.png` | `box-box-box.webp` (BOX BOX BOX) | Racing | Pit radio phrase with generic tyre graphics, no team or supplier logo |
| `sticker-board/9.png` | `checkered-flags.webp` (Checkered Flags) | Racing | Generic chequered flags |
| `sticker-board/17.png` | `baka.webp` (BAKA!) | Anime vibe | Text only, no characters |
| `sticker-board/20 (2).png` | `reading-bubble.webp` (Reading Bubble) | Memes | Original text sticker |
| `sticker-board/20 (3).png` | `villains.webp` (Villains Do It For Me) | Memes | Original text sticker |
| `sticker-board/27.png` | `dropped-this.webp` (You Dropped This) | Memes | Generic stick figure meme |
| `sticker-board/28.png` | `dont-touch-laptop.webp` (Don't Touch My Laptop) | Gaming | Original pixel text bubble |
| `sticker-board/30 (3).png` | `own-muse.webp` (I Am My Own Muse) | Memes | Mouth photo of unknown origin, text is original. Check the photo source before printing more |
| `sticker-board/30 (5).png` | `crumpled-cash.webp` (Crumpled Cash) | Memes | Currency image, no brand content |
| `sticker-board/33.png` | `plus-1000-aura.webp` (+1000 AURA) | Gaming | Original text sticker |
| `sticker-board/34.png` | `pixel-heart.webp` (Pixel Heart) | Gaming | Generic pixel art |
| `sticker-board/35.png` | `it-is-what-it-is.webp` (It Is What It Is) | Memes | Common phrase |
| `sticker-board/44.png` | `suit-up.webp` (SUIT UP!) | Memes | Catchphrase in plain type, no show logo or characters |
| `sticker-board/50.png` | `after-cigarette.webp` (After Cigarette) | Memes | Generic cigarette drawing with text |
| `sticker-board/73.png` | `favourite-hoon.webp` (Main Apni Favourite Hoon) | Memes | Short quote in plain type, no film stills or actors |
| `sticker-board/74.png` | `kalesh-aurat.webp` (Kalesh Aurat) | Memes | Original text and bow |
| `sticker-board/79.png` | `need-money.webp` (Need Money For Porsche) | Racing | Meme phrase in plain type, no logo or car |
| `sticker-board/96.png` | `mentally-unstable.webp` (Mentally Unstable) | Memes | Original type sticker |
| `sticker-board/97.png` | `no-kushi.webp` (No Kushi Only Gham) | Memes | Wordplay text only, no film stills |
| `sticker-board/100.png` | `dafa-ho.webp` (DAFA HO) | Memes | Original text sticker |
| `sticker-board/123.png` | `hundred-bill.webp` (Hundred Bill) | Memes | Currency illustration, no brand content |
| `sticker-board/125.png` | `starry-night.webp` (Starry Night) | Memes | Van Gogh painting, public domain |
| `sticker-board/129.png` | `loading-420.webp` (Loading 4:20) | Gaming | Original loading-bar design |
| `sticker-board/134.png` | `japan-stamp.webp` (Pagoda Stamp) | Anime vibe | Generic travel stamp illustration |
| `sticker-board/137.png` | `manifest-bow.webp` (Manifest) | Memes | Original text and bow |
| `sticker-board/138.png` | `mumbai-stamp.webp` (Mumbai Stamp) | Memes | Generic landmark stamp |
| `sticker-board/139.png` | `great-wave-stamp.webp` (Great Wave Stamp) | Anime vibe | Hokusai wave, public domain |
| `sticker-board/143.png` | `creation-hands.webp` (Creation Hands) | Memes | Michelangelo parody, public domain source |
| `sticker-set/Sticker_01.png` | `jet-fuel-only.webp` (Jet Fuel Only) | Racing | Original hazard-stripe text sticker |
| `sticker-set/Sticker_03.png` | `street-legal-ish.webp` (Street Legal(ish)) | Racing | Original text sticker |
| `sticker-set/Sticker_07.png` | `hello-single.webp` (Hello I'm Single) | Memes | Generic name-tag format |
| `sticker-set/Sticker_08.png` | `hello-taken.webp` (Hello I'm Taken) | Memes | Generic name-tag format |
| `sticker-set/Sticker_09.png` | `donut-poke.webp` (Donut Poke) | Memes | Generic donut and glove drawing |

## Duplicates (not used, higher-res copy used instead)

| File | Same design as |
|---|---|
| `sticker-board/144.png` | `sticker-set/Sticker_01.png` |
| `sticker-board/145.png` | `sticker-set/Sticker_02.png` |
| `sticker-board/146.png` | `sticker-set/Sticker_03.png` |
| `sticker-board/147.png` | `sticker-set/Sticker_04.png` |
| `sticker-board/148.png` | `sticker-set/Sticker_05.png` |
| `sticker-board/149.png` | `sticker-set/Sticker_06.png` |
| `sticker-board/150.png` | `sticker-set/Sticker_07.png` |
| `sticker-board/151.png` | `sticker-set/Sticker_08.png` |
| `sticker-board/152.png` | `sticker-set/Sticker_09.png` |
| `sticker-board/153.png` | `sticker-set/Sticker_10.png` |

## Flagged for copyright or trademark

**Used on the site at the owner's request** (`USE_FLAGGED = True` in `scripts/process_assets.py`).

These contain characters, logos, liveries, crests, album art, show branding or real people. Selling them
without a licence can get listings removed or lead to legal notices. The originals are kept in
`source-assets/_risky`.

| File | Output | Filter | Reason |
|---|---|---|---|
| `sticker-board/1.png` | `smooth-operator.webp` (Smooooth Operator) | Racing | F1 team, driver or series branding (Ferrari car and livery) |
| `sticker-board/2.png` | `f1-logo.webp` (F1) | Racing | F1 team, driver or series branding (F1 logo) |
| `sticker-board/3.png` | `tifosi-car.webp` (Tifosi Car) | Racing | F1 team, driver or series branding (Ferrari logo) plus Disney/Pixar Cars character |
| `sticker-board/4.png` | `hamilton-ferrari.webp` (Hamilton in Red) | Racing | F1 team, driver or series branding (Ferrari team kit, real driver) |
| `sticker-board/6.png` | `f1-steering-wheel.webp` (F1 Steering Wheel) | Racing | F1 team, driver or series branding (team steering wheel with sponsor marks) |
| `sticker-board/7.png` | `verstappen.webp` (Max Celebrates) | Racing | F1 team, driver or series branding (Red Bull livery, real driver) |
| `sticker-board/8.png` | `leclerc.webp` (Charles in Red) | Racing | F1 team, driver or series branding (Ferrari kit, real driver) |
| `sticker-board/10.png` | `shoey.webp` (The Shoey) | Racing | Real F1 driver likeness (podium shoey) |
| `sticker-board/11.png` | `gear-5-eyes.webp` (Gear 5 Eyes) | Anime vibe | Anime/manga character or symbol (One Piece) |
| `sticker-board/12.png` | `chainsaw-denji.webp` (Denji) | Anime vibe | Anime/manga character or symbol (Chainsaw Man) |
| `sticker-board/13.png` | `saitama-ok.webp` (Saitama OK) | Anime vibe | Anime/manga character or symbol (One Punch Man) |
| `sticker-board/14.png` | `zoro.webp` (Zoro) | Anime vibe | Anime/manga character or symbol (One Piece) |
| `sticker-board/15.png` | `akatsuki-cloud.webp` (Akatsuki Cloud) | Anime vibe | Anime/manga character or symbol (Naruto, Akatsuki cloud) |
| `sticker-board/16.png` | `itachi-sasuke.webp` (Itachi and Sasuke) | Anime vibe | Anime/manga character or symbol (Naruto) |
| `sticker-board/18.png` | `zenitsu.webp` (Zenitsu Panic) | Anime vibe | Anime/manga character or symbol (Demon Slayer) |
| `sticker-board/19.png` | `daaamn.webp` (DAAAMN!!) | Anime vibe | Anime/manga character or symbol (One Piece) |
| `sticker-board/20.png` | `eren.webp` (Eren) | Anime vibe | Anime/manga character or symbol (Attack on Titan) |
| `sticker-board/20 (4).png` | `the-boys.webp` (The Boys) | TV & film | TV/movie still, character or show branding (The Boys logo) |
| `sticker-board/20 (5).png` | `hot-mess.webp` (Hot Mess) | Memes | Third-party brand logo or trade dress (Hot Wheels logo parody) |
| `sticker-board/20 (6).png` | `star-girl.webp` (Star Girl) | Music | Musician likeness, album art or artist branding (Starboy logo parody) |
| `sticker-board/20 (7).png` | `spotify-code.webp` (Spotify Code) | Music | Third-party brand logo or trade dress (Spotify code) |
| `sticker-board/21.png` | `gojo.webp` (Gojo) | Anime vibe | Anime/manga character or symbol (Jujutsu Kaisen) |
| `sticker-board/22.png` | `kakashi.webp` (Kakashi) | Anime vibe | Anime/manga character or symbol (Naruto) |
| `sticker-board/23.png` | `sukuna.webp` (Sukuna) | Anime vibe | Anime/manga character or symbol (Jujutsu Kaisen) |
| `sticker-board/24.png` | `level-up.webp` (Level Up) | Anime vibe | Anime/manga character or symbol (Solo Leveling) |
| `sticker-board/25.png` | `i-saw-that.webp` (I Saw That) | Memes | Painting of uncertain copyright status used as a meme |
| `sticker-board/26.png` | `parental-advisory.webp` (Parental Advisory) | Music | Third-party brand logo or trade dress (Parental Advisory mark) |
| `sticker-board/29.png` | `only-gains.webp` (OnlyGains) | Gym | Third-party brand logo or trade dress (OnlyFans logo parody) |
| `sticker-board/30.png` | `daddy-issues.webp` (Daddy Issues) | Memes | Third-party brand logo or trade dress (Disney logo lettering) |
| `sticker-board/30 (2).png` | `crushed-can.webp` (Crushed Can) | Memes | Third-party brand logo or trade dress (Red Bull can) |
| `sticker-board/30 (4).png` | `sneaker-boxes.webp` (Sneaker Boxes) | Memes | Third-party brand logo or trade dress (Nike and Adidas logos) |
| `sticker-board/30 (6).png` | `cassette.webp` (Cassette) | Music | Third-party brand logo or trade dress (BASF cassette label) |
| `sticker-board/30 (7).png` | `papaya-swoosh.webp` (Papaya Swoosh) | Racing | F1 team, driver or series branding (McLaren speedmark) |
| `sticker-board/31.png` | `wasted.webp` (Wasted) | Gaming | Video game logo or trade dress (GTA 'wasted' screen) |
| `sticker-board/32.png` | `idiot-verified.webp` (Idiot (Verified)) | Memes | Third-party brand logo or trade dress (platform verified badge) |
| `sticker-board/36.png` | `say-drake.webp` (Say Drake) | Music | TV/movie still, character or show branding (Breaking Bad reference) and musician likeness |
| `sticker-board/37.png` | `heisenberg.webp` (Heisenberg) | TV & film | TV/movie still, character or show branding (Breaking Bad) |
| `sticker-board/38.png` | `steve.webp` (Steve) | TV & film | TV/movie still, character or show branding (Stranger Things) |
| `sticker-board/39.png` | `no-god-please-no.webp` (No God Please No) | TV & film | TV/movie still, character or show branding (The Office still) |
| `sticker-board/40.png` | `the-squad.webp` (The Squad) | TV & film | TV/movie still, character or show branding (show cast illustration) |
| `sticker-board/41.png` | `suits.webp` (Suits) | TV & film | TV/movie still, character or show branding (Suits) |
| `sticker-board/42.png` | `thats-what-she-said.webp` (That's What She Said) | TV & film | TV/movie still, character or show branding (The Office actor) |
| `sticker-board/43.png` | `besties.webp` (Besties) | TV & film | TV/movie still, character or show branding (character illustration) |
| `sticker-board/45.png` | `nine-nine.webp` (NINE-NINE!) | TV & film | TV/movie still, character or show branding (Brooklyn Nine-Nine catchphrase in show colours) |
| `sticker-board/46.png` | `taylors-version.webp` (Taylor's Version) | Music | Musician likeness, album art or artist branding (Taylor Swift branding) |
| `sticker-board/47.png` | `kendrick-lamar.webp` (Kendrick Lamar) | Music | Musician likeness, album art or artist branding (Kendrick Lamar name logo) |
| `sticker-board/48.png` | `save-your-tears.webp` (Save Your Tears) | Music | Musician likeness, album art or artist branding (The Weeknd) |
| `sticker-board/49.png` | `slim-shady.webp` (Hi! My Name Is) | Music | Musician likeness, album art or artist branding (Eminem / Slim Shady) |
| `sticker-board/50 (2).png` | `hamilton-silver.webp` (Hamilton in Black) | Racing | F1 team, driver or series branding (Mercedes kit, real driver) |
| `sticker-board/50 (3).png` | `yeezus.webp` (Yeezus) | Music | Musician likeness, album art or artist branding (Yeezus album art) |
| `sticker-board/50 (4).png` | `real-madrid.webp` (Real Madrid) | Sports | Real athlete likeness or club crest (Real Madrid crest) |
| `sticker-board/50 (5).png` | `friends.webp` (Friends) | TV & film | TV/movie still, character or show branding (Friends cast still) |
| `sticker-board/50 (6).png` | `sweater-weather.webp` (Sweater Weather) | Music | Musician likeness, album art or artist branding (album art in Spotify player frame) |
| `sticker-board/51.png` | `kendrick-car.webp` (Kendrick) | Music | Musician likeness, album art or artist branding (Kendrick Lamar album art) |
| `sticker-board/52.png` | `sos.webp` (SOS) | Music | Musician likeness, album art or artist branding (SZA album art) |
| `sticker-board/53.png` | `seedhe-maut.webp` (Seedhe Maut) | Music | Musician likeness, album art or artist branding (Seedhe Maut) |
| `sticker-board/54.png` | `lana-lips.webp` (Lana Lips) | Music | Musician likeness, album art or artist branding (Lana Del Rey) |
| `sticker-board/55.png` | `blonde.webp` (Blonde) | Music | Musician likeness, album art or artist branding (Frank Ocean album art) |
| `sticker-board/56.png` | `for-all-the-dogs.webp` (For All The Dogs) | Music | Musician likeness, album art or artist branding (Drake album art) |
| `sticker-board/57.png` | `seedhe-maut-duo.webp` (Seedhe Maut Duo) | Music | Musician likeness, album art or artist branding (Seedhe Maut) |
| `sticker-board/58.png` | `utopia.webp` (Utopia) | Music | Musician likeness, album art or artist branding (Travis Scott Utopia) |
| `sticker-board/59.png` | `avengers-icons.webp` (Avengers Icons) | Superheroes | Marvel/DC character or logo (Avengers icons) |
| `sticker-board/60.png` | `chibi-hulk.webp` (Chibi Hulk) | Superheroes | Marvel/DC character or logo (Hulk) |
| `sticker-board/61.png` | `infinity-gauntlet.webp` (Infinity Gauntlet) | Superheroes | Marvel/DC character or logo (Infinity Gauntlet) |
| `sticker-board/62.png` | `mjolnir.webp` (Mjolnir) | Superheroes | Marvel/DC character or logo (Mjolnir) |
| `sticker-board/63.png` | `superman.webp` (Superman) | Superheroes | Marvel/DC character or logo (Superman) |
| `sticker-board/64.png` | `spidey-pointing.webp` (Spidey Pointing) | Superheroes | Marvel/DC character or logo (Spider-Man meme) |
| `sticker-board/65.png` | `upside-down-spidey.webp` (Upside Down Spidey) | Superheroes | Marvel/DC character or logo (Spider-Man) |
| `sticker-board/66.png` | `may-the-force.webp` (May The Force) | TV & film | TV/movie still, character or show branding (Star Wars quote in Star Wars lettering) |
| `sticker-board/67.png` | `batman.webp` (Bat Symbol) | Superheroes | Marvel/DC character or logo (Batman) |
| `sticker-board/68.png` | `miles-and-gwen.webp` (Miles and Gwen) | Superheroes | Marvel/DC character or logo (Spider-Verse) |
| `sticker-board/69.png` | `deadpool-wolverine.webp` (Deadpool and Wolverine) | Superheroes | Marvel/DC character or logo (Deadpool and Wolverine) |
| `sticker-board/70.png` | `couple-scene.webp` (Couple Scene) | TV & film | TV/movie still, character or show branding (film actors illustration) |
| `sticker-board/71.png` | `all-is-well.webp` (All Is Well) | TV & film | TV/movie still, character or show branding (film scene illustration) |
| `sticker-board/72.png` | `mantally-challenged.webp` (Mantally Challenged Bwoy) | Memes | TV/movie still, character or show branding (actor likeness meme) |
| `sticker-board/75.png` | `gt3-rs.webp` (GT3 RS) | Racing | Car maker logo or recognisable car design (Porsche 911 GT3 RS) |
| `sticker-board/76.png` | `amg.webp` (AMG) | Racing | Car maker logo or recognisable car design (Mercedes-AMG logo) |
| `sticker-board/77.png` | `kachow.webp` (Kachow) | TV & film | TV/movie still, character or show branding (Pixar Cars character) |
| `sticker-board/78.png` | `supra-script.webp` (Supra Script) | Racing | Car maker logo or recognisable car design (Toyota Supra script) |
| `sticker-board/80.png` | `m-stripes.webp` (M Stripes) | Racing | Car maker logo or recognisable car design (BMW M logo) |
| `sticker-board/81.png` | `ferrari-shield.webp` (Prancing Horse) | Racing | Car maker logo or recognisable car design (Ferrari logo) |
| `sticker-board/82.png` | `nos.webp` (NOS) | Racing | Third-party brand logo or trade dress (NOS logo) |
| `sticker-board/83.png` | `barcelona.webp` (Barca) | Sports | Real athlete likeness or club crest (FC Barcelona crest) |
| `sticker-board/84.png` | `hala-madrid.webp` (Hala Madrid) | Sports | Real athlete likeness or club crest (Real Madrid slogan) |
| `sticker-board/85.png` | `virat-sip.webp` (King Kohli) | Sports | Real athlete likeness or club crest (Virat Kohli) |
| `sticker-board/86.png` | `jordan-cigar.webp` (Championship Cigar) | Sports | Real athlete likeness or club crest (Michael Jordan, Bulls kit) |
| `sticker-board/87.png` | `curry-30.webp` (Curry 30) | Sports | Real athlete likeness or club crest (Stephen Curry) |
| `sticker-board/88.png` | `bicycle-kick.webp` (Bicycle Kick) | Sports | Real athlete likeness or club crest (footballer) |
| `sticker-board/89.png` | `arsenal.webp` (Arsenal) | Sports | Real athlete likeness or club crest (Arsenal crest) |
| `sticker-board/90.png` | `number-19.webp` (Number 19) | Sports | Real athlete likeness or club crest (footballer, Spain kit) |
| `sticker-board/91.png` | `man-united.webp` (Man United) | Sports | Real athlete likeness or club crest (Manchester United crest) |
| `sticker-board/92.png` | `knee-slide.webp` (Knee Slide) | Sports | Real athlete likeness or club crest (footballer) |
| `sticker-board/93.png` | `goat-poster.webp` (GOAT) | Sports | Real athlete likeness or club crest (Messi poster) |
| `sticker-board/94.png` | `here-we-go-again.webp` (Here We Go Again) | Gaming | Video game logo or trade dress (GTA San Andreas meme in GTA lettering) |
| `sticker-board/95.png` | `diet-coke.webp` (Diet Coke Can) | Memes | Third-party brand logo or trade dress (Diet Coke can) |
| `sticker-board/98.png` | `i-dont-care.webp` (I Don't Care) | Memes | Photo of a real person (likeness) |
| `sticker-board/99.png` | `verity.webp` (Verity) | Memes | Book title branding (Verity) |
| `sticker-board/101.png` | `i-love-men.webp` (I Love Men) | Memes | Third-party brand logo or trade dress (I love NY trade mark parody) |
| `sticker-board/102.png` | `twenty-three.webp` (23) | Sports | Real athlete likeness or club crest (Jordan 23 in Bulls lettering) |
| `sticker-board/103.png` | `air-one.webp` (Air One) | Sports | Third-party brand logo or trade dress (Nike Air Jordan / Off-White) |
| `sticker-board/121.png` | `cig-pack.webp` (Cig Pack) | Memes | Third-party brand logo or trade dress (Marlboro) |
| `sticker-board/122.png` | `porsche-poster.webp` (911 Poster) | Racing | Car maker logo or recognisable car design (Porsche) and another seller's watermark |
| `sticker-board/124.png` | `supreme-roll.webp` (Supreme Roll) | Memes | Third-party brand logo or trade dress (Supreme) |
| `sticker-board/126.png` | `starboy.webp` (Starboy) | Music | Musician likeness, album art or artist branding (Starboy) |
| `sticker-board/127.png` | `gt3-rs-white.webp` (GT3 RS White) | Racing | Car maker logo or recognisable car design (Porsche) and another seller's watermark |
| `sticker-board/128.png` | `rwb-911.webp` (Widebody 911) | Racing | Car maker logo or recognisable car design (Porsche RWB) |
| `sticker-board/130.png` | `geo-charizard.webp` (Geo Charizard) | Gaming | Video game logo or trade dress (Pokemon Charizard) |
| `sticker-board/131.png` | `golden-gauntlet.webp` (Golden Gauntlet) | Superheroes | Marvel/DC character or logo (Infinity Gauntlet) |
| `sticker-board/132.png` | `cute-girl.webp` (Cute Girl) | Anime vibe | Anime/manga character or symbol style character, suggestive |
| `sticker-board/133.png` | `dino-laptop.webp` (Dino Says Don't Touch) | Gaming | Third-party brand logo or trade dress (Google Chrome dino) |
| `sticker-board/135.png` | `notorious.webp` (Notorious) | Sports | Real athlete likeness or club crest (Conor McGregor) |
| `sticker-board/136.png` | `rangiku.webp` (Rangiku) | Anime vibe | Anime/manga character or symbol (Bleach) |
| `sticker-board/140.png` | `space-cowboy.webp` (Space Cowboy) | Anime vibe | Anime/manga character or symbol (Cowboy Bebop) |
| `sticker-board/141.png` | `pinterest.webp` (Pinterest) | Memes | Third-party brand logo or trade dress (Pinterest) |
| `sticker-board/142.png` | `supra-sun.webp` (Supra Sunset) | Racing | Car maker logo or recognisable car design (Toyota Supra) |
| `sticker-set/Sticker_02.png` | `hoonigan-rocket.webp` (Hoonigan Rocket) | Racing | Third-party brand logo or trade dress (Hoonigan) |
| `sticker-set/Sticker_04.png` | `starboy-poster.webp` (Starboy Poster) | Music | Musician likeness, album art or artist branding (Starboy album art) |
| `sticker-set/Sticker_05.png` | `huracan.webp` (Huracan) | Racing | Car maker logo or recognisable car design (Lamborghini Huracan) |
| `sticker-set/Sticker_06.png` | `countach.webp` (Countach) | Racing | Car maker logo or recognisable car design (Lamborghini Countach) |
| `sticker-set/Sticker_10.png` | `virat-18.webp` (Virat 18) | Sports | Real athlete likeness or club crest (Virat Kohli name and number) |

## Other files

| File | What it is |
|---|---|
| `Glood_Logo.png` | GLOOD logo master (copied to ./glood-logo.png) |
| `board-photo.png` | Photo of the physical sticker board. Reference only, not used on the site |
| `size-reference.png` | Size and price reference graphic. Source of the prices on the site, image itself not used |
| `board-doc.pdf` | Print sheet of the board designs (156 pages). Reference only |
| `sticker-set/Stickers_Sheet.pdf` | Print sheet of the board designs (153 pages). Reference only |
| `STICKER.zip` | Original archive of sticker-board/ (already extracted, contents identical) |

## Original GLOOD designs

The custom SVG stickers in `src/stickers/custom/` were designed for this site and are generated by
`npm run stickers` (`scripts/build-stickers.mjs`). They contain no third-party material.

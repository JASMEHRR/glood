import '@fontsource/lilita-one/400.css';
import '@fontsource/bungee/400.css';
import '@fontsource/space-grotesk/400.css';
import '@fontsource/space-grotesk/600.css';
import '@fontsource/space-grotesk/700.css';
import './styles.css';

import logoSvg from './assets/glood-logo.svg?raw';
import { INSTAGRAM_URL } from './config.js';
import { animateLogoFace } from './js/logo-face.js';
import { buildGallery, buildDrops } from './js/gallery.js';
import { LOGO_STICKER, laptopStickers } from './js/stickers.js';

const root = document.documentElement;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const mobile = window.matchMedia('(max-width: 767px)').matches;
root.classList.add('js');
if (reducedMotion) root.classList.add('reduced-motion');

const $ = (sel) => {
  const el = document.querySelector(sel);
  if (!el) throw new Error(`Missing element ${sel}`);
  return el;
};

// ---------- hero logo ----------
const heroLogo = $('.hero-logo');
heroLogo.innerHTML = logoSvg;
const logoEl = heroLogo.querySelector('svg');
logoEl.removeAttribute('width');
logoEl.removeAttribute('height');
animateLogoFace(logoEl, { reducedMotion });

// ---------- sections ----------
buildGallery({ grid: $('.sticker-grid'), filterBar: $('.filters'), status: $('#gallery-status') });
buildDrops($('.drop-grid'));
for (const a of document.querySelectorAll('[data-instagram]')) a.href = INSTAGRAM_URL;

// ---------- 3D sticker story ----------
function showFallback(stickers) {
  root.classList.add('no-webgl');
  const list = $('.stage-fallback');
  list.hidden = false;
  for (const [i, s] of [LOGO_STICKER, ...stickers].entries()) {
    const li = document.createElement('li');
    li.style.setProperty('--r', `${((i * 37) % 30) - 15}deg`);
    const img = document.createElement('img');
    img.src = s.url;
    img.alt = '';
    img.loading = 'lazy';
    li.append(img);
    list.append(li);
  }
}

async function startStory() {
  const stickers = laptopStickers(mobile ? 8 : 14);
  const canvas = $('.stage-canvas');
  let laptopModule;
  let storyModule;
  try {
    [laptopModule, storyModule] = await Promise.all([import('./js/laptop.js'), import('./js/story.js')]);
  } catch (err) {
    console.error('[glood] Could not load the 3D story', err);
    showFallback(stickers);
    return;
  }
  const laptop = laptopModule.createLaptop(canvas, { mobile, stickers, logo: LOGO_STICKER });
  if (!laptop) {
    showFallback(stickers);
    return;
  }
  window.addEventListener('resize', () => laptop.resize(), { passive: true });

  if (reducedMotion) {
    root.classList.add('story-still');
    laptop.resize();
    await storyModule.renderStill(laptop);
    return;
  }

  storyModule.buildStory({
    section: $('.story'),
    stage: $('.story'),
    heroLogo,
    heroCopy: $('.hero-copy'),
    captions: [...document.querySelectorAll('.caption')],
    counter: $('.counter'),
    progress: $('.story-progress span'),
    laptop,
    mobile,
  });
  laptop.render();
  // Textures arrive after the first frame; the scroll timeline re-renders on its own after that.
  laptop.loaded.then(() => laptop.render());
}

startStory();

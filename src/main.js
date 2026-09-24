import './base.js';

import logoSvg from './assets/glood-logo.svg?raw';
import { animateLogoFace } from './js/logo-face.js';
import { buildGallery, buildDrops } from './js/gallery.js';
import { LOGO_STICKER, laptopStickers } from './js/stickers.js';
import { mountNav, mountFooter, motionEnabled } from './js/chrome.js';

const root = document.documentElement;
// Motion is on unless switched off with the nav toggle (base.js has already set .reduced-motion).
const reducedMotion = !motionEnabled();
const mobile = window.matchMedia('(max-width: 767px)').matches;

mountNav({ home: true, reloadOnMotion: true });
mountFooter();

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
buildGallery({ grid: $('.sticker-grid'), filterBar: $('.filters'), status: $('#gallery-status'), tiles: $('.cat-tiles') });
buildDrops($('.drop-grid'));

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
    jumpToHash();
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
  jumpToHash();
  // Textures arrive after the first frame; the scroll timeline re-renders on its own after that.
  laptop.loaded.then(() => laptop.render());
}

// Arriving on a link like index.html?cat=racing#gallery: the browser jumps to #gallery before the
// scroll story has pinned, and pinning adds several screens of scroll above it. Jump again after.
function jumpToHash() {
  const target = window.location.hash && document.querySelector(window.location.hash);
  if (target) requestAnimationFrame(() => target.scrollIntoView());
}

startStory();

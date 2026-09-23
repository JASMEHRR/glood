// The pinned scroll story. One GSAP timeline, scrubbed by scroll, drives the DOM logo and the
// laptop state. Scrolling back up plays everything in reverse.
//
// Timeline units run 0 to 100:
//   0-6    hero (logo, eyes, tagline)
//   4-21   laptop rises in, logo shrinks, spins and flies onto the lid: sticker #1
//   21-30  laptop turns to face the camera
//   32-78  sticker slap, one at a time
//   78-86  fully sticker-bombed
//   86-100 lid opens, screen lights up with the gallery

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { POSES } from './laptop.js';

gsap.registerPlugin(ScrollTrigger);

const without = (pose, ...keys) => Object.fromEntries(Object.entries(pose).filter(([k]) => !keys.includes(k)));

export function buildStory({ section, stage, heroLogo, heroCopy, captions, counter, progress, laptop, mobile }) {
  const { state, slots, FLY_HEIGHT } = laptop;

  // Where the logo lands, measured from the 3D scene. Recomputed on every refresh (resize).
  let landing = null;
  const land = () => {
    if (!landing) landing = laptop.projectSlot(0, POSES.landing);
    return landing;
  };
  ScrollTrigger.addEventListener('refreshInit', () => {
    landing = null;
    laptop.resize();
  });

  let landedShown = -1;
  const tl = gsap.timeline({
    defaults: { ease: 'none' },
    onUpdate() {
      laptop.render();
      const landed = slots.filter((s) => s.alpha > 0.99 && s.h < 0.001).length;
      if (landed !== landedShown) {
        landedShown = landed;
        counter.textContent = `${String(landed).padStart(2, '0')} / ${String(slots.length).padStart(2, '0')}`;
      }
    },
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: () => `+=${window.innerHeight * (mobile ? 5 : 6.5)}`,
      pin: section,
      scrub: 0.8,
      invalidateOnRefresh: true,
      anticipatePin: 1,
      onUpdate: (self) => gsap.set(progress, { scaleX: self.progress }),
    },
  });

  // ---- 1-2: hero, then the logo becomes sticker #1 ----
  tl.to(heroCopy, { autoAlpha: 0, y: -30, duration: 5 }, 1);
  tl.to(state, { ...without(POSES.landing), duration: 16, ease: 'power2.out' }, 4);
  tl.to(heroLogo, {
    x: () => land().x - stage.clientWidth / 2,
    y: () => land().y - stage.clientHeight / 2,
    scale: () => land().width / heroLogo.offsetWidth,
    duration: 13,
    ease: 'power2.in',
  }, 6);
  tl.to(heroLogo, { rotation: 22, duration: 7, ease: 'sine.inOut' }, 6);
  tl.to(heroLogo, { rotation: -6, duration: 6, ease: 'sine.in' }, 13);
  // The flat logo hands over to the 3D sticker right at the lid, then the sticker slaps down.
  tl.to(heroLogo, { autoAlpha: 0, duration: 0.8 }, 18.6);

  const logoSlot = slots[0];
  tl.fromTo(logoSlot, { alpha: 0 }, { alpha: 1, duration: 0.6 }, 18.6);
  tl.fromTo(logoSlot, { h: 0.22, scale: 1.12 }, { h: 0, scale: 0.9, duration: 1, ease: 'power2.in' }, 18.6);
  tl.to(logoSlot, { scale: 1, duration: 1.4, ease: 'back.out(4)' }, 19.6);
  addShake(tl, state, 19.6, 1, 0.7);

  // ---- 3: turn toward the camera ----
  tl.to(state, { ...without(POSES.face), duration: 10, ease: 'power2.inOut' }, 20.5);
  showCaption(tl, captions[0], 22, 30);

  // ---- 4-5: sticker slap ----
  const others = slots.slice(1);
  const start = 32;
  const span = 46;
  const step = span / Math.max(1, others.length);
  tl.to(state, { ...without(POSES.bombed), duration: span, ease: 'sine.inOut' }, 30.5);
  others.forEach((slot, i) => {
    const t = start + i * step;
    const fly = step * 0.62;
    tl.fromTo(slot, { alpha: 0 }, { alpha: 1, duration: step * 0.08 }, t);
    tl.fromTo(slot, { h: FLY_HEIGHT, scale: 1.6 }, { h: 0, scale: 0.9, duration: fly, ease: 'power2.in' }, t);
    tl.to(slot, { scale: 1, duration: step * 0.3, ease: 'back.out(4)' }, t + fly);
    addShake(tl, state, t + fly, i + 2, step);
  });
  showCaption(tl, captions[1], start, start + span + 0.5);
  showCaption(tl, captions[2], 79, 86);

  // ---- 6: open the lid, light the screen ----
  tl.to(state, { ...without(POSES.open, 'screen'), duration: 12, ease: 'power2.inOut' }, 86);
  tl.to(state, { screen: 1, duration: 5, ease: 'power1.in' }, 93);
  showCaption(tl, captions[3], 88, null);
  tl.to({}, { duration: 2 }, 98); // short hold on the open laptop before the page moves on

  return tl;
}

function addShake(tl, state, at, seed, step) {
  tl.set(state, { shakeSeed: seed }, at);
  tl.fromTo(state, { shake: 0 }, { shake: 1, duration: Math.min(0.4, step * 0.06), ease: 'power1.out' }, at);
  tl.to(state, { shake: 0, duration: Math.min(1.2, step * 0.2), ease: 'power2.out' }, `>`);
}

function showCaption(tl, el, from, to) {
  if (!el) return;
  tl.fromTo(el, { autoAlpha: 0, y: 40, rotation: -4 }, { autoAlpha: 1, y: 0, rotation: -2, duration: 2, ease: 'back.out(2)' }, from);
  if (to !== null) tl.to(el, { autoAlpha: 0, y: -30, duration: 1.5, ease: 'power1.in' }, to - 1.5);
}

// Reduced motion or no scroll story: show the finished, sticker-bombed laptop as a still.
export async function renderStill(laptop) {
  Object.assign(laptop.state, POSES.bombed, { shake: 0 });
  for (const slot of laptop.slots) Object.assign(slot, { alpha: 1, h: 0, scale: 1 });
  await laptop.loaded;
  laptop.render();
}

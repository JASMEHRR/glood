// GLOOD cursor: a yellow, black-outlined ring that trails the mouse pointer. It grows over anything
// clickable, says "View" over sticker cards, "Peel" over the product sticker and "Open" over category
// tiles, and throws a small burst of sticker confetti on every click.
//
// Mouse only (touch screens have no pointer to follow). The normal cursor stays visible, so nothing
// about precision or accessibility changes. Hidden while motion is switched off.

const LABELS = [
  ['.product-sheet', 'Peel'],
  ['.sticker-card, .drop-card', 'View'],
  ['.cat-link', 'Open'],
];
const CLICKABLE = 'a, button, label, input, textarea, select, summary, [role="button"]';
const CONFETTI = ['#ffa905', '#e10b19', '#00bbd1', '#ffd400', '#ff8fc7', '#3ddc84', '#8a6bff'];
const FOLLOW = 0.2; // how much of the gap the ring closes each frame

const motionOff = () => document.documentElement.classList.contains('reduced-motion');

export function mountCursor() {
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  const ring = document.createElement('div');
  ring.className = 'cursor-ring';
  ring.setAttribute('aria-hidden', 'true');
  ring.innerHTML = '<span class="cursor-shape"><span class="cursor-label"></span></span>';
  document.body.append(ring);
  const label = ring.querySelector('.cursor-label');
  const root = document.documentElement;

  let x = 0;
  let y = 0;
  let rx = 0;
  let ry = 0;
  let raf = 0;

  function frame() {
    rx += (x - rx) * FOLLOW;
    ry += (y - ry) * FOLLOW;
    ring.style.transform = `translate3d(${rx}px, ${ry}px, 0)`;
    // Stop the loop once the ring has caught up, so an idle page does no work.
    raf = Math.abs(x - rx) + Math.abs(y - ry) > 0.3 ? requestAnimationFrame(frame) : 0;
  }

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType !== 'mouse') return;
    x = e.clientX;
    y = e.clientY;
    if (!root.classList.contains('has-cursor')) {
      root.classList.add('has-cursor');
      rx = x;
      ry = y;
    }
    if (!raf) raf = requestAnimationFrame(frame);
  }, { passive: true });

  document.addEventListener('mouseleave', () => root.classList.remove('has-cursor'));

  document.addEventListener('pointerover', (e) => {
    const target = e.target instanceof Element ? e.target : null;
    if (!target) return;
    const hit = LABELS.find(([selector]) => target.closest(selector));
    ring.classList.toggle('is-label', Boolean(hit));
    ring.classList.toggle('is-hover', !hit && Boolean(target.closest(CLICKABLE)));
    label.textContent = hit ? hit[1] : '';
  });

  window.addEventListener('pointerdown', (e) => {
    if (e.pointerType !== 'mouse' || motionOff()) return;
    ring.classList.add('is-down');
    burst(e.clientX, e.clientY);
  });
  window.addEventListener('pointerup', () => ring.classList.remove('is-down'));
}

function burst(x, y) {
  const count = 8;
  for (let i = 0; i < count; i++) {
    const bit = document.createElement('span');
    bit.className = `cursor-bit${i % 3 === 0 ? ' star' : ''}`;
    bit.setAttribute('aria-hidden', 'true');
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    const dist = 28 + Math.random() * 26;
    bit.style.left = `${x}px`;
    bit.style.top = `${y}px`;
    bit.style.setProperty('--dx', `${Math.cos(angle) * dist}px`);
    bit.style.setProperty('--dy', `${Math.sin(angle) * dist}px`);
    bit.style.setProperty('--spin', `${Math.round(Math.random() * 540 - 270)}deg`);
    bit.style.background = CONFETTI[i % CONFETTI.length];
    document.body.append(bit);
    bit.addEventListener('animationend', () => bit.remove(), { once: true });
    setTimeout(() => bit.remove(), 1000); // in case animations are off and animationend never fires
  }
}

// Brings the inline GLOOD logo to life: the O-eyes follow the pointer and blink every 3 to 5 seconds.

import { gsap } from 'gsap';

const MAX_X = 30; // how far a pupil can travel inside its O, in SVG units
const MAX_Y = 42;

export function animateLogoFace(svg, { reducedMotion }) {
  const eyes = [...svg.querySelectorAll('.glood-eye')];
  const brows = [...svg.querySelectorAll('.glood-brow')];
  if (eyes.length !== 2) {
    console.warn('[glood] Logo eyes not found, face animation skipped');
    return () => {};
  }
  if (reducedMotion) return () => {};

  gsap.set([...eyes, ...brows], { transformOrigin: '50% 50%' });
  const movers = eyes.map((eye) => ({
    eye,
    x: gsap.quickTo(eye, 'x', { duration: 0.35, ease: 'power3.out' }),
    y: gsap.quickTo(eye, 'y', { duration: 0.35, ease: 'power3.out' }),
  }));

  function look(clientX, clientY) {
    const box = svg.getBoundingClientRect();
    if (!box.width) return;
    const unit = box.width / svg.viewBox.baseVal.width; // CSS px per SVG unit
    for (const m of movers) {
      const cx = box.left + Number(m.eye.dataset.cx) * unit;
      const cy = box.top + Number(m.eye.dataset.cy) * unit;
      const dx = clientX - cx;
      const dy = clientY - cy;
      const dist = Math.hypot(dx, dy) || 1;
      // Ease toward the edge of the O as the pointer moves further away.
      const reach = Math.min(1, dist / (box.width * 0.45));
      m.x((dx / dist) * MAX_X * reach);
      m.y((dy / dist) * MAX_Y * reach);
    }
  }

  const onPointer = (e) => look(e.clientX, e.clientY);
  window.addEventListener('pointermove', onPointer, { passive: true });

  let blinkTimer;
  function blink() {
    gsap.timeline()
      .to(eyes, { scaleY: 0.08, duration: 0.07, ease: 'power2.in' })
      .to(brows, { y: 10, duration: 0.07, ease: 'power2.in' }, 0)
      .to(eyes, { scaleY: 1, duration: 0.14, ease: 'power2.out' })
      .to(brows, { y: 0, duration: 0.2, ease: 'power2.out' }, '<');
    blinkTimer = setTimeout(blink, 3000 + Math.random() * 2000);
  }
  blinkTimer = setTimeout(blink, 1600);

  return () => {
    window.removeEventListener('pointermove', onPointer);
    clearTimeout(blinkTimer);
  };
}

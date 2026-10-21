'use client';

import { useEffect } from 'react';

export default function ContactPanelEffects() {
  useEffect(() => {
    const panel = document.querySelector<HTMLElement>('.footer-contact');

    if (!panel) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    );
    let frame = 0;

    const showGlow = () => panel.classList.add('is-contact-glow-active');
    const hideGlow = () => {
      panel.classList.remove('is-contact-glow-active');
      panel.style.setProperty('--contact-glow-opacity', '0');
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!finePointer.matches) return;

      showGlow();
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const rect = panel.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        panel.style.setProperty('--contact-glow-x', `${x.toFixed(2)}%`);
        panel.style.setProperty('--contact-glow-y', `${y.toFixed(2)}%`);
        panel.style.setProperty('--contact-glow-opacity', '1');
      });
    };

    if (reducedMotion || !finePointer.matches) {
      panel.style.setProperty('--contact-glow-opacity', '0.5');
      showGlow();
    } else {
      panel.addEventListener('pointerenter', showGlow);
      panel.addEventListener('pointermove', handlePointerMove, {
        passive: true,
      });
      panel.addEventListener('pointerleave', hideGlow);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      panel.classList.remove('is-contact-glow-active');
      panel.style.removeProperty('--contact-glow-opacity');
      panel.style.removeProperty('--contact-glow-x');
      panel.style.removeProperty('--contact-glow-y');
      panel.removeEventListener('pointerenter', showGlow);
      panel.removeEventListener('pointermove', handlePointerMove);
      panel.removeEventListener('pointerleave', hideGlow);
    };
  }, []);

  return null;
}

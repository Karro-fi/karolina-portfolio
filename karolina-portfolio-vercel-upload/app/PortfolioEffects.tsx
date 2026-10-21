'use client';

import { useEffect } from 'react';

export default function PortfolioEffects() {
  useEffect(() => {
    const root = document.documentElement;
    const hero = document.querySelector<HTMLElement>('.portfolio-hero');
    const lineSections = Array.from(
      document.querySelectorAll<HTMLElement>('.motion-line'),
    );
    const liaLink = document.querySelector<HTMLElement>('.status-pill');
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    root.classList.add('motion-enhanced');

    if (reducedMotion) {
      hero?.style.setProperty('--hero-glow-opacity', '1');
      hero?.classList.add('is-glow-active');
      lineSections.forEach((section) =>
        section.classList.add('is-line-revealed'),
      );
      return () => {
        root.classList.remove('motion-enhanced');
        hero?.classList.remove('is-glow-active');
        hero?.style.removeProperty('--hero-glow-opacity');
      };
    }

    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          (entry.target as HTMLElement).classList.toggle(
            'is-line-revealed',
            entry.isIntersecting,
          );
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    lineSections.forEach((section) => lineObserver.observe(section));

    const liaObserver = new IntersectionObserver(
      ([entry]) => {
        liaLink?.classList.toggle('is-soft-glow', entry?.isIntersecting ?? false);
      },
      { threshold: 0.8 },
    );

    if (liaLink) liaObserver.observe(liaLink);

    const finePointer = window.matchMedia(
      '(hover: hover) and (pointer: fine)',
    );
    let frame = 0;

    const showGlow = () => hero?.classList.add('is-glow-active');
    const hideGlow = () => {
      hero?.classList.remove('is-glow-active');
      hero?.style.setProperty('--hero-glow-opacity', '0');
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!hero || !finePointer.matches) return;

      showGlow();
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        const normalizedY = (event.clientY - rect.top) / rect.height;
        const fadeStart = 0.68;
        const fadeEnd = 0.92;
        const opacity = Math.max(
          0,
          Math.min(1, (fadeEnd - normalizedY) / (fadeEnd - fadeStart)),
        );

        hero.style.setProperty('--hero-glow-x', `${x.toFixed(2)}%`);
        hero.style.setProperty('--hero-glow-y', `${y.toFixed(2)}%`);
        hero.style.setProperty('--hero-glow-opacity', opacity.toFixed(3));
      });
    };

    if (!finePointer.matches) {
      hero?.style.setProperty('--hero-glow-opacity', '1');
      showGlow();
    }
    if (hero?.matches(':hover')) showGlow();

    hero?.addEventListener('pointerenter', showGlow);
    hero?.addEventListener('pointermove', handlePointerMove, { passive: true });
    hero?.addEventListener('pointerleave', hideGlow);

    return () => {
      root.classList.remove('motion-enhanced');
      hero?.classList.remove('is-glow-active');
      hero?.style.removeProperty('--hero-glow-opacity');
      lineObserver.disconnect();
      liaObserver.disconnect();
      window.cancelAnimationFrame(frame);
      hero?.removeEventListener('pointerenter', showGlow);
      hero?.removeEventListener('pointermove', handlePointerMove);
      hero?.removeEventListener('pointerleave', hideGlow);
    };
  }, []);

  return null;
}

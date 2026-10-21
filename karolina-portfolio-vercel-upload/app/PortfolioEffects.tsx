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
      lineSections.forEach((section) =>
        section.classList.add('is-line-revealed'),
      );
      return () => root.classList.remove('motion-enhanced');
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

    const handlePointerMove = (event: PointerEvent) => {
      if (!hero || !finePointer.matches) return;

      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const rect = hero.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        hero.style.setProperty('--hero-glow-x', `${x.toFixed(2)}%`);
        hero.style.setProperty('--hero-glow-y', `${y.toFixed(2)}%`);
      });
    };

    hero?.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      root.classList.remove('motion-enhanced');
      lineObserver.disconnect();
      liaObserver.disconnect();
      window.cancelAnimationFrame(frame);
      hero?.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);

  return null;
}

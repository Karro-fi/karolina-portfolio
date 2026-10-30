'use client';

import { useEffect, useRef } from 'react';

export default function CaseProgress() {
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;

    const processGrid = document.querySelector<HTMLElement>(
      '.case-page .process-grid',
    );
    let processObserver: IntersectionObserver | null = null;

    if (processGrid) {
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;
      const supportsScrollDrivenReveal = CSS.supports(
        'animation-timeline: view()',
      );

      if (reducedMotion) {
        processGrid.classList.add('is-revealed');
      } else if (!supportsScrollDrivenReveal) {
        processGrid.classList.add('reveal-ready');
        processObserver = new IntersectionObserver(
          ([entry]) => {
            processGrid.classList.toggle('is-revealed', entry.isIntersecting);
          },
          {
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.18,
          },
        );
        processObserver.observe(processGrid);
      }
    }

    const updateProgress = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? window.scrollY / scrollable : 0;

        progressRef.current?.style.setProperty(
          '--case-progress',
          Math.min(1, Math.max(0, progress)).toFixed(4),
        );
      });
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
      processObserver?.disconnect();
    };
  }, []);

  return (
    <div className="case-progress" aria-hidden="true">
      <span ref={progressRef} />
    </div>
  );
}

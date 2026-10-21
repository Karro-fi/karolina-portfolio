'use client';

import { useEffect, useRef, type ReactNode } from 'react';

type ContributionRevealSectionProps = {
  children: ReactNode;
  className: string;
  id: string;
};

export default function ContributionRevealSection({
  children,
  className,
  id,
}: ContributionRevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reducedMotion) {
      section.classList.add('is-revealed');
      return;
    }

    section.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        section.classList.add('is-revealed');
        observer.unobserve(section);
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.15,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={className} id={id}>
      {children}
    </section>
  );
}

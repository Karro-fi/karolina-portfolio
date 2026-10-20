'use client';

import { useEffect, useRef, useState } from 'react';

type NavigationItem = {
  href: string;
  label: string;
};

type SiteNavigationProps = {
  items: NavigationItem[];
  initialHref: string;
};

export default function SiteNavigation({ items, initialHref }: SiteNavigationProps) {
  const [activeHref, setActiveHref] = useState(initialHref);
  const [indicator, setIndicator] = useState({ x: 0, width: 0, visible: false });
  const desktopNavRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);
  const clickLockUntilRef = useRef(0);

  useEffect(() => {
    const sectionItems = items.filter((item) => item.href.startsWith('#'));

    const updateFromScroll = () => {
      if (Date.now() < clickLockUntilRef.current) return;

      const triggerLine = 120;
      let nextHref = initialHref;

      for (const item of sectionItems) {
        const section = document.getElementById(item.href.slice(1));
        if (section && section.getBoundingClientRect().top <= triggerLine) {
          nextHref = item.href;
        }
      }

      const pageBottom = window.scrollY + window.innerHeight;
      if (pageBottom >= document.documentElement.scrollHeight - 16 && sectionItems.length > 0) {
        nextHref = sectionItems[sectionItems.length - 1].href;
      }

      setActiveHref(nextHref);
    };

    let frame = 0;
    const requestUpdate = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateFromScroll();
      });
    };

    const hashHref = window.location.hash;
    if (sectionItems.some((item) => item.href === hashHref)) {
      setActiveHref(hashHref);
    } else {
      updateFromScroll();
    }

    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);
    window.addEventListener('hashchange', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      window.removeEventListener('hashchange', requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [initialHref, items]);

  useEffect(() => {
    const nav = desktopNavRef.current;
    if (!nav) return;

    const updateIndicator = () => {
      const activeLink = Array.from(nav.querySelectorAll<HTMLAnchorElement>('a')).find(
        (link) => link.dataset.navHref === activeHref,
      );

      if (!activeLink) {
        setIndicator((current) => ({ ...current, visible: false }));
        return;
      }

      setIndicator({
        x: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
        visible: true,
      });
    };

    updateIndicator();
    const observer = new ResizeObserver(updateIndicator);
    observer.observe(nav);
    return () => observer.disconnect();
  }, [activeHref]);

  const handleClick = (href: string) => {
    mobileMenuRef.current?.removeAttribute('open');
    if (!href.startsWith('#')) return;

    clickLockUntilRef.current = Date.now() + 900;
    setActiveHref(href);
  };

  const links = items.map((item) => (
    <a
      key={item.href}
      href={item.href}
      data-nav-href={item.href}
      aria-current={activeHref === item.href ? 'location' : undefined}
      onClick={() => handleClick(item.href)}
    >
      {item.label}
    </a>
  ));

  return (
    <>
      <nav ref={desktopNavRef} className="desktop-nav" aria-label="Huvudnavigation">
        {links}
        <span
          className="nav-indicator"
          aria-hidden="true"
          style={{
            width: `${indicator.width}px`,
            transform: `translateX(${indicator.x}px)`,
            opacity: indicator.visible ? 1 : 0,
          }}
        />
      </nav>

      <details ref={mobileMenuRef} className="mobile-nav">
        <summary>Meny</summary>
        <nav aria-label="Mobilnavigation">{links}</nav>
      </details>
    </>
  );
}

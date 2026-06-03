'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}

/**
 * RevealWrapper — Bulletproof scroll-reveal component.
 *
 * Strategy:
 *  1. On mount, add `js-reveal-hidden` ONLY if IntersectionObserver is supported.
 *     If IO is NOT supported (old browsers), the element stays visible forever.
 *  2. When the element enters the viewport, swap `js-reveal-hidden` → `js-reveal-visible`.
 *  3. Once revealed, the observer disconnects (no wasted listeners).
 *  4. If JS never runs (SSR, no-JS), the element is visible via the `.reveal` default.
 */
export default function RevealWrapper({
  children,
  className = '',
  delay = 0,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;

    // Opt-in to hidden state only if IO is available
    el.classList.add('js-reveal-hidden');

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Use delay for staggered entrance effects
          const timer = setTimeout(() => {
            el.classList.remove('js-reveal-hidden');
            el.classList.add('js-reveal-visible');
            observer.disconnect(); // clean up after reveal
          }, delay);

          return () => clearTimeout(timer);
        }
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

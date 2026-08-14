import { useState, useEffect, useRef } from 'react';

/**
 * useInViewMotion
 * A lightweight IntersectionObserver hook designed for CSS-driven reveals.
 * Bypasses continuous React state updates by toggling a CSS class directly if a ref is provided.
 * 
 * @param {Object} options - IntersectionObserver options
 * @param {number|number[]} options.threshold - Viewport intersection threshold
 * @param {string} options.rootMargin - Margin around root
 * @param {boolean} options.once - Whether to disconnect after first reveal (default true)
 * @param {boolean} options.useClass - If true, adds 'in-view' class to ref directly (bypasses state)
 * @returns {[React.MutableRefObject, boolean]} [ref, inView]
 */
export function useInViewMotion({
  threshold = 0.15,
  rootMargin = '0px',
  once = true,
  useClass = false
} = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fast path for prefers-reduced-motion
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (useClass) {
        element.classList.add('in-view');
      }
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (useClass) {
            element.classList.add('in-view');
          } else {
            setInView(true);
          }
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          if (useClass) {
            element.classList.remove('in-view');
          } else {
            setInView(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, useClass]);

  return [ref, inView];
}

import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * AppleScrollEngine (2026 Apple Keynote & Apple.com High-End Live Scroll Engine)
 * 1. Desktop: Transforms fast, jerky Windows wheel scrolling into slow, velvety 60fps momentum (lerp 0.052).
 * 2. Desktop + Mobile: Live Apple.com scroll-linked scrubbing, parallax depth, soft blur-to-sharp reveals,
 *    and smooth scale transitions for every section & card across all portfolio pages.
 */
export default function AppleScrollEngine() {
  const requestRef = useRef(null);
  const scrollLoopRef = useRef(null);
  const targetYRef = useRef(window.scrollY || 0);
  const currentYRef = useRef(window.scrollY || 0);
  const isScrollingRef = useRef(false);
  const location = useLocation();

  // 1. DESKTOP VELVETY MOMENTUM WHEEL DAMPING
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (prefersReducedMotion || isTouchDevice) return;

    // Luxurious Apple keynote weight: lerp 0.052 with clamped 45px wheel delta
    const LERP_FACTOR = 0.052;
    const MAX_DELTA_PER_TICK = 45;

    const updateScroll = () => {
      const current = currentYRef.current;
      const target = targetYRef.current;
      const diff = target - current;

      if (Math.abs(diff) > 0.25) {
        const nextY = current + diff * LERP_FACTOR;
        currentYRef.current = nextY;
        window.scrollTo(0, Math.round(nextY));
        requestRef.current = requestAnimationFrame(updateScroll);
      } else {
        currentYRef.current = target;
        window.scrollTo(0, Math.round(target));
        isScrollingRef.current = false;
        requestRef.current = null;
      }
    };

    const handleWheel = (e) => {
      // Don't intercept scroll inside mobile menus, modals, or dropdowns
      if (e.target.closest('.nav-mobile-sheet, .nav-dropdown, .search-container, .modal-scroll-area, .drawer-content')) {
        return;
      }

      e.preventDefault();

      const rawDelta = e.deltaY;
      const dampedDelta = Math.max(-MAX_DELTA_PER_TICK, Math.min(MAX_DELTA_PER_TICK, rawDelta));

      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight
      );

      targetYRef.current = Math.max(
        0,
        Math.min(maxScroll, targetYRef.current + dampedDelta * 1.65)
      );

      if (!isScrollingRef.current) {
        isScrollingRef.current = true;
        currentYRef.current = window.scrollY || 0;
        requestRef.current = requestAnimationFrame(updateScroll);
      }
    };

    const handleScrollSync = () => {
      if (!isScrollingRef.current) {
        currentYRef.current = window.scrollY || 0;
        targetYRef.current = window.scrollY || 0;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScrollSync, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScrollSync);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // 2. APPLE.COM HIGH-END LIVE SCROLL-LINKED REVEAL & PARALLAX ENGINE (DESKTOP + MOBILE)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;
    const maxTranslate = isMobile ? 32 : 54;
    const maxBlur = isMobile ? 6 : 10;
    const minScale = isMobile ? 0.96 : 0.94;

    // Selector targeting keynote sections, cards, and editorial layouts across all pages
    const selector = [
      'section',
      '.cinematic-card',
      '.flagship-card',
      '.museum-card',
      '.product-fullscreen',
      '.cinematic-block',
      '.sticky-stack-item',
      '.doc-hero',
      '.variant-hero',
      '.variant-split',
      '.variant-landscape',
      '.variant-portrait',
      '.variant-editorial',
      '.project-card',
      '.experience-card',
      '.credential-card',
      '.overview-section'
    ].join(', ');

    let elements = [];
    let isRunning = true;

    const refreshElements = () => {
      const nodeList = document.querySelectorAll(selector);
      elements = Array.from(nodeList).filter((el) => {
        // Exclude navbar, footer, and small inline elements
        return !el.closest('nav, footer') && el.offsetHeight > 30;
      });

      // Prepare elements with hardware acceleration hints
      elements.forEach((el) => {
        el.style.willChange = 'transform, opacity, filter';
        el.style.backfaceVisibility = 'hidden';
      });
    };

    // Apple cubic easing: smooth curve out
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const updateLiveScroll = () => {
      if (!isRunning) return;

      const viewportHeight = window.innerHeight;
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const revealZoneHeight = viewportHeight * (isMobile ? 0.32 : 0.38);

      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elTop = rect.top;
        const elBottom = rect.bottom;

        // Above viewport or in top fold initially
        if (elBottom < 0 || (elTop < viewportHeight * 0.85 && scrollY < 150)) {
          if (el.dataset.appleState !== 'done') {
            el.style.opacity = '1';
            el.style.transform = 'translate3d(0, 0, 0) scale(1)';
            el.style.filter = 'blur(0px)';
            el.dataset.appleState = 'done';
          }
          return;
        }

        // Below viewport bottom
        if (elTop >= viewportHeight) {
          if (el.dataset.appleState !== 'hidden') {
            el.style.opacity = '0.02';
            el.style.transform = `translate3d(0, ${maxTranslate}px, 0) scale(${minScale})`;
            el.style.filter = `blur(${maxBlur}px)`;
            el.dataset.appleState = 'hidden';
          }
          return;
        }

        // Inside active reveal zone at bottom of screen -> calculate live scrubbing progress [0 to 1]
        const rawProgress = (viewportHeight - elTop) / revealZoneHeight;
        const clampedProgress = Math.min(1, Math.max(0, rawProgress));

        if (clampedProgress >= 0.98) {
          if (el.dataset.appleState !== 'done') {
            el.style.opacity = '1';
            el.style.transform = 'translate3d(0, 0, 0) scale(1)';
            el.style.filter = 'blur(0px)';
            el.dataset.appleState = 'done';
          }
        } else {
          const t = easeOutCubic(clampedProgress);
          const opacity = Math.max(0.02, t);
          const translateY = Math.round((1 - t) * maxTranslate);
          const scale = minScale + t * (1 - minScale);
          const blur = Math.round((1 - t) * maxBlur);

          el.style.opacity = opacity.toFixed(3);
          el.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale.toFixed(3)})`;
          el.style.filter = blur > 0 ? `blur(${blur}px)` : 'none';
          el.dataset.appleState = 'scrubbing';
        }
      });

      scrollLoopRef.current = requestAnimationFrame(updateLiveScroll);
    };

    // Initialize elements and start live render loop
    const t1 = setTimeout(refreshElements, 80);
    const t2 = setTimeout(refreshElements, 350);
    const t3 = setTimeout(refreshElements, 800);

    scrollLoopRef.current = requestAnimationFrame(updateLiveScroll);

    // Re-scan DOM if window resizes
    window.addEventListener('resize', refreshElements, { passive: true });

    return () => {
      isRunning = false;
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener('resize', refreshElements);
      if (scrollLoopRef.current) cancelAnimationFrame(scrollLoopRef.current);
    };
  }, [location.pathname]);

  return null;
}

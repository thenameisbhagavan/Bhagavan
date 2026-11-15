import React, { createContext, useContext, useEffect, useRef, useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollContext = createContext({
  lenis: null,
  scrollProgress: 0,
  scrollVelocity: 0,
  isMobile: false,
  reducedMotion: false,
});

export const useScrollContext = () => useContext(ScrollContext);

/**
 * Native Apple-Grade Scroll Provider
 * Restores 100% natural, browser-native vertical scrolling across all platforms:
 * - Direct mouse wheel with native OS acceleration
 * - Hardware-accelerated trackpad inertia and fluid Apple gestures
 * - Flawless mobile & tablet finger swipe momentum
 * - Zero-lag keyboard navigation (PageUp, PageDown, Space, Home, End)
 * - Free scrollbar dragging without resistance or virtual loops
 * - Clean synchronization with GSAP ScrollTrigger via passive scroll listener
 */
export function ScrollProvider({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const location = useLocation();

  // Keep live scroll metrics in refs to prevent application-wide React re-renders on every scroll tick
  const progressRef = useRef(0);
  const velocityRef = useRef(0);
  const lastScrollYRef = useRef(0);
  const lastScrollTimeRef = useRef(performance.now());
  const rafIdRef = useRef(null);

  useEffect(() => {
    // 1. Accessibility: Detect prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const checkReduced = () => setReducedMotion(motionQuery.matches);
    checkReduced();
    motionQuery.addEventListener('change', checkReduced);

    // 2. Responsive: Check mobile viewport / touch capability
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });

    // 3. Native scroll listener: Update GSAP ScrollTrigger and track velocity passively in rAF
    const onNativeScroll = () => {
      if (rafIdRef.current) return;

      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        
        // Sync GSAP ScrollTrigger with native scroll position
        ScrollTrigger.update();

        const currentY = window.scrollY || window.pageYOffset || 0;
        const now = performance.now();
        const docHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
        const dt = Math.max(1, now - lastScrollTimeRef.current);
        const dy = currentY - lastScrollYRef.current;

        progressRef.current = Math.min(1, Math.max(0, currentY / docHeight));
        velocityRef.current = (dy / dt) * 16.67; // Normalized 60fps velocity

        lastScrollYRef.current = currentY;
        lastScrollTimeRef.current = now;
      });
    };

    window.addEventListener('scroll', onNativeScroll, { passive: true });

    return () => {
      motionQuery.removeEventListener('change', checkReduced);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('scroll', onNativeScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // 4. Route-change scroll restoration & ScrollTrigger recalculation
  useEffect(() => {
    // Instant, unhindered native reset to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 80);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // 5. Native Scroll Adapter: Provides smooth and instant scrollTo API matching Lenis signature
  const nativeScrollAdapter = useMemo(() => ({
    scrollTo: (target, options = {}) => {
      let top = 0;
      if (typeof target === 'number') {
        top = target;
      } else if (typeof target === 'string') {
        const el = document.querySelector(target);
        if (el) top = el.getBoundingClientRect().top + window.scrollY + (options.offset || 0);
      } else if (target instanceof HTMLElement) {
        top = target.getBoundingClientRect().top + window.scrollY + (options.offset || 0);
      }

      window.scrollTo({
        top,
        behavior: options.immediate ? 'instant' : 'smooth',
      });
    },
    stop: () => {},
    start: () => {},
    destroy: () => {},
    raf: () => {},
  }), []);

  const contextValue = useMemo(() => ({
    lenis: nativeScrollAdapter,
    scrollProgress: progressRef.current,
    scrollVelocity: velocityRef.current,
    isMobile,
    reducedMotion,
  }), [nativeScrollAdapter, isMobile, reducedMotion]);

  return (
    <ScrollContext.Provider value={contextValue}>
      {children}
    </ScrollContext.Provider>
  );
}

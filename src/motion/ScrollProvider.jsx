import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from '@studio-freight/lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LENIS_CONFIG } from './motionTokens';

gsap.registerPlugin(ScrollTrigger);

const ScrollContext = createContext({
  lenis: null,
  scrollProgress: 0,
  scrollVelocity: 0,
  isMobile: false,
  reducedMotion: false,
});

export const useScrollContext = () => useContext(ScrollContext);

export function ScrollProvider({ children }) {
  const [lenisInstance, setLenisInstance] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const location = useLocation();
  const rafRef = useRef(null);

  useEffect(() => {
    // Detect prefers-reduced-motion and touch screen mobile hardware
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const checkReduced = () => setReducedMotion(motionQuery.matches);
    checkReduced();
    motionQuery.addEventListener('change', checkReduced);

    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (motionQuery.matches) {
      return () => {
        motionQuery.removeEventListener('change', checkReduced);
        window.removeEventListener('resize', checkMobile);
      };
    }

    // Initialize Lenis Smooth Scroll
    const lenis = new Lenis(LENIS_CONFIG);
    setLenisInstance(lenis);

    // Sync Lenis scroll tick with GSAP ScrollTrigger
    lenis.on('scroll', (e) => {
      ScrollTrigger.update();
      setScrollProgress(e.progress || 0);
      setScrollVelocity(e.velocity || 0);
    });

    // Run GSAP ticker aligned with Lenis
    const updateGsapTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGsapTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      motionQuery.removeEventListener('change', checkReduced);
      window.removeEventListener('resize', checkMobile);
      gsap.ticker.remove(updateGsapTicker);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  // Route-change scroll restoration & ScrollTrigger recalculation
  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 120);

    return () => clearTimeout(timer);
  }, [location.pathname, lenisInstance]);

  return (
    <ScrollContext.Provider
      value={{
        lenis: lenisInstance,
        scrollProgress,
        scrollVelocity,
        isMobile,
        reducedMotion,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
}

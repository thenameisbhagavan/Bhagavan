/**
 * Apple-Level Motion Tokens & Physics Configuration
 * High-precision parameters for Lenis smooth scrolling, GSAP ScrollTrigger, and motion primitives.
 */

export const EASE_CURVES = {
  // Apple Keynote signature cubic bezier curve
  appleCubic: [0.22, 1, 0.36, 1],
  // Smooth mechanical decelerate
  decelerate: [0.0, 0.0, 0.2, 1],
  // Spatial expansion
  spatialOut: [0.16, 1, 0.3, 1],
  // Standard GSAP string equivalents
  gsapApple: "cubic-bezier(0.22, 1, 0.36, 1)",
  gsapPower3: "power3.out",
  gsapExpo: "expo.out"
};

export const LENIS_CONFIG = {
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Apple cubic response curve
  orientation: 'vertical',
  gestureOrientation: 'vertical',
  smoothWheel: true,
  wheelMultiplier: 0.95,
  touchMultiplier: 1.5,
  infinite: false,
};

export const SCROLL_PHYSICS = {
  heroVelocityThreshold: 1.8,
  maxParallaxTranslate: 60,
  minScaleDepth: 0.94,
  maxBlurPx: 8,
  staggerDelay: 0.08,
};

export const BREAKPOINTS = {
  mobile: 768,
  tablet: 1024,
  desktop: 1440,
};

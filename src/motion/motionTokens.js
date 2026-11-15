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
  // Spring Bounce (Overshoot & Settle)
  springBounce: [0.34, 1.56, 0.64, 1],
  // Soft Elastic Pop
  springSoft: [0.175, 0.885, 0.32, 1.275],
  // Standard GSAP string equivalents
  gsapApple: "cubic-bezier(0.22, 1, 0.36, 1)",
  gsapPower3: "power3.out",
  gsapExpo: "expo.out",
  gsapElastic: "elastic.out(1, 0.45)",
  gsapElasticSubtle: "elastic.out(1, 0.6)"
};

/**
 * Centralized Spring Physics System
 * Tactile, physics-based parameters for Framer-style elastic interactions and Apple-grade haptics.
 */
export const SPRING_PRESETS = {
  gentle: { type: "spring", stiffness: 140, damping: 18, mass: 1 },
  softBounce: { type: "spring", stiffness: 220, damping: 16, mass: 0.9 },
  mediumElastic: { type: "spring", stiffness: 320, damping: 20, mass: 0.8 },
  responsiveSpring: { type: "spring", stiffness: 420, damping: 26, mass: 0.8 },
  heavySpring: { type: "spring", stiffness: 110, damping: 20, mass: 1.2 },
  overshootSettle: { type: "spring", stiffness: 360, damping: 18, mass: 0.9 }
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

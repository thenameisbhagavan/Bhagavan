import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useScrollContext } from './ScrollProvider';

gsap.registerPlugin(ScrollTrigger);

/**
 * Access live normalized scroll progress [0..1] and velocity from ScrollProvider.
 */
export function useScrollProgress() {
  const { scrollProgress } = useScrollContext();
  return typeof scrollProgress === 'number' && !isNaN(scrollProgress) ? scrollProgress : 0;
}

/**
 * Access live scroll velocity vector.
 */
export function useVelocity() {
  const { scrollVelocity } = useScrollContext();
  return typeof scrollVelocity === 'number' && !isNaN(scrollVelocity) ? scrollVelocity : 0;
}

/**
 * GSAP ScrollTrigger element reveal hook with robust visibility fallbacks.
 */
export function useReveal({
  y = 24,
  opacity = 0,
  scale = 0.98,
  duration = 0.8,
  stagger = 0,
  start = 'top 95%',
  once = true,
  ease = 'power3.out'
} = {}) {
  const ref = useRef(null);
  const { reducedMotion } = useScrollContext();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (reducedMotion) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }

    // Immediate visibility check for elements in/near viewport on load
    const rect = el.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight * 0.95;

    if (isInViewport) {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease,
      });
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: isInViewport ? 1 : 0, y: isInViewport ? 0 : y, scale: isInViewport ? 1 : scale },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          stagger,
          ease,
          scrollTrigger: {
            trigger: el,
            start,
            once: true,
            onEnter: () => {
              gsap.to(el, { opacity: 1, y: 0, scale: 1 });
            }
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [y, opacity, scale, duration, stagger, start, once, ease, reducedMotion]);

  return ref;
}

/**
 * Spatial Parallax hook with depth multiplier.
 */
export function useParallax(speed = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        y: () => -(window.innerHeight * speed),
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [speed]);

  return ref;
}

/**
 * Sticky Pin Section hook for multi-step storytelling.
 */
export function usePinSection({ pinSpacing = true, end = '+=100%' } = {}) {
  const containerRef = useRef(null);
  const pinRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const pinEl = pinRef.current || container;
    if (!container) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: container,
        pin: pinEl,
        start: 'top top',
        end,
        pinSpacing,
        scrub: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, [pinSpacing, end]);

  return { containerRef, pinRef };
}

/**
 * Physical Scale Reveal hook (1.05 -> 1.00 scroll scale depth).
 */
export function useScaleReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '1';
    el.style.transform = 'scale(1)';

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { scale: 1.04, opacity: 0.9 },
        {
          scale: 1,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'center center',
            scrub: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}

/**
 * Text reveal clipping mask / split line hook.
 */
export function useTextReveal({ duration = 1.0, delay = 0 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.style.opacity = '1';
    el.style.transform = 'translateY(0%)';

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: '100%', opacity: 0 },
        {
          y: '0%',
          opacity: 1,
          duration,
          delay,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          scrollTrigger: {
            trigger: el,
            start: 'top 98%',
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, [duration, delay]);

  return ref;
}

/**
 * Physical Magnetic Interaction hook for interactive buttons and links.
 */
export function useMagneticInteraction(strength = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || 'ontouchstart' in window) return;

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(el, {
        x: deltaX,
        y: deltaY,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: 'elastic.out(1, 0.4)',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [strength]);

  return ref;
}

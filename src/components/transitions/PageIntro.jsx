import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { useTransitionRegistry, appleEase } from './RouteTransition';
import heroImg from '../../assets/profile-hero.jpg';
import '../../styles/RouteTransitions.css';

/**
 * PageIntro — 2026 Cinematic Route Transition
 * 
 * A unified, image-driven intro overlay. Uses the master portrait
 * and brand signature to create a premium loading experience
 * that plays on first visit to each route.
 */

// Page-specific metadata for the transition overlay
const PAGE_META = {
  '/experience':  { label: 'Experience',          sub: 'Engineering Evolution' },
  '/innovation':  { label: 'Innovation',          sub: 'Lab & Experimentation' },
  '/credentials': { label: 'Credentials',         sub: 'Engineering Record' },
  '/ecosystem':   { label: 'Ecosystem',           sub: 'Technology Architecture' },
  '/vision':      { label: 'Vision',              sub: 'Point of View' },
  '/journal':     { label: 'Engineering Journal', sub: 'Systems & Architecture' },
  '/connect':     { label: 'Connect',             sub: 'Open Channel' },
  '/resume':      { label: 'Resume',              sub: 'Professional Record' },
  '/work':        { label: 'Products',            sub: 'Digital Experiences' },
};

export default function PageIntro({ config, onComplete }) {
  const { isFirstVisit } = useTransitionRegistry();
  const [phase, setPhase] = useState(0);
  const [visible, setVisible] = useState(true);

  const totalDuration = 1100;

  useEffect(() => {
    if (!isFirstVisit) {
      setVisible(false);
      onComplete?.();
      return;
    }

    const timeouts = [
      setTimeout(() => setPhase(1), 80),    // Portrait appears
      setTimeout(() => setPhase(2), 250),   // Brand name fades in
      setTimeout(() => setPhase(3), 450),   // Page label fades in
      setTimeout(() => setPhase(4), totalDuration - 350), // Begin dissolve
      setTimeout(() => {
        setVisible(false);
        onComplete?.();
      }, totalDuration),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [isFirstVisit, totalDuration, onComplete]);

  if (!isFirstVisit || !visible) return null;

  // Get page-specific metadata from pathname
  const pathname = window.location.pathname;
  const meta = PAGE_META[pathname] || { label: '', sub: '' };

  return (
    <AnimatePresence>
      {visible && (
        <m.div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: '#000000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            pointerEvents: 'none'
          }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: appleEase }}
          aria-hidden="true"
        >
          {/* Full-screen Portrait Background */}
          <m.img
            src={heroImg}
            alt=""
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center 30%',
              opacity: 0.3,
              willChange: 'transform, filter'
            }}
            initial={{ scale: 1.08, filter: 'blur(16px)' }}
            animate={{
              scale: phase >= 1 ? 1 : 1.08,
              filter: phase >= 1 ? 'blur(0px)' : 'blur(16px)'
            }}
            transition={{ duration: 0.9, ease: appleEase }}
          />

          {/* Gradient overlay for text readability */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.7) 100%)',
            zIndex: 1
          }} />

          {/* Content Layer */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            textAlign: 'center',
            padding: '0 24px'
          }}>
            {/* Brand Signature */}
            <m.h1
              className="brand-cursive"
              style={{
                fontSize: 'clamp(36px, 7vw, 72px)',
                color: '#ffffff',
                textShadow: '0 2px 24px rgba(0,0,0,0.5)',
                margin: 0,
                lineHeight: 1.1
              }}
              initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
              animate={{
                opacity: phase >= 2 ? 1 : 0,
                y: phase >= 2 ? 0 : 16,
                filter: phase >= 2 ? 'blur(0px)' : 'blur(8px)'
              }}
              transition={{ duration: 0.6, ease: appleEase }}
            >
              TheNameIsBhagavan
            </m.h1>

            {/* Thin divider */}
            <m.div
              style={{
                width: '48px',
                height: '1px',
                background: 'rgba(255,255,255,0.5)',
                margin: '4px 0'
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: phase >= 3 ? 1 : 0,
                opacity: phase >= 3 ? 1 : 0
              }}
              transition={{ duration: 0.5, ease: appleEase }}
            />

            {/* Page Label */}
            <m.div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                alignItems: 'center'
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: phase >= 3 ? 1 : 0,
                y: phase >= 3 ? 0 : 8
              }}
              transition={{ duration: 0.5, ease: appleEase }}
            >
              <span style={{
                fontFamily: 'var(--font-system, "SF Pro Text", -apple-system, sans-serif)',
                fontSize: 'clamp(14px, 2.5vw, 20px)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: '#ffffff',
                textTransform: 'uppercase'
              }}>
                {meta.label}
              </span>
              <span style={{
                fontFamily: 'var(--font-system, "SF Pro Text", -apple-system, sans-serif)',
                fontSize: 'clamp(10px, 1.5vw, 13px)',
                fontWeight: 500,
                letterSpacing: '0.15em',
                color: 'rgba(255,255,255,0.6)',
                textTransform: 'uppercase'
              }}>
                {meta.sub}
              </span>
            </m.div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

// ═══════════════════════════════════════════════════════════════
//  ROUTE TRANSITION CONFIGS
//  Kept for backwards compatibility with App.jsx lookup.
//  The actual visual is now unified — only totalDuration matters.
// ═══════════════════════════════════════════════════════════════

export const TRANSITION_CONFIGS = {
  '/experience':  { totalDuration: 1100 },
  '/innovation':  { totalDuration: 1100 },
  '/credentials': { totalDuration: 1100 },
  '/ecosystem':   { totalDuration: 1100 },
  '/vision':      { totalDuration: 1100 },
  '/journal':     { totalDuration: 1100 },
  '/connect':     { totalDuration: 1100 },
  '/resume':      { totalDuration: 1100 },
  '/work':        { totalDuration: 1100 },
};

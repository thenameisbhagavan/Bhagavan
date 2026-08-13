import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import "../styles/GlobalLoader.css";
import heroImg from "../assets/profile-hero.jpg";

// Easing derived from Apple Human Interface Design principles
const E = {
  standard: [0.16, 1, 0.3, 1],
  dissolve: [0.22, 1, 0.36, 1]
};

export default function GlobalLoader({ onComplete, prefersReducedMotion = false }) {
  const [isDissolving, setIsDissolving] = useState(false);
  const [phase, setPhase] = useState(0);
  const brandName = "TheNameIsBhagavan";

  useEffect(() => {
    if (prefersReducedMotion) {
      const t = setTimeout(() => {
        setIsDissolving(true);
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("welcomeComplete"));
          onComplete();
        }, 300);
      }, 50);
      return () => clearTimeout(t);
    }

    const startTime = Date.now();
    const MIN_DURATION = 2000; // Give the cinematic sequence time to breathe

    // Phase timeline
    const p1 = setTimeout(() => setPhase(1), 100);   // Image reveals from blur
    const p2 = setTimeout(() => setPhase(2), 600);   // Brand signature fades in
    const p3 = setTimeout(() => setPhase(3), 1000);   // Subtitle appears

    const checkReadiness = setInterval(() => {
      const isReady = document.readyState === "complete";
      const elapsed = Date.now() - startTime;

      if (isReady && elapsed >= MIN_DURATION) {
        clearInterval(checkReadiness);
        setIsDissolving(true);
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("welcomeComplete"));
          onComplete();
        }, 800);
      }
    }, 50);

    const fallback = setTimeout(() => {
      clearInterval(checkReadiness);
      if (!isDissolving) {
        setIsDissolving(true);
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("welcomeComplete"));
          onComplete();
        }, 800);
      }
    }, 4000);

    return () => {
      clearInterval(checkReadiness);
      clearTimeout(fallback);
      clearTimeout(p1);
      clearTimeout(p2);
      clearTimeout(p3);
    };
  }, [onComplete, prefersReducedMotion, isDissolving]);

  return (
    <m.div
      className={`wl-overlay${isDissolving ? " wl-dissolving" : ""}`}
      initial={{ opacity: 1 }}
      animate={{ opacity: isDissolving ? 0 : 1 }}
      transition={{ duration: 0.8, ease: E.dissolve }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        backgroundColor: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: isDissolving ? 'none' : 'all',
        overflow: 'hidden'
      }}
      role="status"
      aria-live="polite"
    >
      <div className="wl-sr-only">{`Welcome to ${brandName}`}</div>

      {/* ── FULL-SCREEN HERO PORTRAIT ── */}
      <m.img
        src={heroImg}
        alt=""
        fetchPriority="high"
        initial={{ scale: 1.15, filter: 'blur(30px)', opacity: 0 }}
        animate={{
          scale: phase >= 1 ? 1 : 1.15,
          filter: phase >= 1 ? 'blur(0px)' : 'blur(30px)',
          opacity: phase >= 1 ? 0.7 : 0
        }}
        transition={{ duration: 1.4, ease: E.standard }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 25%',
          willChange: 'transform, filter, opacity'
        }}
      />

      {/* ── CINEMATIC GRADIENT OVERLAYS ── */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.75) 100%)',
        zIndex: 1
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at center 40%, transparent 0%, rgba(0,0,0,0.4) 100%)',
        zIndex: 1
      }} />

      {/* ── BRAND CONTENT ── */}
      <div style={{
        position: 'absolute',
        bottom: 'clamp(60px, 12vh, 140px)',
        left: 0,
        right: 0,
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        padding: '0 24px'
      }}>
        {/* Cursive Brand Signature */}
        <m.h1
          className="brand-cursive"
          initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
          animate={{
            opacity: phase >= 2 ? 1 : 0,
            y: phase >= 2 ? 0 : 20,
            filter: phase >= 2 ? 'blur(0px)' : 'blur(8px)'
          }}
          transition={{ duration: 0.8, ease: E.standard }}
          style={{
            fontSize: 'clamp(40px, 8vw, 88px)',
            color: '#ffffff',
            textShadow: '0 2px 40px rgba(0,0,0,0.7)',
            margin: 0,
            lineHeight: 1.1
          }}
        >
          {brandName}
        </m.h1>

        {/* Subtitle */}
        <m.p
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: phase >= 3 ? 1 : 0,
            y: phase >= 3 ? 0 : 10
          }}
          transition={{ duration: 0.6, ease: E.standard }}
          style={{
            fontFamily: 'var(--font-system, "SF Pro Text", -apple-system, sans-serif)',
            fontSize: 'clamp(11px, 1.8vw, 14px)',
            fontWeight: 600,
            letterSpacing: '0.2em',
            color: 'rgba(255,255,255,0.6)',
            textTransform: 'uppercase',
            margin: 0
          }}
        >
          AI · PRODUCT · ENGINEERING
        </m.p>
      </div>
    </m.div>
  );
}


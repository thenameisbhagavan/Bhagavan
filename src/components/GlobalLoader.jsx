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
        backgroundColor: '#fbfbfd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: isDissolving ? 'none' : 'all',
        overflow: 'hidden'
      }}
      role="status"
      aria-live="polite"
    >
      <div className="wl-sr-only">{`Welcome to ${brandName}`}</div>

      {/* ── LOGO INSTEAD OF PORTRAIT ── */}
      <m.img
        src="/tb-logo.svg"
        alt="TB Logo"
        initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
        animate={{ 
          opacity: phase >= 1 ? 1 : 0, 
          scale: phase >= 1 ? 1 : 0.9,
          filter: phase >= 1 ? 'blur(0px)' : 'blur(10px)'
        }}
        transition={{ duration: 1.2, ease: E.standard }}
        style={{ width: '80px', height: '80px', marginBottom: '32px' }}
      />

      {/* ── BRAND NAME ── */}
      <m.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: phase >= 2 ? 1 : 0,
          y: phase >= 2 ? 0 : 10,
        }}
        transition={{ duration: 0.8, ease: E.standard }}
        style={{
          fontFamily: 'var(--font-system, "SF Pro Text", -apple-system, sans-serif)',
          fontSize: '24px',
          fontWeight: 600,
          color: '#1d1d1f',
          margin: 0,
          letterSpacing: '-0.02em'
        }}
      >
        {brandName}
      </m.h1>

      {/* ── SUBTITLE ── */}
      <m.p
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 3 ? 1 : 0 }}
        transition={{ duration: 0.6, ease: E.standard }}
        style={{
          fontFamily: 'var(--font-system, "SF Pro Text", -apple-system, sans-serif)',
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '0.15em',
          color: '#86868b',
          textTransform: 'uppercase',
          marginTop: '8px',
          margin: '8px 0 0 0'
        }}
      >
        AI · PRODUCT · ENGINEERING
      </m.p>
    </m.div>
  );
}


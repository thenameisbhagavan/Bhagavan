import React, { useState, useEffect } from "react";
import { m } from "framer-motion";
import "../styles/OverviewLoader.css";
import logoImg from "../assets/logo.png";

// Apple-precise easing
const appleEase = [0.22, 1, 0.36, 1];

export default function OverviewLoader({ onComplete, prefersReducedMotion = false }) {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // REDUCED MOTION: Instant skip
    if (prefersReducedMotion) {
      const t = setTimeout(() => {
        window.dispatchEvent(new CustomEvent("welcomeComplete"));
        onComplete();
      }, 50);
      return () => clearTimeout(t);
    }

    // CONCEPT: "IDENTITY → SYSTEM → PRODUCT"
    // TIMING SEQUENCE:
    // 0.0s — blank warm-white canvas (phase 0)
    // 0.2s — small TNB mark appears (phase 1)
    // 0.5s — thin horizontal rule expands (phase 2)
    // 0.7s — tiny metadata fades in (phase 3)
    // 0.9s — mark + metadata subtly move toward their final navbar positions (phase 4)
    // 1.1s — window.dispatchEvent("welcomeComplete") -> hero typography reveals
    // 1.6s — loader disappears completely (phase 5)

    const timeouts = [
      setTimeout(() => setPhase(1), 200),
      setTimeout(() => setPhase(2), 500),
      setTimeout(() => setPhase(3), 700),
      setTimeout(() => setPhase(4), 900),
      setTimeout(() => {
        // Trigger the Overview hero animation while we fade out
        window.dispatchEvent(new CustomEvent("welcomeComplete"));
      }, 1100),
      setTimeout(() => {
        setPhase(5);
        onComplete();
      }, 1600)
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [prefersReducedMotion, onComplete]);

  if (prefersReducedMotion || phase === 5) return null;

  return (
    <m.div
      className="ol-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase >= 4 ? 0 : 1 }}
      transition={{ duration: 0.7, ease: appleEase, delay: 0.2 }}
      aria-hidden="true"
    >
      <div className={`ol-content ${phase >= 4 ? 'ol-move-up' : ''}`}>
        
        {/* PHASE 02 — IDENTITY MARK */}
        <m.div
          className="ol-mark-wrapper"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ 
            opacity: phase >= 1 ? 1 : 0, 
            scale: phase >= 1 ? 1 : 0.96 
          }}
          transition={{ duration: 0.8, ease: appleEase }}
        >
          <img src={logoImg} alt="TNB Mark" className="ol-mark"  loading="lazy" />
        </m.div>

        {/* PHASE 03 — ENGINEERING SIGNAL */}
        <div className="ol-signal">
          <m.div 
            className="ol-rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: phase >= 2 ? 1 : 0 }}
            transition={{ duration: 0.8, ease: appleEase }}
          />
          
          <m.div 
            className="ol-metadata"
            initial={{ opacity: 0, y: 4 }}
            animate={{ 
              opacity: phase >= 3 ? 1 : 0,
              y: phase >= 3 ? 0 : 4 
            }}
            transition={{ duration: 0.8, ease: appleEase }}
          >
            <span>THE NAME IS BHAGAVAN</span>
            <span>ENGINEERING / 2026</span>
          </m.div>
        </div>

      </div>
    </m.div>
  );
}

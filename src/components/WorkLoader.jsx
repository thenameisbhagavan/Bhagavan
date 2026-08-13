import React, { useState, useEffect } from "react";
import { m } from "framer-motion";
import "../styles/WorkLoader.css";

// Apple-precise easing
const appleEase = [0.22, 1, 0.36, 1];

const SYSTEMS = [
  { id: "01", name: "CAREEROS", desc: "CAREER INTELLIGENCE" },
  { id: "02", name: "AURAOS", desc: "PERSISTENT AI MEMORY" },
  { id: "03", name: "VERITAS", desc: "REASONING + EVIDENCE" },
  { id: "04", name: "VOLTDRIVE", desc: "DIGITAL PRODUCT EXPERIENCE" }
];

export default function WorkLoader({ onComplete, prefersReducedMotion = false }) {
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

    // CONCEPT: "THE SYSTEM INDEX"
    const timeouts = [
      setTimeout(() => setPhase(1), 150),  // Phase 1: Metadata + rule appear
      setTimeout(() => setPhase(2), 300),  // Phase 2: Systems enter staggered
      setTimeout(() => setPhase(3), 850),  // Phase 3: Index compresses, rule fades
      setTimeout(() => {
        // Trigger the Work hero animation
        window.dispatchEvent(new CustomEvent("welcomeComplete"));
      }, 1050),
      setTimeout(() => {
        setPhase(4); // Loader dissolves
        onComplete();
      }, 1450)
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [prefersReducedMotion, onComplete]);

  if (prefersReducedMotion || phase === 4) return null;

  return (
    <m.div
      className="wl-container"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase >= 3 ? 0 : 1 }}
      transition={{ duration: 0.7, ease: appleEase, delay: 0.2 }} // starts fading out at Phase 3 (850ms), finishes around 1550ms
      aria-hidden="true"
    >
      <div className={`wl-content ${phase >= 3 ? 'wl-compress' : ''}`}>
        
        {/* METADATA */}
        <m.div
          className="wl-metadata"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase >= 1 ? 1 : 0 }}
          transition={{ duration: 0.6, ease: appleEase }}
        >
          <span>WORK / SYSTEM INDEX</span>
          <span>2026</span>
        </m.div>

        {/* RULE */}
        <m.div 
          className="wl-rule"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: phase >= 1 && phase < 3 ? 1 : 0, opacity: phase >= 3 ? 0 : 1 }}
          transition={{ duration: 0.8, ease: appleEase }}
        />

        {/* SYSTEMS INDEX */}
        <div className="wl-systems">
          {SYSTEMS.map((sys, idx) => {
            const isVisible = phase >= 2;
            return (
              <m.div
                key={sys.id}
                className="wl-system-row"
                initial={{ opacity: 0, y: 8 }}
                animate={{ 
                  opacity: isVisible ? 1 : 0, 
                  y: isVisible ? 0 : 8 
                }}
                transition={{ 
                  duration: 0.5, 
                  ease: appleEase, 
                  delay: isVisible ? idx * 0.08 : 0 
                }}
              >
                <span className="wl-sys-id">{sys.id}</span>
                <div className="wl-sys-details">
                  <span className="wl-sys-name">{sys.name}</span>
                  <span className="wl-sys-desc">{sys.desc}</span>
                </div>
              </m.div>
            );
          })}
        </div>

      </div>
    </m.div>
  );
}

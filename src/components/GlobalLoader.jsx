import React, { useState, useEffect, useRef, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import heroImg from "../assets/profile-hero.jpg";
import welcomeConfig from "../config/welcomeConfig";
import "../styles/GlobalLoader.css";

// ─────────────────────────────────────────────────────────────────────────────
// MOTION VARIANTS
//
// Audit findings addressed:
// Issue 2  — Portrait: scale 1.06→1 (soft settle), not 1.04 (too subtle)
// Issue 3  — Blueprint: crosshairX grows from left, crosshairY from top
// Issue 4  — Words: blur(10px)→clear with editorial tracking expansion
// Issue 6  — Brand morph: deeper blur start, compressed tracking start
// Issue 7  — Brand hold: 850ms via timeline, not animation duration
// Issue 9  — Rule: penStroke ease (ease-out), left→right, graceful dissolve
// Issue 10 — Dissolve: minimal blur(2px), not 3px — subtle, not dreamy
// Issue 13 — All curves reviewed: standard, dissolve, editorial, penStroke
// Issue 14 — y values: content lift reduced to -8px (was -14px, too dramatic)
// ─────────────────────────────────────────────────────────────────────────────

const E = welcomeConfig.easing;

const variants = {

  // Stage 2: Portrait soft settle
  portrait: {
    hidden:  { opacity: 0, scale: 1.06 },
    visible: {
      opacity: 1,
      scale:   1,
      transition: { duration: 0.5, ease: E.standard },
    },
  },

  // Stage 3: Blueprint grid draws in
  blueprint: {
    hidden:  { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.28, ease: E.standard },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3, ease: E.dissolve },
    },
  },

  // Crosshair X: grows LEFT → RIGHT (transform-origin: left center in CSS)
  crosshairX: {
    hidden:  { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.55, ease: E.standard } },
  },
  // Crosshair Y: grows TOP → BOTTOM (transform-origin: top center in CSS)
  crosshairY: {
    hidden:  { scaleY: 0 },
    visible: { scaleY: 1, transition: { duration: 0.55, ease: E.standard } },
  },

  // Stage 4: Each narrative word — breathes with perfect rhythm
  word: {
    hidden: {
      opacity:       0,
      y:             10,
      filter:        "blur(10px)",
      letterSpacing: "-0.04em",
    },
    visible: {
      opacity:       1,
      y:             0,
      filter:        "blur(0px)",
      letterSpacing: "-0.03em",
      transition: { duration: 0.14, ease: E.editorial },
    },
    exit: {
      opacity:       0,
      y:             -8,
      filter:        "blur(8px)",
      letterSpacing: "-0.022em",
      transition: { duration: 0.10, ease: E.editorial },
    },
  },

  // Stage 5: Brand title culmination
  // Starts very compressed — blooms into the name with weight and calm
  brand: {
    hidden: {
      opacity:       0,
      y:             14,
      scale:         0.95,
      filter:        "blur(14px)",
      letterSpacing: "-0.055em",
    },
    visible: {
      opacity:       1,
      y:             0,
      scale:         1,
      filter:        "blur(0px)",
      letterSpacing: "-0.032em",
      transition: { duration: 0.45, ease: E.standard },
    },
  },

  // Stage 6: Tagline — understated, elegant
  tagline: {
    hidden: {
      opacity:       0,
      y:             6,
      letterSpacing: "0.08em",
    },
    visible: {
      opacity:       1,
      y:             0,
      letterSpacing: "0.14em",
      transition: { duration: 0.38, ease: E.standard },
    },
  },

  // Stage 7: 1px horizontal rule — pen stroke signature
  // penStroke easing [0.25, 0, 0, 1] = ease-out: starts fast like a pen,
  // decelerates to a precise stop. Then fades via opacity after pause.
  rule: {
    hidden:  { scaleX: 0, opacity: 1 },
    visible: {
      scaleX:  1,
      opacity: 0,
      transition: {
        scaleX: {
          duration: welcomeConfig.timing.ruleDrawMs / 1000,
          ease:     E.penStroke,
        },
        opacity: {
          duration: welcomeConfig.timing.ruleFadeMs / 1000,
          delay:    (welcomeConfig.timing.ruleDrawMs + welcomeConfig.timing.rulePauseMs) / 1000,
          ease:     E.dissolve,
        },
      },
    },
  },

};

// ─────────────────────────────────────────────────────────────────────────────
// buildTimeline
// Computes absolute ms timestamps from the config.
// Single source of truth — no magic numbers in useEffect.
// ─────────────────────────────────────────────────────────────────────────────
function buildTimeline(T, wordCount) {
  const stepMs    = T.wordFadeInMs + T.wordHoldMs + T.wordFadeOutMs;
  const wordTotal = stepMs * wordCount;

  const t2 = T.silenceMs;
  const t3 = t2 + T.portraitFadeMs;
  const t4 = t3 + T.blueprintFadeMs;
  const t5 = t4 + wordTotal;
  const t6 = t5 + T.brandMorphMs + T.brandHoldMs;
  const t7 = t6 + T.taglineFadeMs + T.taglineHoldMs;
  const t8 = t7 + T.ruleDrawMs + T.rulePauseMs + T.ruleFadeMs;
  const tDone = t8 + T.dissolveMs;

  return { t2, t3, t4, t5, t6, t7, t8, tDone, stepMs };
}

// ─────────────────────────────────────────────────────────────────────────────
// GlobalLoader
//
// PRECISION TIMELINE (@ default config):
//
//   t = 0.00s  Stage 1: White silence (80ms)
//   t = 0.08s  Stage 2: Portrait settles in — B&W, centered (500ms)
//   t = 0.58s  Stage 3: Blueprint coordinate grid draws in (280ms)
//   t = 0.86s  Stage 4: Ideas→Architecture→Intelligence→Systems (4×320ms=1280ms)
//   t = 2.14s  Stage 5: Morph → TheNameIsBhagavan (450ms morph + 850ms hold)
//   t = 3.44s  Stage 6: Tagline fades in (380ms + 220ms hold)
//   t = 4.04s  Stage 7: 1px rule — pen stroke left→right, pause, dissolve (520ms)
//   t = 4.56s  Stage 8: Portrait restores color. Overlay fades. (450ms)
//   t = 5.01s  Complete. Portfolio interactive.
//
// Issues addressed:
//   1  Timing      — 4.4s total (was 7.9s)
//   2  Portrait    — soft scale settle 1.06→1
//   3  Blueprint   — 7% opacity, draws in 280ms, crosshairs left/top origin
//   4  Story       — word rhythm: 140ms in + 80ms hold + 100ms out
//   5  Balance     — portrait 96–160px, words 36–56px (text primary)
//   6  Brand morph — 14px blur, -0.055em→-0.032em tracking bloom
//   7  Brand hold  — 850ms hold via timeline
//   8  Tagline     — 0.14em final tracking, calm 380ms fade
//   9  Rule        — penStroke easing, left→right, pause, dissolve
//  10  Transition  — simultaneous color restore + opacity dissolve
//  11  Continuity  — CSS filter transition matches dissolveMs exactly
//  12  Hero entry  — dispatches 'welcomeComplete' DOM event for Hero.jsx
//  13  Curves      — penStroke [0.25,0,0,1] for rule, all others audited
//  14  Micro       — y:-8 (was -14), ring on portrait, 8pt grid spacing
// ─────────────────────────────────────────────────────────────────────────────
export default function GlobalLoader({ onComplete, prefersReducedMotion = false }) {
  const { timing: T, wordSequence, brandName, tagline, portraitAlt } = welcomeConfig;

  const [stage,        setStage]        = useState(1);
  const [wordIndex,    setWordIndex]    = useState(0);
  const [isDissolving, setIsDissolving] = useState(false);
  const [colorAmount,  setColorAmount]  = useState(0);   // 0=B&W, 1=full color
  const [imgLoaded,    setImgLoaded]    = useState(false);

  const timers = useRef(new Set());

  const after = useCallback((fn, ms) => {
    const id = setTimeout(() => {
      timers.current.delete(id);
      fn();
    }, ms);
    timers.current.add(id);
    return id;
  }, []);

  // Preload portrait before starting timeline (Issue 2 — no pop)
  useEffect(() => {
    const img = new Image();
    img.onload  = () => setImgLoaded(true);
    img.onerror = () => setImgLoaded(true); // proceed even on error
    img.src = heroImg;
    if (img.complete) setImgLoaded(true);
  }, []);

  useEffect(() => {
    if (!imgLoaded) return;

    // Reduced motion: static brand + tagline, then dissolve
    if (prefersReducedMotion) {
      setStage(5);
      after(() => setStage(6), 150);
      after(() => {
        setIsDissolving(true);
        after(() => {
          // Issue 12: notify Hero.jsx to stage its entrance
          window.dispatchEvent(new CustomEvent("welcomeComplete"));
          onComplete();
        }, 450);
      }, 700);
      return () => { timers.current.forEach(clearTimeout); timers.current.clear(); };
    }

    const tl = buildTimeline(T, wordSequence.length);

    // Stage 1 → 2: portrait
    after(() => setStage(2), tl.t2);

    // Stage 2 → 3: blueprint
    after(() => setStage(3), tl.t3);

    // Stage 3 → 4: word sequence
    after(() => {
      setStage(4);
      for (let i = 1; i < wordSequence.length; i++) {
        after(() => setWordIndex(i), i * tl.stepMs);
      }
    }, tl.t4);

    // Stage 4 → 5: brand morph
    after(() => setStage(5), tl.t5);

    // Stage 5 → 6: tagline (after morph + hold)
    after(() => setStage(6), tl.t6);

    // Stage 6 → 7: rule (after tagline + hold)
    after(() => setStage(7), tl.t7);

    // Stage 7 → 8: dissolve
    // Issue 10 + 11: both portrait color restore and overlay fade begin
    // simultaneously. The homepage portrait underneath becomes visible as
    // the welcome portrait transitions from B&W to color. One continuous image.
    after(() => {
      setColorAmount(1);
      setIsDissolving(true);
    }, tl.t8);

    // Complete — dispatch event for hero staging (Issue 12)
    after(() => {
      window.dispatchEvent(new CustomEvent("welcomeComplete"));
      onComplete();
    }, tl.tDone);

    return () => { timers.current.forEach(clearTimeout); timers.current.clear(); };
  }, [imgLoaded, T, wordSequence, onComplete, prefersReducedMotion, after]);

  const activeWord    = wordSequence[Math.min(wordIndex, wordSequence.length - 1)];
  const dissolveSecs  = T.dissolveMs / 1000;

  // Portrait filter: interpolates B&W → color during Stage 8 dissolve
  const portraitFilter = [
    `grayscale(${(1 - colorAmount).toFixed(3)})`,
    `contrast(${(1.18 - colorAmount * 0.18).toFixed(3)})`,
    `brightness(${(1.04 - colorAmount * 0.04).toFixed(3)})`,
  ].join(" ");

  return (
    <m.div
      className={`wl-overlay${isDissolving ? " wl-dissolving" : ""}`}
      initial={{ opacity: 1 }}
      animate={{
        opacity: isDissolving ? 0 : 1,
        filter:  isDissolving ? "blur(2px)" : "blur(0px)",
      }}
      transition={{ duration: dissolveSecs, ease: E.dissolve }}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label={`Welcome to ${brandName}. ${wordSequence.join(". ")}. ${tagline}`}
    >
      {/* Screen reader narrative — full announcement on mount */}
      <div className="wl-sr-only">
        {`Welcome to ${brandName}. ${wordSequence.join(", ")}. ${tagline}`}
      </div>

      {/* ─── STAGE 3: Blueprint Coordinate Grid (position absolute, z:0) ─── */}
      <AnimatePresence>
        {stage >= 3 && (
          <m.div
            key="blueprint"
            className="wl-blueprint"
            variants={variants.blueprint}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="wl-crosshair">
              {/* Grows left → right */}
              <m.div
                className="wl-crosshair-x"
                variants={variants.crosshairX}
                initial="hidden"
                animate="visible"
              />
              {/* Grows top → bottom */}
              <m.div
                className="wl-crosshair-y"
                variants={variants.crosshairY}
                initial="hidden"
                animate="visible"
              />
              {/* Coordinate tick marks at ±64px and ±128px */}
              {[-128, -64, 64, 128].map((offset) => (
                <React.Fragment key={offset}>
                  <div className="wl-tick wl-tick-h" style={{ left: `calc(50% + ${offset}px)` }} />
                  <div className="wl-tick wl-tick-v" style={{ top:  `calc(50% + ${offset}px)` }} />
                </React.Fragment>
              ))}
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ─── STAGE 2: Portrait — editorial B&W, top of column ─────────────── */}
      <AnimatePresence>
        {stage >= 2 && imgLoaded && (
          <m.div
            key="portrait"
            className="wl-portrait-wrap"
            variants={variants.portrait}
            initial="hidden"
            animate="visible"
          >
            <m.img
              src={heroImg}
              alt={portraitAlt}
              className="wl-portrait"
              style={{
                filter:     portraitFilter,
                // CSS transition drives color restoration — avoids React re-render per frame
                transition: `filter ${dissolveSecs}s cubic-bezier(0.22,1,0.36,1)`,
              }}
              // Micro-scale on dissolve — portrait expands slightly into homepage hero
              animate={{ scale: isDissolving ? 1.015 : 1 }}
              transition={{ duration: dissolveSecs, ease: E.dissolve }}
            />
          </m.div>
        )}
      </AnimatePresence>

      {/* ─── STAGES 4–7: Typography ─────────────────────────────────────────── */}
      {/* Issue 14: y:-8 (reduced from -14) — lift is subtle, not dramatic */}
      <m.div
        className="wl-content"
        animate={{
          y:     isDissolving ? -8 : 0,
          scale: isDissolving ? 1.008 : 1,
        }}
        transition={{ duration: dissolveSecs, ease: E.dissolve }}
      >
        {/* Word slot — fixed height prevents layout jump */}
        <div className="wl-word-slot">
          <AnimatePresence mode="wait">

            {/* Stage 4: One word at a time */}
            {stage === 4 && (
              <m.span
                key={activeWord}
                className="wl-word"
                variants={variants.word}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {activeWord}
              </m.span>
            )}

            {/* Stage 5+: Brand title — emotional peak */}
            {stage >= 5 && (
              <m.h1
                key="brand"
                className="wl-brand"
                variants={variants.brand}
                initial="hidden"
                animate="visible"
              >
                {brandName}
              </m.h1>
            )}

          </AnimatePresence>
        </div>

        {/* Tagline + Signature Rule */}
        <div className="wl-tagline-wrap">

          {/* Stage 6: Tagline */}
          <AnimatePresence>
            {stage >= 6 && (
              <m.p
                key="tagline"
                className="wl-tagline"
                variants={variants.tagline}
                initial="hidden"
                animate="visible"
              >
                {tagline}
              </m.p>
            )}
          </AnimatePresence>

          {/* Stage 7: Signature 1px rule — draws left→right like a pen stroke */}
          <AnimatePresence>
            {stage >= 7 && (
              <m.div
                key="rule"
                className="wl-rule"
                variants={variants.rule}
                initial="hidden"
                animate="visible"
              />
            )}
          </AnimatePresence>

        </div>
      </m.div>
    </m.div>
  );
}

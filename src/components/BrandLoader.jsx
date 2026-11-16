import React from "react";
import { m } from "framer-motion";
import logoImg from "../assets/logo.png";
import "../styles/BrandLoader.css";

const appleEase = [0.16, 1, 0.3, 1];

/**
 * BrandLoader — Apple-Inspired Bhagavan Loading Experience
 * 
 * Uses the authentic high-resolution Bhagavan red brand logo with:
 * - Phase 1: Spring entrance & bloom
 * - Phase 2: Gentle ambient red breathing & continuous orbital accent sweep
 * - Phase 3: High-precision indeterminate hairline progress feedback
 * - Phase 4: Seamless dissolve into the portfolio without flash or layout shifts
 * 
 * Modes:
 * - "initial": Complete branded launch experience for initial visit and browser refresh.
 * - "route": Lightweight, responsive Suspense fallback for async chunk downloads during navigation.
 */
export default function BrandLoader({
  mode = "initial",
  label = "TheNameIsBhagavan",
  isExiting = false,
  onExitComplete,
}) {
  const isRoute = mode === "route";

  return (
    <m.div
      className={`brand-loader-overlay mode-${mode} ${isExiting ? "is-exiting" : ""}`}
      initial={{ opacity: isRoute ? 0.9 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: isRoute ? 0.22 : 0.38, ease: appleEase }}
      onAnimationComplete={() => {
        if (isExiting && onExitComplete) onExitComplete();
      }}
      role="status"
      aria-live="polite"
      aria-label="Loading TheNameIsBhagavan"
    >
      {/* Screen Reader Announcement */}
      <span className="brand-loader-sr-only">Loading TheNameIsBhagavan portfolio...</span>

      {/* Central Stage Composition */}
      <m.div
        className="brand-loader-stage"
        initial={{ opacity: 0, scale: isRoute ? 0.96 : 0.88 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={
          isRoute
            ? { duration: 0.24, ease: appleEase }
            : { type: "spring", stiffness: 340, damping: 28 }
        }
      >
        {/* Ambient Radial Red Breathing Glow */}
        <div className="brand-loader-ambient-glow" aria-hidden="true" />

        {/* Orbital Accent Ring & Genuine Bhagavan Red Logo */}
        <div className="brand-loader-orbital-wrap">
          <svg
            className="brand-loader-orbital-svg"
            viewBox="0 0 100 100"
            fill="none"
            aria-hidden="true"
          >
            {/* Ultra-faint circular background guide track */}
            <circle
              className="brand-loader-orbital-track"
              cx="50"
              cy="50"
              r="44"
              strokeWidth="1.2"
            />
            {/* Signature rotating brand arc */}
            <circle
              className="brand-loader-orbital-arc"
              cx="50"
              cy="50"
              r="44"
              strokeWidth="2"
              strokeDasharray="68 208"
              strokeDashoffset="0"
            />
          </svg>

          {/* Bhagavan Red Logo Mark (Pristine, stable, undistorted) */}
          <div className="brand-loader-logo-wrap">
            <img
              src={logoImg}
              alt="Bhagavan"
              className="brand-loader-logo-img"
              width="62"
              height="62"
              loading="eager"
              decoding="sync"
            />
          </div>
        </div>

        {/* Loading Feedback: Hairline Indeterminate Bar & Editorial Label */}
        <div className="brand-loader-feedback">
          <div className="brand-loader-progress-track" aria-hidden="true">
            <div className="brand-loader-progress-bar" />
          </div>
          <p className="brand-loader-label">{label}</p>
        </div>
      </m.div>
    </m.div>
  );
}

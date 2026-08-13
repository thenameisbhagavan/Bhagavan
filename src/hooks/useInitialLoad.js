import { useState, useEffect, useCallback } from "react";
import welcomeConfig from "../config/welcomeConfig";

// Global singleton flag so the loader ONLY plays once per browser session.
// It will survive route changes within the SPA.
let hasPlayedGlobalLoader = false;

/**
 * useInitialLoad
 *
 * Triggers the welcome experience on:
 *   1. First page load / hard refresh (browser runtime resets)
 *   2. ?welcome=true URL override (for QA / review)
 *
 * It NO LONGER plays on internal route changes.
 */
export default function useInitialLoad() {
  const [shouldPlay, setShouldPlay] = useState(!hasPlayedGlobalLoader);
  const [isComplete, setIsComplete] = useState(hasPlayedGlobalLoader);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);

    const params = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    );
    const forcePlay =
      welcomeConfig.behavior.allowUrlForce &&
      (params.get("welcome") === "true" || params.get("loader") === "true");

    if (forcePlay) {
      hasPlayedGlobalLoader = false;
      setIsComplete(false);
      setShouldPlay(true);
    }
  }, []);

  const markComplete = useCallback(() => {
    hasPlayedGlobalLoader = true;
    setIsComplete(true);
  }, []);

  return {
    shouldPlay,
    isComplete,
    markComplete,
    prefersReducedMotion,
  };
}

import { useState, useEffect, useCallback } from "react";
import welcomeConfig from "../config/welcomeConfig";

/**
 * useInitialLoad
 *
 * Triggers the welcome experience on:
 *   1. First page load / hard refresh (browser runtime resets)
 *   2. Every navbar click / SPA route change (pathname changes)
 *   3. ?welcome=true URL override (for QA / review)
 *
 * @param {string} pathname - current route from useLocation().pathname
 */
export default function useInitialLoad(pathname) {
  const [shouldPlay, setShouldPlay]             = useState(false);
  const [isComplete, setIsComplete]             = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detect reduced motion preference
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);

    // URL force override (?welcome=true or ?loader=true)
    const params = new URLSearchParams(
      typeof window !== "undefined" ? window.location.search : ""
    );
    const forcePlay =
      welcomeConfig.behavior.allowUrlForce &&
      (params.get("welcome") === "true" || params.get("loader") === "true");

    if (forcePlay) {
      setIsComplete(false);
      setShouldPlay(true);
      return;
    }

    // Every page — reset and play on every pathname change
    setIsComplete(false);
    setShouldPlay(true);
  }, [pathname]); // ← re-runs on every route change

  const markComplete = useCallback(() => {
    setIsComplete(true);
  }, []);

  return {
    shouldPlay,
    isComplete,
    markComplete,
    prefersReducedMotion,
  };
}

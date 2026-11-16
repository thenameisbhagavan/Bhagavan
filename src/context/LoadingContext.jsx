import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from "react";

const LoadingContext = createContext({
  isInitialLoading: true,
  isRouteLoading: false,
  startRouteLoading: () => {},
  stopRouteLoading: () => {},
});

export const useLoading = () => useContext(LoadingContext);

/**
 * LoadingProvider — Apple-Grade Loading Architecture
 * 
 * - Detects true application readiness (DOM complete, critical fonts, chunks)
 * - Guarantees minimum display time (750ms) to prevent jarring flashes on cached loads
 * - Enforces safety timeout (2800ms) so users are NEVER trapped on slow networks
 * - Coordinates route transitions cleanly without duplicate overlays
 */
export function LoadingProvider({ children }) {
  const [isInitialLoading, setIsInitialLoading] = useState(true);
  const [isRouteLoading, setIsRouteLoading] = useState(false);
  const startTimeRef = useRef(Date.now());
  const routeTimeoutRef = useRef(null);

  useEffect(() => {
    const MIN_DURATION = 750; // Minimum presentation duration for refined motion
    const MAX_SAFETY_TIMEOUT = 2800; // Safeguard against blocked external resources
    let readinessInterval = null;
    let fallbackTimeout = null;

    const completeInitialLoad = () => {
      if (readinessInterval) clearInterval(readinessInterval);
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
      setIsInitialLoading(false);
    };

    // Poll document and font readiness
    readinessInterval = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const docReady = document.readyState === "complete";
      const fontsReady = typeof document.fonts?.ready !== "undefined"
        ? document.fonts.status === "loaded"
        : true;

      if ((docReady && fontsReady && elapsed >= MIN_DURATION) || elapsed >= MAX_SAFETY_TIMEOUT) {
        completeInitialLoad();
      }
    }, 40);

    // Fail-safe timeout
    fallbackTimeout = setTimeout(() => {
      completeInitialLoad();
    }, MAX_SAFETY_TIMEOUT);

    return () => {
      if (readinessInterval) clearInterval(readinessInterval);
      if (fallbackTimeout) clearTimeout(fallbackTimeout);
    };
  }, []);

  const startRouteLoading = useCallback(() => {
    setIsRouteLoading(true);
    // Safety auto-dismiss for route transitions (max 3000ms)
    if (routeTimeoutRef.current) clearTimeout(routeTimeoutRef.current);
    routeTimeoutRef.current = setTimeout(() => {
      setIsRouteLoading(false);
    }, 3000);
  }, []);

  const stopRouteLoading = useCallback(() => {
    if (routeTimeoutRef.current) clearTimeout(routeTimeoutRef.current);
    setIsRouteLoading(false);
  }, []);

  const value = {
    isInitialLoading,
    isRouteLoading,
    startRouteLoading,
    stopRouteLoading,
  };

  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
}

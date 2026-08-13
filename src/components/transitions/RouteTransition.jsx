import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TransitionContext = createContext();

export const useTransitionRegistry = () => useContext(TransitionContext);

// Shared ease for all 2026 editorial motion
export const appleEase = [0.22, 1, 0.36, 1];

export function RouteTransitionProvider({ children }) {
  const location = useLocation();
  const [visitedRoutes, setVisitedRoutes] = useState(new Set());
  const [currentIsFirstVisit, setCurrentIsFirstVisit] = useState(true);

  useEffect(() => {
    // Determine if this is the first time visiting this exact pathname
    const path = location.pathname;
    const isFirst = !visitedRoutes.has(path);
    setCurrentIsFirstVisit(isFirst);

    if (isFirst) {
      setVisitedRoutes((prev) => new Set(prev).add(path));
    }
  }, [location.pathname]);

  // Respect OS reduced motion preference globally
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const value = {
    isFirstVisit: prefersReducedMotion ? false : currentIsFirstVisit,
    appleEase
  };

  return (
    <TransitionContext.Provider value={value}>
      {children}
    </TransitionContext.Provider>
  );
}

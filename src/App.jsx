import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, LayoutGroup, MotionConfig } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import AppShell from "./AppShell";
import NotFound from "./components/NotFound";
import "./styles/motion.css";

// LAZY-LOADED CORE EXPERIENCES
const Overview = lazy(() => import("./pages/Overview"));
const Work = lazy(() => import("./pages/Work"));
const CareerOS = lazy(() => import("./pages/work/CareerOS"));
const VoltDrive = lazy(() => import("./pages/work/VoltDrive"));
const AuraOS = lazy(() => import("./pages/work/AuraOS"));
const Veritas = lazy(() => import("./pages/work/Veritas"));
const Experience = lazy(() => import("./pages/Experience"));
const Vision = lazy(() => import("./pages/Vision"));
const Connect = lazy(() => import("./pages/Connect"));
const InnovationJourney = lazy(() => import("./pages/InnovationJourney"));
const Credentials = lazy(() => import("./pages/Credentials"));
const TechnologyEcosystem = lazy(() => import("./pages/TechnologyEcosystem"));
const Resume = lazy(() => import("./pages/Resume"));
const EngineeringJournal = lazy(() => import("./pages/EngineeringJournal"));
const AboutJournal = lazy(() => import("./pages/AboutJournal"));
const Platforms = lazy(() => import("./pages/journal/Platforms"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));
const Signal = lazy(() => import("./pages/Signal"));

const AcademicArchive = lazy(() => import("./pages/AcademicArchive"));

// Cinematic Suspense fallback — dark canvas with brand signature while chunks download
function PageLoader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1
        className="brand-cursive"
        style={{
          fontSize: 'clamp(32px, 6vw, 56px)',
          color: 'rgba(255,255,255,0.7)',
          margin: 0,
          animation: 'pulse-brand 1.8s ease-in-out infinite'
        }}
      >
        TheNameIsBhagavan
      </h1>
    </div>
  );
}

// Apple 2026 Instant Scroll Restoration — prevents layout shifts and scroll persistence across page changes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Instant scroll reset
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Multi-stage verification to ensure scroll is top after Framer Motion exit & Suspense mount
    const rAF = requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
    const t1 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 40);
    const t2 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 150);
    const t3 = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 350);

    return () => {
      cancelAnimationFrame(rAF);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return null;
};

import ErrorBoundary from "./components/ErrorBoundary";
import { RouteTransitionProvider } from "./components/transitions/RouteTransition";
import PageIntro, { TRANSITION_CONFIGS } from "./components/transitions/PageIntro";

const LazyRoute = ({ children }) => (
  <Suspense fallback={<PageLoader />}>
    {children}
  </Suspense>
);

function App() {
  const location = useLocation();
  const introConfig = TRANSITION_CONFIGS[location.pathname];

  return (
    <ErrorBoundary>
      <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <RouteTransitionProvider>
          {/* Route-specific intro overlay (first visit only) */}
          {introConfig && <PageIntro config={introConfig} key={location.pathname + '-intro'} />}

          <AppShell>
            <ScrollToTop />
            <LayoutGroup>
              <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
              {/* Core Landing Experience */}
              <Route path="/" element={<LazyRoute><Overview /></LazyRoute>} />
              <Route path="/overview" element={<Navigate to="/" replace />} />
              <Route path="/home" element={<Navigate to="/" replace />} />

              {/* SEO-friendly Aliases */}
              <Route path="/projects" element={<Navigate to="/work" replace />} />
              <Route path="/skills" element={<Navigate to="/ecosystem" replace />} />
              <Route path="/contact" element={<Navigate to="/connect" replace />} />

              {/* Core Experiences */}
              <Route path="/work" element={<LazyRoute><Work /></LazyRoute>} />
              <Route path="/work/careeros" element={<LazyRoute><CareerOS /></LazyRoute>} />
              <Route path="/work/voltdrive" element={<LazyRoute><VoltDrive /></LazyRoute>} />
              <Route path="/work/auraos" element={<LazyRoute><AuraOS /></LazyRoute>} />
              <Route path="/work/veritas" element={<LazyRoute><Veritas /></LazyRoute>} />
              <Route path="/experience" element={<LazyRoute><Experience /></LazyRoute>} />
              <Route path="/vision" element={<LazyRoute><Vision /></LazyRoute>} />
              <Route path="/connect" element={<LazyRoute><Connect /></LazyRoute>} />
              <Route path="/innovation" element={<LazyRoute><InnovationJourney /></LazyRoute>} />
              <Route path="/credentials" element={<LazyRoute><Credentials /></LazyRoute>} />
              <Route path="/academic-archive" element={<LazyRoute><AcademicArchive /></LazyRoute>} />
              <Route path="/ecosystem" element={<LazyRoute><TechnologyEcosystem /></LazyRoute>} />
              <Route path="/resume" element={<LazyRoute><Resume /></LazyRoute>} />
              <Route path="/journal" element={<LazyRoute><EngineeringJournal /></LazyRoute>} />
              <Route path="/journal/about" element={<LazyRoute><AboutJournal /></LazyRoute>} />
              <Route path="/journal/platforms" element={<LazyRoute><Platforms /></LazyRoute>} />
              <Route path="/journal/:slug" element={<LazyRoute><ArticlePage /></LazyRoute>} />
              <Route path="/signal" element={<LazyRoute><Signal /></LazyRoute>} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </LayoutGroup>
      </AppShell>
      </RouteTransitionProvider>
      </MotionConfig>
    </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;

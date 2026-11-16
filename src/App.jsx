import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, LayoutGroup, MotionConfig } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import AppShell from "./AppShell";
import NotFound from "./components/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import { LoadingProvider, useLoading } from "./context/LoadingContext";
import BrandLoader from "./components/BrandLoader";
import { RouteTransitionProvider } from "./components/transitions/RouteTransition";
import "./styles/motion.css";

// LAZY-LOADED CORE EXPERIENCES
const Overview = lazy(() => import("./pages/Overview"));
const Work = lazy(() => import("./pages/Work"));
const CareerOS = lazy(() => import("./pages/work/CareerOS"));
const VoltDrive = lazy(() => import("./pages/work/VoltDrive"));
const AuraOS = lazy(() => import("./pages/work/AuraOS"));
const Veritas = lazy(() => import("./pages/work/Veritas"));
const DVLabsPlatform = lazy(() => import("./pages/work/DVLabsPlatform"));
const DataValleyAssessment = lazy(() => import("./pages/work/DataValleyAssessment"));
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

// Apple-Grade Instant Scroll Restoration — smooth in-page anchor handling and clean page resets
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    if (hash) {
      // If navigating with an in-page anchor (e.g. #ats-resume), scroll to that section
      const targetEl = document.querySelector(hash);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
        return;
      }
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return () => clearTimeout(timer);
    }

    // Standard route transition: immediate clean reset to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash]);

  return null;
};

// Lightweight, seamless Suspense fallback using the Bhagavan Signature Brand Loader
const LazyRoute = ({ children }) => (
  <Suspense fallback={<BrandLoader mode="route" label="TheNameIsBhagavan" />}>
    {children}
  </Suspense>
);

function AppRoutes() {
  const location = useLocation();
  const { isInitialLoading } = useLoading();

  return (
    <>
      {/* Apple-Grade Branded Signature Loader for Initial Load & Refresh */}
      <AnimatePresence mode="wait">
        {isInitialLoading && (
          <BrandLoader
            key="initial-brand-loader"
            mode="initial"
            label="TheNameIsBhagavan"
          />
        )}
      </AnimatePresence>

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
              <Route path="/about" element={<Navigate to="/experience" replace />} />
              <Route path="/projects" element={<Navigate to="/work" replace />} />
              <Route path="/skills" element={<Navigate to="/ecosystem" replace />} />
              <Route path="/contact" element={<Navigate to="/connect" replace />} />

              {/* Core Experiences */}
              <Route path="/work" element={<LazyRoute><Work /></LazyRoute>} />
              <Route path="/work/dv-labs-platform" element={<LazyRoute><DVLabsPlatform /></LazyRoute>} />
              <Route path="/work/dv-labs" element={<Navigate to="/work/dv-labs-platform" replace />} />
              <Route path="/work/data-valley-assessment-platform" element={<LazyRoute><DataValleyAssessment /></LazyRoute>} />
              <Route path="/work/dv-assessment-platform" element={<Navigate to="/work/data-valley-assessment-platform" replace />} />
              <Route path="/work/dv-assessments" element={<Navigate to="/work/data-valley-assessment-platform" replace />} />
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
    </>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <MotionConfig reducedMotion="user">
          <LoadingProvider>
            <RouteTransitionProvider>
              <AppRoutes />
            </RouteTransitionProvider>
          </LoadingProvider>
        </MotionConfig>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;

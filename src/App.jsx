import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, LayoutGroup, MotionConfig } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import AppShell from "./AppShell";
import NotFound from "./components/NotFound";
import GlobalLoader from "./components/GlobalLoader";
import useInitialLoad from "./hooks/useInitialLoad";

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
const ArticlePage = lazy(() => import("./pages/ArticlePage"));

// Signature Apple Human Interface Designer editorial blueprint loader for page Suspense fallback
function PageLoader() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 99999,
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        userSelect: "none",
        backgroundImage:
          "linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)",
        backgroundSize: "64px 64px",
        backgroundPosition: "center center",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <span
          style={{
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Inter", serif, sans-serif',
            fontSize: "clamp(36px, 5.5vw, 56px)",
            fontWeight: 600,
            letterSpacing: "-0.035em",
            color: "#000000",
            lineHeight: 1.1,
            margin: 0,
          }}
        >
          TheNameIsBhagavan
        </span>
        <span
          style={{
            marginTop: "20px",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Inter", sans-serif',
            fontSize: "clamp(13px, 1.6vw, 15px)",
            fontWeight: 500,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "#666666",
          }}
        >
          Engineering Intelligent Systems.
        </span>
        <div
          style={{
            marginTop: "22px",
            width: "160px",
            height: "1px",
            backgroundColor: "#000000",
          }}
        />
      </div>
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

const LazyRoute = ({ children }) => (
  <Suspense fallback={<PageLoader />}>
    {children}
  </Suspense>
);

function App() {
  const location = useLocation();
  const { shouldPlay, isComplete, markComplete, prefersReducedMotion } = useInitialLoad(location.pathname);

  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        {/* ── Welcome Experience — plays on every page load and every navbar click ── */}
        <AnimatePresence mode="wait">
          {shouldPlay && !isComplete && (
            <GlobalLoader
              key={location.pathname}
              onComplete={markComplete}
              prefersReducedMotion={prefersReducedMotion}
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
              <Route path="/ecosystem" element={<LazyRoute><TechnologyEcosystem /></LazyRoute>} />
              <Route path="/resume" element={<LazyRoute><Resume /></LazyRoute>} />
              <Route path="/journal" element={<LazyRoute><EngineeringJournal /></LazyRoute>} />
              <Route path="/journal/about" element={<LazyRoute><AboutJournal /></LazyRoute>} />
              <Route path="/journal/:slug" element={<LazyRoute><ArticlePage /></LazyRoute>} />

              {/* 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AnimatePresence>
        </LayoutGroup>
      </AppShell>
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;

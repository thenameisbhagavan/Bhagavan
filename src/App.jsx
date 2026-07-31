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
const Insights = lazy(() => import("./pages/Insights"));
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

// Scroll restoration
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);
  return null;
};

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
          <Suspense fallback={<PageLoader />}>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                {/* Redirects */}
                <Route path="/" element={<Navigate to="/overview" replace />} />
                <Route path="/home" element={<Navigate to="/overview" replace />} />

                {/* SEO-friendly Aliases */}
                <Route path="/projects" element={<Navigate to="/work" replace />} />
                <Route path="/skills" element={<Navigate to="/ecosystem" replace />} />
                <Route path="/contact" element={<Navigate to="/connect" replace />} />

                {/* Core Experiences */}
                <Route path="/overview" element={<Overview />} />
                <Route path="/work" element={<Work />} />
                <Route path="/work/careeros" element={<CareerOS />} />
                <Route path="/work/voltdrive" element={<VoltDrive />} />
                <Route path="/work/auraos" element={<AuraOS />} />
                <Route path="/work/veritas" element={<Veritas />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/innovation" element={<InnovationJourney />} />
                <Route path="/credentials" element={<Credentials />} />
                <Route path="/ecosystem" element={<TechnologyEcosystem />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<ArticlePage />} />

                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
        </LayoutGroup>
      </AppShell>
      </MotionConfig>
    </HelmetProvider>
  );
}

export default App;

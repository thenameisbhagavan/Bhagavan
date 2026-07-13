import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { AnimatePresence, LayoutGroup, MotionConfig } from "framer-motion";
import { HelmetProvider } from "react-helmet-async";
import AppShell from "./AppShell";
import NotFound from "./components/NotFound";

// LAZY-LOADED CORE EXPERIENCES
const Overview = lazy(() => import("./pages/Overview"));
const Work = lazy(() => import("./pages/Work"));
const Experience = lazy(() => import("./pages/Experience"));
const Vision = lazy(() => import("./pages/Vision"));
const Connect = lazy(() => import("./pages/Connect"));
const InnovationJourney = lazy(() => import("./pages/InnovationJourney"));
const Credentials = lazy(() => import("./pages/Credentials"));
const TechnologyEcosystem = lazy(() => import("./pages/TechnologyEcosystem"));
const Resume = lazy(() => import("./pages/Resume"));
const Insights = lazy(() => import("./pages/Insights"));
const ArticlePage = lazy(() => import("./pages/ArticlePage"));

// Minimal Apple-style loader
function PageLoader() {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fbfbfd' }}>
      <div style={{ width: '28px', height: '28px', border: '2px solid rgba(0,0,0,0.05)', borderTopColor: 'rgba(0,0,0,0.6)', borderRadius: '50%', animation: 'spin 0.6s linear infinite' }} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
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

  return (
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
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
                
                {/* 5 Core Experiences */}
                <Route path="/overview" element={<Overview />} />
                <Route path="/work" element={<Work />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/vision" element={<Vision />} />
                <Route path="/connect" element={<Connect />} />
                <Route path="/innovation" element={<InnovationJourney />} />
                <Route path="/credentials" element={<Credentials />} />
                <Route path="/ecosystem" element={<TechnologyEcosystem />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/insights" element={<Insights />} />
                <Route path="/insights/:slug" element={<ArticlePage />} />
                
                {/* 404 Route */}
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

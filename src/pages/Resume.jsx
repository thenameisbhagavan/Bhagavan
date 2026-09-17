import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, ArrowUpRight, Download, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
import SEO from "../components/SEO";
import BrandSignature from "../components/BrandSignature";
import Reveal from "../components/motion/Reveal";
import MaskReveal from "../components/motion/MaskReveal";
import ScaleReveal from "../components/motion/ScaleReveal";
import MagneticLink from "../components/motion/MagneticLink";
import "../styles/Resume.css";

// ─── Single Canonical Resume Asset ────────────────────────────────────────────
import resumeImage from "../assets/Bhagavan_Resume.jpg";

// ─── Live Full-Screen Document Viewer (Apple QuickLook Style) ─────────────────
function LiveResumeModal({ isOpen, onClose, imgSrc }) {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setZoomLevel(1);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };
  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };
  const handleResetZoom = (e) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  return (
    <div className="lrv-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Live Resume Viewer">
      {/* Minimalist Floating Control Bar */}
      <div className="lrv-header" onClick={(e) => e.stopPropagation()}>
        <div className="lrv-header-left">
          <button className="lrv-btn-icon lrv-close-btn" onClick={onClose} aria-label="Close Live Viewer">
            <X size={20} />
          </button>
        </div>

        <div className="lrv-header-center">
          <span className="lrv-filename">Bhagavan_Resume.jpg</span>
          <div className="lrv-divider"></div>
          <div className="lrv-zoom-controls">
            <button className="lrv-btn-icon-small" onClick={handleZoomOut} aria-label="Zoom Out" title="Zoom Out">
              <ZoomOut size={14} />
            </button>
            <span className="lrv-zoom-text" onClick={handleResetZoom} title="Reset Zoom">
              {Math.round(zoomLevel * 100)}%
            </span>
            <button className="lrv-btn-icon-small" onClick={handleZoomIn} aria-label="Zoom In" title="Zoom In">
              <ZoomIn size={14} />
            </button>
          </div>
        </div>

        <div className="lrv-header-right">
          <a href={imgSrc} target="_blank" rel="noopener noreferrer" className="lrv-btn-icon" title="Open in New Tab">
            <ArrowUpRight size={18} />
          </a>
          <a href={imgSrc} download="Bhagavan_Resume.jpg" className="lrv-btn-icon" title="Download Resume">
            <Download size={18} />
          </a>
        </div>
      </div>

      {/* Main Document Canvas Viewport */}
      <div className="lrv-viewport" onClick={onClose}>
        <div 
          className="lrv-document-wrapper"
          style={{ transform: `scale(${zoomLevel})` }}
          onClick={(e) => e.stopPropagation()}
        >
          <img src={imgSrc} alt="Bhagavan Professional Resume" className="lrv-document" loading="eager" />
        </div>
      </div>
    </div>
  );
}

// ─── Main Resume Page Component ───────────────────────────────────────────────
export default function Resume() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const openLiveViewer = useCallback(() => setIsViewerOpen(true), []);
  const closeLiveViewer = useCallback(() => setIsViewerOpen(false), []);

  return (
    <>
      <SEO 
        description="Official canonical resume of Bhagavan (TheNameIsBhagavan). AI Product Engineer & Technical AI/ML & Data Science Trainer at Data Valley. View one current professional record."
        keywords="Bhagavan Resume, TheNameIsBhagavan Resume, AI Product Engineer CV, Technical AI/ML Trainer, Data Valley, Software Engineer Resume, Canonical Resume"
      />

      <LiveResumeModal 
        isOpen={isViewerOpen} 
        onClose={closeLiveViewer} 
        imgSrc={resumeImage} 
      />

      <div className="res-canonical-page">

        {/* ============================================================
            ACT 01 — HERO (ONE ENGINEER. ONE RECORD.)
            ============================================================ */}
        <section className="res-hero-section" data-nav-theme="light">
          <div className="res-bounds">
            
            <Reveal y={16} duration={0.8}>
              <div className="res-hero-eyebrow">
                <span className="res-badge">PROFESSIONAL RECORD / 2026</span>
              </div>
            </Reveal>

            <MaskReveal duration={1.1} delay={0.1}>
              <h1 className="res-hero-headline">
                ONE ENGINEER.<br />
                ONE PROFESSIONAL RECORD.
              </h1>
            </MaskReveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="res-hero-sub">
                AI Product Engineering, AI/ML systems, software development, and technical training — documented in one current professional record.
              </p>
            </Reveal>

            {/* Restrained Metadata Tags */}
            <Reveal y={16} duration={0.8} delay={0.45}>
              <div className="res-hero-tags">
                <span>AI PRODUCT ENGINEERING</span>
                <span className="tag-dot">&middot;</span>
                <span>AI / ML</span>
                <span className="tag-dot">&middot;</span>
                <span>PYTHON</span>
                <span className="tag-dot">&middot;</span>
                <span>PRODUCT ENGINEERING</span>
                <span className="tag-dot">&middot;</span>
                <span>TECHNICAL TRAINING</span>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            ACT 02 — LIVE RESUME CENTERPIECE
            ============================================================ */}
        <section className="res-live-section" data-nav-theme="light">
          <div className="res-bounds">
            
            <div className="res-live-header-bar">
              <Reveal y={16} duration={0.8}>
                <div>
                  <span className="res-section-label">LIVE RESUME</span>
                  <h2 className="res-live-title">Current Professional Record</h2>
                </div>
              </Reveal>

              <Reveal y={16} duration={0.8} delay={0.1}>
                <div className="res-page-counter">
                  <span>DOCUMENT PAGE: 01 / 01</span>
                </div>
              </Reveal>
            </div>

            {/* Document Frame */}
            <ScaleReveal className="res-document-frame">
              <div 
                className="res-doc-interactive-wrapper"
                onClick={openLiveViewer}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLiveViewer()}
                aria-label="Click to open full-screen live resume viewer"
              >
                <img 
                  src={resumeImage} 
                  alt="Bhagavan Professional Resume" 
                  className="res-doc-img" 
                  loading="eager"
                  decoding="async"
                />

                <div className="res-doc-hover-overlay">
                  <div className="rdh-btn">
                    <span>CLICK TO VIEW FULLSCREEN</span>
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </ScaleReveal>

            {/* Primary Action Buttons */}
            <div className="res-actions-bar">
              <Reveal y={20} duration={0.9}>
                <MagneticLink strength={0.3}>
                  <button className="res-btn-primary apple-pressable" onClick={openLiveViewer}>
                    <span>VIEW LIVE RESUME</span>
                    <ArrowRight size={16} />
                  </button>
                </MagneticLink>
              </Reveal>

              <Reveal y={20} duration={0.9} delay={0.15}>
                <MagneticLink strength={0.3}>
                  <a 
                    href={resumeImage} 
                    download="Bhagavan_Resume.jpg" 
                    className="res-btn-secondary apple-pressable"
                  >
                    <span>DOWNLOAD RESUME</span>
                    <Download size={16} />
                  </a>
                </MagneticLink>
              </Reveal>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 03 — DOCUMENT + EVIDENCE
            ============================================================ */}
        <section className="res-evidence-section" data-nav-theme="light">
          <div className="res-bounds">
            
            <Reveal y={20} duration={0.9}>
              <span className="res-section-label">DOCUMENT / EVIDENCE</span>
              <h2 className="res-sub-headline">What the document represents.</h2>
            </Reveal>

            <div className="res-evidence-grid">
              <Reveal y={24} duration={0.9} className="res-evidence-col">
                <span className="rec-col-title">THE DOCUMENT</span>
                <p className="rec-col-desc">
                  A concise professional summary highlighting core engineering skill sets, technical AI/ML training leadership, and shipping capabilities across Python, APIs, and modern frontends.
                </p>
              </Reveal>

              <Reveal y={24} duration={0.9} delay={0.15} className="res-evidence-col">
                <span className="rec-col-title">THE EVIDENCE</span>
                <div className="rec-signals-list">
                  <div className="rec-signal-item">
                    <span className="sig-key">SHIPPED SYSTEMS:</span>
                    <span className="sig-val">CareerOS &middot; AuraOS &middot; VERITAS &middot; VoltDrive</span>
                  </div>
                  <div className="rec-signal-item">
                    <span className="sig-key">CURRENT ROLE:</span>
                    <span className="sig-val">Technical AI/ML & Data Science Trainer @ Data Valley</span>
                  </div>
                  <div className="rec-signal-item">
                    <span className="sig-key">ENGINEERING FOCUS:</span>
                    <span className="sig-val">AI Systems &middot; Python &middot; Product Engineering</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 04 — PORTFOLIO CONNECTION & CLOSING
            ============================================================ */}
        <section className="res-connection-section" data-nav-theme="light">
          <div className="res-bounds text-center">
            
            <Reveal y={24} duration={1.0}>
              <blockquote className="res-editorial-quote">
                "The resume is the summary.<br />
                The portfolio is the evidence."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.2}>
              <div className="res-nav-links-row">
                <Link to="/work" className="res-nav-link">
                  <span>EXPLORE THE WORK</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/experience" className="res-nav-link">
                  <span>VIEW THE EXPERIENCE</span>
                  <ArrowRight size={14} />
                </Link>
                <Link to="/connect" className="res-nav-link">
                  <span>START A CONVERSATION</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>

            <Reveal y={24} duration={1.0} delay={0.4}>
              <h2 className="res-closing-statement">
                THE DOCUMENT ENDS.<br />
                THE WORK CONTINUES.
              </h2>
            </Reveal>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

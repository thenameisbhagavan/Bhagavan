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

// ─── Single Canonical Resume Assets (PDF + High-Res Image) ────────────────────
import resumePdf from "../assets/Bhagavan_Resume.pdf";
import resumeImage from "../assets/Bhagavan_Resume.jpg";

// ─── Live Full-Screen Document Viewer (Apple QuickLook Style) ─────────────────
function LiveResumeModal({ isOpen, onClose, imgSrc, pdfSrc }) {
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
          <span className="lrv-filename">Bhagavan_Resume.pdf</span>
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
          <a href={pdfSrc} target="_blank" rel="noopener noreferrer" className="lrv-btn-icon" title="Open PDF in New Tab">
            <ArrowUpRight size={18} />
          </a>
          <a href={pdfSrc} download="Bhagavan_Resume.pdf" className="lrv-btn-icon" title="Download PDF Resume">
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
        title="Resume | TheNameIsBhagavan"
        description="Official professional record of Bhagavan (TheNameIsBhagavan) — Software Developer, AI/ML & Generative AI practitioner, and Technical Trainer at Data Valley AI Tech Solutions."
        keywords="Bhagavan Resume, TheNameIsBhagavan Resume, Software Developer CV, AI/ML, Generative AI, Technical Trainer, Data Valley AI Tech Solutions, Python Developer Resume"
      />

      <LiveResumeModal 
        isOpen={isViewerOpen} 
        onClose={closeLiveViewer} 
        imgSrc={resumeImage} 
        pdfSrc={resumePdf}
      />

      <div className="res-canonical-page">

        {/* ============================================================
            ACT 01 — HERO (ONE ENGINEER. ONE RECORD.)
            ============================================================ */}
        <section className="res-hero-section" data-nav-theme="light">
          <div className="res-bounds">
            
            <Reveal y={16} duration={0.8}>
              <div className="res-hero-eyebrow">
                <span className="res-badge">PROFESSIONAL RECORD / 2024 &ndash; PRESENT</span>
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
                Software development, AI/ML & Generative AI applications, and hands-on technical training &mdash; documented in one current professional record.
              </p>
            </Reveal>

            {/* Restrained Metadata Tags */}
            <Reveal y={16} duration={0.8} delay={0.45}>
              <div className="res-hero-tags">
                <span>SOFTWARE DEVELOPMENT</span>
                <span className="tag-dot">&middot;</span>
                <span>AI / ML &amp; GENAI</span>
                <span className="tag-dot">&middot;</span>
                <span>PYTHON BACKEND</span>
                <span className="tag-dot">&middot;</span>
                <span>DATA SCIENCE</span>
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
                    href={resumePdf} 
                    download="Bhagavan_Resume.pdf" 
                    className="res-btn-secondary apple-pressable"
                  >
                    <span>DOWNLOAD OFFICIAL RESUME (PDF)</span>
                    <Download size={16} />
                  </a>
                </MagneticLink>
              </Reveal>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 02.5 — STRUCTURED DIGITAL RESUME (EDITORIAL TRANSCRIPT)
            ============================================================ */}
        <section className="res-transcript-section" data-nav-theme="light" style={{ padding: '60px 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
          <div className="res-bounds">
            
            <Reveal y={20} duration={0.9}>
              <div style={{ marginBottom: '40px' }}>
                <span className="res-section-label">STRUCTURED RECORD</span>
                <h2 className="res-sub-headline">Digital Curriculum Vitae</h2>
              </div>
            </Reveal>

            <div style={{ background: '#ffffff', borderRadius: '20px', border: '1px solid rgba(0,0,0,0.08)', padding: 'clamp(28px, 4vw, 48px)', boxShadow: '0 4px 24px rgba(0,0,0,0.03)' }}>
              
              {/* Header Info */}
              <div style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '28px', marginBottom: '32px' }}>
                <h1 style={{ fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: '700', color: '#111111', margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>
                  Siva Satya Sai Bhagavan Gopalajosyula
                </h1>
                <p style={{ fontSize: '15px', color: '#0071E3', fontWeight: '600', margin: '0 0 12px 0', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                  AI &amp; Data Science Professional &middot; Technical Trainer &middot; AI Solutions Developer
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '13.5px', color: '#666666' }}>
                  <span>thenameisbhagavan@gmail.com</span>
                  <span>&bull;</span>
                  <span>+91 7569205626</span>
                  <span>&bull;</span>
                  <a href="https://linkedin.com/in/thenameisbhagavan" target="_blank" rel="noopener noreferrer" style={{ color: '#111111', textDecoration: 'none' }}>linkedin.com/in/thenameisbhagavan</a>
                  <span>&bull;</span>
                  <a href="https://github.com/thenameisbhagavan" target="_blank" rel="noopener noreferrer" style={{ color: '#111111', textDecoration: 'none' }}>github.com/thenameisbhagavan</a>
                </div>
              </div>

              {/* 1. Professional Summary */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '12px' }}>
                  PROFESSIONAL SUMMARY
                </h3>
                <p style={{ fontSize: '15px', color: '#333333', lineHeight: '1.65', margin: 0 }}>
                  AI &amp; Data Science Professional, Technical Trainer, and AI Solutions Developer with practical experience engineering applied machine learning systems, Python backend services, and production web applications. Developer and Technical Trainer at Data Valley AI Tech Solutions since June 2024, architecting production systems (DV Labs &amp; Data Valley Assessment Platform, CareerOS, AuraOS, VERITAS, AgriVision AI) while designing curricula and delivering hands-on instruction in Python, Data Science, Machine Learning, Generative AI, and Agentic Workflows.
                </p>
              </div>

              {/* 2. Technical Skills (Organized by Actual Proficiency) */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '16px' }}>
                  TECHNICAL SKILLS &amp; PROFICIENCY TIERS
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
                  <div style={{ background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#111111' }}>CORE &amp; PRODUCTION</span>
                      <span style={{ fontSize: '10px', color: '#34c759', background: 'rgba(52,199,89,0.12)', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>DAILY USE</span>
                    </div>
                    <span style={{ fontSize: '13.5px', color: '#555558', lineHeight: 1.5, display: 'block' }}>
                      Python, SQL, Scikit-learn, Pandas, NumPy, FastAPI, Flask, React 19, MongoDB Atlas, Git
                    </span>
                  </div>

                  <div style={{ background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#111111' }}>APPLIED AI &amp; GENAI</span>
                      <span style={{ fontSize: '10px', color: '#0071E3', background: 'rgba(0,113,227,0.08)', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>PROFICIENT</span>
                    </div>
                    <span style={{ fontSize: '13.5px', color: '#555558', lineHeight: 1.5, display: 'block' }}>
                      TensorFlow, Keras, Gemini API, Prompt Engineering, RAG Architectures, Vector Search, NLP Pipelines
                    </span>
                  </div>

                  <div style={{ background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#111111' }}>FULL-STACK &amp; PLATFORMS</span>
                      <span style={{ fontSize: '10px', color: '#ff9500', background: 'rgba(255,149,0,0.1)', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>APPLICATION</span>
                    </div>
                    <span style={{ fontSize: '13.5px', color: '#555558', lineHeight: 1.5, display: 'block' }}>
                      Next.js (App Router), TypeScript, Node.js, Express.js, REST APIs, Vercel Edge, Tailwind CSS
                    </span>
                  </div>

                  <div style={{ background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '12px', padding: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#111111' }}>EMERGING &amp; TOOLING</span>
                      <span style={{ fontSize: '10px', color: '#af52de', background: 'rgba(175,82,222,0.1)', padding: '2px 6px', borderRadius: '4px', fontWeight: '700' }}>EXPLORING</span>
                    </div>
                    <span style={{ fontSize: '13.5px', color: '#555558', lineHeight: 1.5, display: 'block' }}>
                      Agentic AI Workflows, Multi-Agent Systems, LangChain, Docker, Postman, Linux CLI
                    </span>
                  </div>
                </div>
              </div>

              {/* 3. Professional Experience */}
              <div style={{ marginBottom: '36px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '20px' }}>
                  PROFESSIONAL EXPERIENCE &middot; INDUSTRY PRACTICE
                </h3>
                
                {/* Data Valley */}
                <div style={{ marginBottom: '24px', background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '16px', padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <div>
                      <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#111111', margin: 0 }}>
                        Data Valley AI Tech Solutions &mdash; Technical Trainer &amp; AI Solutions Developer
                      </h4>
                      <span style={{ fontSize: '13px', color: '#0071E3', fontWeight: '600' }}>Vijayawada, Andhra Pradesh, India</span>
                    </div>
                    <span style={{ fontSize: '12px', color: '#86868b', fontWeight: '700', background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', padding: '3px 10px', borderRadius: '6px' }}>
                      JUNE 2024 &ndash; PRESENT
                    </span>
                  </div>
                  <ul style={{ paddingLeft: '20px', margin: '12px 0 0 0', fontSize: '14px', color: '#444444', lineHeight: '1.65', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li><strong>AI, Data Science &amp; Python Training:</strong> Delivering structured cohorts across Python programming, Scikit-learn ML pipelines, exploratory analysis, and feature engineering.</li>
                    <li><strong>Curriculum Planning &amp; Content Development:</strong> Designing progressive syllabi, hands-on lab exercises, coding benchmarks, and technical evaluation rubrics.</li>
                    <li><strong>Student Mentoring &amp; Project Guidance:</strong> Guiding engineering students through technical doubts, code debugging, and real-world capstone AI projects.</li>
                    <li><strong>Generative AI &amp; Agentic AI Workshops:</strong> Conducting technical workshops including the 300-student Generative AI workshop at PACE Institute of Technology &amp; Sciences, Ongole.</li>
                    <li><strong>Application Engineering &amp; DV Labs:</strong> Architected the DV Labs candidate assessment engine (dv-assesments.vercel.app) end-to-end with Next.js App Router, React 19, TypeScript, and MongoDB Atlas; engineering milestone-locked project delivery and AI viva defense workflows.</li>
                    <li><strong>Academic Outreach:</strong> Delivered technical talk on "AI Innovation and Startup Opportunities" at PBR VITS (Autonomous), Kavali, recognized with formal Letter of Appreciation from IQAC.</li>
                  </ul>
                </div>

                {/* Foundational Internships Archive */}
                <div style={{ marginTop: '20px' }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#86868b', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '12px' }}>
                    EARLY ENGINEERING INTERNSHIPS (2024 ARCHIVE)
                  </span>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                    <div style={{ padding: '14px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '10px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#111111' }}>StudyOwl Education (2024)</span>
                      <p style={{ fontSize: '12.5px', color: '#666666', margin: '3px 0 0 0' }}>Software Development Intern &middot; React frontend, REST API integration, reusable components.</p>
                    </div>
                    <div style={{ padding: '14px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '10px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#111111' }}>SmartBridge (2024)</span>
                      <p style={{ fontSize: '12.5px', color: '#666666', margin: '3px 0 0 0' }}>Software Engineering Intern &middot; CNN image classification with TensorFlow/Keras &amp; Flask service.</p>
                    </div>
                    <div style={{ padding: '14px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '10px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#111111' }}>Blackbucks (2024)</span>
                      <p style={{ fontSize: '12.5px', color: '#666666', margin: '3px 0 0 0' }}>Machine Learning Intern &middot; Data preprocessing, feature engineering &amp; Scikit-learn pipelines.</p>
                    </div>
                    <div style={{ padding: '14px', background: '#ffffff', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '10px' }}>
                      <span style={{ fontSize: '13px', fontWeight: '700', color: '#111111' }}>Helson (2024)</span>
                      <p style={{ fontSize: '12.5px', color: '#666666', margin: '3px 0 0 0' }}>Enterprise Automation Intern &middot; Business process workflows using PowerApps &amp; Automate.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4. Verified Institutional Education Timeline */}
              <div>
                <h3 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '20px' }}>
                  INSTITUTIONAL EDUCATION TIMELINE
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  
                  {/* B.Tech */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', padding: '18px 20px', background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '12px' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', margin: '0 0 4px 0' }}>
                        Bachelor of Technology (B.Tech) &mdash; Artificial Intelligence and Data Science
                      </h4>
                      <div style={{ fontSize: '14px', color: '#333333', fontWeight: '550' }}>
                        Ramachandra College of Engineering, Eluru
                      </div>
                      <div style={{ fontSize: '13px', color: '#86868b', marginTop: '2px' }}>
                        Affiliated to Jawaharlal Nehru Technological University Kakinada (JNTUK)
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '13px', color: '#86868b', fontWeight: '700', display: 'block' }}>2022 &ndash; 2026</span>
                      <span style={{ fontSize: '13px', color: '#0071E3', fontWeight: '700' }}>CGPA 7.5 / 10 (CMM: 7.57 / 10 First Class)</span>
                    </div>
                  </div>

                  {/* Intermediate */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', padding: '18px 20px', background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '12px' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', margin: '0 0 4px 0' }}>
                        Intermediate &mdash; MPC (Mathematics, Physics, Chemistry)
                      </h4>
                      <div style={{ fontSize: '14px', color: '#333333', fontWeight: '550' }}>
                        Sri Vidya Junior College, Gudivada
                      </div>
                      <div style={{ fontSize: '13px', color: '#86868b', marginTop: '2px' }}>
                        Board of Intermediate Education, Andhra Pradesh (BIEAP)
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '13px', color: '#86868b', fontWeight: '700', display: 'block' }}>2020 &ndash; 2022</span>
                      <span style={{ fontSize: '13px', color: '#34c759', fontWeight: '700' }}>78% (784 / 1000 Marks &bull; Grade A)</span>
                    </div>
                  </div>

                  {/* SSC */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', padding: '18px 20px', background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '12px' }}>
                    <div>
                      <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', margin: '0 0 4px 0' }}>
                        Secondary School Certificate (Class X)
                      </h4>
                      <div style={{ fontSize: '14px', color: '#333333', fontWeight: '550' }}>
                        Montessori High School (EM), Gudivada, Krishna District
                      </div>
                      <div style={{ fontSize: '13px', color: '#86868b', marginTop: '2px' }}>
                        Board of Secondary Education, Andhra Pradesh (BSEAP)
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '13px', color: '#86868b', fontWeight: '700', display: 'block' }}>2019 &ndash; 2020</span>
                      <span style={{ fontSize: '13px', color: '#34c759', fontWeight: '700' }}>95% (546 / 600 Marks &bull; First Division)</span>
                    </div>
                  </div>

                </div>
              </div>

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
                  A concise professional summary highlighting software engineering skill sets, practical AI/ML and Generative AI application workflows, and technical training delivery across Python, APIs, and modern architectures.
                </p>
              </Reveal>

              <Reveal y={24} duration={0.9} delay={0.15} className="res-evidence-col">
                <span className="rec-col-title">THE EVIDENCE</span>
                <div className="rec-signals-list">
                  <div className="rec-signal-item">
                    <span className="sig-key">SHIPPED SYSTEMS:</span>
                    <span className="sig-val">CareerOS &middot; VERITAS &middot; AuraOS &middot; VoltDrive</span>
                  </div>
                  <div className="rec-signal-item">
                    <span className="sig-key">CURRENT ROLE:</span>
                    <span className="sig-val">Developer &amp; Technical Trainer &mdash; Data Valley AI Tech Solutions (2024 &ndash; Present)</span>
                  </div>
                  <div className="rec-signal-item">
                    <span className="sig-key">CORE DISCIPLINES:</span>
                    <span className="sig-val">Software Engineering &middot; AI/ML &amp; GenAI &middot; Technical Training</span>
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

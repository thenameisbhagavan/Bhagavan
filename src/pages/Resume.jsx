import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { X, ArrowRight, ArrowUpRight, Download, ZoomIn, ZoomOut, Check, Copy } from "lucide-react";
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
          <a href={imgSrc} download="Bhagavan_Resume.jpg" className="lrv-btn-icon" title="Download Resume Image (JPG)">
            <Download size={18} style={{ color: '#0071e3' }} />
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

const CV_TABS = [
  { id: "all", label: "All Sections" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Technical Skills" },
  { id: "education", label: "Education & Achievements" }
];

// ─── Main Resume Page Component ───────────────────────────────────────────────
export default function Resume() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeCvSection, setActiveCvSection] = useState("all");
  const [copiedContact, setCopiedContact] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleCopyContact = useCallback((value, key) => {
    navigator.clipboard.writeText(value).then(() => {
      setCopiedContact(key);
      setTimeout(() => setCopiedContact(null), 1800);
    });
  }, []);

  const openLiveViewer = useCallback(() => setIsViewerOpen(true), []);
  const closeLiveViewer = useCallback(() => setIsViewerOpen(false), []);

  return (
    <>
      <SEO 
        title="Resume | TheNameIsBhagavan"
        description="Official professional record of Siva Satya Sai Bhagavan Gopalajosyula (TheNameIsBhagavan) — Software Engineer & AI/Data Science Trainer at Data Valley Training, Placements & IT Solutions."
        keywords="Bhagavan Resume, TheNameIsBhagavan Resume, Software Engineer CV, AI Data Science Trainer, Generative AI, Data Valley Training Placements IT Solutions, Python Developer Resume"
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

              <Reveal y={20} duration={0.9} delay={0.25}>
                <MagneticLink strength={0.3}>
                  <a 
                    href={resumeImage} 
                    download="Bhagavan_Resume.jpg" 
                    className="res-btn-secondary apple-pressable"
                  >
                    <span>DOWNLOAD AS IMAGE (JPG)</span>
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
              <div className="res-cv-toolbar">
                <div>
                  <span className="res-section-label">STRUCTURED RECORD</span>
                  <h2 className="res-sub-headline">Digital Curriculum Vitae</h2>
                </div>
                <div className="res-cv-tabs" role="tablist" aria-label="Resume Section Filter">
                  {CV_TABS.map((tab) => (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={activeCvSection === tab.id}
                      className={`res-cv-tab ${activeCvSection === tab.id ? 'is-active' : ''}`}
                      onClick={() => setActiveCvSection(tab.id)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>
            </Reveal>

            <div style={{ background: '#ffffff', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.08)', padding: 'clamp(22px, 4vw, 48px)', boxShadow: '0 8px 32px rgba(0,0,0,0.04)' }}>
              
                {/* Header Info */}
              <div style={{ borderBottom: '1px solid rgba(0,0,0,0.08)', paddingBottom: '28px', marginBottom: '32px' }}>
                <h1 style={{ fontSize: 'clamp(22px, 3.5vw, 36px)', fontWeight: '700', color: '#111111', margin: '0 0 8px 0', letterSpacing: '-0.02em' }}>
                  Siva Satya Sai Bhagavan Gopalajosyula
                </h1>
                <p style={{ fontSize: '15px', color: '#0071E3', fontWeight: '600', margin: '0 0 6px 0', letterSpacing: '0.03em', textTransform: 'uppercase' }}>
                  Software Engineer &middot; AI/Data Science Trainer &middot; AI Solutions Developer
                </p>
                <p style={{ fontSize: '13.5px', color: '#555558', fontWeight: '500', margin: '0 0 14px 0' }}>
                  Data Valley Training, Placements &amp; IT Solutions &middot; Vijayawada, Andhra Pradesh
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', fontSize: '13.5px', color: '#666666' }}>
                  <button
                    type="button"
                    className={`res-cv-copy-pill ${copiedContact === 'phone' ? 'is-copied' : ''}`}
                    onClick={() => handleCopyContact('+91-7569205626', 'phone')}
                    title="Copy phone number"
                  >
                    {copiedContact === 'phone' ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedContact === 'phone' ? 'Copied' : '+91-7569205626'}</span>
                  </button>
                  <button
                    type="button"
                    className={`res-cv-copy-pill ${copiedContact === 'email' ? 'is-copied' : ''}`}
                    onClick={() => handleCopyContact('thenameisbhagavan@gmail.com', 'email')}
                    title="Copy email address"
                  >
                    {copiedContact === 'email' ? <Check size={12} /> : <Copy size={12} />}
                    <span>{copiedContact === 'email' ? 'Copied Email' : 'thenameisbhagavan@gmail.com'}</span>
                  </button>
                  <span>&middot;</span>
                  <a href="https://linkedin.com/in/thenameisbhagavan" target="_blank" rel="noopener noreferrer" style={{ color: '#111111', textDecoration: 'none' }}>linkedin.com/in/thenameisbhagavan</a>
                  <span>&middot;</span>
                  <a href="https://github.com/thenameisbhagavan" target="_blank" rel="noopener noreferrer" style={{ color: '#111111', textDecoration: 'none' }}>github.com/thenameisbhagavan</a>
                  <span>&middot;</span>
                  <a href="https://www.thenameisbhagavan.in" target="_blank" rel="noopener noreferrer" style={{ color: '#0071E3', textDecoration: 'none', fontWeight: '500' }}>thenameisbhagavan.in</a>
                </div>
              </div>

              {/* 1. Summary */}
              {activeCvSection === "all" && (
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '12px' }}>
                  SUMMARY
                </h3>
                <p style={{ fontSize: '15px', color: '#333333', lineHeight: '1.65', margin: 0 }}>
                  Software Engineer and AI/Data Science Trainer with hands-on experience in Python development, Machine Learning, Deep Learning, NLP, Generative AI, LLM integration, and full-stack application development. Experienced in engineering AI-powered platforms, bilingual voice assistants, assessment automation, and REST APIs using FastAPI, Next.js, React.js, TypeScript, and MongoDB. Contributing to DV Labs, an AI-Guided Capstone-to-Career Platform, through end-to-end product development, AI integration, and engineering workflows. Also experienced in delivering practical technical training in Python, Data Science, Machine Learning, and Generative AI.
                </p>
              </div>
              )}

              {/* 2. Experience */}
              {(activeCvSection === "all" || activeCvSection === "experience") && (
              <div style={{ marginBottom: '36px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '20px' }}>
                  EXPERIENCE
                </h3>

                {/* Data Valley */}
                <div style={{ marginBottom: '18px', background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '16px', padding: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
                    <div>
                      <h4 style={{ fontSize: '17px', fontWeight: '700', color: '#111111', margin: 0 }}>
                        Developer &amp; Data Science Trainer
                      </h4>
                      <span style={{ fontSize: '13.5px', color: '#0071E3', fontWeight: '600' }}>
                        Data Valley Training, Placements &amp; IT Solutions, Vijayawada
                      </span>
                    </div>
                    <span style={{ fontSize: '12px', color: '#86868b', fontWeight: '700', background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', padding: '3px 10px', borderRadius: '6px' }}>
                      Aug 2026 &ndash; Present
                    </span>
                  </div>
                  <ul style={{ paddingLeft: '20px', margin: '12px 0 0 0', fontSize: '14px', color: '#444444', lineHeight: '1.65', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <li>Deliver practical, project-based training in Python, Data Science, Machine Learning, Deep Learning, NLP, and Generative AI, translating technical concepts into hands-on coding exercises.</li>
                    <li>Design structured course materials, technical demonstrations, coding assignments, and assessments to support progressive student learning and practical skill development.</li>
                    <li>Contribute to application development and engineering activities using Python, FastAPI, Flask, React.js, and MongoDB, including REST API integration, authentication, and backend workflows.</li>
                  </ul>
                </div>

                {/* Internships Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                  <div style={{ background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '14px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
                      <h4 style={{ fontSize: '15.5px', fontWeight: '700', color: '#111111', margin: 0 }}>
                        Software Development Intern
                      </h4>
                      <span style={{ fontSize: '12px', color: '#86868b', fontWeight: '700' }}>Jan &ndash; Apr 2025</span>
                    </div>
                    <span style={{ fontSize: '13px', color: '#0071E3', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
                      StudyOwl Education Pvt. Ltd.
                    </span>
                    <p style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.55', margin: 0 }}>
                      Developed RESTful APIs, authentication modules, and backend services using Node.js, Express.js, and MongoDB.
                    </p>
                  </div>

                  <div style={{ background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '14px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
                      <h4 style={{ fontSize: '15.5px', fontWeight: '700', color: '#111111', margin: 0 }}>
                        Machine Learning Intern
                      </h4>
                      <span style={{ fontSize: '12px', color: '#86868b', fontWeight: '700' }}>May &ndash; Jun 2024 &middot; Remote</span>
                    </div>
                    <span style={{ fontSize: '13px', color: '#0071E3', fontWeight: '600', display: 'block', marginBottom: '8px' }}>
                      Blackbucks
                    </span>
                    <p style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.55', margin: 0 }}>
                      Developed Python data preprocessing pipelines using Pandas and NumPy for Machine Learning applications.
                    </p>
                  </div>
                </div>
              </div>
              )}

              {/* 3. Flagship Projects (Directly from Resume) */}
              {(activeCvSection === "all" || activeCvSection === "projects") && (
              <div style={{ marginBottom: '36px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '20px' }}>
                  PROJECTS
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '18px' }}>
                  {/* DV Labs */}
                  <div style={{ padding: '24px', background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                      <h4 style={{ fontSize: '16.5px', fontWeight: '700', color: '#111111', margin: 0 }}>
                        DV Labs &ndash; AI-Guided Capstone-to-Career Platform
                      </h4>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#86868b' }}>2026 &ndash; Present</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <a href="https://labs.datavalley.ai" target="_blank" rel="noopener noreferrer" style={{ fontSize: '12.5px', color: '#0071E3', fontWeight: '650', textDecoration: 'none' }}>
                        labs.datavalley.ai &#8599;
                      </a>
                      <span style={{ color: '#c7c7cc' }}>&middot;</span>
                      <span style={{ fontSize: '12px', color: '#555558', fontWeight: '550' }}>
                        Next.js, React, TypeScript, MongoDB Atlas, Scout AI, AI APIs
                      </span>
                    </div>
                    <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '13.5px', color: '#444444', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>Engineered six-stage bilingual video masterclasses with Telugu narration and AI avatar interactions, guiding students from problem definition and research to implementation and viva defense.</li>
                      <li>Developed a 600-question assessment system, vision-based proctoring, student answer persistence, automated certificates, faculty dashboards, AI Viva Voce evaluation, and originality reports; contributed to authentication, security, database reliability, cloud storage, and CI/CD.</li>
                    </ul>
                  </div>

                  {/* Dheergayush */}
                  <div style={{ padding: '24px', background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                      <h4 style={{ fontSize: '16.5px', fontWeight: '700', color: '#111111', margin: 0 }}>
                        Dheergayush &ndash; Bilingual AI Voice Assistant &amp; 2D Avatar
                      </h4>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#86868b' }}>2026</span>
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                      <a href="https://dheergayush.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '12.5px', color: '#0071E3', fontWeight: '650', textDecoration: 'none' }}>
                        dheergayush.com &#8599;
                      </a>
                      <span style={{ color: '#c7c7cc' }}>&middot;</span>
                      <span style={{ fontSize: '12px', color: '#555558', fontWeight: '550' }}>
                        Next.js 15, React 19, TypeScript, OpenAI, Gemini, Web Audio API
                      </span>
                    </div>
                    <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '13.5px', color: '#444444', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <li>Built an end-to-end interactive 2D doctor avatar with real-time audio-driven lip-sync, facial animations, gestures, and Telugu, English, and Tanglish voice interaction.</li>
                      <li>Integrated GPT-4o-mini, GPT-4o-mini-TTS, Gemini fallback, 24 FAQs, 48 bilingual audio clips, lexical RAG over 70 knowledge records, SHA-256 audio caching, streaming responses, emergency detection, and website navigation.</li>
                    </ul>
                  </div>
                </div>
              </div>
              )}

              {/* 4. Technical Skills */}
              {(activeCvSection === "all" || activeCvSection === "skills") && (
              <div style={{ marginBottom: '36px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '16px' }}>
                  TECHNICAL SKILLS
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '14px' }}>
                  {[
                    { label: "Programming", items: "Python, JavaScript, SQL" },
                    { label: "AI & Data Science", items: "Machine Learning, Deep Learning, NLP, Generative AI, LLM Integration, RAG, Agentic AI, Prompt Engineering, Pandas, NumPy, scikit-learn" },
                    { label: "Backend & APIs", items: "FastAPI, Flask, NestJS, Node.js, Express.js, REST APIs, JWT Authentication, Postman" },
                    { label: "Frontend", items: "React.js, Next.js, TypeScript, HTML5, CSS3, Three.js, Framer Motion" },
                    { label: "AI & Voice Technologies", items: "OpenAI APIs, Google Gemini, Speech Recognition, Text-to-Speech, Web Speech API, Web Audio API" },
                    { label: "Databases", items: "MongoDB, PostgreSQL, MySQL, Redis" },
                    { label: "Tools & Deployment", items: "Git, GitHub, Jupyter Notebook, Docker, Vercel, Render, Cloudflare, Microsoft Power Platform" },
                  ].map((group) => (
                    <div key={group.label} style={{ background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '12px', padding: '16px' }}>
                      <span style={{ fontSize: '12px', fontWeight: '700', color: '#111111', letterSpacing: '0.03em', textTransform: 'uppercase', display: 'block', marginBottom: '6px' }}>
                        {group.label}
                      </span>
                      <span style={{ fontSize: '13.5px', color: '#555558', lineHeight: 1.55, display: 'block' }}>
                        {group.items}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              )}

              {/* 5. Education & 6. Achievements */}
              {(activeCvSection === "all" || activeCvSection === "education") && (
              <>
              <div style={{ marginBottom: '36px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '18px' }}>
                  EDUCATION
                </h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', padding: '18px 20px', background: '#fbfbfd', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '12px' }}>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#111111', margin: '0 0 4px 0' }}>
                      B.Tech in Artificial Intelligence and Data Science
                    </h4>
                    <div style={{ fontSize: '14px', color: '#333333', fontWeight: '550' }}>
                      Ramachandra College of Engineering, Eluru (JNTUK)
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontSize: '13px', color: '#86868b', fontWeight: '700', display: 'block' }}>2022 &ndash; 2026</span>
                    <span style={{ fontSize: '13px', color: '#0071E3', fontWeight: '700' }}>CGPA: 7.5/10</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '14px', fontWeight: '700', letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', marginBottom: '16px' }}>
                  ACHIEVEMENTS
                </h3>
                <ul style={{ paddingLeft: '20px', margin: 0, fontSize: '14px', color: '#444444', lineHeight: '1.7', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <li>Delivered a one-week hands-on workshop on Generative AI and Prompt Engineering to 150+ students at PACE College of Engineering, Ongole.</li>
                  <li>Delivered a technical talk on AI Innovation and Startup Opportunities to engineering students at P.B.R. Visvodaya Institute of Technology &amp; Science, Kavali (October 2026).</li>
                  <li>Built and published a personal engineering portfolio at <a href="https://www.thenameisbhagavan.in" target="_blank" rel="noopener noreferrer" style={{ color: '#0071E3', textDecoration: 'none' }}>https://www.thenameisbhagavan.in</a>.</li>
                </ul>
              </div>
              </>
              )}

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
                  A concise professional record highlighting software engineering, bilingual AI voice interfaces, full-stack platforms, LLM/RAG workflows, and practical technical training across Python, Data Science, and Generative AI.
                </p>
              </Reveal>

              <Reveal y={24} duration={0.9} delay={0.15} className="res-evidence-col">
                <span className="rec-col-title">THE EVIDENCE</span>
                <div className="rec-signals-list">
                  <div className="rec-signal-item">
                    <span className="sig-key">FLAGSHIP PLATFORMS:</span>
                    <span className="sig-val">DV Labs (labs.datavalley.ai) &middot; Dheergayush (dheergayush.com)</span>
                  </div>
                  <div className="rec-signal-item">
                    <span className="sig-key">CURRENT ROLE:</span>
                    <span className="sig-val">Developer &amp; Data Science Trainer &mdash; Data Valley Training, Placements &amp; IT Solutions (Aug 2026 &ndash; Present)</span>
                  </div>
                  <div className="rec-signal-item">
                    <span className="sig-key">CORE DISCIPLINES:</span>
                    <span className="sig-val">Software Engineering &middot; AI/ML &amp; Voice AI &middot; Technical Training</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 04 — PORTFOLIO CONNECTION & CLOSING
            ============================================================ */}
        <section className="res-connection-section" data-nav-theme="dark">
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

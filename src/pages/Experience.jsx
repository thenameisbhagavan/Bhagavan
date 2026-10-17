import React, { useState, useEffect } from "react";
import { X, ArrowRight, ExternalLink, FileText } from "lucide-react";
import SEO from "../components/SEO";
import BrandSignature from "../components/BrandSignature";
import Reveal from "../components/motion/Reveal";
import MaskReveal from "../components/motion/MaskReveal";
import ScaleReveal from "../components/motion/ScaleReveal";
import Parallax from "../components/motion/Parallax";
import MagneticLink from "../components/motion/MagneticLink";
import AppreciationLetterModal from "../components/AppreciationLetterModal";
import "../styles/Experience.css";

// ─── Certificate Artifacts & Assets ───────────────────────────────────────────
import studyOwlCert from "../assets/cert-studyowl.png";
import blackbucksCert from "../assets/cert-blackbucks.png";
import smartBridgeCert from "../assets/cert-smartbridge.png";
import helsonCert from "../assets/cert-helson.png";
import paceImg from "../assets/pace.jpg";
import datavalleyImg from "../assets/datascience coruse compltetion.jpeg";
import pbrTalkPhoto from "../assets/pbr-vits-ai-talk.jpg";
import pbrLetterImg from "../assets/pbr-vits-appreciation-letter.png";

// ─── Artifact Viewer Modal ────────────────────────────────────────────────────
function ArtifactViewer({ isOpen, onClose, imgSrc, imgAlt }) {
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
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="artifact-modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-label="Artifact Viewer">
      <button className="am-close-btn" onClick={onClose} aria-label="Close viewer">
        <X size={24} strokeWidth={1.5} />
      </button>
      <div className="am-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="am-modal-header">VERIFIED ARTIFACT</div>
        <img src={imgSrc} alt={imgAlt} className="am-modal-img" loading="lazy" />
      </div>
    </div>
  );
}

// ─── Main Experience Page Component ───────────────────────────────────────────
export default function Experience() {
  const [viewerState, setViewerState] = useState({ isOpen: false, src: "", alt: "" });
  const [activeStage, setActiveStage] = useState("01");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);
  const openViewer = (src, alt) => setViewerState({ isOpen: true, src, alt });
  const closeViewer = () => setViewerState((prev) => ({ ...prev, isOpen: false }));

  // Update active stage indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      const stages = ["blackbucks", "studyowl", "smartbridge", "helson", "datavalley", "pbr-vits"];
      const scrollPos = window.scrollY + window.innerHeight * 0.4;

      for (let i = stages.length - 1; i >= 0; i--) {
        const el = document.getElementById(stages[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveStage(`0${i + 1}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStage = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SEO 
        description="Professional engineering & technical training experience of Bhagavan (TheNameIsBhagavan). Developer & Technical Trainer at Data Valley AI Tech Solutions. Software development, AI/ML systems, Generative AI, and technical training."
        keywords="TheNameIsBhagavan, Bhagavan Experience, Developer Technical Trainer, Data Valley AI Tech Solutions, AI ML Developer, Generative AI, Technical Education, Software Engineering"
      />
      
      <ArtifactViewer 
        isOpen={viewerState.isOpen} 
        onClose={closeViewer} 
        imgSrc={viewerState.src} 
        imgAlt={viewerState.alt} 
      />

      <AppreciationLetterModal
        isOpen={isLetterModalOpen}
        onClose={() => setIsLetterModalOpen(false)}
      />

      <div className="exp-evolution-page">

        {/* FLOATING SPATIAL STAGE RAIL */}
        <div className="exp-sticky-rail">
          {[
            { id: "01", label: "DATA", target: "blackbucks" },
            { id: "02", label: "PRODUCT", target: "studyowl" },
            { id: "03", label: "INTELLIGENCE", target: "smartbridge" },
            { id: "04", label: "SYSTEMS", target: "helson" },
            { id: "05", label: "DEV & TEACH", target: "datavalley" },
            { id: "06", label: "TALK & EVIDENCE", target: "pbr-vits" }
          ].map((st) => (
            <button
              key={st.id}
              className={`exp-rail-item ${activeStage === st.id ? "active" : ""}`}
              onClick={() => scrollToStage(st.target)}
            >
              <span className="rail-num">{st.id}</span>
              <span className="rail-label">{st.label}</span>
            </button>
          ))}
        </div>

        {/* ============================================================
            ACT 01 — HERO (ENGINEERING EVOLUTION)
            ============================================================ */}
        <section className="exp-evolution-hero" data-nav-theme="light">
          <div className="evo-bounds">
            
            <Reveal y={16} duration={0.8}>
              <div className="hero-eyebrow">
                <span className="hero-badge">DEVELOPER &amp; TECHNICAL TRAINER &middot; DATA VALLEY AI TECH SOLUTIONS</span>
              </div>
            </Reveal>

            <MaskReveal duration={1.1} delay={0.1}>
              <h1 className="hero-headline">
                Experience is just<br />
                data you learn from.
              </h1>
            </MaskReveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="hero-sub">
                Developing software applications, Python backend services, and practical AI systems while teaching Data Science, Machine Learning, and Generative AI.
              </p>
            </Reveal>

            {/* Stage Path Roadmap Bar */}
            <Reveal y={16} duration={0.8} delay={0.5}>
              <div className="hero-stage-roadmap">
                <span>DATA</span>
                <span className="rm-arrow">&rarr;</span>
                <span>PRODUCT</span>
                <span className="rm-arrow">&rarr;</span>
                <span>INTELLIGENCE</span>
                <span className="rm-arrow">&rarr;</span>
                <span>SYSTEMS</span>
                <span className="rm-arrow">&rarr;</span>
                <span className="rm-current">DEVELOPMENT + TRAINING</span>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            ACT 02 — BLACKBUCKS (STAGE 01 / 05 — DATA)
            ============================================================ */}
        <section id="blackbucks" className="evo-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">STAGE 01 / 05 &middot; DATA &middot; 2024</span>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="company-name">BLACKBUCKS</h2>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.15}>
                <span className="role-title">Machine Learning Intern</span>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-statement">
                "Before intelligence, there was data."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="chapter-desc">
                Worked with data and machine-learning workflows, learning that model quality depends entirely on the quality and structure of the data behind it.
              </p>
            </Reveal>

            {/* Engineering Signal */}
            <Reveal y={20} duration={0.8} delay={0.4}>
              <div className="engineering-signal-bar">
                <span className="signal-label">ENGINEERING SIGNAL:</span>
                <div className="signal-tags">
                  <span>DATA</span>
                  <span className="sig-sep">&rarr;</span>
                  <span>CLEANING</span>
                  <span className="sig-sep">&rarr;</span>
                  <span>ANALYSIS</span>
                  <span className="sig-sep">&rarr;</span>
                  <span>MODELING</span>
                </div>
              </div>
            </Reveal>

            {/* Verified Artifact Card */}
            <Reveal y={24} duration={0.9} delay={0.5}>
              <div className="artifact-card-container">
                <div className="ac-top-meta">
                  <span className="ac-badge">VERIFIED ARTIFACT</span>
                  <span className="ac-doc-num">DOCUMENTED EXPERIENCE / 01</span>
                </div>
                <button 
                  className="artifact-preview-btn"
                  onClick={() => openViewer(blackbucksCert, "Blackbucks Machine Learning Internship Certificate")}
                >
                  <img src={blackbucksCert} alt="Blackbucks Certificate" className="artifact-img" loading="lazy" />
                  <div className="artifact-hover-overlay">
                    <span>VIEW ARTIFACT ↗</span>
                  </div>
                </button>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            ACT 03 — STUDYOWL (STAGE 02 / 05 — PRODUCT)
            ============================================================ */}
        <section id="studyowl" className="evo-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">STAGE 02 / 05 &middot; PRODUCT &middot; 2024</span>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="company-name">STUDYOWL</h2>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.15}>
                <span className="role-title">Software Development Intern</span>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-statement">
                "Code works. Products have to work for people."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="chapter-desc">
                Moved from isolated implementation toward full-stack product development, learning how frontend, backend, data, and usability have to work together seamlessly.
              </p>
            </Reveal>

            {/* Engineering Signal */}
            <Reveal y={20} duration={0.8} delay={0.4}>
              <div className="engineering-signal-bar">
                <span className="signal-label">ENGINEERING SIGNAL:</span>
                <div className="signal-tags">
                  <span>FRONTEND</span>
                  <span className="sig-sep">+</span>
                  <span>BACKEND</span>
                  <span className="sig-sep">+</span>
                  <span>DATA</span>
                  <span className="sig-sep">+</span>
                  <span>USABILITY</span>
                </div>
              </div>
            </Reveal>

            {/* Verified Artifact Card */}
            <Reveal y={24} duration={0.9} delay={0.5}>
              <div className="artifact-card-container">
                <div className="ac-top-meta">
                  <span className="ac-badge">VERIFIED ARTIFACT</span>
                  <span className="ac-doc-num">DOCUMENTED EXPERIENCE / 02</span>
                </div>
                <button 
                  className="artifact-preview-btn"
                  onClick={() => openViewer(studyOwlCert, "StudyOwl Software Development Internship Certificate")}
                >
                  <img src={studyOwlCert} alt="StudyOwl Certificate" className="artifact-img" loading="lazy" />
                  <div className="artifact-hover-overlay">
                    <span>VIEW ARTIFACT ↗</span>
                  </div>
                </button>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            ACT 04 — SMARTBRIDGE (STAGE 03 / 05 — INTELLIGENCE)
            ============================================================ */}
        <section id="smartbridge" className="evo-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">STAGE 03 / 05 &middot; INTELLIGENCE &middot; 2024</span>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="company-name">SMARTBRIDGE</h2>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.15}>
                <span className="role-title">Software Engineering Intern</span>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-statement">
                "AI became part of the system."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="chapter-desc">
                Worked with software engineering and AI-driven workflows, learning that useful intelligence has to operate reliably inside real application constraints.
              </p>
            </Reveal>

            {/* Engineering Signal */}
            <Reveal y={20} duration={0.8} delay={0.4}>
              <div className="engineering-signal-bar">
                <span className="signal-label">ENGINEERING SIGNAL:</span>
                <div className="signal-tags">
                  <span>AI</span>
                  <span className="sig-sep">&rarr;</span>
                  <span>AUTOMATION</span>
                  <span className="sig-sep">&rarr;</span>
                  <span>DECISION</span>
                </div>
              </div>
            </Reveal>

            {/* Verified Artifact Card */}
            <Reveal y={24} duration={0.9} delay={0.5}>
              <div className="artifact-card-container">
                <div className="ac-top-meta">
                  <span className="ac-badge">VERIFIED ARTIFACT</span>
                  <span className="ac-doc-num">DOCUMENTED EXPERIENCE / 03</span>
                </div>
                <button 
                  className="artifact-preview-btn"
                  onClick={() => openViewer(smartBridgeCert, "SmartBridge Software Engineering Certificate")}
                >
                  <img src={smartBridgeCert} alt="SmartBridge Certificate" className="artifact-img" loading="lazy" />
                  <div className="artifact-hover-overlay">
                    <span>VIEW ARTIFACT ↗</span>
                  </div>
                </button>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            ACT 05 — HELSON (STAGE 04 / 05 — SYSTEMS)
            ============================================================ */}
        <section id="helson" className="evo-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">STAGE 04 / 05 &middot; SYSTEMS &middot; 2024</span>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="company-name">HELSON</h2>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.15}>
                <span className="role-title">Enterprise Automation Intern</span>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-statement">
                "The feature was never the whole problem."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="chapter-desc">
                Worked with enterprise automation and workflow-oriented thinking, moving from isolated features toward connected processes and resilient system behavior.
              </p>
            </Reveal>

            {/* Architectural Flow Signal */}
            <Reveal y={20} duration={0.8} delay={0.4}>
              <div className="architectural-signal-flow">
                <span className="flow-step">INPUT</span>
                <span className="flow-arrow">&rarr;</span>
                <span className="flow-step">PROCESS</span>
                <span className="flow-arrow">&rarr;</span>
                <span className="flow-step">DECISION</span>
                <span className="flow-arrow">&rarr;</span>
                <span className="flow-step">OUTCOME</span>
              </div>
            </Reveal>

            {/* Verified Artifact Card */}
            <Reveal y={24} duration={0.9} delay={0.5}>
              <div className="artifact-card-container">
                <div className="ac-top-meta">
                  <span className="ac-badge">VERIFIED ARTIFACT</span>
                  <span className="ac-doc-num">DOCUMENTED EXPERIENCE / 04</span>
                </div>
                <button 
                  className="artifact-preview-btn"
                  onClick={() => openViewer(helsonCert, "Helson Enterprise Automation Certificate")}
                >
                  <img src={helsonCert} alt="Helson Certificate" className="artifact-img" loading="lazy" />
                  <div className="artifact-hover-overlay">
                    <span>VIEW ARTIFACT ↗</span>
                  </div>
                </button>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            ACT 06 — DATA VALLEY AI TECH SOLUTIONS (STAGE 05 / 05 — DEVELOPMENT + TRAINING)
            ============================================================ */}
        <section id="datavalley" className="evo-chapter current-role-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge badge-active">CURRENT ENGAGEMENT &middot; DATA VALLEY AI TECH SOLUTIONS</span>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="company-name">DATA VALLEY AI TECH SOLUTIONS</h2>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.15}>
                <span className="role-title highlight-role">Developer &amp; Technical Trainer</span>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-statement">
                "Working at the nexus of application development, applied AI systems, and technical education."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="chapter-desc">
                Based in Vijayawada, India. Responsible for developing Python backend services, REST APIs, and applied AI applications while designing curriculum and delivering hands-on technical training across Data Science, Machine Learning, and Generative AI.
              </p>
            </Reveal>

            {/* Categorized Responsibilities Grid */}
            <Reveal y={20} duration={0.8} delay={0.4}>
              <div style={{ marginTop: '40px', marginBottom: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                
                {/* 1. Software Development */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#007aff', textTransform: 'uppercase', marginBottom: '12px' }}>
                    01 / Software Development
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>Python &amp; Backend Engineering</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ fontSize: '14px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#007aff' }}>&bull;</span>
                      <span>Architecting backend services and REST APIs with Python (Flask / FastAPI) for application integration.</span>
                    </li>
                    <li style={{ fontSize: '14px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#007aff' }}>&bull;</span>
                      <span>Building modular components, utility functions, and clean data pipelines for analytical applications.</span>
                    </li>
                    <li style={{ fontSize: '14px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#007aff' }}>&bull;</span>
                      <span>Establishing code conventions, unit tests, and API documentation for maintainable codebases.</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Data Science & Applied AI/ML */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#34c759', textTransform: 'uppercase', marginBottom: '12px' }}>
                    02 / Data Science &amp; AI/ML
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>Data Pipelines &amp; Modeling</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ fontSize: '14px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#34c759' }}>&bull;</span>
                      <span>Building end-to-end data preprocessing, exploratory analysis, and feature engineering workflows with Pandas and NumPy.</span>
                    </li>
                    <li style={{ fontSize: '14px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#34c759' }}>&bull;</span>
                      <span>Training and evaluating supervised models (classification and regression) using Scikit-learn with rigorous cross-validation.</span>
                    </li>
                    <li style={{ fontSize: '14px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#34c759' }}>&bull;</span>
                      <span>Translating real-world problem statements into measurable machine learning benchmarks.</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Generative AI */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#af52de', textTransform: 'uppercase', marginBottom: '12px' }}>
                    03 / Generative AI
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>LLM Workflows &amp; Orchestration</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ fontSize: '14px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#af52de' }}>&bull;</span>
                      <span>Designing prompt engineering frameworks, structured output parsing, and few-shot conditioning workflows.</span>
                    </li>
                    <li style={{ fontSize: '14px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#af52de' }}>&bull;</span>
                      <span>Implementing secure proxy layers to connect web clients with LLM APIs (Gemini API) without leaking secrets.</span>
                    </li>
                    <li style={{ fontSize: '14px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#af52de' }}>&bull;</span>
                      <span>Exploring Retrieval-Augmented Generation (RAG) concepts, contextual embeddings, and agentic reasoning boundaries.</span>
                    </li>
                  </ul>
                </div>

                {/* 4. Technical Training */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#ff9500', textTransform: 'uppercase', marginBottom: '12px' }}>
                    04 / Technical Education
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>Curriculum &amp; Mentorship</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <li style={{ fontSize: '14px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#ff9500' }}>&bull;</span>
                      <span>Delivering structured training cohorts in Data Science, Python, Machine Learning, and Generative AI.</span>
                    </li>
                    <li style={{ fontSize: '14px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#ff9500' }}>&bull;</span>
                      <span>Developing progressive problem sets, live coding demos, and project assignments to reinforce core concepts.</span>
                    </li>
                    <li style={{ fontSize: '14px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#ff9500' }}>&bull;</span>
                      <span>Conducting code reviews, debugging guidance, and capstone project mentorship for students and trainees.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </Reveal>

            {/* Editorial Subsection */}
            <Reveal y={24} duration={0.9} delay={0.5}>
              <div style={{ marginTop: '48px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '40px' }}>
                <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.1em', color: '#666', display: 'block', marginBottom: '16px' }}>THE FEEDBACK LOOP: BUILDING × TEACHING</span>
                <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#111', fontWeight: '500', marginBottom: '16px', maxWidth: '800px' }}>
                  Engineering is about making systems work reliably. Teaching requires understanding why they work so completely that you can deconstruct them for someone else.
                </p>
                <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#444', maxWidth: '800px', marginBottom: '40px' }}>
                  At Data Valley AI Tech Solutions, building software keeps my curriculum rooted in actual implementation details, while teaching challenges me to write simpler, cleaner, and more defensible architecture.
                </p>
              </div>
            </Reveal>

            {/* Verified Artifact / Image Card */}
            <Reveal y={24} duration={0.9} delay={0.6}>
              <div className="artifact-card-container">
                <div className="ac-top-meta">
                  <span className="ac-badge">DOCUMENTED ENGAGEMENT</span>
                  <span className="ac-doc-num">Technical Mentorship / Data Valley AI Tech Solutions</span>
                </div>
                <button 
                  className="artifact-preview-btn"
                  onClick={() => openViewer(datavalleyImg, "Technical training and mentorship session at Data Valley AI Tech Solutions")}
                  style={{ background: '#f5f5f7', padding: 0 }}
                >
                  <img src={datavalleyImg} alt="Technical mentorship session at Data Valley AI Tech Solutions" className="artifact-img" loading="lazy" style={{ objectFit: 'cover', height: 'auto', maxHeight: '500px', width: '100%' }} />
                  <div className="artifact-hover-overlay">
                    <span>VIEW IMAGE ↗</span>
                  </div>
                </button>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            ACT 07 — TECHNICAL TALK CASE STUDY: PBR VITS, KAVALI
            ============================================================ */}
        <section id="pbr-vits" className="evo-chapter pbr-case-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">TECHNICAL TALK CASE STUDY &middot; PBR VITS, KAVALI</span>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="company-name">PBR VITS, KAVALI</h2>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.15}>
                <span className="role-title highlight-role">AI Innovation and Startup Opportunities</span>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-statement">
                "Simplifying complex AI concepts into practical systems thinking and startup opportunities for graduating engineers."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="chapter-desc">
                Invited by the Internal Quality Assurance Cell (IQAC) of Parvathareddy Babul Reddy Visvodaya Institute of Technology &amp; Science (Autonomous), Kavali, to deliver a specialized technical talk for IV-Year students in the Department of Artificial Intelligence and Machine Learning (AIML).
              </p>
            </Reveal>

            {/* Event Overview Grid */}
            <Reveal y={20} duration={0.8} delay={0.35}>
              <div className="pbr-fact-grid">
                <div className="pbr-fact-card">
                  <span className="pbr-fact-label">Institution</span>
                  <span className="pbr-fact-value">PBR VITS (Autonomous), Kavali</span>
                </div>
                <div className="pbr-fact-card">
                  <span className="pbr-fact-label">Department</span>
                  <span className="pbr-fact-value">Artificial Intelligence &amp; Machine Learning</span>
                </div>
                <div className="pbr-fact-card">
                  <span className="pbr-fact-label">Audience</span>
                  <span className="pbr-fact-value">IV-Year B.Tech AIML Students &amp; Faculty</span>
                </div>
                <div className="pbr-fact-card">
                  <span className="pbr-fact-label">Date &amp; Scope</span>
                  <span className="pbr-fact-value">October 10, 2026 &middot; Technical Talk</span>
                </div>
              </div>
            </Reveal>

            {/* Core Themes Covered */}
            <Reveal y={24} duration={0.9} delay={0.4}>
              <div className="pbr-themes-grid">
                <div className="pbr-theme-card">
                  <span className="pbr-theme-num">THEME 01</span>
                  <h3 className="pbr-theme-title">Practical AI Translation</h3>
                  <p className="pbr-theme-desc">
                    Moving from isolated academic models toward production-ready REST APIs, data ingestion pipelines, and resilient system boundaries.
                  </p>
                </div>
                <div className="pbr-theme-card">
                  <span className="pbr-theme-num">THEME 02</span>
                  <h3 className="pbr-theme-title">AI Startup Opportunities</h3>
                  <p className="pbr-theme-desc">
                    Identifying real domain friction in enterprise workflows and consumer software where focused AI applications create defensible value.
                  </p>
                </div>
                <div className="pbr-theme-card">
                  <span className="pbr-theme-num">THEME 03</span>
                  <h3 className="pbr-theme-title">Concept Simplification</h3>
                  <p className="pbr-theme-desc">
                    Demystifying neural network behaviors, prompt engineering patterns, and generative AI APIs into transparent, actionable engineering steps.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Dual Evidence Showcase: Authentic Classroom Photo + Appreciation Letter */}
            <div className="pbr-evidence-dual-grid">
              
              {/* Event Photograph with authentic context */}
              <Reveal y={24} duration={0.9} delay={0.45} className="pbr-media-card">
                <div className="pbr-media-card-header">
                  <span className="pbr-badge-blue">AUTHENTIC EVENT EVIDENCE</span>
                  <span style={{ fontSize: '11px', color: '#86868b', fontWeight: '600' }}>SEMINAR HALL &bull; PBR VITS</span>
                </div>
                <button 
                  className="pbr-media-container"
                  onClick={() => openViewer(pbrTalkPhoto, "Students attending the AI Innovation and Startup Opportunities technical talk at PBR VITS, Kavali")}
                  type="button"
                  aria-label="Enlarge event photograph"
                >
                  <img 
                    src={pbrTalkPhoto} 
                    alt="Students attending the AI Innovation and Startup Opportunities technical talk at PBR VITS, Kavali, on October 10, 2026." 
                    className="pbr-media-img" 
                    loading="lazy" 
                  />
                  <div className="artifact-hover-overlay">
                    <span>ENLARGE PHOTO ↗</span>
                  </div>
                </button>
                <div className="pbr-media-caption">
                  <span>Interactive technical talk with IV-year AIML students in the college seminar hall.</span>
                  <button 
                    className="pbr-doc-action-btn"
                    onClick={() => openViewer(pbrTalkPhoto, "Students attending the AI Innovation and Startup Opportunities technical talk at PBR VITS, Kavali")}
                    type="button"
                  >
                    <span>View Fullscreen</span>
                  </button>
                </div>
              </Reveal>

              {/* Official Appreciation Letter */}
              <Reveal y={24} duration={0.9} delay={0.5} className="pbr-media-card">
                <div className="pbr-media-card-header">
                  <span className="pbr-badge-green">OFFICIAL RECOGNITION</span>
                  <span style={{ fontSize: '11px', color: '#86868b', fontWeight: '600' }}>IQAC &bull; OCT 10, 2026</span>
                </div>
                <button 
                  className="pbr-media-container"
                  onClick={() => setIsLetterModalOpen(true)}
                  type="button"
                  aria-label="Inspect official Letter of Appreciation in document viewer"
                >
                  <img 
                    src={pbrLetterImg} 
                    alt="Appreciation letter issued by the Internal Quality Assurance Cell of PBR VITS for the AI Innovation and Startup Opportunities technical talk." 
                    className="pbr-doc-img" 
                    loading="lazy" 
                  />
                  <div className="artifact-hover-overlay">
                    <span>INSPECT DOCUMENT ↗</span>
                  </div>
                </button>
                <div className="pbr-media-caption">
                  <span>Formal Letter of Appreciation from IQAC, signed by the Principal.</span>
                  <button 
                    className="pbr-doc-action-btn"
                    onClick={() => setIsLetterModalOpen(true)}
                    type="button"
                  >
                    <FileText size={12} />
                    <span>QuickLook Document</span>
                  </button>
                </div>
              </Reveal>

            </div>

            {/* Professional Reflection / Takeaway */}
            <Reveal y={20} duration={0.9} delay={0.55}>
              <div style={{ marginTop: '32px', padding: '24px 28px', background: '#fbfbfd', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.06)' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em', color: '#86868b', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  PROFESSIONAL TAKEAWAY &middot; TECHNICAL TRAINING
                </span>
                <p style={{ fontSize: '15px', color: '#333333', lineHeight: '1.6', margin: 0 }}>
                  "Technical training is at its best when it demystifies complex technology. For final-year engineering students preparing for industry, understanding how to transition from academic algorithms to practical, user-facing AI applications is the foundation for both strong engineering careers and genuine startup innovation."
                </p>
              </div>
            </Reveal>

          </div>
        </section>


        {/* ============================================================
            ACT 08 — PACE COLLEGE CASE STUDY (TEACHING CASE STUDY)
            ============================================================ */}
        <section className="evo-chapter pace-case-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">FIELD WORKSHOP &middot; PACE INSTITUTE OF TECHNOLOGY AND SCIENCES</span>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="company-name">ONGOLE WORKSHOP</h2>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.15}>
                <span className="role-title">Prompt Engineering × Generative AI</span>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-statement">
                "Teaching AI is not just explaining models. It is teaching people how to reason and build with them."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="chapter-desc">
                Conducted an intensive hands-on technical workshop for undergraduate engineering students at PACE Institute of Technology and Sciences in Ongole. Delivered structured instruction on prompt engineering taxonomies, zero-shot and few-shot patterns, LLM API integration techniques, and real-world failure mode mitigation.
              </p>
            </Reveal>

            <ScaleReveal className="pace-image-wrapper">
              <img src={paceImg} alt="Generative AI & Prompt Engineering Workshop at PACE Institute of Technology and Sciences" className="pace-image" loading="lazy" />
            </ScaleReveal>

            <Reveal y={20} duration={0.8} delay={0.4}>
              <div className="pace-meta-row">
                <span className="pm-tag">UNDERGRADUATE WORKSHOP</span>
                <span className="pm-tag">CSE &middot; AI&amp;DS &middot; AI&amp;ML</span>
                <span className="pm-tag">PROMPT ENGINEERING &middot; GENERATIVE AI APIS</span>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            ACT 08 — MINIMAL CLOSING
            ============================================================ */}
        <section className="exp-closing-section" data-nav-theme="light">
          <div className="evo-bounds text-center">
            
            <Reveal y={24} duration={1.0}>
              <h2 className="closing-headline">
                Different roles.<br />
                One direction.
              </h2>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.2}>
              <div className="closing-stage-path">
                <span>DATA</span>
                <span className="csp-arrow">&rarr;</span>
                <span>PRODUCT</span>
                <span className="csp-arrow">&rarr;</span>
                <span>INTELLIGENCE</span>
                <span className="csp-arrow">&rarr;</span>
                <span>SYSTEMS</span>
                <span className="csp-arrow">&rarr;</span>
                <span className="csp-highlight">DEVELOPMENT + TEACHING</span>
              </div>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.35}>
              <p className="closing-subtext">
                Still building. Still teaching. Still evolving.
              </p>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.5}>
              <div className="closing-signature-meta">
                THE NAME IS BHAGAVAN<br />
                ENGINEERING EVOLUTION &middot; 2022 — PRESENT
              </div>
            </Reveal>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

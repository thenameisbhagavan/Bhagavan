import React, { useState, useEffect } from "react";
import { X, ArrowRight, ExternalLink, FileText, CheckCircle2, Terminal, Code2, Server, Database, Brain, Sparkles, ShieldCheck, Clock } from "lucide-react";
import { Link } from "react-router-dom";
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
import dvAssessmentImg from "../assets/datavalley-assessment-platform.png";
import dvLabsHeroImg from "../assets/dvlabs-hero.jpg";

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
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const openViewer = (src, alt) => setViewerState({ isOpen: true, src, alt });
  const closeViewer = () => setViewerState((prev) => ({ ...prev, isOpen: false }));

  // Update active stage indicator on scroll with rAF batching
  useEffect(() => {
    let rafId = null;
    const stages = ["software-dev", "technical-training", "pbr-vits", "pace-ongole", "internships"];

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const scrollPos = window.scrollY + window.innerHeight * 0.35;

        for (let i = stages.length - 1; i >= 0; i--) {
          const el = document.getElementById(stages[i]);
          if (el && el.offsetTop <= scrollPos) {
            const nextKey = `0${i + 1}`;
            setActiveStage((prev) => (prev !== nextKey ? nextKey : prev));
            break;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
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
        title="Experience | TheNameIsBhagavan"
        description="Professional engineering & technical training experience of Bhagavan (TheNameIsBhagavan). Software Developer & Technical Trainer at Data Valley AI Tech Solutions. Software development, AI/ML systems, Generative AI, and technical training."
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
            { id: "01", label: "SOFTWARE DEV", target: "software-dev" },
            { id: "02", label: "TECH TRAINING", target: "technical-training" },
            { id: "03", label: "PBR VITS TALK", target: "pbr-vits" },
            { id: "04", label: "PACE WORKSHOP", target: "pace-ongole" },
            { id: "05", label: "INTERNSHIPS", target: "internships" }
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
            ACT 01 — HERO (ENGINEERING & TRAINING DUAL IDENTITY)
            ============================================================ */}
        <section className="exp-evolution-hero" data-nav-theme="light">
          <div className="evo-bounds">
            
            <Reveal y={16} duration={0.8}>
              <div className="hero-eyebrow">
                <span className="hero-badge">PROFESSIONAL PRACTICE &middot; DATA VALLEY AI TECH SOLUTIONS</span>
              </div>
            </Reveal>

            <MaskReveal duration={1.1} delay={0.1}>
              <h1 className="hero-headline">
                Engineering Real Systems.<br />
                Teaching How They Work.
              </h1>
            </MaskReveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="hero-sub">
                A dual professional practice grounded in production software engineering and applied AI systems, complemented by high-impact technical training across Python, Data Science, Machine Learning, and Generative AI at Data Valley AI Tech Solutions.
              </p>
            </Reveal>

            {/* Stage Path Roadmap Bar */}
            <Reveal y={16} duration={0.8} delay={0.5}>
              <div className="hero-stage-roadmap">
                <span className="rm-current">01 / SOFTWARE DEVELOPMENT</span>
                <span className="rm-arrow">&rarr;</span>
                <span>02 / TECHNICAL TRAINING</span>
                <span className="rm-arrow">&rarr;</span>
                <span>03 / ACADEMIC TALKS</span>
                <span className="rm-arrow">&rarr;</span>
                <span>04 / FIELD WORKSHOPS</span>
                <span className="rm-arrow">&rarr;</span>
                <span>05 / INTERNSHIP ARCHIVE</span>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            ACT 02 — PILLAR 01: SOFTWARE DEVELOPMENT (PRIMARY DIRECTION)
            ============================================================ */}
        <section id="software-dev" className="evo-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge badge-active">PRIMARY PROFESSIONAL DIRECTION &middot; SOFTWARE DEVELOPMENT</span>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="company-name">AI SOLUTIONS ENGINEERING</h2>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.15}>
                <span className="role-title highlight-role">AI Solutions Developer &middot; Data Valley AI Tech Solutions</span>
                <span style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#86868b', marginTop: '4px', letterSpacing: '0.04em' }}>
                  JUNE 2024 &ndash; PRESENT &bull; VIJAYAWADA, ANDHRA PRADESH
                </span>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-statement">
                "Production software requires resilient architecture, deterministic behavior, and zero client-side compromises."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="chapter-desc">
                Engineering software applications, backend microservices, and applied AI systems at Data Valley AI Tech Solutions in Vijayawada. I design and build production-grade web applications, Python backend services, database architectures, and secure API gateways that interface modern web frontends with intelligent machine learning models.
              </p>
            </Reveal>

            {/* Engineering Signal */}
            <Reveal y={20} duration={0.8} delay={0.35}>
              <div className="engineering-signal-bar">
                <span className="signal-label">CORE ENGINEERING SIGNAL:</span>
                <div className="signal-tags">
                  <span>ARCHITECTURE</span>
                  <span className="sig-sep">&rarr;</span>
                  <span>PYTHON BACKEND</span>
                  <span className="sig-sep">&rarr;</span>
                  <span>REACT 19 / NEXT.JS</span>
                  <span className="sig-sep">&rarr;</span>
                  <span>DATABASE PERSISTENCE</span>
                  <span className="sig-sep">&rarr;</span>
                  <span>AI GATEWAYS</span>
                </div>
              </div>
            </Reveal>

            {/* ============================================================
                DV LABS — ONGOING FLAGSHIP COMPANY PROJECT SHOWCASE
                ============================================================ */}
            <Reveal y={24} duration={0.9} delay={0.4}>
              <div className="exp-dvlabs-showcase">
                <div className="exp-dvlabs-header">
                  <div className="exp-dvlabs-meta-row">
                    <span className="exp-dvlabs-live-badge">
                      <span className="exp-dvlabs-pulse-dot" aria-hidden="true"></span>
                      COMPANY PROJECT &middot; ONGOING DEVELOPMENT
                    </span>
                    <span className="exp-dvlabs-company-tag">DATA VALLEY AI TECH SOLUTIONS</span>
                  </div>

                  <div className="exp-dvlabs-brand-title">
                    <span className="exp-dvlabs-brand-mark" aria-hidden="true">D</span>
                    <h3 className="exp-dvlabs-name">
                      DV <span className="serif-accent">Labs</span>
                    </h3>
                  </div>

                  <h4 className="exp-dvlabs-tagline">
                    "Where vision meets execution."
                  </h4>
                  <p className="exp-dvlabs-subline">
                    Milestone-locked projects. Defended in viva. Built for the real world. A flagship company engineering platform at Data Valley AI Tech Solutions bridging academic learning with production engineering rigor.
                  </p>
                </div>

                <div className="exp-dvlabs-content-grid">
                  {/* Left Column: Atmospheric Brand Visual from Landing Page */}
                  <div className="exp-dvlabs-visual-container">
                    <img
                      src={dvLabsHeroImg}
                      alt="DV Labs — Where vision meets execution. Milestone-locked projects defended in viva."
                      className="exp-dvlabs-visual-img"
                      loading="lazy"
                    />
                    <div className="exp-dvlabs-visual-overlay">
                      <div className="exp-dvlabs-visual-label">PRODUCTION ECOSYSTEM &middot; DATA VALLEY LABS</div>
                      <p className="exp-dvlabs-visual-caption">
                        Milestone-gated project progression &middot; AI-powered oral viva defense &middot; Timed assessment delivery
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Core Product Pillars & Contributions */}
                  <div className="exp-dvlabs-details-col">
                    <div className="exp-dvlabs-pill-list">
                      <div className="exp-dvlabs-pill-item">
                        <div className="exp-dvlabs-pill-icon">
                          <ShieldCheck size={16} />
                        </div>
                        <div>
                          <h5 className="exp-dvlabs-pill-title">Milestone-Locked Engineering</h5>
                          <p className="exp-dvlabs-pill-desc">
                            Structured project phases gated by automated verification; subsequent architectural tiers unlock only after code requirements pass.
                          </p>
                        </div>
                      </div>

                      <div className="exp-dvlabs-pill-item">
                        <div className="exp-dvlabs-pill-icon">
                          <Brain size={16} />
                        </div>
                        <div>
                          <h5 className="exp-dvlabs-pill-title">AI Viva Defense System</h5>
                          <p className="exp-dvlabs-pill-desc">
                            Automated oral defense interrogations testing candidates on their architectural decisions, algorithm trade-offs, and code mechanics.
                          </p>
                        </div>
                      </div>

                      <div className="exp-dvlabs-pill-item">
                        <div className="exp-dvlabs-pill-icon">
                          <Clock size={16} />
                        </div>
                        <div>
                          <h5 className="exp-dvlabs-pill-title">Practical Assessment Engine</h5>
                          <p className="exp-dvlabs-pill-desc">
                            40-question technical challenge canvas with live countdown timer, auto-sync answer persistence, and tamper-proof server-side scoring.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Verified Contribution Attribution */}
                    <div className="exp-dvlabs-contrib-box">
                      <div className="exp-dvlabs-contrib-title">My Technical Contribution</div>
                      <p className="exp-dvlabs-contrib-text">
                        <strong>Role:</strong> AI Solutions Developer | Full-Stack Development &amp; AI Systems.<br />
                        I engineered the full-stack web application end-to-end (Next.js App Router, React 19, TypeScript, MongoDB Atlas), designed the state persistence and background sync pipeline, implemented deterministic server-side evaluation, and architected the AI viva questioning workflows.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="exp-dvlabs-footer">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666668', fontSize: '13px' }}>
                    <CheckCircle2 size={15} style={{ color: '#34c759' }} />
                    <span>Proprietary Company Project of Data Valley AI Tech Solutions &middot; Actively Maintained</span>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <Link to="/work/dv-labs-platform" className="work-btn-primary" style={{ padding: '8px 16px', fontSize: '12.5px' }}>
                      <span>DV LABS PLATFORM &rarr;</span>
                    </Link>
                    <Link to="/work/data-valley-assessment-platform" className="work-btn-secondary" style={{ padding: '8px 16px', fontSize: '12.5px' }}>
                      <span>ASSESSMENT CASE STUDY &rarr;</span>
                    </Link>
                    <a
                      href="https://dv-assesments.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-btn-secondary"
                      style={{ padding: '8px 16px', fontSize: '12.5px' }}
                    >
                      <span>LIVE ENGINE &#8599;</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Core Development Responsibilities Grid */}
            <Reveal y={24} duration={0.9} delay={0.45}>
              <div style={{ marginTop: '36px', marginBottom: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                
                {/* 1. Enterprise Web App */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '26px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#007aff', textTransform: 'uppercase', marginBottom: '12px' }}>
                    01 / Application Engineering
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>Data Valley Assessment Platform</h3>
                  <p style={{ fontSize: '14px', color: '#555558', lineHeight: '1.6', marginBottom: '14px' }}>
                    Engineered an end-to-end technical assessment web application (<a href="https://dv-assesments.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#007aff', textDecoration: 'none', fontWeight: '600' }}>dv-assesments.vercel.app</a>) using Next.js App Router, React 19, TypeScript, and MongoDB Atlas.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#007aff' }}>&bull;</span>
                      <span>Secure HTTP-only session binding directly to assessment instances.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#007aff' }}>&bull;</span>
                      <span>Continuous background answer synchronization via <code>/api/assessment/sync</code>.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#007aff' }}>&bull;</span>
                      <span>100% server-side deterministic score calculation preventing client-side tampering.</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Python Backend & APIs */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '26px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#34c759', textTransform: 'uppercase', marginBottom: '12px' }}>
                    02 / Backend Engineering
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>Python Backend Services &amp; REST APIs</h3>
                  <p style={{ fontSize: '14px', color: '#555558', lineHeight: '1.6', marginBottom: '14px' }}>
                    Architected modular backend services using FastAPI and Flask, constructing high-throughput API endpoints, middleware validation, and structured request routing.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#34c759' }}>&bull;</span>
                      <span>Built data ingestion pipelines and ETL processing utilities with Pandas and NumPy.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#34c759' }}>&bull;</span>
                      <span>Configured MongoDB Atlas and MySQL schemas for reliable data persistence.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#34c759' }}>&bull;</span>
                      <span>Established automated testing, error recovery protocols, and clean API docs.</span>
                    </li>
                  </ul>
                </div>

                {/* 3. AI Gateway & LLM Orchestration */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '26px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#af52de', textTransform: 'uppercase', marginBottom: '12px' }}>
                    03 / Applied AI Systems
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>AI Gateway &amp; Model Integration</h3>
                  <p style={{ fontSize: '14px', color: '#555558', lineHeight: '1.6', marginBottom: '14px' }}>
                    Implemented secure stateless proxy architectures bridging client frontends with upstream LLM APIs (Google Gemini API) without exposing secrets to client bundles.
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#af52de' }}>&bull;</span>
                      <span>Structured output schemas, prompt token optimization, and zero/few-shot conditioning.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#af52de' }}>&bull;</span>
                      <span>Context preservation, session memory management, and deterministic fallbacks.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#af52de' }}>&bull;</span>
                      <span>Scikit-learn classification pipelines cross-validated on benchmark datasets.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </Reveal>

            {/* Featured System Link & Evidence Card */}
            <Reveal y={24} duration={0.9} delay={0.5}>
              <div className="artifact-card-container">
                <div className="ac-top-meta">
                  <span className="ac-badge">PRODUCTION DEPLOYMENT &middot; DATA VALLEY AI TECH SOLUTIONS</span>
                  <span className="ac-doc-num">LIVE SYSTEM</span>
                </div>
                <div style={{ padding: '20px', background: '#f5f5f7', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#111111', margin: '0 0 4px 0' }}>Data Valley Engineering Assessment Platform</h4>
                    <p style={{ fontSize: '13.5px', color: '#666666', margin: 0 }}>Next.js App Router &middot; React 19 &middot; TypeScript &middot; MongoDB Atlas &middot; Server Scoring</p>
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <Link to="/work/data-valley-assessment-platform" className="work-btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                      <span>CASE STUDY ↗</span>
                    </Link>
                    <a href="https://dv-assesments.vercel.app/" target="_blank" rel="noopener noreferrer" className="work-btn-secondary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                      <span>LIVE APPLICATION ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </section>


        {/* ============================================================
            ACT 03 — PILLAR 02: TECHNICAL TRAINING & EDUCATION
            ============================================================ */}
        <section id="technical-training" className="evo-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge badge-active">SECONDARY PROFESSIONAL DIRECTION &middot; TECHNICAL EDUCATION</span>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="company-name">TECHNICAL TRAINING &amp; MENTORSHIP</h2>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.15}>
                <span className="role-title highlight-role">Technical Trainer &middot; Data Valley AI Tech Solutions</span>
                <span style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: '#86868b', marginTop: '4px', letterSpacing: '0.04em' }}>
                  JUNE 2024 &ndash; PRESENT &bull; VIJAYAWADA, ANDHRA PRADESH
                </span>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-statement">
                "Teaching technology forces you to deconstruct complexity until every layer is transparent."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="chapter-desc">
                Serving as Technical Trainer at Data Valley AI Tech Solutions since June 2024, delivering comprehensive technical instruction, designing progressive curricula, and conducting hands-on workshops across Data Science, Machine Learning, Python, and Generative AI for students and trainees.
              </p>
            </Reveal>

            {/* Categorized Training Responsibilities Grid (6 Core Verified Areas) */}
            <Reveal y={20} duration={0.8} delay={0.4}>
              <div style={{ marginTop: '36px', marginBottom: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                
                {/* 1. Python & Core Programming */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#ff9500', textTransform: 'uppercase', marginBottom: '12px' }}>
                    01 / Python &amp; Programming Instruction
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>Python &amp; Core Engineering</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#ff9500' }}>&bull;</span>
                      <span>Structured cohorts covering Python fundamentals, OOP, data structures, and algorithmic logic.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#ff9500' }}>&bull;</span>
                      <span>Live coding sessions demonstrating modular package design and clean refactoring principles.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#ff9500' }}>&bull;</span>
                      <span>Instilling automated unit testing, PEP-8 compliance, and defensive programming habits.</span>
                    </li>
                  </ul>
                </div>

                {/* 2. Data Science & Applied AI/ML */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#34c759', textTransform: 'uppercase', marginBottom: '12px' }}>
                    02 / Data Science &amp; Machine Learning
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>Data Science &amp; Applied ML</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#34c759' }}>&bull;</span>
                      <span>Hands-on training in Pandas, NumPy, and Scikit-learn exploratory analysis pipelines.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#34c759' }}>&bull;</span>
                      <span>Supervised learning models (classification, regression) with mathematical cross-validation.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#34c759' }}>&bull;</span>
                      <span>Feature transformation, outlier mitigation, and statistical performance benchmarking.</span>
                    </li>
                  </ul>
                </div>

                {/* 3. Generative AI & Agentic AI */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#af52de', textTransform: 'uppercase', marginBottom: '12px' }}>
                    03 / Generative &amp; Agentic AI
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>Generative AI &amp; Agentic Systems</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#af52de' }}>&bull;</span>
                      <span>Designing prompt construction patterns, structured JSON extraction, and few-shot conditioning.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#af52de' }}>&bull;</span>
                      <span>Teaching practical LLM API integration (Gemini API) and secure backend proxy bridges.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#af52de' }}>&bull;</span>
                      <span>Explaining Retrieval-Augmented Generation (RAG), vector embeddings, and agent tool execution.</span>
                    </li>
                  </ul>
                </div>

                {/* 4. Curriculum Planning & Content */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#007aff', textTransform: 'uppercase', marginBottom: '12px' }}>
                    04 / Curriculum Architecture
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>Curriculum Planning &amp; Content</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#007aff' }}>&bull;</span>
                      <span>Authoring structured course modules, step-by-step laboratory guides, and progressive code repos.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#007aff' }}>&bull;</span>
                      <span>Aligning instructional syllabi with real-world developer requirements and industry expectations.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#007aff' }}>&bull;</span>
                      <span>Developing standardized assessment rubrics and practical coding evaluation benchmarks.</span>
                    </li>
                  </ul>
                </div>

                {/* 5. Student Mentorship & Guidance */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#5856d6', textTransform: 'uppercase', marginBottom: '12px' }}>
                    05 / Practical Mentorship
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>Student Mentoring &amp; Guidance</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#5856d6' }}>&bull;</span>
                      <span>One-on-one technical debugging assistance, code reviews, and architectural problem-solving.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#5856d6' }}>&bull;</span>
                      <span>Guiding students through real-world capstone projects from data acquisition to working demo.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#5856d6' }}>&bull;</span>
                      <span>Bridging classroom theory with engineering portfolios, interview readiness, and systems thinking.</span>
                    </li>
                  </ul>
                </div>

                {/* 6. AI Demos & Live Workshops */}
                <div style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '11px', fontWeight: '700', letterSpacing: '0.08em', color: '#e50914', textTransform: 'uppercase', marginBottom: '12px' }}>
                    06 / Applied Demonstrations
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: '600', color: '#111111', margin: '0 0 12px 0' }}>AI Application Demonstrations</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#e50914' }}>&bull;</span>
                      <span>Conducting live technical workshops and demonstrations of intelligent tools and NLP pipelines.</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#e50914' }}>&bull;</span>
                      <span>Demonstrating end-to-end applications (e.g. Data Valley Assessment Platform, CareerOS, AuraOS).</span>
                    </li>
                    <li style={{ fontSize: '13.5px', color: '#444444', lineHeight: '1.5', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#e50914' }}>&bull;</span>
                      <span>Inspiring engineering cohorts to build production-oriented AI systems rather than shallow wrappers.</span>
                    </li>
                  </ul>
                </div>

              </div>
            </Reveal>

            {/* Documented Session Photo Card */}
            <Reveal y={24} duration={0.9} delay={0.5}>
              <div className="artifact-card-container">
                <div className="ac-top-meta">
                  <span className="ac-badge">DOCUMENTED ENGAGEMENT</span>
                  <span className="ac-doc-num">Technical Mentorship &middot; Data Valley AI Tech Solutions</span>
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
            ACT 04 — CASE STUDY 01: PBR VITS, KAVALI (TECHNICAL TALK)
            ============================================================ */}
        <section id="pbr-vits" className="evo-chapter pbr-case-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">ACADEMIC TECHNICAL TALK &middot; PBR VITS, KAVALI</span>
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
                Invited by the Internal Quality Assurance Cell (IQAC) of Parvathareddy Babul Reddy Visvodaya Institute of Technology &amp; Science (Autonomous), Kavali, to deliver a specialized technical session for IV-Year students in the Department of Artificial Intelligence and Machine Learning (AIML).
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

            {/* Dual Evidence Showcase: Event Photo + Appreciation Letter */}
            <div className="pbr-evidence-dual-grid">
              
              {/* Event Photograph */}
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

          </div>
        </section>


        {/* ============================================================
            ACT 05 — CASE STUDY 02: PACE COLLEGE OF ENGINEERING, ONGOLE
            ============================================================ */}
        <section id="pace-ongole" className="evo-chapter pace-case-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">TECHNICAL WORKSHOP CASE STUDY &middot; PACE INSTITUTE OF TECHNOLOGY &amp; SCIENCES</span>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="company-name">PACE INSTITUTE OF TECHNOLOGY &amp; SCIENCES</h2>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.15}>
                <span className="role-title highlight-role">Prompt Engineering &times; Generative AI (300-Student Workshop)</span>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-statement">
                "Teaching AI is not just explaining models. It is teaching engineers how to reason, construct prompts, and build applications with them."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="chapter-desc">
                Conducted an intensive hands-on technical workshop for <strong>300 undergraduate engineering students</strong> across Computer Science &amp; Engineering (CSE), Artificial Intelligence &amp; Data Science (AI&amp;DS), and Artificial Intelligence &amp; Machine Learning (AI&amp;ML) departments at PACE Institute of Technology &amp; Sciences in Ongole. Delivered structured instruction on prompt construction patterns, zero-shot and few-shot conditioning, LLM API integration techniques, and real-world failure mode mitigation.
              </p>
            </Reveal>

            <ScaleReveal className="pace-image-wrapper">
              <img src={paceImg} alt="Generative AI & Prompt Engineering Workshop for 300 students at PACE Institute of Technology and Sciences, Ongole" className="pace-image" loading="lazy" />
            </ScaleReveal>

            <Reveal y={20} duration={0.8} delay={0.4}>
              <div className="pace-meta-row">
                <span className="pm-tag">300-STUDENT AUDIENCE</span>
                <span className="pm-tag">CSE &middot; AI&amp;DS &middot; AI&amp;ML DEPARTMENTS</span>
                <span className="pm-tag">PROMPT ENGINEERING TAXONOMIES</span>
                <span className="pm-tag">GENERATIVE AI APIS &amp; PROXIES</span>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            ACT 06 — DOCUMENTED INTERNSHIPS ARCHIVE
            ============================================================ */}
        <section id="internships" className="evo-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">FOUNDATIONAL ENGINEERING ARCHIVE &middot; 2024</span>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="company-name">ENGINEERING INTERNSHIPS</h2>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.15}>
                <span className="role-title">Verified Technical Contributions &amp; Artifacts</span>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-statement">
                "Early technical internships established strong discipline in data pipelines, full-stack product development, neural networks, and business automation."
              </blockquote>
            </Reveal>

            {/* 4 Internships Cards Grid with QuickLook */}
            <div style={{ marginTop: '40px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              
              {/* StudyOwl */}
              <Reveal y={24} duration={0.8} className="artifact-card-container">
                <div className="ac-top-meta">
                  <span className="ac-badge">SOFTWARE DEVELOPMENT INTERN</span>
                  <span className="ac-doc-num">2024</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111111', margin: '12px 0 6px 0' }}>StudyOwl Education</h3>
                <p style={{ fontSize: '13.5px', color: '#666666', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                  Contributed to React frontend and Node.js backend integration. Built reusable UI components and integrated RESTful APIs.
                </p>
                <button 
                  className="artifact-preview-btn"
                  onClick={() => openViewer(studyOwlCert, "StudyOwl Software Development Internship Certificate")}
                  style={{ background: '#f5f5f7' }}
                >
                  <img src={studyOwlCert} alt="StudyOwl Certificate" className="artifact-img" loading="lazy" />
                  <div className="artifact-hover-overlay">
                    <span>VIEW CERTIFICATE ↗</span>
                  </div>
                </button>
              </Reveal>

              {/* SmartBridge */}
              <Reveal y={24} duration={0.8} delay={0.1} className="artifact-card-container">
                <div className="ac-top-meta">
                  <span className="ac-badge">SOFTWARE ENGINEERING INTERN</span>
                  <span className="ac-doc-num">2024</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111111', margin: '12px 0 6px 0' }}>SmartBridge</h3>
                <p style={{ fontSize: '13.5px', color: '#666666', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                  Developed CNN-based image classification models using TensorFlow and Keras. Deployed trained models via Flask microservices.
                </p>
                <button 
                  className="artifact-preview-btn"
                  onClick={() => openViewer(smartBridgeCert, "SmartBridge Software Engineering Certificate")}
                  style={{ background: '#f5f5f7' }}
                >
                  <img src={smartBridgeCert} alt="SmartBridge Certificate" className="artifact-img" loading="lazy" />
                  <div className="artifact-hover-overlay">
                    <span>VIEW CERTIFICATE ↗</span>
                  </div>
                </button>
              </Reveal>

              {/* Blackbucks */}
              <Reveal y={24} duration={0.8} delay={0.15} className="artifact-card-container">
                <div className="ac-top-meta">
                  <span className="ac-badge">MACHINE LEARNING INTERN</span>
                  <span className="ac-doc-num">2024</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111111', margin: '12px 0 6px 0' }}>Blackbucks</h3>
                <p style={{ fontSize: '13.5px', color: '#666666', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                  Performed data preprocessing, feature engineering, and model training pipelines with Scikit-learn on structured datasets.
                </p>
                <button 
                  className="artifact-preview-btn"
                  onClick={() => openViewer(blackbucksCert, "Blackbucks Machine Learning Internship Certificate")}
                  style={{ background: '#f5f5f7' }}
                >
                  <img src={blackbucksCert} alt="Blackbucks Certificate" className="artifact-img" loading="lazy" />
                  <div className="artifact-hover-overlay">
                    <span>VIEW CERTIFICATE ↗</span>
                  </div>
                </button>
              </Reveal>

              {/* Helson */}
              <Reveal y={24} duration={0.8} delay={0.2} className="artifact-card-container">
                <div className="ac-top-meta">
                  <span className="ac-badge">ENTERPRISE AUTOMATION INTERN</span>
                  <span className="ac-doc-num">2024</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#111111', margin: '12px 0 6px 0' }}>Helson</h3>
                <p style={{ fontSize: '13.5px', color: '#666666', lineHeight: '1.5', margin: '0 0 16px 0' }}>
                  Constructed business process workflows and enterprise automation systems using Microsoft PowerApps and Power Automate.
                </p>
                <button 
                  className="artifact-preview-btn"
                  onClick={() => openViewer(helsonCert, "Helson Enterprise Automation Certificate")}
                  style={{ background: '#f5f5f7' }}
                >
                  <img src={helsonCert} alt="Helson Certificate" className="artifact-img" loading="lazy" />
                  <div className="artifact-hover-overlay">
                    <span>VIEW CERTIFICATE ↗</span>
                  </div>
                </button>
              </Reveal>

            </div>

          </div>
        </section>


        {/* ============================================================
            ACT 07 — MINIMAL CLOSING
            ============================================================ */}
        <section className="exp-closing-section" data-nav-theme="light">
          <div className="evo-bounds text-center">
            
            <Reveal y={24} duration={1.0}>
              <h2 className="closing-headline">
                Engineering Depth.<br />
                Educational Rigor.
              </h2>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.2}>
              <div className="closing-stage-path">
                <span>SYSTEM ARCHITECTURE</span>
                <span className="csp-arrow">&rarr;</span>
                <span>PRODUCTION DEPLOYMENTS</span>
                <span className="csp-arrow">&rarr;</span>
                <span className="csp-highlight">DEVELOPMENT + TECHNICAL EDUCATION</span>
              </div>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.35}>
              <p className="closing-subtext">
                Still building software. Still teaching engineers.
              </p>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.5}>
              <div className="closing-signature-meta">
                THE NAME IS BHAGAVAN<br />
                PROFESSIONAL PRACTICE &middot; 2024 — PRESENT
              </div>
            </Reveal>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

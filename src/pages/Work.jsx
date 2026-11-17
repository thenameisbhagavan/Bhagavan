import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import SEO from "../components/SEO";
import BrandSignature from "../components/BrandSignature";
import Reveal from "../components/motion/Reveal";
import MaskReveal from "../components/motion/MaskReveal";
import ScaleReveal from "../components/motion/ScaleReveal";
import Parallax from "../components/motion/Parallax";
import MagneticLink from "../components/motion/MagneticLink";
import { socialLinks } from "../constants/socialLinks";
import "../styles/Work.css";

// ─── Images ───────────────────────────────────────────────────────────────────
import careerOSImg from "../assets/careeros-new.jpg";
import voltDriveImg from "../assets/ev.png";
import chatImg from "../assets/aurabot-new.png";
import fakeImg from "../assets/fake.jpg";
import agrivisionImg from "../assets/agrivision.png";
import dvAssessmentImg from "../assets/datavalley-assessment-platform.png";
import dvLabsHeroImg from "../assets/dvlabs-hero.jpg";
import atsResumeImg from "../assets/resume.jpg";
import chatProxyImg from "../assets/chat.jpeg";

export const FLAGSHIP_PROJECTS = [
  {
    id: "dv-labs-platform",
    name: "DV Labs Platform",
    category: "COMPANY PROJECT · ONGOING",
    categoryType: "company",
    tagline: "Where vision meets execution.",
    desc: "A Data Valley company development initiative designed to transform engineering capstone development through AI-powered mentorship, research intelligence, structured project engineering, technical evaluation, and career readiness.",
    img: dvLabsHeroImg,
    link: "/work/dv-labs-platform",
    live: "https://dvlabs.datavalley.ai/"
  },
  {
    id: "data-valley-assessment-platform",
    name: "DV Labs Assessment Platform",
    category: "COMPANY PROJECT · IN DEVELOPMENT",
    categoryType: "company",
    tagline: "Candidate evaluation platform with live timers and server-side evaluation.",
    desc: "40 structured technical challenges with synchronized countdown timers, background delta auto-sync, and 100% tamper-proof server-side scoring.",
    img: dvAssessmentImg,
    link: "/work/data-valley-assessment-platform",
    live: "https://dv-assesments.vercel.app/"
  },
  { id: "careeros", name: "CareerOS", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Career Intelligence Platform", desc: "An intelligence layer for career trajectory.", img: careerOSImg, link: "/work/careeros", live: "https://careeros-thenameisbhagavan.vercel.app/" },
  { id: "auraos", name: "AuraOS", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Personal Intelligence OS", desc: "A chatbot that actually remembers context.", img: chatImg, link: "/work/auraos", live: "https://aura-os-thenameisbhagavan.vercel.app/" },
  { id: "veritas", name: "VERITAS", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Explainable Intelligence Platform", desc: "AI that shows its reasoning, not just its answer.", img: fakeImg, link: "/work/veritas", live: "https://veritas-thenameisbhagavan.vercel.app/" },
  { id: "voltdrive", name: "VoltDrive", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Automotive Digital Showroom", desc: "A frontend experience built to feel alive.", img: voltDriveImg, link: "/work/voltdrive", live: "https://voltdrive-thenameisbhagavan.vercel.app/" },
  { id: "agrivision", name: "AgriVision AI", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Intelligent Crop Diagnostics", desc: "From Crop Image to Explainable AI Insight.", img: agrivisionImg, link: "#agrivision", live: "https://github.com/thenameisbhagavan/Plant-disease-detection" },
  { id: "ats-resume", name: "ATS Resume Builder", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Full-Stack Web Platform", desc: "MERN application optimizing resumes against ATS filters with keyword extraction algorithms.", img: atsResumeImg, link: "#ats-resume", live: "https://github.com/thenameisbhagavan/Resumebuilderwebapp" },
  { id: "ai-chat", name: "AI Chat Proxy", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Secure LLM Gateway", desc: "Stateless backend bridge securing Gemini API interactions without browser key leakage.", img: chatProxyImg, link: "#ai-chat", live: "https://github.com/thenameisbhagavan/chatbotwebapp" }
];

export default function Work() {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState("01");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Update active project rail on scroll with rAF batching
  useEffect(() => {
    let rafId = null;
    const sections = ["dv-labs-platform", "data-valley-assessment", "careeros", "auraos", "veritas", "voltdrive", "agrivision", "ats-resume", "ai-chat"];

    const handleScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        const scrollPos = window.scrollY + window.innerHeight * 0.35;

        for (let i = sections.length - 1; i >= 0; i--) {
          const el = document.getElementById(sections[i]);
          if (el && el.offsetTop <= scrollPos) {
            const nextKey = `0${i + 1}`;
            setActiveProject((prev) => (prev !== nextKey ? nextKey : prev));
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

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <SEO 
        title="Work | TheNameIsBhagavan"
        description="Engineering exhibition by Siva Satya Sai Bhagavan Gopalajosyula (TheNameIsBhagavan) — Software Engineer & AI/Data Science Trainer at Data Valley Training, Placements & IT Solutions. Explore DV Labs Platform, Data Valley Assessment Platform, CareerOS, AuraOS, VERITAS, VoltDrive, and AgriVision AI."
        keywords="TheNameIsBhagavan, Bhagavan Projects, DV Labs, Data Valley Training Placements IT Solutions, Software Engineer, AI Systems Engineering, CareerOS, AuraOS, VERITAS, VoltDrive, AgriVision AI, Technical Trainer"
      />
      <div className="work-exhibition-page">

        {/* FLOATING SPATIAL PROJECT RAIL */}
        <div className="work-sticky-rail">
          {[
            { id: "01", name: "DV LABS PLATFORM", target: "dv-labs-platform" },
            { id: "02", name: "DV ASSESSMENT", target: "data-valley-assessment" },
            { id: "03", name: "CAREEROS", target: "careeros" },
            { id: "04", name: "AURAOS", target: "auraos" },
            { id: "05", name: "VERITAS", target: "veritas" },
            { id: "06", name: "VOLTDRIVE", target: "voltdrive" },
            { id: "07", name: "AGRIVISION AI", target: "agrivision" },
            { id: "08", name: "ATS RESUME", target: "ats-resume" },
            { id: "09", name: "AI PROXY", target: "ai-chat" }
          ].map((item) => (
            <button
              key={item.id}
              className={`work-rail-item ${activeProject === item.id ? "active" : ""}`}
              onClick={() => scrollToSection(item.target)}
            >
              <span className="rail-num">{item.id}</span>
              <span className="rail-name">{item.name}</span>
            </button>
          ))}
        </div>

        {/* ============================================================
            ACT 01 — HERO (EXHIBITION OPENING)
            ============================================================ */}
        <section className="work-exhibition-hero" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <Reveal y={16} duration={0.8}>
              <div className="work-hero-eyebrow">
                <span className="work-eyebrow-badge">SYSTEMS / 09</span>
              </div>
            </Reveal>

            <MaskReveal duration={1.1} delay={0.1}>
              <h1 className="work-hero-headline">
                Systems I built<br />
                to understand<br />
                what technology can become.
              </h1>
            </MaskReveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="work-hero-sub">
                COMPANY SYSTEMS &middot; INDEPENDENT PLATFORMS &middot; INTELLIGENT INTERFACES
              </p>
            </Reveal>

            {/* Category Discovery Pills */}
            <Reveal y={16} duration={0.8} delay={0.4}>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '24px' }}>
                <button
                  onClick={() => scrollToSection("dv-labs-platform")}
                  className="apple-pressable"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '980px',
                    background: '#ffffff',
                    border: '1px solid #d2d2d7',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#1d1d1f',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#007aff' }}></span>
                  <span>Company Work (02)</span>
                </button>

                <button
                  onClick={() => scrollToSection("careeros")}
                  className="apple-pressable"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    borderRadius: '980px',
                    background: '#ffffff',
                    border: '1px solid #d2d2d7',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: '#6e6e73',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)'
                  }}
                >
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#86868b' }}></span>
                  <span>Personal Projects (07)</span>
                </button>
              </div>
            </Reveal>
            
            <Reveal y={16} duration={0.8} delay={0.5}>
              <div className="work-scroll-indicator">
                <span className="scroll-dot"></span>
                <span>SCROLL TO EXPLORE EXHIBITION</span>
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            ACT 02 — CHAPTER 01: DV LABS PLATFORM (COMPANY PROJECT · ONGOING)
            ============================================================ */}
        <section id="dv-labs-platform" className="work-chapter chapter-dv-labs" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span className="work-dvlabs-live-pill">
                    <span className="work-dvlabs-pulse-dot" aria-hidden="true"></span>
                    COMPANY PROJECT &middot; ONGOING
                  </span>
                  <span className="chapter-badge">DATA VALLEY TRAINING, PLACEMENTS &amp; IT SOLUTIONS &middot; 01 / 09</span>
                </div>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <div className="work-dvlabs-brand-row">
                  <span className="work-dvlabs-brand-mark" aria-hidden="true">D</span>
                  <h2 className="work-dvlabs-title-text">
                    DV <span className="serif-accent">Labs</span>
                  </h2>
                </div>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="work-dvlabs-tagline-quote">
                "Where vision meets execution."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.85} delay={0.25}>
              <p className="work-dvlabs-subline-text">
                A Data Valley company development initiative designed to transform engineering capstone development through AI-powered mentorship, research intelligence, structured project engineering, technical evaluation, and career readiness at Data Valley Training, Placements &amp; IT Solutions.
              </p>
            </Reveal>

            {/* Contribution Ribbon */}
            <Reveal y={20} duration={0.8} delay={0.3}>
              <div className="work-dvlabs-contrib-ribbon">
                <span className="work-dvlabs-contrib-badge">MY CONTRIBUTION:</span>
                <p className="work-dvlabs-contrib-desc">
                  <strong>Software Engineer | Data Valley Engineering Team:</strong> Part of the engineering team developing the platform. Engineered full-stack modules (Next.js App Router, React 19, TypeScript, MongoDB Atlas), state persistence and background sync pipelines, and AI viva defense workflows.
                </p>
              </div>
            </Reveal>

            {/* Product Environment Showcase */}
            <ScaleReveal className="chapter-hero-image-wrap" style={{ marginTop: '36px' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '18px', border: '1px solid #e5e5ea', boxShadow: '0 20px 48px rgba(0,0,0,0.08)' }}>
                <img 
                  src={dvLabsHeroImg} 
                  alt="DV Labs — Where vision meets execution. Milestone-locked projects defended in viva." 
                  className="chapter-hero-img" 
                  loading="lazy" 
                />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', padding: '6px 14px', borderRadius: '8px', fontSize: '11.5px', fontWeight: '700', color: '#1d1d1f' }}>
                  OFFICIAL DV LABS PRODUCT ENVIRONMENT &middot; DATA VALLEY TRAINING, PLACEMENTS &amp; IT SOLUTIONS
                </div>
              </div>
            </ScaleReveal>

            {/* 4-Step System Architecture */}
            <div className="chapter-steps-grid">
              {[
                { step: "01", title: "MILESTONE LOCKS", desc: "Stage-gated engineering workflows where code checkpoints must satisfy strict automated test baselines before subsequent phases unlock." },
                { step: "02", title: "VIVA DEFENSE", desc: "AI-driven oral defense interrogating candidates in real-time on architectural decisions, algorithm trade-offs, and code mechanics." },
                { step: "03", title: "INDUSTRY BASELINES", desc: "Replacing generic tutorial clones with enterprise code standards, robust documentation, and authentic deliverables." },
                { step: "04", title: "VERIFIABLE EXECUTION", desc: "Automated verification pipelines proving candidate mastery and system reliability in production conditions." }
              ].map((st, idx) => (
                <Reveal key={st.step} y={24} duration={0.8} delay={idx * 0.1} className="chapter-step-card">
                  <span className="step-num">{st.step}</span>
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </Reveal>
              ))}
            </div>

            {/* Engineering Signal & Actions */}
            <div className="chapter-footer-bar">
              <div className="chapter-tech-stack">
                <span className="tech-label">ENGINEERING STACK:</span>
                <span className="tech-val">NEXT.JS APP ROUTER &middot; REACT 19 &middot; TYPESCRIPT &middot; NODE.JS &middot; MONGODB ATLAS &middot; AI VIVA ENGINE</span>
              </div>

              <div className="chapter-actions">
                <MagneticLink strength={0.2}>
                  <Link to="/work/dv-labs-platform" className="work-btn-primary">
                    <span>EXPLORE DV LABS CASE STUDY ↗</span>
                  </Link>
                </MagneticLink>
                <MagneticLink strength={0.2}>
                  <a href="https://dvlabs.datavalley.ai/" target="_blank" rel="noopener noreferrer" className="work-btn-secondary">
                    <span>VISIT ENVIRONMENT ↗</span>
                  </a>
                </MagneticLink>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 03 — CHAPTER 02: DATA VALLEY ASSESSMENT PLATFORM (COMPANY PROJECT · IN DEVELOPMENT)
            ============================================================ */}
        <section id="data-valley-assessment" className="work-chapter chapter-dv-assessments" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span className="work-dvlabs-live-pill">
                    <span className="work-dvlabs-pulse-dot" aria-hidden="true"></span>
                    COMPANY PROJECT &middot; IN DEVELOPMENT
                  </span>
                  <span className="chapter-badge">DATA VALLEY TRAINING, PLACEMENTS &amp; IT SOLUTIONS &middot; 02 / 09</span>
                </div>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="chapter-title" style={{ fontSize: 'clamp(26px, 4vw, 42px)', letterSpacing: '-0.03em' }}>
                  DATA VALLEY ASSESSMENT PLATFORM
                </h2>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="work-dvlabs-tagline-quote">
                "Candidate assessment platform with secure sessions, live timers, and server-side evaluation."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.85} delay={0.25}>
              <p className="work-dvlabs-subline-text">
                40 structured technical challenges with synchronized countdown timers, background delta auto-sync, and 100% tamper-proof server-side scoring.
              </p>
            </Reveal>

            {/* Contribution Ribbon */}
            <Reveal y={20} duration={0.8} delay={0.3}>
              <div className="work-dvlabs-contrib-ribbon">
                <span className="work-dvlabs-contrib-badge">MY CONTRIBUTION:</span>
                <p className="work-dvlabs-contrib-desc">
                  <strong>End-to-End Application Developer:</strong> Architected candidate authentication via HTTP-only cookies, real-time 40-question delivery engine, background delta auto-sync via <code>/api/assessment/sync</code>, deterministic server-side evaluation via <code>/api/assessment/submit</code>, and integrity event telemetry.
                </p>
              </div>
            </Reveal>

            {/* Live Testing Canvas Showcase */}
            <ScaleReveal className="chapter-hero-image-wrap" style={{ marginTop: '36px' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '18px', border: '1px solid #e5e5ea', boxShadow: '0 20px 48px rgba(0,0,0,0.08)' }}>
                <img 
                  src={dvAssessmentImg} 
                  alt="Data Valley Engineering Assessment Platform — 40 questions, live countdown timer, and interactive question palette" 
                  className="chapter-hero-img" 
                  loading="lazy" 
                />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(12px)', padding: '6px 14px', borderRadius: '8px', fontSize: '11.5px', fontWeight: '700', color: '#1d1d1f' }}>
                  FIGURE 2.0: SYNCHRONIZED CANDIDATE TESTING CANVAS (40 QUESTIONS)
                </div>
              </div>
            </ScaleReveal>

            {/* 4 Architectural Engine Pillars */}
            <div className="chapter-steps-grid">
              {[
                { step: "01", title: "SESSION TOKEN BINDING", desc: "JWT in secure HTTP-only cookies prevents duplicate logins and unauthorized access during active tests." },
                { step: "02", title: "40-QUESTION TIMED CANVAS", desc: "Synchronized countdown timer engine with interactive question palette, flags, and persistent answer states." },
                { step: "03", title: "DELTA AUTO-SAVE ENGINE", desc: "Continuous background sync via /api/assessment/sync prevents data loss on network drops." },
                { step: "04", title: "DETERMINISTIC EVAL", desc: "100% server-side scoring via /api/assessment/submit eliminates client-side tampering completely." }
              ].map((st, idx) => (
                <Reveal key={st.step} y={24} duration={0.8} delay={idx * 0.1} className="chapter-step-card">
                  <span className="step-num">{st.step}</span>
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </Reveal>
              ))}
            </div>

            {/* Transparent Proctoring Status Strip */}
            <Reveal y={16} duration={0.8} delay={0.2}>
              <div style={{ background: '#f5f5f7', border: '1px solid #e5e5ea', borderRadius: '12px', padding: '16px 20px', marginTop: '24px', display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', fontWeight: '800', letterSpacing: '0.08em', color: '#86868b', textTransform: 'uppercase' }}>PROCTORING CAPABILITIES:</span>
                <span style={{ fontSize: '12px', color: '#1d1d1f' }}><strong style={{ color: '#34c759' }}>● IMPLEMENTED:</strong> Window blur / focus loss telemetry, session token binding, idempotency keys</span>
                <span style={{ fontSize: '12px', color: '#1d1d1f' }}><strong style={{ color: '#007aff' }}>● TESTED:</strong> Timer resynchronization on reconnection</span>
                <span style={{ fontSize: '12px', color: '#666668' }}><strong style={{ color: '#ff9500' }}>● IN PROGRESS:</strong> Speech-to-text viva response evaluation, Wasm execution sandbox</span>
              </div>
            </Reveal>

            {/* Engineering Signal & Actions */}
            <div className="chapter-footer-bar">
              <div className="chapter-tech-stack">
                <span className="tech-label">ENGINEERING STACK:</span>
                <span className="tech-val">NEXT.JS APP ROUTER &middot; REACT 19 &middot; TYPESCRIPT &middot; MONGODB ATLAS &middot; JWT / COOKIES &middot; BCRYPT</span>
              </div>

              <div className="chapter-actions">
                <MagneticLink strength={0.2}>
                  <Link to="/work/data-valley-assessment-platform" className="work-btn-primary">
                    <span>EXPLORE ASSESSMENT CASE STUDY ↗</span>
                  </Link>
                </MagneticLink>
                <MagneticLink strength={0.2}>
                  <a href="https://dv-assesments.vercel.app/" target="_blank" rel="noopener noreferrer" className="work-btn-secondary">
                    <span>LAUNCH ASSESSMENT ENGINE ↗</span>
                  </a>
                </MagneticLink>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 04 — CAREEROS (CHAPTER 03 / 09)
            ============================================================ */}
        <section id="careeros" className="work-chapter chapter-careeros" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: '800', letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '4px', background: '#f5f5f7', color: '#555558', border: '1px solid #e5e5ea' }}>
                    PERSONAL PROJECT
                  </span>
                  <span className="chapter-badge">CAREER INTELLIGENCE SYSTEM &middot; 03 / 09</span>
                </div>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="chapter-title">CAREEROS</h2>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-opening-q">
                "Career decisions happen in fragments. No system connects them."
              </blockquote>
            </Reveal>

            <ScaleReveal className="chapter-hero-image-wrap">
              <img src={careerOSImg} alt="CareerOS System" className="chapter-hero-img" loading="lazy" />
            </ScaleReveal>

            {/* 4-Step System Architecture */}
            <div className="chapter-steps-grid">
              {[
                { step: "01", title: "DISCOVER", desc: "Captures academic & professional data into a unified context profile." },
                { step: "02", title: "EVALUATE", desc: "Analyzes skill sets against real-time market demands & benchmark roles." },
                { step: "03", title: "REVEAL", desc: "Generates tailored career opportunities and explicit skill gaps." },
                { step: "04", title: "ACCELERATE", desc: "Provides AI-powered roadmaps for immediate execution." }
              ].map((st, idx) => (
                <Reveal key={st.step} y={24} duration={0.8} delay={idx * 0.1} className="chapter-step-card">
                  <span className="step-num">{st.step}</span>
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </Reveal>
              ))}
            </div>

            {/* Engineering Signal & Actions */}
            <div className="chapter-footer-bar">
              <div className="chapter-tech-stack">
                <span className="tech-label">ENGINEERING LAYER:</span>
                <span className="tech-val">AI / PRODUCT &middot; REACT &middot; NODE.JS &middot; ANALYTICAL MODELS</span>
              </div>

              <div className="chapter-actions">
                <MagneticLink strength={0.2}>
                  <a href={`${socialLinks.github.url}/careeros`} target="_blank" rel="noopener noreferrer" className="work-btn-primary">
                    <span>SOURCE CODE ↗</span>
                  </a>
                </MagneticLink>
                <MagneticLink strength={0.2}>
                  <a href="https://careeros-thenameisbhagavan.vercel.app/" target="_blank" rel="noopener noreferrer" className="work-btn-secondary">
                    <span>LIVE SYSTEM ↗</span>
                  </a>
                </MagneticLink>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 05 — AURAOS (CHAPTER 04 / 09)
            ============================================================ */}
        <section id="auraos" className="work-chapter chapter-auraos" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: '800', letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '4px', background: '#f5f5f7', color: '#555558', border: '1px solid #e5e5ea' }}>
                    PERSONAL PROJECT
                  </span>
                  <span className="chapter-badge">PERSONAL INTELLIGENCE OS &middot; 04 / 09</span>
                </div>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="chapter-title">AURAOS</h2>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-opening-q">
                "What if a chatbot actually remembered?"
              </blockquote>
            </Reveal>

            <Parallax speed={-0.05} className="chapter-hero-image-wrap">
              <img src={chatImg} alt="AuraOS Memory System" className="chapter-hero-img" loading="lazy" />
            </Parallax>

            {/* Context Memory Flow */}
            <div className="chapter-steps-grid steps-3col">
              {[
                { label: "MEMORY", title: "PERSISTENT CONTEXT", desc: "Creates a continuous memory graph across multi-turn sessions." },
                { label: "RETRIEVAL", title: "RELEVANT HISTORY", desc: "Pulls exact historical facts & user preferences instantly." },
                { label: "REASONING", title: "CONNECTED CONTEXT", desc: "Connects separate conversations into unified intelligence." }
              ].map((st, idx) => (
                <Reveal key={st.label} y={24} duration={0.8} delay={idx * 0.12} className="chapter-step-card">
                  <span className="step-label-badge">{st.label}</span>
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </Reveal>
              ))}
            </div>

            {/* Engineering Signal & Actions */}
            <div className="chapter-footer-bar">
              <div className="chapter-tech-stack">
                <span className="tech-label">ENGINEERING LAYER:</span>
                <span className="tech-val">RAG &middot; VECTOR DBs &middot; SEMANTIC SEARCH &middot; SESSION STATE GRAPH</span>
              </div>

              <div className="chapter-actions">
                <MagneticLink strength={0.2}>
                  <a href={`${socialLinks.github.url}/auraos`} target="_blank" rel="noopener noreferrer" className="work-btn-primary">
                    <span>SOURCE CODE ↗</span>
                  </a>
                </MagneticLink>
                <MagneticLink strength={0.2}>
                  <a href="https://aura-os-thenameisbhagavan.vercel.app/" target="_blank" rel="noopener noreferrer" className="work-btn-secondary">
                    <span>LIVE SYSTEM ↗</span>
                  </a>
                </MagneticLink>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 06 — VERITAS (CHAPTER 05 / 09)
            ============================================================ */}
        <section id="veritas" className="work-chapter chapter-veritas" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: '800', letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '4px', background: '#f5f5f7', color: '#555558', border: '1px solid #e5e5ea' }}>
                    PERSONAL PROJECT
                  </span>
                  <span className="chapter-badge">EXPLAINABLE INTELLIGENCE &middot; 05 / 09</span>
                </div>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="chapter-title">VERITAS</h2>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-opening-q">
                "AI gives answers. Can it show why?"
              </blockquote>
            </Reveal>

            <ScaleReveal className="chapter-hero-image-wrap">
              <img src={fakeImg} alt="VERITAS Fact Tracing" className="chapter-hero-img" loading="lazy" />
            </ScaleReveal>

            {/* Verification Pipeline */}
            <div className="chapter-steps-grid steps-3col">
              {[
                { label: "EXTRACT", title: "CLAIM DECONSTRUCTION", desc: "Parses raw text into verifiable structured assertions." },
                { label: "ANALYZE", title: "EVIDENCE SCORING", desc: "Evaluates assertions against deterministic credibility baselines." },
                { label: "TRACE", title: "PROVENANCE PATH", desc: "Maps exact reasoning graph from input text to final judgment." }
              ].map((st, idx) => (
                <Reveal key={st.label} y={24} duration={0.8} delay={idx * 0.12} className="chapter-step-card">
                  <span className="step-label-badge badge-green">{st.label}</span>
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </Reveal>
              ))}
            </div>

            {/* Engineering Signal & Actions */}
            <div className="chapter-footer-bar">
              <div className="chapter-tech-stack">
                <span className="tech-label">ENGINEERING LAYER:</span>
                <span className="tech-val">DETERMINISTIC NLP &middot; FASTAPI &middot; FACT GRAPH &middot; CREDIBILITY SCHEMAS</span>
              </div>

              <div className="chapter-actions">
                <MagneticLink strength={0.2}>
                  <a href={`${socialLinks.github.url}/News-detector`} target="_blank" rel="noopener noreferrer" className="work-btn-primary">
                    <span>SOURCE CODE ↗</span>
                  </a>
                </MagneticLink>
                <MagneticLink strength={0.2}>
                  <a href="https://veritas-thenameisbhagavan.vercel.app/" target="_blank" rel="noopener noreferrer" className="work-btn-secondary">
                    <span>LIVE SYSTEM ↗</span>
                  </a>
                </MagneticLink>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 07 — VOLTDRIVE (CHAPTER 06 / 09)
            ============================================================ */}
        <section id="voltdrive" className="work-chapter chapter-voltdrive" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: '800', letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '4px', background: '#f5f5f7', color: '#555558', border: '1px solid #e5e5ea' }}>
                    PERSONAL PROJECT
                  </span>
                  <span className="chapter-badge">DIGITAL PRODUCT EXPERIENCE &middot; 06 / 09</span>
                </div>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="chapter-title">VOLTDRIVE</h2>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-opening-q">
                "Engineering is also what the user feels."
              </blockquote>
            </Reveal>

            <Parallax speed={0.06} className="chapter-hero-image-wrap">
              <img src={voltDriveImg} alt="VoltDrive Experience" className="chapter-hero-img" loading="lazy" />
            </Parallax>

            {/* Automotive Product Experience Steps */}
            <div className="chapter-steps-grid">
              {[
                { step: "01", title: "DISCOVER", desc: "Storytelling luxury electric mobility interface." },
                { step: "02", title: "EXPERIENCE", desc: "Hardware-accelerated 60fps interaction physics." },
                { step: "03", title: "CONFIGURE", desc: "Real-time vehicle telemetry configurator." },
                { step: "04", title: "DRIVE", desc: "Production-quality automotive product delivery." }
              ].map((st, idx) => (
                <Reveal key={st.step} y={24} duration={0.8} delay={idx * 0.1} className="chapter-step-card">
                  <span className="step-num num-amber">{st.step}</span>
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </Reveal>
              ))}
            </div>

            {/* Engineering Signal & Actions */}
            <div className="chapter-footer-bar">
              <div className="chapter-tech-stack">
                <span className="tech-label">ENGINEERING LAYER:</span>
                <span className="tech-val">REACT &middot; THREE.JS &middot; MOTION PHYSICS &middot; 60FPS HARDWARE ENGINE</span>
              </div>

              <div className="chapter-actions">
                <MagneticLink strength={0.2}>
                  <a href="https://github.com/thenameisbhagavan/voltdrive" target="_blank" rel="noopener noreferrer" className="work-btn-primary">
                    <span>SOURCE CODE ↗</span>
                  </a>
                </MagneticLink>
                <MagneticLink strength={0.2}>
                  <a href="https://voltdrive-thenameisbhagavan.vercel.app/" target="_blank" rel="noopener noreferrer" className="work-btn-secondary">
                    <span>LIVE SYSTEM ↗</span>
                  </a>
                </MagneticLink>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 08 — AGRIVISION AI (CHAPTER 07 / 09)
            ============================================================ */}
        <section id="agrivision" className="work-chapter chapter-agrivision" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: '800', letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '4px', background: '#f5f5f7', color: '#555558', border: '1px solid #e5e5ea' }}>
                    PERSONAL PROJECT
                  </span>
                  <span className="chapter-badge">INTELLIGENT CROP DIAGNOSTICS &middot; 07 / 09</span>
                </div>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="chapter-title">AGRIVISION AI</h2>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-opening-q">
                "From Crop Image to Explainable AI Insight."
              </blockquote>
            </Reveal>
            
            <Reveal y={24} duration={0.9} delay={0.3}>
              <p style={{ fontFamily: 'var(--font-system, "SF Pro Text", sans-serif)', fontSize: 'clamp(14px, 2.5vw, 18px)', lineHeight: '1.6', color: '#6B6B6B', maxWidth: '800px', margin: '0 auto 60px', textAlign: 'center' }}>
                AgriVision AI brings computer vision, deep learning, and explainability together in a production-oriented crop analysis experience.
              </p>
            </Reveal>

            <Parallax speed={0.06} className="chapter-hero-image-wrap">
              <img src={agrivisionImg} alt="AgriVision AI System" className="chapter-hero-img" loading="lazy" />
            </Parallax>

            {/* AI Diagnostics Steps */}
            <div className="chapter-steps-grid">
              {[
                { step: "01", title: "DEEP LEARNING VISION", desc: "MobileNetV2 transfer learning for 30 crop/health-condition classes." },
                { step: "02", title: "EXPLAINABLE AI", desc: "Grad-CAM visualizations expose the image regions contributing to the model's prediction." },
                { step: "03", title: "SECURE AUTH", desc: "Firebase Authentication with backend-side ID-token verification." },
                { step: "04", title: "PERSISTENCE", desc: "Persistent prediction history and user dashboards via MongoDB Atlas." }
              ].map((st, idx) => (
                <Reveal key={st.step} y={24} duration={0.8} delay={idx * 0.1} className="chapter-step-card">
                  <span className="step-num num-green" style={{ color: '#34C759' }}>{st.step}</span>
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </Reveal>
              ))}
            </div>

            {/* Engineering Signal & Actions */}
            <div className="chapter-footer-bar">
              <div className="chapter-tech-stack">
                <span className="tech-label">ENGINEERING LAYER:</span>
                <span className="tech-val">FASTAPI &middot; MOBILENETV2 &middot; GRAD-CAM &middot; MONGODB ATLAS &middot; REACT</span>
              </div>

              <div className="chapter-actions">
                <MagneticLink strength={0.2}>
                  <a href={`${socialLinks.github.url}/Plant-disease-detection`} target="_blank" rel="noopener noreferrer" className="work-btn-primary">
                    <span>SOURCE CODE ↗</span>
                  </a>
                </MagneticLink>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 09 — ATS RESUME BUILDER (CHAPTER 08 / 09)
            ============================================================ */}
        <section id="ats-resume" className="work-chapter chapter-ats-resume" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: '800', letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '4px', background: '#f5f5f7', color: '#555558', border: '1px solid #e5e5ea' }}>
                    PERSONAL PROJECT
                  </span>
                  <span className="chapter-badge">FULL-STACK APPLICATION &middot; 08 / 09</span>
                </div>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="chapter-title">ATS RESUME BUILDER</h2>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-opening-q">
                "Applicant Tracking Systems filter candidates silently. Transparency gives applicants leverage."
              </blockquote>
            </Reveal>

            <ScaleReveal className="chapter-hero-image-wrap">
              <img src={atsResumeImg} alt="ATS-Based Resume Builder Platform" className="chapter-hero-img" loading="lazy" />
            </ScaleReveal>

            {/* 4-Step Engineering Architecture */}
            <div className="chapter-steps-grid">
              {[
                { step: "01", title: "KEYWORD EXTRACTION", desc: "Extracts role requirements and critical skill tokens directly from targeted job descriptions." },
                { step: "02", title: "MATCH SCORING", desc: "Computes lexical and semantic overlap between candidate resume sections and target requisitions." },
                { step: "03", title: "FORMAT VALIDATION", desc: "Enforces single-column semantic markup optimized for machine parsers and OCR readers." },
                { step: "04", title: "SECURE EXPORT", desc: "Generates clean PDF and JSON resumes with OAuth authentication and REST API integration." }
              ].map((st, idx) => (
                <Reveal key={st.step} y={24} duration={0.8} delay={idx * 0.1} className="chapter-step-card">
                  <span className="step-num">{st.step}</span>
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </Reveal>
              ))}
            </div>

            {/* Engineering Signal & Actions */}
            <div className="chapter-footer-bar">
              <div className="chapter-tech-stack">
                <span className="tech-label">ENGINEERING LAYER:</span>
                <span className="tech-val">REACT &middot; NODE.JS &middot; EXPRESS &middot; MONGODB &middot; OAUTH &middot; REST APIS</span>
              </div>

              <div className="chapter-actions">
                <MagneticLink strength={0.2}>
                  <a href="https://github.com/thenameisbhagavan/Resumebuilderwebapp" target="_blank" rel="noopener noreferrer" className="work-btn-primary">
                    <span>SOURCE CODE ↗</span>
                  </a>
                </MagneticLink>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 10 — AI CONVERSATIONAL CHATBOT GATEWAY (CHAPTER 09 / 09)
            ============================================================ */}
        <section id="ai-chat" className="work-chapter chapter-ai-chat" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                  <span style={{ fontSize: '10.5px', fontWeight: '800', letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '4px', background: '#f5f5f7', color: '#555558', border: '1px solid #e5e5ea' }}>
                    PERSONAL PROJECT
                  </span>
                  <span className="chapter-badge">AI SYSTEMS ARCHITECTURE &middot; 09 / 09</span>
                </div>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="chapter-title">AI CHAT GATEWAY</h2>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-opening-q">
                "Production AI frontends must never expose API keys to the browser client."
              </blockquote>
            </Reveal>

            <Parallax speed={-0.04} className="chapter-hero-image-wrap">
              <img src={chatProxyImg} alt="AI Chatbot Web Application" className="chapter-hero-img" loading="lazy" />
            </Parallax>

            {/* Pipeline Steps */}
            <div className="chapter-steps-grid steps-3col">
              {[
                { label: "SECURITY", title: "STATELESS PROXY BRIDGE", desc: "Isolates upstream Gemini API secrets inside a hardened Python/Flask backend bridge." },
                { label: "ORCHESTRATION", title: "STREAMING & TIMEOUTS", desc: "Manages session conversation history, rate limits, and client error recovery." },
                { label: "INTERFACE", title: "RESPONSIVE CLIENT", desc: "Renders real-time conversational streaming and structured markdown responses." }
              ].map((st, idx) => (
                <Reveal key={st.label} y={24} duration={0.8} delay={idx * 0.12} className="chapter-step-card">
                  <span className="step-label-badge badge-green">{st.label}</span>
                  <h3 className="step-title">{st.title}</h3>
                  <p className="step-desc">{st.desc}</p>
                </Reveal>
              ))}
            </div>

            {/* Engineering Signal & Actions */}
            <div className="chapter-footer-bar">
              <div className="chapter-tech-stack">
                <span className="tech-label">ENGINEERING LAYER:</span>
                <span className="tech-val">PYTHON &middot; FLASK &middot; GEMINI API &middot; REACT &middot; REST APIS &middot; CORS GUARD</span>
              </div>

              <div className="chapter-actions">
                <MagneticLink strength={0.2}>
                  <a href="https://github.com/thenameisbhagavan/chatbotwebapp" target="_blank" rel="noopener noreferrer" className="work-btn-primary">
                    <span>SOURCE CODE ↗</span>
                  </a>
                </MagneticLink>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 07 — EARLIER EXPERIMENTS (COMPACT HORIZONTAL ARCHIVE)
            ============================================================ */}
        <section className="work-archive-section" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <Reveal y={20} duration={0.9}>
              <div className="archive-header">
                <span className="archive-badge">HISTORICAL PROGRESSION</span>
                <h2 className="archive-title">Earlier Experiments</h2>
              </div>
            </Reveal>

            <div className="archive-grid">
              <Reveal y={24} duration={0.8} className="archive-card">
                <div className="arc-top">
                  <span className="arc-tag">MACHINE LEARNING</span>
                  <h3 className="arc-name">Health Prediction</h3>
                </div>
                <p className="arc-desc">
                  Scikit-learn diagnostic prediction pipeline resolving cardiovascular risk signals across medical datasets.
                </p>
                <div className="arc-footer">
                  <span className="arc-tech">Python &middot; Flask &middot; Scikit-Learn</span>
                  <a href={`${socialLinks.github.url}/Heart-Disease-Prediction`} target="_blank" rel="noopener noreferrer" className="arc-link">
                    <span>Source</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </Reveal>

              <Reveal y={24} duration={0.8} delay={0.1} className="archive-card">
                <div className="arc-top">
                  <span className="arc-tag">ENTERPRISE AUTOMATION</span>
                  <h3 className="arc-name">Smart Leave</h3>
                </div>
                <p className="arc-desc">
                  Microsoft Power Platform automated workflow resolving multi-day administrative leave approval chains.
                </p>
                <div className="arc-footer">
                  <span className="arc-tech">Power Automate &middot; Power Platform</span>
                  <span className="arc-meta">Internal System</span>
                </div>
              </Reveal>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 08 — WHAT THE WORK TAUGHT ME (EDITORIAL LESSONS)
            ============================================================ */}
        <section className="work-lessons-section" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <Reveal y={20} duration={0.9}>
              <span className="lessons-label">EDITORIAL LESSONS</span>
              <h2 className="lessons-headline">What the work taught me.</h2>
            </Reveal>

            <div className="lessons-grid">
              {[
                { 
                  num: "01", 
                  title: "INTELLIGENCE NEEDS CONTEXT", 
                  desc: "A standalone model is just a starting point. Real engineering happens in memory layers, context systems, and reasoning pipelines that make the model aware of the user's situation.",
                  ref: "AuraOS / CareerOS"
                },
                { 
                  num: "02", 
                  title: "SYSTEMS NEED STRUCTURE", 
                  desc: "Generative outputs are only useful if you can trace how they got there. Deterministic verification pipelines force clarity on fact-tracing and reliability.",
                  ref: "VERITAS"
                },
                { 
                  num: "03", 
                  title: "PRODUCTS NEED EXPERIENCE", 
                  desc: "Backend complexity should never leak into the user experience. Motion, spatial composition, and performance turn a technical project into something people actually use.",
                  ref: "VoltDrive"
                }
              ].map((ls, idx) => (
                <Reveal key={ls.num} y={28} duration={0.9} delay={idx * 0.12} className="lesson-card">
                  <span className="lesson-num">— {ls.num}</span>
                  <h3 className="lesson-title">{ls.title}</h3>
                  <p className="lesson-desc">{ls.desc}</p>
                  <span className="lesson-ref">APPLIED IN {ls.ref}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 09 — CLOSING (CONTINUING QUESTION)
            ============================================================ */}
        <section className="work-closing-section" data-nav-theme="light">
          <div className="exhibition-bounds text-center">
            
            <Reveal y={24} duration={1.0}>
              <h2 className="closing-statement-main">
                Eight systems.<br />
                One continuing question.
              </h2>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.2}>
              <p className="closing-question-sub">
                How do you turn intelligence into something people can use?
              </p>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.4}>
              <MagneticLink strength={0.3}>
                <button className="work-btn-cta apple-pressable" onClick={() => navigate("/experience")}>
                  <span>EXPLORE THE ENGINEERING JOURNEY</span>
                  <ArrowRight size={16} />
                </button>
              </MagneticLink>
            </Reveal>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

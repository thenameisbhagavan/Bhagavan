import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Brain,
  BrainCircuit,
  Scan,
  Layers,
  Server,
  FileText,
  ExternalLink,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Terminal,
  Code2,
  FileCode2,
  GitBranch,
  Workflow,
  Database,
  Cpu,
  Sparkles,
  Lock,
  Network,
  Activity
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { m, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiFastapi,
  SiNodedotjs,
  SiFlask,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
  SiVercel,
  SiHtml5,
  SiCss3,
  SiGooglegemini,
  SiOpenai,
  SiHuggingface,
  SiLangchain,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiJupyter
} from "react-icons/si";
import Reveal from "../components/motion/Reveal";
import MaskReveal from "../components/motion/MaskReveal";
import ScaleReveal from "../components/motion/ScaleReveal";
import Parallax from "../components/motion/Parallax";
import TextReveal from "../components/motion/TextReveal";
import KineticTypography from "../components/motion/KineticTypography";
import MagneticLink from "../components/motion/MagneticLink";
import SpringTilt from "../components/motion/SpringTilt";
import AppreciationLetterModal from "../components/AppreciationLetterModal";
import { CANONICAL_PROFILE } from "../data/profile";
import "../styles/Overview.css";

// ─── Core Assets ──────────────────────────────────────────────────────────────
import profileHeroImg from "../assets/profile-hero.jpg";
import careerosImg from "../assets/careeros-new.jpg";
import auraosImg from "../assets/aurabot-new.png";
import voltdriveImg from "../assets/ev.png";
import veritasImg from "../assets/fake.jpg";
import datavalleyImg from "../assets/datascience coruse compltetion.jpeg";
import pbrTalkPhoto from "../assets/pbr-vits-ai-talk.jpg";
import dvAssessmentImg from "../assets/datavalley-assessment-platform.png";
import dvLabsHeroImg from "../assets/dvlabs-hero.jpg";
import agrivisionImg from "../assets/agrivision.png";

// ─── Dual-Direction Technology Trains (Authentic Brand Logos & Concepts) ─────
// Track A: Right-to-Left (Software Engineering, Modern Web, Backend, Databases & Dev Tools)
const TECH_TRAIN_1 = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React 19", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js App Router", icon: SiNextdotjs, color: "#000000" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Flask", icon: SiFlask, color: "#000000" },
  { name: "Redis", icon: SiRedis, color: "#DC382D" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#181717" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Vercel Edge", icon: SiVercel, color: "#000000" },
  { name: "JavaScript (ESNext)", icon: SiJavascript, color: "#F7DF1E" },
  { name: "HTML5 & CSS3", icon: SiHtml5, color: "#E34F26" },
  { name: "REST APIs", icon: Server, color: "#D97706" },
  { name: "Microservices", icon: GitBranch, color: "#7C3AED" }
];

// Track B: Left-to-Right (Data Science, Machine Learning, Generative AI & Agentic AI)
const TECH_TRAIN_2 = [
  { name: "Gemini API", icon: SiGooglegemini, color: "#1BA1E2" },
  { name: "OpenAI API", icon: SiOpenai, color: "#10A37F" },
  { name: "LangChain", icon: SiLangchain, color: "#1C3C3C" },
  { name: "Hugging Face", icon: SiHuggingface, color: "#FF9D00" },
  { name: "PyTorch", icon: SiPytorch, color: "#EE4C2C" },
  { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
  { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "Keras", icon: SiKeras, color: "#D00000" },
  { name: "Pandas", icon: SiPandas, color: "#150458" },
  { name: "NumPy", icon: SiNumpy, color: "#013243" },
  { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
  { name: "Agentic Workflows", icon: Workflow, color: "#8B5CF6" },
  { name: "Multi-Agent Systems", icon: BrainCircuit, color: "#6366F1" },
  { name: "RAG Architectures", icon: Database, color: "#0EA5E9" },
  { name: "Vector Search", icon: Scan, color: "#10B981" },
  { name: "Tool Calling", icon: Terminal, color: "#EC4899" },
  { name: "Prompt Engineering", icon: Sparkles, color: "#F59E0B" },
  { name: "Model Evaluation", icon: CheckCircle2, color: "#2563EB" }
];


export default function Overview() {
  const navigate = useNavigate();
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        description="Official portfolio of Bhagavan (TheNameIsBhagavan) — AI & Data Science Professional, Technical Trainer, and AI Solutions Developer at Data Valley AI Tech Solutions. Practical AI implementation, Python engineering, Generative AI, and technical education."
        keywords="TheNameIsBhagavan, Bhagavan, AI Data Science Professional, Technical Trainer, AI Solutions Developer, Data Valley AI Tech Solutions, Machine Learning, Generative AI, Prompt Engineering, Agentic AI, CareerOS, AuraOS, VERITAS, VoltDrive"
      />

      <div className="engineering-surface">

        {/* ============================================================
            SECTION 01 — HERO (APPLE-INSPIRED REFINED IDENTITY)
            ============================================================ */}
        <section className="es-hero" data-nav-theme="light">
          <div className="es-hero-grid">

            {/* LEFT COLUMN: EDITORIAL CONTENT */}
            <div className="es-hero-left">
              {/* Professional Identity Eyebrow Stack */}
              <div className="es-hero-eyebrow-stack">
                <span className="es-hero-primary-identity">
                  AI &amp; DATA SCIENCE PROFESSIONAL <span className="es-hero-eyebrow-sep" aria-hidden="true">&bull;</span> AI SOLUTIONS DEVELOPER
                </span>
                <span className="es-hero-secondary-identity">
                  TECHNICAL TRAINER <span className="es-hero-eyebrow-sep" aria-hidden="true">&bull;</span> AI &amp; DATA SCIENCE EDUCATOR
                </span>
              </div>

              {/* Primary Headline — Rock-solid visible line mask reveal */}
              <div className="es-hero-title-group">
                <h1 className="es-hero-headline" aria-label="I Build Intelligent Digital Experiences.">
                  <span className="es-hero-hl-mask">
                    <span className="es-hero-hl-line line-1">I Build Intelligent</span>
                  </span>
                  <span className="es-hero-hl-mask">
                    <span className="es-hero-hl-line line-2">Digital Experiences.</span>
                  </span>
                </h1>
              </div>

              {/* Supporting Editorial Description */}
              <p className="es-hero-sub">
                Engineering practical AI solutions, resilient backend architectures, and production applications. Developer &amp; Technical Trainer at Data Valley AI Tech Solutions, combining active systems development with real-world technical education across Python, Data Science, Machine Learning, and Generative AI.
              </p>

              {/* Mobile Portrait (Appears between description and CTAs on mobile viewport) */}
              <div className="es-hero-portrait-mobile">
                <div className="es-hero-portrait-frame">
                  <img
                    src={profileHeroImg}
                    alt="Bhagavan — AI & Data Science Professional, Technical Trainer & AI Solutions Developer"
                    loading="eager"
                    fetchpriority="high"
                    className="es-hero-portrait-img"
                  />
                  <div className="es-hero-portrait-scrim" aria-hidden="true" />
                </div>
              </div>

              {/* Interactive CTAs */}
              <div className="es-hero-actions-group">
                <MagneticLink strength={0.2}>
                  <button
                    className="es-hero-btn-primary apple-pressable"
                    onClick={() => navigate('/work')}
                    aria-label="Explore Work"
                  >
                    <span>Explore Work</span>
                    <ArrowRight size={15} className="es-hero-btn-arrow" strokeWidth={2.2} />
                  </button>
                </MagneticLink>

                <MagneticLink strength={0.2}>
                  <button
                    className="es-hero-btn-secondary apple-pressable"
                    onClick={() => navigate('/experience')}
                    aria-label="View Experience"
                  >
                    <span>View Experience</span>
                  </button>
                </MagneticLink>

                <MagneticLink strength={0.2}>
                  <button
                    className="es-hero-btn-tertiary apple-pressable"
                    onClick={() => navigate('/resume')}
                    aria-label="Resume"
                  >
                    <span>Resume</span>
                    <ExternalLink size={13.5} />
                  </button>
                </MagneticLink>
              </div>
            </div>

            {/* RIGHT COLUMN: DESKTOP PORTRAIT */}
            <div className="es-hero-right">
              <SpringTilt maxTilt={2.8} scale={1.01} className="es-hero-portrait-env">
                <div className="es-hero-portrait-frame">
                  <img
                    src={profileHeroImg}
                    alt="Bhagavan — AI & Data Science Professional, Technical Trainer & AI Solutions Developer"
                    loading="eager"
                    fetchpriority="high"
                    className="es-hero-portrait-img"
                  />
                  <div className="es-hero-portrait-scrim" aria-hidden="true" />
                </div>
              </SpringTilt>
            </div>

          </div>
        </section>



        {/* ============================================================
            SECTION 01.5 — DUAL-DIRECTION APPLE-STYLE TECHNOLOGY MARQUEE
            ============================================================ */}
        <section id="technology-ecosystem" className="es-tech-marquee-section" data-nav-theme="light">
          <div className="es-bounds">
            <div className="es-tech-editorial-header">
              <Reveal y={14} duration={0.8}>
                <span className="es-tech-eyebrow">TECHNICAL ECOSYSTEM</span>
              </Reveal>
              <Reveal y={18} duration={0.9} delay={0.08}>
                <h2 className="es-tech-headline">The technologies behind my work.</h2>
              </Reveal>
              <Reveal y={18} duration={0.9} delay={0.16}>
                <p className="es-tech-sub">
                  Software Engineering <span className="es-tech-sub-sep" aria-hidden="true">&bull;</span> Data Science <span className="es-tech-sub-sep" aria-hidden="true">&bull;</span> AI/ML <span className="es-tech-sub-sep" aria-hidden="true">&bull;</span> Generative AI <span className="es-tech-sub-sep" aria-hidden="true">&bull;</span> Agentic AI
                </p>
              </Reveal>
            </div>
          </div>

          {/* DUAL-DIRECTION HORIZONTAL TECHNOLOGY TRAINS */}
          <div className="es-tech-trains-container" aria-label="Dual-direction continuous technology stream">
            {/* TRAIN 1: Continuously moving right-to-left (Software Engineering & Infrastructure) */}
            <div className="es-tech-train-outer">
              <div className="es-tech-train-track es-train-rtl">
                <div className="es-tech-train-group">
                  {TECH_TRAIN_1.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        className="es-tech-item"
                        style={{ "--brand-color": item.color }}
                        key={`t1-orig-${idx}`}
                      >
                        <span className="es-tech-icon" aria-hidden="true">
                          <Icon size={19} />
                        </span>
                        <span className="es-tech-name">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
                {/* Seamless loop duplication with aria-hidden to prevent screen reader redundancy */}
                <div className="es-tech-train-group" aria-hidden="true">
                  {TECH_TRAIN_1.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        className="es-tech-item"
                        style={{ "--brand-color": item.color }}
                        key={`t1-dup-${idx}`}
                      >
                        <span className="es-tech-icon" aria-hidden="true">
                          <Icon size={19} />
                        </span>
                        <span className="es-tech-name">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* TRAIN 2: Continuously moving left-to-right (Data Science, AI/ML, Generative AI & Agentic AI) */}
            <div className="es-tech-train-outer">
              <div className="es-tech-train-track es-train-ltr">
                <div className="es-tech-train-group">
                  {TECH_TRAIN_2.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        className="es-tech-item"
                        style={{ "--brand-color": item.color }}
                        key={`t2-orig-${idx}`}
                      >
                        <span className="es-tech-icon" aria-hidden="true">
                          <Icon size={19} />
                        </span>
                        <span className="es-tech-name">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
                {/* Seamless loop duplication with aria-hidden to prevent screen reader redundancy */}
                <div className="es-tech-train-group" aria-hidden="true">
                  {TECH_TRAIN_2.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div
                        className="es-tech-item"
                        style={{ "--brand-color": item.color }}
                        key={`t2-dup-${idx}`}
                      >
                        <span className="es-tech-icon" aria-hidden="true">
                          <Icon size={19} />
                        </span>
                        <span className="es-tech-name">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            SECTION 02 — SELECTED COMPANY WORK (DATA VALLEY AI TECH SOLUTIONS)
            ============================================================ */}
        <section id="company-work" className="es-company-work-section" data-nav-theme="light">
          <div className="es-bounds">

            {/* A. Company Work Editorial Introduction */}
            <div className="es-cw-header">
              <Reveal y={16} duration={0.8}>
                <div className="es-cw-eyebrow-row">
                  <span className="es-cw-live-pill">
                    <span className="es-cw-pulse-dot" aria-hidden="true"></span>
                    COMPANY PROJECT &middot; ONGOING
                  </span>
                  <span className="es-cw-company-badge">DATA VALLEY AI TECH SOLUTIONS</span>
                </div>
              </Reveal>

              <Reveal y={20} duration={0.9} delay={0.1}>
                <div style={{ fontSize: '12px', fontWeight: '800', letterSpacing: '0.12em', color: '#007aff', textTransform: 'uppercase', marginBottom: '8px' }}>
                  SELECTED COMPANY WORK
                </div>
                <h2 className="es-cw-headline">
                  Building technology that moves ideas into execution.
                </h2>
              </Reveal>

              <Reveal y={20} duration={0.9} delay={0.18}>
                <p className="es-cw-lead">
                  A selection of AI-powered platforms, assessment systems, and digital products developed through my professional work at Data Valley AI Tech Solutions.
                </p>
              </Reveal>
            </div>

            {/* B. Project Showcase — Two Distinct Premium Project Experiences */}
            <div className="es-cw-projects-stack">

              {/* ────────────────────────────────────────────────────────
                  SHOWCASE 01: DV LABS PLATFORM (ASYMMETRIC EDITORIAL)
                  ──────────────────────────────────────────────────────── */}
              <ScaleReveal className="es-cw-card-dvlabs">
                {/* 1. Top Editorial & Contribution Section */}
                <div className="es-cw-dvlabs-content-wrap">
                  <div className="es-cw-dvlabs-meta-bar">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <span className="es-cw-live-pill">
                        <span className="es-cw-pulse-dot" aria-hidden="true"></span>
                        COMPANY PROJECT &middot; ONGOING
                      </span>
                      <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#86868b', letterSpacing: '0.04em' }}>
                        DATA VALLEY AI TECH SOLUTIONS
                      </span>
                    </div>

                    <div className="es-cw-actions-compact">
                      <MagneticLink strength={0.2}>
                        <button
                          className="es-dv-btn-primary apple-pressable"
                          onClick={() => navigate('/work/dv-labs-platform')}
                          style={{ padding: '8px 18px', fontSize: '13px' }}
                        >
                          <span>Explore DV Labs Platform</span>
                          <ArrowRight size={14} />
                        </button>
                      </MagneticLink>
                      <MagneticLink strength={0.2}>
                        <a
                          href="https://dvlabs.datavalley.ai/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="es-dv-btn-secondary apple-pressable"
                          style={{ padding: '8px 18px', fontSize: '13px' }}
                        >
                          <span>Visit Environment ↗</span>
                        </a>
                      </MagneticLink>
                    </div>
                  </div>

                  <div className="es-cw-dvlabs-title-row">
                    <div className="es-cw-brand-mark-row">
                      <span className="es-cw-red-d" aria-hidden="true">D</span>
                      <h3 className="es-cw-brand-name">
                        DV <span className="serif-accent">Labs</span>
                      </h3>
                    </div>
                    <h4 className="es-cw-tagline-quote">
                      "Where vision meets execution."
                    </h4>
                  </div>

                  <div className="es-cw-dvlabs-details-grid">
                    <div className="es-cw-dvlabs-desc-side">
                      <p className="es-cw-subline">
                        Milestone-locked projects. Defended in viva. Built for the real world.
                      </p>
                      <p className="es-cw-desc">
                        An advanced company engineering ecosystem designed to bridge academic coursework with production engineering rigor through stage-gated milestones, automated AI viva defenses, and verifiable deliverables.
                      </p>
                    </div>

                    <div className="es-cw-dvlabs-contrib-side">
                      <div className="es-cw-contrib-box">
                        <div className="es-cw-contrib-label">MY CONTRIBUTION</div>
                        <p className="es-cw-contrib-text">
                          <strong>AI Solutions Developer | Full-Stack &amp; AI Systems:</strong> Engineered full-stack web application, AI viva questioning workflows, stage-gated milestone progress models, and speech processing integrations.
                        </p>
                      </div>

                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px' }}>
                        {["Next.js App Router", "React 19", "TypeScript", "Node.js", "MongoDB Atlas", "AI Viva Engine"].map((t) => (
                          <span key={t} style={{ fontSize: '11px', fontWeight: '600', padding: '4px 10px', background: '#f0f0f4', borderRadius: '6px', color: '#333336' }}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Full Panoramic Browser Showcase — Natural 1024x501 View */}
                <div className="es-cw-dvlabs-cinema-wrap">
                  <div className="es-cw-dvlabs-browser-window">
                    <div className="es-cw-dvlabs-chrome">
                      <div className="es-cw-window-dots">
                        <span className="es-dot dot-red" />
                        <span className="es-dot dot-yellow" />
                        <span className="es-dot dot-green" />
                      </div>
                      <div className="es-cw-browser-address-bar">
                        <span style={{ opacity: 0.6 }}>🔒</span>
                        <span>https://dvlabs.datavalley.ai/ (DV Labs)</span>
                      </div>
                      <div className="es-cw-chrome-status">
                        <span className="es-cw-pulse-dot" style={{ background: '#34c759' }}></span>
                        <span>OFFICIAL PRODUCT ENVIRONMENT</span>
                      </div>
                    </div>

                    <div className="es-cw-dvlabs-viewport">
                      <img
                        src={dvLabsHeroImg}
                        alt="DV Labs — Where vision meets execution. Milestone-locked projects defended in viva. Built for the real world."
                        className="es-cw-dvlabs-cinema-img"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="es-cw-dvlabs-caption-strip">
                    <span>FIGURE 1.0: OFFICIAL DV LABS PLATFORM ENVIRONMENT &middot; DATA VALLEY AI TECH SOLUTIONS</span>
                    <span style={{ color: '#007aff', fontWeight: '600' }}>ACTIVE COMPANY PRODUCT</span>
                  </div>
                </div>
              </ScaleReveal>

              {/* ────────────────────────────────────────────────────────
                  SHOWCASE 02: DV LABS ASSESSMENT PLATFORM (TECHNICAL CANVAS)
                  ──────────────────────────────────────────────────────── */}
              <ScaleReveal className="es-cw-card-assessment">
                <div className="es-cw-assessment-grid">
                  
                  {/* Left Column: Layered Browser Mockup of Live Platform */}
                  <div className="es-cw-assessment-preview-side">
                    <div className="es-cw-assessment-frame">
                      <div className="es-cw-assessment-chrome">
                        <div style={{ display: 'flex', gap: '6px' }}>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }}></span>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }}></span>
                          <span style={{ width: '9px', height: '9px', borderRadius: '50%', background: '#27c93f', display: 'inline-block' }}></span>
                        </div>
                        <div className="es-cw-assessment-url">
                          https://dv-assesments.vercel.app/
                        </div>
                        <span style={{ fontSize: '10.5px', fontWeight: '700', color: '#1b8738' }}>
                          ● LIVE
                        </span>
                      </div>
                      <img
                        src={dvAssessmentImg}
                        alt="DV Labs Assessment Platform showing candidate portal, 40-question palette, and countdown timer"
                        className="es-cw-assessment-img"
                        loading="lazy"
                      />
                    </div>
                    <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '11.5px', color: '#86868b' }}>
                      <span>Figure 2.0: Synchronized candidate testing canvas (40 questions)</span>
                      <span style={{ color: '#007aff', fontWeight: '600' }}>VERIFIED SYSTEM</span>
                    </div>
                  </div>

                  {/* Right Column: Engineering System Highlights */}
                  <div className="es-cw-assessment-info">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                      <span className="es-cw-live-pill">
                        <span className="es-cw-pulse-dot" aria-hidden="true"></span>
                        COMPANY PROJECT &middot; IN DEVELOPMENT
                      </span>
                      <span style={{ fontSize: '11.5px', fontWeight: '700', color: '#86868b', letterSpacing: '0.04em' }}>
                        DATA VALLEY AI TECH SOLUTIONS
                      </span>
                    </div>

                    <h3 className="es-cw-title">
                      DV Labs Assessment Platform
                    </h3>

                    <p className="es-cw-subline">
                      Candidate assessment platform with secure sessions, live timers, and server-side evaluation.
                    </p>

                    <p className="es-cw-desc">
                      An end-to-end technical evaluation application built for Data Valley AI Tech Solutions. Combines authenticated candidate workflows, synchronized countdown timers, background auto-save sync, deterministic server scoring, and proctoring telemetry.
                    </p>

                    {/* 4 Architectural Capability Boxes */}
                    <div className="es-cw-caps-strip">
                      <div className="es-cw-cap-box">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#007aff', marginBottom: '2px' }}>
                          <ShieldCheck size={14} />
                          <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.06em' }}>01 / AUTH</span>
                        </div>
                        <h5 style={{ margin: '0 0 2px 0', fontSize: '13px', fontWeight: 600 }}>Session Token Binding</h5>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666668' }}>JWT &amp; HTTP-only cookies prevent duplicate submissions.</p>
                      </div>

                      <div className="es-cw-cap-box">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ff9500', marginBottom: '2px' }}>
                          <Clock size={14} />
                          <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.06em' }}>02 / TIMING</span>
                        </div>
                        <h5 style={{ margin: '0 0 2px 0', fontSize: '13px', fontWeight: 600 }}>Timed 40-Question Canvas</h5>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666668' }}>Synchronized clock &amp; question palette.</p>
                      </div>

                      <div className="es-cw-cap-box">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34c759', marginBottom: '2px' }}>
                          <CheckCircle2 size={14} />
                          <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.06em' }}>03 / SYNC</span>
                        </div>
                        <h5 style={{ margin: '0 0 2px 0', fontSize: '13px', fontWeight: 600 }}>Delta Auto-Save</h5>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666668' }}>/api/assessment/sync eliminates data loss.</p>
                      </div>

                      <div className="es-cw-cap-box">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#af52de', marginBottom: '2px' }}>
                          <Terminal size={14} />
                          <span style={{ fontSize: '10px', fontWeight: '700', letterSpacing: '0.06em' }}>04 / SCORING</span>
                        </div>
                        <h5 style={{ margin: '0 0 2px 0', fontSize: '13px', fontWeight: 600 }}>Server Scoring</h5>
                        <p style={{ margin: 0, fontSize: '12px', color: '#666668' }}>Deterministic evaluation via API handlers.</p>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '4px' }}>
                      {["Next.js App Router", "React 19", "TypeScript", "MongoDB Atlas", "JWT / Cookies", "Bcrypt"].map((t) => (
                        <span key={t} style={{ fontSize: '11.5px', fontWeight: '600', padding: '4px 10px', background: '#f0f0f4', borderRadius: '6px', color: '#333336' }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="es-cw-actions">
                      <MagneticLink strength={0.2}>
                        <button
                          className="es-dv-btn-primary apple-pressable"
                          onClick={() => navigate('/work/data-valley-assessment-platform')}
                        >
                          <span>Read Assessment Case Study</span>
                          <ArrowRight size={15} />
                        </button>
                      </MagneticLink>
                      <MagneticLink strength={0.2}>
                        <a
                          href="https://dv-assesments.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="es-dv-btn-secondary apple-pressable"
                        >
                          <span>Launch Live Engine ↗</span>
                        </a>
                      </MagneticLink>
                    </div>
                  </div>

                </div>
              </ScaleReveal>

            </div>

          </div>
        </section>


        {/* ============================================================
            SECTION 03 — INDEPENDENT & PERSONAL PROJECTS
            ============================================================ */}
        <ScaleReveal as="section" id="independent-work" className="es-the-work" data-nav-theme="light">
          <div className="es-bounds">
            <Reveal y={24} duration={0.9}>
              <div className="es-section-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                  <span className="es-cw-live-pill" style={{ background: '#f5f5f7', color: '#555558', borderColor: '#e5e5ea' }}>
                    INDEPENDENT ENGINEERING &middot; OPEN SOURCE
                  </span>
                </div>
                <span className="es-section-label">PERSONAL PROJECTS &middot; INDEPENDENT SYSTEMS</span>
                <h2 className="es-display-headline">
                  Self-directed products &amp;<br />experimental architectures.
                </h2>
                <p style={{ maxWidth: '640px', fontSize: '15px', color: '#666668', marginTop: '10px', lineHeight: 1.6 }}>
                  Independently conceived and engineered applications exploring career intelligence, explainable ML transparency, conversational LLM architectures, and interactive 3D web experiences.
                </p>
              </div>
            </Reveal>

            <div className="es-cinematic-projects">
              {[
                {
                  id: "01",
                  name: "CareerOS",
                  badge: "PERSONAL PROJECT",
                  category: "AI CAREER INTELLIGENCE",
                  desc: "AI career intelligence platform that parses resumes, maps skills to market benchmarks, and produces explainable career strategy.",
                  img: careerosImg,
                  url: "/work/careeros",
                  theme: "light"
                },
                {
                  id: "02",
                  name: "VERITAS",
                  badge: "PERSONAL PROJECT",
                  category: "EXPLAINABLE INTELLIGENCE SYSTEM",
                  desc: "Deterministic credibility evaluation engine using Scikit-learn NLP pipelines to extract textual claims with mathematical transparency.",
                  img: veritasImg,
                  url: "/work/veritas",
                  theme: "dark"
                },
                {
                  id: "03",
                  name: "AuraOS",
                  badge: "PERSONAL PROJECT",
                  category: "PERSONAL AI OPERATING SYSTEM",
                  desc: "Context-preserving conversational platform bridging a React frontend with a secure Python/Flask LLM orchestration layer.",
                  img: auraosImg,
                  url: "/work/auraos",
                  theme: "light"
                },
                {
                  id: "04",
                  name: "VoltDrive",
                  badge: "PERSONAL PROJECT",
                  category: "DIGITAL PRODUCT EXPERIENCE",
                  desc: "High-performance digital vehicle showroom demonstrating fluid interaction choreography and responsive product engineering.",
                  img: voltdriveImg,
                  url: "/work/voltdrive",
                  theme: "dark"
                },
                {
                  id: "05",
                  name: "AgriVision AI",
                  badge: "PERSONAL PROJECT",
                  category: "INTELLIGENT CROP DIAGNOSTICS & EXPLAINABLE AI",
                  desc: "Computer vision and deep learning diagnostic system translating plant leaf imagery into disease classification and actionable agricultural insights.",
                  img: agrivisionImg,
                  url: "/work#agrivision",
                  theme: "light"
                }
              ].map((proj) => (
                <Reveal key={proj.id} y={40} duration={1.1} delay={0.1} className="es-project-showcase-env">
                  <SpringTilt maxTilt={2.2} scale={1.01} className={`es-project-showcase theme-${proj.theme} spring-card-lift`}>
                    <div className="es-ps-content">
                      <div className="es-ps-meta">
                        <span className="es-ps-id">{proj.id}</span>
                        <span style={{ fontSize: '10px', fontWeight: '800', letterSpacing: '0.08em', padding: '3px 8px', borderRadius: '4px', background: proj.theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)', color: proj.theme === 'dark' ? '#a1a1a6' : '#666668' }}>
                          {proj.badge}
                        </span>
                        <span className="es-ps-category">{proj.category}</span>
                      </div>
                      <h3 className="es-ps-title">{proj.name}</h3>
                      <p className="es-ps-desc">{proj.desc}</p>
                      <div style={{ marginTop: '16px' }}>
                        <Link to={proj.url} style={{ fontSize: '13px', fontWeight: '600', color: proj.theme === 'dark' ? '#ffffff' : '#007aff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                          <span>Explore System Architecture</span> &rarr;
                        </Link>
                      </div>
                    </div>
                    <div className="es-ps-visual">
                      <div className="es-ps-image-wrapper">
                        <img src={proj.img} alt={proj.name} loading="lazy" />
                      </div>
                    </div>
                  </SpringTilt>
                </Reveal>
              ))}
            </div>

            <Reveal y={20} duration={0.9} delay={0.2}>
              <div className="es-work-cta-wrap text-center">
                <MagneticLink strength={0.3}>
                  <button className="es-btn-primary apple-pressable" onClick={() => navigate('/work')}>
                    <span>Explore all work</span>
                    <ArrowRight size={16} />
                  </button>
                </MagneticLink>
              </div>
            </Reveal>
          </div>
        </ScaleReveal>


        {/* ============================================================
            SECTION 03 — THE DIFFERENCE (BUILD × TEACH)
            ============================================================ */}
        <ScaleReveal as="section" className="es-the-difference" data-nav-theme="light">
          <div className="es-bounds text-center">
            <Reveal y={24} duration={0.9}>
              <span className="es-section-label">THE DIFFERENCE</span>
              <h2 className="es-display-headline">
                I don't just write code.<br />
                <span className="text-muted">I engineer and teach systems.</span>
              </h2>
            </Reveal>

            {/* Transform Sequence */}
            <div className="es-transform-sequence-wrap">
              <Reveal y={20} duration={1.2} delay={0.3}>
                <div className="es-transform-sequence">
                  {['LOGIC', 'BACKEND', 'DATA / AI', 'EXPERIENCE', 'EDUCATION'].map((step, i, arr) => (
                    <React.Fragment key={step}>
                      <div className="es-ts-step">{step}</div>
                      {i < arr.length - 1 && <div className="es-ts-arrow">&rarr;</div>}
                    </React.Fragment>
                  ))}
                </div>
              </Reveal>
            </div>

            {/* Conceptual Areas */}
            <div className="es-conceptual-areas">
              {[
                { title: "BUILD", tags: "Python · FastAPI · Flask · Data Systems", desc: "Constructing robust backend services, data ingestion pipelines, and machine learning workflows engineered for predictable behavior." },
                { title: "TEACH", tags: "Data Science · AI/ML · Gen AI · Mentorship", desc: "Deconstructing complex architectures into clear mental models, live coding demonstrations, and hands-on lab exercises for students." },
                { title: "SYNERGY", tags: "Production Reality × Educational Rigor", desc: "Practical development keeps curriculum grounded in real-world patterns; teaching forces every design decision to be simple and transparent." }
              ].map((area, i) => (
                <Reveal key={area.title} y={30} duration={0.9} delay={i * 0.15} className="es-concept-area">
                  <div className="es-ca-inner">
                    <h3 className="es-ca-title">{area.title}</h3>
                    <div className="es-ca-tags">{area.tags}</div>
                    <div className="es-ca-hover-reveal">
                      <p>{area.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal y={20} duration={0.9} delay={0.4}>
              <p className="es-difference-quote">
                “Building software proves what works in practice. Teaching technology forces you to deconstruct complexity until every layer is transparent.”
              </p>
            </Reveal>
          </div>
        </ScaleReveal>


        {/* ============================================================
            SECTION 04 — CURRENTLY BUILDING
            ============================================================ */}
        <ScaleReveal as="section" className="es-currently-building" data-nav-theme="light">
          <div className="es-bounds">
            <Reveal y={24} duration={0.9}>
              <div className="es-section-header">
                <span className="es-section-label">CURRENT INITIATIVES</span>
                <h2 className="es-display-headline">Active development & training.</h2>
              </div>
            </Reveal>

            <div className="es-active-dashboard">
              {[
                {
                  num: "01",
                  name: "CareerOS",
                  category: "AI CAREER INTELLIGENCE",
                  desc: "Refining deterministic skill gap analysis and scoring pipelines across tech job descriptions.",
                  status: "ITERATING",
                  statusColor: "green",
                  url: "/work/careeros"
                },
                {
                  num: "02",
                  name: "VERITAS",
                  category: "EXPLAINABLE INTELLIGENCE",
                  desc: "Benchmarking claim extraction accuracy and linguistic feature weighting with transparent NLP models.",
                  status: "EVOLVING",
                  statusColor: "blue",
                  url: "/work/veritas"
                },
                {
                  num: "03",
                  name: "Data Valley AI Curricula",
                  category: "TECHNICAL EDUCATION",
                  desc: "Designing hands-on Generative AI and Data Science training modules for student cohorts in Vijayawada.",
                  status: "DELIVERING",
                  statusColor: "amber",
                  url: "/experience"
                }
              ].map((item, i) => (
                <Reveal key={item.num} y={30} duration={0.9} delay={i * 0.1} className="es-dashboard-item">
                  <Link to={item.url} className="es-di-link-wrapper">
                    <div className="es-di-header">
                      <span className="es-di-num">{item.num} — {item.name}</span>
                      <div className="es-di-status">
                        <span className={`es-status-dot pulse-${item.statusColor}`}></span>
                        {item.status} &rarr;
                      </div>
                    </div>
                    <div className="es-di-body">
                      <span className="es-di-category">{item.category}</span>
                      <p className="es-di-desc">{item.desc}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </ScaleReveal>


        {/* ============================================================
            SECTION 05 — DEVELOPER × TECHNICAL TRAINER
            ============================================================ */}
        <ScaleReveal as="section" className="es-engineer-educator" data-nav-theme="light">
          <div className="es-bounds">
            <div className="es-ee-layout">
              <div className="es-ee-left">
                <ScaleReveal className="es-ee-image-wrap" style={{ position: 'relative' }}>
                  <img src={datavalleyImg} alt="Technical training and mentorship session at Data Valley AI Tech Solutions" className="es-ee-image" loading="lazy" style={{ borderRadius: '16px' }} />
                  <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <span style={{ fontSize: '11px', fontWeight: '600', letterSpacing: '0.05em', color: '#111111', textTransform: 'uppercase' }}>Technical Mentorship &bull; Data Valley AI Tech Solutions</span>
                    <span style={{ fontSize: '12px', color: '#666666', lineHeight: '1.4' }}>Practical instruction in Python, Data Science, and Machine Learning workflows.</span>
                  </div>
                </ScaleReveal>
              </div>

              <div className="es-ee-right">
                <Reveal y={24} duration={0.9}>
                  <span className="es-section-label">DEVELOPER × TECHNICAL TRAINER</span>
                  <h2 className="es-ee-hl">
                    Engineering practical systems.<br />
                    Teaching others how to build.
                  </h2>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.2}>
                  <p className="es-ee-story">
                    At Data Valley AI Tech Solutions, I divide my time between hands-on engineering and technical education. I develop Python backend services, data processing pipelines, and applied AI applications while mentoring students and running workshops across Data Science, Machine Learning, and Generative AI.
                  </p>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.3}>
                  <div className="es-ee-marker" style={{ margin: '32px 0', paddingLeft: '16px', borderLeft: '2px solid rgba(0,0,0,0.1)' }}>
                    <div style={{ fontSize: '12px', fontWeight: '600', letterSpacing: '0.08em', color: '#111111', marginBottom: '4px' }}>DATA VALLEY AI TECH SOLUTIONS</div>
                    <div style={{ fontSize: '15px', fontWeight: '500', color: '#333333' }}>Developer & Technical Trainer</div>
                    <div style={{ fontSize: '13px', color: '#666666', marginTop: '2px' }}>Vijayawada &middot; Current Engagement</div>
                  </div>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.35}>
                  <p className="es-ee-story" style={{ fontStyle: 'italic', color: '#444444' }}>
                    "Teaching is another form of engineering:<br />breaking complex systems down until they become understandable."
                  </p>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.4}>
                  <div className="es-ee-action" style={{ marginTop: '32px' }}>
                    <MagneticLink strength={0.25}>
                      <button className="es-btn-secondary apple-pressable" onClick={() => navigate('/experience')}>
                        <span>Explore Experience & Curriculum</span>
                        <ArrowRight size={16} />
                      </button>
                    </MagneticLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </ScaleReveal>


        {/* ============================================================
            SECTION 05.5 — FEATURED ACHIEVEMENT: PBR VITS AI TECHNICAL TALK
            ============================================================ */}
        <ScaleReveal as="section" className="es-featured-talk" data-nav-theme="light">
          <div className="es-bounds">
            <div className="es-ft-grid">

              <div className="es-ft-media">
                <img
                  src={pbrTalkPhoto}
                  alt="Students attending the AI Innovation and Startup Opportunities technical talk at PBR VITS, Kavali, on October 10, 2026."
                  className="es-ft-img"
                  loading="lazy"
                />
                <div className="es-ft-media-badge">
                  PBR VITS, KAVALI &bull; OCT 10, 2026
                </div>
              </div>

              <div className="es-ft-content">
                <Reveal y={16} duration={0.8}>
                  <span className="es-ft-eyebrow">TECHNICAL TALK &middot; PBR VITS, KAVALI</span>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.1}>
                  <h2 className="es-ft-headline">
                    AI Innovation &amp;<br />Startup Opportunities
                  </h2>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.2}>
                  <p className="es-ft-copy">
                    Invited to share practical perspectives on AI innovation and startup opportunities with IV-year AIML students at PBR VITS, Kavali, on October 10, 2026.
                  </p>
                </Reveal>

                <Reveal y={16} duration={0.8} delay={0.25}>
                  <div className="es-ft-evidence-pill">
                    <span className="es-ft-evidence-dot"></span>
                    <span>Appreciation received from the Internal Quality Assurance Cell (IQAC)</span>
                  </div>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.3}>
                  <div className="es-ft-actions">
                    <MagneticLink strength={0.2}>
                      <button
                        className="es-ft-btn-primary apple-pressable"
                        onClick={() => navigate('/experience#pbr-vits')}
                      >
                        <span>Explore the Experience</span>
                        <ArrowRight size={15} />
                      </button>
                    </MagneticLink>

                    <MagneticLink strength={0.2}>
                      <button
                        className="es-ft-btn-secondary apple-pressable"
                        onClick={() => setIsLetterModalOpen(true)}
                        type="button"
                      >
                        <FileText size={15} />
                        <span>View Appreciation Letter</span>
                      </button>
                    </MagneticLink>
                  </div>
                </Reveal>
              </div>

            </div>
          </div>
        </ScaleReveal>


        {/* ============================================================
            SECTION 06 — THE LAB
            ============================================================ */}
        <ScaleReveal as="section" className="es-the-lab" data-nav-theme="light">
          <div className="es-bounds text-center">
            <Reveal y={24} duration={0.9}>
              <span className="es-section-label">THE LAB</span>
              <h2 className="es-display-headline">Where ideas become experiments.</h2>
            </Reveal>

            <div className="es-lab-grid">
              {[
                { domain: "AI & LLMs", tags: "RAG · Agents · Embeddings · Evaluation", visual: "ai-visual", icon: BrainCircuit },
                { domain: "COMPUTER VISION", tags: "Deep Learning · Transfer Learning · Intelligent Detection", visual: "cv-visual", icon: Scan },
                { domain: "INTERACTIVE SYSTEMS", tags: "Three.js · WebGL · Motion · 3D", visual: "interactive-visual", icon: Layers },
                { domain: "DEVELOPER INFRASTRUCTURE", tags: "FastAPI · PostgreSQL · Redis · Qdrant · Docker", visual: "infra-visual", icon: Server }
              ].map((lab, i) => {
                const Icon = lab.icon;
                return (
                  <Reveal key={lab.domain} y={30} duration={0.9} delay={i * 0.1} className="es-lab-card">
                    <div className={`es-lab-visual ${lab.visual}`}>
                      <div className="es-lv-pattern"></div>
                      <div className="es-lv-icon-wrapper">
                        <Icon size={40} strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="es-lab-content">
                      <h3 className="es-lab-domain">{lab.domain}</h3>
                      <p className="es-lab-tags">{lab.tags}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>

            <Reveal y={20} duration={0.9} delay={0.4}>
              <div className="es-lab-cta-wrap">
                <MagneticLink strength={0.3}>
                  <button className="es-btn-ghost apple-pressable" onClick={() => navigate('/innovation')}>
                    <span>Explore Innovation &rarr;</span>
                  </button>
                </MagneticLink>
              </div>
            </Reveal>
          </div>
        </ScaleReveal>


        {/* ============================================================
            SECTION 07 — THE JOURNEY
            ============================================================ */}
        <ScaleReveal as="section" className="es-the-journey" data-nav-theme="light">
          <div className="es-bounds">
            <Reveal y={24} duration={0.9}>
              <div className="es-section-header">
                <span className="es-section-label">THE TRAJECTORY</span>
                <h2 className="es-display-headline">
                  From fundamentals<br />
                  <span className="text-muted">to shipping and teaching.</span>
                </h2>
              </div>
            </Reveal>

            <div className="es-timeline-wrapper">
              <div className="es-timeline-scroll">
                <div className="es-timeline-track">
                  {[
                    { year: "2022", stage: "FOUNDATION", desc: "B.Tech in Artificial Intelligence & Data Science · Strong CS & ML Foundations" },
                    { year: "2024", stage: "ENGINEERING", desc: "Software Development & Applied ML across StudyOwl, SmartBridge, Blackbucks & Helson" },
                    { year: "2024", stage: "SYSTEMS", desc: "Architected & Shipped CareerOS · VERITAS · AuraOS · VoltDrive · AgriVision" },
                    { year: "NOW", stage: "PRODUCTION & TRAINING", desc: "Software Developer & Technical Trainer at Data Valley AI Tech Solutions" }
                  ].map((node, i) => (
                    <Reveal key={node.year} x={20} duration={0.8} delay={i * 0.15} className="es-timeline-node-container">
                      <div className="es-timeline-node">
                        <span className="es-tn-year">{node.year}</span>
                        <h4 className="es-tn-title">{node.stage}</h4>
                        <p className="es-tn-desc">{node.desc}</p>
                      </div>
                      {i < 3 && <div className="es-timeline-line"></div>}
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            <Reveal y={20} duration={0.9} delay={0.4}>
              <div className="es-journey-footer">
                <p className="es-journey-quote">“Every problem solved changes how you approach the next system.”</p>
                <MagneticLink strength={0.25}>
                  <button className="es-btn-link" onClick={() => navigate('/experience')}>
                    <span>View Full Experience Timeline &rarr;</span>
                  </button>
                </MagneticLink>
              </div>
            </Reveal>
          </div>
        </ScaleReveal>


        {/* ============================================================
            SECTION 08 — FINAL STATEMENT
            ============================================================ */}
        <ScaleReveal as="section" className="es-final-statement" data-nav-theme="light">
          <div className="es-bounds text-center">

            <Reveal y={24} duration={1.1}>
              <h2 className="es-final-hl">STILL BUILDING.</h2>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.2}>
              <p className="es-final-sub">The next product is already taking shape.</p>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.4}>
              <div className="es-final-actions">
                <MagneticLink strength={0.3}>
                  <button className="es-btn-primary apple-pressable" onClick={() => navigate('/work')}>
                    <span>Explore My Work &rarr;</span>
                  </button>
                </MagneticLink>

                <MagneticLink strength={0.3}>
                  <button className="es-btn-secondary apple-pressable" onClick={() => navigate('/connect')}>
                    <span>Let's Connect &rarr;</span>
                  </button>
                </MagneticLink>
              </div>
            </Reveal>

          </div>
        </ScaleReveal>

        {/* Live Document Viewer for PBR VITS Appreciation Letter */}
        <AppreciationLetterModal
          isOpen={isLetterModalOpen}
          onClose={() => setIsLetterModalOpen(false)}
        />

      </div>
    </>
  );
}
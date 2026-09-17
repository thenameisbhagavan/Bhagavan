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

export const FLAGSHIP_PROJECTS = [
  { name: "CareerOS", eyebrow: "Flagship Project", desc: "An intelligence layer for career trajectory.", img: careerOSImg, link: "/work/careeros", live: "https://careeros-thenameisbhagavan.vercel.app/" },
  { name: "AuraOS", eyebrow: "Personal Intelligence OS", desc: "A chatbot that actually remembers context.", img: chatImg, link: "/work/auraos", live: "https://aura-os-thenameisbhagavan.vercel.app/" },
  { name: "VERITAS", eyebrow: "Explainable Intelligence Platform", desc: "AI that shows its reasoning, not just its answer.", img: fakeImg, link: "/work/veritas", live: "https://veritas-thenameisbhagavan.vercel.app/" },
  { name: "VoltDrive", eyebrow: "Automotive Digital Showroom", desc: "A frontend experience built to feel alive.", img: voltDriveImg, link: "/work/voltdrive", live: "https://voltdrive-thenameisbhagavan.vercel.app/" }
];

export default function Work() {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState("01");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Update active project rail on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["careeros", "auraos", "veritas", "voltdrive"];
      const scrollPos = window.scrollY + window.innerHeight * 0.4;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveProject(`0${i + 1}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
        description="Engineering exhibition by Bhagavan. AI product engineer building intelligent systems, reasoning pipelines, full-stack software, and data-driven experiences. View AuraOS, CareerOS, VERITAS, and VoltDrive."
        keywords="TheNameIsBhagavan, Bhagavan Projects, AI Systems Engineering, Software Portfolio, CareerOS, AuraOS, VERITAS, VoltDrive, AI Product Engineer"
      />
      <div className="work-exhibition-page">

        {/* FLOATING SPATIAL PROJECT RAIL */}
        <div className="work-sticky-rail">
          {[
            { id: "01", name: "CAREEROS", target: "careeros" },
            { id: "02", name: "AURAOS", target: "auraos" },
            { id: "03", name: "VERITAS", target: "veritas" },
            { id: "04", name: "VOLTDRIVE", target: "voltdrive" }
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
                <span className="work-eyebrow-badge">SYSTEMS / 04</span>
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
                AI SYSTEMS &middot; PRODUCT ENGINEERING &middot; INTELLIGENT INTERFACES
              </p>
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
            ACT 02 — CAREEROS (CHAPTER 01 / 04)
            ============================================================ */}
        <section id="careeros" className="work-chapter chapter-careeros" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">CAREER INTELLIGENCE SYSTEM &middot; 01 / 04</span>
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
            ACT 03 — AURAOS (CHAPTER 02 / 04)
            ============================================================ */}
        <section id="auraos" className="work-chapter chapter-auraos" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">PERSONAL INTELLIGENCE OS &middot; 02 / 04</span>
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
            ACT 04 — VERITAS (CHAPTER 03 / 04)
            ============================================================ */}
        <section id="veritas" className="work-chapter chapter-veritas" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">EXPLAINABLE INTELLIGENCE &middot; 03 / 04</span>
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
            ACT 05 — VOLTDRIVE (CHAPTER 04 / 04)
            ============================================================ */}
        <section id="voltdrive" className="work-chapter chapter-voltdrive" data-nav-theme="light">
          <div className="exhibition-bounds">
            
            <div className="chapter-header-row">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">DIGITAL PRODUCT EXPERIENCE &middot; 04 / 04</span>
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
            ACT 06 — EARLIER EXPERIMENTS (COMPACT HORIZONTAL ARCHIVE)
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
            ACT 07 — WHAT THE WORK TAUGHT ME (EDITORIAL LESSONS)
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
            ACT 08 — CLOSING (CONTINUING QUESTION)
            ============================================================ */}
        <section className="work-closing-section" data-nav-theme="light">
          <div className="exhibition-bounds text-center">
            
            <Reveal y={24} duration={1.0}>
              <h2 className="closing-statement-main">
                Four systems.<br />
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

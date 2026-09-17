import React, { useState, useEffect } from "react";
import { X, ArrowRight, ExternalLink } from "lucide-react";
import SEO from "../components/SEO";
import BrandSignature from "../components/BrandSignature";
import Reveal from "../components/motion/Reveal";
import MaskReveal from "../components/motion/MaskReveal";
import ScaleReveal from "../components/motion/ScaleReveal";
import Parallax from "../components/motion/Parallax";
import MagneticLink from "../components/motion/MagneticLink";
import "../styles/Experience.css";

// ─── Certificate Artifacts & Assets ───────────────────────────────────────────
import studyOwlCert from "../assets/cert-studyowl.png";
import blackbucksCert from "../assets/cert-blackbucks.png";
import smartBridgeCert from "../assets/cert-smartbridge.png";
import helsonCert from "../assets/cert-helson.png";
import paceImg from "../assets/pace.jpg";

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

  const openViewer = (src, alt) => setViewerState({ isOpen: true, src, alt });
  const closeViewer = () => setViewerState((prev) => ({ ...prev, isOpen: false }));

  // Update active stage indicator on scroll
  useEffect(() => {
    const handleScroll = () => {
      const stages = ["blackbucks", "studyowl", "smartbridge", "helson", "datavalley"];
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
        description="Professional engineering evolution of Bhagavan. Technical AI/ML & Data Science Trainer at Data Valley. Documenting the trajectory across Data, Product, Intelligence, Systems, and Teaching."
        keywords="TheNameIsBhagavan, Bhagavan Experience, Technical AI/ML Trainer, Data Valley, AI Product Engineer, Machine Learning Experience, Software Engineering Evolution"
      />
      
      <ArtifactViewer 
        isOpen={viewerState.isOpen} 
        onClose={closeViewer} 
        imgSrc={viewerState.src} 
        imgAlt={viewerState.alt} 
      />

      <div className="exp-evolution-page">

        {/* FLOATING SPATIAL STAGE RAIL */}
        <div className="exp-sticky-rail">
          {[
            { id: "01", label: "DATA", target: "blackbucks" },
            { id: "02", label: "PRODUCT", target: "studyowl" },
            { id: "03", label: "INTELLIGENCE", target: "smartbridge" },
            { id: "04", label: "SYSTEMS", target: "helson" },
            { id: "05", label: "TEACHING", target: "datavalley" }
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
                <span className="hero-badge">ENGINEERING EVOLUTION &middot; 2022 — PRESENT</span>
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
                From working with data to building software, integrating intelligence, designing systems, and now teaching others to build.
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
                <span className="rm-current">TEACHING + BUILDING</span>
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
            ACT 06 — DATA VALLEY (STAGE 05 / 05 — TEACHING + BUILDING)
            ============================================================ */}
        <section id="datavalley" className="evo-chapter current-role-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge badge-active">CURRENT &middot; 2026 — PRESENT &middot; DATA VALLEY</span>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.1}>
                <h2 className="company-name">DATA VALLEY</h2>
              </Reveal>
              <Reveal y={16} duration={0.8} delay={0.15}>
                <span className="role-title highlight-role">Technical AI/ML & Data Science Trainer</span>
              </Reveal>
            </div>

            <Reveal y={24} duration={0.9} delay={0.2}>
              <blockquote className="chapter-statement">
                "Now I teach what I build."
              </blockquote>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.3}>
              <p className="chapter-desc">
                Designing and delivering hands-on training across Data Science, Machine Learning, and AI — turning technical concepts into structured lessons, coding exercises, and practical workflows.
              </p>
            </Reveal>

            {/* Role Responsibilities Tags */}
            <Reveal y={20} duration={0.8} delay={0.4}>
              <div className="responsibilities-tags-wrap">
                {[
                  "Curriculum Design", 
                  "Live Instruction", 
                  "Lab Development", 
                  "Project Mentoring", 
                  "Technical Communication", 
                  "Practical Sessions"
                ].map((tag) => (
                  <span key={tag} className="resp-tag">{tag}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>


        {/* ============================================================
            ACT 07 — PACE COLLEGE CASE STUDY (TEACHING CASE STUDY)
            ============================================================ */}
        <section className="evo-chapter pace-case-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            
            <div className="chapter-header-bar">
              <Reveal y={16} duration={0.8}>
                <span className="chapter-badge">TEACHING CASE STUDY &middot; PACE COLLEGE OF ENGINEERING</span>
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
                "Teaching AI is not just explaining models. It is teaching people how to think with them."
              </blockquote>
            </Reveal>

            <ScaleReveal className="pace-image-wrapper">
              <img src={paceImg} alt="PACE College Workshop" className="pace-image" loading="lazy" />
            </ScaleReveal>

            <Reveal y={20} duration={0.8} delay={0.4}>
              <div className="pace-meta-row">
                <span className="pm-tag">~300 STUDENTS</span>
                <span className="pm-tag">CSE &middot; AI&DS &middot; AI&ML</span>
                <span className="pm-tag">PROMPT ENGINEERING &middot; GENERATIVE AI</span>
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
                <span className="csp-highlight">TEACHING</span>
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

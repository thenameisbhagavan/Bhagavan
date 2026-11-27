import React, { useState, useEffect, useRef, useCallback } from "react";
import { m as Motion, AnimatePresence } from "framer-motion";
import {
  X,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  FileText,
  Terminal,
  Brain,
  ShieldCheck,
  Sparkles,
  Award,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import BrandSignature from "../components/BrandSignature";
import Reveal from "../components/motion/Reveal";
import MagneticLink from "../components/motion/MagneticLink";
import AppreciationLetterModal from "../components/AppreciationLetterModal";
import "../styles/Experience.css";

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

const ROLE_PILLARS = [
  {
    id: "01",
    tab: "Engineering",
    title: "DV Labs Product Engineering",
    role: "Developer & AI Solutions · Data Valley",
    desc: "Designing and engineering full-stack web modules with Next.js App Router, React 19, TypeScript, and MongoDB Atlas, powering milestone-locked capstone pipelines and AI viva defense.",
    telemetry: "NEXT.JS 15 · MONGODB ATLAS · VIVA WORKFLOWS",
    img: dvLabsHeroImg,
    stack: ["Next.js", "React 19", "TypeScript", "MongoDB Atlas"],
  },
  {
    id: "02",
    tab: "Assessment",
    title: "Assessment & Evaluation Canvas",
    role: "End-to-End Platform Architect",
    desc: "Built 40-question synchronized testing UI, HTTP-only JWT session binding, continuous background delta auto-sync (/api/assessment/sync), and server-authoritative evaluation.",
    telemetry: "DELTA SYNC · PROCTORED · SERVER SCORING",
    img: dvAssessmentImg,
    stack: ["JWT Auth", "REST Sync", "Next.js", "Server Scoring"],
  },
  {
    id: "03",
    tab: "Training",
    title: "Data Science & Applied AI Cohorts",
    role: "Technical Educator · Data Valley",
    desc: "Delivering project-based engineering cohorts across Python, Pandas, NumPy, Scikit-learn, Deep Learning, NLP, RAG architectures, and Generative AI workflows.",
    telemetry: "PYTHON · ML / DL · GENERATIVE AI",
    img: datavalleyImg,
    stack: ["Python", "Scikit-learn", "Deep Learning", "Generative AI"],
  },
  {
    id: "04",
    tab: "Outreach",
    title: "Campus Keynotes & Workshops",
    role: "Invited Technical Speaker",
    desc: "Leading intensive campus training workshops (150–300+ students at PACE Ongole) and technical sessions on AI innovation (PBR VITS Kavali, honored by IQAC letter).",
    telemetry: "300+ STUDENTS · IQAC APPRECIATED",
    img: pbrTalkPhoto,
    stack: ["Prompt Engineering", "Agentic AI", "System Architecture"],
  },
];

const FIELD_STAGES = [
  {
    id: "pbr",
    badge: "STAGE 01 · INVITED TECHNICAL TALK",
    institution: "P.B.R. Visvodaya Institute of Technology & Science (Autonomous)",
    location: "Kavali · October 2026",
    headline: "AI Innovation & Startup Opportunities",
    summary:
      "Addressed final-year CSE (AI/ML & Data Science) cohorts on applied RAG architectures, LLM deployment economics, and building resilient startup systems—recognized via official IQAC Letter of Appreciation.",
    metrics: [
      { label: "AUDIENCE", value: "IV-Year CSE & AI" },
      { label: "RECOGNITION", value: "Official IQAC Letter" },
    ],
    img: pbrTalkPhoto,
    imgAlt: "Technical talk at PBR VITS Kavali",
    docImg: pbrLetterImg,
    hasLetterModal: true,
    pillars: [
      "Real-World AI Innovation & Startup Viability",
      "Applied ML/NLP & RAG System Economics",
      "Career Architecture & Portfolio Signals",
      "Production Deployment Beyond Tutorials",
    ],
  },
  {
    id: "pace",
    badge: "STAGE 02 · ONE-WEEK HANDS-ON WORKSHOP",
    institution: "PACE Institute of Technology & Sciences",
    location: "Ongole, Andhra Pradesh",
    headline: "Generative AI & Prompt Engineering Bootcamp",
    summary:
      "Led an intensive week-long applied workshop for 150–300+ engineering students covering structured prompting, RAG context retrieval, AI agent workflows, and rapid product prototyping.",
    metrics: [
      { label: "COHORT SCALE", value: "150–300+ Students" },
      { label: "FORMAT", value: "Hands-On Labs" },
    ],
    img: paceImg,
    imgAlt: "Generative AI workshop at PACE Ongole",
    docImg: null,
    hasLetterModal: false,
    pillars: [
      "Deterministic Prompt Frameworks",
      "Tool Calling & Multi-Step Agent Loops",
      "Live Python & LLM API Integration",
      "Student Capstone Concept Validation",
    ],
  },
  {
    id: "dv",
    badge: "STAGE 03 · INDUSTRY TRAINING PRACTICE",
    institution: "Data Valley Training, Placements & IT Solutions",
    location: "Vijayawada · Aug 2026 – Present",
    headline: "Full-Stack Engineering & Applied Data Science Mentorship",
    summary:
      "Bridging software development and structured cohort delivery—guiding students through Python backends, MongoDB schemas, machine learning baselines, and capstone viva defenses.",
    metrics: [
      { label: "TENURE", value: "Aug 2026 – Present" },
      { label: "FOCUS", value: "Code + AI Cohorts" },
    ],
    img: datavalleyImg,
    imgAlt: "Data Valley Data Science and AI batch completion",
    docImg: null,
    hasLetterModal: false,
    pillars: [
      "Python, Pandas & Feature Engineering",
      "FastAPI, Flask & React Full-Stack Labs",
      "Capstone Milestone Reviews & Debugging",
      "Technical Interview Readiness",
    ],
  },
];

const INTERNSHIPS = [
  {
    company: "StudyOwl Education Pvt. Ltd.",
    role: "Software Development Intern",
    period: "Jan – Apr 2025",
    desc: "Developed RESTful APIs, authentication modules, and backend services using Node.js, Express.js, and MongoDB alongside reusable frontend UI.",
    cert: studyOwlCert,
    label: "StudyOwl Software Development Internship Certificate",
  },
  {
    company: "Blackbucks",
    role: "Machine Learning Intern (Remote)",
    period: "May – Jun 2024",
    desc: "Built structured Python data preprocessing, cleaning, and feature engineering pipelines with Pandas, NumPy, and Scikit-learn.",
    cert: blackbucksCert,
    label: "Blackbucks Machine Learning Internship Certificate",
  },
  {
    company: "SmartBridge",
    role: "Software Engineering Intern",
    period: "2024",
    desc: "Engineered CNN computer vision models with TensorFlow/Keras and exposed inference endpoints through Flask.",
    cert: smartBridgeCert,
    label: "SmartBridge Software Engineering Internship Certificate",
  },
  {
    company: "Helson",
    role: "Enterprise Automation Intern",
    period: "2024",
    desc: "Built automated multi-step organizational workflow systems with Microsoft PowerApps and Power Automate.",
    cert: helsonCert,
    label: "Helson Enterprise Automation Certificate",
  },
];

function ArtifactViewer({ isOpen, onClose, imgSrc, imgAlt }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="artifact-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <button className="am-close-btn" onClick={onClose} aria-label="Close viewer">
        <X size={22} />
      </button>
      <div className="am-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="am-modal-header">VERIFIED ARTIFACT</div>
        <img src={imgSrc} alt={imgAlt} className="am-modal-img" />
      </div>
    </div>
  );
}

export default function Experience() {
  const heroRef = useRef(null);
  const darkConsoleRef = useRef(null);

  const [activeIdentity, setActiveIdentity] = useState("dual");
  const [activePillarIdx, setActivePillarIdx] = useState(0);
  const [activeFieldIdx, setActiveFieldIdx] = useState(0);
  const [viewerState, setViewerState] = useState({ isOpen: false, src: "", alt: "" });
  const [isLetterModalOpen, setIsLetterModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleSpotlight = useCallback((ref, varX, varY) => (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty(varX, `${e.clientX - rect.left}px`);
    ref.current.style.setProperty(varY, `${e.clientY - rect.top}px`);
  }, []);

  const openViewer = (src, alt) => setViewerState({ isOpen: true, src, alt });
  const closeViewer = () => setViewerState((prev) => ({ ...prev, isOpen: false }));
  const scrollToStage = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const currentPillar = ROLE_PILLARS[activePillarIdx];
  const currentField = FIELD_STAGES[activeFieldIdx];

  return (
    <>
      <SEO
        title="Experience | TheNameIsBhagavan"
        description="Professional engineering & technical training experience of Siva Satya Sai Bhagavan Gopalajosyula (TheNameIsBhagavan) at Data Valley Training, Placements & IT Solutions."
        keywords="Bhagavan Experience, Developer and Data Science Trainer, Data Valley, PBR VITS, PACE Ongole"
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
        {/* ============================================================
            ACT 01 — APPLE PEARL EXPERIENCE HERO & TELEMETRY
            ============================================================ */}
        <section
          ref={heroRef}
          onMouseMove={handleSpotlight(heroRef, "--emx", "--emy")}
          className="exp-evolution-hero"
          data-nav-theme="light"
        >
          <div className="exp-hero-spotlight" aria-hidden="true" />
          <div className="evo-bounds">
            <Reveal y={14} duration={0.7}>
              <div className="hero-badge">
                <span className="exp-live-dot" aria-hidden="true" />
                DATA VALLEY TRAINING, PLACEMENTS &amp; IT SOLUTIONS &middot; VIJAYAWADA
              </div>
            </Reveal>

            <Motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hero-headline"
            >
              Engineering Real Systems.<br />
              <span className="exp-hl-muted">Teaching How They Work.</span>
            </Motion.h1>

            <p className="hero-sub">
              Combining full-stack product engineering (DV Labs, FastAPI, Next.js 15, MongoDB) with structured cohort instruction in Python, Machine Learning, and Generative AI.
            </p>

            {/* Dual-Identity Switcher */}
            <div className="exp-identity-bar">
              {[
                { id: "dual", label: "Combined Practice" },
                { id: "eng", label: "Software & AI Engineering" },
                { id: "edu", label: "Technical Education" },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setActiveIdentity(item.id);
                    if (item.id === "eng") setActivePillarIdx(0);
                    if (item.id === "edu") setActivePillarIdx(2);
                  }}
                  className={`exp-id-pill ${activeIdentity === item.id ? "active" : ""}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="exp-kpi-grid">
              <div className="exp-kpi-card">
                <Terminal size={16} color="#0071e3" />
                <div>
                  <span className="exp-kpi-val">Aug 2026 &ndash; Present</span>
                  <span className="exp-kpi-label">DEVELOPER &amp; TRAINER · DATA VALLEY</span>
                </div>
              </div>
              <div className="exp-kpi-card">
                <Users size={16} color="#0071e3" />
                <div>
                  <span className="exp-kpi-val">300+ Students</span>
                  <span className="exp-kpi-label">CAMPUS BOOTCAMPS &amp; TALKS</span>
                </div>
              </div>
              <div className="exp-kpi-card">
                <Award size={16} color="#34c759" />
                <div>
                  <span className="exp-kpi-val">IQAC Recognized</span>
                  <span className="exp-kpi-label">PBR VITS INVITED AI SESSION</span>
                </div>
              </div>
              <div className="exp-kpi-card">
                <Brain size={16} color="#0071e3" />
                <div>
                  <span className="exp-kpi-val">04 Internships</span>
                  <span className="exp-kpi-label">STUDYOwl · BLACKBUCKS · HELSON · SB</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Quick-Jump Dock */}
        <div className="apple-mobile-dock" role="navigation" aria-label="Experience Stages">
          {[
            { id: "01", label: "Role Console", target: "role-console" },
            { id: "02", label: "Field Proof", target: "field-theater" },
            { id: "03", label: "Internships", target: "internships" },
          ].map((st) => (
            <button
              key={st.id}
              type="button"
              className="apple-dock-chip"
              onClick={() => scrollToStage(st.target)}
            >
              <span className="apple-dock-chip-num">{st.id}</span>
              <span>{st.label}</span>
            </button>
          ))}
        </div>

        {/* ============================================================
            ACT 02 — DARK TITANIUM ACTIVE ROLE CONSOLE
            ============================================================ */}
        <section
          id="role-console"
          ref={darkConsoleRef}
          onMouseMove={handleSpotlight(darkConsoleRef, "--dmx", "--dmy")}
          className="exp-titanium-console"
          data-nav-theme="dark"
        >
          <div className="exp-console-spotlight" aria-hidden="true" />
          <div className="evo-bounds exp-console-inner">
            <div className="exp-console-header">
              <span className="exp-console-eyebrow">01 &middot; PRIMARY PRACTICE STAGE</span>
              <h2 className="exp-console-title">
                Developer &amp; Data Science Trainer.
              </h2>
              <p className="exp-console-sub">
                Data Valley Training, Placements &amp; IT Solutions, Vijayawada &middot; August 2026 &ndash; Present
              </p>
            </div>

            <div className="exp-console-grid">
              <div className="exp-console-rail" role="tablist" aria-label="Role Pillars">
                {ROLE_PILLARS.map((pillar, idx) => {
                  const isActive = activePillarIdx === idx;
                  return (
                    <button
                      key={pillar.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActivePillarIdx(idx)}
                      className={`exp-rail-btn ${isActive ? "active" : ""}`}
                    >
                      <span className="exp-rb-num">{pillar.id}</span>
                      <div className="exp-rb-text">
                        <span className="exp-rb-title">{pillar.title}</span>
                        <span className="exp-rb-role">{pillar.role}</span>
                      </div>
                      <ArrowRight size={14} className="exp-rb-arrow" />
                    </button>
                  );
                })}
              </div>

              <div className="exp-console-stage">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={currentPillar.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="exp-stage-card"
                  >
                    <div className="exp-stage-media">
                      <img
                        src={currentPillar.img}
                        alt={currentPillar.title}
                        className="exp-stage-img"
                      />
                      <div className="exp-stage-hud">
                        <span className="exp-blue-dot" aria-hidden="true" />
                        <span>{currentPillar.telemetry}</span>
                      </div>
                    </div>

                    <div className="exp-stage-body">
                      <h3 className="exp-stage-title">{currentPillar.title}</h3>
                      <p className="exp-stage-desc">{currentPillar.desc}</p>

                      <div className="exp-stage-stack">
                        {currentPillar.stack.map((tech) => (
                          <span key={tech} className="exp-stage-chip">{tech}</span>
                        ))}
                      </div>

                      <div className="exp-stage-actions">
                        <Link to="/work/dv-labs-platform" className="exp-white-pill">
                          <span>Inspect DV Labs</span>
                          <ArrowRight size={14} />
                        </Link>
                        <a
                          href="https://dvlabs.datavalley.ai/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="exp-ghost-pill"
                        >
                          <span>Visit Platform</span>
                          <ArrowUpRight size={14} />
                        </a>
                      </div>
                    </div>
                  </Motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 03 — INTERACTIVE FIELD IMPACT THEATER (PBR VITS & PACE)
            ============================================================ */}
        <section id="field-theater" className="exp-theater-section" data-nav-theme="light">
          <div className="evo-bounds">
            <div className="exp-theater-top">
              <div>
                <span className="exp-pearl-eyebrow">02 &middot; ACADEMIC OUTREACH &amp; DOCUMENTED IMPACT</span>
                <h2 className="exp-pearl-title">Evidence across institutions.</h2>
              </div>

              <div className="exp-theater-tabs" role="tablist" aria-label="Field Stage Selector">
                {FIELD_STAGES.map((st, idx) => (
                  <button
                    key={st.id}
                    type="button"
                    role="tab"
                    aria-selected={activeFieldIdx === idx}
                    onClick={() => setActiveFieldIdx(idx)}
                    className={`exp-tab-pill ${activeFieldIdx === idx ? "active" : ""}`}
                  >
                    {idx === 0 ? "PBR VITS Talk" : idx === 1 ? "PACE Workshop" : "Data Valley Batch"}
                  </button>
                ))}
              </div>
            </div>

            <AnimatePresence mode="wait">
              <Motion.div
                key={currentField.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="exp-theater-bento"
              >
                <div className="exp-tb-media">
                  <button
                    type="button"
                    className="exp-tb-photo-btn"
                    onClick={() => openViewer(currentField.img, currentField.imgAlt)}
                    aria-label={`Inspect ${currentField.institution} photo`}
                  >
                    <img
                      src={currentField.img}
                      alt={currentField.imgAlt}
                      className="exp-tb-img"
                    />
                    <span className="exp-tb-zoom-pill">VIEW PHOTO ↗</span>
                  </button>
                </div>

                <div className="exp-tb-details">
                  <span className="exp-tb-badge">{currentField.badge}</span>
                  <h3 className="exp-tb-title">{currentField.headline}</h3>
                  <p className="exp-tb-org">
                    {currentField.institution} &middot; {currentField.location}
                  </p>
                  <p className="exp-tb-summary">{currentField.summary}</p>

                  <div className="exp-tb-metrics">
                    {currentField.metrics.map((mItem) => (
                      <div key={mItem.label} className="exp-tb-metric-box">
                        <span className="exp-tbm-val">{mItem.value}</span>
                        <span className="exp-tbm-label">{mItem.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="exp-tb-pillars">
                    {currentField.pillars.map((p) => (
                      <span key={p} className="exp-tb-pillar-chip">
                        <ShieldCheck size={12} color="#0071e3" />
                        {p}
                      </span>
                    ))}
                  </div>

                  {currentField.hasLetterModal && (
                    <div className="exp-tb-doc-actions">
                      <button
                        type="button"
                        onClick={() => setIsLetterModalOpen(true)}
                        className="exp-black-pill apple-pressable"
                      >
                        <FileText size={14} />
                        <span>View IQAC Appreciation Letter</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => openViewer(currentField.docImg, "Official PBR VITS Letter")}
                        className="exp-outline-pill apple-pressable"
                      >
                        <span>Inspect Document</span>
                        <ExternalLink size={13} />
                      </button>
                    </div>
                  )}
                </div>
              </Motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ============================================================
            ACT 04 — VERIFIED INTERNSHIP BENTO ARCHIVE
            ============================================================ */}
        <section id="internships" className="exp-internships-section" data-nav-theme="light">
          <div className="evo-bounds">
            <div className="exp-int-header">
              <span className="exp-pearl-eyebrow">03 &middot; FOUNDATIONAL INDUSTRY INTERNSHIPS (2024 &ndash; 2025)</span>
              <h2 className="exp-pearl-title">Verified Engineering Credentials.</h2>
            </div>

            <div className="exp-int-grid">
              {INTERNSHIPS.map((item) => (
                <div key={item.company} className="artifact-card-container">
                  <div className="ac-top-meta">
                    <span className="ac-badge">{item.role.toUpperCase()}</span>
                    <span className="ac-doc-num">{item.period}</span>
                  </div>
                  <h3 className="exp-int-company">{item.company}</h3>
                  <p className="exp-int-desc">{item.desc}</p>
                  <button
                    type="button"
                    className="artifact-preview-btn"
                    onClick={() => openViewer(item.cert, item.label)}
                    aria-label={`Inspect ${item.label}`}
                  >
                    <img src={item.cert} alt={item.label} className="artifact-img" loading="lazy" />
                    <div className="artifact-hover-overlay">
                      <span>VIEW CERTIFICATE ↗</span>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 05 — CLOSING STUDIO SUMMARY
            ============================================================ */}
        <section className="exp-closing-section" data-nav-theme="light">
          <div className="evo-bounds text-center">
            <h2 className="closing-headline">
              Engineering Depth.<br />
              Educational Rigor.
            </h2>
            <div className="closing-stage-path">
              <span>SYSTEM ARCHITECTURE</span>
              <span className="csp-arrow">&rarr;</span>
              <span>PRODUCTION DEPLOYMENTS</span>
              <span className="csp-arrow">&rarr;</span>
              <span className="csp-highlight">DEVELOPMENT + TECHNICAL EDUCATION</span>
            </div>
            <p className="closing-subtext">
              Still building software. Still mentoring the next generation of builders.
            </p>
            <div className="exp-closing-ctas">
              <MagneticLink strength={0.2}>
                <Link to="/work" className="exp-black-pill">
                  <span>Explore Systems</span>
                  <ArrowRight size={14} />
                </Link>
              </MagneticLink>
              <MagneticLink strength={0.2}>
                <Link to="/resume" className="exp-outline-pill">
                  <Sparkles size={14} />
                  <span>View Resume</span>
                </Link>
              </MagneticLink>
            </div>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

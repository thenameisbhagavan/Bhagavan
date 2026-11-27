import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { m as Motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Plus,
  X,
  Cpu,
  ShieldCheck,
  Sparkles,
  Layers,
} from "lucide-react";
import SEO from "../components/SEO";
import BrandSignature from "../components/BrandSignature";
import Reveal from "../components/motion/Reveal";
import ScaleReveal from "../components/motion/ScaleReveal";
import SpringTilt from "../components/motion/SpringTilt";
import MagneticLink from "../components/motion/MagneticLink";
import { socialLinks } from "../constants/socialLinks";
import "../styles/Work.css";

import careerOSImg from "../assets/careeros-new.jpg";
import voltDriveImg from "../assets/ev.png";
import chatImg from "../assets/aurabot-new.png";
import fakeImg from "../assets/fake.jpg";
import agrivisionImg from "../assets/agrivision.png";
import dvAssessmentImg from "../assets/datavalley-assessment-platform.png";
import dvLabsHeroImg from "../assets/dvlabs-hero.jpg";
import dheergayushHeroImg from "../assets/dheergayush-hero.jpg";
import atsResumeImg from "../assets/resume.jpg";
import chatProxyImg from "../assets/chat.jpeg";

const FLAGSHIP_PROJECTS = [
  {
    id: "dv-labs-platform",
    name: "DV Labs Platform",
    category: "COMPANY PROJECT · ONGOING",
    categoryType: "company",
    tagline: "Where vision meets execution.",
    desc: "A Data Valley company development initiative designed to transform engineering capstone development through AI-powered mentorship, research intelligence, structured project engineering, technical evaluation, and career readiness.",
    img: dvLabsHeroImg,
    link: "/work/dv-labs-platform",
    live: "https://dvlabs.datavalley.ai/",
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
    live: "https://dv-assesments.vercel.app/",
  },
  { id: "careeros", name: "CareerOS", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Career Intelligence Platform", desc: "An intelligence layer for career trajectory.", img: careerOSImg, link: "/work/careeros", live: "https://careeros-thenameisbhagavan.vercel.app/" },
  { id: "auraos", name: "AuraOS", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Personal Intelligence OS", desc: "A chatbot that actually remembers context.", img: chatImg, link: "/work/auraos", live: "https://aura-os-thenameisbhagavan.vercel.app/" },
  { id: "veritas", name: "VERITAS", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Explainable Intelligence Platform", desc: "AI that shows its reasoning, not just its answer.", img: fakeImg, link: "/work/veritas", live: "https://veritas-thenameisbhagavan.vercel.app/" },
  { id: "voltdrive", name: "VoltDrive", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Automotive Digital Showroom", desc: "A frontend experience built to feel alive.", img: voltDriveImg, link: "/work/voltdrive", live: "https://voltdrive-thenameisbhagavan.vercel.app/" },
  { id: "agrivision", name: "AgriVision AI", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Intelligent Crop Diagnostics", desc: "From Crop Image to Explainable AI Insight.", img: agrivisionImg, link: "#agrivision", live: "https://github.com/thenameisbhagavan/Plant-disease-detection" },
  { id: "ats-resume", name: "ATS Resume Builder", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Full-Stack Web Platform", desc: "MERN application optimizing resumes against ATS filters with keyword extraction algorithms.", img: atsResumeImg, link: "#ats-resume", live: "https://github.com/thenameisbhagavan/Resumebuilderwebapp" },
  { id: "ai-chat", name: "AI Chat Proxy", category: "PERSONAL PROJECT", categoryType: "personal", eyebrow: "Secure LLM Gateway", desc: "Stateless backend bridge securing Gemini API interactions without browser key leakage.", img: chatProxyImg, link: "#ai-chat", live: "https://github.com/thenameisbhagavan/chatbotwebapp" },
];

const DV_LABS_LAYERS = [
  {
    num: "01",
    title: "Six-Stage Bilingual Video Tracks",
    desc: "Coordinates Telugu narration and AI avatar interactions guiding students from problem framing through architecture and viva defense.",
    telemetry: "BILINGUAL · 6-STAGE WORKFLOW",
    img: dvLabsHeroImg,
  },
  {
    num: "02",
    title: "Milestone-Locked Sprint Execution",
    desc: "Stage-gated checkpoints require passing automated verification baselines before unlocking subsequent implementation phases.",
    telemetry: "NEXT.JS 15 · TYPESCRIPT · MONGODB ATLAS",
    img: dvLabsHeroImg,
  },
  {
    num: "03",
    title: "600-Question Assessment & Viva Canvas",
    desc: "Integrated vision-based proctoring, delta answer sync, faculty dashboards, automated certificates, and AI Viva Voce defense.",
    telemetry: "PROCTORED · SERVER-SIDE SCORING",
    img: dvAssessmentImg,
  },
];

const DHEERGAYUSH_LAYERS = [
  {
    num: "01",
    title: "Real-Time 2D Doctor Lip-Sync",
    desc: "Custom audio-driven facial rigging, viseme amplitude synchronization, gestures, and zero-jank conversational animations.",
    telemetry: "WEB AUDIO API · REACT 19",
  },
  {
    num: "02",
    title: "Telugu, English & Tanglish Voice Loop",
    desc: "Seamless multilingual speech recognition, GPT-4o-mini reasoning with Gemini fallback, and SHA-256 cached low-latency TTS.",
    telemetry: "GPT-4O-MINI · TTS CACHING",
  },
  {
    num: "03",
    title: "Lexical Clinical RAG & Emergency Safety",
    desc: "70 curated clinical knowledge records, 24 structured FAQs, 48 bilingual audio clips, and deterministic emergency escalation.",
    telemetry: "RAG OVER 70 RECORDS · SAFE ROUTING",
  },
];

const INDEPENDENT_SYSTEMS = [
  {
    id: "01",
    anchor: "careeros",
    filterKey: "ai",
    category: "CAREER INTELLIGENCE",
    name: "CareerOS",
    tagline: "Career decisions unified in one graph.",
    desc: "Parses resumes, analyzes GitHub commit velocity, benchmarks real-time role requirements, and generates execution roadmaps.",
    challenge: "Job seekers juggle fragmented resume scanners, GitHub stats, and skill sheets without unified role readiness signals.",
    solution: "Engineered a full-stack React + FastAPI + Gemini intelligence pipeline unifying skill extraction, repository telemetry, and career mapping.",
    domain: "careeros-thenameisbhagavan.vercel.app",
    img: careerOSImg,
    route: "/work/careeros",
    live: "https://careeros-thenameisbhagavan.vercel.app/",
    source: `${socialLinks.github.url}/careeros`,
    stack: ["React", "FastAPI", "Python", "Gemini API", "MongoDB"],
    steps: ["01 Discover Context", "02 Evaluate Signals", "03 Reveal Skill Gaps", "04 Accelerate Path"],
  },
  {
    id: "02",
    anchor: "veritas",
    filterKey: "ai",
    category: "EXPLAINABLE NLP",
    name: "VERITAS",
    tagline: "AI that exposes its verification math.",
    desc: "Deterministic NLP credibility analysis decomposing claims, extracting verifiable signals, and auditing linguistic confidence.",
    challenge: "Opaque LLM veracity scores fail critical workflows because claims aren't traced back to auditable linguistic evidence.",
    solution: "Built a FastAPI + spaCy + Transformers verification pipeline exposing per-claim feature scores, evidence citations, and credibility bounds.",
    domain: "veritas-thenameisbhagavan.vercel.app",
    img: fakeImg,
    route: "/work/veritas",
    live: "https://veritas-thenameisbhagavan.vercel.app/",
    source: `${socialLinks.github.url}/veritas`,
    stack: ["React", "FastAPI", "spaCy", "Transformers", "scikit-learn"],
    steps: ["01 Claim Extraction", "02 Feature Attribution", "03 Evidence Tracing", "04 Transparent Audit"],
  },
  {
    id: "03",
    anchor: "auraos",
    filterKey: "ai",
    category: "CONTEXT OPERATING LAYER",
    name: "AuraOS",
    tagline: "Conversations that remember why they started.",
    desc: "Spatial AI workspace fusing persistent memory graphs, vector retrieval, and connected multi-session reasoning.",
    challenge: "Stateless LLM chat interfaces lose architectural context every session, forcing repetitive user prompting.",
    solution: "Constructed a semantic session-state graph with vector recall and RAG orchestration so past constraints inform present actions.",
    domain: "aura-os-thenameisbhagavan.vercel.app",
    img: chatImg,
    route: "/work/auraos",
    live: "https://aura-os-thenameisbhagavan.vercel.app/",
    source: `${socialLinks.github.url}/auraos`,
    stack: ["React", "Flask", "RAG", "Vector Search", "State Graphs"],
    steps: ["01 Memory Capture", "02 Semantic Recall", "03 Reasoning Fusion"],
  },
  {
    id: "04",
    anchor: "voltdrive",
    filterKey: "spatial",
    category: "3D AUTOMOTIVE SHOWROOM",
    name: "VoltDrive",
    tagline: "Spatial WebGL choreography at 60 FPS.",
    desc: "Interactive electric vehicle digital showroom built with Three.js, React Three Fiber, GSAP camera paths, and telemetry UI.",
    challenge: "Interactive 3D showcase sites frequently stutter on mid-tier hardware due to heavy shaders and synchronous state updates.",
    solution: "Paired GPU-friendly PBR lighting, GSAP scroll-camera keyframes, and Framer Motion spring HUDs into an effortless product experience.",
    domain: "voltdrive-thenameisbhagavan.vercel.app",
    img: voltDriveImg,
    route: "/work/voltdrive",
    live: "https://voltdrive-thenameisbhagavan.vercel.app/",
    source: `${socialLinks.github.url}/voltdrive`,
    stack: ["React 19", "Three.js", "React Three Fiber", "GSAP"],
    steps: ["01 GLTF Pipeline", "02 Camera Curves", "03 Hardware Physics", "04 Telemetry UI"],
  },
  {
    id: "05",
    anchor: "agrivision",
    filterKey: "ai",
    category: "COMPUTER VISION & XAI",
    name: "AgriVision AI",
    tagline: "Visible Grad-CAM attribution for agriculture.",
    desc: "MobileNetV2 plant pathology engine highlighting leaf lesions with Grad-CAM overlays so farmers see why a diagnosis occurred.",
    challenge: "Crop classification models give raw labels without explaining whether predictions inspect real disease lesions or background clutter.",
    solution: "Combined MobileNetV2 inference with FastAPI Grad-CAM heatmap generation to visualize model attention directly over field images.",
    domain: "github.com/thenameisbhagavan",
    img: agrivisionImg,
    route: null,
    live: null,
    source: "https://github.com/thenameisbhagavan/Plant-disease-detection",
    stack: ["React", "FastAPI", "TensorFlow", "MobileNetV2", "Grad-CAM"],
    steps: ["01 Leaf Capture", "02 CNN Classification", "03 Grad-CAM Masking"],
  },
  {
    id: "06",
    anchor: "ats-resume",
    filterKey: "spatial",
    category: "FULL-STACK PARSER",
    name: "ATS Resume Builder",
    tagline: "Lexical overlap & semantic resume validation.",
    desc: "MERN web platform scoring candidate resumes against role descriptions, auditing parser hygiene, and exporting clean formats.",
    challenge: "Candidates lose visibility to automated parser rejection without knowing which structure or keyword signals fail matching.",
    solution: "Engineered deterministic keyword matching, single-column semantic formatting rules, and authenticated PDF/JSON generation.",
    domain: "github.com/thenameisbhagavan",
    img: atsResumeImg,
    route: null,
    live: null,
    source: "https://github.com/thenameisbhagavan/Resumebuilderwebapp",
    stack: ["React", "Node.js", "Express", "MongoDB", "OAuth"],
    steps: ["01 Role Tokenize", "02 Overlap Match", "03 Parser Audit", "04 Clean Export"],
  },
  {
    id: "07",
    anchor: "ai-chat",
    filterKey: "ai",
    category: "STATELESS LLM BRIDGE",
    name: "AI Chat Gateway",
    tagline: "Zero browser-exposed upstream API secrets.",
    desc: "Python & Flask proxy server enforcing secret isolation, rate limiting, timeout handling, and clean streaming markdown delivery.",
    challenge: "Prototype web interfaces often embed upstream LLM API keys directly in client bundles, creating immediate credential exposure.",
    solution: "Built a hardened stateless proxy gateway isolating Gemini keys server-side with CORS guardrails and streaming recovery.",
    domain: "github.com/thenameisbhagavan",
    img: chatProxyImg,
    route: null,
    live: null,
    source: "https://github.com/thenameisbhagavan/chatbotwebapp",
    stack: ["Python", "Flask", "Gemini API", "React", "REST Proxy"],
    steps: ["01 Key Isolation", "02 Timeout Guards", "03 Streaming Client"],
  },
];

export default function Work() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const darkConsoleRef = useRef(null);
  const dheerCardRef = useRef(null);

  const [activeFilter, setActiveFilter] = useState("all");
  const [activeDvLayerIdx, setActiveDvLayerIdx] = useState(0);
  const [activeDheerLayerIdx, setActiveDheerLayerIdx] = useState(0);
  const [activeConsoleIdx, setActiveConsoleIdx] = useState(0);
  const [inspectSpec, setInspectSpec] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setInspectSpec(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleSpotlight = useCallback((ref, varX = "--wmx", varY = "--wmy") => (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty(varX, `${e.clientX - rect.left}px`);
    ref.current.style.setProperty(varY, `${e.clientY - rect.top}px`);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const activeDvLayer = DV_LABS_LAYERS[activeDvLayerIdx];
  const activeDheerLayer = DHEERGAYUSH_LAYERS[activeDheerLayerIdx];
  const activeConsoleSys = INDEPENDENT_SYSTEMS[activeConsoleIdx];

  const filteredGridSystems = INDEPENDENT_SYSTEMS.filter((s) =>
    activeFilter === "all" ? true : s.filterKey === activeFilter
  );

  return (
    <>
      <SEO
        title="Work | TheNameIsBhagavan"
        description="Engineering exhibition by Siva Satya Sai Bhagavan Gopalajosyula (TheNameIsBhagavan) — Software Engineer & AI/Data Science Trainer. Explore DV Labs Platform, DHEERGAYUSH, CareerOS, AuraOS, VERITAS, VoltDrive, and AgriVision AI."
        keywords="TheNameIsBhagavan, Bhagavan Projects, DV Labs, DHEERGAYUSH, CareerOS, AuraOS, VERITAS, VoltDrive, AgriVision AI"
      />

      <div className="work-exhibition-page">
        {/* ============================================================
            ACT 01 — APPLE PEARL EXHIBITION HERO & JUMP BAR
            ============================================================ */}
        <section
          ref={heroRef}
          onMouseMove={handleSpotlight(heroRef)}
          className="work-exhibition-hero"
          data-nav-theme="light"
        >
          <div className="wk-hero-spotlight" aria-hidden="true" />
          <div className="exhibition-bounds">
            <Reveal y={14} duration={0.7}>
              <div className="work-hero-eyebrow">
                <span className="work-eyebrow-badge">
                  <span className="wk-live-dot" aria-hidden="true" />
                  ENGINEERING EXHIBITION &middot; 10 SHIPPED ARCHITECTURES
                </span>
              </div>
            </Reveal>

            <Motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="work-hero-headline"
            >
              Systems engineered for{" "}
              <span className="wk-hl-muted">real-world precision.</span>
            </Motion.h1>

            <Reveal y={16} duration={0.8} delay={0.12}>
              <p className="work-hero-sub-para">
                Production software platforms, bilingual clinical voice AI, explainable NLP pipelines, and spatial 3D interfaces built across Data Valley and independent research.
              </p>
            </Reveal>

            {/* Quick Section Jump Pills (Works cleanly across any viewport size) */}
            <div className="wk-jump-pills" role="navigation" aria-label="Work Categories">
              <button
                type="button"
                className="wk-jump-btn primary apple-pressable"
                onClick={() => scrollToSection("flagships")}
              >
                <Sparkles size={14} />
                <span>Flagship Systems (03)</span>
              </button>
              <button
                type="button"
                className="wk-jump-btn apple-pressable"
                onClick={() => scrollToSection("systems-console")}
              >
                <Cpu size={14} />
                <span>Independent Console (07)</span>
              </button>
              <button
                type="button"
                className="wk-jump-btn apple-pressable"
                onClick={() => scrollToSection("lessons-titanium")}
              >
                <Layers size={14} />
                <span>Architectural Lessons</span>
              </button>
            </div>

            <div className="wk-telemetry-strip">
              <div className="wk-tel-item">
                <span className="wk-tel-val">DV Labs + DHEERGAYUSH</span>
                <span className="wk-tel-key">PRODUCTION FLAGSHIPS</span>
              </div>
              <div className="wk-tel-item">
                <span className="wk-tel-val">Next.js 15 &middot; FastAPI &middot; Python</span>
                <span className="wk-tel-key">CORE RUNTIME STACK</span>
              </div>
              <div className="wk-tel-item">
                <span className="wk-tel-val">OpenAI &middot; Gemini &middot; Web Audio</span>
                <span className="wk-tel-key">APPLIED AI LAYER</span>
              </div>
            </div>
          </div>
        </section>

        {/* Sticky Multi-Device Jump Dock */}
        <div className="apple-mobile-dock" role="navigation" aria-label="Systems Quick Jump">
          {[
            { id: "01", name: "DV Labs", target: "dv-labs-platform" },
            { id: "02", name: "Dheergayush", target: "dheergayush-work" },
            { id: "03", name: "Assessment", target: "data-valley-assessment" },
            { id: "04", name: "Console", target: "systems-console" },
            { id: "05", name: "Lessons", target: "lessons-titanium" },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              className="apple-dock-chip"
              onClick={() => scrollToSection(item.target)}
            >
              <span className="apple-dock-chip-num">{item.id}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* ============================================================
            ACT 02 — INTERACTIVE APPLE DUO & TRIO FLAGSHIP STAGES
            ============================================================ */}
        <section id="flagships" className="wk-flagships-section" data-nav-theme="light">
          <div className="exhibition-bounds">
            <div className="wk-section-header">
              <span className="wk-eyebrow">01 &middot; PRODUCTION &amp; CLINICAL FLAGSHIPS</span>
              <h2 className="wk-section-title">Flagship engineering initiatives.</h2>
            </div>

            <div className="wk-duo-stack">
              {/* FLAGSHIP 01: DV LABS (PEARL INTERACTIVE 2-COL) */}
              <ScaleReveal id="dv-labs-platform" className="wk-duo-card theme-pearl">
                <div className="wk-duo-grid">
                  <div className="wk-duo-content">
                    <div className="wk-duo-meta">
                      <span className="wk-duo-eyebrow">DATA VALLEY &middot; PRODUCTION PLATFORM</span>
                      <span className="wk-status-badge green">
                        <span className="wk-live-dot" aria-hidden="true" />
                        ACTIVE SYSTEM
                      </span>
                    </div>

                    <h3 className="wk-duo-title">
                      DV Labs<span className="wk-dot">.</span>
                    </h3>
                    <p className="wk-duo-quote">Where vision meets execution.</p>
                    <p className="wk-duo-desc">
                      AI-guided capstone-to-career engineering platform with bilingual video tracks, milestone-locked sprints, 600-question proctored assessments, and automated AI viva defense.
                    </p>

                    <div className="wk-layer-tabs" role="tablist" aria-label="DV Labs Capabilities">
                      {DV_LABS_LAYERS.map((layer, idx) => {
                        const isSelected = activeDvLayerIdx === idx;
                        return (
                          <button
                            key={layer.num}
                            type="button"
                            role="tab"
                            aria-selected={isSelected}
                            onClick={() => setActiveDvLayerIdx(idx)}
                            className={`wk-layer-btn ${isSelected ? "active" : ""}`}
                          >
                            <div className="wk-lb-head">
                              <span className="wk-lb-num">{layer.num}</span>
                              <span className="wk-lb-title">{layer.title}</span>
                              <ArrowRight size={13} className="wk-lb-arrow" />
                            </div>
                            {isSelected && <p className="wk-lb-desc">{layer.desc}</p>}
                          </button>
                        );
                      })}
                    </div>

                    <div className="wk-duo-actions">
                      <MagneticLink strength={0.2}>
                        <Link
                          to={
                            activeDvLayerIdx === 2
                              ? "/work/data-valley-assessment-platform"
                              : "/work/dv-labs-platform"
                          }
                          className="work-btn-primary"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight size={14} />
                        </Link>
                      </MagneticLink>
                      <MagneticLink strength={0.2}>
                        <a
                          href={
                            activeDvLayerIdx === 2
                              ? "https://dv-assesments.vercel.app/"
                              : "https://dvlabs.datavalley.ai/"
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="work-btn-secondary"
                        >
                          <span>Visit Platform</span>
                          <ArrowUpRight size={14} />
                        </a>
                      </MagneticLink>
                    </div>
                  </div>

                  <div className="wk-duo-visual">
                    <SpringTilt maxTilt={2.2} scale={1.01} className="wk-tilt-box">
                      <div className="wk-visual-frame">
                        <AnimatePresence mode="wait">
                          <Motion.img
                            key={activeDvLayer.num}
                            src={activeDvLayer.img}
                            alt="DV Labs Production Environment"
                            initial={{ opacity: 0, scale: 1.02 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.99 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="wk-visual-img"
                          />
                        </AnimatePresence>
                        <div className="wk-visual-hud">
                          <span className="wk-live-dot" aria-hidden="true" />
                          <span>{activeDvLayer.telemetry}</span>
                        </div>
                      </div>
                    </SpringTilt>
                  </div>
                </div>
              </ScaleReveal>

              {/* FLAGSHIP 02: DHEERGAYUSH (DARK OBSIDIAN TITANIUM 2-COL) */}
              <ScaleReveal id="dheergayush-work" className="wk-duo-card theme-obsidian">
                <div
                  ref={dheerCardRef}
                  onMouseMove={handleSpotlight(dheerCardRef, "--dmx", "--dmy")}
                  className="wk-obsidian-inner"
                >
                  <div className="wk-obsidian-spotlight" aria-hidden="true" />
                  <div className="wk-duo-grid reversed">
                    <div className="wk-duo-content">
                      <div className="wk-duo-meta">
                        <span className="wk-duo-eyebrow dark">
                          CLINICAL VOICE AI &middot; DHEERGAYUSH.COM
                        </span>
                        <span className="wk-status-badge blue">
                          <span className="wk-blue-dot" aria-hidden="true" />
                          VOICE &amp; 2D AVATAR
                        </span>
                      </div>

                      <h3 className="wk-duo-title dark">
                        DHEERGAYUSH<span className="wk-dot">.</span>
                      </h3>
                      <p className="wk-duo-quote dark">Healthcare interaction. In every language.</p>
                      <p className="wk-duo-desc dark">
                        End-to-end 2D interactive doctor avatar powered by GPT-4o-mini, Gemini fallback, SHA-256 TTS audio caching, facial lip-sync, and Telugu/English/Tanglish voice interaction.
                      </p>

                      <div className="wk-layer-tabs" role="tablist" aria-label="Dheergayush Capabilities">
                        {DHEERGAYUSH_LAYERS.map((layer, idx) => {
                          const isSelected = activeDheerLayerIdx === idx;
                          return (
                            <button
                              key={layer.num}
                              type="button"
                              role="tab"
                              aria-selected={isSelected}
                              onClick={() => setActiveDheerLayerIdx(idx)}
                              className={`wk-layer-btn dark ${isSelected ? "active" : ""}`}
                            >
                              <div className="wk-lb-head">
                                <span className="wk-lb-num dark">{layer.num}</span>
                                <span className="wk-lb-title dark">{layer.title}</span>
                                <ArrowRight size={13} className="wk-lb-arrow" />
                              </div>
                              {isSelected && <p className="wk-lb-desc dark">{layer.desc}</p>}
                            </button>
                          );
                        })}
                      </div>

                      <div className="wk-duo-actions">
                        <a
                          href="https://dheergayush.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="wk-btn-white-pill apple-pressable"
                        >
                          <span>Visit dheergayush.com</span>
                          <ArrowUpRight size={14} />
                        </a>
                        <button
                          type="button"
                          className="wk-btn-dark-ghost apple-pressable"
                          onClick={() => scrollToSection("systems-console")}
                        >
                          <span>Compare Architecture</span>
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="wk-duo-visual">
                      <SpringTilt maxTilt={2.2} scale={1.01} className="wk-tilt-box">
                        <div className="wk-visual-frame dark">
                          <img
                            src={dheergayushHeroImg}
                            alt="Dheergayush Clinical Telemedicine Platform"
                            className="wk-visual-img"
                            loading="lazy"
                          />
                          <div className="wk-visual-hud dark">
                            <span className="wk-blue-dot" aria-hidden="true" />
                            <span>{activeDheerLayer.telemetry}</span>
                          </div>
                        </div>
                      </SpringTilt>
                    </div>
                  </div>
                </div>
              </ScaleReveal>

              {/* FLAGSHIP 03: DV LABS ASSESSMENT PLATFORM */}
              <ScaleReveal id="data-valley-assessment" className="wk-duo-card theme-pearl">
                <div className="wk-duo-grid">
                  <div className="wk-duo-content">
                    <div className="wk-duo-meta">
                      <span className="wk-duo-eyebrow">ENTERPRISE ASSESSMENT ENGINE</span>
                      <span className="wk-status-badge green">
                        <ShieldCheck size={12} />
                        ZERO DATA LOSS
                      </span>
                    </div>

                    <h3 className="wk-duo-title">
                      DV Assessments<span className="wk-dot">.</span>
                    </h3>
                    <p className="wk-duo-quote">40 challenges. Server-authoritative integrity.</p>
                    <p className="wk-duo-desc">
                      Architected HTTP-only JWT cookie binding, continuous background delta sync (`/api/assessment/sync`), blur/focus integrity telemetry, and tamper-proof scoring (`/api/assessment/submit`).
                    </p>

                    <div className="wk-spec-chips">
                      {["Next.js App Router", "React 19", "TypeScript", "MongoDB Atlas", "JWT Cookies"].map((t) => (
                        <span key={t} className="wk-spec-chip">{t}</span>
                      ))}
                    </div>

                    <div className="wk-duo-actions">
                      <Link to="/work/data-valley-assessment-platform" className="work-btn-primary">
                        <span>Explore Case Study</span>
                        <ArrowRight size={14} />
                      </Link>
                      <a
                        href="https://dv-assesments.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-btn-secondary"
                      >
                        <span>Launch Assessment</span>
                        <ArrowUpRight size={14} />
                      </a>
                    </div>
                  </div>

                  <div className="wk-duo-visual">
                    <div className="wk-visual-frame">
                      <img
                        src={dvAssessmentImg}
                        alt="Data Valley Engineering Assessment Platform"
                        className="wk-visual-img"
                        loading="lazy"
                      />
                      <div className="wk-visual-hud">
                        <span className="wk-live-dot" aria-hidden="true" />
                        <span>40 QUESTIONS &middot; DELTA AUTO-SYNC</span>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleReveal>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 03 — DARK TITANIUM INTERACTIVE SYSTEMS CONSOLE (07 PLATFORMS)
            ============================================================ */}
        <section
          id="systems-console"
          ref={darkConsoleRef}
          onMouseMove={handleSpotlight(darkConsoleRef, "--cmx", "--cmy")}
          className="wk-console-section"
          data-nav-theme="dark"
        >
          <div className="wk-console-spotlight" aria-hidden="true" />
          <div className="exhibition-bounds wk-console-inner">
            <div className="wk-console-header">
              <span className="wk-console-eyebrow">02 &middot; INTERACTIVE SYSTEMS CONSOLE</span>
              <h2 className="wk-console-headline">
                Seven independent architectures.<br />One interactive inspector.
              </h2>
              <p className="wk-console-lead">
                Select any system from the engineering rail to inspect its runtime stage, pipeline architecture, and live deployment.
              </p>
            </div>

            <div className="wk-console-stage">
              <div className="wk-console-rail" role="tablist" aria-label="Independent Platforms">
                {INDEPENDENT_SYSTEMS.map((sys, idx) => {
                  const isActive = activeConsoleIdx === idx;
                  return (
                    <button
                      key={sys.id}
                      id={sys.anchor}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveConsoleIdx(idx)}
                      className={`wk-rail-btn ${isActive ? "active" : ""}`}
                    >
                      <span className="wk-rb-num">{sys.id}</span>
                      <div className="wk-rb-copy">
                        <span className="wk-rb-name">{sys.name}</span>
                        <span className="wk-rb-cat">{sys.category}</span>
                      </div>
                      <ArrowRight size={14} className="wk-rb-arrow" />
                    </button>
                  );
                })}
              </div>

              <div className="wk-console-viewport">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={activeConsoleSys.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="wk-console-panel"
                  >
                    <div className="wk-cp-chrome">
                      <div className="wk-cp-dots" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                      </div>
                      <span className="wk-cp-domain">{activeConsoleSys.domain}</span>
                      <span className="wk-cp-tag">{activeConsoleSys.category}</span>
                    </div>

                    <div className="wk-cp-media">
                      <img
                        src={activeConsoleSys.img}
                        alt={activeConsoleSys.name}
                        className="wk-cp-img"
                      />
                    </div>

                    <div className="wk-cp-body">
                      <h3 className="wk-cp-title">{activeConsoleSys.name}</h3>
                      <p className="wk-cp-tagline">{activeConsoleSys.tagline}</p>
                      <p className="wk-cp-desc">{activeConsoleSys.desc}</p>

                      <div className="wk-cp-steps">
                        {activeConsoleSys.steps.map((st) => (
                          <span key={st} className="wk-cp-step-pill">{st}</span>
                        ))}
                      </div>

                      <div className="wk-cp-footer">
                        <div className="wk-cp-stack">
                          {activeConsoleSys.stack.map((tech) => (
                            <span key={tech} className="wk-cp-stack-chip">{tech}</span>
                          ))}
                        </div>

                        <div className="wk-cp-actions">
                          {activeConsoleSys.route && (
                            <button
                              type="button"
                              className="wk-btn-white-pill"
                              onClick={() => navigate(activeConsoleSys.route)}
                            >
                              <span>Case Study</span>
                              <ArrowRight size={14} />
                            </button>
                          )}
                          {activeConsoleSys.live && (
                            <a
                              href={activeConsoleSys.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="wk-btn-dark-ghost"
                            >
                              <span>Live</span>
                              <ArrowUpRight size={14} />
                            </a>
                          )}
                          {activeConsoleSys.source && (
                            <a
                              href={activeConsoleSys.source}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="wk-btn-dark-ghost"
                            >
                              <span>Source</span>
                              <ExternalLink size={13} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </Motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 04 — INTERACTIVE FILTERABLE EXHIBITION CARDS + MODAL
            ============================================================ */}
        <section className="wk-gallery-section" data-nav-theme="light">
          <div className="exhibition-bounds">
            <div className="wk-gallery-top">
              <div>
                <span className="wk-eyebrow">03 &middot; ALL INDEPENDENT BUILDS</span>
                <h2 className="wk-section-title">Inspect every architecture card.</h2>
              </div>

              <div className="wk-filter-segmented" role="tablist" aria-label="Filter projects">
                {[
                  { id: "all", label: "All Systems (07)" },
                  { id: "ai", label: "Applied AI & NLP (05)" },
                  { id: "spatial", label: "3D & Full-Stack (02)" },
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={activeFilter === f.id}
                    onClick={() => setActiveFilter(f.id)}
                    className={`wk-seg-btn ${activeFilter === f.id ? "active" : ""}`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="wk-bento-grid">
              {filteredGridSystems.map((item) => (
                <div key={item.id} className="wk-bento-card">
                  <div className="wk-bc-head">
                    <div>
                      <span className="wk-bc-cat">{item.id} &middot; {item.category}</span>
                      <h3 className="wk-bc-title">{item.name}</h3>
                    </div>
                    <button
                      type="button"
                      className="wk-bc-plus"
                      onClick={() => setInspectSpec(item)}
                      aria-label={`Inspect ${item.name} specification`}
                      title="Quick Inspect Specification"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  <div className="wk-bc-visual" onClick={() => setInspectSpec(item)}>
                    <img src={item.img} alt={item.name} className="wk-bc-img" loading="lazy" />
                  </div>

                  <div className="wk-bc-foot">
                    <p className="wk-bc-tagline">{item.tagline}</p>
                    <div className="wk-bc-links">
                      {item.route ? (
                        <Link to={item.route} className="wk-bc-link-primary">
                          <span>Case Study</span>
                          <ArrowRight size={13} />
                        </Link>
                      ) : (
                        <a
                          href={item.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="wk-bc-link-primary"
                        >
                          <span>Repository</span>
                          <ArrowUpRight size={13} />
                        </a>
                      )}
                      {item.live && (
                        <a
                          href={item.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="wk-bc-link-ghost"
                        >
                          <span>Live ↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 05 — HISTORICAL PROGRESSION ARCHIVE
            ============================================================ */}
        <section className="work-archive-section" data-nav-theme="light">
          <div className="exhibition-bounds">
            <Reveal y={16} duration={0.7}>
              <div className="archive-header">
                <span className="archive-badge">HISTORICAL PROGRESSION</span>
                <h2 className="archive-title">Earlier Experiments</h2>
              </div>
            </Reveal>

            <div className="archive-grid">
              <div className="archive-card">
                <div className="arc-top">
                  <span className="arc-tag">MACHINE LEARNING</span>
                  <h3 className="arc-name">Health Prediction</h3>
                </div>
                <p className="arc-desc">
                  Scikit-learn diagnostic prediction pipeline resolving cardiovascular risk signals across medical datasets.
                </p>
                <div className="arc-footer">
                  <span className="arc-tech">Python &middot; Flask &middot; Scikit-Learn</span>
                  <a
                    href={`${socialLinks.github.url}/Heart-Disease-Prediction`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="arc-link"
                  >
                    <span>Source</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <div className="archive-card">
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
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 06 — DARK TITANIUM EDITORIAL LESSONS
            ============================================================ */}
        <section id="lessons-titanium" className="work-lessons-section" data-nav-theme="dark">
          <div className="exhibition-bounds">
            <Reveal y={16} duration={0.8}>
              <span className="lessons-label">ARCHITECTURAL SYNTHESIS</span>
              <h2 className="lessons-headline">What the work taught me.</h2>
            </Reveal>

            <div className="lessons-grid">
              {[
                {
                  num: "01",
                  title: "INTELLIGENCE NEEDS CONTEXT",
                  desc: "A standalone model is only a starting point. Real engineering lives in memory layers, lexical RAG indexes, and state pipelines that ground outputs in the user's real constraints.",
                  ref: "AuraOS / Dheergayush",
                },
                {
                  num: "02",
                  title: "SYSTEMS NEED STRUCTURE",
                  desc: "Generative outputs are only trustworthy when traceably backed. Deterministic verification stages enforce strict clarity on scoring, claims, and failure boundaries.",
                  ref: "VERITAS / DV Assessments",
                },
                {
                  num: "03",
                  title: "PRODUCTS NEED EXPERIENCE",
                  desc: "Backend complexity should never leak into the interface. Fluid motion, clean framing, and immediate feedback turn heavy architectures into software people enjoy using.",
                  ref: "VoltDrive / DV Labs",
                },
              ].map((ls) => (
                <div key={ls.num} className="lesson-card">
                  <span className="lesson-num">&mdash; {ls.num}</span>
                  <h3 className="lesson-title">{ls.title}</h3>
                  <p className="lesson-desc">{ls.desc}</p>
                  <span className="lesson-ref">APPLIED IN {ls.ref}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 07 — CLOSING STUDIO INVITATION
            ============================================================ */}
        <section className="work-closing-section" data-nav-theme="light">
          <div className="exhibition-bounds text-center">
            <h2 className="closing-statement-main">
              Ten architectures.<br />One continuing question.
            </h2>
            <p className="closing-question-sub">
              How do you turn intelligence into resilient systems people trust every day?
            </p>
            <MagneticLink strength={0.25}>
              <button
                type="button"
                className="work-btn-cta apple-pressable"
                onClick={() => navigate("/experience")}
              >
                <span>Explore Engineering Experience</span>
                <ArrowRight size={15} />
              </button>
            </MagneticLink>
          </div>
        </section>

        <BrandSignature />

        {/* Quick-Inspect Architecture Modal */}
        <AnimatePresence>
          {inspectSpec && (
            <Motion.div
              className="wk-modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setInspectSpec(null)}
            >
              <Motion.div
                className="wk-modal-card"
                role="dialog"
                aria-modal="true"
                aria-label={`${inspectSpec.name} architecture specification`}
                initial={{ opacity: 0, scale: 0.95, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97, y: 12 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="wk-modal-head">
                  <div>
                    <span className="wk-modal-cat">{inspectSpec.id} &middot; {inspectSpec.category}</span>
                    <h3 className="wk-modal-title">{inspectSpec.name}</h3>
                  </div>
                  <button
                    type="button"
                    className="wk-modal-close"
                    onClick={() => setInspectSpec(null)}
                    aria-label="Close modal"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="wk-modal-visual">
                  <img src={inspectSpec.img} alt={inspectSpec.name} />
                </div>

                <div className="wk-modal-body">
                  <div className="wk-modal-grid">
                    <div>
                      <span className="wk-modal-label">CHALLENGE</span>
                      <p>{inspectSpec.challenge}</p>
                    </div>
                    <div>
                      <span className="wk-modal-label">ARCHITECTURE</span>
                      <p>{inspectSpec.solution}</p>
                    </div>
                  </div>

                  <div className="wk-cp-stack" style={{ marginBottom: "20px" }}>
                    {inspectSpec.stack.map((t) => (
                      <span key={t} className="wk-spec-chip">{t}</span>
                    ))}
                  </div>

                  <div className="wk-duo-actions">
                    {inspectSpec.route && (
                      <button
                        type="button"
                        className="work-btn-primary"
                        onClick={() => {
                          const target = inspectSpec.route;
                          setInspectSpec(null);
                          navigate(target);
                        }}
                      >
                        <span>Open Case Study</span>
                        <ArrowRight size={14} />
                      </button>
                    )}
                    {inspectSpec.live && (
                      <a
                        href={inspectSpec.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="work-btn-secondary"
                      >
                        <span>Visit Live System</span>
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </Motion.div>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

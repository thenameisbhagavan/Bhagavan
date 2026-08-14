import React, { useEffect, useState } from "react";
import { m } from "framer-motion";
import { Link } from 'react-router-dom';
import SEO from "../components/SEO";
import BrandSignature from "../components/BrandSignature";
import { socialLinks } from '../constants/socialLinks';
import { useTransitionRegistry, appleEase as appleEaseImported } from "../components/transitions/RouteTransition";
import "../styles/Work.css";

// ─── Images ───────────────────────────────────────────────────────────────────
import careerOSImg from "../assets/careeros-new.jpg";
import voltDriveImg from "../assets/ev.png";
import chatImg from "../assets/aurabot-new.png";
import heartImg from "../assets/heart-new.png";
import leaveImg from "../assets/leave.jpg";
import fakeImg from "../assets/fake.jpg";

export const FLAGSHIP_PROJECTS = [
  { name: "CareerOS", eyebrow: "Flagship Project", desc: "The intelligence layer for your career trajectory.", img: careerOSImg, link: "/work/careeros", live: "https://careeros-thenameisbhagavan.vercel.app/" },
  { name: "AuraOS", eyebrow: "Personal Intelligence OS", desc: "Conversational intelligence that understands context.", img: chatImg, link: "/work/auraos", live: "https://aura-os-thenameisbhagavan.vercel.app/" },
  { name: "VERITAS", eyebrow: "Explainable Intelligence Platform", desc: "Data validation and truth extraction engine.", img: fakeImg, link: "/work/veritas", live: "https://veritas-thenameisbhagavan.vercel.app/" },
  { name: "VoltDrive", eyebrow: "Automotive Digital Showroom", desc: "Cinematic EV experience and precision frontend architecture.", img: voltDriveImg, link: "/work/voltdrive", live: "https://voltdrive-thenameisbhagavan.vercel.app/" }
];

// ─── Motion ───────────────────────────────────────────────────────────────────
const appleEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: appleEase } },
};

const fadeUpStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const FLAGSHIP_CAREEROS = {
  theme: "careeros",
  name: "CareerOS",
  eyebrow: "THE CAREER INTELLIGENCE SYSTEM",
  problem: "Career decisions are fragmented.\nCareer intelligence should not be.",
  vision: "To create an intelligence platform that understands your exact career trajectory and reveals precisely what to do next.",
  productImg: careerOSImg,
  howItWorks: [
    { step: "01", title: "Discover", desc: "Captures academic and professional data into a unified profile." },
    { step: "02", title: "Evaluate", desc: "Analyzes skills against real-time market demands." },
    { step: "03", title: "Reveal", desc: "Generates tailored career opportunities and skill gaps." },
    { step: "04", title: "Accelerate", desc: "Provides AI-powered roadmaps for immediate execution." }
  ],
  technologyDesc: "A full-stack intelligence engine built to process complex career data into actionable paths. Engineered with React, Node.js, and specialized analytical models.",
  impact: "Transforms fragmented career decisions into measurable, continuous growth.",
  github: `${socialLinks.github.url}/careeros`,
  liveLink: "https://careeros-thenameisbhagavan.vercel.app/",
  internalLink: "/work/careeros"
};

const AURAOS = {
  name: "AuraOS",
  opening: "An assistant that remembers changes what an assistant can become.",
  productImg: chatImg,
  howItWorks: [
    { step: "01", title: "Memory", desc: "Creates a persistent context window across all sessions." },
    { step: "02", title: "Reasoning", desc: "Connects separate concepts into a unified knowledge graph." },
    { step: "03", title: "Retrieval", desc: "Pulls exact historical facts instantly when required." }
  ],
  technologyDesc: "Powered by vector databases, RAG architectures, and custom short/long-term memory routers.",
  impact: "Demonstrated true conversational persistence across simulated multi-day interactions.",
  github: `${socialLinks.github.url}/auraos`,
  liveLink: "https://aura-os-thenameisbhagavan.vercel.app/",
  internalLink: "/work/auraos"
};

const VERITAS = {
  name: "VERITAS",
  opening: "Intelligence without reasoning is just guessing.",
  productImg: fakeImg,
  howItWorks: [
    { step: "01", title: "Extract", desc: "Parses unstructured news data into verifiable assertions." },
    { step: "02", title: "Analyze", desc: "Scores claims against known credibility baselines." },
    { step: "03", title: "Trace", desc: "Maps the exact path from raw text to final judgment." }
  ],
  technologyDesc: "A deterministic NLP pipeline built over FastAPI, React, and strict credibility schemas.",
  impact: "Successfully validated complex intelligence reports with deterministic traceability.",
  github: `${socialLinks.github.url}/News-detector`,
  liveLink: "https://veritas-thenameisbhagavan.vercel.app/",
  internalLink: "/work/veritas"
};

const VOLTDRIVE = {
  name: "VoltDrive",
  opening: "Engineering is also what the user feels.",
  productImg: voltDriveImg,
  howItWorks: [
    { step: "01", title: "Discover", desc: "Explore the future of luxury electric mobility through immersive storytelling." },
    { step: "02", title: "Experience", desc: "Navigate premium sections with fluid animations, responsive layouts, and cinematic transitions." },
    { step: "03", title: "Customize", desc: "Interact with a modern vehicle configurator built for seamless user engagement." },
    { step: "04", title: "Drive", desc: "Deliver a production-quality frontend experience inspired by leading automotive brands." }
  ],
  technologyDesc: "Built using React, Vite, JavaScript, Framer Motion, modern CSS architecture, and performance-first frontend engineering.",
  impact: "Successfully transformed a concept into a production-deployed luxury automotive website featuring unique hero experiences and premium visual storytelling.",
  github: "https://github.com/thenameisbhagavan/voltdrive",
  liveLink: "https://voltdrive-thenameisbhagavan.vercel.app/",
  internalLink: "/work/voltdrive"
};

const EARLIER_SYSTEMS = [
  {
    name: "Health Prediction",
    domain: "Machine Learning Analytics",
    problem: "Medical data is dense, complex, and inaccessible to patients trying to understand their risks.",
    tech: "Engineered with Python, Scikit-learn, and Flask.",
    outcome: "Achieved high-accuracy diagnostic predictions across established cardiovascular datasets.",
    source: `${socialLinks.github.url}/Heart-Disease-Prediction`
  },
  {
    name: "Smart Leave",
    domain: "Enterprise Automation",
    problem: "Administrative workflows are bogged down by manual approvals and fragmented communication.",
    tech: "Built entirely within the Microsoft Power Platform ecosystem, utilizing Power Automate.",
    outcome: "Transformed multi-day approval chains into near-instantaneous digital resolutions.",
    source: null
  }
];

const SELECTED_SYSTEMS_INDEX = [
  { id: "01", name: "CareerOS", desc: "Career Intelligence", domain: "AI / Product", target: "#careeros" },
  { id: "02", name: "AuraOS", desc: "AI Memory & Context", domain: "Conversational AI", target: "#auraos" },
  { id: "03", name: "VERITAS", desc: "Reasoning & Evidence", domain: "NLP Pipeline", target: "#veritas" },
  { id: "04", name: "VoltDrive", desc: "Digital Product Experience", domain: "Frontend Architecture", target: "#voltdrive" }
];

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function Work() {
  // ─── Transition & Motion ───────────────────────────────────────────────────
  const { isFirstVisit } = useTransitionRegistry();
  const [phase, setPhase] = useState(isFirstVisit ? 0 : 3);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useEffect(() => {
    if (!isFirstVisit) return;
    const timeouts = [
      setTimeout(() => setPhase(1), 150),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1200),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, [isFirstVisit]);

  const showMeta = phase >= 1;
  const showIndex = phase >= 2;
  const showHero = phase >= 3;

  return (
    <>
      <SEO 
        title="TheNameIsBhagavan | Engineering Work"
        description="Systems engineered by Bhagavan. AI systems, intelligent interfaces, reasoning pipelines, and digital product experiences."
        keywords="AI Engineer, Artificial Intelligence, Machine Learning, Portfolio, React, Full Stack, Product Engineering"
      />
      <div className="work-exhibition-page">
        
        {/* ==================== 1. SYSTEM ASSEMBLY INTRO + HERO ==================== */}
        <section className="work-exhibition-hero" data-nav-theme="light">
          <div className="exhibition-bounds" style={{ position: 'relative' }}>

            {/* SYSTEM ASSEMBLY: Metadata */}
            <m.div
              className="hero-eyebrow"
              initial={{ opacity: 0 }}
              animate={{ opacity: showMeta ? 1 : 0 }}
              transition={{ duration: 0.6, ease: appleEase }}
            >
              SYSTEMS / 04
            </m.div>

            {/* SYSTEM ASSEMBLY: Engineering rules */}
            {isFirstVisit && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', margin: '24px 0 40px 0' }}>
                {SELECTED_SYSTEMS_INDEX.map((sys, idx) => (
                  <div key={sys.id}>
                    <m.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: showMeta ? 1 : 0 }}
                      transition={{ duration: 0.8, delay: idx * 0.1, ease: appleEase }}
                      style={{ width: '100%', height: '1px', backgroundColor: 'rgba(0,0,0,0.12)', transformOrigin: 'left center', marginBottom: '10px' }}
                    />
                    <m.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: showIndex ? 1 : 0, y: showIndex ? 0 : 6 }}
                      transition={{ duration: 0.5, delay: showIndex ? idx * 0.08 : 0, ease: appleEase }}
                      style={{ display: 'flex', gap: '12px', alignItems: 'baseline' }}
                    >
                      <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', color: '#86868b' }}>{sys.id}</span>
                      <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', color: '#1d1d1f' }}>{sys.name.toUpperCase()}</span>
                    </m.div>
                  </div>
                ))}
              </div>
            )}

            {/* Hero Typography (resolves after assembly) */}
            <m.h1 
              className="hero-massive-headline"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: showHero ? 1 : 0, y: showHero ? 0 : 24 }}
              transition={{ duration: 1.0, ease: appleEase }}
            >
              Systems I built<br/>to turn ideas<br/>into products.
            </m.h1>
            <m.p 
              className="hero-supporting-copy"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: showHero ? 1 : 0, y: showHero ? 0 : 20 }}
              transition={{ duration: 1.0, delay: 0.15, ease: appleEase }}
            >
              AI systems · product engineering · intelligent interfaces
            </m.p>
          </div>
        </section>

        {/* ==================== 2. EDITORIAL BRIDGE ==================== */}
        <section className="work-editorial-bridge" data-nav-theme="light">
          <div className="exhibition-bounds">
            <m.h2 className="bridge-statement" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Every system begins with a problem worth solving.
            </m.h2>
            <m.div className="bridge-origins" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
              <m.p className="origin-line" variants={fadeUp}>
                <span className="origin-name">CareerOS</span> started with career uncertainty.
              </m.p>
              <m.p className="origin-line" variants={fadeUp}>
                <span className="origin-name">AuraOS</span> started with the limits of stateless conversation.
              </m.p>
              <m.p className="origin-line" variants={fadeUp}>
                <span className="origin-name">VERITAS</span> started with the problem of untraceable conclusions.
              </m.p>
              <m.p className="origin-line" variants={fadeUp}>
                <span className="origin-name">VoltDrive</span> started with the gap between capability and digital experience.
              </m.p>
            </m.div>
          </div>
        </section>

        {/* ==================== 3. THE FLAGSHIP SYSTEMS INDEX ==================== */}
        <section className="work-systems-index" data-nav-theme="light">
          <div className="exhibition-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              SELECTED SYSTEMS
            </m.div>
            <div className="index-list">
              {SELECTED_SYSTEMS_INDEX.map((sys, idx) => (
                <m.a 
                  key={sys.id} 
                  href={sys.target} 
                  className="index-row"
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: idx * 0.1 }}
                  variants={fadeUp}
                >
                  <span className="ix-num">{sys.id}</span>
                  <span className="ix-name">{sys.name}</span>
                  <span className="ix-desc">{sys.desc}</span>
                  <span className="ix-domain">{sys.domain}</span>
                  <span className="ix-arrow">↘</span>
                </m.a>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 4. CAREEROS (FLAGSHIP) ==================== */}
        <section id="careeros" className="work-chapter chapter-careeros" data-nav-theme="light">
          <div className="exhibition-bounds">
            <m.div className="chapter-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              01 / CAREEROS
            </m.div>
            <m.div className="chapter-subtitle" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              {FLAGSHIP_CAREEROS.eyebrow}
            </m.div>
            <m.h2 className="chapter-massive-statement" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Career decisions are fragmented.<br/>
              Career intelligence should not be.
            </m.h2>

            <m.div className="chapter-product-artifact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: appleEase }} viewport={{ once: true, margin: "-100px" }}>
              <img src={FLAGSHIP_CAREEROS.productImg} alt="CareerOS System"  loading="lazy" />
            </m.div>

            <div className="chapter-spec-grid">
              <div className="spec-column">
                <m.div className="spec-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>THE SYSTEM</m.div>
                <div className="spec-list">
                  {FLAGSHIP_CAREEROS.howItWorks.map((step, idx) => (
                    <m.div key={idx} className="spec-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                      <span className="s-num">{step.step}</span>
                      <span className="s-title">{step.title}</span>
                      <span className="s-desc">{step.desc}</span>
                    </m.div>
                  ))}
                </div>
              </div>
              <div className="spec-column">
                <m.div className="spec-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>ENGINEERING</m.div>
                <m.p className="spec-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  {FLAGSHIP_CAREEROS.technologyDesc}
                </m.p>
                <m.div className="spec-label mt-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>OUTCOME</m.div>
                <m.p className="spec-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  {FLAGSHIP_CAREEROS.impact}
                </m.p>
                <m.div className="spec-actions" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpStagger}>
                  {FLAGSHIP_CAREEROS.internalLink && (
                    <m.span variants={fadeUp}><Link to={FLAGSHIP_CAREEROS.internalLink} className="action-link">Explore CareerOS →</Link></m.span>
                  )}
                  {FLAGSHIP_CAREEROS.liveLink && (
                    <m.span variants={fadeUp}><a href={FLAGSHIP_CAREEROS.liveLink} target="_blank" rel="noopener noreferrer" className="action-link">Live System ↗</a></m.span>
                  )}
                  {FLAGSHIP_CAREEROS.github && (
                    <m.span variants={fadeUp}><a href={FLAGSHIP_CAREEROS.github} target="_blank" rel="noopener noreferrer" className="action-link text-muted">Source →</a></m.span>
                  )}
                </m.div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 5. AURAOS ==================== */}
        <section id="auraos" className="work-chapter chapter-auraos" data-nav-theme="light">
          <div className="exhibition-bounds">
            <div className="aura-grid">
              <div className="aura-text-col">
                <m.div className="chapter-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                  02 / AURAOS
                </m.div>
                <m.h2 className="aura-statement" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                  {AURAOS.opening}
                </m.h2>
                <div className="spec-list aura-specs">
                  {AURAOS.howItWorks.map((step, idx) => (
                    <m.div key={idx} className="spec-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                      <span className="s-title">{step.title}</span>
                      <span className="s-desc">{step.desc}</span>
                    </m.div>
                  ))}
                </div>
                <m.div className="spec-actions" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpStagger}>
                  {AURAOS.internalLink && <m.span variants={fadeUp}><Link to={AURAOS.internalLink} className="action-link">Explore AuraOS →</Link></m.span>}
                  {AURAOS.liveLink && <m.span variants={fadeUp}><a href={AURAOS.liveLink} target="_blank" rel="noopener noreferrer" className="action-link">Live System ↗</a></m.span>}
                </m.div>
              </div>
              <div className="aura-img-col">
                <m.div className="aura-artifact" initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, ease: appleEase }} viewport={{ once: true, margin: "-100px" }}>
                  <img src={AURAOS.productImg} alt="AuraOS"  loading="lazy" />
                </m.div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 6. VERITAS ==================== */}
        <section id="veritas" className="work-chapter chapter-veritas" data-nav-theme="light">
          <div className="exhibition-bounds">
            <m.div className="chapter-eyebrow align-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              03 / VERITAS
            </m.div>
            <m.h2 className="veritas-statement align-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              {VERITAS.opening}
            </m.h2>
            
            <m.div className="veritas-artifact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: appleEase }} viewport={{ once: true, margin: "-100px" }}>
              <img src={VERITAS.productImg} alt="VERITAS"  loading="lazy" />
            </m.div>

            <div className="veritas-specs-row">
              {VERITAS.howItWorks.map((step, idx) => (
                <m.div key={idx} className="spec-step-hz" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <span className="s-title">{step.title}</span>
                  <span className="s-desc">{step.desc}</span>
                </m.div>
              ))}
            </div>
            
            <m.div className="spec-actions justify-center mt-actions" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpStagger}>
              {VERITAS.internalLink && <m.span variants={fadeUp}><Link to={VERITAS.internalLink} className="action-link">Explore VERITAS →</Link></m.span>}
              {VERITAS.liveLink && <m.span variants={fadeUp}><a href={VERITAS.liveLink} target="_blank" rel="noopener noreferrer" className="action-link">Live System ↗</a></m.span>}
            </m.div>
          </div>
        </section>

        {/* ==================== 7. VOLTDRIVE ==================== */}
        <section id="voltdrive" className="work-chapter chapter-voltdrive" data-nav-theme="light">
          <div className="exhibition-bounds">
            <div className="volt-grid">
              <div className="volt-img-col">
                <m.div className="volt-artifact" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1.2, ease: appleEase }} viewport={{ once: true, margin: "-100px" }}>
                  <img src={VOLTDRIVE.productImg} alt="VoltDrive"  loading="lazy" />
                </m.div>
              </div>
              <div className="volt-text-col">
                <m.div className="chapter-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                  04 / VOLTDRIVE
                </m.div>
                <m.h2 className="volt-statement" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                  {VOLTDRIVE.opening}
                </m.h2>
                <div className="spec-list volt-specs">
                  {VOLTDRIVE.howItWorks.map((step, idx) => (
                    <m.div key={idx} className="spec-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                      <span className="s-title">{step.title}</span>
                      <span className="s-desc">{step.desc}</span>
                    </m.div>
                  ))}
                </div>
                <m.div className="spec-actions" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpStagger}>
                  {VOLTDRIVE.internalLink && <m.span variants={fadeUp}><Link to={VOLTDRIVE.internalLink} className="action-link">Explore VoltDrive →</Link></m.span>}
                  {VOLTDRIVE.liveLink && <m.span variants={fadeUp}><a href={VOLTDRIVE.liveLink} target="_blank" rel="noopener noreferrer" className="action-link">Live System ↗</a></m.span>}
                </m.div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 8. EARLIER SYSTEMS ==================== */}
        <section className="work-earlier-systems" data-nav-theme="light">
          <div className="exhibition-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              EARLIER SYSTEMS
            </m.div>
            <div className="earlier-archive">
              {EARLIER_SYSTEMS.map((sys, idx) => (
                <m.div key={idx} className="earlier-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                  <div className="e-header">
                    <span className="e-name">{sys.name}</span>
                    <span className="e-domain">{sys.domain}</span>
                  </div>
                  <div className="e-details">
                    <p><strong>Problem:</strong> {sys.problem}</p>
                    <p><strong>Technology:</strong> {sys.tech}</p>
                    <p><strong>Outcome:</strong> {sys.outcome}</p>
                  </div>
                  <div className="e-action">
                    {sys.source && <a href={sys.source} target="_blank" rel="noopener noreferrer" className="action-link text-muted">Source ↗</a>}
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 9. ENGINEERING LAYERS ==================== */}
        <section className="work-layers" data-nav-theme="light">
          <div className="exhibition-bounds">
            <m.div className="section-label align-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              ENGINEERING THROUGH DIFFERENT LAYERS
            </m.div>
            <div className="layers-grid">
              <m.div className="layer-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                <span className="layer-title">INTELLIGENCE</span>
                <span className="layer-desc">AI / ML / Reasoning / Memory</span>
              </m.div>
              <m.div className="layer-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                <span className="layer-title">SYSTEMS</span>
                <span className="layer-desc">APIs / Architecture / Data / Backend</span>
              </m.div>
              <m.div className="layer-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                <span className="layer-title">PRODUCT</span>
                <span className="layer-desc">React / Interfaces / Interaction / Experience</span>
              </m.div>
              <m.div className="layer-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                <span className="layer-title">DELIVERY</span>
                <span className="layer-desc">Git / Deployment / Production Engineering</span>
              </m.div>
            </div>
          </div>
        </section>

        {/* ==================== 10. WHAT CHANGED ==================== */}
        <section className="work-principles" data-nav-theme="light">
          <div className="exhibition-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              WHAT BUILDING THESE SYSTEMS CHANGED
            </m.div>
            <div className="principles-list">
              <m.div className="principle-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <span className="p-num">01</span>
                <div className="p-content">
                  <span className="p-title">INTELLIGENCE NEEDS CONTEXT</span>
                  <span className="p-desc">Standalone models are commodities. The true engineering value lies in designing persistent memory layers and reasoning graphs that allow an AI to understand the user's specific state over time (AuraOS, CareerOS).</span>
                </div>
              </m.div>
              <m.div className="principle-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <span className="p-num">02</span>
                <div className="p-content">
                  <span className="p-title">SYSTEMS NEED STRUCTURE</span>
                  <span className="p-desc">Generative outputs are useless if they cannot be verified. Architecting pipelines that force deterministic traceability allows for trust in environments where hallucinations are unacceptable (VERITAS).</span>
                </div>
              </m.div>
              <m.div className="principle-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <span className="p-num">03</span>
                <div className="p-content">
                  <span className="p-title">PRODUCTS NEED EXPERIENCE</span>
                  <span className="p-desc">Backend complexity must never leak into the frontend. Performance optimization, spatial composition, and precise interaction design are critical to translating raw technical capability into a product users actually want to use (VoltDrive).</span>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ==================== 11. CLOSING BRIDGE ==================== */}
        <section className="work-closing" data-nav-theme="light">
          <div className="exhibition-bounds align-center">
            <m.h2 className="closing-statement" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Work is the evidence.
            </m.h2>
            <m.p className="closing-sub" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              These systems are not isolated projects.<br/>
              They are iterations of the same question:<br/><br/>
              How do you turn intelligence into software people can use?<br/><br/>
              Every system is an argument for how I think about software.
            </m.p>
            <m.div className="closing-action" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <Link to="/experience" className="action-link-large">
                Explore my engineering journey →
              </Link>
            </m.div>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

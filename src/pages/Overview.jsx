import React, { useEffect, useState } from "react";
import {
  ArrowRight,
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
  Sparkles
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { m, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import Reveal from "../components/motion/Reveal";
import MaskReveal from "../components/motion/MaskReveal";
import ScaleReveal from "../components/motion/ScaleReveal";
import Parallax from "../components/motion/Parallax";
import TextReveal from "../components/motion/TextReveal";
import MagneticLink from "../components/motion/MagneticLink";
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

// ─── Dual-Direction Technology Trains (Canonical & Disjoint) ───────────────────
// Train 1: Right-to-Left (Software Development, Modern Web, Backend & GenAI)
const TECH_TRAIN_1 = [
  { name: "Python", icon: Terminal },
  { name: "Next.js App Router", icon: Layers },
  { name: "React 19", icon: Cpu },
  { name: "FastAPI", icon: Server },
  { name: "Gemini API", icon: Sparkles },
  { name: "TypeScript", icon: Code2 },
  { name: "MongoDB Atlas", icon: Database },
  { name: "Prompt Engineering", icon: Terminal },
  { name: "Tailwind CSS", icon: Sparkles },
  { name: "REST APIs", icon: Workflow },
  { name: "Vercel Edge", icon: Server },
  { name: "Java & C", icon: Code2 }
];

// Train 2: Left-to-Right (Data Science, Machine Learning, Systems & Infrastructure)
const TECH_TRAIN_2 = [
  { name: "Scikit-learn", icon: BrainCircuit },
  { name: "TensorFlow & Keras", icon: Cpu },
  { name: "Pandas", icon: Layers },
  { name: "NumPy", icon: Database },
  { name: "Flask", icon: Server },
  { name: "Node.js", icon: Server },
  { name: "SQL", icon: Database },
  { name: "RAG Architectures", icon: BrainCircuit },
  { name: "Git & GitHub", icon: GitBranch },
  { name: "Postman", icon: Workflow },
  { name: "MySQL", icon: Database },
  { name: "JavaScript (ESNext)", icon: Code2 }
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
        description="Official portfolio of Bhagavan (TheNameIsBhagavan). Software Developer & Technical Trainer at Data Valley AI Tech Solutions. Building software applications, Python backend services, and practical AI systems while teaching Data Science, Machine Learning, and Generative AI."
        keywords="TheNameIsBhagavan, Bhagavan, Software Developer, Technical Trainer, Data Valley AI Tech Solutions, AI ML Developer, Generative AI, Data Science Trainer, Python Developer, CareerOS, AuraOS, VERITAS, VoltDrive"
      />
      
      <div className="engineering-surface">
        
        {/* ============================================================
            SECTION 01 — HERO (APPLE-INSPIRED REFINED IDENTITY)
            ============================================================ */}
        <section className="es-hero" data-nav-theme="light">
          <div className="es-hero-grid">
            
            {/* LEFT COLUMN: NARRATIVE */}
            <div className="es-hero-left">
              <Reveal y={14} duration={0.8}>
                <span className="es-hero-eyebrow">SOFTWARE ENGINEER &bull; AI/ML &bull; TECHNICAL TRAINER</span>
              </Reveal>

              <div className="es-hero-title-group">
                <Reveal y={18} duration={0.9} delay={0.08}>
                  <h1 className="es-hero-headline">
                    <span className="es-hero-hl-line">I build software.</span>
                    <span className="es-hero-hl-line">I teach intelligence.</span>
                  </h1>
                </Reveal>
              </div>
              
              <div className="es-hero-bottom-group">
                <Reveal y={16} duration={0.9} delay={0.16}>
                  <p className="es-hero-sub">
                    Software Developer &amp; AI/ML Technical Trainer at Data Valley AI Tech Solutions.
                  </p>
                </Reveal>

                {/* Primary Action Buttons */}
                <Reveal y={16} duration={0.9} delay={0.24}>
                  <div className="es-hero-actions-group">
                    <MagneticLink strength={0.2}>
                      <button className="es-btn-primary apple-pressable" onClick={() => navigate('/work')}>
                        <span>Explore My Work</span>
                        <ArrowRight size={15} />
                      </button>
                    </MagneticLink>

                    <MagneticLink strength={0.2}>
                      <button className="es-btn-secondary apple-pressable" onClick={() => navigate('/experience')}>
                        <span>About Me</span>
                      </button>
                    </MagneticLink>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* RIGHT COLUMN: PORTRAIT ENVIRONMENT */}
            <div className="es-hero-right">
              <div className="es-hero-portrait-env">
                <ScaleReveal duration={0.9} delay={0.12}>
                  <div className="es-hero-portrait-frame">
                    <img 
                      src={profileHeroImg} 
                      alt="Bhagavan — Software Developer & AI/ML Technical Trainer" 
                      loading="eager" 
                      fetchpriority="high"
                      className="es-hero-portrait-img"
                    />
                  </div>
                </ScaleReveal>
              </div>
            </div>

          </div>
        </section>



        {/* ============================================================
            SECTION 01.5 — DUAL-DIRECTION APPLE-STYLE TECHNOLOGY MARQUEE
            ============================================================ */}
        <section id="technology-ecosystem" className="es-tech-marquee-section" data-nav-theme="light">
          <div className="es-bounds">
            <div className="es-tech-editorial-header">
              <Reveal y={16} duration={0.8}>
                <span className="es-tech-eyebrow">TECHNICAL ECOSYSTEM</span>
              </Reveal>
              <Reveal y={20} duration={0.9} delay={0.1}>
                <h2 className="es-tech-headline">The technologies behind my work.</h2>
              </Reveal>
              <Reveal y={20} duration={0.9} delay={0.18}>
                <p className="es-tech-sub">
                  Software Engineering &bull; Data Science &bull; AI/ML &bull; Generative AI
                </p>
              </Reveal>
            </div>
          </div>

          {/* DUAL-DIRECTION HORIZONTAL TECHNOLOGY TRAINS */}
          <div className="es-tech-trains-container" aria-label="Dual-direction continuous technology stream">
            {/* TRAIN 1: Continuously moving right-to-left */}
            <div className="es-tech-train-outer">
              <div className="es-tech-train-track es-train-rtl">
                <div className="es-tech-train-group">
                  {TECH_TRAIN_1.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <React.Fragment key={`t1-orig-${idx}`}>
                        <div className="es-tech-item">
                          <span className="es-tech-icon" aria-hidden="true"><Icon size={15} strokeWidth={1.7} /></span>
                          <span className="es-tech-name">{item.name}</span>
                        </div>
                        <span className="es-tech-dot-sep" aria-hidden="true">&bull;</span>
                      </React.Fragment>
                    );
                  })}
                </div>
                {/* Seamless loop duplication with aria-hidden to prevent screen reader redundancy */}
                <div className="es-tech-train-group" aria-hidden="true">
                  {TECH_TRAIN_1.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <React.Fragment key={`t1-dup-${idx}`}>
                        <div className="es-tech-item">
                          <span className="es-tech-icon"><Icon size={15} strokeWidth={1.7} /></span>
                          <span className="es-tech-name">{item.name}</span>
                        </div>
                        <span className="es-tech-dot-sep">&bull;</span>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* TRAIN 2: Continuously moving left-to-right */}
            <div className="es-tech-train-outer">
              <div className="es-tech-train-track es-train-ltr">
                <div className="es-tech-train-group">
                  {TECH_TRAIN_2.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <React.Fragment key={`t2-orig-${idx}`}>
                        <div className="es-tech-item">
                          <span className="es-tech-icon" aria-hidden="true"><Icon size={15} strokeWidth={1.7} /></span>
                          <span className="es-tech-name">{item.name}</span>
                        </div>
                        <span className="es-tech-dot-sep" aria-hidden="true">&bull;</span>
                      </React.Fragment>
                    );
                  })}
                </div>
                {/* Seamless loop duplication with aria-hidden to prevent screen reader redundancy */}
                <div className="es-tech-train-group" aria-hidden="true">
                  {TECH_TRAIN_2.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <React.Fragment key={`t2-dup-${idx}`}>
                        <div className="es-tech-item">
                          <span className="es-tech-icon"><Icon size={15} strokeWidth={1.7} /></span>
                          <span className="es-tech-name">{item.name}</span>
                        </div>
                        <span className="es-tech-dot-sep">&bull;</span>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ============================================================
            SECTION 02 — THE WORK
            ============================================================ */}
        <ScaleReveal as="section" className="es-the-work" data-nav-theme="light">
          <div className="es-bounds">
            <Reveal y={24} duration={0.9}>
              <div className="es-section-header">
                <span className="es-section-label">THE WORK</span>
                <h2 className="es-display-headline">
                  Products built to solve<br />real problems.
                </h2>
              </div>
            </Reveal>

            <div className="es-cinematic-projects">
              {[
                {
                  id: "01",
                  name: "CareerOS",
                  category: "AI CAREER INTELLIGENCE",
                  desc: "AI career intelligence platform that parses resumes, maps skills to market benchmarks, and produces explainable career strategy.",
                  img: careerosImg,
                  url: "/work/careeros",
                  theme: "light"
                },
                {
                  id: "02",
                  name: "VERITAS",
                  category: "EXPLAINABLE INTELLIGENCE SYSTEM",
                  desc: "Deterministic credibility evaluation engine using Scikit-learn NLP pipelines to extract textual claims with mathematical transparency.",
                  img: veritasImg,
                  url: "/work/veritas",
                  theme: "dark"
                },
                {
                  id: "03",
                  name: "AuraOS",
                  category: "PERSONAL AI OPERATING SYSTEM",
                  desc: "Context-preserving conversational platform bridging a React frontend with a secure Python/Flask LLM orchestration layer.",
                  img: auraosImg,
                  url: "/work/auraos",
                  theme: "light"
                },
                {
                  id: "04",
                  name: "VoltDrive",
                  category: "DIGITAL PRODUCT EXPERIENCE",
                  desc: "High-performance digital vehicle showroom demonstrating fluid interaction choreography and responsive product engineering.",
                  img: voltdriveImg,
                  url: "/work/voltdrive",
                  theme: "dark"
                }
              ].map((proj) => (
                <Reveal key={proj.id} y={40} duration={1.1} delay={0.1} className={`es-project-showcase theme-${proj.theme}`}>
                  <div className="es-ps-content">
                    <div className="es-ps-meta">
                      <span className="es-ps-id">{proj.id}</span>
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
            SECTION 02.5 — FEATURED ENGINEERING APPLICATION:
            DATA VALLEY ENGINEERING ASSESSMENT PLATFORM
            ============================================================ */}
        <ScaleReveal as="section" className="es-featured-dv-platform" data-nav-theme="light">
          <div className="es-bounds">
            
            {/* Header / Context */}
            <div className="es-dv-header">
              <Reveal y={16} duration={0.8}>
                <div className="es-dv-eyebrow-row">
                  <span className="es-dv-eyebrow">END-TO-END APPLICATION ENGINEERING</span>
                  <span className="es-dv-company-pill">DATA VALLEY AI TECH SOLUTIONS</span>
                </div>
              </Reveal>

              <Reveal y={20} duration={1.0} delay={0.1}>
                <h2 className="es-dv-headline">
                  Data Valley Engineering<br />Assessment Platform
                </h2>
              </Reveal>

              <Reveal y={20} duration={0.9} delay={0.18}>
                <p className="es-dv-lead">
                  I designed and developed an engineering assessment platform for Data Valley AI Tech Solutions, bringing candidate workflows, technical evaluation, and assessment result management into a unified web application.
                </p>
              </Reveal>
            </div>

            {/* Editorial Showcase Card */}
            <div className="es-dv-card">
              <div className="es-dv-media-container">
                <div className="es-dv-browser-chrome">
                  <div className="es-dv-browser-dots">
                    <span className="es-dv-dot dot-red"></span>
                    <span className="es-dv-dot dot-yellow"></span>
                    <span className="es-dv-dot dot-green"></span>
                  </div>
                  <div className="es-dv-browser-url">
                    https://dv-assesments.vercel.app/
                  </div>
                  <div className="es-dv-browser-status">
                    <span className="es-status-indicator pulse-green"></span>
                    <span>LIVE PRODUCTION</span>
                  </div>
                </div>

                <div className="es-dv-screenshot-wrapper">
                  <img 
                    src={dvAssessmentImg} 
                    alt="Data Valley Engineering Assessment Platform showing candidate portal, coding challenge, question palette, and countdown timer." 
                    className="es-dv-screenshot" 
                    loading="lazy" 
                  />
                </div>
              </div>

              {/* Technical Capabilities & Architecture Highlights */}
              <div className="es-dv-details-panel">
                <div className="es-dv-caps-grid">
                  <div className="es-dv-cap-item">
                    <div className="es-dv-cap-icon-wrap">
                      <ShieldCheck size={18} className="es-dv-icon" />
                    </div>
                    <div>
                      <h4 className="es-dv-cap-title">Candidate Authentication</h4>
                      <p className="es-dv-cap-desc">
                        Secure session authorization binding candidate identity to unique assessment instances.
                      </p>
                    </div>
                  </div>

                  <div className="es-dv-cap-item">
                    <div className="es-dv-cap-icon-wrap">
                      <Clock size={18} className="es-dv-icon" />
                    </div>
                    <div>
                      <h4 className="es-dv-cap-title">Timed Technical Assessment</h4>
                      <p className="es-dv-cap-desc">
                        Structured 40-question technical challenge delivery with real-time countdown timer orchestration.
                      </p>
                    </div>
                  </div>

                  <div className="es-dv-cap-item">
                    <div className="es-dv-cap-icon-wrap">
                      <CheckCircle2 size={18} className="es-dv-icon" />
                    </div>
                    <div>
                      <h4 className="es-dv-cap-title">Answer Persistence & Auto-Sync</h4>
                      <p className="es-dv-cap-desc">
                        Continuous background synchronization protecting candidates against page reloads and network loss.
                      </p>
                    </div>
                  </div>

                  <div className="es-dv-cap-item">
                    <div className="es-dv-cap-icon-wrap">
                      <Terminal size={18} className="es-dv-icon" />
                    </div>
                    <div>
                      <h4 className="es-dv-cap-title">Server-Side Scoring Protection</h4>
                      <p className="es-dv-cap-desc">
                        Deterministic server evaluation upon verified submission, preventing client-side score manipulation.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="es-dv-tech-row">
                  <span className="es-dv-tech-label">VERIFIED STACK:</span>
                  <div className="es-dv-tech-chips">
                    <span className="es-dv-chip">Next.js App Router</span>
                    <span className="es-dv-chip">React 19</span>
                    <span className="es-dv-chip">TypeScript</span>
                    <span className="es-dv-chip">MongoDB Atlas</span>
                    <span className="es-dv-chip">Tailwind CSS</span>
                    <span className="es-dv-chip">Vercel</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="es-dv-actions">
                  <MagneticLink strength={0.25}>
                    <button 
                      className="es-dv-btn-primary apple-pressable" 
                      onClick={() => navigate('/work/data-valley-assessment-platform')}
                    >
                      <span>Explore Case Study</span>
                      <ArrowRight size={16} />
                    </button>
                  </MagneticLink>

                  <MagneticLink strength={0.25}>
                    <a 
                      href="https://dv-assesments.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="es-dv-btn-secondary apple-pressable"
                    >
                      <span>Open Live Application</span>
                      <ExternalLink size={14} />
                    </a>
                  </MagneticLink>
                </div>
              </div>
            </div>

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
                    "Teaching is another form of engineering:<br/>breaking complex systems down until they become understandable."
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
              )})}
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
                    { year: "2022", stage: "FOUNDATION", desc: "B.Tech in Artificial Intelligence & Data Science" },
                    { year: "2024", stage: "EXPERIENCE", desc: "Internships: Blackbucks · StudyOwl · SmartBridge · Helson" },
                    { year: "2024", stage: "SYSTEMS", desc: "Shipped CareerOS · AuraOS · VERITAS · VoltDrive" },
                    { year: "NOW", stage: "CURRENT", desc: "Developer & Technical Trainer at Data Valley AI Tech Solutions" }
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
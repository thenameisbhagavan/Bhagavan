import React, { useEffect, useRef } from "react";
import { ArrowRight, BrainCircuit, Scan, Layers, Server } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { m, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import Reveal from "../components/motion/Reveal";
import MaskReveal from "../components/motion/MaskReveal";
import ScaleReveal from "../components/motion/ScaleReveal";
import Parallax from "../components/motion/Parallax";
import TextReveal from "../components/motion/TextReveal";
import MagneticLink from "../components/motion/MagneticLink";
import "../styles/Overview.css";

// ─── Core Assets ──────────────────────────────────────────────────────────────
import profileHeroImg from "../assets/profile-hero.jpg";
import resumeIconImg from "../assets/resume-icon.png";
import careerosImg from "../assets/careeros-new.jpg";
import auraosImg from "../assets/aurabot-new.png";
import voltdriveImg from "../assets/ev.png";
import veritasImg from "../assets/fake.jpg";
import agrivisionImg from "../assets/agrivision.png";


export default function Overview() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.92]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <>
      <SEO 
        description="Official portfolio of Bhagavan (TheNameIsBhagavan). Technical AI/ML & Data Science Trainer at Data Valley and AI Product Engineer. Explore my work building intelligent software systems like AuraOS, CareerOS, and VERITAS."
        keywords="TheNameIsBhagavan, Bhagavan, AI Product Engineer, Technical AI/ML Data Science Trainer, Data Valley, Artificial Intelligence, Machine Learning, Software Engineering, CareerOS, AuraOS, VERITAS, VoltDrive"
      />
      
      <div className="engineering-surface">
        
        {/* ============================================================
            SECTION 01 — HERO (APPROVED)
            ============================================================ */}
        <m.section className="es-hero act-i-identity" data-nav-theme="light" style={{ scale: heroScale, opacity: heroOpacity }}>
          <div className="es-hero-grid">
            
            {/* LEFT COLUMN: NARRATIVE */}
            <div className="es-hero-left" style={{ position: 'relative', zIndex: 10, paddingRight: '2rem' }}>
              <Reveal y={16} duration={0.8}>
                <span className="es-hero-eyebrow">AI &bull; SOFTWARE &bull; PRODUCT ENGINEERING</span>
              </Reveal>

              <div className="es-hero-title-group">
                <Reveal y={20} duration={1.0} delay={0.1}>
                  <h1 className="es-hero-headline">
                    <span className="es-hero-hl-line">I build intelligent</span>
                    <span className="es-hero-hl-line">products that feel</span>
                    <span className="es-hero-hl-line">remarkably simple.</span>
                  </h1>
                </Reveal>
              </div>
              
              <div className="es-hero-bottom-group">
                <Reveal y={20} duration={0.9} delay={0.3}>
                  <p className="es-hero-sub">
                    I’m Siva Satya Sai Bhagavan — an AI & Data Science engineer, builder, and technical educator creating intelligent digital experiences across AI, Python, full-stack engineering, and interactive frontend systems.
                  </p>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.4}>
                  <p className="es-hero-sub-secondary">
                    Building at the intersection of intelligence, engineering, and experience.
                  </p>
                </Reveal>

                {/* Primary Action Buttons */}
                <Reveal y={20} duration={0.9} delay={0.5}>
                  <div className="es-hero-actions-group">
                    <MagneticLink strength={0.25}>
                      <button className="es-btn-primary apple-pressable" onClick={() => navigate('/work')}>
                        <span>Explore My Work &rarr;</span>
                      </button>
                    </MagneticLink>

                    <MagneticLink strength={0.25}>
                      <button className="es-btn-secondary es-btn-quiet apple-pressable" onClick={() => navigate('/experience')}>
                        <span>View Experience</span>
                      </button>
                    </MagneticLink>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* RIGHT COLUMN: PORTRAIT ENVIRONMENT (APPLE STYLE OPTIMIZED) */}
            <div className="es-hero-right" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'flex-end', 
              width: '100%',
              paddingLeft: '2rem'
            }}>
              <div className="es-hero-portrait-env" style={{ 
                width: '100%', 
                maxWidth: '400px',
                position: 'relative',
                zIndex: 5
              }}>
                <ScaleReveal>
                  <Parallax speed={0.02}>
                    <div 
                      className="es-hero-portrait-frame" 
                      style={{ 
                        position: 'relative',
                        width: '100%',
                        aspectRatio: '4/5',
                        borderRadius: '32px',
                        overflow: 'hidden', 
                        backgroundColor: '#f5f5f7', 
                        boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
                        transform: 'translateZ(0)',
                        WebkitMaskImage: '-webkit-radial-gradient(white, black)'
                      }}
                    >
                      <img 
                        src={profileHeroImg} 
                        alt="Bhagavan" 
                        loading="eager" 
                        style={{ 
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center',
                          display: 'block',
                          borderRadius: '32px'
                        }} 
                      />
                    </div>
                  </Parallax>
                </ScaleReveal>
              </div>
            </div>

          </div>
        </m.section>


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
                  desc: "AI-powered career intelligence that transforms resumes, projects, and market signals into actionable career strategy.",
                  img: careerosImg,
                  url: "/work/careeros",
                  theme: "light"
                },
                {
                  id: "02",
                  name: "VERITAS",
                  category: "INTELLIGENCE SYSTEM",
                  desc: "A deterministic intelligence system designed to analyze information, extract claims, and evaluate credibility.",
                  img: veritasImg,
                  url: "/work/veritas",
                  theme: "dark"
                },
                {
                  id: "03",
                  name: "AuraOS",
                  category: "PERSONAL AI OPERATING SYSTEM",
                  desc: "A personal AI operating system built around memory, knowledge, context, and intelligent interaction.",
                  img: auraosImg,
                  url: "/work/auraos",
                  theme: "light"
                },
                {
                  id: "04",
                  name: "VoltDrive",
                  category: "DIGITAL PRODUCT EXPERIENCE",
                  desc: "An immersive digital vehicle experience combining 3D, motion, interaction, and product engineering.",
                  img: voltdriveImg,
                  url: "/work/voltdrive",
                  theme: "dark"
                },
                {
                  id: "05",
                  name: "AgriVision AI",
                  category: "INTELLIGENT CROP DIAGNOSTICS",
                  desc: "From Crop Image to Explainable AI Insight. Bringing computer vision, deep learning, and explainability to production.",
                  img: agrivisionImg,
                  url: "/work/agrivision",
                  theme: "light"
                }
              ].map((proj, idx) => (
                <Reveal key={proj.id} y={40} duration={1.1} delay={0.1} className={`es-project-showcase theme-${proj.theme}`}>
                  <div className="es-ps-content">
                    <div className="es-ps-meta">
                      <span className="es-ps-id">{proj.id}</span>
                      <span className="es-ps-category">{proj.category}</span>
                    </div>
                    <h3 className="es-ps-title">{proj.name}</h3>
                    <p className="es-ps-desc">{proj.desc}</p>
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
            SECTION 03 — THE DIFFERENCE
            ============================================================ */}
        <ScaleReveal as="section" className="es-the-difference" data-nav-theme="light">
          <div className="es-bounds text-center">
            <Reveal y={24} duration={0.9}>
              <span className="es-section-label">THE DIFFERENCE</span>
              <h2 className="es-display-headline">
                I don't just build features.<br />
                <span className="text-muted">I build systems.</span>
              </h2>
            </Reveal>

            {/* Transform Sequence */}
            <div className="es-transform-sequence-wrap">
              <Reveal y={20} duration={1.2} delay={0.3}>
                <div className="es-transform-sequence">
                  {['IDEA', 'INTELLIGENCE', 'SYSTEM', 'EXPERIENCE', 'PRODUCT'].map((step, i, arr) => (
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
                { title: "THINK", tags: "Architecture · Logic · AI", desc: "Designing deterministic logic and intelligent data pipelines before writing any code." },
                { title: "BUILD", tags: "Python · FastAPI · React · Data", desc: "Constructing robust backends and dynamic interfaces engineered for scale." },
                { title: "EXPERIENCE", tags: "Motion · 3D · Interaction · UX", desc: "Polishing the final layer where users interact with complex underlying systems." }
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
                “From backend intelligence to the final interaction, I think about how every layer works together.”
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
                <span className="es-section-label">CURRENTLY BUILDING</span>
                <h2 className="es-display-headline">The work never really stops.</h2>
              </div>
            </Reveal>

            <div className="es-active-dashboard">
              {[
                {
                  num: "01",
                  name: "VoltDrive",
                  category: "DIGITAL PRODUCT EXPERIENCE",
                  desc: "Exploring the future of interactive automotive experiences through 3D, motion, configuration, and digital twins.",
                  status: "BUILDING",
                  statusColor: "amber",
                  url: "/work/voltdrive"
                },
                {
                  num: "02",
                  name: "VERITAS",
                  category: "INTELLIGENCE SYSTEM",
                  desc: "Evolving deterministic NLP and credibility analysis into a more reliable intelligence platform.",
                  status: "EVOLVING",
                  statusColor: "blue",
                  url: "/work/veritas"
                },
                {
                  num: "03",
                  name: "CareerOS",
                  category: "AI CAREER INTELLIGENCE",
                  desc: "Building a deeper career intelligence layer around skills, projects, market signals, and engineering maturity.",
                  status: "ITERATING",
                  statusColor: "green",
                  url: "/work/careeros"
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
            SECTION 05 — ENGINEER × EDUCATOR
            ============================================================ */}
        <ScaleReveal as="section" className="es-engineer-educator" data-nav-theme="light">
          <div className="es-bounds">
            <div className="es-ee-layout">
              <div className="es-ee-left">
                <ScaleReveal className="es-ee-image-wrap">
                  <img src={profileHeroImg} alt="Bhagavan" className="es-ee-image" loading="lazy" />
                </ScaleReveal>
              </div>

              <div className="es-ee-right">
                <Reveal y={24} duration={0.9}>
                  <span className="es-section-label">ENGINEER × EDUCATOR</span>
                  <h2 className="es-ee-hl">
                    Building technology.<br />
                    Teaching people to build it.
                  </h2>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.2}>
                  <p className="es-ee-story">
                    My work extends beyond building software.<br /><br />
                    I teach AI, Machine Learning, Data Science, Python, and modern development — turning complex concepts into practical systems students can understand and build.
                  </p>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.3}>
                  <div className="es-ee-metrics">
                    <span className="es-ee-metric">AI / ML</span>
                    <span className="es-ee-metric">DATA SCIENCE</span>
                    <span className="es-ee-metric">PYTHON</span>
                    <span className="es-ee-metric highlight">300+ STUDENTS REACHED</span>
                  </div>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.4}>
                  <div className="es-ee-action">
                    <MagneticLink strength={0.25}>
                      <button className="es-btn-secondary apple-pressable" onClick={() => navigate('/experience')}>
                        <span>Explore Experience</span>
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
                <span className="es-section-label">THE JOURNEY</span>
                <h2 className="es-display-headline">
                  From learning technology<br />
                  <span className="text-muted">to building with it.</span>
                </h2>
              </div>
            </Reveal>

            <div className="es-timeline-wrapper">
              <div className="es-timeline-scroll">
                <div className="es-timeline-track">
                  {[
                    { year: "2022", stage: "START", desc: "AI & Data Science" },
                    { year: "2024", stage: "BUILD", desc: "Full-stack · AI · ML" },
                    { year: "2025", stage: "CREATE", desc: "Intelligent products" },
                    { year: "2026", stage: "SHIP", desc: "Production-minded systems" },
                    { year: "NOW", stage: "BUILDING", desc: "AI × Software × Product" }
                  ].map((node, i, arr) => (
                    <Reveal key={node.year} x={20} duration={0.8} delay={i * 0.15} className="es-timeline-node-container">
                      <div className="es-timeline-node">
                        <span className="es-tn-year">{node.year}</span>
                        <h4 className="es-tn-title">{node.stage}</h4>
                        <p className="es-tn-desc">{node.desc}</p>
                      </div>
                      {i < arr.length - 1 && <div className="es-timeline-line"></div>}
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>

            <Reveal y={20} duration={0.9} delay={0.4}>
              <div className="es-journey-footer">
                <p className="es-journey-quote">“Every stage changed what I build next.”</p>
                <MagneticLink strength={0.25}>
                  <button className="es-btn-link" onClick={() => navigate('/experience')}>
                    <span>View Experience &rarr;</span>
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

      </div>
    </>
  );
}
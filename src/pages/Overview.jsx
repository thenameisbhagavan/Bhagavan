import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
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
import paceImg from "../assets/pace.jpg";

export default function Overview() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        description="Official portfolio of Bhagavan (TheNameIsBhagavan). Technical AI/ML & Data Science Trainer at Data Valley and AI Product Engineer. Explore my work building intelligent software systems like AuraOS, CareerOS, and VERITAS."
        keywords="TheNameIsBhagavan, Bhagavan, AI Product Engineer, Technical AI/ML Data Science Trainer, Data Valley, Artificial Intelligence, Machine Learning, Software Engineering, CareerOS, AuraOS, VERITAS, VoltDrive"
      />
      
      <div className="engineering-surface">
        
        {/* ============================================================
            ACT 01 — IDENTITY (WHO I AM)
            Purpose: Immediately establish identity, role & professional focus
            ============================================================ */}
        <section className="es-hero act-i-identity" data-nav-theme="light">
          <div className="es-hero-bounds-2col">
            
            {/* LEFT COLUMN — PROFESSIONAL IDENTITY */}
            <div className="es-hero-left">
              
              <Reveal y={16} duration={0.8}>
                <div className="es-hero-badge-wrap">
                  <div className="es-live-badge">
                    <span className="es-live-dot"></span>
                    <span className="es-live-text">TECHNICAL AI/ML & DATA SCIENCE TRAINER @ DATA VALLEY</span>
                  </div>
                </div>
              </Reveal>

              <div className="es-hero-title-group">
                <MaskReveal duration={1.0} delay={0.1}>
                  <span className="es-hero-eyebrow">AI PRODUCT ENGINEER</span>
                </MaskReveal>

                <h1 className="es-hero-headline-2col">
                  I build <span className="es-gradient-text">intelligent AI systems</span> & train engineers.
                </h1>
              </div>

              <Reveal y={20} duration={0.9} delay={0.3}>
                <p className="es-hero-sub-2col">
                  Hi, I'm <strong>TheNameIsBhagavan</strong> — an AI Product Engineer and Technical AI/ML & Data Science Trainer at Data Valley. I build intelligent systems, turn them into usable products, and teach engineers how to work with emerging AI technologies.
                </p>
              </Reveal>

              {/* Primary Action Buttons */}
              <Reveal y={20} duration={0.9} delay={0.4}>
                <div className="es-hero-actions-group">
                  <MagneticLink strength={0.25}>
                    <button className="es-btn-primary apple-pressable" onClick={() => navigate('/work')}>
                      <span>Explore Shipped Systems</span>
                      <ArrowRight size={16} />
                    </button>
                  </MagneticLink>

                  <MagneticLink strength={0.25}>
                    <button className="es-btn-secondary apple-pressable" onClick={() => navigate('/resume')}>
                      <img src={resumeIconImg} alt="Resume" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                      <span>Resume</span>
                    </button>
                  </MagneticLink>
                </div>
              </Reveal>

              {/* Shipped Platform Direct Chips */}
              <Reveal y={16} duration={0.8} delay={0.5}>
                <div className="es-hero-chips-wrap">
                  <span className="es-chips-label">SHIPPED PLATFORMS:</span>
                  <div className="es-chips-list">
                    <span className="es-chip" onClick={() => navigate('/work/careeros')}>CareerOS</span>
                    <span className="es-chip" onClick={() => navigate('/work/auraos')}>AuraOS</span>
                    <span className="es-chip" onClick={() => navigate('/work/veritas')}>VERITAS</span>
                    <span className="es-chip" onClick={() => navigate('/work/voltdrive')}>VoltDrive</span>
                  </div>
                </div>
              </Reveal>

            </div>

            {/* RIGHT COLUMN — CLEAN PORTRAIT WITH PHYSICAL SCROLL DEPTH */}
            <div className="es-hero-right">
              <ScaleReveal>
                <Parallax speed={0.08}>
                  <div className="es-hero-portrait-frame">
                    <img src={profileHeroImg} alt="Bhagavan" className="es-portrait-img-old" loading="eager" />
                  </div>
                </Parallax>
              </ScaleReveal>
            </div>

          </div>
        </section>

        {/* Narrative Transition Line 01 -> 02 */}
        <div className="es-narrative-bridge">
          <Reveal y={16} duration={0.8}>
            <span className="es-bridge-question">SO WHAT DO I BUILD?</span>
          </Reveal>
        </div>


        {/* ============================================================
            ACT 02 — THE KIND OF WORK I DO (WHAT I BUILD)
            Purpose: Establish mental model: "I don't build isolated demos. I build systems."
            ============================================================ */}
        <section className="es-systems-architecture" data-nav-theme="light">
          <div className="es-bounds">
            <Reveal y={24} duration={0.9}>
              <div className="es-section-header text-center">
                <span className="es-section-label">THE SYSTEM APPROACH</span>
                <h2 className="es-display-headline">
                  SYSTEMS,<br /><span className="es-gradient-text">NOT FEATURES.</span>
                </h2>
                <p className="es-section-lead">
                  I don't build isolated models or quick demos. I build complete systems where intelligence, context, product experience, and delivery work together.
                </p>
              </div>
            </Reveal>

            {/* 4 Core System Layers */}
            <div className="es-architecture-grid">
              {[
                { 
                  title: "INTELLIGENCE", 
                  step: "01", 
                  desc: "The reasoning layer — models, machine learning algorithms, LLMs, and decision engines built for accuracy." 
                },
                { 
                  title: "CONTEXT", 
                  step: "02", 
                  desc: "The memory layer — retrieval pipelines (RAG), vector databases, knowledge graphs, and persistent session state." 
                },
                { 
                  title: "PRODUCT", 
                  step: "03", 
                  desc: "The interface layer — human-centered workflows where complex technical capabilities become intuitive tools." 
                },
                { 
                  title: "DELIVERY", 
                  step: "04", 
                  desc: "The engineering layer — performant APIs, serverless deployment, monitoring, and production reliability." 
                }
              ].map((layer, idx) => (
                <Reveal key={layer.title} y={28} duration={0.8} delay={idx * 0.1} className="es-arch-card">
                  <span className="es-arch-step">{layer.step}</span>
                  <h3 className="es-arch-title">{layer.title}</h3>
                  <p className="es-arch-desc">{layer.desc}</p>
                </Reveal>
              ))}
            </div>

            <Reveal y={16} duration={0.8} delay={0.5}>
              <div className="es-layer-summary-bar">
                <span>I build the surrounding system around the intelligence — not just the model.</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Narrative Transition Line 02 -> 03 */}
        <div className="es-narrative-bridge">
          <Reveal y={16} duration={0.8}>
            <span className="es-bridge-question">THESE LAYERS BECOME MEANINGFUL WHEN SHIPPED.</span>
          </Reveal>
        </div>


        {/* ============================================================
            ACT 03 — SYSTEMS I HAVE SHIPPED (FLAGSHIP SHOWCASE)
            Purpose: Centerpiece demonstrating actual shipped systems
            ============================================================ */}
        <section className="es-systems-motion" data-nav-theme="light">
          <div className="es-bounds">
            <Reveal y={20} duration={0.9}>
              <div className="es-section-header">
                <span className="es-section-label">SHIPPED WORK</span>
                <h2 className="es-sub-headline">Four flagship systems.</h2>
              </div>
            </Reveal>

            {/* 4 Flagship Project Story Cards */}
            <div className="es-motion-projects-stack">
              {[
                { 
                  name: "CAREEROS", 
                  tag: "AI Career Intelligence Platform", 
                  problem: "Career decisions are fragmented across resumes, skill gaps, projects, and market signals without unified context.", 
                  built: "A deterministic-first AI career intelligence platform with ATS scoring and personalized roadmap generation.",
                  engineering: "Agentic RAG · Vector Retrieval · Python FastAPI · React Frontend",
                  demonstrates: "AI Systems + Product Engineering + Career Intelligence",
                  accent: "#0066CC", 
                  url: "https://careeros-thenameisbhagavan.vercel.app/", 
                  internal: "/work/careeros" 
                },
                { 
                  name: "AURAOS", 
                  tag: "Spatial AI OS & Memory Workspace", 
                  problem: "Standard AI chat interfaces reset every session, losing context and conversational history.", 
                  built: "Persistent context mapping system across multi-turn sessions with neural workspace memory.",
                  engineering: "Vector DBs · Semantic Search · Session State Graph · React",
                  demonstrates: "Persistent Context + Memory Systems + Spatial Interface",
                  accent: "#8B5CF6", 
                  url: "https://aura-os-thenameisbhagavan.vercel.app/", 
                  internal: "/work/auraos" 
                },
                { 
                  name: "VERITAS", 
                  tag: "AI Trust & Code Verification Pipeline", 
                  problem: "Generative AI produces code and text without verifiable evidence or deterministic fact-tracing.", 
                  built: "A deterministic fact-tracing and credibility schema pipeline for AI generation verification.",
                  engineering: "NLP Verification · FastAPI · Fact Graph · Credibility Schemas",
                  demonstrates: "Deterministic AI + Fact Tracing + Code Credibility",
                  accent: "#10B981", 
                  url: "https://veritas-thenameisbhagavan.vercel.app/", 
                  internal: "/work/veritas" 
                },
                { 
                  name: "VOLTDRIVE", 
                  tag: "EV Telemetry & Digital Product Experience", 
                  problem: "Complex automotive telemetry data requires high-speed rendering without UI lag or performance drops.", 
                  built: "Cinematic real-time digital automotive telemetry experience built with physical motion architecture.",
                  engineering: "React · Motion Physics · Hardware 60fps · Component Engine",
                  demonstrates: "High-Performance Frontend + Cinematic UX + Automotive Telemetry",
                  accent: "#F59E0B", 
                  url: "https://voltdrive-thenameisbhagavan.vercel.app/", 
                  internal: "/work/voltdrive" 
                }
              ].map((proj, idx) => (
                <Reveal key={proj.name} y={36} scale={0.98} duration={1.0} delay={idx * 0.12} className="es-motion-project-card">
                  <div className="es-mpc-border-indicator" style={{ backgroundColor: proj.accent }} />
                  
                  <div className="es-mpc-header">
                    <span className="es-mpc-tag">{proj.tag}</span>
                    <h3 className="es-mpc-name">{proj.name}</h3>
                  </div>

                  <div className="es-mpc-story-grid">
                    <div className="es-mpc-story-col">
                      <span className="es-mpc-slabel">THE PROBLEM</span>
                      <p className="es-mpc-sval">{proj.problem}</p>
                    </div>

                    <div className="es-mpc-story-col">
                      <span className="es-mpc-slabel">WHAT WAS BUILT</span>
                      <p className="es-mpc-sval">{proj.built}</p>
                    </div>
                  </div>

                  <div className="es-mpc-meta-row">
                    <div className="es-mpc-meta-item">
                      <span className="es-mpc-mlabel">ENGINEERING</span>
                      <span className="es-mpc-mval">{proj.engineering}</span>
                    </div>

                    <div className="es-mpc-meta-item">
                      <span className="es-mpc-mlabel">DEMONSTRATES</span>
                      <span className="es-mpc-mval">{proj.demonstrates}</span>
                    </div>
                  </div>

                  <div className="es-mpc-actions">
                    <a href={proj.url} target="_blank" rel="noopener noreferrer" className="es-btn-link">
                      <span>LIVE DEMO ↗</span>
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Narrative Transition Line 03 -> 04 */}
        <div className="es-narrative-bridge">
          <Reveal y={16} duration={0.8}>
            <span className="es-bridge-question">HOW DO I TURN IDEAS INTO REAL SYSTEMS?</span>
          </Reveal>
        </div>


        {/* ============================================================
            ACT 04 — FROM IDEA TO SHIPPED SYSTEM (WORKFLOW PIPELINE)
            Purpose: Explain the engineering workflow behind the shipped systems
            ============================================================ */}
        <section className="es-pipeline" data-nav-theme="light">
          <div className="es-bounds-narrow text-center">
            <Reveal y={20} duration={0.9}>
              <span className="es-section-label">ENGINEERING DISCIPLINE</span>
              <h2 className="es-sub-headline" style={{ marginBottom: "16px" }}>From idea to shipped system.</h2>
              <p className="es-section-lead" style={{ margin: "0 auto 48px auto" }}>
                Every platform I build moves through a rigorous engineering loop — turning unstructured questions into reliable production code.
              </p>
            </Reveal>

            <div className="es-pipeline-flow">
              {[
                { stage: "QUESTION", detail: "Identify the real problem that needs solving before writing code." },
                { stage: "RESEARCH", detail: "Analyze users, data constraints, existing approaches, and failure modes." },
                { stage: "EXPERIMENT", detail: "Test models, algorithms, data structures, and architectural assumptions." },
                { stage: "IMPLEMENT", detail: "Build clean, modular software connecting models to interfaces." },
                { stage: "EVALUATE", detail: "Measure behavior, latency, output accuracy, and edge cases." },
                { stage: "SHIP", detail: "Deploy to production environments where people can actually use it." },
                { stage: "LEARN", detail: "Observe usage patterns, refine the system, and iterate." }
              ].map((step, i, arr) => (
                <React.Fragment key={step.stage}>
                  <Reveal y={16} duration={0.7} delay={i * 0.06} className="es-pipe-step-card">
                    <span className="es-pipe-step-num">0{i + 1}</span>
                    <span className="es-pipe-step-name">{step.stage}</span>
                    <span className="es-pipe-step-desc">{step.detail}</span>
                  </Reveal>

                  {i < arr.length - 1 && (
                    <div className="es-pipe-arrow">
                      <div className="es-pipe-line" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* Narrative Transition Line 04 -> 05 */}
        <div className="es-narrative-bridge">
          <Reveal y={16} duration={0.8}>
            <span className="es-bridge-question">IS BUILDING THE ONLY THING I DO?</span>
          </Reveal>
        </div>


        {/* ============================================================
            ACT 05 — BUILDING IS ONLY HALF THE JOB (TEACHING & KNOWLEDGE TRANSFER)
            Purpose: Demonstrate the teaching dimension of my career
            ============================================================ */}
        <section className="es-teaching-section" data-nav-theme="light">
          <div className="es-bounds">
            <Reveal y={24} duration={0.9}>
              <div className="es-teaching-transition">
                BUILD · TEACH · SHARE<br />
                Building intelligent systems. Teaching engineers how to master them.
              </div>
            </Reveal>

            <div className="es-teaching-layout">
              <ScaleReveal className="es-teaching-image-wrap">
                <img src={paceImg} alt="PACE Workshop" className="es-teaching-img" loading="lazy" />
              </ScaleReveal>
              
              <div className="es-teaching-content">
                <Reveal y={20} duration={0.8} delay={0.1}>
                  <div className="es-section-label" style={{ marginBottom: "12px" }}>KNOWLEDGE TRANSFER</div>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.2}>
                  <h2 className="es-teaching-hl">
                    I don't just build with AI.<br />
                    I teach people to think with it.
                  </h2>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.3}>
                  <div className="es-teaching-details">
                    <span className="es-td-title">Prompt Engineering × Generative AI Workshop</span>
                    <span className="es-td-org">PACE College of Engineering, Ongole</span>
                    <span className="es-td-meta">~300 students · CSE / AI & DS / AI & ML</span>
                  </div>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.4}>
                  <p className="es-teaching-desc">
                    A hands-on workshop for ~300 engineering students — translating complex machine learning concepts and generative AI patterns into practical engineering intuition.
                  </p>
                </Reveal>

                <Reveal y={20} duration={0.9} delay={0.5}>
                  <div className="es-teaching-action">
                    <MagneticLink strength={0.3}>
                      <Link to="/experience" className="es-cta-quiet apple-pressable">
                        EXPLORE MY TEACHING RECORD <ArrowRight size={14} />
                      </Link>
                    </MagneticLink>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Narrative Transition Line 05 -> 06 */}
        <div className="es-narrative-bridge">
          <Reveal y={16} duration={0.8}>
            <span className="es-bridge-question">WHAT PRINCIPLES GUIDE THE WORK?</span>
          </Reveal>
        </div>


        {/* ============================================================
            ACT 06 — HOW I THINK (ENGINEERING PRINCIPLES)
            Purpose: Evidence-backed engineering principles
            ============================================================ */}
        <section className="es-how-i-think" data-nav-theme="light">
          <div className="es-bounds-narrow">
            <Reveal y={24} duration={0.9}>
              <div className="es-section-header text-center">
                <span className="es-section-label">ENGINEERING BELIEFS</span>
                <h2 className="es-sub-headline">How I think.</h2>
              </div>
            </Reveal>

            <div className="es-editorial-principles-list">
              {[
                { 
                  num: "01", 
                  title: "DETERMINISTIC BEFORE GENERATIVE", 
                  desc: "Use deterministic logic where the problem does not require generation. Predictable code is easier to test, verify, and scale.",
                  proof: "Applied in VERITAS fact-tracing pipeline & CareerOS ATS engine."
                },
                { 
                  num: "02", 
                  title: "CONTEXT BEFORE COMPLEXITY", 
                  desc: "Giving a model useful, structured context matters more than making the model larger or adding unnecessary architectural complexity.",
                  proof: "Applied in AuraOS persistent session graph & RAG retrieval pipelines."
                },
                { 
                  num: "03", 
                  title: "PRODUCT BEFORE DEMO", 
                  desc: "A working model isn't automatically a useful product. High performance, latency optimization, and human-centered UI matter just as much as the model.",
                  proof: "Applied in VoltDrive automotive telemetry & CareerOS product interface."
                }
              ].map((principle, idx) => (
                <Reveal key={principle.num} y={32} duration={0.9} delay={idx * 0.12} className="es-editorial-principle">
                  <span className="es-ep-num">— {principle.num}</span>
                  <h3 className="es-ep-title">{principle.title}</h3>
                  <p className="es-ep-desc">{principle.desc}</p>
                  <span className="es-ep-proof">{principle.proof}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Narrative Transition Line 06 -> 07 */}
        <div className="es-narrative-bridge">
          <Reveal y={16} duration={0.8}>
            <span className="es-bridge-question">WHAT AM I BUILDING TOWARD?</span>
          </Reveal>
        </div>


        {/* ============================================================
            ACT 07 — WHERE THE WORK IS GOING (CURRENT DIRECTION)
            Purpose: Concise forward-looking focus
            ============================================================ */}
        <section className="es-focus" data-nav-theme="light">
          <div className="es-bounds text-center">
            <Reveal y={20} duration={0.9}>
              <span className="es-section-label">CURRENT DIRECTION</span>
              <h2 className="es-sub-headline" style={{ marginBottom: "24px" }}>What I'm focused on now.</h2>
            </Reveal>

            <div className="es-focus-keywords">
              {[
                "AI SYSTEMS", 
                "AGENTIC WORKFLOWS", 
                "RAG & MEMORY", 
                "TOOL USE", 
                "SYSTEM DESIGN", 
                "PRODUCT ENGINEERING", 
                "PRODUCTION AI"
              ].map((kw, i) => (
                <Reveal key={kw} y={16} duration={0.7} delay={i * 0.05} className="es-focus-kw">
                  {kw}
                </Reveal>
              ))}
            </div>

            <Reveal y={16} duration={0.8} delay={0.4}>
              <p className="es-focus-desc">
                Building systems that connect intelligence with real-world execution. That is the direction of my work.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Narrative Transition Line 07 -> 08 */}
        <div className="es-narrative-bridge">
          <Reveal y={16} duration={0.8}>
            <span className="es-bridge-question">WHO IS BEHIND ALL THIS?</span>
          </Reveal>
        </div>


        {/* ============================================================
            ACT 08 — THE PERSON BEHIND THE SYSTEMS
            Purpose: Human, mature identity statement
            ============================================================ */}
        <section className="es-person" data-nav-theme="light">
          <div className="es-bounds">
            <div className="es-person-layout">
              <div className="es-person-text">
                <Reveal y={24} duration={0.9}>
                  <h2 className="es-person-hl">
                    I build to understand.<br />
                    I teach to make understanding transferable.
                  </h2>
                </Reveal>
                
                <Reveal y={20} duration={0.9} delay={0.3}>
                  <p className="es-person-desc">
                    I care about how technology works, how systems behave, and how people experience them. AI systems, software products, and the engineering choices behind them are where I spend my time.
                  </p>
                </Reveal>
              </div>

              <ScaleReveal className="es-person-image-wrapper">
                <img src={profileHeroImg} alt="Bhagavan" className="es-person-image" loading="lazy" />
              </ScaleReveal>
            </div>
          </div>
        </section>


        {/* ============================================================
            ACT 09 — THE WORK CONTINUES (FINAL CTA)
            Purpose: Clean, earned conclusion
            ============================================================ */}
        <section className="es-signature-section" data-nav-theme="light">
          <div className="es-bounds text-center">
            
            <Reveal y={24} duration={1.1}>
              <h2 className="es-signature-statement">
                The work continues.
              </h2>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.2}>
              <div className="es-signature-meta">
                THE NAME IS BHAGAVAN<br />
                AI PRODUCT ENGINEER<br />
                TECHNICAL AI/ML & DATA SCIENCE TRAINER @ DATA VALLEY<br />
                AI SYSTEMS · PRODUCT ENGINEERING · SOFTWARE
              </div>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.4}>
              <div className="es-final-cta-group">
                <MagneticLink strength={0.3}>
                  <button className="es-btn-primary apple-pressable" onClick={() => navigate('/work')}>
                    <span>VIEW THE WORK</span>
                    <ArrowRight size={16} />
                  </button>
                </MagneticLink>

                <MagneticLink strength={0.3}>
                  <button className="es-btn-secondary apple-pressable" onClick={() => navigate('/connect')}>
                    <span>CONNECT</span>
                  </button>
                </MagneticLink>

                <MagneticLink strength={0.3}>
                  <button className="es-btn-secondary apple-pressable" onClick={() => navigate('/resume')}>
                    <img src={resumeIconImg} alt="Resume" style={{ width: '18px', height: '18px', objectFit: 'contain' }} />
                    <span>RESUME</span>
                  </button>
                </MagneticLink>
              </div>
            </Reveal>

          </div>
        </section>

      </div>
    </>
  );
}

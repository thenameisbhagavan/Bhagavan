import SEO from "../components/SEO";
import React, { useEffect, useState } from 'react';
import { m as Motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown, Layers, LayoutGrid } from 'lucide-react';
import BrandSignature from "../components/BrandSignature";
import '../styles/TechnologyEcosystem.css';

// ─── Motion ───────────────────────────────────────────────────────────────────
const appleEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: appleEase } },
};

// ─── Data: Architecture Layers ────────────────────────────────────────────────
const LAYERS = [
  {
    num: "01",
    short: "Languages",
    title: "PROGRAMMING LANGUAGES",
    desc: "Computational foundations for systems, data modeling, and application logic.",
    techs: ["Python", "JavaScript (ESNext)", "TypeScript", "Java", "C", "SQL"]
  },
  {
    num: "02",
    short: "Frontend",
    title: "FRONTEND ENGINEERING",
    desc: "Fluid, high-performance interfaces and client architecture.",
    techs: ["React 19", "Next.js (App Router)", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion", "Vite"]
  },
  {
    num: "03",
    short: "Backend",
    title: "BACKEND ENGINEERING",
    desc: "Resilient server architecture, asynchronous routing, and API microservices.",
    techs: ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "Stateless Proxy Bridges"]
  },
  {
    num: "04",
    short: "Data",
    title: "DATABASES & PERSISTENCE",
    desc: "Structured schemas, document stores, and state synchronization.",
    techs: ["MongoDB Atlas", "PostgreSQL", "MySQL", "Redis", "Mongoose"]
  },
  {
    num: "05",
    short: "ML & Vision",
    title: "AI & MACHINE LEARNING",
    desc: "Statistical learning models, classification pipelines, and feature transformations.",
    techs: ["Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "OpenCV", "Cross-Validation"]
  },
  {
    num: "06",
    short: "GenAI & LLMs",
    title: "GENERATIVE AI & LLMs",
    desc: "Large language model workflows, prompt taxonomies, and inference APIs.",
    techs: ["Google Gemini API", "OpenAI API", "Prompt Engineering", "Structured Output Parsing", "LangChain", "Hugging Face"]
  },
  {
    num: "07",
    short: "Agentic",
    title: "AGENTIC AI & REASONING",
    desc: "Multi-turn context graphs, semantic memory, and tool-calling execution loops.",
    techs: ["Agentic Workflows", "Tool Calling & Action Loops", "RAG Architectures", "Vector Search", "Context Preservation"]
  },
  {
    num: "08",
    short: "Tooling",
    title: "DEVELOPER TOOLS & WORKFLOW",
    desc: "Engineering toolchains for rapid development, testing, and collaboration.",
    techs: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook", "Linux Terminal"]
  },
  {
    num: "09",
    short: "Cloud",
    title: "CLOUD & DEPLOYMENT",
    desc: "Production deployment, containerization, and edge delivery.",
    techs: ["Vercel Edge", "Docker", "Render", "Microsoft PowerApps", "Power Automate"]
  },
  {
    num: "10",
    short: "Training",
    title: "TECHNICAL TRAINING & CURRICULUM",
    desc: "Transforming engineering depth into structured educational programs and student mentorship.",
    techs: ["Curriculum Design", "Live Coding Demos", "Hands-on Lab Exercises", "Code Reviews", "Technical Talks (PBR VITS, PACE)"]
  }
];

// ─── Data: System Connections ────────────────────────────────────────────────
const SYSTEMS = [
  {
    name: "DV Assessments",
    focus: "Enterprise Evaluation System",
    route: "/work/data-valley-assessment-platform",
    trace: ["Next.js", "React 19", "TypeScript", "MongoDB Atlas", "Vercel"],
    stages: {
      PRODUCT: ["Next.js", "React 19"],
      SERVICES: ["Server Actions", "Sync Engine"],
      DATA: ["MongoDB Atlas", "Persistence"],
      INTELLIGENCE: ["Vision Proctoring", "Auto-Scoring"],
      DELIVERY: ["Vercel Edge", "GitHub CI"]
    }
  },
  {
    name: "CareerOS",
    focus: "AI Career Intelligence",
    route: "/work/careeros",
    trace: ["React", "FastAPI", "Python", "Scikit-learn", "MongoDB Atlas"],
    stages: {
      PRODUCT: ["React", "Vite"],
      SERVICES: ["FastAPI", "Python"],
      DATA: ["MongoDB Atlas", "Profiles"],
      INTELLIGENCE: ["Scikit-learn", "Gemini API"],
      DELIVERY: ["Vercel", "Render"]
    }
  },
  {
    name: "AuraOS",
    focus: "Context Memory & AI Workspace",
    route: "/work/auraos",
    trace: ["React", "Flask", "Gemini API", "State Graphs", "Vercel"],
    stages: {
      PRODUCT: ["React", "Spatial Canvas"],
      SERVICES: ["Flask", "REST Bridge"],
      DATA: ["State Graphs", "Vector Memory"],
      INTELLIGENCE: ["Gemini API", "RAG Context"],
      DELIVERY: ["Vercel", "Render"]
    }
  },
  {
    name: "VERITAS",
    focus: "Explainable Credibility System",
    route: "/work/veritas",
    trace: ["React", "Python", "Scikit-learn NLP", "TF-IDF", "FastAPI"],
    stages: {
      PRODUCT: ["React", "Audit UI"],
      SERVICES: ["FastAPI", "Python"],
      DATA: ["Claim Corpus", "Lexical Cache"],
      INTELLIGENCE: ["Scikit-learn", "TF-IDF Attribution"],
      DELIVERY: ["Git", "Render"]
    }
  },
  {
    name: "VoltDrive",
    focus: "Automotive Digital Showroom",
    route: "/work/voltdrive",
    trace: ["React", "Hardware Transforms", "Telemetry Engine", "Vercel"],
    stages: {
      PRODUCT: ["React", "Framer Motion"],
      SERVICES: ["Asset Preloader", "Telemetry"],
      DATA: ["Spec Configurator", "State"],
      INTELLIGENCE: ["Hardware Acceleration", "3D Physics"],
      DELIVERY: ["Vercel Edge", "Git"]
    }
  },
  {
    name: "AgriVision AI",
    focus: "Crop Diagnostics & Explainability",
    route: "/work/agrivision",
    trace: ["React", "FastAPI", "MobileNetV2", "Grad-CAM", "MongoDB Atlas"],
    stages: {
      PRODUCT: ["React", "Diagnostic UI"],
      SERVICES: ["FastAPI", "Inference API"],
      DATA: ["MongoDB Atlas", "History"],
      INTELLIGENCE: ["MobileNetV2", "Grad-CAM Heatmaps"],
      DELIVERY: ["Render", "Vercel"]
    }
  }
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function TechnologyEcosystem() {
  const [activeLayerIdx, setActiveLayerIdx] = useState(0);
  const [showAllLayers, setShowAllLayers] = useState(false);
  const [activeSystemIdx, setActiveSystemIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeLayer = LAYERS[activeLayerIdx];
  const activeTraceSystem = SYSTEMS[activeSystemIdx];

  return (
    <>
      <SEO 
        title="Technology Ecosystem | TheNameIsBhagavan"
        description="Software architecture and technology ecosystem used by Bhagavan (TheNameIsBhagavan) — Software Developer, AI/ML & Generative AI practitioner, and Technical Trainer. Languages, frameworks, intelligence tools, and training methodology." 
        keywords="Software Architecture, AI Systems, Generative AI, Bhagavan Tech Stack, Python, React, Data Science Tools, Machine Learning Infrastructure, Technical Trainer" 
      />

      <div className="eco-page">
        
        {/* ══════════════════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════════════════ */}
        <section className="eco-hero" data-nav-theme="light">
          <div className="eco-bounds">
            <Motion.div className="eco-hero-eyebrow" initial="hidden" animate="visible" variants={fadeUp}>
              TECHNOLOGY ECOSYSTEM / ENGINEERING ARCHITECTURE / 2024 &ndash; PRESENT
            </Motion.div>
            <Motion.h1 className="eco-hero-headline" initial="hidden" animate="visible" variants={fadeUp}>
              Technology is not the stack.<br/>
              It is the system around the product.
            </Motion.h1>
            <Motion.p className="eco-hero-sub" initial="hidden" animate="visible" variants={fadeUp}>
              Languages, frameworks, data systems, intelligence tooling, and delivery infrastructure — selected according to the problem being solved.
            </Motion.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            2. ARCHITECTURE LAYERS (INTERACTIVE EXPLORER)
        ══════════════════════════════════════════════════════ */}
        <section className="eco-layers" data-nav-theme="light">
          <div className="eco-bounds">
            <div className="eco-layers-header">
              <Motion.div className="eco-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                THE LAYERS I WORK ACROSS
              </Motion.div>
              <button
                type="button"
                className={`eco-view-toggle ${showAllLayers ? 'is-active' : ''}`}
                onClick={() => setShowAllLayers((v) => !v)}
              >
                {showAllLayers ? <Layers size={14} /> : <LayoutGrid size={14} />}
                <span>{showAllLayers ? 'Interactive Console' : 'Inspect All 10 Layers'}</span>
              </button>
            </div>

            {!showAllLayers ? (
              <div className="eco-console-shell">
                <div className="eco-layer-rail" role="tablist" aria-label="Architecture Layer Selector">
                  {LAYERS.map((layer, idx) => (
                    <button
                      key={layer.num}
                      type="button"
                      role="tab"
                      aria-selected={activeLayerIdx === idx}
                      className={`eco-rail-pill ${activeLayerIdx === idx ? 'is-active' : ''}`}
                      onClick={() => setActiveLayerIdx(idx)}
                    >
                      <span className="eco-rail-num">{layer.num}</span>
                      <span className="eco-rail-name">{layer.short}</span>
                    </button>
                  ))}
                </div>

                <div className="eco-stage-card" role="tabpanel">
                  <div className="eco-stage-top">
                    <span className="layer-num">LAYER {activeLayer.num} / 10</span>
                    <div className="eco-stage-steppers">
                      <button
                        type="button"
                        className="eco-step-btn"
                        onClick={() => setActiveLayerIdx((i) => (i - 1 + LAYERS.length) % LAYERS.length)}
                        aria-label="Previous Layer"
                      >
                        Prev
                      </button>
                      <button
                        type="button"
                        className="eco-step-btn"
                        onClick={() => setActiveLayerIdx((i) => (i + 1) % LAYERS.length)}
                        aria-label="Next Layer"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                  <h3 className="eco-stage-title">{activeLayer.title}</h3>
                  <p className="eco-stage-desc">{activeLayer.desc}</p>
                  <div className="layer-techs">
                    {activeLayer.techs.map((tech) => (
                      <span key={tech} className="layer-tech-item">
                        {tech}
                        <ArrowRight className="layer-tech-arrow" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="eco-layer-stack">
                {LAYERS.map((layer, i) => (
                  <Motion.div 
                    key={i} 
                    className="layer-row"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-60px" }} 
                    variants={fadeUp}
                  >
                    <div className="layer-num">{layer.num}</div>
                    <div className="layer-info">
                      <h3 className="layer-title">{layer.title}</h3>
                      <p className="layer-desc">{layer.desc}</p>
                    </div>
                    <div className="layer-techs">
                      {layer.techs.map((tech, j) => (
                        <span key={j} className="layer-tech-item">
                          {tech}
                          <ArrowRight className="layer-tech-arrow" />
                        </span>
                      ))}
                    </div>
                  </Motion.div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            3. SYSTEM TRACE (DARK TITANIUM INTERACTIVE CONSOLE)
        ══════════════════════════════════════════════════════ */}
        <section className="eco-trace" data-nav-theme="dark">
          <div className="eco-bounds">
            <Motion.div className="eco-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              FROM IDEA TO SYSTEM
            </Motion.div>
            
            <Motion.h2 className="trace-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Architecture Trace
            </Motion.h2>

            <div className="eco-trace-tabs" role="tablist" aria-label="System Architecture Trace Selector">
              {SYSTEMS.map((sys, idx) => (
                <button
                  key={sys.name}
                  type="button"
                  role="tab"
                  aria-selected={activeSystemIdx === idx}
                  className={`eco-trace-tab ${activeSystemIdx === idx ? 'is-active' : ''}`}
                  onClick={() => setActiveSystemIdx(idx)}
                >
                  <span>{sys.name}</span>
                </button>
              ))}
            </div>

            <div className="eco-trace-meta-bar">
              <div>
                <span className="eco-trace-sys-focus">{activeTraceSystem.focus}</span>
              </div>
              <Link to={activeTraceSystem.route} className="eco-trace-link">
                <span>Inspect Case Study</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="trace-flow">
              {Object.entries(activeTraceSystem.stages).map(([stageTitle, stageTechs], idx, arr) => (
                <div key={stageTitle} className="trace-step">
                  <div className="ts-title">{stageTitle}</div>
                  <div className="ts-techs">
                    {stageTechs.map((tech) => (
                      <span key={tech} className="ts-tech">{tech}</span>
                    ))}
                  </div>
                  {idx < arr.length - 1 && <ArrowDown className="ts-arrow" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            4. CONNECT THE ECOSYSTEM TO REAL SYSTEMS
        ══════════════════════════════════════════════════════ */}
        <section className="eco-systems" data-nav-theme="light">
          <div className="eco-bounds">
            <Motion.div className="eco-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              THE STACK CHANGES WITH THE SYSTEM.
            </Motion.div>
            
            <Motion.h2 className="systems-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Engineering Records
            </Motion.h2>

            <div className="systems-stack">
              {SYSTEMS.map((system, i) => (
                <Motion.div 
                  key={i} 
                  className="system-row"
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-100px" }} 
                  variants={fadeUp}
                >
                  <div className="sr-meta">
                    <h3 className="sr-name">{system.name}</h3>
                    <span className="sr-focus">{system.focus}</span>
                  </div>
                  <div className="sr-trace">
                    {system.trace.map((node, j) => (
                      <React.Fragment key={j}>
                        <span className="srt-node">{node}</span>
                        {j < system.trace.length - 1 && (
                          <ArrowRight className="srt-arrow" />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            5. PRINCIPLE
        ══════════════════════════════════════════════════════ */}
        <section className="eco-principle" data-nav-theme="light">
          <div className="eco-bounds">
            <Motion.h2 className="ep-primary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              I don't choose technology because it is popular.<br/>
              I choose it because it fits the system.
            </Motion.h2>
            <Motion.p className="ep-secondary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Frameworks change.<br/>
              Architecture remains.
            </Motion.p>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

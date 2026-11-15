import SEO from "../components/SEO";
import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';
import BrandSignature from "../components/BrandSignature";
import '../styles/TechnologyEcosystem.css';

// ─── Motion ───────────────────────────────────────────────────────────────────
const appleEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: appleEase } },
};

// ─── Data: Architecture Layers ────────────────────────────────────────────────
const LAYERS = [
  {
    num: "01",
    title: "PROGRAMMING LANGUAGES",
    desc: "Computational foundations for systems, data modeling, and application logic.",
    techs: ["Python", "JavaScript (ESNext)", "TypeScript", "Java", "C", "SQL"]
  },
  {
    num: "02",
    title: "FRONTEND ENGINEERING",
    desc: "Fluid, high-performance interfaces and client architecture.",
    techs: ["React 19", "Next.js (App Router)", "Tailwind CSS", "HTML5 & CSS3", "Framer Motion", "Vite"]
  },
  {
    num: "03",
    title: "BACKEND ENGINEERING",
    desc: "Resilient server architecture, asynchronous routing, and API microservices.",
    techs: ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "Stateless Proxy Bridges"]
  },
  {
    num: "04",
    title: "DATABASES & PERSISTENCE",
    desc: "Structured schemas, document stores, and state synchronization.",
    techs: ["MongoDB Atlas", "PostgreSQL", "MySQL", "Redis", "Mongoose"]
  },
  {
    num: "05",
    title: "AI & MACHINE LEARNING",
    desc: "Statistical learning models, classification pipelines, and feature transformations.",
    techs: ["Scikit-learn", "TensorFlow", "Keras", "Pandas", "NumPy", "OpenCV", "Cross-Validation"]
  },
  {
    num: "06",
    title: "GENERATIVE AI & LLMs",
    desc: "Large language model workflows, prompt taxonomies, and inference APIs.",
    techs: ["Google Gemini API", "OpenAI API", "Prompt Engineering", "Structured Output Parsing", "LangChain", "Hugging Face"]
  },
  {
    num: "07",
    title: "AGENTIC AI & REASONING",
    desc: "Multi-turn context graphs, semantic memory, and tool-calling execution loops.",
    techs: ["Agentic Workflows", "Tool Calling & Action Loops", "RAG Architectures", "Vector Search", "Context Preservation"]
  },
  {
    num: "08",
    title: "DEVELOPER TOOLS & WORKFLOW",
    desc: "Engineering toolchains for rapid development, testing, and collaboration.",
    techs: ["Git", "GitHub", "Postman", "VS Code", "Jupyter Notebook", "Linux Terminal"]
  },
  {
    num: "09",
    title: "CLOUD & DEPLOYMENT",
    desc: "Production deployment, containerization, and edge delivery.",
    techs: ["Vercel Edge", "Docker", "Render", "Microsoft PowerApps", "Power Automate"]
  },
  {
    num: "10",
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
    trace: ["Next.js", "React 19", "TypeScript", "MongoDB Atlas", "Vercel"]
  },
  {
    name: "CareerOS",
    focus: "AI Career Intelligence",
    trace: ["React", "FastAPI", "Python", "Scikit-learn", "MongoDB Atlas"]
  },
  {
    name: "AuraOS",
    focus: "Context Memory & AI Workspace",
    trace: ["React", "Flask", "Gemini API", "State Graphs", "Vercel"]
  },
  {
    name: "VERITAS",
    focus: "Explainable Credibility System",
    trace: ["React", "Python", "Scikit-learn NLP", "TF-IDF", "FastAPI"]
  },
  {
    name: "VoltDrive",
    focus: "Automotive Digital Showroom",
    trace: ["React", "Hardware Transforms", "Telemetry Engine", "Vercel"]
  },
  {
    name: "AgriVision AI",
    focus: "Crop Diagnostics & Explainability",
    trace: ["React", "FastAPI", "MobileNetV2", "Grad-CAM", "MongoDB Atlas"]
  }
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function TechnologyEcosystem() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <m.div className="eco-hero-eyebrow" initial="hidden" animate="visible" variants={fadeUp}>
              TECHNOLOGY ECOSYSTEM / ENGINEERING ARCHITECTURE / 2024 &ndash; PRESENT
            </m.div>
            <m.h1 className="eco-hero-headline" initial="hidden" animate="visible" variants={fadeUp}>
              Technology is not the stack.<br/>
              It is the system around the product.
            </m.h1>
            <m.p className="eco-hero-sub" initial="hidden" animate="visible" variants={fadeUp}>
              Languages, frameworks, data systems, intelligence tooling, and delivery infrastructure — selected according to the problem being solved.
            </m.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            2. ARCHITECTURE LAYERS
        ══════════════════════════════════════════════════════ */}
        <section className="eco-layers" data-nav-theme="light">
          <div className="eco-bounds">
            <m.div className="eco-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              THE LAYERS I WORK ACROSS
            </m.div>

            <div className="eco-layer-stack">
              {LAYERS.map((layer, i) => (
                <m.div 
                  key={i} 
                  className="layer-row"
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-100px" }} 
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
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            3. SYSTEM TRACE
        ══════════════════════════════════════════════════════ */}
        <section className="eco-trace" data-nav-theme="light">
          <div className="eco-bounds">
            <m.div className="eco-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              FROM IDEA TO SYSTEM
            </m.div>
            
            <m.h2 className="trace-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Architecture Trace
            </m.h2>

            <m.div className="trace-flow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              
              <div className="trace-step">
                <div className="ts-title">PRODUCT</div>
                <div className="ts-techs">
                  <span className="ts-tech">React</span>
                  <span className="ts-tech">Vite</span>
                </div>
                <ArrowDown className="ts-arrow" />
              </div>

              <div className="trace-step">
                <div className="ts-title">SERVICES</div>
                <div className="ts-techs">
                  <span className="ts-tech">FastAPI</span>
                  <span className="ts-tech">Flask</span>
                  <span className="ts-tech">Node.js</span>
                </div>
                <ArrowDown className="ts-arrow" />
              </div>

              <div className="trace-step">
                <div className="ts-title">DATA</div>
                <div className="ts-techs">
                  <span className="ts-tech">MongoDB</span>
                  <span className="ts-tech">SQL</span>
                </div>
                <ArrowDown className="ts-arrow" />
              </div>

              <div className="trace-step">
                <div className="ts-title">INTELLIGENCE</div>
                <div className="ts-techs">
                  <span className="ts-tech">Python</span>
                  <span className="ts-tech">TensorFlow</span>
                  <span className="ts-tech">Scikit-learn</span>
                </div>
                <ArrowDown className="ts-arrow" />
              </div>

              <div className="trace-step">
                <div className="ts-title">DELIVERY</div>
                <div className="ts-techs">
                  <span className="ts-tech">Git</span>
                  <span className="ts-tech">Vercel</span>
                  <span className="ts-tech">Render</span>
                </div>
              </div>

            </m.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            4. CONNECT THE ECOSYSTEM TO REAL SYSTEMS
        ══════════════════════════════════════════════════════ */}
        <section className="eco-systems" data-nav-theme="light">
          <div className="eco-bounds">
            <m.div className="eco-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              THE STACK CHANGES WITH THE SYSTEM.
            </m.div>
            
            <m.h2 className="systems-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Engineering Records
            </m.h2>

            <div className="systems-stack">
              {SYSTEMS.map((system, i) => (
                <m.div 
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
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            5. PRINCIPLE
        ══════════════════════════════════════════════════════ */}
        <section className="eco-principle" data-nav-theme="light">
          <div className="eco-bounds">
            <m.h2 className="ep-primary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              I don't choose technology because it is popular.<br/>
              I choose it because it fits the system.
            </m.h2>
            <m.p className="ep-secondary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Frameworks change.<br/>
              Architecture remains.
            </m.p>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

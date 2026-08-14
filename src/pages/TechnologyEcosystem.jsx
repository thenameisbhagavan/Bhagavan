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
    title: "FOUNDATION",
    desc: "Languages that define the computational layer.",
    techs: ["Python", "JavaScript", "Java", "C", "SQL", "HTML", "CSS"]
  },
  {
    num: "02",
    title: "PRODUCT",
    desc: "Interfaces and application experiences.",
    techs: ["React", "Vite", "Node.js", "Express.js"]
  },
  {
    num: "03",
    title: "SYSTEMS",
    desc: "Backend architecture and APIs.",
    techs: ["FastAPI", "Flask", "REST APIs"]
  },
  {
    num: "04",
    title: "INTELLIGENCE",
    desc: "AI, Machine Learning, and Data Processing.",
    techs: ["AI / Machine Learning", "TensorFlow", "Keras", "Scikit-learn", "Pandas", "NumPy", "NLP", "Computer Vision"]
  },
  {
    num: "05",
    title: "DELIVERY",
    desc: "Databases, Tooling, and Deployment.",
    techs: ["MongoDB", "MongoDB Atlas", "MySQL", "Git", "GitHub", "Postman", "Docker", "CI/CD", "Vercel", "Netlify", "Render"]
  }
];

// ─── Data: System Connections ────────────────────────────────────────────────
const SYSTEMS = [
  {
    name: "CareerOS",
    focus: "Career Intelligence",
    trace: ["React", "FastAPI", "AI / ML", "Data", "Deployment"]
  },
  {
    name: "AuraOS",
    focus: "AI Memory & Context",
    trace: ["React", "FastAPI", "Memory / RAG", "Data", "Deployment"]
  },
  {
    name: "VERITAS",
    focus: "Reasoning & Evidence",
    trace: ["React", "Python", "NLP / Reasoning", "Evidence Processing", "Deployment"]
  },
  {
    name: "VoltDrive",
    focus: "Digital Product Experience",
    trace: ["React", "Application Logic", "Product Interface", "Deployment"]
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
        title="TheNameIsBhagavan | Engineering Ecosystem" 
        description="The layers, tools, and engineering disciplines I combine to build intelligent products." 
        keywords="AI Engineer, Full Stack, Python, React, FastAPI, Technology Stack, Engineering Architecture" 
      />

      <div className="eco-page">
        
        {/* ══════════════════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════════════════ */}
        <section className="eco-hero" data-nav-theme="light">
          <div className="eco-bounds">
            <m.div className="eco-hero-eyebrow" initial="hidden" animate="visible" variants={fadeUp}>
              TECHNOLOGY ECOSYSTEM / ENGINEERING ARCHITECTURE / 2026
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

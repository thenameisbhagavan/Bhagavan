import SEO from "../components/SEO";
import React, { useEffect } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import SectionDivider from "../components/SectionDivider";
import BrandSignature from "../components/BrandSignature";
import '../styles/Skills.css';

// ─── CDN Source ───────────────────────────────────────────────────────────────
const getSimpleIcon = (slug) => `https://cdn.simpleicons.org/${slug}`;

// ─── Capability Editorial Marks ───────────────────────────────────────────────
const CAPABILITY_MARKS = {
  'REST APIs':                    { mark: 'API',  sub: 'Protocol Layer' },
  'RAG Systems':                  { mark: 'RAG',  sub: 'Retrieval Augmented' },
  'XGBoost':                      { mark: 'XGB',  sub: 'Gradient Boosting' },
  'LightGBM':                     { mark: 'LGB',  sub: 'Gradient Boosting' },
  'LangGraph':                    { mark: 'LGR',  sub: 'Graph Orchestration' },
  'Vector Databases':             { mark: 'VDB',  sub: 'Semantic Search' },
  'Spring Data JPA':              { mark: 'JPA',  sub: 'Persistence Layer' },
  'Data Structures & Algorithms': { mark: 'DSA',  sub: 'CS Foundations' },
  'Object-Oriented Programming':  { mark: 'OOP',  sub: 'Design Paradigm' },
  'DBMS':                         { mark: 'DBMS', sub: 'Data Management' },
  'Operating Systems':            { mark: 'OS',   sub: 'Systems Layer' },
  'Computer Networks':            { mark: 'NET',  sub: 'Network Protocols' },
  'System Design':                { mark: 'SYS',  sub: 'Architecture' },
  'SDLC':                         { mark: 'SDLC', sub: 'Dev Lifecycle' },
};

// ─── Data: Core Engineering ───────────────────────────────────────────────────
const CORE_ENGINEERING = [
  {
    title: 'Programming Languages',
    editorial: 'The language of logic.',
    items: [
      { name: 'Python',     icon: getSimpleIcon('python') },
      { name: 'Java',       icon: getSimpleIcon('openjdk') },
      { name: 'JavaScript', icon: getSimpleIcon('javascript') },
      { name: 'TypeScript', icon: getSimpleIcon('typescript') },
      { name: 'SQL',        icon: getSimpleIcon('postgresql') },
    ]
  },
  {
    title: 'Frontend Engineering',
    editorial: 'Where engineering becomes experience.',
    items: [
      { name: 'React',        icon: getSimpleIcon('react') },
      { name: 'Next.js',      icon: getSimpleIcon('nextdotjs') },
      { name: 'HTML5',        icon: getSimpleIcon('html5') },
      { name: 'CSS3',         icon: getSimpleIcon('css3') },
      { name: 'Tailwind CSS', icon: getSimpleIcon('tailwindcss') },
    ]
  },
  {
    title: 'Backend Engineering',
    editorial: 'Where systems become reliable.',
    items: [
      { name: 'Node.js',    icon: getSimpleIcon('nodedotjs') },
      { name: 'Express.js', icon: getSimpleIcon('express') },
      { name: 'Flask',      icon: getSimpleIcon('flask') },
      { name: 'FastAPI',    icon: getSimpleIcon('fastapi') },
      { name: 'REST APIs',  icon: null },
    ]
  }
];

// ─── Data: Intelligent Systems ────────────────────────────────────────────────
const INTELLIGENT_SYSTEMS = [
  {
    title: 'Artificial Intelligence',
    editorial: 'Where information becomes understanding.',
    items: [
      { name: 'NumPy',        icon: getSimpleIcon('numpy') },
      { name: 'Pandas',       icon: getSimpleIcon('pandas') },
      { name: 'Scikit-learn', icon: getSimpleIcon('scikitlearn') },
      { name: 'PyTorch',      icon: getSimpleIcon('pytorch') },
      { name: 'LangChain',    icon: getSimpleIcon('langchain') },
      { name: 'RAG Systems',  icon: null },
      { name: 'XGBoost',      icon: null },
      { name: 'LightGBM',     icon: null },
    ]
  },
  {
    title: 'LLM & AI Systems',
    editorial: 'Where intelligence becomes collaboration.',
    items: [
      { name: 'LangGraph',        icon: null },
      { name: 'LlamaIndex',       icon: getSimpleIcon('llamaindex') },
      { name: 'OpenAI API',       icon: getSimpleIcon('openai') },
      { name: 'Gemini API',       icon: getSimpleIcon('googlegemini') },
      { name: 'Anthropic API',    icon: getSimpleIcon('anthropic') },
      { name: 'Vector Databases', icon: null },
    ]
  },
  {
    title: 'Data Infrastructure',
    editorial: 'Where knowledge becomes scalable.',
    items: [
      { name: 'MongoDB',    icon: getSimpleIcon('mongodb') },
      { name: 'PostgreSQL', icon: getSimpleIcon('postgresql') },
      { name: 'MySQL',      icon: getSimpleIcon('mysql') },
      { name: 'Redis',      icon: getSimpleIcon('redis') },
    ]
  }
];

// ─── Data: Production Systems ─────────────────────────────────────────────────
const PRODUCTION_SYSTEMS = [
  {
    title: 'Cloud Engineering',
    editorial: 'Where products become resilient.',
    items: [
      { name: 'Docker',         icon: getSimpleIcon('docker') },
      { name: 'AWS',            icon: getSimpleIcon('amazonaws') },
      { name: 'Git',            icon: getSimpleIcon('git') },
      { name: 'GitHub',         icon: getSimpleIcon('github') },
      { name: 'GitHub Actions', icon: getSimpleIcon('githubactions') },
      { name: 'Vercel',         icon: getSimpleIcon('vercel') },
      { name: 'Render',         icon: getSimpleIcon('render') },
    ]
  },
  {
    title: 'Java Ecosystem',
    editorial: 'Where architecture becomes maintainable.',
    items: [
      { name: 'Java',            icon: getSimpleIcon('openjdk') },
      { name: 'Spring Boot',     icon: getSimpleIcon('springboot') },
    ]
  },
  {
    title: 'Engineering Foundations',
    editorial: 'Where every decision begins.',
    items: [
      { name: 'Data Structures & Algorithms', icon: null },
      { name: 'Object-Oriented Programming',  icon: null },
      { name: 'DBMS',                         icon: null },
      { name: 'Operating Systems',            icon: null },
      { name: 'Computer Networks',            icon: null },
      { name: 'System Design',                icon: null },
      { name: 'SDLC',                         icon: null },
    ]
  }
];

// ─── Motion ───────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const tileReveal = {
  hidden:  { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

// ─── Reusable EcoSection Component ────────────────────────────────────────────
function EcoSection({ group }) {
  return (
    <div className="eco-section">
      <m.div className="eco-header" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
        <h3 className="eco-title">{group.title}</h3>
        <p className="eco-editorial">{group.editorial}</p>
      </m.div>

      <m.div className="eco-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={stagger}>
        {group.items.map((item, idx) => {
          const markData = CAPABILITY_MARKS[item.name];
          return (
            <m.div className="eco-tile" key={idx} variants={tileReveal} whileHover="hover">
              <div className="eco-icon-wrapper">
                {item.icon ? (
                  <img src={item.icon} alt={`${item.name} icon`} className="eco-icon" loading="lazy" />
                ) : (
                  <div className="eco-typographic-mark">
                    <span className="mark-main">{markData?.mark || 'SYS'}</span>
                  </div>
                )}
              </div>
              <div className="eco-name">{item.name}</div>
              {markData && <div className="eco-sub">{markData.sub}</div>}
            </m.div>
          );
        })}
      </m.div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TechnologyEcosystem() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 100]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="TheNameIsBhagavan | Engineering Stack" description="Explore the comprehensive technology ecosystem, tools, languages, and frameworks Bhagavan utilizes to build intelligent systems and full stack applications." keywords="AI Engineer, Artificial Intelligence, Machine Learning, Portfolio, React, Full Stack" />

    <div className="skills-page">
      
      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <m.section className="skills-hero" style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}>
        <div className="skills-constrain center-align">
          <m.h1 className="skills-hero-headline" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: EASE }}>
            Technology alone<br/>changes nothing.<br/>
            <span className="text-muted">Engineering creates impact.</span>
          </m.h1>
        </div>
      </m.section>

      {/* ══════════════════════════════════════════════════════
          INTRODUCTION
      ══════════════════════════════════════════════════════ */}
      <section className="skills-intro">
        <div className="skills-constrain center-align">
          <m.h2 className="intro-sequence" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
            <m.span className="intro-line" variants={fadeUp}>Ideas require tools.</m.span>
            <m.span className="intro-line" variants={fadeUp}>Tools require understanding.</m.span>
            <m.span className="intro-line" variants={fadeUp}>Understanding creates engineering.</m.span>
          </m.h2>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CORE ENGINEERING
      ══════════════════════════════════════════════════════ */}
      <SectionDivider />
      <section className="skills-hierarchy-group theme-core">
        <div className="skills-constrain">
          {CORE_ENGINEERING.map((group, idx) => (
            <EcoSection key={idx} group={group} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRANSITION 1
      ══════════════════════════════════════════════════════ */}
      <section className="skills-transition">
        <div className="skills-constrain center-align">
          <m.h2 className="transition-statement" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
            Great products are more than interfaces.
          </m.h2>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          INTELLIGENT SYSTEMS
      ══════════════════════════════════════════════════════ */}
      <section className="skills-hierarchy-group theme-intelligent">
        <div className="skills-constrain">
          {INTELLIGENT_SYSTEMS.map((group, idx) => (
            <EcoSection key={idx} group={group} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          TRANSITION 2
      ══════════════════════════════════════════════════════ */}
      <section className="skills-transition alt-bg">
        <div className="skills-constrain center-align">
          <m.h2 className="transition-statement" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
            Intelligence is only useful when it can scale.
          </m.h2>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PRODUCTION SYSTEMS
      ══════════════════════════════════════════════════════ */}
      <section className="skills-hierarchy-group theme-production">
        <div className="skills-constrain">
          {PRODUCTION_SYSTEMS.map((group, idx) => (
            <EcoSection key={idx} group={group} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ORCHESTRATION VISUALIZATION
      ══════════════════════════════════════════════════════ */}
      <section className="skills-orchestration">
        <div className="skills-constrain center-align">
          <div className="orchestration-flow">
            {[
              "Ideas",
              "Programming",
              "Systems",
              "Intelligence",
              "Products",
              "Human Impact"
            ].map((node, i, arr) => (
              <React.Fragment key={i}>
                <m.div 
                  className="orchestration-node"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: EASE }}
                >
                  {node}
                </m.div>
                {i < arr.length - 1 && (
                  <m.div className="orchestration-arrow" initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}>
                    ↓
                  </m.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CAPABILITIES REVEAL (Progressive Single Section)
      ══════════════════════════════════════════════════════ */}
      <section className="skills-capabilities">
        <div className="skills-constrain center-align">
          <div className="capabilities-composition">
            {[
              "Intelligent Products",
              "AI Platforms",
              "Developer Tools",
              "Automation Systems",
              "Career Intelligence"
            ].map((cap, i) => (
              <m.div 
                key={i} 
                className="capability-line"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: i * 0.15, ease: EASE }}
              >
                {cap}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ROADMAP
      ══════════════════════════════════════════════════════ */}
      <section className="skills-roadmap">
        <div className="skills-constrain center-align">
          <div className="roadmap-flow">
            {[
              "Today",
              "AI Engineering",
              "Multi-Agent Systems",
              "Intelligent Platforms",
              "Developer Intelligence",
              "Human-Centered AI"
            ].map((node, i, arr) => (
              <React.Fragment key={i}>
                <m.div 
                  className={i === 0 ? "roadmap-node roadmap-start" : "roadmap-node"}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1, ease: EASE }}
                >
                  {node}
                </m.div>
                {i < arr.length - 1 && (
                  <m.div className="roadmap-arrow" initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1 }}>
                    ↓
                  </m.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="skills-closing">
        <div className="skills-constrain center-align">
          <div className="closing-sequence">
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
              Technology evolves.<br/>Engineering endures.
            </m.div>
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
              Every language changes.
            </m.div>
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
              Every framework evolves.
            </m.div>
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
              Curiosity remains.
            </m.div>
            <m.div className="closing-finale" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE, delay: 0.3 }}>
              Still building.
            </m.div>
            <m.div className="closing-sub-finale" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE, delay: 0.8 }}>
              Because every meaningful product begins with understanding.
            </m.div>
          </div>
        </div>
      </section>
      {/* BRAND SIGNATURE */}
      <BrandSignature />
    </div>
    </>
  );
}

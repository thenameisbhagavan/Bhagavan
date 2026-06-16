import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import '../styles/Skills.css';

// ─── CDN Source ───────────────────────────────────────────────────────────────
const getSimpleIcon = (slug) => `https://cdn.simpleicons.org/${slug}`;

// ─── Capability Editorial Marks ───────────────────────────────────────────────
// For every skill without an official logo, a curated typographic mark
// replaces the icon area. The mark IS the visual identity — not a fallback.
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

// ─── Data ─────────────────────────────────────────────────────────────────────
// Each group has an editorial description written as a statement of capability,
// not a list of features. The text explains WHY these technologies matter.
const SKILL_GROUPS = [
  {
    title: 'Programming Languages',
    editorial:
      'Every system begins with a language. Python for intelligence and data science. Java for enterprise-grade architecture. JavaScript and TypeScript for full-stack development. SQL as the universal language of structured data.',
    items: [
      { name: 'Python',     icon: getSimpleIcon('python') },
      { name: 'Java',       icon: getSimpleIcon('openjdk') },
      { name: 'JavaScript', icon: getSimpleIcon('javascript') },
      { name: 'TypeScript', icon: getSimpleIcon('typescript') },
      { name: 'SQL',        icon: getSimpleIcon('postgresql') },
    ],
  },
  {
    title: 'Frontend Engineering',
    editorial:
      'The surface where engineering meets human experience. Building interfaces that are fast by default, adaptive to context, and precise enough to feel effortless to the people using them.',
    items: [
      { name: 'React',        icon: getSimpleIcon('react') },
      { name: 'Next.js',      icon: getSimpleIcon('nextdotjs') },
      { name: 'HTML5',        icon: getSimpleIcon('html5') },
      { name: 'CSS3',         icon: getSimpleIcon('css3') },
      { name: 'Tailwind CSS', icon: getSimpleIcon('tailwindcss') },
    ],
  },
  {
    title: 'Backend Engineering',
    editorial:
      'The infrastructure layer that makes everything else possible. Secure by design, reliable under load, and architected to scale from prototype to production without compromise.',
    items: [
      { name: 'Node.js',    icon: getSimpleIcon('nodedotjs') },
      { name: 'Express.js', icon: getSimpleIcon('express') },
      { name: 'Flask',      icon: getSimpleIcon('flask') },
      { name: 'FastAPI',    icon: getSimpleIcon('fastapi') },
      { name: 'REST APIs',  icon: null },
    ],
  },
  {
    title: 'Artificial Intelligence & Machine Learning',
    editorial:
      'The discipline of building systems that learn. From classical gradient boosting to large-scale neural architectures, applied to real engineering problems that require measurable, production-grade results.',
    items: [
      { name: 'NumPy',        icon: getSimpleIcon('numpy') },
      { name: 'Pandas',       icon: getSimpleIcon('pandas') },
      { name: 'Scikit-learn', icon: getSimpleIcon('scikitlearn') },
      { name: 'PyTorch',      icon: getSimpleIcon('pytorch') },
      { name: 'LangChain',    icon: getSimpleIcon('langchain') },
      { name: 'RAG Systems',  icon: null },
      { name: 'XGBoost',      icon: null },
      { name: 'LightGBM',     icon: null },
    ],
  },
  {
    title: 'LLM & AI Systems',
    editorial:
      'Modern intelligence engineering. Orchestrating large language models, retrieval pipelines, and agent frameworks into production-grade applications that reason, retrieve, and respond with contextual accuracy.',
    items: [
      { name: 'LangGraph',        icon: null },
      { name: 'LlamaIndex',       icon: getSimpleIcon('llamaindex') },
      { name: 'OpenAI API',       icon: getSimpleIcon('openai') },
      { name: 'Gemini API',       icon: getSimpleIcon('googlegemini') },
      { name: 'Anthropic API',    icon: getSimpleIcon('anthropic') },
      { name: 'Vector Databases', icon: null },
    ],
  },
  {
    title: 'Databases & Data Infrastructure',
    editorial:
      'Every application is built on data. Relational, document, key-value, and vector — the right storage layer for every access pattern, query requirement, and scale demand.',
    items: [
      { name: 'MongoDB',    icon: getSimpleIcon('mongodb') },
      { name: 'PostgreSQL', icon: getSimpleIcon('postgresql') },
      { name: 'MySQL',      icon: getSimpleIcon('mysql') },
      { name: 'Redis',      icon: getSimpleIcon('redis') },
      { name: 'Pinecone',   icon: getSimpleIcon('pinecone') },
      { name: 'Qdrant',     icon: getSimpleIcon('qdrant') },
    ],
  },
  {
    title: 'Cloud & DevOps',
    editorial:
      'Engineering doesn\'t end at code. Containerized deployments, automated CI/CD pipelines, and cloud infrastructure designed to keep production systems running reliably at any scale.',
    items: [
      { name: 'Docker',         icon: getSimpleIcon('docker') },
      { name: 'AWS',            icon: getSimpleIcon('amazonaws') },
      { name: 'Git',            icon: getSimpleIcon('git') },
      { name: 'GitHub',         icon: getSimpleIcon('github') },
      { name: 'GitHub Actions', icon: getSimpleIcon('githubactions') },
      { name: 'Vercel',         icon: getSimpleIcon('vercel') },
      { name: 'Render',         icon: getSimpleIcon('render') },
    ],
  },
  {
    title: 'Java Ecosystem',
    editorial:
      'Enterprise-grade backend architecture at scale. Spring\'s comprehensive framework enables secure, data-driven, production-ready services — built for teams, built to last.',
    items: [
      { name: 'Java',            icon: getSimpleIcon('openjdk') },
      { name: 'Spring Boot',     icon: getSimpleIcon('springboot') },
      { name: 'Spring Security', icon: getSimpleIcon('springsecurity') },
      { name: 'Spring Data JPA', icon: null },
    ],
  },
  {
    title: 'Engineering Foundations',
    editorial:
      'The concepts that outlast every technology cycle. Understanding these deeply is what separates engineers who build lasting systems from those who simply consume frameworks.',
    items: [
      { name: 'Data Structures & Algorithms', icon: null },
      { name: 'Object-Oriented Programming',  icon: null },
      { name: 'DBMS',                         icon: null },
      { name: 'Operating Systems',            icon: null },
      { name: 'Computer Networks',            icon: null },
      { name: 'System Design',                icon: null },
      { name: 'SDLC',                         icon: null },
    ],
  },
];

// ─── Motion Variants ──────────────────────────────────────────────────────────
const APPLE_EASE = [0.16, 1, 0.3, 1];

// Section meta and headings
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: APPLE_EASE } },
};

// Stagger wrapper for entire section
const sectionStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// Individual tile entry
const tileReveal = {
  hidden:  { opacity: 0, y: 14, scale: 0.97 },
  visible: { opacity: 1, y: 0,  scale: 1,    transition: { duration: 0.45, ease: APPLE_EASE } },
};

// Stagger the tile grid independently
const tileGridStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.15 } },
};

// ─── TechTile ─────────────────────────────────────────────────────────────────
// Used for technologies with an official Simple Icons SVG.
// The logo is small (28 px), monochrome by default, reveals brand color on hover.
// The technology NAME is the primary text — the logo is a quiet accent.
const TechTile = ({ item }) => (
  <m.div className="eco-tile" variants={tileReveal} role="listitem">
    <div className="eco-tile-icon-wrap">
      <img
        src={item.icon}
        alt={item.name}
        loading="lazy"
        className="eco-tile-logo"
      />
    </div>
    <span className="eco-tile-name">{item.name}</span>
  </m.div>
);

// ─── CapTile ──────────────────────────────────────────────────────────────────
// Used for engineering concepts and capabilities without official logos.
// The editorial mark (e.g. "DSA") IS the visual identity — not a fallback.
const CapTile = ({ item }) => {
  const cap = CAPABILITY_MARKS[item.name] ?? {
    mark: item.name.slice(0, 3).toUpperCase(),
    sub:  'Concept',
  };

  return (
    <m.div className="eco-tile eco-cap-tile" variants={tileReveal} role="listitem">
      <div className="eco-cap-mark-wrap">
        <span className="eco-cap-mark">{cap.mark}</span>
        <span className="eco-cap-sub">{cap.sub}</span>
      </div>
      <span className="eco-tile-name">{item.name}</span>
    </m.div>
  );
};

// ─── EcoSection ───────────────────────────────────────────────────────────────
// Each section is an editorial chapter.
// Desktop: two-column grid — left (sticky meta) | right (tile grid).
// Mobile: stacked vertical, meta above tiles.
const EcoSection = ({ group, index }) => (
  <m.section
    className="eco-section"
    aria-labelledby={`eco-section-${index}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={sectionStagger}
  >
    {/* Left column: section number, title, editorial description */}
    <div className="eco-section-meta">
      <m.span className="eco-section-num" variants={fadeUp} aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </m.span>
      <m.h2
        id={`eco-section-${index}`}
        className="eco-section-title"
        variants={fadeUp}
      >
        {group.title}
      </m.h2>
      <m.p className="eco-section-editorial" variants={fadeUp}>
        {group.editorial}
      </m.p>
    </div>

    {/* Right column: technology + capability tiles */}
    <m.div
      className="eco-tile-grid"
      role="list"
      variants={tileGridStagger}
    >
      {group.items.map((item) =>
        item.icon
          ? <TechTile  key={item.name} item={item} />
          : <CapTile   key={item.name} item={item} />
      )}
    </m.div>
  </m.section>
);

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TechnologyEcosystem() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="eco-page">

      {/* ── HERO ── */}
      <section className="eco-hero" aria-label="Technology Ecosystem Hero">
        <m.span
          className="eco-hero-eyebrow"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: APPLE_EASE }}
        >
          Engineering Capabilities
        </m.span>

        <m.h1
          className="eco-hero-headline"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: APPLE_EASE }}
        >
          Built Through Practice.
        </m.h1>

        <m.p
          className="eco-hero-sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.22, ease: APPLE_EASE }}
        >
          Years of engineering distilled into systems, products,
          intelligence, and infrastructure.
        </m.p>
      </section>

      {/* ── CHAPTERS ── */}
      {SKILL_GROUPS.map((group, index) => (
        <EcoSection key={group.title} group={group} index={index} />
      ))}

      {/* ── CLOSING ── */}
      <m.section
        className="eco-closing"
        aria-label="Closing statement"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={sectionStagger}
      >
        <m.h2 className="eco-closing-headline" variants={fadeUp}>
          The Tools Evolve.
        </m.h2>
        <m.h3 className="eco-closing-subheadline" variants={fadeUp}>
          The Fundamentals Remain.
        </m.h3>
        <m.p className="eco-closing-text" variants={fadeUp}>
          Technology changes. Principles endure. The ability to solve problems,
          design systems, and create meaningful products remains timeless.
        </m.p>
      </m.section>

    </div>
  );
}

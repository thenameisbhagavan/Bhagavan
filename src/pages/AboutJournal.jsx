import React from 'react';
import { Helmet } from 'react-helmet-async';
import { m } from 'framer-motion';
import BrandSignature from '../components/BrandSignature';
import '../styles/EngineeringJournal.css';

const ease = [0.16, 1, 0.3, 1];
const sectionEase = [0.22, 1, 0.36, 1];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: sectionEase } }
};

export default function AboutJournal() {
  return (
    <div className="journal-page">
      <Helmet>
        <title>About | Engineering Journal</title>
        <meta name="description" content="Mission, writing philosophy, and engineering standards for TheNameIsBhagavan Engineering Journal." />
      </Helmet>

      <section className="journal-hero" data-nav-theme="light">
        <m.h1 
          className="journal-hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          About the<br/>Journal.
        </m.h1>
        <m.p 
          className="journal-hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          Engineering human potential through systems architecture, intelligence, and product craftsmanship.
        </m.p>
      </section>

      <div className="doc-layout" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1.5rem' }}>
        <m.section 
          className="doc-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          <h2>Mission</h2>
          <p>
            The Engineering Journal exists to document the systems, architecture decisions, and research behind the intelligent products I build. It serves as an open-source technical reference for system architects, frontend engineers, and AI researchers aiming to understand how to build production-grade, Apple-quality software.
          </p>
          <p>
            This is not a traditional blog. It is a living documentation platform where engineering trade-offs, failures, and lessons learned are treated as first-class citizens.
          </p>

          <h2>Writing Philosophy</h2>
          <p>
            Every piece published in this journal adheres to a strict editorial standard inspired by the engineering blogs of Stripe, Apple, Vercel, and OpenAI:
          </p>
          <ul>
            <li><strong>Systems First:</strong> Focus on architecture, data flow, and underlying mechanics rather than superficial UI features.</li>
            <li><strong>Radical Transparency:</strong> Document trade-offs and failures openly. No system is perfect, and acknowledging technical debt is a sign of engineering maturity.</li>
            <li><strong>High Signal-to-Noise:</strong> Avoid marketing filler, motivational storytelling, and unnecessary fluff. Write for senior engineers.</li>
            <li><strong>Design Before Code:</strong> Emphasize the planning phase and the "why" behind the technology stack choices.</li>
          </ul>

          <h2>Topics Covered</h2>
          <p>
            The journal organizes its research into specialized collections:
          </p>
          <ul>
            <li><strong>AI Systems:</strong> Deep learning, reasoning architectures, and integration of LLMs into product experiences.</li>
            <li><strong>Frontend Engineering:</strong> React, Framer Motion, accessibility, web performance, and Apple Human Interface Design principles.</li>
            <li><strong>Backend Architecture:</strong> Python, FastAPI, Node.js, distributed systems, and scalable databases.</li>
            <li><strong>Engineering Leadership:</strong> Systems thinking, technical decision-making, and building in public.</li>
          </ul>

          <h2>Publishing Process & Standards</h2>
          <p>
            Articles are drafted, reviewed, and published iteratively. They follow a rigorous 14-section architectural template (spanning from Executive Summary down to Future Implementations). Complex concepts must be paired with clear Mermaid diagrams or SVG architectural graphs. Code snippets must represent actual production implementations rather than simplified tutorials.
          </p>

          <h2>Technology Stack</h2>
          <p>
            The Engineering Journal itself is built with:
          </p>
          <ul>
            <li><strong>Frontend:</strong> React 18, Vite, Framer Motion (Hardware-accelerated).</li>
            <li><strong>Styling:</strong> Vanilla CSS with CSS Variables and Flexbox/Grid for zero-dependency layout control.</li>
            <li><strong>Typography:</strong> San Francisco (SF Pro), Inter, and native system stacks for maximum readability.</li>
            <li><strong>Content:</strong> Dynamic Markdown/MDX parser processing static YAML frontmatter.</li>
            <li><strong>Performance:</strong> Aggressive pre-rendering, lazy-loading, and IntersectionObserver-based animations.</li>
          </ul>
        </m.section>
      </div>

      <BrandSignature />
    </div>
  );
}

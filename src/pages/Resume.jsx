import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Resume.css';

import pdfUrl from '../assets/bhagavanresume.pdf';

// ─── Motion ───────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const resumeReveal = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
};

// ─── Reveal helper ────────────────────────────────────────────────────────────
function Reveal({ children, className }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
    >
      {children}
    </m.div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const HIGHLIGHTS = [
  "4+ Internships",
  "5+ AI Systems",
  "Full Stack Engineering",
  "Machine Learning",
  "CareerOS",
  "ResumeAI"
];

const FOCUS = [
  "Artificial Intelligence",
  "Software Engineering",
  "Backend Systems",
  "Full Stack Development",
  "Career Intelligence",
  "Product Development"
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resumeImage = "/bhagavanresume_page-0001.jpg";

  return (
    <div className="res-page">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="res-hero" aria-label="Resume Hero">
        <m.h1 
          className="res-hero-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          The Builder.
        </m.h1>
        <m.p 
          className="res-hero-sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
        >
          Engineering intelligent systems through software, data, and continuous learning.
        </m.p>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — RESUME PREVIEW
      ══════════════════════════════════════════════════════ */}
      <section className="res-preview">
        <div className="res-constrain center-align">
          <Reveal>
            <m.span className="res-eyebrow" variants={fadeUp}>Resume Preview</m.span>
            <m.div className="res-meta-tags" variants={fadeUp}>
              <span>Updated 2026</span>
              <span>PDF Available</span>
            </m.div>
          </Reveal>

          <m.div 
            className="res-artifact-wrapper"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-120px" }} 
            variants={resumeReveal}
          >
            <img src={resumeImage} alt="Siva Bhagavan Resume" loading="lazy" />
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — DOWNLOAD EXPERIENCE
      ══════════════════════════════════════════════════════ */}
      <section className="res-download res-alt">
        <div className="res-constrain center-align">
          <Reveal>
            <m.h2 className="res-section-headline" variants={fadeUp}>
              Take It With You.
            </m.h2>
            <m.div variants={fadeUp} style={{ marginTop: '40px' }}>
              <a href={pdfUrl} download="Siva_Bhagavan_Resume.pdf" className="res-pill-btn">
                Download Resume <span>↓</span>
              </a>
            </m.div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — HIGHLIGHTS
      ══════════════════════════════════════════════════════ */}
      <section className="res-highlights">
        <div className="res-constrain">
          <Reveal className="center-align">
            <m.span className="res-eyebrow" variants={fadeUp}>Experience Highlights</m.span>
          </Reveal>
          
          <Reveal className="res-large-list">
            {HIGHLIGHTS.map((item) => (
              <m.h3 key={item} className="res-large-item" variants={fadeUp}>
                {item}
              </m.h3>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — PROFESSIONAL FOCUS
      ══════════════════════════════════════════════════════ */}
      <section className="res-focus res-alt">
        <div className="res-constrain">
          <Reveal className="center-align">
            <m.span className="res-eyebrow" variants={fadeUp}>Professional Focus</m.span>
            <m.h2 className="res-section-headline" variants={fadeUp}>
              Focused On Building.
            </m.h2>
          </Reveal>
          
          <Reveal className="res-large-list">
            {FOCUS.map((focus) => (
              <m.h3 key={focus} className="res-large-item" variants={fadeUp}>
                {focus}
              </m.h3>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — RESUME PHILOSOPHY
      ══════════════════════════════════════════════════════ */}
      <section className="res-philosophy">
        <div className="res-constrain">
          <Reveal className="center-align">
            <m.h2 className="res-section-headline" variants={fadeUp}>
              More Than A Document.
            </m.h2>
          </Reveal>

          <Reveal className="res-constrain--reading">
            <m.p className="res-body" variants={fadeUp}>
              A resume is not a list of experiences. It is evidence of learning, execution, and growth.
            </m.p>
            <m.p className="res-body" variants={fadeUp}>
              Projects built. Problems solved. Systems engineered. Opportunities created.
            </m.p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="res-closing res-dark" aria-label="Closing statement">
        <div className="res-constrain center-align">
          <Reveal>
            <m.h2 className="res-closing-headline" variants={fadeUp}>
              Still Building.
            </m.h2>
            <m.p className="res-closing-sub" variants={fadeUp}>
              Every internship. Every project. Every challenge. A step toward building intelligent systems that create opportunity.
            </m.p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — EXPLORE THE WORK
      ══════════════════════════════════════════════════════ */}
      <section className="res-explore res-dark">
        <div className="res-constrain center-align">
          <Reveal>
            <m.h2 className="res-section-headline res-text-light" variants={fadeUp}>
              Explore The Work.
            </m.h2>
            
            <m.div className="res-nav-actions" variants={fadeUp}>
              <Link to="/work" className="res-nav-link">Projects <span>↗</span></Link>
              <Link to="/experience" className="res-nav-link">Experience <span>↗</span></Link>
              <Link to="/skills" className="res-nav-link">Skills <span>↗</span></Link>
              <Link to="/connect" className="res-nav-link">Connect <span>↗</span></Link>
            </m.div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}

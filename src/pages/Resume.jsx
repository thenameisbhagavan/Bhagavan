import SEO from "../components/SEO";
import React, { useEffect } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Resume.css';
import ResumeCenter from '../components/ResumeCenter';

import pdfUrl from '../assets/bhagavanresume.pdf';
import resumeImageSrc from '../assets/bhagavanresumepage_001.jpg';

// ─── Motion ───────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const resumeReveal = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: EASE } },
};

// ─── Reveal helper ────────────────────────────────────────────────────────────
function Reveal({ children, className }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
    >
      {children}
    </m.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Resume() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 100]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const resumeImage = resumeImageSrc;

  return (
    <>
      <SEO title="Resume | Bhagavan AI Engineer & Software Developer" description="View and download the professional resume of Bhagavan. Comprehensive overview of skills, education, professional experience, and AI engineering products." keywords="AI Engineer, Artificial Intelligence, Machine Learning, Portfolio, React, Full Stack" />

    <div className="res-page">
      
      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <m.section className="res-hero" style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}>
        <div className="res-constrain center-align">
          <m.h1 className="res-hero-headline" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: EASE }}>
            One Page.<br/>Many Years.
          </m.h1>
          <m.p className="res-hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: EASE }}>
            Everything built. Everything learned. One document.
          </m.p>
        </div>
      </m.section>

      {/* ══════════════════════════════════════════════════════
          THE TRANSITION
      ══════════════════════════════════════════════════════ */}
      <section className="res-transition">
        <div className="res-constrain center-align">
          <Reveal className="res-editorial-sequence">
            <m.h2 className="res-statement text-muted" variants={fadeUp}>Every project.</m.h2>
            <m.h2 className="res-statement text-muted" variants={fadeUp}>Every internship.</m.h2>
            <m.h2 className="res-statement text-muted" variants={fadeUp}>Every experiment.</m.h2>
            <m.h2 className="res-statement text-muted" variants={fadeUp}>Every lesson.</m.h2>
            <m.h2 className="res-statement" variants={fadeUp}>One page.</m.h2>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          THE ARTIFACT
      ══════════════════════════════════════════════════════ */}
      <section className="res-artifact">
        <div className="res-constrain center-align">
          <m.div 
            className="res-artifact-wrapper"
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-120px" }} 
            variants={resumeReveal}
          >
            <img src={resumeImage} alt="Engineering Artifact" className="res-artifact-img" loading="lazy" />
          </m.div>

          <m.div className="res-download-sequence" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="res-download-thought">Take the complete journey with you.</div>
            <a href={pdfUrl} download="Siva_Bhagavan_Resume.pdf" className="primary-download-btn">
              Download Resume
            </a>
          </m.div>
        </div>
      </section>

      <ResumeCenter />

      {/* ══════════════════════════════════════════════════════
          ENGINEERING HIGHLIGHTS
      ══════════════════════════════════════════════════════ */}
      <section className="res-highlights">
        <div className="res-constrain center-align">
          <Reveal className="highlights-sequence">
            {[
              "Artificial Intelligence",
              "Product Engineering",
              "Full-Stack Systems",
              "Career Intelligence",
              "Intelligent Products",
              "Engineering Growth"
            ].map((topic, i) => (
              <m.div key={i} className="res-highlight-line" variants={fadeUp}>{topic}</m.div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          PROFESSIONAL EVOLUTION
      ══════════════════════════════════════════════════════ */}
      <section className="res-evolution">
        <div className="res-constrain center-align">
          <div className="evolution-flow">
            {[
              "Learning",
              "Engineering",
              "Systems",
              "Products",
              "Intelligence",
              "Impact"
            ].map((node, i, arr) => (
              <React.Fragment key={i}>
                <m.div 
                  className="evolution-node"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: EASE }}
                >
                  {node}
                </m.div>
                {i < arr.length - 1 && (
                  <m.div className="evolution-arrow" initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}>
                    ↓
                  </m.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MORE THAN A RESUME
      ══════════════════════════════════════════════════════ */}
      <section className="res-reflection">
        <div className="res-constrain center-align">
          <Reveal className="reflection-sequence">
            <m.div className="reflection-line" variants={fadeUp}>A resume captures achievements.</m.div>
            <m.div className="reflection-line" variants={fadeUp}>It cannot capture curiosity.</m.div>
            <m.div className="reflection-line" variants={fadeUp}>It cannot capture experimentation.</m.div>
            <m.div className="reflection-line" variants={fadeUp}>It cannot capture persistence.</m.div>
            <m.div className="reflection-line reflection-strong" variants={fadeUp}>Those experiences shaped<br/>the engineer behind the document.</m.div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="res-closing">
        <div className="res-constrain center-align">
          <div className="closing-sequence">
            
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE }}>
              Every project<br/>created experience.
            </m.div>

            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE }}>
              Every experience<br/>created perspective.
            </m.div>

            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE }}>
              Every perspective<br/>created better products.
            </m.div>

            <m.div className="closing-finale" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE }}>
              The journey continues.
            </m.div>

            <m.div className="closing-finale text-muted" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE, delay: 0.5 }}>
              Still Building.
            </m.div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FINAL NAVIGATION
      ══════════════════════════════════════════════════════ */}
      <section className="res-navigation">
        <div className="res-constrain center-align">
          <m.div className="nav-editorial" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.5, ease: EASE }}>
            Every story has many chapters.
          </m.div>
          
          <m.div className="nav-links-grid" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.5, ease: EASE, delay: 0.2 }}>
            <Link to="/work" className="nav-link">Projects</Link>
            <Link to="/experience" className="nav-link">Experience</Link>
            <Link to="/technology-ecosystem" className="nav-link">Engineering Capabilities</Link>
            <Link to="/connect" className="nav-link">Connect</Link>
          </m.div>
        </div>
      </section>

    </div>
  
    </>
  );
}

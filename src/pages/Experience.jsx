import SEO from "../components/SEO";
import React, { useEffect, useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import "../styles/Experience.css";

// ─── Certificate Artifacts ────────────────────────────────────────────────────
import studyOwlCert   from "../assets/cert-studyowl.png";
import blackbucksCert from "../assets/cert-blackbucks.png";
import smartBridgeCert from "../assets/cert-smartbridge.png";
import helsonCert     from "../assets/cert-helson.png";

// ─── Motion ───────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const certReveal = {
  hidden:  { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: EASE } },
};

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
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

// ─── Transition Screen ────────────────────────────────────────────────────────
function NarrativeTransition({ text }) {
  if (!text) return null;
  return (
    <section className="exp-narrative-transition">
      <div className="exp-constrain">
        <m.h2 
          className="exp-transition-text" 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={fadeUp}
        >
          {text}
        </m.h2>
      </div>
    </section>
  );
}

// ─── Chapter ──────────────────────────────────────────────────────────────────
// theme maps to CSS: theme-blackbucks, theme-studyowl, theme-smartbridge, theme-helson
// scale controls the hierarchical typography size (e.g. smartbridge gets 'massive')
function Chapter({ theme, scale = "normal", eyebrow, headline, company, role, editorial, cert, certAlt }) {
  return (
    <section className={`exp-chapter theme-${theme}`}>
      <div className="exp-constrain">
        <div className={`exp-chapter-header scale-${scale}`}>
          <Reveal>
            <m.span className="exp-eyebrow" variants={fadeUp}>{eyebrow}</m.span>
            <m.h2 className="exp-chapter-headline" variants={fadeUp}>{headline}</m.h2>
          </Reveal>
        </div>

        <div className="exp-chapter-body">
          <m.p
            className="exp-chapter-editorial"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            {editorial}
          </m.p>

          <m.div
            className="exp-cert-wrap inline-cert"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={certReveal}
          >
            <div className="cert-museum-frame">
              <img src={cert} alt={certAlt} loading="lazy" className="exp-cert-img" />
            </div>
            <div className="cert-caption">
              {company} — {role}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Experience() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 100]);

  // Intro Typography Cascade
  const introRef = useRef(null);
  const { scrollYProgress: introProgress } = useScroll({
    target: introRef,
    offset: ["start start", "end end"]
  });

  const introOpacity1 = useTransform(introProgress, [0, 0.1, 0.2], [1, 1, 0]);
  const introOpacity2 = useTransform(introProgress, [0.15, 0.25, 0.4], [0, 1, 0]);
  const introOpacity3 = useTransform(introProgress, [0.35, 0.45, 0.6], [0, 1, 0]);
  const introOpacity4 = useTransform(introProgress, [0.55, 0.65, 0.8], [0, 1, 0]);
  const introOpacity5 = useTransform(introProgress, [0.75, 0.85, 1], [0, 1, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Professional Experience | Bhagavan AI Engineer Portfolio" description="Discover the professional experience and career journey of Bhagavan. Explore roles in AI Engineering, Data Science, and Full Stack Software Development." keywords="AI Engineer, Artificial Intelligence, Machine Learning, Portfolio, React, Full Stack" />

    <div className="exp-page">

      {/* ══════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════ */}
      <m.section className="exp-hero" style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}>
        <div className="exp-constrain">
          <m.h1
            className="exp-hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            Experience Shapes Perspective.
          </m.h1>
        </div>
      </m.section>

      {/* ══════════════════════════════════════════════════════
          INTRODUCTION CASCADING
      ══════════════════════════════════════════════════════ */}
      <section ref={introRef} className="exp-intro-container">
        <div className="exp-intro-sticky">
          <m.h2 className="exp-intro-text" style={{ opacity: introOpacity1 }}>
            Every engineer<br/>starts<br/>by solving<br/>small problems.
          </m.h2>
          <m.h2 className="exp-intro-text" style={{ opacity: introOpacity2 }}>
            Small problems<br/>become<br/>systems.
          </m.h2>
          <m.h2 className="exp-intro-text" style={{ opacity: introOpacity3 }}>
            Systems<br/>become<br/>products.
          </m.h2>
          <m.h2 className="exp-intro-text" style={{ opacity: introOpacity4 }}>
            Products<br/>shape<br/>people.
          </m.h2>
          <m.h2 className="exp-intro-text intro-climax" style={{ opacity: introOpacity5 }}>
            Experience.
          </m.h2>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CHAPTER: BLACKBUCKS (Foundation)
      ══════════════════════════════════════════════════════ */}
      <Chapter
        theme="blackbucks"
        scale="normal"
        eyebrow="Learning Foundation"
        headline="Learning From Data."
        company="Blackbucks"
        role="Machine Learning Intern"
        editorial="The real challenge wasn't building models—it was understanding data itself. Working with workflows revealed that successful AI systems depend on the quality of the data, the rigor of the process, and the ability to extract signal from complexity. This established the analytical foundation for every intelligent system built thereafter."
        cert={blackbucksCert}
        certAlt="Blackbucks Machine Learning Internship Certificate"
      />

      <NarrativeTransition text="Learning revealed complexity." />

      {/* ══════════════════════════════════════════════════════
          CHAPTER: STUDYOWL (Product)
      ══════════════════════════════════════════════════════ */}
      <Chapter
        theme="studyowl"
        scale="large"
        eyebrow="Product Engineering"
        headline="Building Products."
        company="StudyOwl"
        role="Software Development Intern"
        editorial="Software engineering became more than writing code. It introduced the full lifecycle of building digital products. Working across frontend and backend technologies revealed how architecture, usability, and reliability must work together to create meaningful experiences. Technical knowledge evolved into product thinking."
        cert={studyOwlCert}
        certAlt="StudyOwl Software Development Internship Certificate"
      />

      {/* ══════════════════════════════════════════════════════
          CHAPTER: SMARTBRIDGE (Climax)
      ══════════════════════════════════════════════════════ */}
      <Chapter
        theme="smartbridge"
        scale="massive"
        eyebrow="AI + Software Engineering"
        headline="Applying Intelligence."
        company="SmartBridge"
        role="Software Engineering Intern"
        editorial="The focus shifted from building systems to creating solutions. Working with artificial intelligence and automation revealed that technology creates value only when it solves real problems for real people. Engineering, AI, and product thinking combined to demonstrate how intelligent systems improve decision-making. The connection between intelligence and impact became clear."
        cert={smartBridgeCert}
        certAlt="SmartBridge Software Engineering Certificate"
      />

      <NarrativeTransition text="Confidence demanded responsibility." />

      {/* ══════════════════════════════════════════════════════
          CHAPTER: HELSON (Enterprise)
      ══════════════════════════════════════════════════════ */}
      <Chapter
        theme="helson"
        scale="large"
        eyebrow="Enterprise Thinking"
        headline="Designing Intelligent Workflows."
        company="Helson"
        role="Enterprise Automation Intern"
        editorial="Process automation and operational efficiency required a different scale of thinking. Working with enterprise workflows revealed how technology streamlines decision-making across organizations. It emphasized system thinking—understanding how individual processes connect and how information flows to transform complexity into reliability."
        cert={helsonCert}
        certAlt="Helson Enterprise Automation Certificate"
      />

      {/* ══════════════════════════════════════════════════════
          CAPABILITIES
      ══════════════════════════════════════════════════════ */}
      <section className="exp-capabilities">
        <div className="exp-constrain">
          {[
            "AI Systems",
            "Product Engineering",
            "System Architecture",
            "Career Intelligence",
            "Experience Design"
          ].map((cap, i) => (
            <m.div 
              key={cap} 
              className="cap-floating-item"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.2, ease: EASE }}
            >
              {cap}
            </m.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          VERIFIED EXPERIENCE (Horizontal Editorial)
      ══════════════════════════════════════════════════════ */}
      <section className="exp-gallery-section">
        <div className="exp-horizontal-scroll">
          <m.h2 
            className="gallery-headline-large"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: EASE }}
          >
            Verified Artifacts
          </m.h2>
          
          <div className="gallery-track">
            {[
              { img: blackbucksCert,  company: "Blackbucks" },
              { img: studyOwlCert,    company: "StudyOwl" },
              { img: smartBridgeCert, company: "SmartBridge" },
              { img: helsonCert,      company: "Helson" },
            ].map(({ img, company }, i) => (
              <m.div
                key={company}
                className="gallery-artifact"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: EASE }}
              >
                <div className="artifact-museum-frame">
                  <img src={img} alt={`${company} artifact`} loading="lazy" />
                </div>
                <div className="artifact-label">{company}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          ENGINEERING PHILOSOPHY
      ══════════════════════════════════════════════════════ */}
      <section className="exp-philosophy">
        <div className="exp-constrain">
          {[
            "Build for people.",
            "Solve meaningful problems.",
            "Think in systems.",
            "Learn continuously.",
            "Ship real products."
          ].map((p) => (
            <m.div 
              key={p} 
              className="philosophy-statement"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1, ease: EASE }}
            >
              {p}
            </m.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="exp-closing">
        <div className="exp-constrain">
          <div className="closing-sequence">
            <m.div 
              className="closing-thought"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.2, ease: EASE }}
            >
              Experience creates perspective.
            </m.div>
            
            <m.div 
              className="closing-thought"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.2, ease: EASE }}
            >
              Perspective creates better products.
            </m.div>
            
            <m.div 
              className="closing-finale"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.5, ease: EASE, delay: 0.2 }}
            >
              Still Day One.
            </m.div>
          </div>
        </div>
      </section>

    </div>
  
    </>
  );
}

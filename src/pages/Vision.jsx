import React, { useEffect } from 'react';
import { m } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Vision.css';

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
const ENGINEERING_PRINCIPLES = [
  "Technology should be useful.",
  "Technology should be understandable.",
  "Technology should respect people.",
  "Technology should create opportunity.",
  "Technology should amplify human capability."
];

const THE_ROAD_AHEAD = [
  "Student",
  "Developer",
  "Engineer",
  "AI Builder",
  "Systems Thinker",
  "Future Founder"
];

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Vision() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="vision-page">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <section className="vis-hero" aria-label="Vision Hero">
        <m.h1 
          className="vis-hero-headline"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          Engineering Human Potential.
        </m.h1>
        <m.p 
          className="vis-hero-sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: EASE }}
        >
          I build intelligent systems that help people understand their skills, opportunities, and future possibilities.
        </m.p>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — THE OBSERVATION
      ══════════════════════════════════════════════════════ */}
      <section className="vis-observation">
        <div className="vis-constrain">
          <Reveal className="vis-editorial-stack">
            <m.h2 className="vis-editorial-large" variants={fadeUp}>
              Technology has become very good at managing information.
            </m.h2>
            <m.h2 className="vis-editorial-large vis-text-muted" variants={fadeUp}>
              People still struggle to understand themselves.
            </m.h2>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — THE OPPORTUNITY
      ══════════════════════════════════════════════════════ */}
      <section className="vis-opportunity">
        <div className="vis-constrain vis-constrain--reading">
          <Reveal>
            <m.span className="vis-eyebrow" variants={fadeUp}>The Opportunity</m.span>
            <m.h2 className="vis-section-headline" variants={fadeUp}>
              Intelligence as Guidance.
            </m.h2>
            <m.p className="vis-body" variants={fadeUp}>
              Artificial intelligence presents a fundamental shift in how we interact with software. It allows us to move from systems that merely store and retrieve data, to systems that understand context.
            </m.p>
            <m.p className="vis-body" variants={fadeUp}>
              This means AI can be directed to help people with learning, career growth, skill development, and decision making. It can provide personalized, contextual guidance at scale—not by replacing human judgment, but by providing the clarity needed to exercise it better.
            </m.p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — WHY I BUILD
      ══════════════════════════════════════════════════════ */}
      <section className="vis-why">
        <div className="vis-constrain vis-constrain--reading">
          <Reveal>
            <m.span className="vis-eyebrow" variants={fadeUp}>The Journey</m.span>
            <m.h2 className="vis-section-headline" variants={fadeUp}>
              Why I Build.
            </m.h2>
            <m.p className="vis-body" variants={fadeUp}>
              My engineering journey—spanning internships in software development, full stack engineering, and machine learning—has always been grounded in solving practical problems.
            </m.p>
            <m.p className="vis-body" variants={fadeUp}>
              Whether I was building a resume analysis tool to help students navigate ATS systems, or developing models to predict outcomes from complex datasets, the recurring theme was using code to create clarity. Projects like CareerOS emerged naturally from this intersection: applying machine learning to the deeply human problem of navigating a career.
            </m.p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — CAREEROS
      ══════════════════════════════════════════════════════ */}
      <section className="vis-careeros">
        <div className="vis-constrain center-align">
          <Reveal>
            <m.h2 className="vis-careeros-headline" variants={fadeUp}>
              CareerOS.
            </m.h2>
            <m.p className="vis-careeros-sub" variants={fadeUp}>
              A long-term engineering project.
            </m.p>
          </Reveal>
        </div>
        
        <div className="vis-constrain vis-constrain--reading">
          <Reveal>
            <m.p className="vis-body" variants={fadeUp}>
              CareerOS is not a company. It is not a startup. It is not a finished product.
            </m.p>
            <m.p className="vis-body" variants={fadeUp}>
              It is a continuous research direction and engineering initiative exploring how AI can help people navigate careers and opportunities. It serves as the foundation where I apply my learning in full stack development, database architecture, and machine learning models to build systems that actually help people understand their potential.
            </m.p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — ENGINEERING PRINCIPLES
      ══════════════════════════════════════════════════════ */}
      <section className="vis-principles vis-dark">
        <div className="vis-constrain">
          <Reveal>
            <m.span className="vis-eyebrow vis-eyebrow--dark" variants={fadeUp}>Engineering Principles</m.span>
          </Reveal>
          <Reveal className="vis-principle-list">
            {ENGINEERING_PRINCIPLES.map((principle, index) => (
              <m.h3 key={index} className="vis-principle-item" variants={fadeUp}>
                {principle}
              </m.h3>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — THE ROAD AHEAD
      ══════════════════════════════════════════════════════ */}
      <section className="vis-road">
        <div className="vis-constrain center-align">
          <Reveal>
            <m.span className="vis-eyebrow" variants={fadeUp}>The Road Ahead</m.span>
          </Reveal>
          
          <Reveal className="vis-road-sequence">
            {THE_ROAD_AHEAD.map((step, index) => (
              <React.Fragment key={step}>
                <m.div className="vis-road-step" variants={fadeUp}>
                  {step}
                </m.div>
                {index < THE_ROAD_AHEAD.length - 1 && (
                  <m.div className="vis-road-arrow" variants={fadeUp}>
                    ↓
                  </m.div>
                )}
              </React.Fragment>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — CLOSING STATEMENT
      ══════════════════════════════════════════════════════ */}
      <section className="vis-closing vis-dark">
        <div className="vis-constrain center-align">
          <Reveal>
            <m.h2 className="vis-closing-headline" variants={fadeUp}>
              The Future Is Human-Centered Intelligence.
            </m.h2>
            <m.p className="vis-closing-sub" variants={fadeUp}>
              The most important technology of the next decade will not be the most powerful. It will be the technology that helps people become more capable versions of themselves.
            </m.p>
            <m.div variants={fadeUp} style={{ marginTop: '80px' }}>
              <Link to="/connect" className="vis-cta-link">
                Connect <span>↗</span>
              </Link>
            </m.div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}

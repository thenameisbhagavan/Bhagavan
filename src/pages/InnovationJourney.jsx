import SEO from "../components/SEO";
import React, { useEffect, useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import '../styles/Innovation.css';

// ─── Core Artifacts ───────────────────────────────────────────────────────────
import vegacodeImg from '../assets/cert-vegacode.png';
import githubImg from '../assets/profile-github.png';
import leetcodeImg from '../assets/profile-leetcode.png';
import linkedInProfileImg from '../assets/link.png';
import trainingCert from '../assets/training.png';

// ─── Workshop Artifacts ───────────────────────────────────────────────────────
import aimlWorkshopImg from '../assets/cert-aiml-workshop.jpg';
import mobileWorkshopImg from '../assets/cert-mobile-workshop.jpg';
import webWorkshopImg from '../assets/cert-web-workshop.jpg';
import pythonWorkshopImg from '../assets/cert-ds-workshop.jpg';
import powerWorkshopImg from '../assets/cert-power-workshop.jpg';

// ─── Motion ───────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const imgReveal = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: EASE } },
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
export default function InnovationJourney() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 100]);

  // Curiosity Mindset Sequence
  const curiosityRef = useRef(null);
  const { scrollYProgress: curiosityProgress } = useScroll({
    target: curiosityRef,
    offset: ["start start", "end end"]
  });

  const cOpacity1 = useTransform(curiosityProgress, [0, 0.08, 0.16], [1, 1, 0]);
  const cOpacity2 = useTransform(curiosityProgress, [0.12, 0.22, 0.32], [0, 1, 0]);
  const cOpacity3 = useTransform(curiosityProgress, [0.28, 0.38, 0.48], [0, 1, 0]);
  const cOpacity4 = useTransform(curiosityProgress, [0.44, 0.54, 0.64], [0, 1, 0]);
  const cOpacity5 = useTransform(curiosityProgress, [0.60, 0.70, 0.80], [0, 1, 0]);
  const cOpacity6 = useTransform(curiosityProgress, [0.76, 0.86, 1], [0, 1, 1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Innovation Journey | TheNameIsBhagavan" description="Track the continuous innovation and learning journey of Bhagavan in AI." keywords="AI Engineer, Artificial Intelligence, Machine Learning, Portfolio, React, Full Stack" />

    <div className="inn-page">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <m.section className="inn-hero" style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}>
        <div className="inn-constrain center-align">
          <m.h1 
            className="inn-hero-headline"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: EASE }}
          >
            How does curiosity become innovation?
          </m.h1>
        </div>
      </m.section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — CURIOSITY MINDSET (Sticky Scroll)
      ══════════════════════════════════════════════════════ */}
      <section ref={curiosityRef} className="inn-mindset-container">
        <div className="inn-mindset-sticky">
          <m.h2 className="mindset-word" style={{ opacity: cOpacity1 }}>Question.</m.h2>
          <m.h2 className="mindset-word" style={{ opacity: cOpacity2 }}>Experiment.</m.h2>
          <m.h2 className="mindset-word" style={{ opacity: cOpacity3 }}>Build.</m.h2>
          <m.h2 className="mindset-word" style={{ opacity: cOpacity4 }}>Learn.</m.h2>
          <m.h2 className="mindset-word" style={{ opacity: cOpacity5 }}>Repeat.</m.h2>
          <m.h2 className="mindset-word mindset-climax" style={{ opacity: cOpacity6 }}>Innovation.</m.h2>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — INNOVATION UNDER PRESSURE (Hackathon)
      ══════════════════════════════════════════════════════ */}
      <section className="inn-pressure">
        <div className="inn-constrain">
          <div className="inn-pressure-story">
            <Reveal>
              <m.h2 className="pressure-headline" variants={fadeUp}>24 Hours.</m.h2>
              <m.h2 className="pressure-headline" variants={fadeUp}>One Team.</m.h2>
              <m.h2 className="pressure-headline" variants={fadeUp}>One Problem.</m.h2>
              <m.h2 className="pressure-headline climax-headline" variants={fadeUp}>Unlimited Possibilities.</m.h2>
            </Reveal>
            <m.p 
              className="pressure-editorial"
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
            >
              Innovation doesn't happen in isolation. It happens when constraints force creativity. A national-level hackathon became the ultimate proving ground for rapid architectural decision-making, collaborative engineering, and building resilient systems under extreme pressure.
            </m.p>
          </div>
          
          <m.div 
            className="inn-museum-artifact"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}
          >
            <img src={vegacodeImg} alt="VegaCode Hackathon Evidence" loading="lazy" />
            <div className="artifact-caption">VegaCode National Hackathon — Evidence of Execution</div>
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — BUILDING IN PUBLIC
      ══════════════════════════════════════════════════════ */}
      <section className="inn-public">
        <div className="inn-constrain">
          
          {/* GITHUB (Engineering Evidence) */}
          <div className="public-chapter">
            <m.h3 className="public-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Engineering Evidence.
            </m.h3>
            <m.p className="public-editorial" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Real engineering is open. It requires transparency, iteration, and exposing your codebase to scrutiny. GitHub is not a repository; it is the living history of how ideas are constructed into reality.
            </m.p>
            <m.div className="inn-museum-artifact massive-artifact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}>
              <img src={githubImg} alt="GitHub Profile" loading="lazy" />
            </m.div>
          </div>

          {/* LEETCODE (Analytical Discipline) */}
          <div className="public-chapter">
            <m.h3 className="public-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Analytical Discipline.
            </m.h3>
            <m.p className="public-editorial" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Building intelligent systems requires more than writing code. It demands a rigorous discipline of algorithmic thinking, performance optimization, and transforming complex logic into efficient systems.
            </m.p>
            <m.div className="inn-museum-artifact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}>
              <img src={leetcodeImg} alt="LeetCode Profile" loading="lazy" />
            </m.div>
          </div>

          {/* LINKEDIN (Professional Journey) */}
          <div className="public-chapter">
            <m.h3 className="public-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Professional Journey.
            </m.h3>
            <m.p className="public-editorial" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Building in public means sharing the journey. It bridges the gap between isolation and community, turning personal experimentation into collaborative professional growth.
            </m.p>
            <m.div className="inn-museum-artifact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}>
              <img src={linkedInProfileImg} alt="LinkedIn Profile" loading="lazy" />
            </m.div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — THE EVOLUTION OF LEARNING (Workshops)
      ══════════════════════════════════════════════════════ */}
      <section className="inn-learning">
        <div className="inn-constrain">
          <div className="learning-intro">
            <m.h2 className="learning-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Learning wasn't linear.
            </m.h2>
            <m.h2 className="learning-headline climax-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              It expanded.
            </m.h2>
          </div>

          <div className="learning-journey">
            {[
              { title: "Artificial Intelligence", img: aimlWorkshopImg },
              { title: "Software Engineering", img: pythonWorkshopImg },
              { title: "Web Systems", img: webWorkshopImg },
              { title: "Mobile Systems", img: mobileWorkshopImg },
              { title: "Automation", img: powerWorkshopImg }
            ].map((lab, i) => (
              <div className="learning-step" key={i}>
                <m.h3 className="learning-step-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                  {lab.title}
                </m.h3>
                <m.div className="inn-museum-artifact small-artifact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}>
                  <img src={lab.img} alt={lab.title} loading="lazy" />
                </m.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — PROFESSIONAL FOUNDATION
      ══════════════════════════════════════════════════════ */}
      <section className="inn-foundation">
        <div className="inn-constrain">
          <m.h2 className="foundation-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Where Learning Became Capability.
          </m.h2>
          
          <div className="foundation-topics">
            {[
              "Engineering Fundamentals",
              "Problem Solving",
              "Data Structures & Algorithms",
              "Artificial Intelligence",
              "Product Development",
              "Career Growth"
            ].map((topic, i) => (
              <m.div 
                key={i} 
                className="foundation-topic"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: EASE }}
              >
                {topic}
              </m.div>
            ))}
          </div>

          <m.div className="inn-museum-artifact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={imgReveal}>
            <img src={trainingCert} alt="Comprehensive Training Certification" loading="lazy" />
            <div className="artifact-caption">Comprehensive Professional Foundation</div>
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — INNOVATION OUTCOMES
      ══════════════════════════════════════════════════════ */}
      <section className="inn-outcomes">
        <div className="inn-constrain">
          <m.h2 className="outcomes-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            What Innovation Made Possible.
          </m.h2>

          <div className="outcomes-list">
            {[
              "AI Systems",
              "Product Engineering",
              "Platform Development",
              "Career Intelligence",
              "System Thinking",
              "Continuous Growth"
            ].map((outcome, i) => (
              <m.div 
                key={i} 
                className="outcome-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-150px" }}
                transition={{ duration: 1.2, ease: EASE }}
              >
                {outcome}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — ENGINEERING PRINCIPLES
      ══════════════════════════════════════════════════════ */}
      <section className="inn-principles">
        <div className="inn-constrain">
          {[
            "Technology should empower growth.",
            "Intelligence should be accessible.",
            "Complexity should feel simple.",
            "Products should create impact.",
            "Learning should never stop."
          ].map((principle, i) => (
            <m.div 
              key={i} 
              className="principle-item"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 1.2, ease: EASE }}
            >
              {principle}
            </m.div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 9 — CURRENT EXPLORATION (Roadmap)
      ══════════════════════════════════════════════════════ */}
      <section className="inn-roadmap">
        <div className="inn-constrain center-align">
          
          <div className="roadmap-path">
            {[
              "Today",
              "Career Intelligence",
              "Personal Intelligence",
              "Collaborative Intelligence",
              "Human Intelligence"
            ].map((node, i, arr) => (
              <React.Fragment key={i}>
                <m.div 
                  className={`roadmap-node ${i === 0 ? 'node-today' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1, ease: EASE }}
                >
                  {node}
                </m.div>
                {i < arr.length - 1 && (
                  <m.div className="roadmap-arrow" initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}>
                    ↓
                  </m.div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 10 — CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="inn-closing">
        <div className="inn-constrain">
          <div className="closing-sequence">
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
              Curiosity became experimentation.
            </m.div>
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
              Experimentation became engineering.
            </m.div>
            <m.div className="closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
              Engineering became innovation.
            </m.div>
            <m.div className="closing-finale" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE, delay: 0.3 }}>
              Innovation never finishes.<br/>It evolves.
            </m.div>
          </div>
        </div>
      </section>

    </div>
  
    </>
  );
}

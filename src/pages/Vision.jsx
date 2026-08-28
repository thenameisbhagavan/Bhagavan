import SEO from "../components/SEO";
import React, { useEffect } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import BrandSignature from "../components/BrandSignature";
import '../styles/Vision.css';

// ─── Motion ───────────────────────────────────────────────────────────────────
const appleEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: appleEase } },
};

const fadeUpSlow = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.8, ease: appleEase } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const PRINCIPLES = [
  {
    num: "01",
    title: "REDUCE FRICTION",
    desc: "Good software removes unnecessary cognitive and operational complexity."
  },
  {
    num: "02",
    title: "CREATE CLARITY",
    desc: "Intelligence should help people understand what matters."
  },
  {
    num: "03",
    title: "EXTEND CAPABILITY",
    desc: "Systems should allow people to accomplish things that were previously difficult."
  },
  {
    num: "04",
    title: "RESPECT HUMAN AGENCY",
    desc: "Automation should increase control, not quietly take it away."
  }
];

const TRANSFORMATION = [
  {
    label: "QUESTION",
    desc: "What problem actually matters?"
  },
  {
    label: "PRINCIPLE",
    desc: "What should the system optimize for?"
  },
  {
    label: "SYSTEM",
    desc: "How should intelligence, memory, reasoning, and software interact?"
  },
  {
    label: "PRODUCT",
    desc: "How should that complexity become understandable?"
  },
  {
    label: "IMPACT",
    desc: "What becomes possible for the person using it?"
  }
];

const PROOF = [
  { name: "CareerOS", desc: "Intelligence for better career decisions." },
  { name: "AuraOS", desc: "Memory and context for persistent assistance." },
  { name: "VERITAS", desc: "Reasoning and evidence for clearer information." },
  { name: "VoltDrive", desc: "Product experience built around interaction." }
];

const FUTURE_INDEX = [
  { num: "01", title: "INTELLIGENT SYSTEMS", desc: "Systems that can reason, remember, and use tools." },
  { num: "02", title: "HUMAN-CENTERED AI", desc: "Intelligence designed around human decisions and agency." },
  { num: "03", title: "PRODUCT INTELLIGENCE", desc: "AI capabilities embedded into useful product experiences." },
  { num: "04", title: "ENGINEERING DEPTH", desc: "Stronger architectures, infrastructure, evaluation, reliability, and deployment." },
  { num: "05", title: "HUMAN POTENTIAL", desc: "The ultimate objective behind the technology." }
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function Vision() {
  const { scrollYProgress } = useScroll();
  
  // Subtle scroll-driven color highlights for the Shift sequence
  const shift1 = useTransform(scrollYProgress, [0.15, 0.25], ["rgba(255,255,255,0.1)", "#fbfbfd"]);
  const shift2 = useTransform(scrollYProgress, [0.18, 0.28], ["rgba(255,255,255,0.1)", "#fbfbfd"]);
  const shift3 = useTransform(scrollYProgress, [0.21, 0.31], ["rgba(255,255,255,0.1)", "#fbfbfd"]);
  const shift4 = useTransform(scrollYProgress, [0.24, 0.34], ["rgba(255,255,255,0.1)", "#fbfbfd"]);
  const shift5 = useTransform(scrollYProgress, [0.27, 0.37], ["rgba(255,255,255,0.1)", "#fbfbfd"]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        description="Engineering vision and product philosophy by Bhagavan (TheNameIsBhagavan). Thoughts on AI systems, machine learning, and the future of software engineering." 
        keywords="Bhagavan Vision, AI Philosophy, Engineering Vision, Product Engineering, AI Systems, Data Science" 
      />

      <div className="vision-page">
        
        {/* ══════════════════════════════════════════════════════
            1. THE QUESTION (HERO)
        ══════════════════════════════════════════════════════ */}
        <section className="vision-hero" data-nav-theme="light">
          <div className="vision-bounds">
            <m.div className="vision-hero-eyebrow" initial="hidden" animate="visible" variants={fadeUp}>
              VISION / POINT OF VIEW / 2026
            </m.div>
            <m.h1 className="vision-hero-headline" initial="hidden" animate="visible" variants={fadeUpSlow}>
              What should technology make possible?
            </m.h1>
            <m.p className="vision-hero-sub" initial="hidden" animate="visible" variants={fadeUpSlow}>
              I build to explore that question.
            </m.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            2. THE BELIEF
        ══════════════════════════════════════════════════════ */}
        <section className="vision-belief" data-nav-theme="light">
          <div className="vision-bounds">
            <m.div className="vision-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              01 — THE BELIEF
            </m.div>

            <m.h2 className="vb-primary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              More intelligence is not enough.
            </m.h2>

            <m.h3 className="vb-secondary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              Technology becomes meaningful when intelligence becomes useful.
            </m.h3>

            <m.p className="vb-explanation" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              We have access to more information, computation, and automation than ever before.<br/><br/>
              The harder problem is turning that capability into clarity, context, and meaningful action.
            </m.p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            3. THE SHIFT
        ══════════════════════════════════════════════════════ */}
        <section className="vision-shift" data-nav-theme="light">
          <div className="vision-bounds">
            <div className="vision-label">THE PROGRESSION</div>
            
            <div className="vs-sequence">
              <m.div className="vs-word" style={{ color: shift1 }}>INFORMATION</m.div>
              <ArrowDown className="vs-arrow" style={{ margin: '0 auto' }} />
              
              <m.div className="vs-word" style={{ color: shift2 }}>UNDERSTANDING</m.div>
              <ArrowDown className="vs-arrow" style={{ margin: '0 auto' }} />
              
              <m.div className="vs-word" style={{ color: shift3 }}>INTELLIGENCE</m.div>
              <ArrowDown className="vs-arrow" style={{ margin: '0 auto' }} />
              
              <m.div className="vs-word" style={{ color: shift4 }}>CAPABILITY</m.div>
              <ArrowDown className="vs-arrow" style={{ margin: '0 auto' }} />
              
              <m.div className="vs-word" style={{ color: shift5 }}>HUMAN POTENTIAL</m.div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            4. WHAT I BELIEVE SOFTWARE SHOULD DO
        ══════════════════════════════════════════════════════ */}
        <section className="vision-principles" data-nav-theme="light">
          <div className="vision-bounds">
            <m.h2 className="vp-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              What software should do.
            </m.h2>

            <div className="vp-grid">
              {PRINCIPLES.map((p, i) => (
                <m.div 
                  key={i} 
                  className="vp-item"
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-100px" }} 
                  variants={fadeUp}
                >
                  <div className="vp-num">{p.num}</div>
                  <h3 className="vp-title">{p.title}</h3>
                  <p className="vp-desc">{p.desc}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            5. THE HUMAN SIDE
        ══════════════════════════════════════════════════════ */}
        <section className="vision-human" data-nav-theme="light">
          <div className="vision-bounds">
            <m.h2 className="vh-primary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              Technology should feel human.
            </m.h2>

            <div className="vh-list">
              <m.p className="vh-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                Complexity should disappear into the experience.
              </m.p>
              <m.p className="vh-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                Intelligence should remain understandable.
              </m.p>
              <m.p className="vh-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                Power should remain useful.
              </m.p>
              <m.p className="vh-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                People should remain in control.
              </m.p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            6. FROM BELIEF TO BUILDING
        ══════════════════════════════════════════════════════ */}
        <section className="vision-building" data-nav-theme="light">
          <div className="vision-bounds">
            <m.div className="vision-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              ENGINEERING METHODOLOGY
            </m.div>

            <div className="vb-transform">
              {TRANSFORMATION.map((step, i) => (
                <React.Fragment key={i}>
                  <m.div 
                    className="vbt-step"
                    initial="hidden" 
                    whileInView="visible" 
                    viewport={{ once: true, margin: "-100px" }} 
                    variants={fadeUp}
                  >
                    <div className="vbt-label">{step.label}</div>
                    <div className="vbt-desc">{step.desc}</div>
                  </m.div>
                  {i < TRANSFORMATION.length - 1 && (
                    <m.div 
                      style={{ display: 'flex', alignItems: 'center' }}
                      initial="hidden" 
                      whileInView="visible" 
                      viewport={{ once: true, margin: "-100px" }} 
                      variants={fadeUp}
                    >
                      <ArrowRight size={16} color="#a1a1a6" className="vbt-arrow-desktop" />
                    </m.div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            7. PROOF WITHOUT SHOWCASING
        ══════════════════════════════════════════════════════ */}
        <section className="vision-proof" data-nav-theme="light">
          <div className="vision-bounds">
            <m.h2 className="vpr-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              Philosophy in practice.
            </m.h2>

            <div className="vpr-list">
              {PROOF.map((item, i) => (
                <m.div 
                  key={i} 
                  className="vpr-item"
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-100px" }} 
                  variants={fadeUp}
                >
                  <div className="vpr-name">{item.name}</div>
                  <div className="vpr-desc">{item.desc}</div>
                </m.div>
              ))}
            </div>

            <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <Link to="/work" className="vpr-link">
                See the systems <ArrowRight size={16} />
              </Link>
            </m.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            8. THE LONG VIEW & 9. WHAT I AM BUILDING TOWARD
        ══════════════════════════════════════════════════════ */}
        <section className="vision-future" data-nav-theme="light">
          <div className="vision-bounds">
            <m.div className="vision-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              THE LONG VIEW
            </m.div>

            <m.h2 className="vf-primary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              I am not building toward more software.
            </m.h2>

            <m.h3 className="vf-reveal" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              I am building toward better systems.
            </m.h3>

            <div className="vf-list">
              <m.div className="vf-list-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                Systems that understand context.
              </m.div>
              <m.div className="vf-list-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                Systems that reason before acting.
              </m.div>
              <m.div className="vf-list-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                Systems that remember.
              </m.div>
              <m.div className="vf-list-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                Systems that adapt.
              </m.div>
              <m.div className="vf-list-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                Systems that make complexity easier to navigate.
              </m.div>
            </div>

            <div className="vf-index">
              {FUTURE_INDEX.map((item, i) => (
                <m.div 
                  key={i} 
                  className="vfi-item"
                  initial="hidden" 
                  whileInView="visible" 
                  viewport={{ once: true, margin: "-100px" }} 
                  variants={fadeUp}
                >
                  <div className="vfi-num">{item.num}</div>
                  <div className="vfi-title">{item.title}</div>
                  <div className="vfi-desc">{item.desc}</div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            10. FINAL THESIS
        ══════════════════════════════════════════════════════ */}
        <section className="vision-closing" data-nav-theme="light">
          <div className="vision-bounds">
            <m.div className="vision-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              THE VISION / CONTINUING
            </m.div>

            <m.h2 className="vc-primary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              Technology should expand human potential.
            </m.h2>

            <m.h3 className="vc-secondary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              Not replace it.
            </m.h3>

            <m.p className="vc-final" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              The future I want to build is one where intelligence makes people more capable, not less.
            </m.p>

            <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <Link to="/work" className="vc-cta">
                Build with purpose. <ArrowRight size={16} />
              </Link>
            </m.div>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

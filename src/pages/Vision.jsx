import SEO from "../components/SEO";
import React, { useEffect } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Vision.css';

// ─── Assets ───────────────────────────────────────────────────────────────────
import careerOSHero from '../assets/careeros-new.jpg'; // Using the polished one from Work page

// ─── Motion ───────────────────────────────────────────────────────────────────
const EASE = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: EASE } },
};

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.2 } },
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
export default function Vision() {
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 800], [0, 100]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO title="Engineering Vision | Bhagavan AI Engineer Portfolio" description="Explore Bhagavan's engineering vision for the future of Artificial Intelligence, product development, human potential, and technology systems architecture." keywords="AI Engineer, Artificial Intelligence, Machine Learning, Portfolio, React, Full Stack" />

    <div className="vision-page">
      
      {/* ══════════════════════════════════════════════════════
          SECTION 1 — HERO
      ══════════════════════════════════════════════════════ */}
      <m.section className="vis-hero" style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}>
        <div className="vis-constrain center-align">
          <m.h1 className="vis-hero-headline" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5, ease: EASE }}>
            Engineering<br/>Human Potential.
          </m.h1>
          <m.p className="vis-hero-sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5, delay: 0.5, ease: EASE }}>
            Technology is not the goal.
          </m.p>
        </div>
      </m.section>

      {/* ══════════════════════════════════════════════════════
          SECTION 2 — THE OBSERVATION
      ══════════════════════════════════════════════════════ */}
      <section className="vis-observation">
        <div className="vis-constrain center-align">
          <div className="vis-editorial-sequence">
            <m.h2 className="vis-statement" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              We have more information<br/>than ever before.
            </m.h2>
            <m.h2 className="vis-statement text-muted" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Understanding remains<br/>the real challenge.
            </m.h2>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 3 — THE OPPORTUNITY
      ══════════════════════════════════════════════════════ */}
      <section className="vis-opportunity">
        <div className="vis-constrain center-align">
          <Reveal className="vis-editorial-sequence">
            <m.h2 className="vis-statement-massive" variants={fadeUp}>Intelligence</m.h2>
            <m.h2 className="vis-statement-massive" variants={fadeUp}>should create</m.h2>
            <m.h2 className="vis-statement-massive" variants={fadeUp}>understanding.</m.h2>
            <m.h2 className="vis-statement-massive text-muted" variants={fadeUp}>Not</m.h2>
            <m.h2 className="vis-statement-massive text-muted" variants={fadeUp}>overwhelm.</m.h2>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 4 — WHY I BUILD
      ══════════════════════════════════════════════════════ */}
      <section className="vis-why">
        <div className="vis-constrain center-align">
          <m.div className="vis-why-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            People face critical decisions every day.<br/>
            The gap is rarely a lack of data.<br/>
            The gap is clarity.<br/><br/>
            Intelligent systems exist to bridge that gap.
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 5 — CAREEROS PROOF
      ══════════════════════════════════════════════════════ */}
      <section className="vis-proof">
        <div className="vis-constrain">
          <m.div className="vis-proof-image-wrapper" initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.5, ease: EASE }}>
            <img src={careerOSHero} alt="CareerOS Interface" className="vis-proof-img" loading="lazy" />
          </m.div>
          <m.div className="vis-proof-caption center-align" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 1.2, ease: EASE, delay: 0.2 }}>
            Applied philosophy becomes product capability.
          </m.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 6 — ENGINEERING PRINCIPLES
      ══════════════════════════════════════════════════════ */}
      <section className="vis-principles">
        <div className="vis-constrain center-align">
          
          {/* Screen 1 */}
          <div className="principle-screen">
            <m.h2 className="vis-principle" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Technology should feel human.
            </m.h2>
            <m.h2 className="vis-principle" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Complexity should feel simple.
            </m.h2>
          </div>

          {/* Screen 2 */}
          <div className="principle-screen">
            <m.h2 className="vis-principle" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Intelligence should be useful.
            </m.h2>
            <m.h2 className="vis-principle" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Products should create impact.
            </m.h2>
          </div>

          {/* Screen 3 */}
          <div className="principle-screen">
            <m.h2 className="vis-principle principle-climax" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Potential should have no limits.
            </m.h2>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 7 — THE ROAD AHEAD
      ══════════════════════════════════════════════════════ */}
      <section className="vis-road">
        <div className="vis-constrain center-align">
          <div className="vis-evolution-flow">
            {[
              "Curiosity",
              "Learning",
              "Engineering",
              "Products",
              "People",
              "Human Potential"
            ].map((node, i, arr) => (
              <React.Fragment key={i}>
                <m.div 
                  className="vis-evolution-node"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: EASE }}
                >
                  {node}
                </m.div>
                {i < arr.length - 1 && (
                  <m.div className="vis-evolution-arrow" initial={{ opacity: 0 }} whileInView={{ opacity: 0.3 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1 }}>
                    ↓
                  </m.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          SECTION 8 — CLOSING
      ══════════════════════════════════════════════════════ */}
      <section className="vis-closing">
        <div className="vis-constrain center-align">
          <div className="vis-closing-sequence">
            
            <m.div className="vis-closing-thought" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE }}>
              Technology should expand<br/>human potential.
            </m.div>
            
            <m.div className="vis-closing-thought text-muted" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE }}>
              Not replace it.
            </m.div>

            <m.div className="vis-closing-finale" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 2, ease: EASE }}>
              The future belongs to engineers<br/>who build intelligence<br/>with purpose.
            </m.div>

            <m.div className="vis-closing-cta" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 2, ease: EASE, delay: 0.5 }}>
              <Link to="/connect" className="vis-connect-link">
                Connect ↗
              </Link>
            </m.div>

          </div>
        </div>
      </section>

    </div>
  
    </>
  );
}

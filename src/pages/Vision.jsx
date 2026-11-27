import SEO from "../components/SEO";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { m as Motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Compass, Cpu, ShieldCheck, Layers } from "lucide-react";
import BrandSignature from "../components/BrandSignature";
import MagneticLink from "../components/motion/MagneticLink";
import "../styles/Vision.css";

const PROGRESSION_STAGES = [
  {
    id: "01",
    label: "INFORMATION",
    title: "Structured Signals Before Models",
    desc: "Raw telemetry, clinical records, and academic archives remain unusable until cleanly normalized, indexed, and stripped of noise.",
    system: "DHEERGAYUSH Lexical Index · 70 Verified Records",
  },
  {
    id: "02",
    label: "UNDERSTANDING",
    title: "Domain Context Over Raw Tokens",
    desc: "Systems only reason accurately when memory, role expectations, or patient phrasing persist across interactions rather than resetting per turn.",
    system: "AuraOS Persistent Context Graph · CareerOS",
  },
  {
    id: "03",
    label: "INTELLIGENCE",
    title: "Deterministic Reasoning + Fallback Safety",
    desc: "LLMs become trustworthy inside engineering boundaries: fallback routing, SHA-256 cached synthesis, and explainable feature tracing.",
    system: "VERITAS Fact Tracing · GPT-4o-mini + Gemini Bridge",
  },
  {
    id: "04",
    label: "CAPABILITY",
    title: "Software That Unlocks Execution",
    desc: "Intelligence stops being an impressive demo only when it accelerates real work—defending code in viva or screening candidates reliably.",
    system: "DV Labs Capstone Platform · Assessment Canvas",
  },
  {
    id: "05",
    label: "HUMAN POTENTIAL",
    title: "Clarity That Expands Human Agency",
    desc: "The final metric of engineering is what students, doctors, or engineers accomplish faster and more confidently than before.",
    system: "THE NAME IS BHAGAVAN · Core Engineering Standard",
  },
];

const PRINCIPLES = [
  {
    num: "01",
    icon: Layers,
    title: "REDUCE FRICTION",
    desc: "Good software eliminates unnecessary operational and cognitive complexity instead of surfacing raw mechanics.",
  },
  {
    num: "02",
    icon: Compass,
    title: "CREATE CLARITY",
    desc: "Intelligence should trace its evidence clearly so people understand why an output occurred.",
  },
  {
    num: "03",
    icon: Cpu,
    title: "EXTEND CAPABILITY",
    desc: "Systems should empower builders, clinicians, and learners to execute workflows once out of reach.",
  },
  {
    num: "04",
    icon: ShieldCheck,
    title: "RESPECT AGENCY",
    desc: "Automation should amplify judgment and human control rather than concealing decisions inside black boxes.",
  },
];

const TRANSFORMATION = [
  { num: "01", label: "QUESTION", desc: "Isolate what problem genuinely constrains the person using the tool." },
  { num: "02", label: "PRINCIPLE", desc: "Define deterministic baselines for accuracy, latency, and safety first." },
  { num: "03", label: "SYSTEM", desc: "Connect API gateways, storage engines, and AI inference cleanly." },
  { num: "04", label: "PRODUCT", desc: "Craft tactile UI motion so system power feels effortless on any screen." },
  { num: "05", label: "IMPACT", desc: "Measure real adoption in classrooms, clinics, and production software." },
];

const PROOF = [
  { name: "DV Labs", tag: "Capstone & Viva", desc: "Six-stage bilingual guidance & 600-question proctored assessment delivery." },
  { name: "DHEERGAYUSH", tag: "Voice & Clinical AI", desc: "Telugu/English/Tanglish 2D avatar bridging clinical communication barriers." },
  { name: "CareerOS", tag: "Career Intelligence", desc: "Unified resume, GitHub, and skill-gap mapping for engineering graduates." },
  { name: "VERITAS", tag: "Explainable NLP", desc: "Transparent claim extraction and linguistic verification telemetry." },
  { name: "VoltDrive", tag: "3D WebGL UI", desc: "60 FPS tactile automotive configuration balancing geometry and polish." },
];

const FUTURE_INDEX = [
  { num: "01", title: "INTELLIGENT SYSTEMS", desc: "Hybrid architectures uniting LLMs with deterministic scoring and tool execution." },
  { num: "02", title: "BILINGUAL ACCESSIBILITY", desc: "Voice and vernacular clinical/educational interfaces accessible beyond English-only UI." },
  { num: "03", title: "PRODUCT CRAFT", desc: "FastAPI + Next.js ecosystems engineered with crisp visual interaction on any aspect ratio." },
  { num: "04", title: "TECHNICAL RIGOR", desc: "Production fault tolerance, server authority, clean caching, and resilient deployments." },
];

export default function Vision() {
  const heroRef = useRef(null);
  const shiftRef = useRef(null);
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [activePipelineIdx, setActivePipelineIdx] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSpotlight = useCallback((ref, varX, varY) => (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty(varX, `${e.clientX - rect.left}px`);
    ref.current.style.setProperty(varY, `${e.clientY - rect.top}px`);
  }, []);

  const activeStage = PROGRESSION_STAGES[activeStageIdx];
  const activeStep = TRANSFORMATION[activePipelineIdx];

  return (
    <>
      <SEO
        title="Vision | TheNameIsBhagavan"
        description="Engineering vision and product philosophy by Bhagavan (TheNameIsBhagavan). Thoughts on AI systems, machine learning, and human-centered software architecture."
        keywords="Bhagavan Vision, AI Philosophy, Engineering Vision, Product Engineering, AI Systems"
      />

      <div className="vision-page">
        {/* ============================================================
            01 — APPLE PEARL KEYNOTE HERO
            ============================================================ */}
        <section
          ref={heroRef}
          onMouseMove={handleSpotlight(heroRef, "--vmx", "--vmy")}
          className="vision-hero"
          data-nav-theme="light"
        >
          <div className="vs-hero-spotlight" aria-hidden="true" />
          <div className="vision-bounds">
            <div className="vision-hero-eyebrow">
              <Sparkles size={13} color="#0071e3" />
              <span>ENGINEERING THESIS &middot; THE NAME IS BHAGAVAN</span>
            </div>

            <Motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="vision-hero-headline"
            >
              How I think about{" "}
              <span className="vs-hl-muted">what I&apos;m building.</span>
            </Motion.h1>

            <p className="vision-hero-sub">
              More intelligence is never automatically useful. Useful software turns raw model capability into clarity, control, and everyday utility.
            </p>

            <div className="vs-belief-pills">
              <div className="vs-belief-card">
                <span className="vs-bc-num">THESIS 01</span>
                <p className="vs-bc-text">Working software built for real people teaches faster than benchmark slides.</p>
              </div>
              <div className="vs-belief-card">
                <span className="vs-bc-num">THESIS 02</span>
                <p className="vs-bc-text">Clear architecture, resilient fallbacks, and accessible UI matter equally.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            02 — DARK TITANIUM INTERACTIVE PROGRESSION CONSOLE
            ============================================================ */}
        <section
          ref={shiftRef}
          onMouseMove={handleSpotlight(shiftRef, "--smx", "--smy")}
          className="vision-shift"
          data-nav-theme="dark"
        >
          <div className="vs-shift-spotlight" aria-hidden="true" />
          <div className="vision-bounds vs-shift-inner">
            <div className="vs-shift-header">
              <span className="vs-titanium-eyebrow">01 &middot; THE PROGRESSION</span>
              <h2 className="vs-shift-title">From raw signal to human capability.</h2>
              <p className="vs-shift-sub">
                Select any architectural layer below to inspect how intelligence compounds into real capability.
              </p>
            </div>

            <div className="vs-console-grid">
              <div className="vs-console-rail" role="tablist" aria-label="Progression Stages">
                {PROGRESSION_STAGES.map((st, idx) => {
                  const isActive = activeStageIdx === idx;
                  return (
                    <button
                      key={st.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveStageIdx(idx)}
                      className={`vs-stage-btn ${isActive ? "active" : ""}`}
                    >
                      <span className="vs-sb-num">{st.id}</span>
                      <span className="vs-sb-word">{st.label}</span>
                      <ArrowRight size={14} className="vs-sb-arrow" />
                    </button>
                  );
                })}
              </div>

              <div className="vs-console-display">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={activeStage.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="vs-display-card"
                  >
                    <div className="vs-dc-top">
                      <span className="vs-dc-badge">STAGE {activeStage.id} / 05</span>
                      <span className="vs-dc-sys">{activeStage.system}</span>
                    </div>
                    <h3 className="vs-dc-word">{activeStage.label}</h3>
                    <h4 className="vs-dc-title">{activeStage.title}</h4>
                    <p className="vs-dc-desc">{activeStage.desc}</p>
                  </Motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            03 — PRINCIPLES BENTO GRID
            ============================================================ */}
        <section className="vision-principles" data-nav-theme="light">
          <div className="vision-bounds">
            <span className="vision-label">02 &middot; ENGINEERING PRINCIPLES</span>
            <h2 className="vp-headline">What software should do.</h2>

            <div className="vp-grid">
              {PRINCIPLES.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.num} className="vp-item">
                    <div className="vp-head">
                      <span className="vp-num">{p.num}</span>
                      <div className="vp-icon-badge">
                        <Icon size={18} />
                      </div>
                    </div>
                    <h3 className="vp-title">{p.title}</h3>
                    <p className="vp-desc">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================
            04 — INTERACTIVE METHODOLOGY PIPELINE
            ============================================================ */}
        <section className="vision-building" data-nav-theme="light">
          <div className="vision-bounds">
            <span className="vision-label">03 &middot; METHODOLOGY EXPLORER</span>
            <h2 className="vp-headline">From belief to production system.</h2>

            <div className="vs-pipe-tabs" role="tablist" aria-label="Engineering Methodology">
              {TRANSFORMATION.map((step, idx) => (
                <button
                  key={step.label}
                  type="button"
                  role="tab"
                  aria-selected={activePipelineIdx === idx}
                  onClick={() => setActivePipelineIdx(idx)}
                  className={`vs-pipe-btn ${activePipelineIdx === idx ? "active" : ""}`}
                >
                  <span className="vs-pb-num">{step.num}</span>
                  <span>{step.label}</span>
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <Motion.div
                key={activeStep.num}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25 }}
                className="vs-pipe-stage"
              >
                <span className="vbt-label">PHASE {activeStep.num} &middot; {activeStep.label}</span>
                <p className="vs-pipe-desc">{activeStep.desc}</p>
              </Motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ============================================================
            05 — PHILOSOPHY IN PRACTICE (BENTO PROOF)
            ============================================================ */}
        <section className="vision-proof" data-nav-theme="light">
          <div className="vision-bounds">
            <span className="vision-label">04 &middot; PHILOSOPHY IN PRACTICE</span>
            <h2 className="vpr-headline">Systems shaped by this thesis.</h2>

            <div className="vpr-list">
              {PROOF.map((item) => (
                <div key={item.name} className="vpr-item">
                  <div className="vpr-left">
                    <span className="vpr-tag">{item.tag}</span>
                    <div className="vpr-name">{item.name}</div>
                  </div>
                  <div className="vpr-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            06 — DARK TITANIUM LONG VIEW
            ============================================================ */}
        <section className="vision-future" data-nav-theme="dark">
          <div className="vision-bounds">
            <span className="vs-titanium-eyebrow">05 &middot; THE LONG VIEW</span>
            <h2 className="vf-primary">I&apos;m not trying to build more apps.</h2>
            <h3 className="vf-reveal">I&apos;m trying to engineer enduring systems.</h3>

            <div className="vf-index">
              {FUTURE_INDEX.map((item) => (
                <div key={item.num} className="vfi-item">
                  <div className="vfi-num">{item.num}</div>
                  <div className="vfi-title">{item.title}</div>
                  <div className="vfi-desc">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            07 — FINAL THESIS CLOSING
            ============================================================ */}
        <section className="vision-closing" data-nav-theme="light">
          <div className="vision-bounds">
            <span className="vision-label">THE VISION &middot; CONTINUING</span>
            <h2 className="vc-primary">
              Technology should unlock capability people didn&apos;t have before.
            </h2>
            <p className="vc-final">That standard shapes everything I build and teach next.</p>
            <MagneticLink strength={0.2}>
              <Link to="/work" className="vc-cta">
                <span>See What I&apos;m Building</span>
                <ArrowRight size={15} />
              </Link>
            </MagneticLink>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

import React, { useEffect, useRef, useState } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import SEO from "../components/SEO";
import "../styles/Work.css";

// ─── Images ───────────────────────────────────────────────────────────────────
import careerOSImg from "../assets/careeros-new.jpg";
import chatImg from "../assets/aurabot-new.png";
import heartImg from "../assets/heart-new.png";
import leaveImg from "../assets/leave.jpg";
import fakeImg from "../assets/fake.jpg";

// ─── Motion ───────────────────────────────────────────────────────────────────
const appleEase = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: appleEase } },
};

const fadeUpStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ─── Helper: Animated Counter ─────────────────────────────────────────────────
function AnimatedCounter({ from = 0, to, duration = 2, suffix = "", delay = 0 }) {
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView) {
      let start = null;
      let reqId = null;

      const step = (timestamp) => {
        if (!start) start = timestamp;
        const progress = Math.min((timestamp - start) / (duration * 1000), 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(from + (to - from) * easeProgress);

        if (nodeRef.current) {
          nodeRef.current.textContent = current + (progress === 1 ? suffix : "");
        }

        if (progress < 1) {
          reqId = requestAnimationFrame(step);
        }
      };

      const timeoutId = setTimeout(() => {
        reqId = requestAnimationFrame(step);
      }, delay * 1000);

      return () => {
        clearTimeout(timeoutId);
        if (reqId) cancelAnimationFrame(reqId);
      };
    }
  }, [from, to, duration, inView, delay, suffix]);

  return <span ref={nodeRef}>{from}</span>;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const FLAGSHIP_CAREEROS = {
  theme: "careeros",
  name: "CareerOS",
  eyebrow: "The Career Intelligence Operating System.",
  problem: "Career progression is currently determined by fragmented data, guesswork, and opaque algorithms.",
  vision: "To create an intelligence platform that understands your exact career trajectory and reveals precisely what to do next.",
  productImg: careerOSImg,
  howItWorks: [
    { step: "01", title: "Discover", desc: "Captures academic and professional data into a unified profile." },
    { step: "02", title: "Evaluate", desc: "Analyzes skills against real-time market demands." },
    { step: "03", title: "Reveal", desc: "Generates tailored career opportunities and skill gaps." },
    { step: "04", title: "Accelerate", desc: "Provides AI-powered roadmaps for immediate execution." }
  ],
  technologyDesc: "A full-stack intelligence engine built to process complex career data into actionable paths.",
  impact: "Transforms fragmented career decisions into measurable, continuous growth.",
  github: "https://github.com/thenameisbhagavan/careeros"
};

const SECONDARY_PROJECTS = [
  {
    layoutVariant: "centered",
    theme: "auraos",
    name: "AuraOS",
    eyebrow: "Personal Intelligence OS.",
    problem: "Traditional chatbots respond and immediately forget, destroying context and continuity.",
    vision: "To build a conversational intelligence layer that learns, remembers, and grows alongside you.",
    productImg: chatImg,
    howItWorks: [
      { step: "01", title: "Memory", desc: "Creates a persistent context window across all sessions." },
      { step: "02", title: "Reasoning", desc: "Connects separate concepts into a unified knowledge graph." },
      { step: "03", title: "Retrieval", desc: "Pulls exact historical facts instantly when required." }
    ],
    technologyDesc: "Powered by vector databases, RAG architectures, and custom short/long-term memory routers.",
    impact: "Demonstrated true conversational persistence across simulated multi-day interactions.",
    github: "https://github.com/thenameisbhagavan/auraos",
    preTransitionText: "Understanding careers led to understanding people."
  },
  {
    layoutVariant: "split",
    theme: "veritas",
    name: "VERITAS",
    eyebrow: "Explainable Intelligence Platform.",
    problem: "AI generates plausible conclusions without exposing the evidence or reasoning behind them.",
    vision: "To force AI systems to mathematically prove their conclusions and expose structural bias.",
    productImg: fakeImg,
    howItWorks: [
      { step: "01", title: "Extract", desc: "Pulls factual claims from unstructured text." },
      { step: "02", title: "Analyze", desc: "Scores claims against known credibility baselines." },
      { step: "03", title: "Trace", desc: "Maps the exact path from raw text to final judgment." }
    ],
    technologyDesc: "A deterministic NLP pipeline built over FastAPI, React, and strict credibility schemas.",
    impact: "Successfully validated complex intelligence reports with deterministic traceability.",
    github: "https://github.com/thenameisbhagavan/News-detector",
    preTransitionText: "Understanding people demanded trustworthy intelligence."
  },
  {
    layoutVariant: "compact-left",
    theme: "health",
    name: "Health Prediction",
    eyebrow: "Machine Learning Analytics.",
    problem: "Medical data is dense, complex, and inaccessible to patients trying to understand their risks.",
    vision: "To transform raw clinical datasets into clear, actionable predictive health insights.",
    productImg: heartImg,
    howItWorks: [
      { step: "01", title: "Ingest", desc: "Processes massive, unstructured clinical datasets." },
      { step: "02", title: "Predict", desc: "Applies trained models to isolate cardiovascular risks." },
      { step: "03", title: "Inform", desc: "Visualizes the outcome in clear, accessible terminology." }
    ],
    technologyDesc: "Engineered with Python, Scikit-learn, and Flask, utilizing optimized predictive algorithms.",
    impact: "Achieved high-accuracy diagnostic predictions across established cardiovascular datasets.",
    github: "https://github.com/thenameisbhagavan/Heart-Disease-Prediction",
    preTransitionText: "Trust also matters in everyday systems."
  },
  {
    layoutVariant: "compact-right",
    theme: "enterprise",
    name: "Smart Leave",
    eyebrow: "Enterprise Automation.",
    problem: "Administrative workflows are bogged down by manual approvals and fragmented communication.",
    vision: "To fully automate enterprise operations, ensuring zero delays in administrative execution.",
    productImg: leaveImg,
    howItWorks: [
      { step: "01", title: "Request", desc: "Employee initiates a digital workflow instantaneously." },
      { step: "02", title: "Route", desc: "The system intelligently directs the request to relevant managers." },
      { step: "03", title: "Resolve", desc: "Execution and record-keeping happen automatically." }
    ],
    technologyDesc: "Built entirely within the Microsoft Power Platform ecosystem, utilizing Power Automate.",
    impact: "Transformed multi-day approval chains into near-instantaneous digital resolutions.",
    github: null,
    preTransitionText: null // Flows naturally from the previous
  }
];

export const FLAGSHIP_PROJECTS = [
  { name: "CareerOS", eyebrow: "Flagship Project", desc: "The intelligence layer for your career trajectory.", img: careerOSImg, link: "/work" },
  { name: "AuraOS", eyebrow: "Personal Intelligence OS", desc: "Conversational intelligence that understands context.", img: chatImg, link: "/work" },
  { name: "VERITAS", eyebrow: "Explainable Intelligence Platform", desc: "Data validation and truth extraction engine.", img: fakeImg, link: "/work" }
];

// ─── Components ───────────────────────────────────────────────────────────────

function NarrativeTransition({ text }) {
  if (!text) return null;
  return (
    <section className="narrative-transition">
      <div className="work-bounds">
        <m.h2 className="transition-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          {text}
        </m.h2>
      </div>
    </section>
  );
}

function CareerOSKeynote({ project }) {
  return (
    <section className="careeros-keynote theme-careeros">
      <div className="work-bounds">
        <m.h3 className="careeros-text-large" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          {project.problem}
        </m.h3>

        <m.h3 className="careeros-text-large" style={{ color: "#6e6e73" }} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          {project.vision}
        </m.h3>

        <div className="careeros-hero-block">
          <m.div className="careeros-image-wrapper" initial={{ opacity: 0, scale: 0.95, y: 50 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.2, ease: appleEase }} viewport={{ once: true, margin: "-100px" }}>
            <img src={project.productImg} alt={project.name} className="careeros-image" />
          </m.div>
        </div>

        <div className="product-block block-works">
          <m.p className="product-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>The Experience</m.p>
          <div className="product-timeline">
            {project.howItWorks.map((step, i) => (
              <m.div key={i} className="timeline-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                <span className="step-num">{step.step}</span>
                <div className="step-content">
                  <h5 className="step-title">{step.title}</h5>
                  <p className="step-desc">{step.desc}</p>
                </div>
              </m.div>
            ))}
          </div>
        </div>

        <div className="product-block block-tech-impact">
          <div className="impact-col">
            <m.p className="product-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>Real Impact</m.p>
            <m.p className="product-impact-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>{project.impact}</m.p>
          </div>
          <div className="tech-col">
            <m.p className="product-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>Engineering Decisions</m.p>
            <m.p className="product-tech-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>{project.technologyDesc}</m.p>
          </div>
        </div>

        {project.github && (
          <div className="product-block block-explore">
            <m.a href={project.github} target="_blank" rel="noopener noreferrer" className="product-explore-cta" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Explore {project.name} <span className="cta-arrow">→</span>
            </m.a>
          </div>
        )}
      </div>
    </section>
  );
}

function ProductSection({ project }) {
  return (
    <section className={`product-chapter theme-${project.theme} layout-${project.layoutVariant}`}>
      <div className="work-bounds">
        
        {project.layoutVariant === 'split' || project.layoutVariant.includes('compact') ? (
          <>
            <m.div className="product-hero-wrapper" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: appleEase }} viewport={{ once: true, margin: "-100px" }}>
              <img src={project.productImg} alt={project.name} className="product-hero-img" />
            </m.div>
            <div className="product-content">
              <m.p className="product-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>The Problem</m.p>
              <m.h3 className="product-problem-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>{project.problem}</m.h3>
              
              <div style={{ marginTop: '5vh' }}>
                <m.p className="product-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>The Vision</m.p>
                <m.h4 className="product-vision-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>{project.vision}</m.h4>
              </div>

              <div className="product-timeline">
                {project.howItWorks.map((step, i) => (
                  <m.div key={i} className="timeline-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                    <span className="step-num">{step.step}</span>
                    <div className="step-content">
                      <h5 className="step-title">{step.title}</h5>
                      <p className="step-desc">{step.desc}</p>
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="product-block block-problem">
              <m.p className="product-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>The Problem</m.p>
              <m.h3 className="product-problem-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>{project.problem}</m.h3>
            </div>
            <div className="product-block block-vision">
              <m.p className="product-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>The Vision</m.p>
              <m.h4 className="product-vision-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>{project.vision}</m.h4>
            </div>
            <div className="product-block block-hero">
              <m.div className="product-hero-wrapper" initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: appleEase }} viewport={{ once: true, margin: "-100px" }}>
                <img src={project.productImg} alt={project.name} className="product-hero-img" />
              </m.div>
            </div>
            <div className="product-block block-works">
              <m.p className="product-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>The Experience</m.p>
              <div className="product-timeline">
                {project.howItWorks.map((step, i) => (
                  <m.div key={i} className="timeline-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
                    <span className="step-num">{step.step}</span>
                    <div className="step-content">
                      <h5 className="step-title">{step.title}</h5>
                      <p className="step-desc">{step.desc}</p>
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Tech & Impact is at the end for all layouts */}
        <div className={`product-block tech-impact-block ${project.layoutVariant === 'centered' ? 'block-tech-impact' : ''}`}>
          <div>
            <m.p className="product-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>The Outcome</m.p>
            <m.p className="product-impact-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>{project.impact}</m.p>
          </div>
          <div>
            <m.p className="product-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>Engineering</m.p>
            <m.p className="product-tech-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>{project.technologyDesc}</m.p>
          </div>
        </div>

        {project.github && (
          <m.a href={project.github} target="_blank" rel="noopener noreferrer" className="product-explore-cta" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
            Explore {project.name} <span className="cta-arrow">→</span>
          </m.a>
        )}
      </div>
    </section>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────

export default function Work() {
  // Hero Parallax (Dominant Animation: Parallax)
  const { scrollY } = useScroll();
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 100]);

  // Challenge Sequence (Dominant Animation: Fade cross-fading)
  const challengeRef = useRef(null);
  const { scrollYProgress: challengeProgress } = useScroll({
    target: challengeRef,
    offset: ["start start", "end end"]
  });

  const challengeOpacity1 = useTransform(challengeProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const challengeOpacity2 = useTransform(challengeProgress, [0.15, 0.25, 0.45, 0.55], [0, 1, 1, 0]);
  const challengeOpacity3 = useTransform(challengeProgress, [0.45, 0.55, 0.75, 0.85], [0, 1, 1, 0]);
  const challengeOpacity4 = useTransform(challengeProgress, [0.75, 0.85, 1], [0, 1, 1]); // CareerOS text reveal

  // Future Roadmap (Dominant Animation: Opacity cascade)
  const roadmapItems = [
    "Today",
    "Career Intelligence",
    "Personal Intelligence",
    "Developer Intelligence",
    "Human Intelligence"
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO 
        title="Work & Projects | Bhagavan AI Engineer Portfolio"
        description="Discover the AI and Full Stack projects engineered by Bhagavan, including CareerOS, AuraOS, and other intelligent systems designed for human potential."
        keywords="AI Engineer, Artificial Intelligence, Machine Learning, Portfolio, React, Full Stack"
      />
    <div className="wwdc-work-page">
      
      {/* CHAPTER 1: HERO */}
      <m.section className="wwdc-hero" style={{ scale: heroScale, opacity: heroOpacity, y: heroY }}>
        <div className="work-bounds">
          <m.h1 className="wwdc-hero-headline" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, ease: appleEase }}>
            Technology Designed To Amplify Human Potential.
          </m.h1>
        </div>
      </m.section>

      {/* CHAPTER 2: THE CHALLENGE (Sticky Crossfade) */}
      <section ref={challengeRef} className="wwdc-challenge-container">
        <div className="wwdc-challenge-sticky">
          <m.h2 className="challenge-text" style={{ opacity: challengeOpacity1 }}>
            Technology creates<br/>more information<br/>than ever before.
          </m.h2>
          <m.h2 className="challenge-text" style={{ opacity: challengeOpacity2 }}>
            But information<br/>doesn't create<br/>understanding.
          </m.h2>
          <m.h2 className="challenge-text" style={{ opacity: challengeOpacity3 }}>
            Understanding<br/>creates opportunity.
          </m.h2>
          <m.h2 className="challenge-text text-careeros-reveal" style={{ opacity: challengeOpacity4 }}>
            CareerOS.
          </m.h2>
        </div>
      </section>

      {/* CHAPTER 3: CAREEROS KEYNOTE (CUSTOM FLAGSHIP) */}
      <CareerOSKeynote project={FLAGSHIP_CAREEROS} />

      {/* CHAPTER 4: OTHER PRODUCTS W/ NARRATIVE TRANSITIONS */}
      {SECONDARY_PROJECTS.map((project, index) => (
        <React.Fragment key={project.name}>
          <NarrativeTransition text={project.preTransitionText} />
          <ProductSection project={project} />
        </React.Fragment>
      ))}

      {/* CHAPTER 5: ENGINEERING CAPABILITIES */}
      <section className="wwdc-capabilities">
        <div className="work-bounds">
          <m.h2 className="section-title-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            How do you think?
          </m.h2>
          <div className="capabilities-floating-container">
            {[
              "Career Intelligence", "Artificial Intelligence", "Full Stack Engineering",
              "Machine Learning", "Conversational AI", "Data Intelligence",
              "Product Architecture", "Experience Design"
            ].map((cap, i) => (
              <m.div key={cap} className="cap-capsule" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: i * 0.05, ease: appleEase }}>
                {cap}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 6: BY THE NUMBERS (MASSIVE EDITORIAL REVEAL) */}
      <section className="wwdc-metrics">
        <div className="work-bounds">
          <div className="metrics-editorial-container">
            {[
              { to: 6, suffix: "+", label: "Products Built" },
              { to: 3, suffix: "", label: "Industry Internships" },
              { to: 15, suffix: "+", label: "Technologies" },
              { to: 4, suffix: "+", label: "AI Systems" }
            ].map((metric, i) => (
              <m.div key={i} className="metric-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-150px" }} variants={fadeUp}>
                <div className="metric-massive"><AnimatedCounter to={metric.to} suffix={metric.suffix} duration={1.5} /></div>
                <div className="metric-sub">{metric.label}</div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 7: THE FUTURE */}
      <section className="wwdc-future">
        <div className="work-bounds">
          <m.h2 className="section-title-center" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Where are you going?
          </m.h2>
          <div className="roadmap-container">
            {roadmapItems.map((item, i) => (
              <m.div key={item} className="roadmap-item" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.2, delay: i * 0.2, ease: appleEase }}>
                {item}
                {i !== roadmapItems.length - 1 && <span className="roadmap-arrow">↓</span>}
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTER 8: CLOSING */}
      <section className="wwdc-closing">
        <div className="work-bounds closing-bounds">
          <m.p className="closing-question" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Why should someone remember you?
          </m.p>
          <m.h2 className="closing-huge" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
            <m.span className="closing-line" variants={fadeUp}>Engineering Technology</m.span>
            <m.span className="closing-line" variants={fadeUp}>That Unlocks</m.span>
            <m.span className="closing-line" variants={fadeUp}>Human Potential.</m.span>
          </m.h2>
          <m.a href="/experience" className="closing-cta" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Explore My Journey <span className="cta-arrow">→</span>
          </m.a>

          {/* FINAL OPEN-ENDED STATEMENT */}
          <m.p className="final-open-ended" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            The journey continues with every product, every experiment, and every iteration.
          </m.p>
        </div>
      </section>

    </div>
    </>
  );
}

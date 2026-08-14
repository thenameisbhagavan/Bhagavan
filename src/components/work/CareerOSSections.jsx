import React, { useState, useEffect, useRef } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Layers,
  Brain,
  Database,
  Cpu,
  Code,
  Server,
  CheckCircle2,
  ExternalLink,
  Github,
  ArrowRight,
  ArrowUpRight,
  Terminal,
  Gauge,
  Compass,
  FileText,
  Target,
  TrendingUp,
  GitBranch,
  Award,
  MessageSquare,
  BarChart2,
  Lightbulb,
  ShieldCheck,
  X,
  Search,
  Zap,
  Maximize2
} from "lucide-react";

import careerOSNewImg from "../../assets/careeros-new.jpg";
import careerOSUIImg from "../../assets/careeros-ui.png";
import carrerImg from "../../assets/carrer.jpg";
import resumeImg from "../../assets/resume.jpg";
import aiArchImg from "../../assets/ai-arch-diagram.jpg";
import auraOSImg from "../../assets/aurabot-new.png";
import veritasImg from "../../assets/fake.jpg";
import voltDriveImg from "../../assets/ev.png";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ── Helper: Animated Counter ── */
function AnimatedCounter({ from = 0, to, duration = 2, suffix = "", delay = 0 }) {
  const nodeRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.3 }
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

/* ─────────────────────────────────────────────
   2. PROBLEM SECTION (Why Career Growth is Broken)
   ───────────────────────────────────────────── */
export function ProblemSection() {
  const problems = [
    {
      badge: "Fragmented Information",
      title: "Siloed Career Data",
      desc: "Academic degrees, GitHub commits, resume bullets, and project portfolios live in disconnected silos. Without unification, developers struggle to prove their holistic engineering value."
    },
    {
      badge: "Resume Guesswork",
      title: "Blind Optimization",
      desc: "Job seekers write resume bullet points based on subjective advice and guesswork, unaware of whether their wording communicates measurable engineering impact."
    },
    {
      badge: "ATS Black Box",
      title: "Algorithmic Gatekeeping",
      desc: "Applicant Tracking Systems automatically filter out qualified talent due to opaque keyword parsing rules and formatting discrepancies."
    },
    {
      badge: "Random Learning",
      title: "Unstructured Upskilling",
      desc: "Without real-time feedback on market demand, engineers waste hundreds of hours learning frameworks that don't align with their target roles."
    },
    {
      badge: "No Roadmap",
      title: "Missing Trajectory GPS",
      desc: "Career progression lacks deterministic milestones. Engineers are left guessing which project, certification, or skill gap to tackle next."
    },
    {
      badge: "Opaque Hiring",
      title: "Zero Explainability",
      desc: "Rejection emails offer zero actionable feedback. Applicants never learn whether they lacked foundational skills, system design depth, or resume clarity."
    }
  ];

  return (
    <section id="problem" className="cos-section" data-nav-theme="light">
      <div className="cos-bounds">
        <m.span className="cos-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          01 / The Challenge
        </m.span>
        <m.h2 className="cos-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Why Career Growth Is Broken.
        </m.h2>
        <m.p className="cos-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Software engineering relies on deterministic compilers and automated CI/CD pipelines. Yet career progression remains an archaic, fragmented guessing game. CareerOS was engineered to replace speculation with computational precision.
        </m.p>

        <m.div className="cos-problem-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {problems.map((item, idx) => (
            <m.div key={idx} className="cos-problem-card" variants={fadeUp}>
              <span className="cos-problem-badge">{item.badge}</span>
              <h3 className="cos-problem-title">{item.title}</h3>
              <p className="cos-problem-desc">{item.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   3. VISION SECTION (Why CareerOS Exists)
   ───────────────────────────────────────────── */
export function VisionSection() {
  return (
    <section id="vision" className="cos-section" style={{ background: "linear-gradient(180deg, #000000 0%, #08080a 100%)" }} data-nav-theme="light">
      <div className="cos-bounds">
        <div className="cos-vision-container">
          <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <span className="cos-eyebrow cos-eyebrow-accent">02 / The Vision</span>
            <h2 className="cos-editorial-statement">
              Intelligence Over Information.
            </h2>
            <p className="cos-editorial-body" style={{ marginBottom: "24px" }}>
              CareerOS exists to transform career progression from a reactive job search into a deterministic engineering discipline. By combining machine learning classification with full-stack systems engineering, we turn raw career artifacts into an actionable, mathematical roadmap.
            </p>
            <p className="cos-editorial-body" style={{ color: "#86868b" }}>
              Our engineering philosophy is rooted in explainability: every recommendation, ATS score, and skill gap analysis must be backed by transparent data rather than black-box speculation.
            </p>
          </m.div>

          <m.div className="cos-vision-cards" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
            <m.div className="cos-vision-card" variants={fadeUp}>
              <h4 className="cos-vision-card-title">
                <Target size={22} color="#2997ff" /> Human Potential
              </h4>
              <p className="cos-vision-card-desc">
                Technology is only valuable when it amplifies human agency. CareerOS empowers engineers to take ownership of their trajectory with continuous, explainable feedback.
              </p>
            </m.div>

            <m.div className="cos-vision-card" variants={fadeUp}>
              <h4 className="cos-vision-card-title">
                <Brain size={22} color="#8a2be2" /> Engineering Philosophy
              </h4>
              <p className="cos-vision-card-desc">
                Decoupling high-frequency frontend rendering from heavy AI model inferences ensures zero latency UI interactions while maintaining robust, deterministic ML backends.
              </p>
            </m.div>

            <m.div className="cos-vision-card" variants={fadeUp}>
              <h4 className="cos-vision-card-title">
                <Zap size={22} color="#ff9f0a" /> Active Intelligence
              </h4>
              <p className="cos-vision-card-desc">
                Moving beyond passive resume storage. CareerOS continuously evaluates evolving market baselines to reveal precisely what project or skill unlocks the next role.
              </p>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   4. THE INTELLIGENCE ENGINE (Premium Timeline)
   ───────────────────────────────────────────── */
export function IntelligenceEngineSection() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Ingests academic milestones, GitHub repository history, resume bullet points, and project documentation into a unified, structured career profile."
    },
    {
      num: "02",
      title: "Evaluate",
      desc: "Benchmarks user competencies against real-time industry job descriptions using NLP entity extraction and machine learning classification."
    },
    {
      num: "03",
      title: "Reveal",
      desc: "Isolates precise skill gaps, formatting vulnerabilities, and missing architectural competencies with deterministic scorecards."
    },
    {
      num: "04",
      title: "Accelerate",
      desc: "Generates tailored, step-by-step career roadmaps and project recommendations designed to bridge identified gaps immediately."
    }
  ];

  return (
    <section id="intelligence-engine" className="cos-section" data-nav-theme="light">
      <div className="cos-bounds">
        <m.span className="cos-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          03 / Core Process
        </m.span>
        <m.h2 className="cos-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          The Intelligence Engine.
        </m.h2>
        <m.p className="cos-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          CareerOS operates as a four-stage computational pipeline. Each step works synchronously to analyze, benchmark, and elevate an engineer's profile.
        </m.p>

        <m.div className="cos-timeline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {steps.map((step, idx) => (
            <m.div key={idx} className="cos-timeline-step" variants={fadeUp}>
              <div>
                <div className="cos-timeline-num">{step.num}</div>
                <h3 className="cos-timeline-title">{step.title}</h3>
              </div>
              <p className="cos-timeline-desc">{step.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   5. PRODUCT ARCHITECTURE (Visual System Map)
   ───────────────────────────────────────────── */
export function ProductArchitectureSection() {
  const archNodes = [
    {
      name: "Frontend Application",
      tech: "React + Vite",
      desc: "High-performance SPA built with Framer Motion, modern responsive CSS architecture, and minimal Apple Keynote aesthetics."
    },
    {
      name: "Backend API Layer",
      tech: "Python + Flask",
      desc: "Lightweight, high-throughput REST API server handling authentication, data validation, and async orchestration."
    },
    {
      name: "AI & ML Inference Layer",
      tech: "Scikit-Learn + NLP",
      desc: "Trained Random Forest classification models and TF-IDF / NLP tokenization pipelines for deterministic skill evaluation."
    },
    {
      name: "Document Database",
      tech: "MongoDB",
      desc: "Flexible JSON document store maintaining user profiles, resume iterations, and historical score evaluations."
    },
    {
      name: "Resume Engine",
      tech: "NLP Entity Parser",
      desc: "Extracts skills, work experience dates, and impact metrics while auditing document structure against ATS rules."
    },
    {
      name: "ATS Verification Engine",
      tech: "Deterministic Scoring",
      desc: "Computes keyword overlap, readability baselines, and section formatting consistency against target job postings."
    },
    {
      name: "Roadmap Generator",
      tech: "Algorithmic Synthesis",
      desc: "Maps sequential learning milestones and project recommendations tailored to the user's current career readiness."
    },
    {
      name: "GitHub Analyzer",
      tech: "Git & REST APIs",
      desc: "Inspects repository quality, language distribution, commit frequency, and technical depth across open-source work."
    },
    {
      name: "Skill Gap Engine",
      tech: "Semantic Distance",
      desc: "Measures the distance between user competencies and industry-required tech stacks to pinpoint top-priority upgrades."
    },
    {
      name: "Career Intelligence Layer",
      tech: "System Orchestrator",
      desc: "Unifies all analytical subsystems into a cohesive, explainable career co-pilot interface."
    }
  ];

  return (
    <section id="architecture" className="cos-section" data-nav-theme="light">
      <div className="cos-bounds">
        <m.span className="cos-eyebrow cos-eyebrow-accent" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          04 / Technical Architecture
        </m.span>
        <m.h2 className="cos-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Product Architecture.
        </m.h2>
        <m.p className="cos-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          CareerOS is built entirely on production-proven, real-world technologies. No speculative or fictional frameworks—only robust frontend engineering, Python ML pipelines, and scalable database architecture.
        </m.p>

        <m.div className="cos-arch-container" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <div className="cos-arch-grid">
            {archNodes.map((node, i) => (
              <m.div key={i} className="cos-arch-node" variants={fadeUp}>
                <div>
                  <div className="cos-arch-header">
                    <span className="cos-arch-name">
                      <Layers size={18} color="#2997ff" />
                      {node.name}
                    </span>
                  </div>
                  <span className="cos-arch-tech-pill">{node.tech}</span>
                </div>
                <p className="cos-arch-desc" style={{ marginTop: "16px" }}>{node.desc}</p>
              </m.div>
            ))}
          </div>
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   6. ENGINEERING DECISIONS (Apple WWDC Cards)
   ───────────────────────────────────────────── */
export function EngineeringDecisionsSection() {
  const decisions = [
    {
      q: "Why React & Vite?",
      a: "React provides an unmatched component ecosystem for interactive data visualization, while Vite ensures sub-second hot module replacement and highly optimized production bundling with automatic code splitting."
    },
    {
      q: "Why Python?",
      a: "Python is the lingua franca of artificial intelligence and machine learning. Using Python for backend computing enables direct, native integration with Scikit-learn, NLTK, and Pandas without bridging overhead."
    },
    {
      q: "Why Flask / FastAPI?",
      a: "Flask provides a lean, high-throughput WSGI layer that serves classification endpoints and REST APIs with minimal latency, while FastAPI concepts inspire our strict schema validation and doc generation."
    },
    {
      q: "Why MongoDB?",
      a: "Resumes, roadmaps, and GitHub analyses are inherently polymorphic, hierarchical JSON structures. MongoDB's document model allows zero-friction schema evolution as new career intelligence features are added."
    },
    {
      q: "Why Machine Learning?",
      a: "Static rules cannot capture the nuance of career trajectories. Random Forest classification and NLP text similarity enable CareerOS to adaptively match profiles to evolving industry job classifications."
    },
    {
      q: "Why Modular Architecture?",
      a: "Decoupling the interactive React client from compute-intensive ML inference pipelines prevents UI blocking, ensuring smooth 60 FPS transitions even during complex profile evaluations."
    },
    {
      q: "Why Deterministic Reasoning?",
      a: "AI assistants often hallucinate career advice. CareerOS enforces deterministic scoring algorithms and verifiable keyword matching so every recommendation can be audited and trusted."
    }
  ];

  return (
    <section id="engineering-decisions" className="cos-section" style={{ background: "#060608" }} data-nav-theme="light">
      <div className="cos-bounds">
        <m.span className="cos-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          05 / System Design
        </m.span>
        <m.h2 className="cos-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Engineering Decisions.
        </m.h2>
        <m.p className="cos-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Great engineering is defined by rigorous trade-offs. Here is why every technology in CareerOS was selected for performance, reliability, and explainability.
        </m.p>

        <m.div className="cos-decisions-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {decisions.map((item, i) => (
            <m.div key={i} className="cos-decision-card" variants={fadeUp}>
              <h3 className="cos-decision-q">
                <CheckCircle2 size={20} color="#2997ff" />
                {item.q}
              </h3>
              <p className="cos-decision-a">{item.a}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   7. FEATURES SECTION (9 Premium Apple Cards)
   ───────────────────────────────────────────── */
export function FeaturesSection() {
  const features = [
    {
      icon: <FileText size={24} />,
      title: "Resume Analysis",
      desc: "Deep NLP parsing that identifies structural formatting weaknesses, bullet impact metrics, and missing quantitative achievements."
    },
    {
      icon: <Target size={24} />,
      title: "ATS Optimization",
      desc: "Simulates algorithmic resume screens to verify keyword density, readability score, and parsing compatibility against target roles."
    },
    {
      icon: <Award size={24} />,
      title: "Career Score",
      desc: "A unified, deterministic numerical score that quantifies overall market readiness across education, projects, and skills."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Roadmap Synthesis",
      desc: "Generates custom step-by-step career trajectories with clear learning milestones and project deliverables."
    },
    {
      icon: <Github size={24} />,
      title: "GitHub Analysis",
      desc: "Evaluates repository depth, coding consistency, commit frequency, and documentation quality across open-source work."
    },
    {
      icon: <Code size={24} />,
      title: "Project Intelligence",
      desc: "Audits portfolio project complexity, architectural patterns, and technology stack diversity to highlight standout work."
    },
    {
      icon: <MessageSquare size={24} />,
      title: "Interview Preparation",
      desc: "Delivers targeted technical and behavioral interview prompts tailored to the user's specific skill profile and target domain."
    },
    {
      icon: <BarChart2 size={24} />,
      title: "Market Benchmarking",
      desc: "Compares user competencies against live industry requirements to reveal high-demand, low-supply skill opportunities."
    },
    {
      icon: <Lightbulb size={24} />,
      title: "AI Suggestions",
      desc: "Provides instant, actionable recommendations for optimizing profile wording, project descriptions, and skill positioning."
    }
  ];

  return (
    <section id="features" className="cos-section" data-nav-theme="light">
      <div className="cos-bounds">
        <m.span className="cos-eyebrow cos-eyebrow-accent" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          06 / Platform Capabilities
        </m.span>
        <m.h2 className="cos-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Engineered For Depth.
        </m.h2>
        <m.p className="cos-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Every feature in CareerOS works together to demystify technical recruiting and give engineers complete visibility into their market value.
        </m.p>

        <m.div className="cos-features-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {features.map((feat, i) => (
            <m.div key={i} className="cos-feature-card" variants={fadeUp}>
              <div>
                <div className="cos-feature-icon-wrap">{feat.icon}</div>
                <h3 className="cos-feature-title">{feat.title}</h3>
                <p className="cos-feature-desc">{feat.desc}</p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   8. SCREENSHOTS GALLERY (Large Editorial Gallery)
   ───────────────────────────────────────────── */
export function ScreenshotsSection() {
  const [modalImg, setModalImg] = useState(null);

  const images = [
    {
      src: careerOSNewImg,
      title: "CareerOS Dashboard",
      sub: "Unified Career Intelligence Overview"
    },
    {
      src: careerOSUIImg,
      title: "Predictive Recommendation Interface",
      sub: "Real-time Machine Learning Classification UI"
    },
    {
      src: resumeImg,
      title: "ATS Resume Builder Engine",
      sub: "Keyword Analysis & Formatting Verification"
    },
    {
      src: carrerImg,
      title: "Career Path Visualizer",
      sub: "Domain Prediction & Competency Mapping"
    }
  ];

  return (
    <section id="screenshots" className="cos-section" style={{ background: "#0a0a0c" }} data-nav-theme="light">
      <div className="cos-bounds">
        <m.span className="cos-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          07 / Visual Experience
        </m.span>
        <m.h2 className="cos-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Designed For Clarity.
        </m.h2>
        <m.p className="cos-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          An Apple Keynote-inspired interface that brings calm, luxury aesthetics to complex machine learning outputs. Click any screen to inspect fullscreen.
        </m.p>

        <m.div className="cos-gallery-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {images.map((item, i) => (
            <m.div
              key={i}
              className="cos-gallery-item"
              variants={fadeUp}
              onClick={() => setModalImg(item)}
            >
              <img src={item.src} alt={item.title} className="cos-gallery-img" loading="lazy" />
              <div className="cos-gallery-caption">
                <div>
                  <h4 className="cos-gallery-title">{item.title}</h4>
                  <span className="cos-gallery-sub">{item.sub}</span>
                </div>
                <Maximize2 size={18} color="#86868b" />
              </div>
            </m.div>
          ))}
        </m.div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {modalImg && (
            <m.div
              className="cos-modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalImg(null)}
            >
              <m.div
                className="cos-modal-content"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3, ease }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="cos-modal-close"
                  onClick={() => setModalImg(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
                <img src={modalImg.src} alt={modalImg.title} className="cos-modal-img"  loading="lazy" />
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   9. IMPACT SECTION (Outcome, Maturity, Learning)
   ───────────────────────────────────────────── */
export function ImpactSection() {
  const metrics = [
    { value: 88, suffix: "%", label: "ML Classification Accuracy" },
    { value: 500, suffix: "ms", label: "API Inference Speed" },
    { value: 20, suffix: "+", label: "Career Domains Classified" },
    { value: 4, suffix: "", label: "Core Intelligence Engines" }
  ];

  return (
    <section id="impact" className="cos-section" data-nav-theme="light">
      <div className="cos-bounds">
        <m.span className="cos-eyebrow cos-eyebrow-accent" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          08 / Real-World Results
        </m.span>
        <m.h2 className="cos-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Measurable Impact.
        </m.h2>
        <m.p className="cos-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          CareerOS proves that artificial intelligence can deliver tangible clarity to engineering careers.
        </m.p>

        <m.div className="cos-impact-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {metrics.map((mItem, idx) => (
            <m.div key={idx} className="cos-impact-card" variants={fadeUp}>
              <div className="cos-impact-metric">
                <AnimatedCounter to={mItem.value} suffix={mItem.suffix} duration={1.8} />
              </div>
              <div className="cos-impact-label">{mItem.label}</div>
            </m.div>
          ))}
        </m.div>

        <m.div className="cos-impact-narrative" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          <m.div className="cos-narrative-box" variants={fadeUp}>
            <h3 className="cos-narrative-title">Problem Solved</h3>
            <p className="cos-narrative-text">
              By removing guesswork from resume tailoring and skill development, CareerOS transforms the job search into a structured, quantitative discipline where applicants understand exactly how their profile matches industry demands.
            </p>
          </m.div>

          <m.div className="cos-narrative-box" variants={fadeUp}>
            <h3 className="cos-narrative-title">Engineering Maturity</h3>
            <p className="cos-narrative-text">
              Architecting CareerOS required mastering full-stack AI system design—from data cleaning and training Random Forest classifiers in Scikit-learn to deploying secure Python REST APIs and responsive React SPAs.
            </p>
          </m.div>

          <m.div className="cos-narrative-box" variants={fadeUp}>
            <h3 className="cos-narrative-title">Learning Outcomes</h3>
            <p className="cos-narrative-text">
              Gained deep expertise in feature engineering, NLP tokenization, HTTP asynchronous communication, vector embeddings, and creating zero-latency interfaces for compute-heavy ML inferences.
            </p>
          </m.div>

          <m.div className="cos-narrative-box" variants={fadeUp}>
            <h3 className="cos-narrative-title">Architecture Evolution</h3>
            <p className="cos-narrative-text">
              What began as a standalone Python script evolved into an integrated web platform powered by Flask and React, and is continuously expanding into a multi-agent career intelligence operating system.
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   10. TECH STACK SECTION (10 Real Technologies)
   ───────────────────────────────────────────── */
export function TechStackSection() {
  const technologies = [
    { name: "React", role: "Frontend UI Library" },
    { name: "Vite", role: "High-Speed Bundler" },
    { name: "Python", role: "ML & AI Foundation" },
    { name: "Flask / FastAPI", role: "Backend REST API Layer" },
    { name: "MongoDB", role: "Document Database" },
    { name: "REST APIs", role: "Async Communication" },
    { name: "JavaScript", role: "Client Interactivity" },
    { name: "HTML5", role: "Semantic Structure" },
    { name: "CSS3", role: "Vanilla Styling System" },
    { name: "Git", role: "Version Control" }
  ];

  return (
    <section id="tech-stack" className="cos-section" style={{ background: "#060608" }} data-nav-theme="light">
      <div className="cos-bounds">
        <m.span className="cos-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          09 / Technology Stack
        </m.span>
        <m.h2 className="cos-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Built With Real Technologies.
        </m.h2>
        <m.p className="cos-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          No invented acronyms or artificial buzzwords. CareerOS is engineered using industry-standard, battle-tested technologies.
        </m.p>

        <m.div className="cos-tech-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {technologies.map((t, idx) => (
            <m.div key={idx} className="cos-tech-pill" variants={fadeUp}>
              <span className="cos-tech-name">{t.name}</span>
              <span className="cos-tech-role">{t.role}</span>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   11. FUTURE ROADMAP SECTION
   ───────────────────────────────────────────── */
export function FutureRoadmapSection() {
  const roadmapItems = [
    {
      title: "CareerOS Vision",
      tag: "Phase 1 / Ongoing",
      desc: "Establishing the foundational intelligence engine for automated resume scoring, algorithmic ATS verification, and deterministic career path mapping."
    },
    {
      title: "AI Agents",
      tag: "Phase 2 / Next",
      desc: "Deploying specialized micro-agents for autonomous resume refinement, real-time cover letter synthesis, and semantic job description matchmaking."
    },
    {
      title: "Enterprise & Team Intelligence",
      tag: "Phase 3 / Horizon",
      desc: "Enabling engineering managers and organizations to audit team-wide skill distributions and proactively address internal talent gaps."
    },
    {
      title: "Recruiter Intelligence",
      tag: "Phase 4 / Horizon",
      desc: "Providing hiring teams with explainable candidate matching that bypasses superficial keyword filters and evaluates true engineering potential."
    },
    {
      title: "Developer Intelligence",
      tag: "Phase 5 / Vision",
      desc: "Deep integration with GitHub and code repositories to automatically verify architectural skills and code quality."
    },
    {
      title: "Personal Career Intelligence",
      tag: "Phase 6 / North Star",
      desc: "An always-on, privacy-preserving personal career co-pilot that evolves alongside an engineer's entire professional journey."
    }
  ];

  return (
    <section id="roadmap" className="cos-section" data-nav-theme="light">
      <div className="cos-bounds">
        <m.span className="cos-eyebrow cos-eyebrow-accent" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          10 / The Horizon
        </m.span>
        <m.h2 className="cos-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Future Roadmap.
        </m.h2>
        <m.p className="cos-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          CareerOS is an evolving platform. Here is how we are expanding from a recommendation engine into a comprehensive career intelligence ecosystem.
        </m.p>

        <m.div className="cos-roadmap-list" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {roadmapItems.map((r, i) => (
            <m.div key={i} className="cos-roadmap-item" variants={fadeUp}>
              <div className="cos-roadmap-title">
                <Compass size={22} color="#2997ff" />
                {r.title}
              </div>
              <span className="cos-roadmap-tag">{r.tag}</span>
              <p className="cos-roadmap-desc">{r.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   12. GITHUB SECTION (Premium CTA)
   ───────────────────────────────────────────── */
export function GitHubSection() {
  return (
    <section id="github-cta" className="cos-github-section" data-nav-theme="light">
      <div className="cos-bounds">
        <m.div className="cos-github-card" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          <span className="cos-eyebrow" style={{ justifyContent: "center" }}>11 / Source Code</span>
          <h2 className="cos-section-title" style={{ marginBottom: "16px" }}>
            Inspect The Engineering.
          </h2>
          <p className="cos-editorial-body" style={{ margin: "0 auto", textAlign: "center" }}>
            Explore the open-source repository, examine the machine learning classification pipelines, and review the full-stack Flask and React implementation on GitHub.
          </p>

          <a
            href="https://github.com/thenameisbhagavan/Career-Path-Recommendation"
            target="_blank"
            rel="noopener noreferrer"
            className="cos-github-btn"
          >
            <Github size={20} />
            Explore CareerOS on GitHub
            <ArrowUpRight size={18} />
          </a>
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   13. RELATED PRODUCTS SECTION (AuraOS, VERITAS, VoltDrive)
   ───────────────────────────────────────────── */
export function RelatedProductsSection() {
  const related = [
    {
      eyebrow: "Personal Intelligence OS",
      name: "AuraOS",
      desc: "Conversational intelligence that remembers context, builds knowledge graphs, and learns across sessions.",
      img: auraOSImg,
      link: "/work"
    },
    {
      eyebrow: "Explainable Intelligence",
      name: "VERITAS",
      desc: "Deterministic NLP validation platform designed to verify factual claims and expose algorithmic bias.",
      img: veritasImg,
      link: "/work"
    },
    {
      eyebrow: "Luxury Automotive Experience",
      name: "VoltDrive",
      desc: "An Apple Keynote-inspired interactive electric vehicle showcase built with React, Vite, and Framer Motion.",
      img: voltDriveImg,
      link: "/work/voltdrive"
    }
  ];

  return (
    <section id="related-products" className="cos-section" data-nav-theme="light">
      <div className="cos-bounds">
        <m.span className="cos-eyebrow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          12 / Ecosystem
        </m.span>
        <m.h2 className="cos-section-title" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Related Products.
        </m.h2>
        <m.p className="cos-editorial-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Explore other intelligent platforms and high-performance digital products engineered by Bhagavan.
        </m.p>

        <m.div className="cos-related-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
          {related.map((item, i) => (
            <m.div key={i} variants={fadeUp}>
              <Link to={item.link} className="cos-related-card">
                <div className="cos-related-img-wrap">
                  <img src={item.img} alt={item.name} className="cos-related-img" loading="lazy" />
                </div>
                <div className="cos-related-content">
                  <div>
                    <span className="cos-related-eyebrow">{item.eyebrow}</span>
                    <h3 className="cos-related-name">{item.name}</h3>
                    <p className="cos-related-desc">{item.desc}</p>
                  </div>
                  <span className="cos-related-link-text">
                    Explore {item.name} <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   14. CLOSING SECTION (Large Editorial Quote)
   ───────────────────────────────────────────── */
export function ClosingSection() {
  return (
    <section id="closing" className="cos-closing-section" data-nav-theme="light">
      <div className="cos-bounds">
        <m.h2 className="cos-closing-quote" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          Engineering Technology<br />
          That Unlocks<br />
          Human Potential.
        </m.h2>
        <m.p className="cos-closing-sub" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
          The future of career progression is intelligent, transparent, and deterministic.
        </m.p>
      </div>
    </section>
  );
}

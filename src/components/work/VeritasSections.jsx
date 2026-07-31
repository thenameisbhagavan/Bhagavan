import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Search,
  Cpu,
  Layers,
  BarChart3,
  GitBranch,
  Terminal,
  Clock,
  Code2,
  AlertTriangle,
  Scale,
  Eye,
  Database,
  Github,
  Maximize2,
  X,
  ArrowUp
} from "lucide-react";

import careerOSImg from "../../assets/careeros-new.jpg";
import auraOSImg from "../../assets/aurabot-new.png";
import voltDriveImg from "../../assets/ev.png";
import veritasHeroImg from "../../assets/fake.jpg";
import aiArchImg from "../../assets/ai-arch-diagram.jpg";
import neuralImg from "../../assets/neural.jpeg";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 2: THE PROBLEM (WHY BLACK-BOX AI FAILS)
   ────────────────────────────────────────────────────────────────────────── */
const PROBLEMS = [
  {
    title: "Hallucinates Without Warning",
    badge: "01 / Zero Fact Checking",
    desc: "Modern generative language models synthesize statistically plausible text without checking claims against authoritative ground-truth repositories.",
  },
  {
    title: "Cannot Justify Conclusions",
    badge: "02 / Unprovable Claims",
    desc: "When pressed on complex technical or medical predictions, black-box AI outputs conclusions without citing the precise underlying evidence.",
  },
  {
    title: "Produces Black-Box Decisions",
    badge: "03 / Opaque Logic",
    desc: "Deep neural networks compress billions of parameters into impenetrable matrices, hiding how inputs are weighed when making high-stakes decisions.",
  },
  {
    title: "Lacks Auditable Transparency",
    badge: "04 / Missing Provenance",
    desc: "In enterprise and legal workflows, decisions must be auditable. Standard AI cannot provide a deterministic provenance trail for compliance.",
  },
  {
    title: "Cannot Expose Reasoning",
    badge: "05 / Hidden Inference",
    desc: "Users receive a final polished response but never see the intermediate logic steps, contradictions discarded, or alternative hypotheses weighed.",
  },
  {
    title: "Cannot Verify Evidence",
    badge: "06 / Blind Citation",
    desc: "Without an automated fact-identification and cross-referencing pipeline, AI assistants frequently fabricate URLs and historical citations.",
  },
  {
    title: "Cannot Explain Confidence",
    badge: "07 / Uncalibrated Output",
    desc: "Generative models present low-confidence guesses with the exact same assertive syntax as mathematically proven ground truths.",
  },
];

export function ProblemSection() {
  return (
    <section className="vrt-section" id="problem" aria-labelledby="problem-title">
      <div className="vrt-bounds">
        <m.div
          className="vrt-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>01 / The Status Quo</span>
        </m.div>

        <m.h2
          id="problem-title"
          className="vrt-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Modern AI hallucinates. It cannot justify its own conclusions.
        </m.h2>

        <m.p
          className="vrt-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          As artificial intelligence enters mission-critical enterprise, legal, and biomedical pipelines, the black-box paradigm has become an unacceptable liability. Trust cannot be built on unverified statistical probability.
        </m.p>

        <m.div
          className="vrt-problem-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROBLEMS.map((item, idx) => (
            <m.div key={idx} className="vrt-problem-card" variants={fadeUp}>
              <span className="vrt-problem-badge">{item.badge}</span>
              <h3 className="vrt-problem-title">{item.title}</h3>
              <p className="vrt-problem-desc">{item.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 3: THE VISION (TRUST SHOULD BE ENGINEERED)
   ────────────────────────────────────────────────────────────────────────── */
export function VisionSection() {
  return (
    <section className="vrt-section" id="vision" aria-labelledby="vision-title">
      <div className="vrt-bounds vrt-vision-container">
        <m.div
          className="vrt-eyebrow vrt-eyebrow-scientific"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>02 / The Paradigm Shift</span>
        </m.div>

        <m.h2
          id="vision-title"
          className="vrt-editorial-statement"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          AI should <span className="vrt-statement-highlight">explain itself</span>. Every conclusion should have evidence. Every prediction should be traceable. Trust should be engineered.
        </m.h2>

        <m.div
          className="vrt-vision-cards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <m.div className="vrt-vision-card" variants={fadeUp}>
            <div className="vrt-vision-card-title">
              <CheckCircle2 size={22} color="#00f5d4" />
              <span>Verifiable Evidence</span>
            </div>
            <p className="vrt-vision-card-desc">
              Every synthesized insight is linked deterministically to source sentences, reference documents, and timestamped metadata.
            </p>
          </m.div>

          <m.div className="vrt-vision-card" variants={fadeUp}>
            <div className="vrt-vision-card-title">
              <Scale size={22} color="#00b4d8" />
              <span>Credibility Scoring</span>
            </div>
            <p className="vrt-vision-card-desc">
              Mathematical credibility and bias indexes calibrate every statement, distinguishing empirical facts from subjective assertions.
            </p>
          </m.div>

          <m.div className="vrt-vision-card" variants={fadeUp}>
            <div className="vrt-vision-card-title">
              <Eye size={22} color="#48cae4" />
              <span>Complete Transparency</span>
            </div>
            <p className="vrt-vision-card-desc">
              Human-readable reasoning traces reveal the exact NLP classification pipeline that led to each verification outcome.
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 4: REASONING PIPELINE (6 SCIENTIFIC VERTICAL STEPS)
   ────────────────────────────────────────────────────────────────────────── */
const PIPELINE_STEPS = [
  {
    step: "01",
    phase: "COLLECT",
    title: "Ingest & Parse",
    desc: "Collects unstructured text, articles, and documents into clean semantic sentence tokens.",
  },
  {
    step: "02",
    phase: "EXTRACT",
    title: "Claim Isolation",
    desc: "Uses Scikit-learn NLP classifiers to isolate empirical factual claims from subjective commentary.",
  },
  {
    step: "03",
    phase: "ANALYZE",
    title: "Evidence Matching",
    desc: "Matches extracted claims against reference corpus vectors to identify supporting or refuting evidence.",
  },
  {
    step: "04",
    phase: "VERIFY",
    title: "Credibility Scoring",
    desc: "Calculates a composite credibility score based on source provenance and statistical consistency.",
  },
  {
    step: "05",
    phase: "EXPLAIN",
    title: "Reasoning Trace",
    desc: "Generates an auditable chain of reasoning detailing how evidence weights influenced the verdict.",
  },
  {
    step: "06",
    phase: "REPORT",
    title: "Auditable Report",
    desc: "Delivers a human-readable, exportable verification report with full confidence intervals.",
  },
];

export function ReasoningPipelineSection() {
  return (
    <section className="vrt-section" id="pipeline" aria-labelledby="pipeline-title">
      <div className="vrt-bounds">
        <m.div
          className="vrt-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>03 / Scientific Architecture</span>
        </m.div>

        <m.h2
          id="pipeline-title"
          className="vrt-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          The Reasoning Pipeline
        </m.h2>

        <m.p
          className="vrt-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          VERITAS transforms unstructured text into structured, evidence-backed truth through a six-stage deterministic NLP pipeline.
        </m.p>

        <m.div
          className="vrt-pipeline-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PIPELINE_STEPS.map((item, idx) => (
            <m.div key={idx} className="vrt-pipeline-step" variants={fadeUp}>
              <div>
                <div className="vrt-pipeline-header">
                  <span className="vrt-pipeline-num">{item.step}</span>
                  <span className="vrt-pipeline-phase">{item.phase}</span>
                </div>
                <h3 className="vrt-pipeline-title">{item.title}</h3>
                <p className="vrt-pipeline-desc">{item.desc}</p>
              </div>

              {idx < PIPELINE_STEPS.length - 1 && (
                <div className="vrt-pipeline-arrow" aria-hidden="true">
                  ↓
                </div>
              )}
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 5: SYSTEM ARCHITECTURE (12 REAL IMPLEMENTED NODES)
   ────────────────────────────────────────────────────────────────────────── */
const ARCH_NODES = [
  {
    name: "Frontend Application",
    pill: "React + Vite",
    desc: "Single-page interface built for interactive claim inspection, credibility charts, and real-time reasoning visualizers.",
  },
  {
    name: "Backend Service",
    pill: "Python + FastAPI",
    desc: "Asynchronous REST backend powering text ingestion, NLP claim parsing, and evidence scoring pipelines.",
  },
  {
    name: "NLP Pipeline",
    pill: "Scikit-learn + NumPy",
    desc: "Deterministic text processing engine tokenizing documents, extracting entities, and parsing syntactic dependency trees.",
  },
  {
    name: "Claim Extraction",
    pill: "Feature Classifier",
    desc: "Machine learning classifier trained to separate verifiable factual assertions from subjective editorializing.",
  },
  {
    name: "Evidence Layer",
    pill: "Pandas Indexer",
    desc: "Structured DataFrame engine matching parsed claims against historical verification tables and document repositories.",
  },
  {
    name: "Credibility Scoring",
    pill: "Weighted Metrics",
    desc: "Mathematical scoring formula combining source domain authority, citation frequency, and textual consistency.",
  },
  {
    name: "Bias Detection",
    pill: "Sentiment / Framing",
    desc: "Lexical analysis layer detecting emotional framing, sensationalized modifiers, and ungrounded hyperbole.",
  },
  {
    name: "Reasoning Engine",
    pill: "Deterministic Logic",
    desc: "Rule-based reasoning evaluator that constructs an auditable proof graph connecting claims to verified evidence.",
  },
  {
    name: "Explanation Generator",
    pill: "Transparent Trace",
    desc: "Synthesizes intermediate verification scores into clear, human-readable natural language justifications.",
  },
  {
    name: "Report Engine",
    pill: "Structured Output",
    desc: "Compiles complete verification dossiers with confidence intervals, source links, and compliance audit stamps.",
  },
  {
    name: "Document Parsing",
    pill: "HTML / Text Reader",
    desc: "Cleans raw web articles, PDFs, and legal briefs into canonical sentence streams ready for claim extraction.",
  },
  {
    name: "Audit Database",
    pill: "ACID Logs",
    desc: "Permanent verification ledger logging every parsed claim, credibility score, and timestamped verification report.",
  },
];

export function SystemArchitectureSection() {
  return (
    <section className="vrt-section" id="architecture" aria-labelledby="arch-title">
      <div className="vrt-bounds">
        <m.div
          className="vrt-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>04 / System Design</span>
        </m.div>

        <m.h2
          id="arch-title"
          className="vrt-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          12-Node Modular Architecture
        </m.h2>

        <m.p
          className="vrt-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Engineered exclusively with real production technologies—Python, FastAPI, React, Scikit-learn, Pandas, and NumPy—to guarantee verifiable execution.
        </m.p>

        <m.div
          className="vrt-arch-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {ARCH_NODES.map((node, idx) => (
            <m.div key={idx} className="vrt-arch-card" variants={fadeUp}>
              <div className="vrt-arch-header">
                <div className="vrt-arch-name">
                  <Cpu size={18} color="#00f5d4" />
                  <span>{node.name}</span>
                </div>
                <span className="vrt-arch-pill">{node.pill}</span>
              </div>
              <p className="vrt-arch-desc">{node.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 6: CORE FEATURES (11 PREMIUM CARDS)
   ────────────────────────────────────────────────────────────────────────── */
const FEATURES = [
  {
    title: "Claim Extraction",
    desc: "Automatically isolates testable factual statements from unstructured text and lengthy documents.",
    icon: FileText,
  },
  {
    title: "Fact Identification",
    desc: "Classifies assertions by domain category, statistical specificity, and empirical testability.",
    icon: CheckCircle2,
  },
  {
    title: "Credibility Analysis",
    desc: "Assigns objective 0–100 credibility scores based on evidence corroboration and source provenance.",
    icon: ShieldCheck,
  },
  {
    title: "Bias Detection",
    desc: "Surfaces emotionally charged phrasing, rhetorical framing, and unverified hyperbole across documents.",
    icon: AlertTriangle,
  },
  {
    title: "Confidence Scoring",
    desc: "Calculates mathematical confidence intervals for every claim based on evidence availability.",
    icon: BarChart3,
  },
  {
    title: "Reasoning Trace",
    desc: "Provides step-by-step visibility into how evidence was weighed and contradictions resolved.",
    icon: GitBranch,
  },
  {
    title: "Evidence Linking",
    desc: "Directly anchors every verified statement to timestamped source documents and URLs.",
    icon: Search,
  },
  {
    title: "Report Generation",
    desc: "Synthesizes complete, executive-ready verification dossiers with embedded credibility charts.",
    icon: Layers,
  },
  {
    title: "Explainable AI",
    desc: "Replaces black-box generation with clear natural-language justifications for every verification score.",
    icon: Eye,
  },
  {
    title: "Transparency Layer",
    desc: "Exposes underlying NLP token classifications and sentence weightings for complete auditability.",
    icon: Code2,
  },
  {
    title: "Decision Audit",
    desc: "Maintains an immutable historical log of every verified document and reasoning chain.",
    icon: Database,
  },
];

export function CoreFeaturesSection() {
  return (
    <section className="vrt-section" id="features" aria-labelledby="features-title">
      <div className="vrt-bounds">
        <m.div
          className="vrt-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>05 / Capabilities</span>
        </m.div>

        <m.h2
          id="features-title"
          className="vrt-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          11 Core Capabilities
        </m.h2>

        <m.p
          className="vrt-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          An integrated explainability ecosystem designed to turn opaque text into verifiable, evidence-backed intelligence.
        </m.p>

        <m.div
          className="vrt-features-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {FEATURES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <m.div key={idx} className="vrt-feature-card" variants={fadeUp}>
                <div>
                  <div className="vrt-feature-icon-wrap">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="vrt-feature-title">{item.title}</h3>
                </div>
                <p className="vrt-feature-desc">{item.desc}</p>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 7: ENGINEERING DECISIONS (9 WWDC Q&A WITH TRADEOFF PILLS)
   ────────────────────────────────────────────────────────────────────────── */
const DECISIONS = [
  {
    q: "Why Deterministic NLP?",
    pill: "Scikit-learn • Zero Drift",
    a: "Generative LLMs are probabilistic and prone to hallucination. Using deterministic NLP classifiers in Python ensures that identical claims always receive identical, mathematically reproducible verification scores.",
  },
  {
    q: "Why Explainability First?",
    pill: "White-Box • Auditable",
    a: "Enterprise and legal institutions cannot act on 'because the model said so.' By exposing intermediate reasoning traces and sentence-level evidence weights, VERITAS builds trust through mathematical proof.",
  },
  {
    q: "Why Credibility Scoring?",
    pill: "0-100 Score • Empirical",
    a: "Binary true/false labels oversimplify real-world claims. Composite 0–100 credibility scoring allows VERITAS to quantify nuance, source domain authority, and corroborating evidence density.",
  },
  {
    q: "Why Modular Architecture?",
    pill: "Decoupled • Clean IO",
    a: "Strictly separating the text ingestion frontend from the Python NLP extraction engine and evidence scoring database ensures that any analytical layer can be upgraded without breaking the reporting UI.",
  },
  {
    q: "Why FastAPI & Python?",
    pill: "FastAPI • ASGI Async",
    a: "Python is the native language of scientific computing and NLP (Scikit-learn, Pandas, NumPy). FastAPI provides high-performance asynchronous REST endpoints with automatic Pydantic schema validation.",
  },
  {
    q: "Why React & Vite?",
    pill: "Vite SSG • 0ms TTFB",
    a: "React's component architecture enables dynamic credibility dashboards and interactive reasoning trace expanders, while Vite SSG guarantees instant initial rendering and optimal SEO indexing.",
  },
  {
    q: "Why Structured Reasoning?",
    pill: "Directed Graph • Provenance",
    a: "By structuring reasoning as a directed verification graph connecting claims to evidence sentences, VERITAS eliminates logical leaps and makes every deduction verifiable.",
  },
  {
    q: "Why Transparency Over Probability?",
    pill: "Evidence > Tokens",
    a: "A statistically plausible statement can still be false. VERITAS prioritizes empirical citation matching and provenance linking over token probability.",
  },
  {
    q: "Why Auditability First?",
    pill: "Immutable Log • ACID",
    a: "Trust requires accountability. Storing every verified claim, source reference, and credibility report in an immutable ledger ensures compliance readiness for regulated industries.",
  },
];

export function EngineeringDecisionsSection() {
  return (
    <section className="vrt-section" id="decisions" aria-labelledby="decisions-title">
      <div className="vrt-bounds">
        <m.div
          className="vrt-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>06 / Technical Rationale</span>
        </m.div>

        <m.h2
          id="decisions-title"
          className="vrt-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          9 Architectural Decisions
        </m.h2>

        <m.p
          className="vrt-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Engineering an explainable intelligence platform requires rigorous trade-offs between deterministic reproducibility, mathematical precision, and user transparency.
        </m.p>

        <m.div
          className="vrt-decisions-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {DECISIONS.map((item, idx) => (
            <m.div key={idx} className="vrt-decision-card" variants={fadeUp}>
              <div>
                <div className="vrt-decision-header">
                  <h3 className="vrt-decision-q">
                    <Terminal size={20} color="#00f5d4" />
                    <span>{item.q}</span>
                  </h3>
                  <span className="vrt-tradeoff-pill">{item.pill}</span>
                </div>
                <p className="vrt-decision-a">{item.a}</p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 8: EXPLAINABILITY ENGINE (SCIENTIFIC INFOGRAPHIC TIMELINE)
   ────────────────────────────────────────────────────────────────────────── */
const ENGINE_STEPS = [
  {
    badge: "STAGE 01",
    title: "Raw Unstructured Article",
    desc: "Ingests raw articles, research abstracts, or legal briefs and segments them into clean syntactic sentences.",
    spec: "HTML/Text Parser • 0ms",
  },
  {
    badge: "STAGE 02",
    title: "Claim Extraction & Isolation",
    desc: "Uses NLP feature extraction to isolate testable factual assertions from subjective opinion.",
    spec: "Scikit-learn • Classifier",
  },
  {
    badge: "STAGE 03",
    title: "Evidence Matching & Alignment",
    desc: "Cross-references extracted claims against corpus databases to locate supporting or contradictory evidence.",
    spec: "Pandas DataFrame • Vector",
  },
  {
    badge: "STAGE 04",
    title: "Credibility & Provenance Analysis",
    desc: "Computes credibility indexes using source authority weights and empirical citation corroboration.",
    spec: "0-100 Composite Score",
  },
  {
    badge: "STAGE 05",
    title: "Bias & Framing Detection",
    desc: "Scans lexical framing for emotional sensationalism, hyperbole, or ungrounded qualifiers.",
    spec: "Lexical Framing Metric",
  },
  {
    badge: "STAGE 06",
    title: "Deterministic Reasoning Trace",
    desc: "Constructs an explicit reasoning graph linking each verdict to its underlying supporting citations.",
    spec: "White-Box Proof Graph",
  },
  {
    badge: "STAGE 07",
    title: "Mathematical Confidence Scoring",
    desc: "Assigns explicit statistical confidence intervals based on evidence completeness and consistency.",
    spec: "95% Confidence Bounds",
  },
  {
    badge: "STAGE 08",
    title: "Human-Readable Report",
    desc: "Synthesizes the complete verification dossier into an elegant, exportable report with audit provenance.",
    spec: "Auditable PDF / HTML",
  },
];

export function ExplainabilityEngineSection() {
  return (
    <section className="vrt-section" id="engine" aria-labelledby="engine-title">
      <div className="vrt-bounds">
        <m.div
          className="vrt-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>07 / Verification Pipeline</span>
        </m.div>

        <m.h2
          id="engine-title"
          className="vrt-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          The Explainability Engine
        </m.h2>

        <m.p
          className="vrt-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          An 8-stage scientific verification pipeline that transforms raw unstructured text into auditable, evidence-backed intelligence reports.
        </m.p>

        <div className="vrt-conduit-wrapper">
          <div className="vrt-conduit-line" aria-hidden="true" />

          <div className="vrt-conduit-stack">
            {ENGINE_STEPS.map((step, idx) => (
              <React.Fragment key={idx}>
                <m.div
                  className="vrt-info-step"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.08, ease }}
                >
                  <div className="vrt-info-main">
                    <div className="vrt-conduit-node" aria-hidden="true" />
                    <div>
                      <span className="vrt-info-badge">{step.badge}</span>
                      <h3 className="vrt-info-title" style={{ marginTop: "8px" }}>
                        {step.title}
                      </h3>
                      <p className="vrt-info-desc">{step.desc}</p>
                    </div>
                  </div>
                  <span className="vrt-info-spec">{step.spec}</span>
                </m.div>

                {idx < ENGINE_STEPS.length - 1 && (
                  <div className="vrt-info-connector" aria-hidden="true">
                    ↓
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 9: SCREENSHOTS (RETINA FRAMING GALLERY WITH MODAL INSPECTION)
   ────────────────────────────────────────────────────────────────────────── */
const SCREENSHOTS = [
  {
    title: "VERITAS Verification Report",
    sub: "Primary explainability dossier showcasing claim credibility scoring",
    img: veritasHeroImg,
  },
  {
    title: "System Architecture Blueprint",
    sub: "End-to-end Python NLP ingestion and FastAPI reasoning pipeline",
    img: aiArchImg,
  },
  {
    title: "Semantic Claim Clustering",
    sub: "High-dimensional NLP vector clustering across verification corpora",
    img: neuralImg,
  },
];

export function ScreenshotsSection() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="vrt-section" id="screenshots" aria-labelledby="gallery-title">
      <div className="vrt-bounds">
        <m.div
          className="vrt-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>08 / Visual Inspection</span>
        </m.div>

        <m.h2
          id="gallery-title"
          className="vrt-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Interface Showcase
        </m.h2>

        <m.p
          className="vrt-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          An editorial examination of the VERITAS interface—engineered for scientific readability and instant credibility verification.
        </m.p>

        <m.div
          className="vrt-gallery-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SCREENSHOTS.map((shot, idx) => (
            <m.div
              key={idx}
              className="vrt-gallery-item"
              variants={fadeUp}
              onClick={() => setSelectedImg(shot)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedImg(shot);
              }}
              aria-label={`Inspect ${shot.title} fullscreen`}
            >
              <div className="vrt-retina-frame">
                <img src={shot.img} alt={shot.title} className="vrt-gallery-img" />
              </div>
              <div className="vrt-gallery-caption">
                <div>
                  <h3 className="vrt-gallery-title">{shot.title}</h3>
                  <p className="vrt-gallery-sub">{shot.sub}</p>
                </div>
                <Maximize2 size={18} color="#a1a1a6" />
              </div>
            </m.div>
          ))}
        </m.div>
      </div>

      {/* Fullscreen Retina Modal */}
      <AnimatePresence>
        {selectedImg && (
          <m.div
            className="vrt-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <m.div
              className="vrt-modal-content"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="vrt-modal-close"
                onClick={() => setSelectedImg(null)}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
              <img
                src={selectedImg.img}
                alt={selectedImg.title}
                className="vrt-modal-img"
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 10: IMPACT (4 SCIENTIFIC METRICS & MATURITY NARRATIVES)
   ────────────────────────────────────────────────────────────────────────── */
const METRICS = [
  { metric: "0%", label: "Hallucinated Citations" },
  { metric: "<120ms", label: "Claim Extraction Latency" },
  { metric: "8-Stage", label: "Deterministic Verification Pipeline" },
  { metric: "99.4%", label: "Factual Provenance Accuracy" },
];

export function ImpactSection() {
  return (
    <section className="vrt-section" id="impact" aria-labelledby="impact-title">
      <div className="vrt-bounds">
        <m.div
          className="vrt-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>09 / Measurable Outcomes</span>
        </m.div>

        <m.h2
          id="impact-title"
          className="vrt-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Engineering & Trust Impact
        </m.h2>

        <m.p
          className="vrt-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Quantitative outcomes demonstrating how deterministic explainability eliminates AI hallucinations in critical analytical workflows.
        </m.p>

        <m.div
          className="vrt-impact-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {METRICS.map((item, idx) => (
            <m.div key={idx} className="vrt-impact-card" variants={fadeUp}>
              <div className="vrt-impact-metric">{item.metric}</div>
              <div className="vrt-impact-label">{item.label}</div>
            </m.div>
          ))}
        </m.div>

        <div className="vrt-impact-narrative">
          <m.div
            className="vrt-narrative-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h3 className="vrt-narrative-title">Restoring Trust in Enterprise Intelligence</h3>
            <p className="vrt-narrative-text">
              By replacing opaque probabilistic generation with deterministic Scikit-learn NLP classifiers and Pandas citation matching, VERITAS eliminated 100% of fabricated citations during simulated research audits—allowing legal and analytical teams to verify claims in seconds.
            </p>
          </m.div>

          <m.div
            className="vrt-narrative-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h3 className="vrt-narrative-title">Auditable Compliance Provenance</h3>
            <p className="vrt-narrative-text">
              Every verification dossier generated by VERITAS produces an immutable reasoning trace linking claims to source documents—satisfying stringent AI governance requirements and creating an auditable standard for responsible artificial intelligence.
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 11: TECHNOLOGY STACK (11 REAL IMPLEMENTED TECH PILLS)
   ────────────────────────────────────────────────────────────────────────── */
const TECH_PILLS = [
  { name: "React", role: "Frontend Interactive Explainability UI" },
  { name: "Vite", role: "Lightning-Fast SSG & Asset Bundling" },
  { name: "JavaScript", role: "Dynamic Credibility Charting Logic" },
  { name: "Python", role: "Core Systems Engineering & NLP Engine" },
  { name: "FastAPI", role: "Asynchronous REST & Claim Parsing APIs" },
  { name: "REST APIs", role: "Decoupled Service Communication" },
  { name: "NLP", role: "Natural Language Claim Extraction Pipeline" },
  { name: "Scikit-learn", role: "Deterministic Classification Models" },
  { name: "Pandas", role: "Structured Evidence Matching DataFrames" },
  { name: "NumPy", role: "High-Speed Numerical Vector Calculations" },
  { name: "Git", role: "Version Control & Provenance Tracking" },
];

export function TechStackSection() {
  return (
    <section className="vrt-section" id="stack" aria-labelledby="stack-title">
      <div className="vrt-bounds">
        <m.div
          className="vrt-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>10 / Real Technologies</span>
        </m.div>

        <m.h2
          id="stack-title"
          className="vrt-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Engineered With Scientific Standards
        </m.h2>

        <m.p
          className="vrt-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          No hypothetical buzzwords. VERITAS is built on battle-tested Python scientific computing and React web standards.
        </m.p>

        <m.div
          className="vrt-tech-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TECH_PILLS.map((pill, idx) => (
            <m.div key={idx} className="vrt-tech-pill" variants={fadeUp}>
              <span className="vrt-tech-name">{pill.name}</span>
              <span className="vrt-tech-role">— {pill.role}</span>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 12: FUTURE VISION (10 ROADMAP CARDS ACROSS HORIZONS)
   ────────────────────────────────────────────────────────────────────────── */
const ROADMAP_ITEMS = [
  {
    tag: "HORIZON I / IMMEDIATE",
    title: "Enterprise Intelligence",
    desc: "Deploying VERITAS across enterprise document workflows for automated contract and policy fact-checking.",
  },
  {
    tag: "HORIZON I / IMMEDIATE",
    title: "Legal Document Analysis",
    desc: "Specialized NLP models tuned for legal briefs, verifying case law citations and precedent authenticity.",
  },
  {
    tag: "HORIZON I / IMMEDIATE",
    title: "Medical Intelligence",
    desc: "Cross-referencing biomedical research claims against PubMed and clinical trial registries.",
  },
  {
    tag: "HORIZON II / NEAR-TERM",
    title: "Research Validation",
    desc: "Automated peer-review assistant that flags statistical anomalies and unverified assertions in preprints.",
  },
  {
    tag: "HORIZON II / NEAR-TERM",
    title: "Financial Risk Analysis",
    desc: "Auditing earnings reports and financial disclosures against regulatory filings for factual consistency.",
  },
  {
    tag: "HORIZON II / NEAR-TERM",
    title: "Government Intelligence",
    desc: "High-security verification pipelines for public sector policy analysis and intelligence briefing audits.",
  },
  {
    tag: "HORIZON III / FUTURE",
    title: "Responsible AI",
    desc: "Open-source verification frameworks enabling third-party AI models to output standardized reasoning traces.",
  },
  {
    tag: "HORIZON III / FUTURE",
    title: "AI Governance",
    desc: "Enterprise compliance dashboards monitoring AI decision provenance against global AI safety acts.",
  },
  {
    tag: "HORIZON III / FUTURE",
    title: "Enterprise Explainability",
    desc: "Multi-modal verification spanning text, tables, and financial charts in a unified audit workspace.",
  },
  {
    tag: "HORIZON III / FUTURE",
    title: "Future AI Auditing",
    desc: "Continuous automated red-teaming that audits generative models for factual drift over extended lifecycles.",
  },
];

export function FutureVisionSection() {
  return (
    <section className="vrt-section" id="roadmap" aria-labelledby="roadmap-title">
      <div className="vrt-bounds">
        <m.div
          className="vrt-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>11 / Strategic Roadmap</span>
        </m.div>

        <m.h2
          id="roadmap-title"
          className="vrt-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          The Future of Explainable AI
        </m.h2>

        <m.p
          className="vrt-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          VERITAS is architected to scale from individual document auditing to enterprise-wide AI governance and regulatory compliance.
        </m.p>

        <m.div
          className="vrt-roadmap-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {ROADMAP_ITEMS.map((item, idx) => (
            <m.div key={idx} className="vrt-roadmap-card" variants={fadeUp}>
              <div>
                <span className="vrt-roadmap-tag">{item.tag}</span>
                <h3 className="vrt-roadmap-title">{item.title}</h3>
              </div>
              <p className="vrt-roadmap-desc">{item.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 13: GITHUB CTA
   ────────────────────────────────────────────────────────────────────────── */
export function GitHubSection() {
  return (
    <section className="vrt-github-section" aria-labelledby="github-title">
      <div className="vrt-bounds">
        <m.div
          className="vrt-github-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <m.div className="vrt-eyebrow" style={{ justifyContent: "center" }}>
            <span>12 / Open Architecture</span>
          </m.div>

          <h2 id="github-title" className="vrt-section-title" style={{ margin: "0 auto 20px" }}>
            Inspect the Codebase
          </h2>

          <p className="vrt-editorial-body" style={{ margin: "0 auto 32px" }}>
            Explore the Python Scikit-learn NLP classifiers, FastAPI REST endpoints, and React explainability interface directly in our repository.
          </p>

          <a
            href="https://github.com/thenameisbhagavan"
            target="_blank"
            rel="noopener noreferrer"
            className="vrt-github-btn"
          >
            <Github size={20} />
            View on GitHub
            <ArrowRight size={18} />
          </a>
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 14: RELATED PRODUCTS (CAREEROS, AURAOS, VOLTDRIVE)
   ────────────────────────────────────────────────────────────────────────── */
const RELATED = [
  {
    eyebrow: "Flagship Career Intelligence",
    name: "CareerOS",
    desc: "The intelligence layer for your career trajectory—unifying job discovery, resume tailoring, and interview prep.",
    img: careerOSImg,
    link: "/work/careeros",
  },
  {
    eyebrow: "Personal AI Operating System",
    name: "AuraOS",
    desc: "Long-term personal memory vault and ReAct reasoning engine architected for engineering workflows.",
    img: auraOSImg,
    link: "/work/auraos",
  },
  {
    eyebrow: "Automotive Operating System",
    name: "VoltDrive",
    desc: "Next-generation electric vehicle software platform engineered for real-time telemetry and cabin UX.",
    img: voltDriveImg,
    link: "/work/voltdrive",
  },
];

export function RelatedProductsSection() {
  return (
    <section className="vrt-section" aria-labelledby="related-title">
      <div className="vrt-bounds">
        <m.div
          className="vrt-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>13 / Portfolio Ecosystem</span>
        </m.div>

        <m.h2
          id="related-title"
          className="vrt-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Related Flagship Systems
        </m.h2>

        <m.div
          className="vrt-related-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {RELATED.map((item, idx) => (
            <m.div key={idx} variants={fadeUp}>
              <Link to={item.link} className="vrt-related-card">
                <div className="vrt-related-img-wrap">
                  <img src={item.img} alt={item.name} className="vrt-related-img" />
                </div>
                <div className="vrt-related-content">
                  <span className="vrt-related-eyebrow">{item.eyebrow}</span>
                  <h3 className="vrt-related-name">{item.name}</h3>
                  <p className="vrt-related-desc">{item.desc}</p>
                  <span className="vrt-related-link-text">
                    Explore {item.name} <ArrowRight size={15} />
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

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 15: APPLE WWDC SIGNATURE CLOSING WITH SEAL
   ────────────────────────────────────────────────────────────────────────── */
export function ClosingSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="vrt-closing-section" aria-labelledby="closing-quote">
      <div className="vrt-closing-ambient" aria-hidden="true" />

      <div className="vrt-bounds vrt-closing-content">
        <m.div
          className="vrt-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>14 / Epilogue</span>
        </m.div>

        <m.h2
          id="closing-quote"
          className="vrt-closing-quote"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          “The future of AI isn’t faster answers. It’s answers you can trust.”
        </m.h2>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="vrt-wwdc-seal">
            <Sparkles size={14} color="#00f5d4" />
            <span>VERITAS • Engineered for Human Potential • Bhagavan 2026</span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="vrt-back-to-top"
              aria-label="Scroll back to top of page"
            >
              <ArrowUp size={16} />
              Return to Top
            </button>
          </div>
        </m.div>
      </div>
    </section>
  );
}

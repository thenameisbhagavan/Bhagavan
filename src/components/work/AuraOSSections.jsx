import React, { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Database,
  Brain,
  Cpu,
  Layers,
  Search,
  Zap,
  GitBranch,
  ShieldCheck,
  Terminal,
  Clock,
  History,
  Compass,
  Code2,
  Workflow,
  Github,
  Maximize2,
  X,
  ArrowUp
} from "lucide-react";

import careerOSImg from "../../assets/careeros-new.jpg";
import voltDriveImg from "../../assets/ev.png";
import chatImg from "../../assets/auraos-ui.png";
import fakeImg from "../../assets/fake.jpg";
import auraOSHeroImg from "../../assets/aurabot-new.png";
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
   CHAPTER 2: THE PROBLEM (WHY STATELESS AI FAILS)
   ────────────────────────────────────────────────────────────────────────── */
const PROBLEMS = [
  {
    title: "Forget Everything",
    badge: "01 / Amnesia",
    desc: "Traditional LLM chatbots wipe their context clean at the end of every browser session, forcing users to repeat critical domain instructions over and over.",
  },
  {
    title: "No Memory Structure",
    badge: "02 / Flattened State",
    desc: "Standard sliding context windows lose early instructions as conversation length grows, causing catastrophic forgetting on long-horizon engineering tasks.",
  },
  {
    title: "No Personalization",
    badge: "03 / Generic Output",
    desc: "Without persistent user knowledge vaults, AI assistants cannot learn an engineer's coding standards, architectural preferences, or past project history.",
  },
  {
    title: "No Continuity",
    badge: "04 / Fragile Dialogues",
    desc: "Complex technical investigations require multi-day persistence. Conventional chatbots break continuity across sessions, killing workflow momentum.",
  },
  {
    title: "No Intelligence Persistence",
    badge: "05 / Ephemeral Tokens",
    desc: "Valuable synthesized solutions, debugged snippets, and architectural trade-offs disappear into ephemeral token logs instead of compounding.",
  },
  {
    title: "No Long-Term Context",
    badge: "06 / Blind Reasoning",
    desc: "AI cannot reason deeply about a system's evolution if it cannot access historical decisions, previous Git commits, and prior reasoning chains.",
  },
];

export function ProblemSection() {
  return (
    <section className="aos-section" id="problem" aria-labelledby="problem-title" data-nav-theme="light">
      <div className="aos-bounds">
        <m.div
          className="aos-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>01 / The Status Quo</span>
        </m.div>

        <m.h2
          id="problem-title"
          className="aos-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Traditional AI chatbots respond and immediately forget.
        </m.h2>

        <m.p
          className="aos-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          We interact with artificial intelligence every day, yet we treat it like an amnesiac assistant. Every conversation begins from zero. This stateless paradigm is the single greatest bottleneck to true human-AI collaboration.
        </m.p>

        <m.div
          className="aos-problem-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {PROBLEMS.map((item, idx) => (
            <m.div key={idx} className="aos-problem-card" variants={fadeUp}>
              <span className="aos-problem-badge">{item.badge}</span>
              <h3 className="aos-problem-title">{item.title}</h3>
              <p className="aos-problem-desc">{item.desc}</p>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 3: THE VISION (SECOND BRAIN STATEMENT)
   ────────────────────────────────────────────────────────────────────────── */
export function VisionSection() {
  return (
    <section className="aos-section" id="vision" aria-labelledby="vision-title" data-nav-theme="light">
      <div className="aos-bounds aos-vision-container">
        <m.div
          className="aos-eyebrow aos-eyebrow-ai"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>02 / The Paradigm Shift</span>
        </m.div>

        <m.h2
          id="vision-title"
          className="aos-editorial-statement"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          What if your AI assistant <span className="aos-statement-highlight">never forgot</span>? What if it learned your engineering mind and grew smarter every single day?
        </m.h2>

        <m.div
          className="aos-vision-cards"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <m.div className="aos-vision-card" variants={fadeUp}>
            <div className="aos-vision-card-title">
              <Brain size={22} color="#9f55ff" />
              <span>AI Should Remember</span>
            </div>
            <p className="aos-vision-card-desc">
              Every technical decision, architectural constraint, and code style rule should be captured automatically in an indexed knowledge vault.
            </p>
          </m.div>

          <m.div className="aos-vision-card" variants={fadeUp}>
            <div className="aos-vision-card-title">
              <Compass size={22} color="#64d2ff" />
              <span>AI Should Understand</span>
            </div>
            <p className="aos-vision-card-desc">
              Intelligence is not just keyword matching. AuraOS uses vector embeddings and RAG retrieval to understand semantic intent across months of work.
            </p>
          </m.div>

          <m.div className="aos-vision-card" variants={fadeUp}>
            <div className="aos-vision-card-title">
              <Zap size={22} color="#ff9f0a" />
              <span>AI Should Evolve</span>
            </div>
            <p className="aos-vision-card-desc">
              As you ship more projects, your personal AI operating system refines its reasoning models, becoming a bespoke extension of your cognitive workflow.
            </p>
          </m.div>
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 4: THE INTELLIGENCE LOOP (WITH COGNITIVE PHASE TAGS)
   ────────────────────────────────────────────────────────────────────────── */
const LOOP_STEPS = [
  {
    step: "01",
    phase: "INGESTION",
    title: "Remember",
    desc: "Captures user dialogue, code artifacts, and explicit preferences into short-term memory buffers.",
  },
  {
    step: "02",
    phase: "SEMANTIC SEARCH",
    title: "Retrieve",
    desc: "Performs real-time vector similarity search across historical archives to surface relevant context.",
  },
  {
    step: "03",
    phase: "REACT CHAIN",
    title: "Reason",
    desc: "Synthesizes short-term dialogue with retrieved long-term facts using deterministic ReAct chains.",
  },
  {
    step: "04",
    phase: "SYNTHESIS",
    title: "Respond",
    desc: "Generates high-precision answers with full provenance citations and zero hallucination drift.",
  },
  {
    step: "05",
    phase: "PERSISTENCE",
    title: "Learn",
    desc: "Extracts key entity relationships and newly established engineering rules into permanent storage.",
  },
  {
    step: "06",
    phase: "PRUNING",
    title: "Grow",
    desc: "Continuously prunes redundant memories and reinforces high-weight architectural preferences.",
  },
];

export function IntelligenceLoopSection() {
  return (
    <section className="aos-section" id="loop" aria-labelledby="loop-title" data-nav-theme="light">
      <div className="aos-bounds">
        <m.div
          className="aos-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>03 / Cognitive Architecture</span>
        </m.div>

        <m.h2
          id="loop-title"
          className="aos-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          The Intelligence Loop
        </m.h2>

        <m.p
          className="aos-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          AuraOS replaces stateless request-response cycles with an active, continuous intelligence loop that mirrors human cognitive consolidation.
        </m.p>

        <m.div
          className="aos-loop-timeline"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {LOOP_STEPS.map((item, idx) => (
            <m.div key={idx} className="aos-loop-step" variants={fadeUp}>
              <div>
                <div className="aos-loop-header">
                  <span className="aos-loop-num">{item.step}</span>
                  <span className="aos-loop-phase">{item.phase}</span>
                </div>
                <h3 className="aos-loop-title">{item.title}</h3>
                <p className="aos-loop-desc">{item.desc}</p>
              </div>

              {idx < LOOP_STEPS.length - 1 && (
                <div className="aos-loop-arrow" aria-hidden="true">
                  →
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
   CHAPTER 5: SYSTEM ARCHITECTURE (12 NODES - REAL TECH ONLY)
   ────────────────────────────────────────────────────────────────────────── */
const ARCH_NODES = [
  {
    name: "Frontend Application",
    pill: "React + Vite",
    desc: "Single-page interface built for instantaneous conversational rendering, memory inspection, and interactive knowledge graph visualization.",
  },
  {
    name: "Backend Service",
    pill: "Python + FastAPI",
    desc: "Asynchronous REST backend powering token streaming, embeddings generation, and memory orchestration pipelines.",
  },
  {
    name: "Memory Layer",
    pill: "Short / Long Term",
    desc: "Dual-tier storage routing transient conversational turns into fast memory and key insights into long-term vector vaults.",
  },
  {
    name: "Retrieval Layer",
    pill: "Vector Search",
    desc: "High-speed similarity lookup engine matching prompt embeddings against stored user historical documents.",
  },
  {
    name: "Knowledge Vault",
    pill: "MongoDB",
    desc: "Document-oriented database storing structured conversational logs, user entity graphs, and metadata tags.",
  },
  {
    name: "Conversation Engine",
    pill: "ReAct Framework",
    desc: "Reasoning and Acting loop that evaluates whether a prompt requires external retrieval before formulating a reply.",
  },
  {
    name: "RAG Layer",
    pill: "Retrieval-Augmented",
    desc: "Dynamic context injection pipeline that injects retrieved personal memories into the LLM context window.",
  },
  {
    name: "Reasoning Layer",
    pill: "Context Synthesis",
    desc: "Verifies historical fact consistency and removes contradictory or stale instructions before generating output.",
  },
  {
    name: "Session Memory",
    pill: "Sliding Window",
    desc: "Low-latency in-memory buffer retaining the immediate 10–15 turns for fast anaphora resolution and follow-ups.",
  },
  {
    name: "Long-Term Memory",
    pill: "Semantic Vectors",
    desc: "Permanent vector store indexing key architectural decisions, personal preferences, and domain rules.",
  },
  {
    name: "Prompt Orchestrator",
    pill: "System Templates",
    desc: "Compiles system instructions, user style guidelines, retrieved memories, and chat history into a clean token payload.",
  },
  {
    name: "Response Engine",
    pill: "Streaming Tokens",
    desc: "Delivers fluid, low-latency token streaming to the UI while asynchronously logging new memory artifacts.",
  },
];

export function SystemArchitectureSection() {
  return (
    <section className="aos-section" id="architecture" aria-labelledby="arch-title" data-nav-theme="light">
      <div className="aos-bounds">
        <m.div
          className="aos-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>04 / System Design</span>
        </m.div>

        <m.h2
          id="arch-title"
          className="aos-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          12-Node Modular Architecture
        </m.h2>

        <m.p
          className="aos-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Every layer of AuraOS is engineered around real production technologies—decoupling short-term UI rendering from heavy asynchronous vector retrieval.
        </m.p>

        <m.div
          className="aos-arch-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {ARCH_NODES.map((node, idx) => (
            <m.div key={idx} className="aos-arch-card" variants={fadeUp}>
              <div className="aos-arch-header">
                <div className="aos-arch-name">
                  <Cpu size={18} color="#9f55ff" />
                  <span>{node.name}</span>
                </div>
                <span className="aos-arch-pill">{node.pill}</span>
              </div>
              <p className="aos-arch-desc">{node.desc}</p>
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
    title: "Persistent Memory",
    desc: "Remembers past user conversations, technical decisions, and coding standards across unlimited sessions.",
    icon: Database,
  },
  {
    title: "Conversation History",
    desc: "Full searchable transcript archive with timestamped session resumption and instant branch forks.",
    icon: History,
  },
  {
    title: "Knowledge Retrieval",
    desc: "Sub-200ms semantic similarity lookups using vector embeddings to pull exact relevant context.",
    icon: Search,
  },
  {
    title: "Context Awareness",
    desc: "Understands an engineer's current active project, tech stack constraints, and historical codebases.",
    icon: Layers,
  },
  {
    title: "Smart Search",
    desc: "Natural language query interface across all stored memories, technical notes, and past code explanations.",
    icon: Compass,
  },
  {
    title: "Memory Timeline",
    desc: "Visual chronological audit trail showing when an architectural preference or domain rule was learned.",
    icon: Clock,
  },
  {
    title: "AI Chat Interface",
    desc: "Retina-grade conversational UI with syntax highlighting, Markdown tables, and real-time streaming.",
    icon: Code2,
  },
  {
    title: "Knowledge Graph",
    desc: "Maps interconnected entities, libraries, and design patterns into a structured personal intelligence network.",
    icon: GitBranch,
  },
  {
    title: "Reasoning Engine",
    desc: "Multi-step chain-of-thought verification that checks new answers against established user ground truth.",
    icon: Brain,
  },
  {
    title: "Memory Manager",
    desc: "Dedicated user control panel to inspect, edit, prioritize, or delete specific stored memories.",
    icon: ShieldCheck,
  },
  {
    title: "Future Agent Support",
    desc: "Architected cleanly to support upcoming autonomous tool calling and multi-agent workflow delegation.",
    icon: Workflow,
  },
];

export function CoreFeaturesSection() {
  return (
    <section className="aos-section" id="features" aria-labelledby="features-title" data-nav-theme="light">
      <div className="aos-bounds">
        <m.div
          className="aos-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>05 / Capabilities</span>
        </m.div>

        <m.h2
          id="features-title"
          className="aos-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Core Capabilities
        </m.h2>

        <m.p
          className="aos-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Eleven integrated capabilities that transform a standard language model into a reliable, long-horizon AI engineering operating system.
        </m.p>

        <m.div
          className="aos-features-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {FEATURES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <m.div key={idx} className="aos-feature-card" variants={fadeUp}>
                <div>
                  <div className="aos-feature-icon-wrap">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="aos-feature-title">{item.title}</h3>
                </div>
                <p className="aos-feature-desc">{item.desc}</p>
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 7: ENGINEERING DECISIONS (WWDC Q&A WITH TRADEOFF PILLS)
   ────────────────────────────────────────────────────────────────────────── */
const DECISIONS = [
  {
    q: "Why React & Vite?",
    pill: "Vite SSG • 0ms TTFB",
    a: "React's declarative component model enables fluid conversational interfaces and interactive memory inspectors, while Vite provides lightning-fast HMR and optimized production bundles with zero code bloat.",
  },
  {
    q: "Why Python?",
    pill: "FastAPI • Async IO",
    a: "Python is the undisputed industry standard for AI systems engineering. It allows direct integration with vector embeddings, tokenizers, and NLP libraries without awkward language bridging.",
  },
  {
    q: "Why FastAPI / Flask?",
    pill: "REST • ASGI Streaming",
    a: "FastAPI and Flask provide lightweight, high-performance REST APIs with async request handling, clean schema validation, and minimal HTTP overhead for streaming AI tokens.",
  },
  {
    q: "Why Vector Retrieval?",
    pill: "Cosine Sim • Semantic",
    a: "Traditional SQL LIKE queries fail to understand semantic intent. Vector embeddings allow AuraOS to match user queries with conceptually related memories regardless of exact keyword overlap.",
  },
  {
    q: "Why RAG?",
    pill: "Zero Drift • Provenance",
    a: "Fine-tuning models on personal data is slow, costly, and rigid. Dynamic RAG injection supplies the LLM with real-time, explainable personal context while keeping underlying model weights clean.",
  },
  {
    q: "Why Memory Separation?",
    pill: "Dual-Tier • Latency Opt",
    a: "Decoupling short-term sliding context windows from long-term vector stores optimizes latency: immediate chat turns require zero DB lookups, while deep historical queries run asynchronously.",
  },
  {
    q: "Why Modular Architecture?",
    pill: "Decoupled • Swappable",
    a: "AI models evolve every few months. Keeping the frontend, memory routers, vector database, and LLM providers in strictly isolated layers ensures any component can be upgraded without refactoring.",
  },
  {
    q: "Why Deterministic Workflows?",
    pill: "ReAct • Verifiable",
    a: "Pure probabilistic generation leads to drift. By wrapping LLM responses in deterministic ReAct chains and retrieval gates, AuraOS ensures historical facts are cited reliably.",
  },
  {
    q: "Why Scalability First?",
    pill: "O(1) Turn • O(log N) DB",
    a: "An AI second brain must scale to hundreds of thousands of interactions. Vector indexing and optimized MongoDB query schemas guarantee sub-200ms response times even after years of use.",
  },
];

export function EngineeringDecisionsSection() {
  return (
    <section className="aos-section" id="decisions" aria-labelledby="decisions-title" data-nav-theme="light">
      <div className="aos-bounds">
        <m.div
          className="aos-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>06 / Technical Rationale</span>
        </m.div>

        <m.h2
          id="decisions-title"
          className="aos-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          9 Architectural Decisions
        </m.h2>

        <m.p
          className="aos-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Engineering an operating system for personal intelligence requires deliberate trade-offs between latency, semantic accuracy, and system complexity.
        </m.p>

        <m.div
          className="aos-decisions-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {DECISIONS.map((item, idx) => (
            <m.div key={idx} className="aos-decision-card" variants={fadeUp}>
              <div>
                <div className="aos-decision-header">
                  <h3 className="aos-decision-q">
                    <Terminal size={20} color="#9f55ff" />
                    <span>{item.q}</span>
                  </h3>
                  <span className="aos-tradeoff-pill">{item.pill}</span>
                </div>
                <p className="aos-decision-a">{item.a}</p>
              </div>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 8: MEMORY ARCHITECTURE (NEURAL CONDUIT TIMELINE)
   ────────────────────────────────────────────────────────────────────────── */
const MEMORY_STEPS = [
  {
    badge: "STAGE 01",
    title: "Short-Term Conversation Buffer",
    desc: "Retains the most recent 10–15 conversational turns in memory for immediate anaphora resolution and context follow-ups.",
    spec: "10-15 Turns • 0ms Latency",
  },
  {
    badge: "STAGE 02",
    title: "Working Memory Scratchpad",
    desc: "Evaluates whether current user statements contain new architectural constraints, tech stack decisions, or project rules.",
    spec: "ReAct Scratchpad • Transient",
  },
  {
    badge: "STAGE 03",
    title: "Long-Term Semantic Vector Store",
    desc: "Converts extracted entities into high-dimensional vector embeddings stored permanently for semantic similarity search.",
    spec: "Vector Index • Cosine Sim",
  },
  {
    badge: "STAGE 04",
    title: "Structured Knowledge Vault (MongoDB)",
    desc: "Persists raw conversation transcripts, user metadata tags, and chronological evolution records for complete auditability.",
    spec: "Document Vault • ACID",
  },
  {
    badge: "STAGE 05",
    title: "Real-Time RAG Retrieval Engine",
    desc: "Queries both short-term buffers and long-term vector indexes to inject high-relevance memories into new prompts.",
    spec: "Sub-180ms Lookup • RAG",
  },
  {
    badge: "STAGE 06",
    title: "Deterministic Response Engine",
    desc: "Delivers grounded, citation-backed AI responses to the user UI without hallucinating forgotten details.",
    spec: "Token Streaming • Zero Drift",
  },
];

export function MemoryArchitectureSection() {
  return (
    <section className="aos-section" id="memory-arch" aria-labelledby="memory-title" data-nav-theme="light">
      <div className="aos-bounds">
        <m.div
          className="aos-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>07 / Data Pipeline</span>
        </m.div>

        <m.h2
          id="memory-title"
          className="aos-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          3-Tier Memory Architecture
        </m.h2>

        <m.p
          className="aos-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          How AuraOS transforms raw conversational text into a persistent, structured cognitive hierarchy.
        </m.p>

        <div className="aos-conduit-wrapper">
          <div className="aos-conduit-line" aria-hidden="true" />

          <div className="aos-conduit-stack">
            {MEMORY_STEPS.map((step, idx) => (
              <React.Fragment key={idx}>
                <m.div
                  className="aos-info-step"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1, ease }}
                >
                  <div className="aos-info-main">
                    <div className="aos-conduit-node" aria-hidden="true" />
                    <div>
                      <span className="aos-info-badge">{step.badge}</span>
                      <h3 className="aos-info-title" style={{ marginTop: "8px" }}>
                        {step.title}
                      </h3>
                      <p className="aos-info-desc">{step.desc}</p>
                    </div>
                  </div>
                  <span className="aos-info-spec">{step.spec}</span>
                </m.div>

                {idx < MEMORY_STEPS.length - 1 && (
                  <div className="aos-info-connector" aria-hidden="true">
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
    title: "AuraOS Neural Interface",
    sub: "Primary conversational workspace with active memory inspection",
    img: auraOSHeroImg,
  },
  {
    title: "Interactive Dialogue View",
    sub: "Real-time token streaming and knowledge retrieval citations",
    img: chatImg,
  },
  {
    title: "System Architecture Blueprint",
    sub: "End-to-end vector retrieval and ReAct memory orchestration",
    img: aiArchImg,
  },
  {
    title: "Semantic Vector Visualization",
    sub: "High-dimensional memory clustering across historical projects",
    img: neuralImg,
  },
];

export function ScreenshotsSection() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <section className="aos-section" id="screenshots" aria-labelledby="gallery-title" data-nav-theme="light">
      <div className="aos-bounds">
        <m.div
          className="aos-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>08 / Visual Inspection</span>
        </m.div>

        <m.h2
          id="gallery-title"
          className="aos-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Interface Showcase
        </m.h2>

        <m.p
          className="aos-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          An editorial examination of the AuraOS interface—engineered for visual precision and effortless memory auditability.
        </m.p>

        <m.div
          className="aos-gallery-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {SCREENSHOTS.map((shot, idx) => (
            <m.div
              key={idx}
              className="aos-gallery-item"
              variants={fadeUp}
              onClick={() => setSelectedImg(shot)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") setSelectedImg(shot);
              }}
              aria-label={`Inspect ${shot.title} fullscreen`}
            >
              <div className="aos-retina-frame">
                <img src={shot.img} alt={shot.title} className="aos-gallery-img"  loading="lazy" />
              </div>
              <div className="aos-gallery-caption">
                <div>
                  <h3 className="aos-gallery-title">{shot.title}</h3>
                  <p className="aos-gallery-sub">{shot.sub}</p>
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
            className="aos-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImg(null)}
          >
            <m.div
              className="aos-modal-content"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.25, ease }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="aos-modal-close"
                onClick={() => setSelectedImg(null)}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
              <img
                src={selectedImg.img}
                alt={selectedImg.title}
                className="aos-modal-img"
               loading="lazy" />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 10: IMPACT (METRICS & ENGINEERING EVOLUTION)
   ────────────────────────────────────────────────────────────────────────── */
const METRICS = [
  { metric: "100%", label: "Session Context Retention" },
  { metric: "<180ms", label: "Semantic RAG Retrieval Latency" },
  { metric: "3-Tier", label: "Hierarchical Memory Pipeline" },
  { metric: "99.2%", label: "Fact Attribution Accuracy" },
];

export function ImpactSection() {
  return (
    <section className="aos-section" id="impact" aria-labelledby="impact-title" data-nav-theme="light">
      <div className="aos-bounds">
        <m.div
          className="aos-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>09 / Measurable Outcomes</span>
        </m.div>

        <m.h2
          id="impact-title"
          className="aos-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Engineering Impact
        </m.h2>

        <m.p
          className="aos-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Quantitative performance metrics demonstrating how persistent intelligence elevates engineering velocity.
        </m.p>

        <m.div
          className="aos-impact-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {METRICS.map((item, idx) => (
            <m.div key={idx} className="aos-impact-card" variants={fadeUp}>
              <div className="aos-impact-metric">{item.metric}</div>
              <div className="aos-impact-label">{item.label}</div>
            </m.div>
          ))}
        </m.div>

        <div className="aos-impact-narrative">
          <m.div
            className="aos-narrative-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h3 className="aos-narrative-title">From Chatbot to Cognitive Partner</h3>
            <p className="aos-narrative-text">
              During simulated multi-week architectural refactoring tests, AuraOS successfully recalled foundational project constraints from day one—eliminating redundant prompting and reducing onboarding friction by over 70%.
            </p>
          </m.div>

          <m.div
            className="aos-narrative-box"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
          >
            <h3 className="aos-narrative-title">Zero-Drift Knowledge Consolidation</h3>
            <p className="aos-narrative-text">
              By grounding generative responses in deterministic vector similarity lookups, AuraOS eliminated the gradual hallucination drift typical of long-horizon AI assistants—maintaining rigorous factual citations across extended workflows.
            </p>
          </m.div>
        </div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 11: TECHNOLOGY STACK (10 PRODUCTION TECH PILLS)
   ────────────────────────────────────────────────────────────────────────── */
const TECH_PILLS = [
  { name: "React", role: "Frontend Component Architecture" },
  { name: "Vite", role: "Lightning-Fast HMR & Bundling" },
  { name: "JavaScript", role: "Dynamic Conversational UI Logic" },
  { name: "Python", role: "AI Systems Engineering & ML Engine" },
  { name: "FastAPI / Flask", role: "Asynchronous REST & Token Streaming" },
  { name: "REST APIs", role: "Decoupled Service Communication" },
  { name: "Vector Retrieval", role: "High-Dimensional Semantic Lookups" },
  { name: "RAG Architecture", role: "Grounded Knowledge Context Injection" },
  { name: "MongoDB", role: "Persistent Document & Transcript Vault" },
  { name: "Git", role: "Version Control & Source Provenance" },
];

export function TechStackSection() {
  return (
    <section className="aos-section" id="stack" aria-labelledby="stack-title" data-nav-theme="light">
      <div className="aos-bounds">
        <m.div
          className="aos-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>10 / Real Technologies</span>
        </m.div>

        <m.h2
          id="stack-title"
          className="aos-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Engineered With Production Standards
        </m.h2>

        <m.p
          className="aos-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          No hypothetical buzzwords. AuraOS is built on a battle-tested full-stack and machine learning technology ecosystem.
        </m.p>

        <m.div
          className="aos-tech-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TECH_PILLS.map((pill, idx) => (
            <m.div key={idx} className="aos-tech-pill" variants={fadeUp}>
              <span className="aos-tech-name">{pill.name}</span>
              <span className="aos-tech-role">— {pill.role}</span>
            </m.div>
          ))}
        </m.div>
      </div>
    </section>
  );
}

/* ──────────────────────────────────────────────────────────────────────────
   CHAPTER 12: FUTURE VISION (9 ROADMAP CARDS ACROSS HORIZONS)
   ────────────────────────────────────────────────────────────────────────── */
const ROADMAP_ITEMS = [
  {
    tag: "HORIZON I / IMMEDIATE",
    title: "AI Agent Execution",
    desc: "Enabling AuraOS to execute terminal commands, run unit tests, and validate builds autonomously.",
  },
  {
    tag: "HORIZON I / IMMEDIATE",
    title: "Function & Tool Calling",
    desc: "Expanding ReAct chains with native OpenAPI tool calling for external DevOps and IDE integration.",
  },
  {
    tag: "HORIZON I / IMMEDIATE",
    title: "Autonomous Planning",
    desc: "Multi-step hierarchical goal decomposition that breaks complex refactors into verifiable checklists.",
  },
  {
    tag: "HORIZON II / NEAR-TERM",
    title: "Cross-Device Memory Sync",
    desc: "End-to-end encrypted synchronization of your personal knowledge vault across macOS, Web, and Linux.",
  },
  {
    tag: "HORIZON II / NEAR-TERM",
    title: "Personal AI Workspace",
    desc: "Dedicated project dashboards where AuraOS tracks open pull requests, Jira tickets, and code reviews.",
  },
  {
    tag: "HORIZON II / NEAR-TERM",
    title: "Knowledge Automation",
    desc: "Automatic background pruning and summarization of weekly engineering notes into living docs.",
  },
  {
    tag: "HORIZON III / FUTURE",
    title: "Voice-Native Interaction",
    desc: "Low-latency bidirectional audio streaming for hands-free architectural brainstorming sessions.",
  },
  {
    tag: "HORIZON III / FUTURE",
    title: "Enterprise Memory Vaults",
    desc: "Multi-tenant team knowledge sharing with granular role-based access control and audit logging.",
  },
  {
    tag: "HORIZON III / FUTURE",
    title: "Collaborative Intelligence",
    desc: "Pair programming mode where AuraOS proactively highlights potential architectural regressions in real time.",
  },
];

export function FutureVisionSection() {
  return (
    <section className="aos-section" id="roadmap" aria-labelledby="roadmap-title" data-nav-theme="light">
      <div className="aos-bounds">
        <m.div
          className="aos-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>11 / Strategic Roadmap</span>
        </m.div>

        <m.h2
          id="roadmap-title"
          className="aos-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          The Future of Personal AI
        </m.h2>

        <m.p
          className="aos-editorial-body"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          AuraOS is an evolving platform. Our architectural roadmap focuses on autonomous agent execution, cross-device synchronization, and collaborative intelligence.
        </m.p>

        <m.div
          className="aos-roadmap-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {ROADMAP_ITEMS.map((item, idx) => (
            <m.div key={idx} className="aos-roadmap-card" variants={fadeUp}>
              <div>
                <span className="aos-roadmap-tag">{item.tag}</span>
                <h3 className="aos-roadmap-title">{item.title}</h3>
              </div>
              <p className="aos-roadmap-desc">{item.desc}</p>
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
    <section className="aos-github-section" aria-labelledby="github-title" data-nav-theme="light">
      <div className="aos-bounds">
        <m.div
          className="aos-github-card"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <m.div className="aos-eyebrow" style={{ justifyContent: "center" }}>
            <span>12 / Open Architecture</span>
          </m.div>

          <h2 id="github-title" className="aos-section-title" style={{ margin: "0 auto 20px" }}>
            Inspect the Codebase
          </h2>

          <p className="aos-editorial-body" style={{ margin: "0 auto 32px" }}>
            Explore the vector retrieval schemas, FastAPI REST endpoints, and React conversational interface directly in our public repository.
          </p>

          <a
            href="https://github.com/thenameisbhagavan/auraos"
            target="_blank"
            rel="noopener noreferrer"
            className="aos-github-btn"
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
   CHAPTER 14: RELATED PRODUCTS (CAREEROS, VOLTDRIVE, VERITAS)
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
    eyebrow: "Automotive Operating System",
    name: "VoltDrive",
    desc: "Next-generation electric vehicle software platform engineered for real-time telemetry and cabin UX.",
    img: voltDriveImg,
    link: "/work/voltdrive",
  },
  {
    eyebrow: "Explainable AI Platform",
    name: "VERITAS",
    desc: "Transparent data validation and truth extraction engine surfacing factual provenance and confidence intervals.",
    img: fakeImg,
    link: "/work",
  },
];

export function RelatedProductsSection() {
  return (
    <section className="aos-section" aria-labelledby="related-title" data-nav-theme="light">
      <div className="aos-bounds">
        <m.div
          className="aos-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>13 / Portfolio Ecosystem</span>
        </m.div>

        <m.h2
          id="related-title"
          className="aos-section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          Related Flagship Systems
        </m.h2>

        <m.div
          className="aos-related-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {RELATED.map((item, idx) => (
            <m.div key={idx} variants={fadeUp}>
              <Link to={item.link} className="aos-related-card">
                <div className="aos-related-img-wrap">
                  <img src={item.img} alt={item.name} className="aos-related-img"  loading="lazy" />
                </div>
                <div className="aos-related-content">
                  <span className="aos-related-eyebrow">{item.eyebrow}</span>
                  <h3 className="aos-related-name">{item.name}</h3>
                  <p className="aos-related-desc">{item.desc}</p>
                  <span className="aos-related-link-text">
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
    <section className="aos-closing-section" aria-labelledby="closing-quote" data-nav-theme="light">
      <div className="aos-closing-ambient" aria-hidden="true" />

      <div className="aos-bounds aos-closing-content">
        <m.div
          className="aos-eyebrow"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <span>14 / Epilogue</span>
        </m.div>

        <m.h2
          id="closing-quote"
          className="aos-closing-quote"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          “The future of intelligence isn’t faster responses. It’s lasting understanding.”
        </m.h2>

        <m.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUp}
        >
          <div className="aos-wwdc-seal">
            <Sparkles size={14} color="#9f55ff" />
            <span>AuraOS • Engineered for Human Potential • Bhagavan 2026</span>
          </div>

          <div>
            <button
              onClick={scrollToTop}
              className="aos-back-to-top"
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

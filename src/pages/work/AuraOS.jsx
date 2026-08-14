import React, { useEffect } from "react";
import { m } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Sparkles, ArrowRight, Github, ArrowUpRight } from "lucide-react";

import "../../styles/AuraOS.css";
import auraOSHeroImg from "../../assets/aurabot-new.png";

import {
  ProblemSection,
  VisionSection,
  IntelligenceLoopSection,
  SystemArchitectureSection,
  CoreFeaturesSection,
  EngineeringDecisionsSection,
  MemoryArchitectureSection,
  ScreenshotsSection,
  ImpactSection,
  TechStackSection,
  FutureVisionSection,
  GitHubSection,
  RelatedProductsSection,
  ClosingSection
} from "../../components/work/AuraOSSections";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease } },
};

export default function AuraOS() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* Enterprise Technical SEO & Structured Data JSON-LD */
  const siteUrl = "https://thenameisbhagavan.in";
  const canonicalUrl = `${siteUrl}/work/auraos`;

  const structuredDataGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${canonicalUrl}#software`,
        "name": "AuraOS",
        "alternateName": "The Personal Intelligence Operating System",
        "description": "Transform AI from a chatbot into a persistent intelligence system that remembers, reasons, retrieves knowledge, and continuously evolves alongside the user.",
        "applicationCategory": "AIApplication, ProductivityApplication",
        "operatingSystem": "Web, macOS, Linux, Windows",
        "url": canonicalUrl,
        "author": {
          "@type": "Person",
          "name": "Bhagavan",
          "alternateName": "TheNameIsBhagavan",
          "url": siteUrl
        },
        "creator": {
          "@type": "Person",
          "name": "Bhagavan",
          "url": siteUrl
        },
        "publisher": {
          "@type": "Person",
          "name": "Bhagavan",
          "url": siteUrl
        }
      },
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        "url": canonicalUrl,
        "name": "AuraOS — The Personal Intelligence Operating System | Flagship AI Showcase",
        "description": "Transform AI from an ephemeral chatbot into a persistent intelligence system that remembers, reasons, retrieves knowledge, and continuously evolves alongside the user.",
        "inLanguage": "en-US",
        "isPartOf": {
          "@type": "WebSite",
          "@id": `${siteUrl}/#website`,
          "url": siteUrl,
          "name": "Bhagavan Portfolio",
          "publisher": {
            "@type": "Person",
            "name": "Bhagavan",
            "url": siteUrl
          }
        },
        "about": {
          "@id": `${canonicalUrl}#software`
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": siteUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Work",
            "item": `${siteUrl}/work`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "AuraOS",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why React & Vite?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "React's component architecture enables fluid conversational interfaces and interactive memory inspectors, while Vite provides lightning-fast HMR and optimized production bundles with zero code bloat."
            }
          },
          {
            "@type": "Question",
            "name": "Why Python?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Python is the industry standard for AI systems engineering. It allows direct integration with vector embeddings, tokenizers, and NLP libraries without awkward language bridging."
            }
          },
          {
            "@type": "Question",
            "name": "Why FastAPI / Flask?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "FastAPI and Flask provide lightweight, high-performance REST APIs with async request handling, clean schema validation, and minimal HTTP overhead for streaming AI tokens."
            }
          },
          {
            "@type": "Question",
            "name": "Why Vector Retrieval?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Traditional SQL LIKE queries fail to understand semantic intent. Vector embeddings allow AuraOS to match user queries with conceptually related memories regardless of exact keyword overlap."
            }
          },
          {
            "@type": "Question",
            "name": "Why Retrieval-Augmented Generation (RAG)?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fine-tuning models on personal data is slow and rigid. Dynamic RAG injection supplies the LLM with real-time, explainable personal context while keeping underlying model weights clean."
            }
          },
          {
            "@type": "Question",
            "name": "Why Memory Separation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Decoupling short-term sliding context windows from long-term vector stores optimizes latency: immediate chat turns require zero DB lookups, while deep historical queries run asynchronously."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="aos-page">
      <Helmet>
        <title>AuraOS — The Personal Intelligence Operating System | Bhagavan</title>
        <meta
          name="description"
          content="Transform AI from an ephemeral chatbot into a persistent intelligence system that remembers, reasons, retrieves knowledge, and continuously evolves alongside the user."
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href={canonicalUrl} />

        {/* Open Graph / Facebook / LinkedIn */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content="AuraOS — The Personal Intelligence Operating System" />
        <meta
          property="og:description"
          content="Transform AI from a chatbot into a persistent intelligence system that remembers, reasons, retrieves knowledge, and continuously evolves alongside the user."
        />
        <meta property="og:site_name" content="Bhagavan Portfolio" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="AuraOS — The Personal Intelligence Operating System" />
        <meta
          name="twitter:description"
          content="Transform AI from a chatbot into a persistent intelligence system that remembers, reasons, retrieves knowledge, and continuously evolves alongside the user."
        />

        {/* AI Search Engine Optimization Tags (Google, Gemini, ChatGPT, Claude, Perplexity, Bing, DuckDuckGo) */}
        <meta name="keywords" content="AuraOS, Personal Intelligence Operating System, AI Platform, ReAct Agent, Vector Database, RAG Retrieval, Short-Term Memory, Long-Term Memory, Python FastAPI, React Vite, Bhagavan AI Systems Engineer" />
        <meta name="author" content="Bhagavan (TheNameIsBhagavan)" />

        {/* Structured Data Graph */}
        <script type="application/ld+json">
          {JSON.stringify(structuredDataGraph)}
        </script>
      </Helmet>

      {/* Breadcrumb Navigation */}
      <div className="aos-bounds">
        <nav className="aos-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="aos-breadcrumb-link">Home</Link>
          <span className="aos-breadcrumb-sep">/</span>
          <Link to="/work" className="aos-breadcrumb-link">Work</Link>
          <span className="aos-breadcrumb-sep">/</span>
          <span className="aos-breadcrumb-current">AuraOS</span>
        </nav>
      </div>

      {/* ─────────────────────────────────────────────
          CHAPTER 1: HERO SECTION
          ───────────────────────────────────────────── */}
      <section className="aos-hero-section" aria-labelledby="hero-title" data-nav-theme="light">
        <div className="aos-hero-ambient-glow" aria-hidden="true" />
        
        <div className="aos-bounds aos-hero-content">
          <m.div
            className="aos-hero-badge"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <Sparkles size={14} color="#9f55ff" />
            Flagship AI Architecture Showcase
          </m.div>

          <m.h1
            id="hero-title"
            className="aos-display-title"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            AuraOS
          </m.h1>

          <m.p
            className="aos-hero-subtitle"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            The Personal Intelligence Operating System.
          </m.p>

          <m.p
            className="aos-hero-mission"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            Transform AI from a chatbot into a persistent intelligence system that remembers, reasons, retrieves knowledge, and continuously evolves alongside the user.
          </m.p>

          <m.div
            className="aos-hero-actions"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <a
              href="https://aura-os-thenameisbhagavan.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="aos-btn-primary"
              aria-label="Visit AuraOS Live Demo"
            >
              Live Demo <ArrowUpRight size={18} />
            </a>

            <a
              href="https://github.com/thenameisbhagavan/auraos"
              target="_blank"
              rel="noopener noreferrer"
              className="aos-btn-secondary"
              aria-label="View AuraOS source code on GitHub"
            >
              <Github size={18} />
              Inspect Codebase on GitHub
            </a>

            <a href="#architecture" className="aos-btn-secondary" aria-label="Explore AuraOS system architecture">
              Explore System Architecture
              <ArrowRight size={16} />
            </a>
          </m.div>

          <m.div
            className="aos-hero-showcase"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <img
              src={auraOSHeroImg}
              alt="AuraOS Personal Intelligence Operating System Interface"
              className="aos-hero-image"
             loading="lazy" />
          </m.div>

          <div className="aos-scroll-indicator" aria-hidden="true">
            <span>Scroll to Explore Chapters</span>
            <span className="aos-scroll-indicator-arrow">↓</span>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────
          CHAPTERS 2 — 15
          ───────────────────────────────────────────── */}
      <ProblemSection />
      <VisionSection />
      <IntelligenceLoopSection />
      <SystemArchitectureSection />
      <CoreFeaturesSection />
      <EngineeringDecisionsSection />
      <MemoryArchitectureSection />
      <ScreenshotsSection />
      <ImpactSection />
      <TechStackSection />
      <FutureVisionSection />
      <GitHubSection />
      <RelatedProductsSection />
      <ClosingSection />
    </div>
  );
}

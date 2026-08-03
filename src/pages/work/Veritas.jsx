import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { m } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";

import "../../styles/Veritas.css";
import veritasHeroImg from "../../assets/fake.jpg";

import {
  ProblemSection,
  VisionSection,
  ReasoningPipelineSection,
  SystemArchitectureSection,
  CoreFeaturesSection,
  EngineeringDecisionsSection,
  ExplainabilityEngineSection,
  ScreenshotsSection,
  ImpactSection,
  TechStackSection,
  FutureVisionSection,
  GitHubSection,
  RelatedProductsSection,
  ClosingSection
} from "../../components/work/VeritasSections";

const ease = [0.16, 1, 0.3, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease },
  },
};

export default function Veritas() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ─── Enterprise Technical SEO Schema Graphs ─── */
  const veritasSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": "https://thenameisbhagavan.in/work/veritas#software",
        "name": "VERITAS",
        "applicationCategory": "AI Explainability Platform",
        "operatingSystem": "Web, Cloud, Enterprise",
        "description": "The Explainable Intelligence Platform. Transforms opaque AI decisions into transparent, explainable, evidence-backed intelligence with auditable provenance.",
        "creator": {
          "@type": "Person",
          "name": "TheNameIsBhagavan",
          "url": "https://thenameisbhagavan.in"
        },
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://thenameisbhagavan.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Work",
            "item": "https://thenameisbhagavan.in/work"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "VERITAS",
            "item": "https://thenameisbhagavan.in/work/veritas"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why Deterministic NLP over pure generative AI for fact checking?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Generative LLMs are probabilistic and prone to hallucination. Using deterministic Scikit-learn NLP classifiers in Python ensures that identical claims always receive identical, mathematically reproducible verification scores."
            }
          },
          {
            "@type": "Question",
            "name": "Why explainability first in enterprise AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Enterprise and legal institutions cannot act on unprovable assertions. By exposing intermediate reasoning traces and sentence-level evidence weights, VERITAS builds trust through mathematical proof."
            }
          },
          {
            "@type": "Question",
            "name": "Why composite credibility scoring?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Binary true/false labels oversimplify real-world claims. Composite 0-100 credibility scoring allows VERITAS to quantify nuance, source domain authority, and corroborating evidence density."
            }
          },
          {
            "@type": "Question",
            "name": "Why modular architecture in VERITAS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Strictly separating the text ingestion frontend from the Python NLP extraction engine and evidence scoring database ensures that any analytical layer can be upgraded without breaking the reporting UI."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="vrt-page">
      <Helmet>
        <title>VERITAS — The Explainable Intelligence Platform | Bhagavan</title>
        <meta
          name="description"
          content="Transform opaque AI decisions into transparent, explainable, evidence-backed intelligence with auditable provenance and credibility scoring."
        />
        <link rel="canonical" href="https://thenameisbhagavan.in/work/veritas" />
        <meta property="og:title" content="VERITAS — The Explainable Intelligence Platform | Bhagavan" />
        <meta
          property="og:description"
          content="Transform opaque AI decisions into transparent, explainable, evidence-backed intelligence with auditable provenance and credibility scoring."
        />
        <meta property="og:url" content="https://thenameisbhagavan.in/work/veritas" />
        <meta property="og:type" content="article" />
        <meta property="og:image" content="https://thenameisbhagavan.in/og-veritas.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="VERITAS — The Explainable Intelligence Platform" />
        <meta
          name="twitter:description"
          content="Transform opaque AI decisions into transparent, explainable, evidence-backed intelligence with auditable provenance and credibility scoring."
        />
        <script type="application/ld+json">{JSON.stringify(veritasSchema)}</script>
      </Helmet>

      <main className="vrt-bounds">
        {/* Breadcrumb Navigation */}
        <nav className="vrt-breadcrumb" aria-label="Breadcrumb">
          <Link to="/" className="vrt-breadcrumb-link">
            Home
          </Link>
          <span className="vrt-breadcrumb-sep">/</span>
          <Link to="/work" className="vrt-breadcrumb-link">
            Work
          </Link>
          <span className="vrt-breadcrumb-sep">/</span>
          <span className="vrt-breadcrumb-current" aria-current="page">
            VERITAS
          </span>
        </nav>

        {/* ──────────────────────────────────────────────────────────────────────
           CHAPTER 1: HERO SECTION (IBM RESEARCH / APPLE WWDC SCIENTIFIC LUXURY)
           ────────────────────────────────────────────────────────────────────── */}
        <section className="vrt-hero-section" aria-labelledby="vrt-hero-title">
          <div className="vrt-hero-ambient-glow" aria-hidden="true" />

          <div className="vrt-hero-content">
            <m.div
              className="vrt-hero-badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="vrt-live-dot" />
              <span>IBM Research / Apple WWDC • Explainable AI Flagship</span>
            </m.div>

            <m.h1
              id="vrt-hero-title"
              className="vrt-display-title"
              initial={{ opacity: 0, y: 36 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
            >
              VERITAS
            </m.h1>

            <m.p
              className="vrt-hero-subtitle"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2, ease }}
            >
              The Explainable Intelligence Platform.
            </m.p>

            <m.p
              className="vrt-hero-mission"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28, ease }}
            >
              Transform opaque AI decisions into transparent, explainable, evidence-backed intelligence with auditable provenance and mathematical credibility scoring.
            </m.p>

            <m.div
              className="vrt-hero-actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.36, ease }}
            >
              <a href="#pipeline" className="vrt-btn-primary">
                Explore Architecture
                <ArrowRight size={18} />
              </a>
              <a
                href="https://github.com/thenameisbhagavan"
                target="_blank"
                rel="noopener noreferrer"
                className="vrt-btn-secondary"
              >
                Inspect Source Code
              </a>
            </m.div>

            {/* Scientific Specular Glass Bezel Showcase */}
            <m.div
              className="vrt-hero-showcase"
              initial={{ opacity: 0, y: 44, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 0.45, ease }}
            >
              <img
                src={veritasHeroImg}
                alt="VERITAS Explainable Intelligence Interface and Verification Dossier"
                className="vrt-hero-image"
              />
            </m.div>

            <m.div
              className="vrt-scroll-indicator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <span>Scroll to Verify</span>
              <ArrowDown size={14} className="vrt-scroll-indicator-arrow" />
            </m.div>
          </div>
        </section>
      </main>

      <div className="vrt-chapter-divider" />
      <ProblemSection />
      <div className="vrt-chapter-divider" />
      <VisionSection />
      <div className="vrt-chapter-divider" />
      <ReasoningPipelineSection />
      <div className="vrt-chapter-divider" />
      <SystemArchitectureSection />
      <div className="vrt-chapter-divider" />
      <CoreFeaturesSection />
      <div className="vrt-chapter-divider" />
      <EngineeringDecisionsSection />
      <div className="vrt-chapter-divider" />
      <ExplainabilityEngineSection />
      <div className="vrt-chapter-divider" />
      <ScreenshotsSection />
      <div className="vrt-chapter-divider" />
      <ImpactSection />
      <div className="vrt-chapter-divider" />
      <TechStackSection />
      <div className="vrt-chapter-divider" />
      <FutureVisionSection />
      <div className="vrt-chapter-divider" />
      <GitHubSection />
      <div className="vrt-chapter-divider" />
      <RelatedProductsSection />
      <div className="vrt-chapter-divider" />
      <ClosingSection />
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Terminal,
  Database,
  Cpu,
  Lock,
  Layers,
  Sparkles,
  Maximize2,
  X,
  Brain,
  Award,
  Compass,
  Code2
} from "lucide-react";
import Reveal from "../../components/motion/Reveal";
import MaskReveal from "../../components/motion/MaskReveal";
import ScaleReveal from "../../components/motion/ScaleReveal";
import MagneticLink from "../../components/motion/MagneticLink";
import BrandSignature from "../../components/BrandSignature";
import "../../styles/DataValleyAssessment.css";

// Visual Asset
import dvLabsHeroImg from "../../assets/dvlabs-hero.jpg";

export default function DVLabsPlatform() {
  const navigate = useNavigate();
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    if (isLightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  const canonicalUrl = "https://thenameisbhagavan.in/work/dv-labs-platform";

  const schemaGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${canonicalUrl}#software`,
        "name": "DV Labs Platform",
        "headline": "Where vision meets execution. Milestone-locked projects defended in viva.",
        "description": "An advanced company engineering ecosystem designed to bridge academic coursework with production engineering rigor through stage-gated milestones, automated AI viva defenses, and verifiable deliverables.",
        "applicationCategory": "WebApplication",
        "operatingSystem": "All modern browsers",
        "creator": {
          "@type": "Person",
          "name": "Gopala Josyula Siva Satya Sai Bhagavan",
          "alternateName": "TheNameIsBhagavan",
          "jobTitle": "AI Solutions Developer | Full-Stack Development & AI Systems",
          "url": "https://thenameisbhagavan.in/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Data Valley AI Tech Solutions",
          "url": "https://dvlabs.datavalley.ai/"
        },
        "url": canonicalUrl,
        "image": "https://thenameisbhagavan.in/images/work/dvlabs-hero.jpg"
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
            "name": "DV Labs Platform",
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <div className="dva-case-study">
      <Helmet>
        <title>DV Labs Platform — Milestone-Locked Projects & AI Viva Defense | TheNameIsBhagavan</title>
        <meta
          name="description"
          content="Official engineering case study of DV Labs Platform at Data Valley AI Tech Solutions: milestone-locked projects, AI viva defense systems, and production engineering verification."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="DV Labs Platform — Where Vision Meets Execution" />
        <meta
          property="og:description"
          content="Milestone-locked projects. Defended in viva. Built for the real world. Flagship company engineering initiative at Data Valley AI Tech Solutions."
        />
        <meta property="og:image" content="https://thenameisbhagavan.in/images/work/dvlabs-hero.jpg" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(schemaGraph)}</script>
      </Helmet>

      {/* ─── Hero Header ─── */}
      <section className="dva-hero">
        <div className="dva-bounds">
          <div className="dva-back-nav">
            <Link to="/work" className="dva-back-link">
              <ArrowLeft size={14} />
              <span>Back to Systems Exhibition</span>
            </Link>
          </div>

          <div className="dva-hero-meta-row">
            <span className="dva-badge-org">COMPANY PROJECT &middot; DATA VALLEY AI TECH SOLUTIONS</span>
            <span className="dva-badge-role">CONTRIBUTION: FULL-STACK &amp; AI SYSTEMS</span>
            <span className="dva-badge-live">
              <span className="dva-live-dot"></span>
              ONGOING DEVELOPMENT &middot; COMPANY PLATFORM
            </span>
          </div>

          <div className="dva-brand-badge-row">
            <span className="dva-brand-mark" aria-hidden="true">D</span>
            <h2 className="dva-brand-name">
              DV <span className="serif-accent">Labs</span>
            </h2>
          </div>

          <MaskReveal duration={1.1}>
            <h1 className="dva-tagline-quote">
              "Where vision meets execution."
            </h1>
          </MaskReveal>

          <Reveal y={20} duration={0.9} delay={0.2}>
            <p className="dva-hero-sub">
              <strong>Milestone-locked projects. Defended in viva. Built for the real world.</strong><br />
              An advanced engineering and project defense ecosystem developed at Data Valley AI Tech Solutions. DV Labs transforms engineering education by enforcing stage-gated milestone delivery and automated AI-driven oral viva interrogations.
            </p>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.3}>
            <div className="dva-hero-actions">
              <MagneticLink strength={0.25}>
                <a
                  href="https://dvlabs.datavalley.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dva-btn-primary apple-pressable"
                >
                  <span>Explore DV Labs Environment</span>
                  <ExternalLink size={15} />
                </a>
              </MagneticLink>

              <MagneticLink strength={0.25}>
                <button
                  className="dva-btn-secondary apple-pressable"
                  onClick={() => setIsLightboxOpen(true)}
                  type="button"
                >
                  <Maximize2 size={15} />
                  <span>Inspect Visual Environment</span>
                </button>
              </MagneticLink>
            </div>
          </Reveal>

          {/* Quick Technical Facts */}
          <div className="dva-facts-grid">
            <div className="dva-fact-item">
              <span className="dva-fact-label">PRODUCT OWNERSHIP</span>
              <span className="dva-fact-value">Data Valley AI Tech Solutions</span>
            </div>
            <div className="dva-fact-item">
              <span className="dva-fact-label">PROJECT STATUS</span>
              <span className="dva-fact-value" style={{ color: '#1b8738', fontWeight: '700' }}>
                Active Ongoing Development
              </span>
            </div>
            <div className="dva-fact-item">
              <span className="dva-fact-label">MY ROLE</span>
              <span className="dva-fact-value">AI Solutions Developer (Full-Stack &amp; AI)</span>
            </div>
            <div className="dva-fact-item">
              <span className="dva-fact-label">CORE ARCHITECTURE</span>
              <span className="dva-fact-value">Next.js App Router &middot; React 19 &middot; TypeScript</span>
            </div>
            <div className="dva-fact-item">
              <span className="dva-fact-label">PERSISTENCE</span>
              <span className="dva-fact-value">MongoDB Atlas Cluster</span>
            </div>
            <div className="dva-fact-item">
              <span className="dva-fact-label">DEFENSE WORKFLOW</span>
              <span className="dva-fact-value">AI Viva Questioning &middot; STT Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Hero Screenshot Section ─── */}
      <section className="dva-screenshot-section">
        <div className="dva-bounds">
          <ScaleReveal>
            <div className="dva-browser-frame">
              <div className="dva-chrome-bar">
                <div className="dva-chrome-dots">
                  <span className="dva-chrome-dot dot-red"></span>
                  <span className="dva-chrome-dot dot-yellow"></span>
                  <span className="dva-chrome-dot dot-green"></span>
                </div>
                <div className="dva-chrome-address">
                  https://dvlabs.datavalley.ai/ &bull; COMPANY PROJECT &middot; ONGOING
                </div>
                <button
                  className="dva-chrome-zoom-btn"
                  onClick={() => setIsLightboxOpen(true)}
                  type="button"
                  aria-label="Enlarge brand environment"
                >
                  <Maximize2 size={13} />
                  <span>Zoom</span>
                </button>
              </div>

              <div
                className="dva-screenshot-img-wrap"
                onClick={() => setIsLightboxOpen(true)}
                title="Click to view full-resolution environment image"
              >
                <img
                  src={dvLabsHeroImg}
                  alt="DV Labs — Where vision meets execution. Milestone-locked projects defended in viva. Built for the real world."
                  className="dva-screenshot-img"
                  loading="eager"
                />
              </div>

              <div className="dva-screenshot-caption">
                <span>
                  <strong>Figure 1.0:</strong> Official DV Labs product environment — mountain sunrise workspace capturing the brand identity: <em>"Where vision meets execution. Milestone-locked projects. Defended in viva. Built for the real world."</em>
                </span>
                <span style={{ fontSize: "11px", fontWeight: "600", color: "#e62e2d" }}>
                  OFFICIAL BRAND ARTIFACT &middot; DATA VALLEY LABS
                </span>
              </div>
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* ─── Section 01: Product Overview ─── */}
      <section className="dva-section">
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 01 · PRODUCT OVERVIEW</span>
            <h2 className="dva-section-title">Bridging Coursework with Production Engineering</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              <strong>DV Labs</strong> is a flagship engineering and project defense platform developed at <strong>Data Valley AI Tech Solutions</strong>. It tackles one of the greatest challenges in contemporary technical education: the chasm between textbook programming exercises and real-world engineering rigor.
            </p>
            <p className="dva-body-p">
              In typical learning environments, students build superficial tutorial clones that fall apart when tested with boundary conditions, schema migrations, or oral interview questions. DV Labs restructures the entire project lifecycle into <strong>sequential, verifiable engineering gates</strong> paired with <strong>automated AI viva interrogations</strong>.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Section 02: Core Capabilities ─── */}
      <section className="dva-section" style={{ background: "#fafafc" }}>
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 02 · CORE CAPABILITIES</span>
            <h2 className="dva-section-title">The Three Pillars of DV Labs</h2>
          </Reveal>

          <div className="dva-decisions-grid" style={{ marginTop: '28px' }}>
            <div className="dva-decision-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Layers size={18} style={{ color: '#007aff' }} />
                <span className="dva-decision-problem">PILLAR 01</span>
              </div>
              <h3 className="dva-decision-title">Milestone-Locked Projects</h3>
              <p className="dva-decision-body">
                Projects are decomposed into sequential, verifiable stages (Phase 01: Architecture &amp; Data Schemas &rarr; Phase 02: Core APIs &amp; Middleware &rarr; Phase 03: Full-Stack Integration &amp; Testing). Subsequent tiers remain strictly locked until automated unit and integration tests pass.
              </p>
            </div>

            <div className="dva-decision-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <Brain size={18} style={{ color: '#af52de' }} />
                <span className="dva-decision-problem">PILLAR 02</span>
              </div>
              <h3 className="dva-decision-title">AI Viva Defense System</h3>
              <p className="dva-decision-body">
                Upon milestone completion, candidates enter an automated AI viva defense. The system analyzes their repository diffs, identifies architectural choices, and generates unscripted technical questions challenging the engineer to explain their code logic and trade-offs.
              </p>
            </div>

            <div className="dva-decision-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <ShieldCheck size={18} style={{ color: '#34c759' }} />
                <span className="dva-decision-problem">PILLAR 03</span>
              </div>
              <h3 className="dva-decision-title">Real-World Engineering Verification</h3>
              <p className="dva-decision-body">
                Rather than superficial completion certificates, DV Labs produces verifiable, defensible engineering portfolios backed by automated test reports, code complexity audits, and viva evaluation transcripts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 03: Technical Contributions ─── */}
      <section className="dva-section">
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 03 · MY CONTRIBUTIONS</span>
            <h2 className="dva-section-title">What I Engineered as AI Solutions Developer</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              As an <strong>AI Solutions Developer | Full-Stack Development &amp; AI Systems</strong> at Data Valley AI Tech Solutions, my technical contributions to DV Labs include:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '24px' }}>
              <div style={{ padding: '22px', background: '#ffffff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#111111', margin: '0 0 8px 0' }}>Full-Stack Web Engineering</h4>
                <p style={{ fontSize: '13.5px', color: '#555558', lineHeight: '1.55', margin: 0 }}>
                  Architected modern web interfaces using Next.js App Router, React 19, TypeScript, and Tailwind CSS with editorial styling and zero layout shift.
                </p>
              </div>

              <div style={{ padding: '22px', background: '#ffffff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#111111', margin: '0 0 8px 0' }}>AI Viva Question Generation</h4>
                <p style={{ fontSize: '13.5px', color: '#555558', lineHeight: '1.55', margin: 0 }}>
                  Structured prompt chains and LLM proxy bridges to synthesize targeted viva questions based on candidate milestone submissions and code diffs.
                </p>
              </div>

              <div style={{ padding: '22px', background: '#ffffff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#111111', margin: '0 0 8px 0' }}>Milestone-Locked Progression Engine</h4>
                <p style={{ fontSize: '13.5px', color: '#555558', lineHeight: '1.55', margin: 0 }}>
                  Engineered state machines and database schemas in MongoDB Atlas to track phase completion, test validation flags, and lock/unlock triggers.
                </p>
              </div>

              <div style={{ padding: '22px', background: '#ffffff', borderRadius: '14px', border: '1px solid rgba(0,0,0,0.06)', boxShadow: '0 4px 16px rgba(0,0,0,0.02)' }}>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#111111', margin: '0 0 8px 0' }}>Speech-to-Text &amp; Oral Defense</h4>
                <p style={{ fontSize: '13.5px', color: '#555558', lineHeight: '1.55', margin: 0 }}>
                  Integrated browser audio capture with backend speech-to-text endpoints to process candidate viva responses for semantic comprehension evaluation.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Section 04: Sister Project Recommendation ─── */}
      <section className="dva-section" style={{ background: "#fafafc" }}>
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">CONNECTED COMPANY PROJECT</span>
            <h2 className="dva-section-title">Companion Evaluation Engine</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              Alongside the DV Labs Platform, I engineered the <strong>DV Labs Assessment Platform</strong> — a live, production-grade technical evaluation web application delivering 40 timed coding challenges with continuous background auto-save and tamper-proof server scoring.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Link to="/work/data-valley-assessment-platform" className="dva-next-project-card" style={{ display: 'block', textDecoration: 'none' }}>
                <span className="dva-next-label">EXPLORE COMPANION SYSTEM</span>
                <h3 className="dva-next-title">DV Labs Assessment Platform &rarr;</h3>
                <p style={{ color: "#6e6e73", margin: "6px 0 0", fontSize: "14.5px" }}>
                  Candidate authentication with HTTP-only cookies, live synchronized countdown timer (00:48:12), background delta sync via /api/assessment/sync, and 100% server-side evaluation.
                </p>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Section 05: Product Ownership & Credits ─── */}
      <section className="dva-section">
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 05 · CREDITS &amp; OWNERSHIP</span>
            <h2 className="dva-section-title">Company Product Ownership</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <div className="dva-ownership-box">
              <div className="dva-ownership-icon">
                <Award size={20} />
              </div>
              <div>
                <h4 className="dva-ownership-title">COMPANY INTELLECTUAL PROPERTY NOTICE</h4>
                <p className="dva-ownership-text">
                  <strong>DV LABS</strong> is a proprietary product and engineering platform owned by <strong>Data Valley AI Tech Solutions</strong>. All branding, terminology ("Where vision meets execution", "Milestone-locked projects", "Defended in viva"), trademarks, and corporate assets belong exclusively to the company. My presentation on this portfolio documents my verified engineering contributions as an <strong>AI Solutions Developer | Full-Stack Development &amp; AI Systems</strong>.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Bottom Navigation Bar ─── */}
      <section className="dva-bottom-bar">
        <div className="dva-bounds">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", marginBottom: "40px" }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#86868b", textTransform: "uppercase" }}>
                COMPANY PROJECT &middot; ONGOING DEVELOPMENT
              </span>
              <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1d1d1f", margin: "4px 0 0" }}>
                DV Labs &middot; Data Valley AI Tech Solutions
              </h3>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://dvlabs.datavalley.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="dva-btn-primary apple-pressable"
              >
                <span>Visit DV Labs Platform</span>
                <ExternalLink size={14} />
              </a>
              <Link to="/work" className="dva-btn-secondary apple-pressable">
                <span>All Projects</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <BrandSignature />

      {/* ─── Lightbox Modal ─── */}
      {isLightboxOpen && (
        <div
          className="dva-modal-overlay"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Enlarged DV Labs Environment"
        >
          <div className="dva-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="dva-modal-header">
              <span className="dva-modal-title">
                DV Labs — Official Product Environment &middot; Data Valley AI Tech Solutions
              </span>
              <button
                className="dva-modal-close-btn"
                onClick={() => setIsLightboxOpen(false)}
                type="button"
                aria-label="Close modal"
              >
                <X size={16} />
              </button>
            </div>
            <div className="dva-modal-body">
              <img
                src={dvLabsHeroImg}
                alt="Full resolution view of DV Labs Platform Environment"
                className="dva-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

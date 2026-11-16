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
  FileCode2,
  ChevronRight,
  AlertCircle,
  Brain,
  Award
} from "lucide-react";
import Reveal from "../../components/motion/Reveal";
import MaskReveal from "../../components/motion/MaskReveal";
import ScaleReveal from "../../components/motion/ScaleReveal";
import MagneticLink from "../../components/motion/MagneticLink";
import BrandSignature from "../../components/BrandSignature";
import "../../styles/DataValleyAssessment.css";

// Application Screenshot
import dvAssessmentImg from "../../assets/datavalley-assessment-platform.png";

export default function DataValleyAssessment() {
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

  // Production-Grade Enterprise Schema Graph
  const canonicalUrl = "https://thenameisbhagavan.in/work/data-valley-assessment-platform";

  const assessmentSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "@id": `${canonicalUrl}#software`,
        "name": "DV Labs Assessment Platform",
        "alternateName": "Data Valley Engineering Assessment Platform",
        "headline": "Engineering Assessment Web Application with Server Scoring and Auto-Sync",
        "description": "An end-to-end technical evaluation platform engineered for Data Valley AI Tech Solutions, featuring candidate authentication, timed evaluations, continuous answer persistence, server-side scoring, and administrative result management.",
        "applicationCategory": "WebApplication",
        "operatingSystem": "All modern browsers",
        "creator": {
          "@type": "Person",
          "name": "Gopala Josyula Siva Satya Sai Bhagavan",
          "alternateName": "TheNameIsBhagavan",
          "jobTitle": "End-to-End Application Developer",
          "url": "https://thenameisbhagavan.in/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Data Valley AI Tech Solutions",
          "url": "https://dv-assesments.vercel.app/"
        },
        "url": canonicalUrl,
        "image": "https://thenameisbhagavan.in/images/work/datavalley-assessment-platform.png"
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
            "name": "DV Labs Assessment Platform",
            "item": canonicalUrl
          }
        ]
      }
    ]
  };

  return (
    <div className="dva-case-study">
      <Helmet>
        <title>DV Labs Assessment Platform — Case Study | TheNameIsBhagavan</title>
        <meta
          name="description"
          content="End-to-end engineering case study of the DV Labs Assessment Platform: candidate authentication with JWT/cookies, timed evaluations, continuous answer persistence, server-side scoring, and MongoDB Atlas persistence."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="DV Labs Assessment Platform — Technical Case Study" />
        <meta
          property="og:description"
          content="End-to-end full-stack web application developed for Data Valley AI Tech Solutions with Next.js App Router, TypeScript, and MongoDB Atlas."
        />
        <meta property="og:image" content="https://thenameisbhagavan.in/images/work/datavalley-assessment-platform.png" />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(assessmentSchema)}</script>
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
            <span className="dva-badge-role">END-TO-END APPLICATION DEVELOPER</span>
            <span className="dva-badge-live">
              <span className="dva-live-dot"></span>
              ONGOING / IN DEVELOPMENT &middot; PRODUCTION SYSTEM
            </span>
          </div>

          <MaskReveal duration={1.1}>
            <h1 className="dva-hero-headline">
              DV Labs Assessment<br />Platform
            </h1>
          </MaskReveal>

          <Reveal y={20} duration={0.9} delay={0.2}>
            <p className="dva-hero-sub">
              An engineering assessment web application developed end to end for <strong>Data Valley AI Tech Solutions</strong>, bringing authenticated candidate workflows, timed challenge delivery, answer persistence, and server-side evaluation into a unified system.
            </p>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.3}>
            <div className="dva-hero-actions">
              <MagneticLink strength={0.25}>
                <a
                  href="https://dv-assesments.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dva-btn-primary apple-pressable"
                >
                  <span>Open Live Application</span>
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
                  <span>Inspect Interface Canvas</span>
                </button>
              </MagneticLink>
            </div>
          </Reveal>

          {/* Quick Technical Facts */}
          <div className="dva-facts-grid">
            <div className="dva-fact-item">
              <span className="dva-fact-label">ORGANIZATION</span>
              <span className="dva-fact-value">Data Valley AI Tech Solutions</span>
            </div>
            <div className="dva-fact-item">
              <span className="dva-fact-label">MY CONTRIBUTION</span>
              <span className="dva-fact-value">End-to-End Application Developer</span>
            </div>
            <div className="dva-fact-item">
              <span className="dva-fact-label">ARCHITECTURE</span>
              <span className="dva-fact-value">Next.js App Router · TypeScript · React 19</span>
            </div>
            <div className="dva-fact-item">
              <span className="dva-fact-label">PERSISTENCE</span>
              <span className="dva-fact-value">MongoDB Atlas Cluster</span>
            </div>
            <div className="dva-fact-item">
              <span className="dva-fact-label">DEPLOYMENT</span>
              <span className="dva-fact-value">Vercel Production Edge</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Prominent Screenshot Section ─── */}
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
                  https://dv-assesments.vercel.app/ &bull; PRODUCTION ASSESSMENT ENGINE
                </div>
                <button
                  className="dva-chrome-zoom-btn"
                  onClick={() => setIsLightboxOpen(true)}
                  type="button"
                  aria-label="Enlarge application screenshot"
                >
                  <Maximize2 size={13} />
                  <span>Zoom</span>
                </button>
              </div>

              <div
                className="dva-screenshot-img-wrap"
                onClick={() => setIsLightboxOpen(true)}
                title="Click to view full-resolution screenshot"
              >
                <img
                  src={dvAssessmentImg}
                  alt="DV Labs Assessment Platform showing candidate portal, coding challenge, question palette, and countdown timer."
                  className="dva-screenshot-img"
                  loading="eager"
                />
              </div>

              <div className="dva-screenshot-caption">
                <span>
                  <strong>Figure 1.0:</strong> Production candidate experience — structured question palette (Q1–Q40), synchronized countdown timer (00:48:12), formatted code challenges with JetBrains Mono, and real-time state flags.
                </span>
                <span style={{ fontSize: "11px", fontWeight: "600", color: "#0071e3" }}>
                  AUTHENTIC APPLICATION ARTIFACT &middot; DATA VALLEY
                </span>
              </div>
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* ─── Section 01: Overview ─── */}
      <section className="dva-section">
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 01 · OVERVIEW</span>
            <h2 className="dva-section-title">End-to-End Application Engineering</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              The <strong>DV Labs Assessment Platform</strong> is a dedicated web application engineered to evaluate technical candidates across practical programming, algorithmic reasoning, and computer science fundamentals. Developed end to end for <strong>Data Valley AI Tech Solutions</strong>, the system replaces manual forms and scattered testing links with a unified, state-persistent, authenticated evaluation engine.
            </p>
            <p className="dva-body-p">
              My engineering ownership encompassed the complete application lifecycle: architecting the Next.js App Router structure, designing the component interface with responsive ergonomics, engineering state synchronization to protect candidates from accidental data loss, writing server-side scoring handlers to eliminate client tampering, and provisioning MongoDB Atlas schemas for persistent record keeping.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Section 02: Problem & Goals ─── */}
      <section className="dva-section" style={{ background: "#fafafc" }}>
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 02 · PROBLEM &amp; GOALS</span>
            <h2 className="dva-section-title">The Engineering Challenge</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              Standard commercial testing tools are often rigid, expensive, and disconnected from custom curriculum benchmarks. Ad-hoc online quizzes, on the other hand, suffer from serious reliability defects: candidates lose answers on accidental page refreshes, timer state drifts across client clocks, and client-side scoring logic exposes answer keys through browser inspection tools.
            </p>
          </Reveal>

          <div className="dva-decisions-grid">
            <div className="dva-decision-card">
              <span className="dva-decision-problem">GOAL 01</span>
              <h3 className="dva-decision-title">Zero Data Loss Across Refresh</h3>
              <p className="dva-decision-body">
                Candidates must never lose progress due to intermittent network drops, browser crashes, or accidental reloads. Every selection must persist continuously to the server.
              </p>
            </div>

            <div className="dva-decision-card">
              <span className="dva-decision-problem">GOAL 02</span>
              <h3 className="dva-decision-title">Tamper-Proof Evaluation</h3>
              <p className="dva-decision-body">
                Answer keys and score computations must remain strictly on the backend. Client code must have zero awareness of correct options or evaluation weights.
              </p>
            </div>

            <div className="dva-decision-card">
              <span className="dva-decision-problem">GOAL 03</span>
              <h3 className="dva-decision-title">Synchronized Timed Delivery</h3>
              <p className="dva-decision-body">
                Deliver timed technical evaluations (40 questions in 60 minutes) with an active countdown timer, interactive navigation palette, and automatic flush on expiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 03: Architecture ─── */}
      <section className="dva-section">
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 03 · ARCHITECTURE</span>
            <h2 className="dva-section-title">Verified System Architecture</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              The application leverages Next.js App Router for colocation of client interfaces and server-side route handlers. This unified full-stack architecture minimizes deployment overhead while enforcing a clear boundary between presentation and score persistence.
            </p>
          </Reveal>

          {/* Interactive Architecture Flow Diagram */}
          <div className="dva-arch-box">
            <div className="dva-arch-flow">
              <div className="dva-arch-node">
                <span className="dva-node-tag">LAYER 01 · CLIENT</span>
                <h4 className="dva-node-title">Candidate Interface</h4>
                <p className="dva-node-desc">
                  React 19 client components managing question palette (1–40), active countdown timer, visited flags, and answer selections.
                </p>
                <div className="dva-node-tech">Next.js Client · JetBrains Mono</div>
              </div>

              <div className="dva-arch-node">
                <span className="dva-node-tag">LAYER 02 · ROUTING</span>
                <h4 className="dva-node-title">API Route Handlers</h4>
                <p className="dva-node-desc">
                  Serverless endpoints handling session starts, state sync, integrity telemetry, and final answer submission.
                </p>
                <div className="dva-node-tech">/api/assessment/* · TypeScript</div>
              </div>

              <div className="dva-arch-node">
                <span className="dva-node-tag">LAYER 03 · ENGINE</span>
                <h4 className="dva-node-title">Server Scoring Engine</h4>
                <p className="dva-node-desc">
                  Deterministic server-side evaluation matching submitted option IDs against internal answer keys upon verified submission.
                </p>
                <div className="dva-node-tech">Serverless Compute · Zero Leakage</div>
              </div>

              <div className="dva-arch-node">
                <span className="dva-node-tag">LAYER 04 · PERSISTENCE</span>
                <h4 className="dva-node-title">MongoDB Atlas</h4>
                <p className="dva-node-desc">
                  Document collections storing candidate profiles, session states, real-time answer snapshots, and final scoring records.
                </p>
                <div className="dva-node-tech">MongoDB Atlas · Mongoose / Native</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 04: Authentication & Security ─── */}
      <section className="dva-section" style={{ background: "#fafafc" }}>
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 04 · SECURITY &amp; AUTH</span>
            <h2 className="dva-section-title">Authentication &amp; Protected Sessions</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              Candidate authentication establishes an explicit boundary between unauthenticated landing visitors and active assessment candidates.
            </p>
            <ul style={{ paddingLeft: "24px", color: "#424245", lineHeight: "1.8", fontSize: "15px" }}>
              <li><strong>Session Binding:</strong> Each candidate session is validated via JWT tokens stored in HTTP-only cookies, binding candidate identity directly to their active test instance.</li>
              <li><strong>Bcrypt Password Hashing:</strong> Candidate credentials and access tokens are hashed server-side to prevent credential harvesting.</li>
              <li><strong>Protected Route Guards:</strong> Assessment routes verify session validity before mounting the testing canvas or serving question content.</li>
              <li><strong>Separation of Privileges:</strong> Candidate permissions are restricted to submitting their own answers, while administrative review routes require elevated evaluator authorization.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ─── Section 05: Lifecycle ─── */}
      <section className="dva-section">
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 05 · LIFECYCLE</span>
            <h2 className="dva-section-title">Verified Assessment Lifecycle</h2>
          </Reveal>

          <div className="dva-lifecycle-grid">
            <div className="dva-lifecycle-card">
              <span className="dva-card-step-num">STAGE 01</span>
              <h3 className="dva-card-title">Session Initialization</h3>
              <p className="dva-card-desc">
                Candidate initiates assessment via authenticated POST request. Server verifies eligibility, provisions active session ID, and re-hydrates any pre-existing answers if resuming.
              </p>
              <code className="dva-card-endpoint">POST /api/assessment/start</code>
            </div>

            <div className="dva-lifecycle-card">
              <span className="dva-card-step-num">STAGE 02</span>
              <h3 className="dva-card-title">Timed Challenge Delivery</h3>
              <p className="dva-card-desc">
                Interface mounts 40 structured technical challenges with synchronized countdown clock (00:48:12 remaining), question palette with visited tracking, and code display.
              </p>
              <code className="dva-card-endpoint">Client State Engine · JetBrains Mono</code>
            </div>

            <div className="dva-lifecycle-card">
              <span className="dva-card-step-num">STAGE 03</span>
              <h3 className="dva-card-title">Continuous Background Sync</h3>
              <p className="dva-card-desc">
                Every radio selection or question flag triggers an idempotent background sync. Status indicator confirms "SAVED" timestamp, preventing data loss on browser refresh.
              </p>
              <code className="dva-card-endpoint">PUT /api/assessment/sync</code>
            </div>

            <div className="dva-lifecycle-card">
              <span className="dva-card-step-num">STAGE 04</span>
              <h3 className="dva-card-title">Integrity Telemetry</h3>
              <p className="dva-card-desc">
                Tracks session events, window blur occurrences, and visibility changes with UUID-backed idempotency keys to ensure fair testing conditions.
              </p>
              <code className="dva-card-endpoint">POST /api/integrity/event</code>
            </div>

            <div className="dva-lifecycle-card">
              <span className="dva-card-step-num">STAGE 05</span>
              <h3 className="dva-card-title">Final Submission &amp; Scoring</h3>
              <p className="dva-card-desc">
                Upon candidate submit or timer expiration, final answers are flushed to the server. The engine marks session as SUBMITTED and locks subsequent modifications.
              </p>
              <code className="dva-card-endpoint">POST /api/assessment/submit</code>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 06: Proctoring Status Distinction ─── */}
      <section className="dva-section" style={{ background: "#fafafc" }}>
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 06 · PROCTORING &amp; VERIFICATION</span>
            <h2 className="dva-section-title">Implementation Status Matrix</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              To maintain strict technical credibility, the features of the platform are explicitly categorized by their verified implementation status:
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px', marginTop: '24px' }}>
              <div style={{ padding: '20px', background: '#ffffff', borderRadius: '14px', border: '1px solid rgba(52, 199, 89, 0.3)' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#1b8738', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  ✓ IMPLEMENTED &amp; VERIFIED
                </span>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#111111', margin: '8px 0 6px' }}>Session &amp; Sync Architecture</h4>
                <p style={{ fontSize: '13px', color: '#555558', lineHeight: '1.5', margin: 0 }}>
                  JWT auth, HTTP-only cookies, 40-question palette, countdown timer, background delta autosave, deterministic server scoring, and window blur telemetry.
                </p>
              </div>

              <div style={{ padding: '20px', background: '#ffffff', borderRadius: '14px', border: '1px solid rgba(0, 122, 255, 0.3)' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#007aff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  ⚡ TESTED IN STAGING
                </span>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#111111', margin: '8px 0 6px' }}>Timer Resync &amp; Recovery</h4>
                <p style={{ fontSize: '13px', color: '#555558', lineHeight: '1.5', margin: 0 }}>
                  Network reconnection retry queueing and client clock resynchronization against server UTC timestamps to eliminate tab sleep drift.
                </p>
              </div>

              <div style={{ padding: '20px', background: '#ffffff', borderRadius: '14px', border: '1px solid rgba(255, 149, 0, 0.3)' }}>
                <span style={{ fontSize: '11px', fontWeight: '700', color: '#ff9500', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  🔄 IN PROGRESS / PLANNED
                </span>
                <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#111111', margin: '8px 0 6px' }}>AI Viva Speech Pipeline</h4>
                <p style={{ fontSize: '13px', color: '#555558', lineHeight: '1.5', margin: 0 }}>
                  Automated audio transcription for oral viva defenses, multi-modal webcam verification, and in-browser WebAssembly code compilation sandboxes.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Section 07: Sister Project Recommendation ─── */}
      <section className="dva-section">
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">CONNECTED COMPANY PROJECT</span>
            <h2 className="dva-section-title">Companion Platform Architecture</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              The Assessment Platform forms the technical evaluation backbone of the larger <strong>DV Labs Platform</strong> ecosystem, where milestone-locked projects are defended in viva before graduation into production.
            </p>
            <div style={{ marginTop: '20px' }}>
              <Link to="/work/dv-labs-platform" className="dva-next-project-card" style={{ display: 'block', textDecoration: 'none' }}>
                <span className="dva-next-label">EXPLORE COMPANION SYSTEM</span>
                <h3 className="dva-next-title">DV Labs Platform — Where Vision Meets Execution &rarr;</h3>
                <p style={{ color: "#6e6e73", margin: "6px 0 0", fontSize: "14.5px" }}>
                  Milestone-locked projects. Defended in viva. Built for the real world. Flagship company engineering initiative at Data Valley AI Tech Solutions.
                </p>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Section 08: Product Ownership & Credits ─── */}
      <section className="dva-section" style={{ background: "#fafafc" }}>
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 08 · CREDITS &amp; OWNERSHIP</span>
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
                  The <strong>DV Labs Assessment Platform</strong> is a proprietary engineering asset of <strong>Data Valley AI Tech Solutions</strong>. All application rights, trademarks, candidate data, and testing infrastructure belong exclusively to the company. My documentation here reflects my authentic technical contributions as an <strong>End-to-End Application Developer</strong> during my ongoing tenure.
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
                COMPANY PROJECT &middot; DATA VALLEY AI TECH SOLUTIONS
              </span>
              <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1d1d1f", margin: "4px 0 0" }}>
                DV Labs Assessment Platform
              </h3>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="https://dv-assesments.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="dva-btn-primary apple-pressable"
              >
                <span>Launch Application</span>
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
          aria-label="Enlarged Application Screenshot"
        >
          <div className="dva-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="dva-modal-header">
              <span className="dva-modal-title">
                DV Labs Assessment Platform · Production Interface
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
                src={dvAssessmentImg}
                alt="Full resolution view of DV Labs Assessment Platform"
                className="dva-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

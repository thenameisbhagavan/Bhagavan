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
  AlertCircle
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
        "name": "Data Valley Engineering Assessment Platform",
        "headline": "Engineering Assessment Web Application",
        "description": "An engineering assessment platform engineered end to end for Data Valley AI Tech Solutions, featuring candidate authentication, timed technical evaluations, continuous answer persistence, server-side scoring, and administrative result management.",
        "applicationCategory": "WebApplication",
        "operatingSystem": "All modern browsers",
        "creator": {
          "@type": "Person",
          "name": "Gopala Josyula Siva Satya Sai Bhagavan",
          "alternateName": "TheNameIsBhagavan",
          "url": "https://thenameisbhagavan.in/"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Data Valley AI Tech Solutions",
          "url": "https://dv-assesments.vercel.app/"
        },
        "url": canonicalUrl,
        "image": "https://thenameisbhagavan.in/images/work/datavalley-assessment-platform.png",
        "offers": {
          "@type": "Offer",
          "price": "0",
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
            "name": "Data Valley Engineering Assessment Platform",
            "item": canonicalUrl
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What was Bhagavan's role in the Data Valley Engineering Assessment Platform?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Bhagavan engineered the platform end to end for Data Valley AI Tech Solutions, designing the candidate authentication flows, timed question delivery interface, background answer synchronization, server-side evaluation engine, and administrative review workflows."
            }
          },
          {
            "@type": "Question",
            "name": "How does the platform prevent client-side answer and score tampering?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Score calculation is strictly performed on the server inside Next.js Route Handlers. The client interface never calculates or modifies score metrics; it only transmits verified candidate selections to /api/assessment/submit."
            }
          },
          {
            "@type": "Question",
            "name": "What technologies power the assessment platform?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The platform is built using the Next.js App Router, React 19, TypeScript, MongoDB Atlas, and Tailwind CSS, deployed on Vercel."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="dva-case-study">
      <Helmet>
        <title>Data Valley Engineering Assessment Platform — Case Study | TheNameIsBhagavan</title>
        <meta
          name="description"
          content="End-to-end engineering case study of the Data Valley Assessment Platform: candidate authentication, timed evaluations, continuous answer persistence, server-side scoring, and MongoDB Atlas persistence."
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content="Data Valley Engineering Assessment Platform — Technical Case Study" />
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
            <span className="dva-badge-org">DATA VALLEY AI TECH SOLUTIONS</span>
            <span className="dva-badge-role">END-TO-END APPLICATION DEVELOPER</span>
            <span className="dva-badge-live">
              <span className="dva-live-dot"></span>
              PRODUCTION SYSTEM
            </span>
          </div>

          <MaskReveal duration={1.1}>
            <h1 className="dva-hero-headline">
              Data Valley Engineering<br />Assessment Platform
            </h1>
          </MaskReveal>

          <Reveal y={20} duration={0.9} delay={0.2}>
            <p className="dva-hero-sub">
              An engineering assessment web application developed end to end for Data Valley AI Tech Solutions, bringing authenticated candidate workflows, timed challenge delivery, answer persistence, and server-side evaluation into a unified system.
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
                  <span>Inspect Interface</span>
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
              <span className="dva-fact-value">End-to-End Development</span>
            </div>
            <div className="dva-fact-item">
              <span className="dva-fact-label">ARCHITECTURE</span>
              <span className="dva-fact-value">Next.js App Router · TypeScript</span>
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
                  https://dv-assesments.vercel.app/
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
                  alt="Data Valley Engineering Assessment Platform showing candidate portal, coding challenge, question palette, and countdown timer."
                  className="dva-screenshot-img"
                  loading="eager"
                />
              </div>

              <div className="dva-screenshot-caption">
                <span>
                  <strong>Figure 1.0:</strong> Production candidate experience — structured question palette (Q1–Q40), synchronized countdown timer (00:48:12), formatted code challenges with JetBrains Mono, and real-time state flags.
                </span>
                <span style={{ fontSize: "11px", fontWeight: "600", color: "#0071e3" }}>
                  AUTHENTIC APPLICATION ARTIFACT
                </span>
              </div>
            </div>
          </ScaleReveal>
        </div>
      </section>

      {/* ─── Section A: Overview ─── */}
      <section className="dva-section">
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 01 · OVERVIEW</span>
            <h2 className="dva-section-title">End-to-End Application Engineering</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              The <strong>Data Valley Engineering Assessment Platform</strong> is a dedicated web application engineered to evaluate technical candidates across practical programming, algorithmic reasoning, and computer science fundamentals. Developed end to end for <strong>Data Valley AI Tech Solutions</strong>, the system replaces manual forms and scattered testing links with a unified, state-persistent, authenticated evaluation engine.
            </p>
            <p className="dva-body-p">
              My engineering ownership encompassed the complete application lifecycle: architecting the Next.js App Router structure, designing the component interface with responsive ergonomics, engineering state synchronization to protect candidates from accidental data loss, writing server-side scoring handlers to eliminate client tampering, and provisioning MongoDB Atlas schemas for persistent record keeping.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Section B: Problem & Goals ─── */}
      <section className="dva-section" style={{ background: "#fafafc" }}>
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 02 · PROBLEM & GOALS</span>
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
                Deliver timed technical evaluations (e.g., 40 questions in 60 minutes) with an active countdown timer, interactive navigation palette, and automatic flush on expiry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section C: System Architecture ─── */}
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

      {/* ─── Section D: Authentication & Authorization ─── */}
      <section className="dva-section" style={{ background: "#fafafc" }}>
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 04 · SECURITY</span>
            <h2 className="dva-section-title">Authentication & Protected Sessions</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              Candidate authentication establishes an explicit boundary between unauthenticated landing visitors and active assessment candidates.
            </p>
            <ul style={{ paddingLeft: "24px", color: "#424245", lineHeight: "1.8", fontSize: "15px" }}>
              <li><strong>Session Binding:</strong> Each candidate session is associated with an authenticated profile, preventing cross-candidate state collisions.</li>
              <li><strong>Protected Route Guards:</strong> Assessment routes verify session validity before mounting the testing canvas or serving question content.</li>
              <li><strong>Secure Credential Handling:</strong> Credentials and token secrets remain strictly server-side; client components only receive necessary session identifiers.</li>
              <li><strong>Separation of Privileges:</strong> Candidate permissions are restricted to submitting their own answers, while administrative review routes require elevated evaluator authorization.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ─── Section E: Assessment Lifecycle ─── */}
      <section className="dva-section">
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 05 · LIFECYCLE</span>
            <h2 className="dva-section-title">Verified Assessment Lifecycle</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              The technical talk and testing pipeline follows a robust 5-stage lifecycle directly verified from production client and route bundles:
            </p>
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
              <h3 className="dva-card-title">Final Submission & Scoring</h3>
              <p className="dva-card-desc">
                Upon candidate submit or timer expiration, final answers are flushed to the server. The engine marks session as SUBMITTED and locks subsequent modifications.
              </p>
              <code className="dva-card-endpoint">POST /api/assessment/submit</code>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section F: Scoring Engine ─── */}
      <section className="dva-section" style={{ background: "#fafafc" }}>
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 06 · SCORING</span>
            <h2 className="dva-section-title">Deterministic Server-Side Scoring</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              A foundational engineering priority was <strong>tamper-proof evaluation</strong>. In many naive web applications, question options include metadata like <code>isCorrect: true</code> in the JSON payload sent to the browser. In this platform, client bundles receive only question text, code snippets, and randomized option IDs.
            </p>
            <p className="dva-body-p">
              When <code>/api/assessment/submit</code> receives the final answer payload, the server evaluates candidate choices against secure answer keys stored in the database. Scores, category breakdowns, and performance percentiles are computed in an isolated execution environment and written directly to the persistence layer.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Section G: Data & Persistence ─── */}
      <section className="dva-section">
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 07 · PERSISTENCE</span>
            <h2 className="dva-section-title">Data Modeling & MongoDB Atlas</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              The data model is engineered for rapid reads during assessment loading and atomic writes during answer synchronization:
            </p>
            <div className="dva-facts-grid" style={{ marginTop: "24px" }}>
              <div className="dva-fact-item">
                <span className="dva-fact-label">CANDIDATE COLLECTION</span>
                <span className="dva-fact-value">Identity, email, credential hash, assigned test ID.</span>
              </div>
              <div className="dva-fact-item">
                <span className="dva-fact-label">ASSESSMENT SESSIONS</span>
                <span className="dva-fact-value">Session ID, startedAt, durationMinutes, status (IN_PROGRESS | SUBMITTED).</span>
              </div>
              <div className="dva-fact-item">
                <span className="dva-fact-label">ANSWER RECORD SNAPSHOTS</span>
                <span className="dva-fact-value">Array of questionId, selectedOption, flagged flags, and lastSavedAt.</span>
              </div>
              <div className="dva-fact-item">
                <span className="dva-fact-label">RESULT SUBMISSIONS</span>
                <span className="dva-fact-value">Final score, section breakdown, completion timestamp, evaluation status.</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Section H: Administrative Workflow ─── */}
      <section className="dva-section" style={{ background: "#fafafc" }}>
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 08 · ADMINISTRATION</span>
            <h2 className="dva-section-title">Administrative Result Management</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              In addition to the candidate interface, the system supports authorized evaluator review. Technical mentors and HR evaluators at Data Valley can inspect candidate submissions, review time-per-question telemetry, evaluate aggregate cohort performance, and export structured assessment results for hiring and training evaluation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─── Section I: Engineering Decisions ─── */}
      <section className="dva-section">
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 09 · ENGINEERING DECISIONS</span>
            <h2 className="dva-section-title">Architectural Trade-offs</h2>
          </Reveal>

          <div className="dva-decisions-grid">
            <div className="dva-decision-card">
              <span className="dva-decision-problem">DECISION 01</span>
              <h3 className="dva-decision-title">Server Scoring vs. Client Scoring</h3>
              <p className="dva-decision-body">
                <strong>Problem:</strong> Client-side scoring enables instant feedback but completely compromises test integrity by exposing answer keys in network bundles.
              </p>
              <div className="dva-decision-tradeoff">
                <span className="dva-tradeoff-label">Trade-off:</span> We chose strict server-side evaluation via API handlers. This adds a network hop on submit but guarantees 100% answer privacy.
              </div>
            </div>

            <div className="dva-decision-card">
              <span className="dva-decision-problem">DECISION 02</span>
              <h3 className="dva-decision-title">Continuous Sync vs. Batch Submit</h3>
              <p className="dva-decision-body">
                <strong>Problem:</strong> Single-batch submission on test completion reduces API calls but risks catastrophic data loss if a candidate experiences a power or network cut.
              </p>
              <div className="dva-decision-tradeoff">
                <span className="dva-tradeoff-label">Trade-off:</span> Implemented background auto-sync on option change with debounced PUT requests, delivering near-zero data loss tolerance.
              </div>
            </div>

            <div className="dva-decision-card">
              <span className="dva-decision-problem">DECISION 03</span>
              <h3 className="dva-decision-title">Unified Next.js vs. Separate Backend</h3>
              <p className="dva-decision-body">
                <strong>Problem:</strong> Maintaining separate frontend and backend microservices increases operational burden and deployment complexity.
              </p>
              <div className="dva-decision-tradeoff">
                <span className="dva-tradeoff-label">Trade-off:</span> Chose Next.js App Router route handlers. Streamlines deployment to a single Vercel target while keeping TypeScript contracts unified.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section J: Challenges & Limitations ─── */}
      <section className="dva-section" style={{ background: "#fafafc" }}>
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 10 · LESSONS & LIMITATIONS</span>
            <h2 className="dva-section-title">Honest Technical Reflections</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              Engineering real-world assessment software reveals subtleties rarely encountered in standard web CRUD apps:
            </p>
            <ul style={{ paddingLeft: "24px", color: "#424245", lineHeight: "1.8", fontSize: "15px" }}>
              <li><strong>Timer Drift:</strong> Browser <code>setInterval</code> timers throttle when tabs enter background mode. The solution required syncing against server timestamps rather than relying solely on local client increments.</li>
              <li><strong>Network Reconnects:</strong> When candidates experience brief disconnects, sync requests must fail gracefully without throwing disruptive modal errors, queueing unsynced changes until connectivity returns.</li>
              <li><strong>Verified Scope vs. Future Roadmap:</strong> Current production focuses on objective multi-choice coding evaluations and algorithmic reasoning. Active future exploration includes in-browser code execution sandboxes (WebAssembly) and randomized question banks.</li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ─── Section K: Testing & Validation ─── */}
      <section className="dva-section">
        <div className="dva-bounds">
          <Reveal y={20} duration={0.9}>
            <span className="dva-section-label">SECTION 11 · VALIDATION</span>
            <h2 className="dva-section-title">Testing & Verification</h2>
          </Reveal>

          <Reveal y={20} duration={0.9} delay={0.15}>
            <p className="dva-body-p">
              The platform passed continuous type-checking and automated build steps:
            </p>
            <div className="dva-facts-grid" style={{ marginTop: "24px" }}>
              <div className="dva-fact-item">
                <span className="dva-fact-label">TYPE SAFETY</span>
                <span className="dva-fact-value">100% strict TypeScript checks</span>
              </div>
              <div className="dva-fact-item">
                <span className="dva-fact-label">BUILD SYSTEM</span>
                <span className="dva-fact-value">Turbopack / Next.js production build</span>
              </div>
              <div className="dva-fact-item">
                <span className="dva-fact-label">LIVE DEPLOYMENT</span>
                <span className="dva-fact-value">Verified running at dv-assesments.vercel.app</span>
              </div>
              <div className="dva-fact-item">
                <span className="dva-fact-label">DISCLAIMER</span>
                <span className="dva-fact-value">No formal 3rd-party audit or synthetic load-testing claimed</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Next Project / Bottom Bar ─── */}
      <section className="dva-bottom-bar">
        <div className="dva-bounds">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "24px", marginBottom: "40px" }}>
            <div>
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.1em", color: "#86868b", textTransform: "uppercase" }}>
                END-TO-END APPLICATION ENGINEERING
              </span>
              <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#1d1d1f", margin: "4px 0 0" }}>
                Data Valley AI Tech Solutions
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

          <Link to="/work/careeros" className="dva-next-project-card">
            <span className="dva-next-label">EXPLORE NEXT SYSTEM</span>
            <h3 className="dva-next-title">CareerOS — AI Career Intelligence Platform &rarr;</h3>
            <p style={{ color: "#6e6e73", margin: 0, fontSize: "15px" }}>
              Career trajectory modeling and deterministic skill gap evaluation powered by Python backend services.
            </p>
          </Link>
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
                Data Valley Engineering Assessment Platform · Production Interface
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
                alt="Full resolution view of Data Valley Engineering Assessment Platform"
                className="dva-modal-img"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

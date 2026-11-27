import React, { useState, useEffect, useRef, useCallback } from "react";
import { m as Motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ArrowRight, ArrowUpRight, Sparkles, Clock, Terminal } from "lucide-react";
import SEO from "../components/SEO";
import BrandSignature from "../components/BrandSignature";
import Reveal from "../components/motion/Reveal";
import ScaleReveal from "../components/motion/ScaleReveal";
import MagneticLink from "../components/motion/MagneticLink";
import SpatialArchitectureCore from "../components/spatial/SpatialArchitectureCore";
import "../styles/Innovation.css";

import vegacodeImg from "../assets/cert-vegacode.png";
import githubImg from "../assets/profile-github.png";
import leetcodeImg from "../assets/profile-leetcode.png";
import linkedInProfileImg from "../assets/link.png";
import trainingCert from "../assets/training.png";

import aimlWorkshopImg from "../assets/cert-aiml-workshop.jpg";
import mobileWorkshopImg from "../assets/cert-mobile-workshop.jpg";
import webWorkshopImg from "../assets/cert-web-workshop.jpg";
import pythonWorkshopImg from "../assets/cert-ds-workshop.jpg";
import powerWorkshopImg from "../assets/cert-power-workshop.jpg";

const LOOP_STAGES = [
  {
    id: "01",
    step: "QUESTION",
    micro: "Isolate the real friction constraint.",
    detail: "Every build starts with what repeatedly slows real workflows down—fragmented career evaluation, bilingual medical barriers, or unverified LLM outputs.",
    example: "CareerOS · DHEERGAYUSH",
  },
  {
    id: "02",
    step: "EXPERIMENT",
    micro: "Prototype minimal working mechanics.",
    detail: "Ship narrow vertical slices in Python, FastAPI, or React first under realistic timeouts, API failures, and data edge cases.",
    example: "VegaCode 24-Hour Build",
  },
  {
    id: "03",
    step: "OBSERVE",
    micro: "Audit actual failure modes.",
    detail: "Measure frame drops, cold-start latency, voice recognition misses in Tanglish, or parser blind spots instead of guessing.",
    example: "SHA-256 TTS Cache · Delta Sync",
  },
  {
    id: "04",
    step: "REFINE",
    micro: "Replace hacks with clean invariants.",
    detail: "Lock contracts using TypeScript schemas, stateless API secret bridges, HTTP-only JWT tokens, and deterministic fallbacks.",
    example: "AI Chat Gateway · VERITAS",
  },
  {
    id: "05",
    step: "BUILD",
    micro: "Elevate verified experiments into products.",
    detail: "Once core reliability holds under load, wrap it inside responsive tactile motion and deploy it cleanly for daily users.",
    example: "DV Labs · VoltDrive",
  },
];

const ARCHIVE_ITEMS = [
  { id: "01", filter: "ai", category: "AI / ML", title: "Artificial Intelligence Workshop", img: aimlWorkshopImg, alt: "AI/ML Workshop Certificate" },
  { id: "02", filter: "ai", category: "DATA SCIENCE", title: "Python & Data Science Workshop", img: pythonWorkshopImg, alt: "Python & Data Science Workshop Certificate" },
  { id: "03", filter: "web", category: "WEB SYSTEMS", title: "Web Systems Workshop", img: webWorkshopImg, alt: "Web Development Workshop Certificate" },
  { id: "04", filter: "web", category: "MOBILE UI", title: "Mobile Systems Workshop", img: mobileWorkshopImg, alt: "Mobile Development Workshop Certificate" },
  { id: "05", filter: "core", category: "AUTOMATION", title: "Power & Automation Workshop", img: powerWorkshopImg, alt: "Power & Automation Workshop Certificate" },
  { id: "06", filter: "core", category: "FOUNDATION", title: "Technical Training Foundation", img: trainingCert, alt: "Comprehensive Professional Training Certificate" },
];

function ArtifactViewer({ isOpen, onClose, imgSrc, imgAlt }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <Motion.div
          className="lab-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Artifact Viewer"
        >
          <button className="lab-modal-close" onClick={onClose} aria-label="Close viewer">
            <X size={20} />
          </button>
          <Motion.div
            className="lab-modal-content"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lab-modal-header">VERIFIED EXPERIMENT ARTIFACT</div>
            <img src={imgSrc} alt={imgAlt} className="lab-modal-img" />
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>
  );
}

export default function InnovationJourney() {
  const heroRef = useRef(null);
  const darkLoopRef = useRef(null);

  const [activeLoopIdx, setActiveLoopIdx] = useState(0);
  const [archiveFilter, setArchiveFilter] = useState("all");
  const [viewer, setViewer] = useState({ isOpen: false, src: "", alt: "" });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const handleSpotlight = useCallback((ref, varX, varY) => (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    ref.current.style.setProperty(varX, `${e.clientX - rect.left}px`);
    ref.current.style.setProperty(varY, `${e.clientY - rect.top}px`);
  }, []);

  const openViewer = (src, alt) => setViewer({ isOpen: true, src, alt });
  const closeViewer = () => setViewer((prev) => ({ ...prev, isOpen: false }));

  const activeLoop = LOOP_STAGES[activeLoopIdx];
  const visibleArchive = ARCHIVE_ITEMS.filter((item) =>
    archiveFilter === "all" ? true : item.filter === archiveFilter
  );

  return (
    <>
      <SEO
        title="Innovation | TheNameIsBhagavan"
        description="The experimental layer of Bhagavan (TheNameIsBhagavan). Documenting curiosity, hackathon constraints, public evidence, and experimental archives."
        keywords="Bhagavan Innovation, Experimental Layer, VegaCode Hackathon, AI Systems, GitHub, LeetCode"
      />

      <ArtifactViewer
        isOpen={viewer.isOpen}
        onClose={closeViewer}
        imgSrc={viewer.src}
        imgAlt={viewer.alt}
      />

      <div className="lab-page">
        {/* ============================================================
            ACT 01 — APPLE LAB HERO + 3D CORE STAGE
            ============================================================ */}
        <section
          ref={heroRef}
          onMouseMove={handleSpotlight(heroRef, "--imx", "--imy")}
          className="lab-hero"
          data-nav-theme="light"
        >
          <div className="lab-hero-spotlight" aria-hidden="true" />
          <div className="lab-bounds">
            <div className="lab-hero-grid">
              <div>
                <div className="lab-hero-meta">
                  <Sparkles size={12} color="#0071e3" />
                  <span>LAB / 01 &middot; INNOVATION &amp; RESEARCH LAYER</span>
                </div>

                <Motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="lab-hero-headline"
                >
                  Curiosity starts{" "}
                  <span className="lab-hl-muted">the architecture.</span>
                </Motion.h1>

                <p className="lab-hero-sub">
                  Experiments, tight constraints, and public engineering signals shape every product I take into production.
                </p>

                <div className="lab-hero-tag">
                  <span>RESEARCH</span>
                  <span className="tag-dot">&middot;</span>
                  <span>24H CONSTRAINTS</span>
                  <span className="tag-dot">&middot;</span>
                  <span>SYSTEMS ENGINEERING</span>
                </div>
              </div>

              <div className="lab-spatial-bento">
                <div className="lab-spatial-head">
                  <span className="lab-spatial-dot" aria-hidden="true" />
                  <span>SELECTED SYSTEM ARCHITECTURES &middot; LIVE ARCHIVE</span>
                </div>
                <div className="lab-spatial-stage">
                  <SpatialArchitectureCore />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 02 — DARK TITANIUM EXPERIMENT LOOP CONSOLE
            ============================================================ */}
        <section
          ref={darkLoopRef}
          onMouseMove={handleSpotlight(darkLoopRef, "--lmx", "--lmy")}
          className="lab-loop-titanium"
          data-nav-theme="dark"
        >
          <div className="lab-loop-spotlight" aria-hidden="true" />
          <div className="lab-bounds lab-loop-inner">
            <div className="lab-loop-header">
              <span className="lab-titanium-eyebrow">01 &middot; ITERATION MODEL</span>
              <h2 className="lab-titanium-title">How experiments mature into systems.</h2>
            </div>

            <div className="lab-loop-console">
              <div className="lab-loop-rail" role="tablist" aria-label="Experiment Loop">
                {LOOP_STAGES.map((item, idx) => {
                  const isActive = activeLoopIdx === idx;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveLoopIdx(idx)}
                      className={`lab-loop-btn ${isActive ? "active" : ""}`}
                    >
                      <span className="lab-lb-num">{item.id}</span>
                      <span className="lab-lb-word">{item.step}</span>
                      <ArrowRight size={14} className="lab-lb-arrow" />
                    </button>
                  );
                })}
              </div>

              <div className="lab-loop-display">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={activeLoop.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.26 }}
                    className="lab-loop-card"
                  >
                    <div className="lab-lc-meta">
                      <span className="lab-lc-phase">STEP {activeLoop.id} / 05</span>
                      <span className="lab-lc-ex">{activeLoop.example}</span>
                    </div>
                    <h3 className="lab-lc-word">{activeLoop.step}</h3>
                    <p className="lab-lc-micro">{activeLoop.micro}</p>
                    <p className="lab-lc-detail">{activeLoop.detail}</p>
                  </Motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 03 — VEGACODE 24-HOUR CONSTRAINT SPOTLIGHT
            ============================================================ */}
        <section className="lab-constraint-section" data-nav-theme="light">
          <div className="lab-bounds">
            <div className="lab-vega-bento">
              <div className="lab-vega-copy">
                <span className="lab-section-label">
                  <Clock size={12} style={{ marginRight: "6px", verticalAlign: "middle" }} />
                  02 &middot; EXPERIMENT BENCHMARK
                </span>
                <h2 className="vegacode-big-time">24 HOURS</h2>
                <blockquote className="constraint-thesis">
                  &ldquo;Constraints sharpen engineering decisions.&rdquo;
                </blockquote>

                <div className="vegacode-meta-row">
                  <div className="vm-item">
                    <span className="vm-key">EVENT</span>
                    <span className="vm-val">VegaCode National Hackathon</span>
                  </div>
                  <div className="vm-item">
                    <span className="vm-key">SIGNAL</span>
                    <span className="vm-val">Rapid Scoping &middot; Teamwork &middot; Execution</span>
                  </div>
                </div>
              </div>

              <ScaleReveal className="vegacode-artifact-wrapper">
                <button
                  type="button"
                  className="lab-artifact-btn"
                  onClick={() => openViewer(vegacodeImg, "VegaCode National Hackathon Certificate")}
                  aria-label="View VegaCode National Hackathon Certificate"
                >
                  <img src={vegacodeImg} alt="VegaCode National Hackathon Certificate" loading="lazy" />
                  <div className="lab-artifact-hover">
                    <span>INSPECT CERTIFICATE ↗</span>
                  </div>
                </button>
              </ScaleReveal>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 04 — PUBLIC SIGNAL EVIDENCE
            ============================================================ */}
        <section className="lab-public-section" data-nav-theme="light">
          <div className="lab-bounds">
            <Reveal y={14} duration={0.7}>
              <span className="lab-section-label">03 &middot; PUBLIC TELEMETRY</span>
              <h2 className="lab-sub-headline">Work that leaves a public trail.</h2>
            </Reveal>

            <div className="pub-archive-grid">
              {[
                {
                  num: "01 / CODE",
                  title: "GitHub",
                  url: "https://github.com/thenameisbhagavan",
                  img: githubImg,
                  alt: "GitHub Profile Screenshot",
                },
                {
                  num: "02 / ALGORITHMS",
                  title: "LeetCode",
                  url: "https://leetcode.com/u/AxZsDhEeto/",
                  img: leetcodeImg,
                  alt: "LeetCode Profile Screenshot",
                },
                {
                  num: "03 / NETWORK",
                  title: "LinkedIn",
                  url: "https://www.linkedin.com/in/thenameisbhagavan",
                  img: linkedInProfileImg,
                  alt: "LinkedIn Profile Screenshot",
                },
              ].map((card) => (
                <div key={card.num} className="pub-card">
                  <div className="pub-card-head">
                    <span className="pub-card-num">{card.num}</span>
                    <div className="pub-card-title-row">
                      <h3 className="pub-card-title">{card.title}</h3>
                      <a
                        href={card.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pub-ext-link"
                      >
                        <span>LIVE PROFILE</span>
                        <ArrowUpRight size={13} />
                      </a>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="lab-artifact-btn pub-artifact-btn"
                    onClick={() => openViewer(card.img, card.alt)}
                  >
                    <img src={card.img} alt={card.alt} loading="lazy" />
                    <div className="lab-artifact-hover">INSPECT SNAPSHOT ↗</div>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 05 — FILTERABLE EXPERIMENTAL ARCHIVE
            ============================================================ */}
        <section className="lab-archive-section" data-nav-theme="light">
          <div className="lab-bounds">
            <div className="lab-arch-top">
              <div>
                <span className="lab-section-label">04 &middot; EXPERIMENTAL VAULT</span>
                <h2 className="lab-sub-headline">Workshops across disciplines.</h2>
              </div>

              <div className="lab-filter-tabs" role="tablist" aria-label="Filter workshop archive">
                {[
                  { id: "all", label: "All (06)" },
                  { id: "ai", label: "AI & Data (02)" },
                  { id: "web", label: "Web & Mobile (02)" },
                  { id: "core", label: "Automation & Core (02)" },
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={archiveFilter === f.id}
                    onClick={() => setArchiveFilter(f.id)}
                    className={`lab-filter-btn ${archiveFilter === f.id ? "active" : ""}`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="archive-list-grid">
              {visibleArchive.map((item) => (
                <div key={item.id} className="archive-item-card">
                  <div className="arc-header">
                    <span className="arc-num">{item.id}</span>
                    <span className="arc-cat">{item.category}</span>
                  </div>
                  <h3 className="arc-title">{item.title}</h3>
                  <button
                    type="button"
                    className="arc-view-btn"
                    onClick={() => openViewer(item.img, item.alt)}
                  >
                    <span>VIEW CERTIFICATE</span>
                    <ArrowUpRight size={13} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 06 — FINAL CTA
            ============================================================ */}
        <section className="lab-final-section" data-nav-theme="light">
          <div className="lab-bounds text-center">
            <h2 className="lab-final-headline">
              Not every experiment becomes a product.
            </h2>
            <p className="lab-final-sub">
              Every serious experiment upgrades what gets built next.
            </p>
            <MagneticLink strength={0.2}>
              <Link to="/work" className="lab-cta-button apple-pressable">
                <Terminal size={15} />
                <span>Explore Production Systems</span>
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

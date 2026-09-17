import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ArrowRight, ArrowUpRight } from "lucide-react";
import SEO from "../components/SEO";
import BrandSignature from "../components/BrandSignature";
import Reveal from "../components/motion/Reveal";
import MaskReveal from "../components/motion/MaskReveal";
import ScaleReveal from "../components/motion/ScaleReveal";
import MagneticLink from "../components/motion/MagneticLink";
import "../styles/Innovation.css";

// ─── Core Artifact Assets ──────────────────────────────────────────────────────
import vegacodeImg from "../assets/cert-vegacode.png";
import githubImg from "../assets/profile-github.png";
import leetcodeImg from "../assets/profile-leetcode.png";
import linkedInProfileImg from "../assets/link.png";
import trainingCert from "../assets/training.png";

// ─── Workshop Artifact Assets ──────────────────────────────────────────────────
import aimlWorkshopImg from "../assets/cert-aiml-workshop.jpg";
import mobileWorkshopImg from "../assets/cert-mobile-workshop.jpg";
import webWorkshopImg from "../assets/cert-web-workshop.jpg";
import pythonWorkshopImg from "../assets/cert-ds-workshop.jpg";
import powerWorkshopImg from "../assets/cert-power-workshop.jpg";

const appleEase = [0.22, 1, 0.36, 1];

// ─── Artifact Viewer Modal ────────────────────────────────────────────────────
function ArtifactViewer({ isOpen, onClose, imgSrc, imgAlt }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div
          className="lab-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: appleEase }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Artifact Viewer"
        >
          <button className="lab-modal-close" onClick={onClose} aria-label="Close viewer">
            <X size={22} strokeWidth={1.5} />
          </button>
          <m.div
            className="lab-modal-content"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.4, ease: appleEase }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lab-modal-header">VERIFIED ARTIFACT</div>
            <img src={imgSrc} alt={imgAlt} className="lab-modal-img" loading="eager" />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

// ─── Innovation Journey Page ──────────────────────────────────────────────────
export default function InnovationJourney() {
  const [viewer, setViewer] = useState({ isOpen: false, src: "", alt: "" });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const openViewer = (src, alt) => setViewer({ isOpen: true, src, alt });
  const closeViewer = () => setViewer((prev) => ({ ...prev, isOpen: false }));

  // Archive items array
  const archiveItems = [
    { id: "01", category: "AI / ML", title: "Artificial Intelligence Workshop", img: aimlWorkshopImg, alt: "AI/ML Workshop Certificate" },
    { id: "02", category: "SOFTWARE", title: "Python & Data Science Workshop", img: pythonWorkshopImg, alt: "Python & Data Science Workshop Certificate" },
    { id: "03", category: "WEB", title: "Web Systems Workshop", img: webWorkshopImg, alt: "Web Development Workshop Certificate" },
    { id: "04", category: "MOBILE", title: "Mobile Systems Workshop", img: mobileWorkshopImg, alt: "Mobile Development Workshop Certificate" },
    { id: "05", category: "AUTOMATION", title: "Power & Automation Workshop", img: powerWorkshopImg, alt: "Power & Automation Workshop Certificate" },
    { id: "06", category: "FOUNDATION", title: "Technical Training Foundation", img: trainingCert, alt: "Comprehensive Professional Training Certificate" },
  ];

  return (
    <>
      <SEO
        description="The experimental layer of Bhagavan (TheNameIsBhagavan). Documenting curiosity, hackathon constraints, public evidence, and experimental archives that shape AI products."
        keywords="Bhagavan Innovation, Experimental Layer, VegaCode Hackathon, AI Systems, Technical Experiments, LeetCode, GitHub, Evidence Archive"
      />

      <ArtifactViewer
        isOpen={viewer.isOpen}
        onClose={closeViewer}
        imgSrc={viewer.src}
        imgAlt={viewer.alt}
      />

      <div className="lab-page">

        {/* ============================================================
            ACT 01 — HERO (CURIOSITY IS WHERE THE SYSTEM BEGINS.)
            ============================================================ */}
        <section className="lab-hero" data-nav-theme="light">
          <div className="lab-bounds">
            <Reveal y={16} duration={0.8}>
              <div className="lab-hero-meta">
                <span>LAB / 01</span>
                <span>&middot;</span>
                <span>INNOVATION</span>
                <span>&middot;</span>
                <span>2026</span>
              </div>
            </Reveal>

            <MaskReveal duration={1.1} delay={0.1}>
              <h1 className="lab-hero-headline">
                CURIOSITY IS WHERE<br />
                THE SYSTEM BEGINS.
              </h1>
            </MaskReveal>

            <Reveal y={20} duration={0.9} delay={0.25}>
              <p className="lab-hero-sub">
                Experiments, constraints and evidence shape what I build next.
              </p>
            </Reveal>

            <Reveal y={16} duration={0.8} delay={0.4}>
              <div className="lab-hero-tag">
                <span>RESEARCH</span>
                <span className="tag-dot">&middot;</span>
                <span>EXPERIMENTATION</span>
                <span className="tag-dot">&middot;</span>
                <span>SYSTEMS</span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============================================================
            ACT 02 — THE EXPERIMENT LOOP (SCROLL PROGRESSION METAPHOR)
            ============================================================ */}
        <section className="lab-loop-section" data-nav-theme="light">
          <div className="lab-bounds">
            <Reveal y={16} duration={0.8}>
              <span className="lab-section-label">THE EXPERIMENT LOOP</span>
            </Reveal>

            <div className="lab-loop-container">
              {/* Continuous Vertical Experiment Line */}
              <div className="lab-experiment-line" />

              <div className="lab-loop-steps">
                {[
                  { step: "QUESTION", micro: "what am I trying to understand?" },
                  { step: "EXPERIMENT", micro: "what can I test?" },
                  { step: "OBSERVE", micro: "what actually happened?" },
                  { step: "REFINE", micro: "what changes?" },
                  { step: "BUILD", micro: "what deserves to become a system?" },
                ].map((item, index) => (
                  <Reveal y={24} duration={0.8} delay={index * 0.1} key={item.step} className="loop-step-item">
                    <div className="loop-step-node">
                      <span className="loop-step-dot" />
                    </div>
                    <div className="loop-step-content">
                      <span className="loop-step-word">{item.step}</span>
                      <span className="loop-step-arrow">&rarr;</span>
                      <span className="loop-step-micro">{item.micro}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 03 — EXPERIMENT / 01 — VEGACODE
            ============================================================ */}
        <section className="lab-constraint-section" data-nav-theme="light">
          <div className="lab-bounds">
            <Reveal y={16} duration={0.8}>
              <span className="lab-section-label">EXPERIMENT / 01</span>
            </Reveal>

            <MaskReveal duration={1.0} delay={0.1}>
              <h2 className="vegacode-big-time">24 HOURS</h2>
            </MaskReveal>

            <Reveal y={20} duration={0.9} delay={0.2}>
              <blockquote className="constraint-thesis">
                "Constraints change the way engineers think."
              </blockquote>
            </Reveal>

            {/* Restrained Metadata Row */}
            <Reveal y={16} duration={0.8} delay={0.3} className="vegacode-meta-row">
              <div className="vm-item">
                <span className="vm-key">TIME</span>
                <span className="vm-val">24 HOURS</span>
              </div>
              <div className="vm-item">
                <span className="vm-key">MODE</span>
                <span className="vm-val">NATIONAL HACKATHON</span>
              </div>
              <div className="vm-item">
                <span className="vm-key">SIGNAL</span>
                <span className="vm-val">RAPID DECISION-MAKING &middot; COLLABORATION &middot; EXECUTION</span>
              </div>
            </Reveal>

            {/* VegaCode Certificate Artifact Object */}
            <ScaleReveal className="vegacode-artifact-wrapper">
              <button
                className="lab-artifact-btn artifact-primary"
                onClick={() => openViewer(vegacodeImg, "VegaCode National Hackathon Certificate")}
                aria-label="View VegaCode National Hackathon Certificate"
              >
                <img src={vegacodeImg} alt="VegaCode National Hackathon Certificate" loading="lazy" />
                <div className="lab-artifact-hover">
                  <span>VIEW EXPERIMENT EVIDENCE</span>
                  <ArrowUpRight size={16} />
                </div>
              </button>
              <div className="ca-footer">
                <span>VEGACODE NATIONAL HACKATHON</span>
                <span>EVIDENCE / 01</span>
              </div>
            </ScaleReveal>
          </div>
        </section>

        {/* ============================================================
            ACT 04 — PUBLIC SIGNAL
            ============================================================ */}
        <section className="lab-public-section" data-nav-theme="light">
          <div className="lab-bounds">
            <Reveal y={16} duration={0.8}>
              <span className="lab-section-label">PUBLIC SIGNAL</span>
              <h2 className="lab-sub-headline">Some of the work leaves a public trace.</h2>
            </Reveal>

            <div className="pub-archive-grid">
              <Reveal y={24} duration={0.9} className="pub-card">
                <div className="pub-card-head">
                  <span className="pub-card-num">01 / CODE</span>
                  <div className="pub-card-title-row">
                    <h3 className="pub-card-title">GitHub</h3>
                    <a 
                      href="https://github.com/thenameisbhagavan" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="pub-ext-link"
                      title="Open GitHub Profile"
                    >
                      <span>LIVE PROFILE</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
                <button 
                  className="lab-artifact-btn pub-artifact-btn"
                  onClick={() => openViewer(githubImg, "Siva Satya Sai Bhagavan - GitHub Profile")}
                  aria-label="View GitHub Profile Evidence"
                >
                  <img src={githubImg} alt="Siva Satya Sai Bhagavan GitHub Profile Screenshot" loading="lazy" />
                  <div className="lab-artifact-hover">VIEW ARTIFACT ↗</div>
                </button>
              </Reveal>

              <Reveal y={24} duration={0.9} delay={0.15} className="pub-card">
                <div className="pub-card-head">
                  <span className="pub-card-num">02 / DISCIPLINE</span>
                  <div className="pub-card-title-row">
                    <h3 className="pub-card-title">LeetCode</h3>
                    <a 
                      href="https://leetcode.com/u/AxZsDhEeto/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="pub-ext-link"
                      title="Open LeetCode Profile"
                    >
                      <span>LIVE PROFILE</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
                <button 
                  className="lab-artifact-btn pub-artifact-btn"
                  onClick={() => openViewer(leetcodeImg, "Siva Satya Sai Bhagavan - LeetCode Profile")}
                  aria-label="View LeetCode Profile Evidence"
                >
                  <img src={leetcodeImg} alt="Siva Satya Sai Bhagavan LeetCode Profile Screenshot" loading="lazy" />
                  <div className="lab-artifact-hover">VIEW ARTIFACT ↗</div>
                </button>
              </Reveal>

              <Reveal y={24} duration={0.9} delay={0.3} className="pub-card">
                <div className="pub-card-head">
                  <span className="pub-card-num">03 / PROFESSIONAL</span>
                  <div className="pub-card-title-row">
                    <h3 className="pub-card-title">LinkedIn</h3>
                    <a 
                      href="https://www.linkedin.com/in/thenameisbhagavan" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="pub-ext-link"
                      title="Open LinkedIn Profile"
                    >
                      <span>LIVE PROFILE</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
                <button 
                  className="lab-artifact-btn pub-artifact-btn"
                  onClick={() => openViewer(linkedInProfileImg, "Siva Satya Sai Bhagavan - LinkedIn Profile")}
                  aria-label="View LinkedIn Profile Evidence"
                >
                  <img src={linkedInProfileImg} alt="Siva Satya Sai Bhagavan LinkedIn Profile Screenshot" loading="lazy" />
                  <div className="lab-artifact-hover">VIEW ARTIFACT ↗</div>
                </button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 05 — EXPERIMENTAL ARCHIVE
            ============================================================ */}
        <section className="lab-archive-section" data-nav-theme="light">
          <div className="lab-bounds">
            <Reveal y={16} duration={0.8}>
              <span className="lab-section-label">EXPERIMENTAL ARCHIVE</span>
              <h2 className="lab-sub-headline">Compact evidence across technical disciplines.</h2>
            </Reveal>

            <div className="archive-list-grid">
              {archiveItems.map((item, idx) => (
                <Reveal y={20} duration={0.8} delay={idx * 0.08} key={item.id} className="archive-item-card">
                  <div className="arc-header">
                    <span className="arc-num">{item.id}</span>
                    <span className="arc-cat">{item.category}</span>
                  </div>
                  <h3 className="arc-title">{item.title}</h3>
                  <button 
                    className="arc-view-btn"
                    onClick={() => openViewer(item.img, item.alt)}
                    aria-label={`View ${item.title}`}
                  >
                    <span>VIEW EVIDENCE</span>
                    <ArrowUpRight size={14} />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 06 — CURRENT EXPLORATION
            ============================================================ */}
        <section className="lab-exploration-section" data-nav-theme="light">
          <div className="lab-bounds">
            <Reveal y={16} duration={0.8}>
              <div className="exploring-badge-row">
                <span className="exploring-dot" />
                <span className="lab-section-label" style={{ margin: 0 }}>EXPLORING</span>
              </div>
              <h2 className="lab-sub-headline" style={{ marginTop: 12 }}>Current Exploration</h2>
            </Reveal>

            <div className="exploration-fields-grid">
              {[
                { area: "AI SYSTEMS", tags: "Memory &middot; Context &middot; Reasoning" },
                { area: "PRODUCT ENGINEERING", tags: "Interfaces &middot; Workflows" },
                { area: "SYSTEM DESIGN", tags: "Architecture &middot; APIs &middot; Reliability" },
                { area: "ENGINEERING WRITING", tags: "Experiments &middot; Decisions" },
              ].map((field, idx) => (
                <Reveal y={20} duration={0.8} delay={idx * 0.1} key={field.area} className="exploration-field-card">
                  <span className="efc-area">{field.area}</span>
                  <span className="efc-tags" dangerouslySetInnerHTML={{ __html: field.tags }} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================
            ACT 07 — FINAL STATEMENT & PORTFOLIO CONNECTION
            ============================================================ */}
        <section className="lab-final-section" data-nav-theme="light">
          <div className="lab-bounds text-center">
            <MaskReveal duration={1.1}>
              <h2 className="lab-final-headline">
                NOT EVERY EXPERIMENT<br />
                BECOMES A PRODUCT.
              </h2>
            </MaskReveal>

            <Reveal y={20} duration={1.0} delay={0.25}>
              <p className="lab-final-sub">
                BUT EVERY GOOD EXPERIMENT<br />
                CHANGES WHAT GETS BUILT NEXT.
              </p>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.4}>
              <div className="lab-final-cta-wrap">
                <MagneticLink strength={0.3}>
                  <Link to="/work" className="lab-cta-button apple-pressable">
                    <span>EXPLORE THE SYSTEMS</span>
                    <ArrowRight size={16} />
                  </Link>
                </MagneticLink>
              </div>
            </Reveal>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

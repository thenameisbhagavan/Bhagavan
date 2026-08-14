import React, { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { X, ArrowRight } from "lucide-react";
import SEO from "../components/SEO";
import BrandSignature from "../components/BrandSignature";
import "../styles/Innovation.css";

// ─── Core Artifacts ───────────────────────────────────────────────────────────
import vegacodeImg from "../assets/cert-vegacode.png";
import githubImg from "../assets/profile-github.png";
import leetcodeImg from "../assets/profile-leetcode.png";
import linkedInProfileImg from "../assets/link.png";
import trainingCert from "../assets/training.png";

// ─── Workshop Artifacts ───────────────────────────────────────────────────────
import aimlWorkshopImg from "../assets/cert-aiml-workshop.jpg";
import mobileWorkshopImg from "../assets/cert-mobile-workshop.jpg";
import webWorkshopImg from "../assets/cert-web-workshop.jpg";
import pythonWorkshopImg from "../assets/cert-ds-workshop.jpg";
import powerWorkshopImg from "../assets/cert-power-workshop.jpg";

// ─── Motion ───────────────────────────────────────────────────────────────────
const appleEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: appleEase } },
};

const fadeUpSlow = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: appleEase } },
};

const fadeUpStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const artifactReveal = {
  hidden: { opacity: 0, scale: 0.98 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1.0, ease: appleEase } },
};

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
          transition={{ duration: 0.4, ease: appleEase }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Artifact Viewer"
        >
          <button className="lab-modal-close" onClick={onClose} aria-label="Close viewer">
            <X size={24} strokeWidth={1.5} />
          </button>
          <m.div
            className="lab-modal-content"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.98, opacity: 0 }}
            transition={{ duration: 0.5, ease: appleEase, delay: 0.05 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="lab-modal-header">VERIFIED EXPERIMENT</div>
            <img src={imgSrc} alt={imgAlt} className="lab-modal-img"  loading="lazy" />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

// ─── Public Evidence Row ──────────────────────────────────────────────────────
function PublicEvidenceRow({ num, category, title, desc, img, imgAlt, onView }) {
  return (
    <m.div className="pub-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUpStagger}>
      <m.div className="pub-row-text" variants={fadeUp}>
        <span className="pub-num">{num}</span>
        <span className="pub-cat">{category}</span>
        <h3 className="pub-title">{title}</h3>
        <p className="pub-desc">{desc}</p>
      </m.div>
      <m.div className="pub-row-artifact" variants={artifactReveal}>
        <button
          className="lab-artifact-btn"
          onClick={() => onView(img, imgAlt)}
          aria-label={`View ${imgAlt}`}
        >
          <img src={img} alt={imgAlt} loading="lazy" />
          <div className="lab-artifact-hover">VIEW ARTIFACT ↗</div>
        </button>
      </m.div>
    </m.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function InnovationJourney() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const [viewer, setViewer] = useState({ isOpen: false, src: "", alt: "" });
  const openViewer = (src, alt) => setViewer({ isOpen: true, src, alt });
  const closeViewer = () => setViewer((prev) => ({ ...prev, isOpen: false }));

  return (
    <>
      <SEO
        title="Innovation Lab | TheNameIsBhagavan"
        description="Experiments, constraints, learning loops, and technical exploration that shape what I build next. The engineering lab of Bhagavan."
        keywords="AI Engineering, Innovation, Experimentation, Machine Learning, Product Engineering, Learning"
      />

      <ArtifactViewer
        isOpen={viewer.isOpen}
        onClose={closeViewer}
        imgSrc={viewer.src}
        imgAlt={viewer.alt}
      />

      <div className="lab-page">

        {/* ==================== 1. HERO ==================== */}
        <section className="lab-hero" data-nav-theme="light">
          <div className="lab-bounds">
            <m.div className="lab-hero-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: appleEase }}>
              <span>LAB / 01</span>
              <span>INNOVATION</span>
              <span>2026</span>
            </m.div>

            <m.h1 className="lab-hero-headline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.1, ease: appleEase }}>
              Curiosity is where<br />the system begins.
            </m.h1>

            <m.p className="lab-hero-sub" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.25, ease: appleEase }}>
              Experiments, constraints, learning loops, and technical exploration<br />
              that shape what I build next.
            </m.p>

            <m.div className="lab-hero-tag" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.5, ease: appleEase }}>
              RESEARCH · EXPERIMENTATION · LEARNING · 2026
            </m.div>
          </div>
        </section>

        {/* ==================== 2. LAB LOOP ==================== */}
        <section className="lab-loop-section" data-nav-theme="light">
          <div className="lab-bounds">
            <m.div className="lab-loop" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
              {["QUESTION", "EXPERIMENT", "OBSERVE", "REFINE", "BUILD"].map((word, i, arr) => (
                <React.Fragment key={word}>
                  <m.span className="loop-word" variants={fadeUp}>{word}</m.span>
                  {i < arr.length - 1 && <m.span className="loop-arrow" variants={fadeUp}>↓</m.span>}
                </React.Fragment>
              ))}
            </m.div>
            <m.p className="lab-loop-statement" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              Every experiment should leave the system<br />better than it found it.
            </m.p>
          </div>
        </section>

        {/* ==================== 3. THE LAB ==================== */}
        <section className="lab-intro-section" data-nav-theme="light">
          <div className="lab-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
              THE LAB
            </m.div>
            <m.p className="lab-intro-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              Not every experiment becomes a product.<br />
              Every experiment should teach something.
            </m.p>

            <m.div className="lab-areas" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
              <m.div className="lab-area" variants={fadeUp}>
                <span className="la-num">01</span>
                <h3 className="la-title">BUILD UNDER CONSTRAINT</h3>
                <p className="la-desc">When time, tools, and resources are limited, architecture matters most.</p>
              </m.div>
              <m.div className="lab-area" variants={fadeUp}>
                <span className="la-num">02</span>
                <h3 className="la-title">LEARN THROUGH EXPERIMENT</h3>
                <p className="la-desc">Structured workshops, algorithmic practice, and hands-on implementation.</p>
              </m.div>
              <m.div className="lab-area" variants={fadeUp}>
                <span className="la-num">03</span>
                <h3 className="la-title">TURN SIGNAL INTO SYSTEMS</h3>
                <p className="la-desc">Observations from experiments become the basis for engineering decisions.</p>
              </m.div>
            </m.div>
          </div>
        </section>

        {/* ==================== 4. CONSTRAINT — VEGACODE ==================== */}
        <section className="lab-constraint" data-nav-theme="light">
          <div className="lab-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
              01 / CONSTRAINT
            </m.div>

            <m.h2 className="constraint-time" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              24 HOURS
            </m.h2>

            <m.p className="constraint-thesis" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Constraints change the way engineers think.
            </m.p>

            <m.p className="constraint-body" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              A national-level hackathon became a practical test of rapid decision-making,
              collaborative engineering, architecture under pressure, and execution.
            </m.p>

            <m.div className="constraint-artifact" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={artifactReveal}>
              <div className="ca-label">VERIFIED EXPERIMENT</div>
              <button
                className="lab-artifact-btn artifact-primary"
                onClick={() => openViewer(vegacodeImg, "VegaCode National Hackathon Certificate")}
                aria-label="View VegaCode National Hackathon Certificate"
              >
                <img src={vegacodeImg} alt="VegaCode National Hackathon Certificate" loading="lazy" />
                <div className="lab-artifact-hover">VIEW ARTIFACT ↗</div>
              </button>
              <div className="ca-footer">
                <span>VegaCode National Hackathon</span>
                <span>EVIDENCE / 01</span>
              </div>
            </m.div>
          </div>
        </section>

        {/* ==================== 5. ENGINEERING IN PUBLIC ==================== */}
        <section className="lab-public" data-nav-theme="light">
          <div className="lab-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
              ENGINEERING IN PUBLIC
            </m.div>
            <m.h2 className="public-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              Some of the engineering<br />happens in public.
            </m.h2>

            <div className="pub-grid">
              <PublicEvidenceRow
                num="01"
                category="CODE"
                title="GitHub"
                desc="Repositories preserve the implementation history."
                img={githubImg}
                imgAlt="GitHub Profile"
                onView={openViewer}
              />
              <PublicEvidenceRow
                num="02"
                category="DISCIPLINE"
                title="LeetCode"
                desc="Algorithmic practice sharpens the reasoning behind systems."
                img={leetcodeImg}
                imgAlt="LeetCode Profile"
                onView={openViewer}
              />
              <PublicEvidenceRow
                num="03"
                category="PRESENCE"
                title="LinkedIn"
                desc="Professional work becomes visible through consistent output."
                img={linkedInProfileImg}
                imgAlt="LinkedIn Profile"
                onView={openViewer}
              />
            </div>
          </div>
        </section>

        {/* ==================== 6. LAB NOTEBOOK — LEARNING ==================== */}
        <section className="lab-notebook" data-nav-theme="light">
          <div className="lab-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
              LAB NOTEBOOK
            </m.div>
            <m.h2 className="notebook-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              Learning expands the search space.
            </m.h2>

            <div className="notebook-entries">
              {[
                { num: "01", title: "Artificial Intelligence", img: aimlWorkshopImg, alt: "AI/ML Workshop Certificate" },
                { num: "02", title: "Software Engineering", img: pythonWorkshopImg, alt: "Python & Data Science Workshop Certificate" },
                { num: "03", title: "Web Systems", img: webWorkshopImg, alt: "Web Development Workshop Certificate" },
                { num: "04", title: "Mobile Systems", img: mobileWorkshopImg, alt: "Mobile Development Workshop Certificate" },
                { num: "05", title: "Automation", img: powerWorkshopImg, alt: "Power & Automation Workshop Certificate" },
              ].map((entry) => (
                <m.div className="nb-entry" key={entry.num} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUpStagger}>
                  <m.div className="nb-entry-header" variants={fadeUp}>
                    <span className="nb-num">{entry.num}</span>
                    <span className="nb-rule">─</span>
                    <span className="nb-title">{entry.title}</span>
                  </m.div>
                  <m.div className="nb-entry-artifact" variants={artifactReveal}>
                    <button
                      className="lab-artifact-btn artifact-notebook"
                      onClick={() => openViewer(entry.img, entry.alt)}
                      aria-label={`View ${entry.alt}`}
                    >
                      <img src={entry.img} alt={entry.alt} loading="lazy" />
                      <div className="lab-artifact-hover">VIEW ARTIFACT ↗</div>
                    </button>
                  </m.div>
                </m.div>
              ))}
            </div>

            {/* Training Foundation */}
            <m.div className="nb-foundation" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUpStagger}>
              <m.div className="section-label" variants={fadeUp}>PROFESSIONAL FOUNDATION</m.div>
              <m.div variants={artifactReveal}>
                <button
                  className="lab-artifact-btn artifact-notebook"
                  onClick={() => openViewer(trainingCert, "Comprehensive Professional Training Certificate")}
                  aria-label="View Comprehensive Professional Training Certificate"
                >
                  <img src={trainingCert} alt="Comprehensive Professional Training Certificate" loading="lazy" />
                  <div className="lab-artifact-hover">VIEW ARTIFACT ↗</div>
                </button>
              </m.div>
            </m.div>
          </div>
        </section>

        {/* ==================== 7. RESEARCH → BUILD BRIDGE ==================== */}
        <section className="lab-bridge" data-nav-theme="light">
          <div className="lab-bounds">
            <m.h2 className="bridge-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              Learning only matters<br />when it changes what you build.
            </m.h2>

            <m.div className="bridge-flow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
              {["QUESTION", "EXPERIMENT", "EVIDENCE", "INSIGHT", "SYSTEM"].map((word, i, arr) => (
                <React.Fragment key={word}>
                  <m.span className="bf-word" variants={fadeUp}>{word}</m.span>
                  {i < arr.length - 1 && <m.span className="bf-arrow" variants={fadeUp}>↓</m.span>}
                </React.Fragment>
              ))}
            </m.div>

            <m.div className="bridge-systems" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
              {[
                { name: "CareerOS", focus: "career intelligence" },
                { name: "AuraOS", focus: "memory & context" },
                { name: "VERITAS", focus: "reasoning & evidence" },
                { name: "VoltDrive", focus: "product experience" },
              ].map((sys) => (
                <m.div className="bs-item" key={sys.name} variants={fadeUp}>
                  <span className="bs-name">{sys.name}</span>
                  <span className="bs-arrow">→</span>
                  <span className="bs-focus">{sys.focus}</span>
                </m.div>
              ))}
            </m.div>

            <m.p className="bridge-statement" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Experiments become valuable when they eventually<br />
              change the systems you choose to build.
            </m.p>
          </div>
        </section>

        {/* ==================== 8. WHAT THE EXPERIMENTS PRODUCED ==================== */}
        <section className="lab-outcomes" data-nav-theme="light">
          <div className="lab-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
              WHAT THE EXPERIMENTS PRODUCED
            </m.div>

            <div className="outcomes-grid">
              {[
                { title: "SYSTEMS", desc: "Products moved from experiments into deployed experiences." },
                { title: "ENGINEERING", desc: "Learning expanded from implementation into architecture." },
                { title: "INTELLIGENCE", desc: "AI became a system concern rather than a single feature." },
                { title: "PRODUCT", desc: "Technical capability became something users could interact with." },
              ].map((o) => (
                <m.div className="outcome-item" key={o.title} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
                  <h3 className="oi-title">{o.title}</h3>
                  <p className="oi-desc">{o.desc}</p>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 9. LAB PRINCIPLES ==================== */}
        <section className="lab-principles" data-nav-theme="light">
          <div className="lab-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
              LAB PRINCIPLES
            </m.div>

            <div className="principles-stack">
              {[
                { num: "01", title: "QUESTION BEFORE IMPLEMENTATION", desc: "Understand the problem before optimizing the solution." },
                { num: "02", title: "EXPERIMENT BEFORE ASSUMPTION", desc: "Build small enough to learn quickly." },
                { num: "03", title: "EVIDENCE BEFORE CONFIDENCE", desc: "Let results change the direction." },
                { num: "04", title: "SIMPLICITY AFTER COMPLEXITY", desc: "Complex systems should still produce simple experiences." },
              ].map((p) => (
                <m.div className="principle-row" key={p.num} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                  <span className="pr-num">{p.num}</span>
                  <div className="pr-content">
                    <h3 className="pr-title">{p.title}</h3>
                    <p className="pr-desc">{p.desc}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================== 10. CURRENT EXPLORATION ==================== */}
        <section className="lab-exploration" data-nav-theme="light">
          <div className="lab-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
              CURRENT EXPLORATION
            </m.div>
            <m.p className="exploration-sub" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Where the next experiments are leading.
            </m.p>

            <m.div className="exploration-grid" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
              {[
                { area: "AI SYSTEMS", tags: "Memory · Context · Reasoning · Tool Use" },
                { area: "PRODUCT ENGINEERING", tags: "Interfaces · Workflows · Deployment" },
                { area: "SYSTEM DESIGN", tags: "Architecture · Data · APIs · Reliability" },
                { area: "ENGINEERING WRITING", tags: "Experiments · Decisions · Lessons" },
              ].map((e) => (
                <m.div className="eg-item" key={e.area} variants={fadeUp}>
                  <h3 className="eg-area">{e.area}</h3>
                  <p className="eg-tags">{e.tags}</p>
                </m.div>
              ))}
            </m.div>
          </div>
        </section>

        {/* ==================== 11. LAB STATUS ==================== */}
        <section className="lab-status-section" data-nav-theme="light">
          <div className="lab-bounds">
            <m.div className="lab-status-block" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
              <div className="ls-header">LAB STATUS</div>
              <div className="ls-grid">
                <div className="ls-item">
                  <span className="ls-key">MODE</span>
                  <span className="ls-val">EXPLORING</span>
                </div>
                <div className="ls-item">
                  <span className="ls-key">CURRENT FOCUS</span>
                  <span className="ls-val">AI SYSTEMS + PRODUCT ENGINEERING</span>
                </div>
                <div className="ls-item">
                  <span className="ls-key">OUTPUT</span>
                  <span className="ls-val">SYSTEMS · EXPERIMENTS · ENGINEERING NOTES</span>
                </div>
              </div>
            </m.div>
          </div>
        </section>

        {/* ==================== 12. CLOSING ==================== */}
        <section className="lab-closing" data-nav-theme="light">
          <div className="lab-bounds">
            <m.h2 className="lab-closing-primary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpSlow}>
              Not every experiment<br />becomes a product.
            </m.h2>
            <m.p className="lab-closing-secondary" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              But every good experiment changes<br />
              what gets built next.
            </m.p>

            <m.div className="lab-closing-sig" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              INNOVATION LAB<br />
              THE NAME IS BHAGAVAN<br />
              2026
            </m.div>

            <m.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
              <Link to="/work" className="lab-cta">
                Explore the systems <ArrowRight size={16} strokeWidth={2} />
              </Link>
            </m.div>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

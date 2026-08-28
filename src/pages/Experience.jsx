import React, { useState, useEffect } from "react";
import { m, useScroll, useTransform, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import BrandSignature from "../components/BrandSignature";
import "../styles/Experience.css";
import { X } from "lucide-react";

// ─── Certificate Artifacts ────────────────────────────────────────────────────
import studyOwlCert from "../assets/cert-studyowl.png";
import blackbucksCert from "../assets/cert-blackbucks.png";
import smartBridgeCert from "../assets/cert-smartbridge.png";
import helsonCert from "../assets/cert-helson.png";

// ─── Motion ───────────────────────────────────────────────────────────────────
const appleEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.1, ease: appleEase } },
};

const fadeUpStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// ─── Artifact Viewer Modal ────────────────────────────────────────────────────
function ArtifactViewer({ isOpen, onClose, imgSrc, imgAlt }) {
  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <m.div 
          className="artifact-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: appleEase }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Artifact Viewer"
        >
          <button className="am-close-btn" onClick={onClose} aria-label="Close viewer">
            <X size={24} strokeWidth={1.5} />
          </button>
          <m.div 
            className="am-modal-content"
            initial={{ scale: 0.98, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 10 }}
            transition={{ duration: 0.5, ease: appleEase, delay: 0.05 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="am-modal-header">VERIFIED ARTIFACT</div>
            <img src={imgSrc} alt={imgAlt} className="am-modal-img"  loading="lazy" />
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export default function Experience() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const [viewerState, setViewerState] = useState({ isOpen: false, src: "", alt: "" });

  const openViewer = (src, alt) => setViewerState({ isOpen: true, src, alt });
  const closeViewer = () => setViewerState(prev => ({ ...prev, isOpen: false }));

  const scrollToChapter = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        description="Professional experience of Bhagavan. Currently Technical AI/ML & Data Science Trainer at Data Valley. Documenting the engineering evolution across software, data, and AI systems."
        keywords="TheNameIsBhagavan, Bhagavan Experience, Technical AI/ML Trainer, Data Valley, AI Product Engineer, Machine Learning Experience, Software Engineering"
      />
      
      <ArtifactViewer 
        isOpen={viewerState.isOpen} 
        onClose={closeViewer} 
        imgSrc={viewerState.src} 
        imgAlt={viewerState.alt} 
      />

      <div className="exp-evolution-page">
        
        {/* ==================== 1. HERO ==================== */}
        <section className="exp-evolution-hero" data-nav-theme="light">
          <div className="evo-bounds hero-bounds">
            <m.div className="hero-eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease: appleEase }}>
              ENGINEERING EVOLUTION · 2022 — PRESENT
            </m.div>
            
            <m.h1 className="hero-massive-headline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.1, ease: appleEase }}>
              Experience changed<br/>how I build.
            </m.h1>
            
            <m.p className="hero-supporting-copy" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2, delay: 0.2, ease: appleEase }}>
              From learning how to work with data<br/>
              to designing intelligent systems<br/>
              and teaching them professionally —<br/>
              each experience shaped how I think about software.
            </m.p>

            <m.div className="hero-vertical-meta" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.4, ease: appleEase }}>
              EXPERIENCE / ENGINEERING / PRESENT
            </m.div>
          </div>
        </section>

        {/* ==================== 2. EVOLUTION INDEX ==================== */}
        <section className="evo-index-section" data-nav-theme="light">
          <div className="evo-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
              THE EVOLUTION
            </m.div>
            <div className="evo-index-row">
              <button onClick={() => scrollToChapter('chap-foundation')} className="evo-milestone">
                <span className="em-num">01</span>
                <span className="em-title">FOUNDATION</span>
                <span className="em-desc">Learning from data</span>
                <div className="em-line"></div>
              </button>
              <button onClick={() => scrollToChapter('chap-product')} className="evo-milestone">
                <span className="em-num">02</span>
                <span className="em-title">PRODUCT</span>
                <span className="em-desc">Building products</span>
                <div className="em-line"></div>
              </button>
              <button onClick={() => scrollToChapter('chap-intelligence')} className="evo-milestone">
                <span className="em-num">03</span>
                <span className="em-title">INTELLIGENCE</span>
                <span className="em-desc">Applying intelligence</span>
                <div className="em-line"></div>
              </button>
              <button onClick={() => scrollToChapter('chap-systems')} className="evo-milestone">
                <span className="em-num">04</span>
                <span className="em-title">SYSTEMS</span>
                <span className="em-desc">Designing workflows</span>
                <div className="em-line"></div>
              </button>
              <button onClick={() => scrollToChapter('chap-current')} className="evo-milestone">
                <span className="em-num">05</span>
                <span className="em-title">CURRENT</span>
                <span className="em-desc">Teaching & building</span>
                <div className="em-line"></div>
              </button>
            </div>
          </div>
        </section>

        {/* ==================== 3. CORE NARRATIVE ==================== */}
        <section className="evo-core-narrative" data-nav-theme="light">
          <div className="evo-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUp}>
              HOW THE WORK CHANGED ME
            </m.div>
            
            <div className="narrative-stack">
              <m.h2 className="narrative-huge" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-200px" }} variants={fadeUp}>
                I didn't learn engineering<br/>all at once.
              </m.h2>
              
              <m.h3 className="narrative-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-200px" }} variants={fadeUp}>
                First, I learned to understand the data.
              </m.h3>
              
              <m.h3 className="narrative-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-200px" }} variants={fadeUp}>
                Then, I learned to build the product around it.
              </m.h3>
              
              <m.h3 className="narrative-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-200px" }} variants={fadeUp}>
                Then, I learned to make intelligence useful.
              </m.h3>
              
              <m.h3 className="narrative-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-200px" }} variants={fadeUp}>
                Then, I learned to think in systems.
              </m.h3>
              
              <m.h3 className="narrative-step" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-200px" }} variants={fadeUp}>
                Now, I teach these technologies professionally — and keep building.
              </m.h3>
            </div>
          </div>
        </section>

        {/* ==================== CURRENT: DATA VALLEY ==================== */}
        <section id="chap-current" className="evo-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            <m.div className="chapter-meta" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="cm-num">CURRENT · 2026 — PRESENT</span>
              <span className="cm-company">DATA VALLEY</span>
            </m.div>
            
            <m.h2 className="chapter-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Teaching what I build.
            </m.h2>

            <div className="chapter-grid">
              <m.div className="cg-left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="role-meta">
                  <span className="rm-company">DATA VALLEY</span>
                  <span className="rm-role">Technical AI/ML & Data Science Trainer</span>
                  <span className="rm-period">Vijayawada, Andhra Pradesh · 2026 — Present</span>
                </div>
              </m.div>
              <m.div className="cg-right" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
                <m.p className="cg-lesson" variants={fadeUp}>
                  Teaching AI and Data Science professionally changed how I communicate technical complexity.
                </m.p>
                <m.p className="cg-editorial" variants={fadeUp}>
                  Delivering hands-on technical training across Data Science, Machine Learning, and AI — developing structured curricula, coding labs, practical exercises, and project-based learning experiences for students across college, in-office, and online programs.
                </m.p>
                
                <m.div className="cg-changed" variants={fadeUp}>
                  <span className="cgc-label">WHAT THIS ROLE INVOLVES</span>
                  <span className="cgc-text">Curriculum Design · Live Instruction · Lab Development · Project Mentoring · Technical Communication · PPT & Theory Preparation · Practical Sessions · Coding Exercises</span>
                </m.div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ==================== 4. CHAPTER 01: BLACKBUCKS ==================== */}
        <section id="chap-foundation" className="evo-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            <m.div className="chapter-meta" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="cm-num">CHAPTER 01</span>
              <span className="cm-company">BLACKBUCKS</span>
            </m.div>
            
            <m.h2 className="chapter-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Learning from data.
            </m.h2>

            <div className="chapter-grid">
              <m.div className="cg-left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="role-meta">
                  <span className="rm-company">BLACKBUCKS</span>
                  <span className="rm-role">Machine Learning Intern</span>
                  <span className="rm-period">Foundation</span>
                </div>
              </m.div>
              <m.div className="cg-right" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
                <m.p className="cg-lesson" variants={fadeUp}>
                  Before building intelligent products, I had to learn what intelligence depends on: data, structure, and signal.
                </m.p>
                <m.p className="cg-editorial" variants={fadeUp}>
                  The real challenge wasn't building models—it was understanding data itself. Working with complex workflows revealed that successful AI systems depend entirely on the quality of the data and the rigor of the process.
                </m.p>
                
                <m.div className="cg-changed" variants={fadeUp}>
                  <span className="cgc-label">WHAT CHANGED</span>
                  <span className="cgc-text">Data became more than input. It became the foundation of every decision.</span>
                </m.div>

                {/* VERIFIED ARTIFACT */}
                <m.div className="verified-artifact-wrap artifact-scale-1" variants={fadeUp}>
                  <div className="va-header">
                    <span className="va-label">VERIFIED ARTIFACT</span>
                    <span className="va-relationship">This artifact marks the beginning of the progression: understanding data before designing intelligence.</span>
                  </div>
                  <button 
                    className="va-image-btn" 
                    onClick={() => openViewer(blackbucksCert, "Blackbucks Machine Learning Internship Certificate")}
                    aria-label="View Blackbucks Machine Learning Internship Certificate"
                  >
                    <img src={blackbucksCert} alt="Blackbucks Machine Learning Internship Certificate" loading="lazy" />
                    <div className="va-hover-label">VIEW ARTIFACT ↗</div>
                  </button>
                  <div className="va-footer">
                    <span>DOCUMENTED EXPERIENCE / 01</span>
                    <span>2024</span>
                  </div>
                </m.div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ==================== 5. CHAPTER 02: STUDYOWL ==================== */}
        <section id="chap-product" className="evo-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            <m.div className="chapter-meta" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="cm-num">CHAPTER 02</span>
              <span className="cm-company">STUDYOWL</span>
            </m.div>
            
            <m.h2 className="chapter-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Learning to build for people.
            </m.h2>

            <div className="chapter-grid">
              <m.div className="cg-left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="role-meta">
                  <span className="rm-company">STUDYOWL</span>
                  <span className="rm-role">Software Development Intern</span>
                  <span className="rm-period">From Code → Product</span>
                </div>
              </m.div>
              <m.div className="cg-right" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
                <m.p className="cg-lesson" variants={fadeUp}>
                  Architecture is only useful when people can actually use what you build.
                </m.p>
                <m.p className="cg-editorial" variants={fadeUp}>
                  Software engineering became more than writing code. It introduced the full lifecycle of building digital products. Working across frontend and backend technologies revealed how architecture, usability, and reliability must work together.
                </m.p>
                
                <m.div className="cg-changed" variants={fadeUp}>
                  <span className="cgc-label">ENGINEERING SHIFT</span>
                  <span className="cgc-text">Frontend + Backend + Usability + Reliability</span>
                </m.div>

                {/* VERIFIED ARTIFACT */}
                <m.div className="verified-artifact-wrap artifact-scale-2" variants={fadeUp}>
                  <div className="va-header">
                    <span className="va-label">VERIFIED ARTIFACT</span>
                    <span className="va-relationship">The next step was learning that engineering is not complete when code works. It is complete when people can use the product.</span>
                  </div>
                  <button 
                    className="va-image-btn" 
                    onClick={() => openViewer(studyOwlCert, "StudyOwl Software Development Internship Certificate")}
                    aria-label="View StudyOwl Software Development Internship Certificate"
                  >
                    <img src={studyOwlCert} alt="StudyOwl Software Development Internship Certificate" loading="lazy" />
                    <div className="va-hover-label">VIEW ARTIFACT ↗</div>
                  </button>
                  <div className="va-footer">
                    <span>DOCUMENTED EXPERIENCE / 02</span>
                    <span>2024</span>
                  </div>
                </m.div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ==================== 6. CHAPTER 03: SMARTBRIDGE ==================== */}
        <section id="chap-intelligence" className="evo-chapter chapter-dark" data-nav-theme="light">
          <div className="evo-bounds">
            <m.div className="chapter-meta" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="cm-num">CHAPTER 03</span>
              <span className="cm-company">SMARTBRIDGE</span>
            </m.div>
            
            <m.h2 className="chapter-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Making intelligence useful.
            </m.h2>

            <div className="chapter-grid">
              <m.div className="cg-left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="role-meta">
                  <span className="rm-company">SMARTBRIDGE</span>
                  <span className="rm-role">Software Engineering Intern</span>
                  <span className="rm-period">From Product → Intelligence</span>
                </div>
              </m.div>
              <m.div className="cg-right" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
                <m.p className="cg-lesson" variants={fadeUp}>
                  AI stopped being a technology I studied and became a system I had to make useful.
                </m.p>
                <m.p className="cg-editorial" variants={fadeUp}>
                  The focus shifted from building systems to creating solutions. Working with artificial intelligence and automation revealed that technology creates value only when it solves real problems for real people.
                </m.p>
                
                <m.div className="cg-changed" variants={fadeUp}>
                  <span className="cgc-label">ENGINEERING SHIFT</span>
                  <span className="cgc-text formula-text">AI + AUTOMATION + DECISION MAKING = IMPACT</span>
                </m.div>

                {/* VERIFIED ARTIFACT */}
                <m.div className="verified-artifact-wrap artifact-scale-3" variants={fadeUp}>
                  <div className="va-header">
                    <span className="va-label">VERIFIED ARTIFACT</span>
                    <span className="va-relationship">This experience moved engineering from implementation toward intelligent behavior, automation, and practical AI.</span>
                  </div>
                  <button 
                    className="va-image-btn" 
                    onClick={() => openViewer(smartBridgeCert, "SmartBridge Software Engineering Certificate")}
                    aria-label="View SmartBridge Software Engineering Certificate"
                  >
                    <img src={smartBridgeCert} alt="SmartBridge Software Engineering Certificate" loading="lazy" />
                    <div className="va-hover-label">VIEW ARTIFACT ↗</div>
                  </button>
                  <div className="va-footer">
                    <span>DOCUMENTED EXPERIENCE / 03</span>
                    <span>2024</span>
                  </div>
                </m.div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ==================== 7. CHAPTER 04: HELSON ==================== */}
        <section id="chap-systems" className="evo-chapter" data-nav-theme="light">
          <div className="evo-bounds">
            <m.div className="chapter-meta" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="cm-num">CHAPTER 04</span>
              <span className="cm-company">HELSON</span>
            </m.div>
            
            <m.h2 className="chapter-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Learning to think in workflows.
            </m.h2>

            <div className="chapter-grid">
              <m.div className="cg-left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="role-meta">
                  <span className="rm-company">HELSON</span>
                  <span className="rm-role">Enterprise Automation Intern</span>
                  <span className="rm-period">From Features → Systems</span>
                </div>
                
                <div className="architectural-flow">
                  <span>INPUT</span>
                  <span className="flow-arrow">↓</span>
                  <span>PROCESS</span>
                  <span className="flow-arrow">↓</span>
                  <span>DECISION</span>
                  <span className="flow-arrow">↓</span>
                  <span>OUTCOME</span>
                </div>
              </m.div>
              
              <m.div className="cg-right" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
                <m.p className="cg-lesson" variants={fadeUp}>
                  At enterprise scale, individual features stop being the whole problem. The system around them becomes the problem.
                </m.p>
                <m.p className="cg-editorial" variants={fadeUp}>
                  Process automation required a different scale of thinking. It emphasized system thinking—understanding how individual processes connect and how information flows to transform complexity into reliability.
                </m.p>
                
                <m.div className="cg-changed" variants={fadeUp}>
                  <span className="cgc-label">ENGINEERING SHIFT</span>
                  <span className="cgc-text">Moving from building isolated features to architecting interconnected, resilient systems.</span>
                </m.div>

                {/* VERIFIED ARTIFACT */}
                <m.div className="verified-artifact-wrap artifact-scale-4" variants={fadeUp}>
                  <div className="va-header">
                    <span className="va-label">VERIFIED ARTIFACT</span>
                    <span className="va-relationship">The focus shifted from individual features to workflows, integration, and systems that operate across boundaries.</span>
                  </div>
                  <button 
                    className="va-image-btn" 
                    onClick={() => openViewer(helsonCert, "Helson Enterprise Automation Certificate")}
                    aria-label="View Helson Enterprise Automation Certificate"
                  >
                    <img src={helsonCert} alt="Helson Enterprise Automation Certificate" loading="lazy" />
                    <div className="va-hover-label">VIEW ARTIFACT ↗</div>
                  </button>
                  <div className="va-footer">
                    <span>DOCUMENTED EXPERIENCE / 04</span>
                    <span>2024</span>
                  </div>
                </m.div>
              </m.div>
            </div>
          </div>
        </section>

        {/* ==================== 8. THE INFLECTION POINT ==================== */}
        <section className="evo-inflection" data-nav-theme="light">
          <div className="evo-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              THE INFLECTION POINT
            </m.div>
            <m.h2 className="inflection-statement" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              These experiences became the foundation<br/>
              for what I build now.
            </m.h2>
            
            <m.div className="inflection-flow" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpStagger}>
              <m.span className="if-term" variants={fadeUp}>01 FOUNDATION</m.span>
              <m.span className="if-arrow" variants={fadeUp}>→</m.span>
              <m.span className="if-term" variants={fadeUp}>02 PRODUCT</m.span>
              <m.span className="if-arrow" variants={fadeUp}>→</m.span>
              <m.span className="if-term" variants={fadeUp}>03 INTELLIGENCE</m.span>
              <m.span className="if-arrow" variants={fadeUp}>→</m.span>
              <m.span className="if-term" variants={fadeUp}>04 SYSTEMS</m.span>
              <m.span className="if-arrow" variants={fadeUp}>→</m.span>
              <m.span className="if-term highlight" variants={fadeUp}>05 TEACHING & BUILDING</m.span>
            </m.div>

            <m.div className="inflection-consequence" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="ic-systems">
                <span>CareerOS</span>
                <span>AuraOS</span>
                <span>VERITAS</span>
                <span>VoltDrive</span>
              </div>
            </m.div>
          </div>
        </section>

        {/* ==================== 9. ENGINEERING PERSPECTIVE ==================== */}
        <section className="evo-perspective" data-nav-theme="light">
          <div className="evo-bounds">
            <m.div className="section-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              WHAT EXPERIENCE TAUGHT ME
            </m.div>
            
            <div className="perspective-grid">
              <m.div className="pg-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <span className="pg-num">01</span>
                <span className="pg-title">UNDERSTAND THE PROBLEM</span>
                <span className="pg-desc">Technology is only useful if it solves a real issue.</span>
              </m.div>
              
              <m.div className="pg-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <span className="pg-num">02</span>
                <span className="pg-title">DESIGN THE SYSTEM</span>
                <span className="pg-desc">Architecture dictates reliability and scale.</span>
              </m.div>
              
              <m.div className="pg-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <span className="pg-num">03</span>
                <span className="pg-title">MAKE INTELLIGENCE USEFUL</span>
                <span className="pg-desc">AI must be integrated cleanly into workflows to matter.</span>
              </m.div>
              
              <m.div className="pg-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <span className="pg-num">04</span>
                <span className="pg-title">SHIP FOR REAL PEOPLE</span>
                <span className="pg-desc">The user's experience is the final measure of engineering success.</span>
              </m.div>
            </div>
          </div>
        </section>

        {/* ==================== 10. CLOSING ==================== */}
        <section className="evo-closing" data-nav-theme="light">
          <div className="evo-bounds">
            <m.h2 className="closing-statement" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              I build differently<br/>
              because I learned differently.
            </m.h2>
            <m.p className="closing-sub" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              Every experience left something behind:<br/>
              a better question,<br/>
              a stronger system,<br/>
              a clearer way to build.
            </m.p>
            
            <m.div className="closing-signature" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              THE NAME IS BHAGAVAN<br/>
              ENGINEERING EVOLUTION · 2022 — PRESENT
            </m.div>
          </div>
        </section>

        <BrandSignature />
      </div>
    </>
  );
}

import React, { memo, useState, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { m as Motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, ArrowUp, Check, Copy, Mail, MapPin } from "lucide-react";
import { socialLinks } from "../constants/socialLinks";

import dvLabsHeroImg from "../assets/dvlabs-hero.jpg";
import dheergayushHeroImg from "../assets/dheergayush-hero.jpg";
import dvAssessmentImg from "../assets/datavalley-assessment-platform.png";
import careerOsImg from "../assets/careeros-new.jpg";
import auraOsImg from "../assets/aurabot-new.png";
import voltDriveImg from "../assets/ev.png";
import veritasImg from "../assets/fake.jpg";
import logoImg from "../assets/logo.png";

import "../styles/Footer.css";

const NAV_LINKS = [
  { name: "Overview", path: "/" },
  { name: "Work", path: "/work" },
  { name: "Experience", path: "/experience" },
  { name: "Vision", path: "/vision" },
  { name: "Innovation", path: "/innovation" },
  { name: "Credentials", path: "/credentials" },
  { name: "Connect", path: "/connect" },
  { name: "Resume", path: "/resume" },
];

const FEATURED_SYSTEMS = [
  {
    id: "01",
    name: "DV Labs Platform",
    desc: "Milestone-Locked Engineering Ecosystem",
    domain: "dvlabs.datavalley.ai",
    summary:
      "AI-guided capstone platform coordinating six-stage bilingual Telugu/English video tracks, milestone checkpoints, and automated AI viva evaluations.",
    stack: ["Next.js", "React 19", "TypeScript", "MongoDB Atlas"],
    tag: "Company · Production",
    status: "DEPLOYED · LIVE SYSTEM",
    url: "https://dvlabs.datavalley.ai/",
    internalPath: "/work/dv-labs-platform",
    img: dvLabsHeroImg,
  },
  {
    id: "02",
    name: "DHEERGAYUSH",
    desc: "Bilingual Clinical Voice AI System",
    domain: "dheergayush.com",
    summary:
      "End-to-end 2D doctor avatar with real-time audio-driven lip synchronization, Telugu/English/Tanglish voice interaction, and GPT-4o-mini clinical routing.",
    stack: ["Next.js 15", "OpenAI", "Gemini", "Web Audio API"],
    tag: "Flagship · Clinical AI",
    status: "MULTIMODAL · CLINICAL AI",
    url: null,
    internalPath: "/work",
    img: dheergayushHeroImg,
  },
  {
    id: "03",
    name: "CareerOS",
    desc: "AI Career Intelligence Architecture",
    domain: "careeros-thenameisbhagavan.vercel.app",
    summary:
      "Full-stack career platform parsing resumes, analyzing live GitHub engineering activity, mapping role readiness, and recommending structured next steps.",
    stack: ["React", "FastAPI", "Python", "Gemini API"],
    tag: "Personal · Intelligence",
    status: "DEPLOYED · LIVE SYSTEM",
    url: "https://careeros-thenameisbhagavan.vercel.app/",
    internalPath: "/work/careeros",
    img: careerOsImg,
  },
  {
    id: "04",
    name: "DV Labs Assessment",
    desc: "Synchronized Evaluation & Testing Engine",
    domain: "dv-assesments.vercel.app",
    summary:
      "Tamper-resistant technical testing platform with server-authoritative timers, HTTP-only session locks, background delta sync, and automated proctoring.",
    stack: ["Next.js", "TypeScript", "MongoDB", "JWT"],
    tag: "Company · Evaluation",
    status: "DEPLOYED · LIVE SYSTEM",
    url: "https://dv-assesments.vercel.app/",
    internalPath: "/work/data-valley-assessment-platform",
    img: dvAssessmentImg,
  },
  {
    id: "05",
    name: "VERITAS",
    desc: "Deterministic Claim Verification Pipeline",
    domain: "veritas-thenameisbhagavan.vercel.app",
    summary:
      "Explainable NLP credibility analysis engine decomposing claims, cross-referencing structured linguistic evidence, and surfacing transparent confidence signals.",
    stack: ["React", "FastAPI", "spaCy", "Transformers"],
    tag: "Personal · Explainable AI",
    status: "DEPLOYED · LIVE SYSTEM",
    url: "https://veritas-thenameisbhagavan.vercel.app/",
    internalPath: "/work/veritas",
    img: veritasImg,
  },
  {
    id: "06",
    name: "AuraOS",
    desc: "Spatial AI Workspace & Memory Canvas",
    domain: "aura-os-thenameisbhagavan.vercel.app",
    summary:
      "Context-persistent conversational OS unifying vector recall, multi-session knowledge graphs, and low-latency reasoning across ongoing workflows.",
    stack: ["React", "RAG", "Vector Search", "Session Graph"],
    tag: "Personal · Context OS",
    status: "DEPLOYED · LIVE SYSTEM",
    url: "https://aura-os-thenameisbhagavan.vercel.app/",
    internalPath: "/work/auraos",
    img: auraOsImg,
  },
  {
    id: "07",
    name: "VoltDrive",
    desc: "EV Telemetry & WebGL Showroom",
    domain: "voltdrive-thenameisbhagavan.vercel.app",
    summary:
      "Interactive 3D electric vehicle showroom combining physically grounded lighting, real-time camera choreography, and high-frame-rate motion UI.",
    stack: ["React 19", "Three.js", "GSAP", "Framer Motion"],
    tag: "Personal · 3D Experience",
    status: "DEPLOYED · LIVE SYSTEM",
    url: "https://voltdrive-thenameisbhagavan.vercel.app/",
    internalPath: "/work/voltdrive",
    img: voltDriveImg,
  },
];

const Footer = memo(function Footer() {
  const navigate = useNavigate();
  const footerRef = useRef(null);
  const [activeSystem, setActiveSystem] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleNavigation = useCallback(
    (path) => {
      navigate(path);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
    [navigate]
  );

  const handleScrollTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(socialLinks.email.handle);
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2200);
    } catch {
      window.location.href = socialLinks.email.url;
    }
  }, []);

  const handleSpotlightMove = useCallback((e) => {
    if (!footerRef.current) return;
    const rect = footerRef.current.getBoundingClientRect();
    footerRef.current.style.setProperty("--fmx", `${e.clientX - rect.left}px`);
    footerRef.current.style.setProperty("--fmy", `${e.clientY - rect.top}px`);
  }, []);

  const currentSystem = FEATURED_SYSTEMS[activeSystem];
  const socialChannels = [
    socialLinks.github && { label: "GitHub", url: socialLinks.github.url },
    socialLinks.linkedin && { label: "LinkedIn", url: socialLinks.linkedin.url },
    socialLinks.youtube && { label: "YouTube", url: socialLinks.youtube.url },
    socialLinks.twitter && { label: "X (Twitter)", url: socialLinks.twitter.url },
    socialLinks.instagram && { label: "Instagram", url: socialLinks.instagram.url },
  ].filter(Boolean);

  return (
    <footer
      ref={footerRef}
      onMouseMove={handleSpotlightMove}
      className="footer-sig"
      data-nav-theme="dark"
      role="contentinfo"
    >
      <div className="fsig-grid-bg" aria-hidden="true" />
      <div className="fsig-spotlight" aria-hidden="true" />

      <div className="footer-sig-bounds">
        {/* ============================================================
            ZONE 1 — TITANIUM HERO CLOSURE & DIRECT ACTIONS
            ============================================================ */}
        <section className="fsig-top-bento" aria-label="Footer Summary and Quick Actions">
          <div className="fsig-top-copy">
            <div className="fsig-status-pill">
              <span className="fsig-status-dot" aria-hidden="true" />
              <span>AVAILABLE FOR ENGINEERING &amp; APPLIED AI</span>
            </div>
            <h2 className="fsig-headline">
              Engineered with clarity.<span className="fsig-headline-accent"> Built to endure.</span>
            </h2>
            <p className="fsig-lead">
              Production software, full-stack AI platforms, and technical training led by Bhagavan in Vijayawada, India.
            </p>
          </div>

          <div className="fsig-top-actions">
            <button
              type="button"
              onClick={() => handleNavigation("/connect")}
              className="fsig-pill-primary apple-pressable"
            >
              <span>Start a Conversation</span>
              <ArrowRight size={15} />
            </button>

            <button
              type="button"
              onClick={() => handleNavigation("/resume")}
              className="fsig-pill-secondary apple-pressable"
            >
              <span>View Resume</span>
            </button>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={`fsig-pill-email apple-pressable ${emailCopied ? "copied" : ""}`}
              aria-label={`Copy ${socialLinks.email.handle}`}
            >
              {emailCopied ? <Check size={14} color="#34c759" /> : <Copy size={14} />}
              <span>{emailCopied ? "Email Copied" : socialLinks.email.handle}</span>
            </button>
          </div>
        </section>

        <div className="fsig-hairline" />

        {/* ============================================================
            ZONE 2 — INTERACTIVE SYSTEMS STAGE (07 FLAGSHIPS)
            ============================================================ */}
        <section className="fsig-work-zone" aria-label="Featured Systems Showcase">
          <div className="fsig-section-head">
            <span className="fsig-section-label">SHIPPED SYSTEMS INDEX</span>
            <span className="fsig-section-counter">07 ARCHITECTURE HIGHLIGHTS</span>
          </div>

          <div className="fsig-work-layout">
            <div className="fsig-work-list" role="tablist" aria-label="Featured Portfolio Systems">
              {FEATURED_SYSTEMS.map((sys, idx) => {
                const isSelected = activeSystem === idx;
                return (
                  <div
                    key={sys.id}
                    role="tab"
                    tabIndex={0}
                    aria-selected={isSelected}
                    className={`fsig-work-row ${isSelected ? "is-active" : ""}`}
                    onMouseEnter={() => setActiveSystem(idx)}
                    onFocus={() => setActiveSystem(idx)}
                    onClick={() => {
                      setActiveSystem(idx);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveSystem(idx);
                      }
                    }}
                  >
                    <div className="fwr-left">
                      <span className="fwr-num">{sys.id}</span>
                      <div className="fwr-info">
                        <span className="fwr-name">{sys.name}</span>
                        <span className="fwr-desc">{sys.desc}</span>
                      </div>
                    </div>
                    <div className="fwr-right">
                      <span className="fwr-tag">{sys.tag}</span>
                      <ArrowUpRight size={15} className="fwr-arrow" aria-hidden="true" />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="fsig-preview-container">
              <div className="fsig-preview-frame">
                <AnimatePresence mode="wait">
                  <Motion.div
                    key={currentSystem.id}
                    className="fsig-preview-card"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4, transition: { duration: 0.14 } }}
                    transition={{ duration: 0.26, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {/* Subtle Apple Browser Chrome */}
                    <div className="fpc-chrome">
                      <div className="fpc-dots" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                      </div>
                      <span className="fpc-domain">{currentSystem.domain}</span>
                      <span className="fpc-index-badge">{currentSystem.id} / 07</span>
                    </div>

                    {/* Zero-Gap Widescreen Visual Stage */}
                    <div className="fpc-img-wrap">
                      <img
                        src={currentSystem.img}
                        alt={currentSystem.name}
                        className="fpc-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>

                    {/* Architecture Summary & Stack Strip */}
                    <div className="fpc-spec-body">
                      <p className="fpc-summary">{currentSystem.summary}</p>
                      <div className="fpc-stack-row">
                        {currentSystem.stack.map((tech) => (
                          <span key={tech} className="fpc-stack-chip">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Footer */}
                    <div className="fpc-footer">
                      <div className="fpc-meta">
                        <span className="fpc-id">{currentSystem.id}</span>
                        <div>
                          <span className="fpc-title">{currentSystem.name}</span>
                          <span className="fpc-substatus">{currentSystem.status}</span>
                        </div>
                      </div>

                      <div className="fpc-btn-group">
                        <button
                          type="button"
                          onClick={() => handleNavigation(currentSystem.internalPath)}
                          className="fpc-secondary-pill"
                        >
                          <span>Case Study</span>
                          <ArrowRight size={12} />
                        </button>

                        {currentSystem.url && (
                          <a
                            href={currentSystem.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fpc-action-pill"
                          >
                            <span>Launch</span>
                            <ArrowUpRight size={13} />
                          </a>
                        )}
                      </div>
                    </div>
                  </Motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <div className="fsig-hairline" />

        {/* ============================================================
            ZONE 3 — BENTO DIRECTORY & STUDIO SPECIFICATION
            ============================================================ */}
        <section className="fsig-directory-grid" aria-label="Footer Directory">
          <div className="fsig-dir-col">
            <span className="fsig-column-label">SITE DIRECTORY</span>
            <nav className="fsig-routes-grid" aria-label="Footer Navigation">
              {NAV_LINKS.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleNavigation(item.path)}
                  className="fsig-route-link"
                >
                  {item.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="fsig-dir-col">
            <span className="fsig-column-label">CONNECT &amp; CHANNELS</span>
            <div className="fsig-social-grid">
              {socialChannels.map((ch) => (
                <a
                  key={ch.label}
                  href={ch.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fsig-social-link"
                >
                  <span>{ch.label}</span>
                  <ArrowUpRight size={12} />
                </a>
              ))}
              <a href={socialLinks.email.url} className="fsig-social-link">
                <Mail size={12} />
                <span>Direct Email</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          <div className="fsig-studio-spec">
            <div className="fsig-spec-top">
              <span className="fsig-column-label">PRACTICE &amp; LOCATION</span>
              <span className="fsig-spec-loc">
                <MapPin size={12} aria-hidden="true" />
                Vijayawada, India
              </span>
            </div>
            <p className="fsig-spec-role">
              Software Engineer &amp; AI Solutions Developer at{" "}
              <strong>Data Valley Training, Placements &amp; IT Solutions</strong>.
            </p>
            <div className="fsig-spec-foot">
              <button
                type="button"
                onClick={handleScrollTop}
                className="fsig-top-trigger apple-pressable"
              >
                <span>Back to Top</span>
                <ArrowUp size={13} />
              </button>
            </div>
          </div>
        </section>

        <div className="fsig-hairline fsig-hairline-tight" />

        {/* ============================================================
            ZONE 4 — MINIMAL APPLE COLOPHON SIGNATURE
            ============================================================ */}
        <section className="fsig-bottom-bar" aria-label="Brand Signature and Copyright">
          <div className="fsig-bottom-left">
            <div className="fsig-brand-mark">
              <img src={logoImg} alt="TNB mark" className="fsig-bottom-logo" />
              <span className="fsig-bottom-wordmark">THE NAME IS BHAGAVAN</span>
            </div>
            <span className="fsig-bottom-tagline">
              Software Engineer &middot; AI Solutions Developer &middot; Technical Educator
            </span>
          </div>

          <div className="fsig-bottom-right">
            <span className="fsig-copyright">
              &copy; 2026 THE NAME IS BHAGAVAN. All rights reserved.
            </span>
          </div>
        </section>
      </div>
    </footer>
  );
});

export default Footer;

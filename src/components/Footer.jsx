import React, { memo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowRight, Mail } from "lucide-react";
import { socialLinks } from "../constants/socialLinks";

// System preview assets & logo
import dvAssessmentImg from "../assets/datavalley-assessment-platform.png";
import careerOsImg from "../assets/careeros-new.jpg";
import auraOsImg from "../assets/aurabot-new.png";
import voltDriveImg from "../assets/ev.png";
import veritasImg from "../assets/fake.jpg";
import logoImg from "../assets/logo.png";

import "../styles/Footer.css";

const Footer = memo(function Footer() {
  const navigate = useNavigate();
  const [activeSystem, setActiveSystem] = useState(0);

  const handleNavigation = useCallback(
    (path) => {
      navigate(path);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
    [navigate]
  );

  const navLinks = [
    { name: "Overview",       path: "/" },
    { name: "Projects",       path: "/work" },
    { name: "Experience",     path: "/experience" },
    { name: "Innovation",     path: "/innovation" },
    { name: "Connect",        path: "/connect" },
    { name: "Resume",         path: "/resume" }
  ];

  const systems = [
    {
      id: "01",
      name: "DV Assessments",
      desc: "Enterprise Assessment Platform",
      tag: "Next.js · Enterprise",
      url: "https://dv-assesments.vercel.app/",
      img: dvAssessmentImg
    },
    {
      id: "02",
      name: "CareerOS",
      desc: "AI Career Intelligence Platform",
      tag: "FastAPI · Intelligence",
      url: "https://careeros-thenameisbhagavan.vercel.app/",
      img: careerOsImg
    },
    {
      id: "03",
      name: "AuraOS",
      desc: "Spatial AI OS & Memory Workspace",
      tag: "React · Context OS",
      url: "https://aura-os-thenameisbhagavan.vercel.app/",
      img: auraOsImg
    },
    {
      id: "04",
      name: "VERITAS",
      desc: "AI Trust & Fact Tracing Pipeline",
      tag: "Python · Explainable AI",
      url: "https://veritas-thenameisbhagavan.vercel.app/",
      img: veritasImg
    },
    {
      id: "05",
      name: "VoltDrive",
      desc: "EV Telemetry & Digital Showroom",
      tag: "Telemetry · 3D Showroom",
      url: "https://voltdrive-thenameisbhagavan.vercel.app/",
      img: voltDriveImg
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-sig" data-nav-theme="light" role="contentinfo">
      <div className="footer-sig-bounds">
        
        {/* ============================================================
            ZONE A — SIGNATURE CLOSING STATEMENT
            ============================================================ */}
        <section className="fsig-zone fsig-statement-zone" aria-label="Closing Statement">
          <div className="fsig-statement-grid">
            <div className="fsig-statement-main">
              <span className="fsig-eyebrow">TNB / ENGINEERING / {currentYear}</span>
              <h2 className="fsig-statement-title">
                THE WORK<br />
                CONTINUES.
              </h2>
            </div>
            
            <div className="fsig-statement-aside">
              <p className="fsig-statement-desc">
                Software, intelligent systems, and ideas built to be useful.
              </p>
              <button 
                className="fsig-connect-cta apple-pressable"
                onClick={() => handleNavigation("/connect")}
                aria-label="Start a conversation via Connect"
              >
                <span>Start a conversation</span>
                <ArrowRight size={14} className="fsig-cta-arrow" />
              </button>
            </div>
          </div>
        </section>

        <div className="fsig-hairline" />

        {/* ============================================================
            ZONE B — SELECTED WORK, INTELLIGENTLY SIMPLIFIED
            ============================================================ */}
        <section className="fsig-zone fsig-work-zone" aria-label="Selected Systems">
          <div className="fsig-section-head">
            <span className="fsig-section-label">SELECTED WORK</span>
            <span className="fsig-section-counter">05 SYSTEMS IN PRODUCTION</span>
          </div>

          <div className="fsig-work-layout">
            {/* Left: Compact Editorial Index */}
            <div className="fsig-work-list" role="list">
              {systems.map((sys, idx) => {
                const isSelected = activeSystem === idx;
                return (
                  <a
                    key={sys.id}
                    href={sys.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`fsig-work-row ${isSelected ? "is-active" : ""}`}
                    onMouseEnter={() => setActiveSystem(idx)}
                    onFocus={() => setActiveSystem(idx)}
                    role="listitem"
                    aria-label={`${sys.name}: ${sys.desc}`}
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
                      <ArrowUpRight size={16} className="fwr-arrow" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Right: Anchored Editorial Preview Window */}
            <div className="fsig-preview-container" aria-hidden="true">
              <div className="fsig-preview-frame">
                <AnimatePresence mode="wait">
                  <m.div
                    key={systems[activeSystem].id}
                    className="fsig-preview-card"
                    initial={{ opacity: 0, scale: 0.98, y: 6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98, y: -4, transition: { duration: 0.16 } }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="fpc-img-wrap">
                      <img 
                        src={systems[activeSystem].img} 
                        alt={systems[activeSystem].name} 
                        className="fpc-img"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="fpc-footer">
                      <div className="fpc-meta">
                        <span className="fpc-id">{systems[activeSystem].id}</span>
                        <span className="fpc-title">{systems[activeSystem].name}</span>
                      </div>
                      <span className="fpc-status">DEPLOYED · LIVE VIEW ↗</span>
                    </div>
                  </m.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <div className="fsig-hairline" />

        {/* ============================================================
            ZONE C — CONTACT AND NAVIGATION
            ============================================================ */}
        <section className="fsig-zone fsig-contact-zone" aria-label="Contact and Navigation">
          <div className="fsig-contact-grid">
            
            {/* Left Column: Direct Invitation */}
            <div className="fsig-invite-block">
              <span className="fsig-section-label">GET IN TOUCH</span>
              <h3 className="fsig-invite-title">Have something worth building?</h3>
              <p className="fsig-invite-desc">
                Let's connect and discuss software, AI, or practical engineering.
              </p>
              
              <div className="fsig-email-action">
                <a 
                  href={socialLinks.email.url}
                  className="fsig-email-btn apple-pressable"
                  aria-label="Send email to thenameisbhagavan@gmail.com"
                >
                  <Mail size={14} className="feb-icon" />
                  <span>{socialLinks.email.handle}</span>
                  <ArrowRight size={13} className="feb-arrow" />
                </a>
              </div>
            </div>

            {/* Right Column: Compact Navigation & Social Links */}
            <div className="fsig-links-block">
              
              <div className="fsig-nav-column">
                <span className="fsig-column-label">NAVIGATION</span>
                <nav className="fsig-routes-list" aria-label="Footer Navigation">
                  {navLinks.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => handleNavigation(item.path)}
                      className="fsig-route-link apple-pressable"
                    >
                      {item.name}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="fsig-social-column">
                <span className="fsig-column-label">FOLLOW THE WORK</span>
                <div className="fsig-social-links">
                  {socialLinks.github && (
                    <a href={socialLinks.github.url} target="_blank" rel="noopener noreferrer" className="fsig-social-link">
                      <span>GitHub</span>
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                  {socialLinks.linkedin && (
                    <a href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer" className="fsig-social-link">
                      <span>LinkedIn</span>
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                  {socialLinks.instagram && (
                    <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer" className="fsig-social-link">
                      <span>Instagram</span>
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                  {socialLinks.twitter && (
                    <a href={socialLinks.twitter.url} target="_blank" rel="noopener noreferrer" className="fsig-social-link">
                      <span>X (Twitter)</span>
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                  {socialLinks.youtube && (
                    <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer" className="fsig-social-link">
                      <span>YouTube</span>
                      <ArrowUpRight size={12} />
                    </a>
                  )}
                </div>
              </div>

            </div>

          </div>
        </section>

        <div className="fsig-hairline" />

        {/* ============================================================
            ZONE D — MINIMAL BRAND SIGNATURE
            ============================================================ */}
        <section className="fsig-bottom-bar" aria-label="Brand Signature and Copyright">
          <div className="fsig-bottom-left">
            <div className="fsig-brand-mark">
              <img src={logoImg} alt="Bhagavan Logo" className="fsig-bottom-logo" />
              <span className="fsig-bottom-wordmark">Bhagavan</span>
            </div>
            <span className="fsig-bottom-tagline">
              Software Development &amp; AI Systems · India
            </span>
          </div>

          <div className="fsig-bottom-right">
            <span className="fsig-copyright">
              &copy; {currentYear} TheNameIsBhagavan. All rights reserved.
            </span>
          </div>
        </section>

      </div>
    </footer>
  );
});

export default Footer;

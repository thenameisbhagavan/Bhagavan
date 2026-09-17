import React, { memo, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import SEO from "./SEO";
import Reveal from "./motion/Reveal";
import MaskReveal from "./motion/MaskReveal";
import ScaleReveal from "./motion/ScaleReveal";
import MagneticLink from "./motion/MagneticLink";
import { socialLinks } from "../constants/socialLinks";

// System preview assets & logo
import careerOsImg from "../assets/careeros-new.jpg";
import auraOsImg from "../assets/aurabot-new.png";
import voltDriveImg from "../assets/ev.png";
import veritasImg from "../assets/fake.jpg";
import logoImg from "../assets/logo.png";

import "../styles/Footer.css";

const Footer = memo(function Footer() {
  const navigate = useNavigate();
  const [hoveredSystem, setHoveredSystem] = useState(null);

  const handleNavigation = useCallback(
    (path) => {
      navigate(path);
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    },
    [navigate]
  );

  const navLinks = [
    { num: "01", name: "OVERVIEW", path: "/" },
    { num: "02", name: "PRODUCTS", path: "/work" },
    { num: "03", name: "JOURNEY", path: "/experience" },
    { num: "04", name: "CAPABILITIES", path: "/ecosystem" },
    { num: "05", name: "CONNECT", path: "/connect" },
    { num: "06", name: "RESUME", path: "/resume" }
  ];

  const systems = [
    {
      id: "01",
      name: "CareerOS",
      desc: "AI Career Intelligence Platform",
      url: "https://careeros-thenameisbhagavan.vercel.app/",
      img: careerOsImg
    },
    {
      id: "02",
      name: "AuraOS",
      desc: "Spatial AI OS & Memory Workspace",
      url: "https://aura-os-thenameisbhagavan.vercel.app/",
      img: auraOsImg
    },
    {
      id: "03",
      name: "VERITAS",
      desc: "AI Trust & Fact Tracing Pipeline",
      url: "https://veritas-thenameisbhagavan.vercel.app/",
      img: veritasImg
    },
    {
      id: "04",
      name: "VoltDrive",
      desc: "EV Telemetry & Digital Showroom",
      url: "https://voltdrive-thenameisbhagavan.vercel.app/",
      img: voltDriveImg
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-sig" data-nav-theme="light">
      {/* SPATIAL LOW-CONTRAST WATERMARK */}
      <div className="footer-watermark pointer-events-none" aria-hidden="true">
        TNB
      </div>

      <div className="footer-sig-bounds">
        
        {/* ============================================================
            ACT 01 — ENTRY & FINAL STATEMENT
            ============================================================ */}
        <div className="fsig-zone fsig-entry">
          <Reveal y={16} duration={0.8}>
            <div className="fsig-micro-label">
              <span className="fsig-badge">TNB / SYSTEMS / {currentYear}</span>
            </div>
          </Reveal>

          <div className="fsig-statement-wrap">
            <MaskReveal duration={1.1} delay={0.1}>
              <h2 className="fsig-statement">
                THE WORK<br />
                CONTINUES.
              </h2>
            </MaskReveal>

            <Reveal y={16} duration={0.8} delay={0.3}>
              <div className="fsig-wordmark brand-cursive">
                TheNameIsBhagavan
              </div>
            </Reveal>
          </div>
        </div>


        {/* ============================================================
            ACT 02 — INTERACTIVE EDITORIAL NAVIGATION INDEX
            ============================================================ */}
        <div className="fsig-zone fsig-nav-zone">
          <Reveal y={16} duration={0.8}>
            <span className="fsig-label">EXPLORE</span>
          </Reveal>

          <div className="fsig-nav-grid">
            {navLinks.map((link, idx) => (
              <Reveal key={link.num} y={20} duration={0.8} delay={idx * 0.05}>
                <button
                  className="fsig-nav-item"
                  onClick={() => handleNavigation(link.path)}
                >
                  <span className="fsig-nav-num">{link.num}</span>
                  <span className="fsig-nav-name">{link.name}</span>
                  <span className="fsig-nav-arrow">&rarr;</span>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="fsig-hairline"></div>


        {/* ============================================================
            ACT 03 — SELECTED SYSTEMS HOVER PREVIEW RAIL
            ============================================================ */}
        <div className="fsig-zone fsig-systems-zone">
          <Reveal y={16} duration={0.8}>
            <span className="fsig-label">SELECTED SYSTEMS</span>
          </Reveal>

          <div className="fsig-systems-container">
            <div className="fsig-systems-list">
              {systems.map((sys, idx) => (
                <Reveal key={sys.id} y={20} duration={0.8} delay={idx * 0.08}>
                  <a
                    href={sys.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fsig-system-row"
                    onMouseEnter={() => setHoveredSystem(sys)}
                    onMouseLeave={() => setHoveredSystem(null)}
                    onClick={() => {
                      if (window.innerWidth <= 768 && hoveredSystem?.id !== sys.id) {
                        setHoveredSystem(sys);
                      }
                    }}
                  >
                    <span className="fs-row-id">{sys.id}</span>
                    <span className="fs-row-name">{sys.name}</span>
                    <span className="fs-row-desc">{sys.desc}</span>
                    <span className="fs-row-arrow">↗</span>
                  </a>
                </Reveal>
              ))}
            </div>

            {/* Anchored Preview Box */}
            <div className={`fsig-preview-area ${hoveredSystem ? "has-preview" : ""}`}>
              <AnimatePresence mode="wait">
                {hoveredSystem && (
                  <m.div
                    key={hoveredSystem.id}
                    className="fsig-preview-box"
                    initial={{ opacity: 0, scale: 0.96, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <img 
                      src={hoveredSystem.img} 
                      alt={`${hoveredSystem.name} preview`} 
                      className="fsig-preview-img"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="fsig-preview-meta">
                      <span className="fpm-name">{hoveredSystem.name}</span>
                      <span className="fpm-sub">SYSTEM PLATFORM</span>
                    </div>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="fsig-hairline"></div>


        {/* ============================================================
            ACT 04 — INVITATION & CONTACT
            ============================================================ */}
        <div className="fsig-zone fsig-contact-zone">
          <Reveal y={20} duration={0.9}>
            <h3 className="fsig-contact-statement">
              OPEN TO MEANINGFUL<br />CONVERSATIONS.
            </h3>
          </Reveal>

          <div className="fsig-contact-actions">
            <Reveal y={20} duration={0.9} delay={0.15}>
              <MagneticLink strength={0.3}>
                <a 
                  href={socialLinks.email.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fsig-email-cta apple-pressable"
                >
                  <span>EMAIL &rarr;</span>
                </a>
              </MagneticLink>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.25}>
              <div className="fsig-social-row">
                <span className="social-label">FOLLOW THE WORK:</span>
                <a href={socialLinks.github.url} target="_blank" rel="noopener noreferrer">GitHub</a>
                <span className="dot-sep">&middot;</span>
                <a href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <span className="dot-sep">&middot;</span>
                <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer">Instagram</a>
                <span className="dot-sep">&middot;</span>
                <a href={socialLinks.twitter.url} target="_blank" rel="noopener noreferrer">X</a>
                <span className="dot-sep">&middot;</span>
                <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer">YouTube</a>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="fsig-hairline"></div>


        {/* ============================================================
            ACT 05 — SYSTEM STATUS & FINAL BRAND STAMP
            ============================================================ */}
        <div className="fsig-zone fsig-closing-zone">
          
          <Reveal y={20} duration={0.9}>
            <div className="fsig-system-status">
              <span className="status-pulse-dot"></span>
              <span className="status-text">CURRENTLY BUILDING: TECHNICAL AI/ML & DATA SCIENCE TRAINER @ DATA VALLEY &middot; AI SYSTEMS</span>
            </div>
          </Reveal>

          <div className="fsig-brand-stamp-row">
            <Reveal y={20} duration={0.9} delay={0.1}>
              <div className="fsig-stamp-left">
                <img 
                  src={logoImg} 
                  alt="TheNameIsBhagavan Logo" 
                  className="fsig-stamp-logo" 
                  loading="lazy"
                />
                <div className="fsig-stamp-brand-info">
                  <div className="fsig-stamp-name brand-cursive">TheNameIsBhagavan</div>
                  <div className="fsig-stamp-meta">TNB / {currentYear}</div>
                </div>
              </div>
            </Reveal>

            <Reveal y={20} duration={0.9} delay={0.2}>
              <div className="fsig-copyright-info">
                <span>&copy; {currentYear} TheNameIsBhagavan</span>
                <span className="sub-copy">AI Product Engineering &middot; India</span>
              </div>
            </Reveal>
          </div>
        </div>

      </div>
    </footer>
  );
});

export default Footer;

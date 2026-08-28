import React, { memo, useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { m, AnimatePresence } from 'framer-motion';
import { socialLinks } from '../constants/socialLinks';

// Images for system previews
import careerOsImg from '../assets/careeros-ui.png';
import auraOsImg from '../assets/auraos-ui.png';
import voltDriveImg from '../assets/ev.png';
import veritasImg from '../assets/fake.jpg';

import '../styles/Footer.css';

const appleEase = [0.22, 1, 0.36, 1];

const Footer = memo(function Footer() {
  const navigate = useNavigate();
  const [hoveredSystem, setHoveredSystem] = useState(null);
  
  // Track mouse for preview positioning (though we want it anchored to grid, we can just position it absolute relative to the container)
  
  const handleNavigation = useCallback((path) => {
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [navigate]);

  const navLinks = [
    { num: "01", name: "OVERVIEW", path: "/" },
    { num: "02", name: "PRODUCTS", path: "/work" },
    { num: "03", name: "JOURNEY", path: "/innovation" },
    { num: "04", name: "CAPABILITIES", path: "/ecosystem" },
    { num: "05", name: "CONNECT", path: "/connect" },
    { num: "06", name: "RESUME", path: "/resume" }
  ];

  const systems = [
    { id: "01", name: "CareerOS", desc: "Career Intelligence", url: "https://careeros-thenameisbhagavan.vercel.app/", img: careerOsImg },
    { id: "02", name: "AuraOS", desc: "AI Memory & Context", url: "https://aura-os-thenameisbhagavan.vercel.app/", img: auraOsImg },
    { id: "03", name: "VERITAS", desc: "Reasoning & Evidence", url: "https://veritas-thenameisbhagavan.vercel.app/", img: veritasImg },
    { id: "04", name: "VoltDrive", desc: "Digital Product Experience", url: "https://voltdrive-thenameisbhagavan.vercel.app/", img: voltDriveImg },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-sig">
      {/* Huge subtle watermark background */}
      <div className="footer-watermark pointer-events-none" aria-hidden="true">
        TNB
      </div>

      <div className="footer-sig-bounds">
        
        {/* 1. ENTRY & STATEMENT */}
        <div className="fsig-zone fsig-entry">
          <div className="fsig-micro-label">
            <div className="fsig-hairline"></div>
            <span>TNB / SYSTEMS / {currentYear}</span>
          </div>

          <div className="fsig-statement-wrap">
            <m.h2 
              className="fsig-statement"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: appleEase }}
              viewport={{ once: true, amount: 0.2 }}
            >
              THE WORK<br />CONTINUES.
            </m.h2>

            <m.div 
              className="fsig-wordmark brand-cursive"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: appleEase }}
              viewport={{ once: true, amount: 0.2 }}
            >
              TheNameIsBhagavan
            </m.div>
          </div>
        </div>

        {/* 2. EDITORIAL NAVIGATION */}
        <div className="fsig-zone fsig-nav-grid">
          {navLinks.map((link, idx) => (
            <m.button 
              key={link.num}
              className="fsig-nav-item"
              onClick={() => handleNavigation(link.path)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: appleEase }}
              viewport={{ once: true }}
            >
              <span className="fsig-nav-num">{link.num}</span>
              <span className="fsig-nav-name">{link.name}</span>
              <span className="fsig-nav-arrow">→</span>
            </m.button>
          ))}
        </div>

        <div className="fsig-hairline subtle-div"></div>

        {/* 3. SELECTED SYSTEMS */}
        <div className="fsig-zone fsig-systems-zone">
          <m.div 
            className="fsig-label"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: appleEase }}
            viewport={{ once: true }}
          >
            SELECTED SYSTEMS
          </m.div>

          <div className="fsig-systems-container">
            <div className="fsig-systems-list">
              {systems.map((sys, idx) => (
                <m.a
                  key={sys.id}
                  href={sys.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fsig-system-row"
                  onMouseEnter={() => setHoveredSystem(sys)}
                  onMouseLeave={() => setHoveredSystem(null)}
                  onClick={() => {
                    // Mobile tap to reveal logic
                    if (window.innerWidth <= 768 && hoveredSystem?.id !== sys.id) {
                      setHoveredSystem(sys);
                    }
                  }}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: appleEase }}
                  viewport={{ once: true }}
                >
                  <span className="fs-row-id">{sys.id}</span>
                  <span className="fs-row-name">{sys.name}</span>
                  <span className="fs-row-desc">{sys.desc}</span>
                  <span className="fs-row-arrow">↗</span>
                </m.a>
              ))}
            </div>

            {/* Anchored / Mobile Preview Area */}
            <div className={`fsig-preview-area ${hoveredSystem ? 'has-preview' : ''}`}>
              <AnimatePresence mode="wait">
                {hoveredSystem && (
                  <m.div
                    key={hoveredSystem.id}
                    className="fsig-preview-box"
                    initial={{ opacity: 0, scale: 0.97, y: 8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.97, transition: { duration: 0.2 } }}
                    transition={{ duration: 0.5, ease: appleEase }}
                  >
                    {hoveredSystem.img ? (
                      <img 
                        src={hoveredSystem.img} 
                        alt={`${hoveredSystem.name} product interface`} 
                        className="fsig-preview-img" 
                        loading={hoveredSystem.id === "01" ? "eager" : "lazy"} 
                        decoding="async"
                      />
                    ) : (
                      <div className="fsig-preview-type">
                        <span className="fsig-preview-logo">{hoveredSystem.name}</span>
                        <span className="fsig-preview-sub">SYSTEM PLATFORM</span>
                      </div>
                    )}
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="fsig-hairline subtle-div"></div>

        {/* 4. CONTACT AREA */}
        <div className="fsig-zone fsig-contact">
          <m.div 
            className="fsig-contact-statement"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: appleEase }}
            viewport={{ once: true }}
          >
            OPEN TO MEANINGFUL<br />CONVERSATIONS.
          </m.div>

          <div className="fsig-contact-links">
            <m.a 
              href={socialLinks.email.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="fsig-email-primary"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: appleEase }}
              viewport={{ once: true }}
            >
              Email →
            </m.a>

            <m.div 
              className="fsig-social-secondary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: appleEase }}
              viewport={{ once: true }}
            >
              <a href={socialLinks.github.url} target="_blank" rel="noopener noreferrer">GitHub</a> · 
              <a href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer">LinkedIn</a> · 
              <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer">Instagram</a> · 
              <a href={socialLinks.twitter.url} target="_blank" rel="noopener noreferrer">X</a> · 
              <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer">YouTube</a>
            </m.div>
          </div>
        </div>

        {/* 5. FINAL SIGNATURE & COPYRIGHT */}
        <div className="fsig-zone fsig-closing">
          <m.div 
            className="fsig-final-stamp"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: appleEase }}
            viewport={{ once: true }}
          >
            <div className="fsig-stamp-name brand-cursive">TheNameIsBhagavan</div>
            <div className="fsig-stamp-meta">TNB / {currentYear}</div>
          </m.div>

          <m.div 
            className="fsig-copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: appleEase }}
            viewport={{ once: true }}
          >
            <div className="fsig-status">
              <div className="fsig-status-dot"></div>
              CURRENTLY: TECHNICAL AI/ML & DATA SCIENCE TRAINER AT DATA VALLEY · BUILDING AI SYSTEMS
            </div>
            <div className="fsig-copy-text">
              © {currentYear} TheNameIsBhagavan<br />
              AI Product Engineering · India
            </div>
          </m.div>
        </div>

      </div>
    </footer>
  );
});

export default Footer;

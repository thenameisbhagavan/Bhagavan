import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { m } from 'framer-motion';
import { socialLinks } from '../constants/socialLinks';
import profileImg from '../assets/profile-hero.jpg';
import '../styles/Footer.css';

// Exact Apple Motion Curve
const appleEase = [0.22, 1, 0.36, 1];

const Footer = memo(function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  };

  const navLinks = [
    { name: "Overview", path: "/" },
    { name: "Products", path: "/work" },
    { name: "Journey", path: "/innovation" },
    { name: "Capabilities", path: "/ecosystem" },
    { name: "Connect", path: "/connect" },
    { name: "Resume", path: "/resume" }
  ];

  const systems = [
    { id: "01", name: "CareerOS", desc: "Career Intelligence", url: "https://careeros-thenameisbhagavan.vercel.app/" },
    { id: "02", name: "AuraOS", desc: "AI Memory & Context", url: "https://aura-os-thenameisbhagavan.vercel.app/" },
    { id: "03", name: "VERITAS", desc: "Reasoning & Evidence", url: "https://veritas-thenameisbhagavan.vercel.app/" },
    { id: "04", name: "VoltDrive", desc: "Digital Product Experience", url: "https://voltdrive-thenameisbhagavan.vercel.app/" },
  ];

  return (
    <footer className="footer-signature-container">
      <div className="footer-content-bounds">


        
        {/* ==================== ZONE 1: OPENING STATEMENT ==================== */}
        <div className="footer-zone-statement">
          <m.h2 
            className="footer-statement-headline"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: appleEase }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Building intelligent systems.<br/>
            Shipping products that matter.
          </m.h2>
          <m.div 
            className="footer-technical-signature"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: appleEase }}
            viewport={{ once: true, amount: 0.5 }}
          >
            PYTHON · FASTAPI · REACT · AI SYSTEMS · PRODUCT ENGINEERING
          </m.div>
        </div>

        <div className="footer-hairline"></div>

        {/* ==================== ZONE 2: EDITORIAL GRID ==================== */}
        <div className="footer-editorial-grid">
          
          {/* Column 1: Explore */}
          <div className="footer-column footer-explore">
            <h3 className="footer-col-title">EXPLORE</h3>
            <ul className="footer-explore-list">
              {navLinks.map((link, idx) => (
                <m.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: appleEase }}
                  viewport={{ once: true }}
                >
                  <button onClick={() => handleNavigation(link.path)} className="footer-text-link">
                    {link.name} <span className="footer-arrow">→</span>
                  </button>
                </m.li>
              ))}
            </ul>
          </div>

          {/* Column 2: Systems Index */}
          <div className="footer-column footer-systems">
            <h3 className="footer-col-title">SYSTEMS</h3>
            <ul className="footer-systems-list">
              {systems.map((sys, idx) => (
                <m.li 
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.08, ease: appleEase }}
                  viewport={{ once: true }}
                >
                  <a href={sys.url} target="_blank" rel="noopener noreferrer" className="footer-system-row">
                    <span className="fs-id">{sys.id}</span>
                    <div className="fs-content">
                      <span className="fs-name">{sys.name}</span>
                      <span className="fs-desc">{sys.desc}</span>
                    </div>
                    <span className="fs-arrow">↗</span>
                  </a>
                </m.li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect (Hierarchy) */}
          <div className="footer-column footer-connect">
            <h3 className="footer-col-title">CONNECT</h3>
            
            <ul className="footer-connect-primary">
              <m.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.0, ease: appleEase }} viewport={{ once: true }}>
                <a href={socialLinks.github.url} target="_blank" rel="noopener noreferrer" className="footer-text-link">GitHub <span className="footer-arrow">↗</span></a>
              </m.li>
              <m.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.08, ease: appleEase }} viewport={{ once: true }}>
                <a href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer" className="footer-text-link">LinkedIn <span className="footer-arrow">↗</span></a>
              </m.li>
              <m.li initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.16, ease: appleEase }} viewport={{ once: true }}>
                <a href={socialLinks.email.url} target="_blank" rel="noopener noreferrer" className="footer-text-link">Email <span className="footer-arrow">↗</span></a>
              </m.li>
            </ul>
            
            <m.div 
              className="footer-connect-secondary"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: appleEase }}
              viewport={{ once: true }}
            >
              <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer">Instagram</a> · 
              <a href={socialLinks.twitter.url} target="_blank" rel="noopener noreferrer">X</a> · 
              <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer">YouTube</a> · 
              <a href={socialLinks.portfolio.url} target="_blank" rel="noopener noreferrer">Portfolio</a>
            </m.div>

          </div>
        </div>

        <div className="footer-hairline"></div>

        {/* ==================== ZONE 3: ENGINEERING STATUS ==================== */}
        <m.div 
          className="footer-status-block"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: appleEase }}
          viewport={{ once: true }}
        >
          <div className="status-label">CURRENTLY BUILDING</div>
          <div className="status-focus">AI SYSTEMS · PRODUCT ENGINEERING · ENGINEERING JOURNAL</div>
          <div className="status-indicator">
            <span className="status-title">STATUS</span>
            <span className="status-dot"></span>
            <span className="status-value">BUILDING</span>
          </div>
        </m.div>

        <div className="footer-hairline"></div>

        {/* ==================== ZONE 4: TNB BRAND STAMP ==================== */}
        <div className="footer-zone-closing">
          <m.div 
            className="footer-brand-signature"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: appleEase }}
            viewport={{ once: true }}
          >
            <div className="brand-name brand-cursive">TheNameIsBhagavan</div>
            <div className="brand-detail" style={{ lineHeight: 1.8 }}>
              AI SYSTEMS<br/>
              PRODUCT ENGINEERING<br/>
              FULL-STACK DEVELOPMENT
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: appleEase }}
            viewport={{ once: true }}
            style={{ 
              fontSize: '10px', 
              fontWeight: 600, 
              letterSpacing: '0.14em', 
              color: '#aeaeb2', 
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: '24px 0'
            }}
          >
            TNB / {new Date().getFullYear()}
          </m.div>
          
          <m.div 
            className="footer-copyright"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.5, ease: appleEase }}
            viewport={{ once: true }}
          >
            © {new Date().getFullYear()} <span className="brand-cursive">TheNameIsBhagavan</span><br/>
            AI Product Engineering · India
          </m.div>
        </div>

      </div>
    </footer>
  );
});

export default Footer;

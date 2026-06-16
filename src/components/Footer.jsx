import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = memo(function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const columns = [
    {
      title: "Explore",
      links: [
        { name: "Overview", path: "/overview" },
        { name: "Projects", path: "/work" },
        { name: "Journey", path: "/experience" },
        { name: "Vision", path: "/vision" },
        { name: "Connect", path: "/connect" }
      ]
    },
    {
      title: "Work",
      links: [
        { name: "CareerOS", path: "/work" },
        { name: "ResumeAI", path: "/work" },
        { name: "Pathora", path: "/work" },
        { name: "Smart Leave System", path: "/work" },
        { name: "Research", path: "/innovation" }
      ]
    },
    {
      title: "Capabilities",
      links: [
        { name: "AI Engineering", path: "/technology" },
        { name: "Full Stack Development", path: "/technology" },
        { name: "Backend Systems", path: "/technology" },
        { name: "Machine Learning", path: "/technology" },
        { name: "Cloud & Deployment", path: "/technology" }
      ]
    },
    {
      title: "Profiles",
      links: [
        { name: "GitHub ↗", url: "https://github.com/bhagavan444", external: true },
        { name: "LinkedIn ↗", url: "https://www.linkedin.com/in/gsssbhagavan/", external: true },
        { name: "Resume ↗", path: "/resume" }
      ]
    },
    {
      title: "Contact",
      links: [
        { name: "Email", url: "mailto:g.sivasatysaibhagavan@gmail.com", external: true },
        { name: "Phone", url: "tel:+917569205626", external: true },
        { name: "Location", path: "/connect" }
      ]
    }
  ];

  return (
    <footer className="footer-shell">
      <div className="footer-constrain">
        
        {/* 1. BREADCRUMB */}
        <div className="footer-breadcrumb">
          <span>Bhagavan</span> &gt; Engineering Human Potential
        </div>

        {/* 2. NAVIGATION GRID */}
        <div className="footer-grid">
          {columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="footer-column-title">{col.title}</h4>
              <ul className="footer-link-list">
                {col.links.map((link, i) => (
                  <li key={i}>
                    {link.external ? (
                      <a 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="footer-link"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <button 
                        onClick={() => handleNavigation(link.path)} 
                        className="footer-link"
                      >
                        {link.name}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 3 & 4. LEGAL AREA & SIGNATURE */}
        <div className="footer-legal-area">
          <div className="footer-legal-row">
            <div>
              Copyright © {new Date().getFullYear()} Bhagavan. All rights reserved.
            </div>
            <div className="footer-signature">
              Built with curiosity, engineering, and continuous learning.
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
});

export default Footer;

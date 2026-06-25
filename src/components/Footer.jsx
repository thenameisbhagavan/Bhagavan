import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = memo(function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const navLinks = [
    { name: "Explore", path: "/overview" },
    { name: "Work", path: "/work" },
    { name: "Capabilities", path: "/technology-ecosystem" },
    { name: "Connect", path: "/connect" },
    { name: "Resume", path: "/resume" }
  ];

  const presenceLinks = [
    { name: "GitHub", desc: "Engineering in public.", url: "https://github.com/bhagavan444", external: true },
    { name: "LinkedIn", desc: "Professional collaboration.", url: "https://www.linkedin.com/in/gsssbhagavan/", external: true },
    { name: "Email", desc: "Start a conversation.", url: "mailto:g.sivasatysaibhagavan@gmail.com", external: true },
    { name: "Resume", desc: "The complete journey.", path: "/resume", external: false }
  ];

  return (
    <footer className="footer-shell">
      <div className="footer-constrain">
        
        {/* ══════════════════════════════════════════════════════
            ZONE 1 — CLOSING STATEMENT
        ══════════════════════════════════════════════════════ */}
        <div className="footer-statement-zone">
          <h2 className="footer-statement">
            Engineering Human Potential.<br/>
            <span className="text-muted">
              Technology should create opportunity.<br/>
              Not complexity.
            </span>
          </h2>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-middle-zones">
          {/* ══════════════════════════════════════════════════════
              ZONE 2 — NAVIGATION
          ══════════════════════════════════════════════════════ */}
          <div className="footer-nav-zone">
            <h4 className="footer-zone-title">Navigate</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <button 
                    onClick={() => handleNavigation(link.path)} 
                    className="footer-nav-link"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* ══════════════════════════════════════════════════════
              ZONE 3 — PRESENCE
          ══════════════════════════════════════════════════════ */}
          <div className="footer-presence-zone">
            <h4 className="footer-zone-title">Presence</h4>
            <ul className="footer-presence-list">
              {presenceLinks.map((link, i) => (
                <li key={i} className="presence-item">
                  {link.external ? (
                    <a 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="footer-presence-link"
                    >
                      <span className="presence-name">{link.name} ↗</span>
                      <span className="presence-desc">{link.desc}</span>
                    </a>
                  ) : (
                    <button 
                      onClick={() => handleNavigation(link.path)} 
                      className="footer-presence-link"
                    >
                      <span className="presence-name">{link.name}</span>
                      <span className="presence-desc">{link.desc}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* ══════════════════════════════════════════════════════
            ZONE 4 — SIGNATURE
        ══════════════════════════════════════════════════════ */}
        <div className="footer-signature-zone">
          <div className="footer-signature">
            Engineering products that create opportunity.
          </div>
          <div className="footer-copyright">
            Copyright © {new Date().getFullYear()} Siva Bhagavan. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
});

export default Footer;

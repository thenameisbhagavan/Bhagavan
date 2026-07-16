import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { m } from 'framer-motion';
import { socialLinks } from '../constants/socialLinks';
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
    { name: "Capabilities", path: "/ecosystem" },
    { name: "Connect", path: "/connect" },
    { name: "Resume", path: "/resume" }
  ];

  const presenceLinks = [
    { name: socialLinks.github.platform, desc: socialLinks.github.desc, url: socialLinks.github.url, external: true },
    { name: socialLinks.linkedin.platform, desc: socialLinks.linkedin.desc, url: socialLinks.linkedin.url, external: true },
    { name: socialLinks.portfolio.platform, desc: socialLinks.portfolio.desc, url: socialLinks.portfolio.url, external: true },
    { name: socialLinks.instagram.platform, desc: socialLinks.instagram.desc, url: socialLinks.instagram.url, external: true },
    { name: socialLinks.twitter.platform, desc: socialLinks.twitter.desc, url: socialLinks.twitter.url, external: true },
    { name: socialLinks.facebook.platform, desc: socialLinks.facebook.desc, url: socialLinks.facebook.url, external: true },
    { name: socialLinks.youtube.platform, desc: socialLinks.youtube.desc, url: socialLinks.youtube.url, external: true },
    { name: socialLinks.email.platform, desc: socialLinks.email.desc, url: socialLinks.email.url, external: true },
  ];

  return (
    <footer className="footer-cinematic">
      <div className="footer-content-bounds">
        
        {/* Zone 1: Closing Statement */}
        <div className="footer-zone-statement">
          <m.h2 
            className="footer-huge-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            TheNameIsBhagavan
          </m.h2>
          <m.p 
            className="footer-statement-sub"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Engineering intelligent systems that expand human potential.<br/>
            <span className="footer-muted">Learning continuously. Building relentlessly. Shipping thoughtfully.</span>
          </m.p>
        </div>

        <div className="footer-hairline"></div>

        <div className="footer-zones-grid">
          {/* Zone 2: Navigation */}
          <div className="footer-zone-nav">
             <h3 className="footer-zone-title">Navigation</h3>
             <ul className="footer-nav-list">
               {navLinks.map((link, idx) => (
                 <li key={idx}>
                   <button onClick={() => handleNavigation(link.path)} className="footer-quiet-link">
                     {link.name} <span className="nav-arrow">→</span>
                   </button>
                 </li>
               ))}
             </ul>
          </div>

          {/* Zone 3: Presence */}
          <div className="footer-zone-presence">
             <h3 className="footer-zone-title">Presence</h3>
             <ul className="footer-presence-list">
               {presenceLinks.map((item, idx) => (
                 <li key={idx} className="presence-item">
                   {item.external ? (
                     <a href={item.url} target="_blank" rel="noopener noreferrer" className="presence-link">
                       <span className="presence-name">
                         {item.name} 
                         <span className="presence-arrow external-arrow">↗</span>
                       </span>
                       <span className="presence-desc">{item.desc}</span>
                     </a>
                   ) : (
                     <button onClick={() => handleNavigation(item.path)} className="presence-link">
                       <span className="presence-name">
                         {item.name} 
                         <span className="presence-arrow internal-arrow">→</span>
                       </span>
                       <span className="presence-desc">{item.desc}</span>
                     </button>
                   )}
                 </li>
               ))}
             </ul>
          </div>
        </div>

        {/* Zone 4: Signature & Copyright */}
        <div className="footer-zone-signature">
           <m.div 
             className="footer-editorial"
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
             viewport={{ once: true }}
           >
             Building intelligent systems that solve real-world problems.
           </m.div>
           <div className="footer-copyright">
             © {new Date().getFullYear()} TheNameIsBhagavan.
           </div>
        </div>

      </div>
    </footer>
  );
});

export default Footer;

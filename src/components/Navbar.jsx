import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { FileText, Github, Linkedin, Mail, Twitter, Youtube, Instagram } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";
import logoImg from "../assets/logo.png";
import { socialLinks } from "../constants/socialLinks";

// ─────────────────────────────────────────────
// NAVIGATION ARCHITECTURE
// ─────────────────────────────────────────────

const PRIMARY_NAV = [
  { label: "Overview", path: "/overview" },

  { label: "Products", path: "/work" },

  { label: "Journey", path: "/experience" },

  {
    label: "Capabilities",
    dropdown: [
      { label: "Innovation", sub: "Research & Exploration", path: "/innovation" },
      { label: "Credentials", sub: "Learning & Certifications", path: "/credentials" },
      { label: "Technology", sub: "Tools & Ecosystem", path: "/ecosystem" },
    ],
  },

  { label: "Vision", path: "/vision" },

  { label: "Insights", path: "/insights" },

  { label: "Connect", path: "/connect" },
];

const MOBILE_NAV = [
{ label: "Overview",      path: "/overview" },
{ label: "Products",      path: "/work" },
{ label: "Journey",       path: "/experience" },
{ label: "Innovation",    path: "/innovation" },
{ label: "Credentials",   path: "/credentials" },
{ label: "Technology",    path: "/ecosystem" },
{ label: "Vision",        path: "/vision" },
{ label: "Resume",        path: "/resume" },
{ label: "Insights",      path: "/insights" },
{ label: "Connect",       path: "/connect" },
];

// ─────────────────────────────────────────────
// SEARCH INDEX — every page is searchable
// ─────────────────────────────────────────────
const SEARCH_PAGES = [
  { title: "Overview",              path: "/overview",    keywords: "home about profile introduction" },
  { title: "Products",              path: "/work",        keywords: "projects work portfolio careeros aurabot resume smart leave" },
  { title: "Journey",               path: "/experience",  keywords: "experience career timeline internships education" },
  { title: "Vision",                path: "/vision",      keywords: "future goals mission direction roadmap" },
  { title: "Connect",               path: "/connect",     keywords: "contact email message hire collaboration" },
  { title: "Innovation",            path: "/innovation",  keywords: "research engineering ai machine learning" },
  { title: "Credentials",           path: "/credentials", keywords: "certifications awards achievements badges" },
  { title: "Technology Ecosystem",  path: "/ecosystem",   keywords: "stack architecture tools frameworks react node python mongodb" },
  { title: "Resume",                path: "/resume",      keywords: "cv download pdf curriculum vitae" },
  { title: "Insights",              path: "/insights",    keywords: "blog articles engineering writing insights posts" },
];

// Quick links shown when search is empty
const QUICK_LINKS = [
  { label: "CareerOS",           path: "/work" },
  { label: "AI Products",        path: "/work" },
  { label: "Experience",         path: "/experience" },
  { label: "Certifications",     path: "/credentials" },
  { label: "Tech Stack",         path: "/ecosystem" },
  { label: "Contact",            path: "/connect" },
];

// ─────────────────────────────────────────────
// EASING
// ─────────────────────────────────────────────
const ease = [0.16, 1, 0.3, 1];

// ─────────────────────────────────────────────
// STYLES — injected once
// ─────────────────────────────────────────────
const CSS = `
  /* ── Navbar shell ── */
  .nav-shell {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 44px;
    z-index: 9000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.35s ease, backdrop-filter 0.35s ease, border-color 0.35s ease;
    border-bottom: 1px solid transparent;
  }
  .nav-shell.scrolled {
    background: var(--nav-scrolled-bg, rgba(255,255,255,0.72));
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);
    border-bottom: 1px solid var(--nav-border-color, rgba(0,0,0,0.06));
  }
  .nav-shell.panel-open {
    background: rgba(255,255,255,0.96);
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);
    border-bottom: 1px solid transparent;
  }

  /* ── Inner row ── */
  .nav-inner {
    width: 100%;
    max-width: 1280px;
    padding: 0 32px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 9010;
  }

  /* ── Wordmark ── */
  .nav-wordmark {
    font-size: 14.5px;
    font-weight: 600;
    letter-spacing: 0.14em;
    transition: opacity 0.2s ease;
    flex-shrink: 0;
    outline: none;
  }
  .nav-wordmark:hover { opacity: 0.55; }
  .nav-wordmark:focus-visible { outline: 2px solid rgba(0,102,204,0.5); outline-offset: 4px; border-radius: 4px; }

  /* ── Desktop links ── */
  .nav-links {
    display: flex;
    align-items: center;
    gap: 2px;
    height: 100%;
  }
  @media (max-width: 900px) { .nav-links { display: none; } }

  /* ── Single nav item ── */
  .nav-item {
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
  }

  .nav-btn {
    background: none;
    border: none;
    padding: 0 16px;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.01em;
    cursor: pointer;
    white-space: nowrap;
    transition: opacity 0.2s ease, font-weight 0.2s ease, color 0.35s ease;
    position: relative;
    outline: none;
  }
  .nav-btn:hover { opacity: 0.55; }
  .nav-btn.active {
    font-weight: 500;
    opacity: 1;
  }
  .nav-btn:focus-visible {
    outline: 2px solid rgba(0,102,204,0.5);
    outline-offset: -2px;
    border-radius: 4px;
  }

  /* ── Intelligence dropdown panel ── */
  .nav-dropdown {
    position: absolute;
    top: calc(100% + 0px);
    left: 50%;
    transform: translateX(-50%);
    background: rgba(255,255,255,0.98);
    border: 1px solid rgba(0,0,0,0.06);
    border-radius: 18px;
    padding: 12px;
    min-width: 300px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.08), 0 1px 4px rgba(0,0,0,0.04);
    z-index: 9020;
  }

  .nav-dropdown-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: 12px 16px;
    border-radius: 12px;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    transition: background 0.18s ease;
    text-decoration: none;
  }
  .nav-dropdown-item:hover { background: rgba(0,0,0,0.04); }

  .nav-dropdown-label {
    font-size: 14px;
    font-weight: 600;
    color: #1d1d1f;
    letter-spacing: -0.02em;
  }

  .nav-dropdown-sub {
    font-size: 11.5px;
    font-weight: 400;
    color: #86868b;
    letter-spacing: 0;
  }

  .nav-dropdown-divider {
    height: 1px;
    background: rgba(0,0,0,0.05);
    margin: 4px 8px;
  }

  /* ── Right actions ── */
  .nav-actions {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
  }

  .nav-resume-btn, .nav-social-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: none;
    border: none;
    border-radius: 0;
    padding: 0;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.2s ease, color 0.35s ease;
    outline: none;
    flex-shrink: 0;
    text-decoration: none;
    color: inherit;
  }
  .nav-resume-btn:hover, .nav-social-btn:hover {
    opacity: 1;
  }
  .nav-resume-btn:focus-visible, .nav-social-btn:focus-visible {
    outline: 2px solid rgba(0, 102, 204, 0.5);
    outline-offset: 2px;
    border-radius: 4px;
  }
  /* Tooltip */
  .nav-resume-btn::after, .nav-social-btn::after {
    position: absolute;
    bottom: calc(100% + 8px);
    left: 50%;
    transform: translateX(-50%) translateY(4px);
    background: #1d1d1f;
    color: #ffffff;
    font-family: -apple-system, 'SF Pro Text', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.01em;
    white-space: nowrap;
    padding: 5px 10px;
    border-radius: 6px;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }
  .nav-resume-btn::after { content: 'Resume'; }
  .nav-social-btn[data-social="github"]::after { content: 'GitHub'; }
  .nav-social-btn[data-social="linkedin"]::after { content: 'LinkedIn'; }
  .nav-social-btn[data-social="email"]::after { content: 'Email'; }

  .nav-resume-btn:hover::after, .nav-social-btn:hover::after {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  @media (max-width: 900px) {
    .nav-actions .nav-social-btn {
      display: none;
    }
  }

  /* ── Mobile toggle ── */
  .nav-mobile-btn {
    display: none;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    transition: opacity 0.2s ease, color 0.35s ease;
  }
  .nav-mobile-btn:hover { opacity: 0.55; }
  @media (max-width: 900px) { .nav-mobile-btn { display: flex; align-items: center; } }

  /* ── Mobile full-screen sheet ── */
  .nav-mobile-sheet {
    position: fixed;
    inset: 0;
    background: rgba(255,255,255,0.96);
    backdrop-filter: blur(40px) saturate(200%);
    -webkit-backdrop-filter: blur(40px) saturate(200%);
    z-index: 8990;
    display: flex;
    flex-direction: column;
    padding: 100px 40px 60px;
    overflow-y: auto;
  }

  .nav-mobile-link {
    font-size: clamp(32px, 7vw, 52px);
    font-weight: 700;
    letter-spacing: -0.04em;
    color: #1d1d1f;
    background: none;
    border: none;
    text-align: left;
    padding: 10px 0;
    cursor: pointer;
    line-height: 1.1;
    transition: opacity 0.2s ease, transform 0.25s ease;
    text-decoration: none;
    display: block;
  }
  .nav-mobile-link:hover {
    opacity: 0.4;
    transform: translateX(8px);
  }

  .nav-mobile-close {
    position: absolute;
    top: 24px;
    right: 28px;
    background: rgba(0,0,0,0.06);
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;
    color: #1d1d1f;
    transition: background 0.2s ease;
  }
  .nav-mobile-close:hover { background: rgba(0,0,0,0.1); }

  .nav-mobile-divider {
    height: 1px;
    background: rgba(0,0,0,0.06);
    margin: 16px 0;
  }

  /* ── Body lock ── */
  body.nav-locked { overflow: hidden; }

  /* ══════════════════════════════════════════
     APPLE SEARCH OVERLAY
     ══════════════════════════════════════════ */

  .nav-search-icon {
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: opacity 0.2s ease, color 0.35s ease;
  }
  .nav-search-icon:hover { opacity: 0.5; }

  /* Overlay backdrop */
  .search-overlay-bg {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.3);
    z-index: 9050;
    cursor: pointer;
  }

  /* Search container */
  .search-container {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 9060;
    background: rgba(255,255,255,0.98);
    backdrop-filter: blur(40px) saturate(200%);
    -webkit-backdrop-filter: blur(40px) saturate(200%);
    border-bottom: 1px solid rgba(0,0,0,0.06);
  }

  .search-inner {
    max-width: 740px;
    margin: 0 auto;
    padding: 0 32px;
  }

  /* Input row */
  .search-input-row {
    display: flex;
    align-items: center;
    gap: 12px;
    height: 44px;
  }

  .search-input-icon {
    flex-shrink: 0;
    color: #86868b;
  }

  .search-input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.02em;
    color: #1d1d1f;
    padding: 0;
    caret-color: #0066cc;
  }
  .search-input::placeholder {
    color: #86868b;
    font-weight: 400;
  }

  .search-close {
    background: none;
    border: none;
    font-size: 13px;
    font-weight: 500;
    color: #0066cc;
    cursor: pointer;
    padding: 4px 0;
    transition: opacity 0.15s ease;
    white-space: nowrap;
  }
  .search-close:hover { opacity: 0.7; }

  /* Results area */
  .search-results {
    padding: 16px 0 24px;
    border-top: 1px solid rgba(0,0,0,0.06);
  }

  .search-section-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #86868b;
    padding: 0 0 12px;
  }

  .search-result-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 12px;
    border-radius: 10px;
    cursor: pointer;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    transition: background 0.15s ease;
    text-decoration: none;
  }
  .search-result-item:hover {
    background: rgba(0,0,0,0.04);
  }

  .search-result-arrow {
    color: #86868b;
    flex-shrink: 0;
    opacity: 0;
    transform: translateX(-4px);
    transition: opacity 0.15s ease, transform 0.15s ease;
  }
  .search-result-item:hover .search-result-arrow {
    opacity: 1;
    transform: translateX(0);
  }

  .search-result-title {
    font-size: 14px;
    font-weight: 500;
    color: #1d1d1f;
    letter-spacing: -0.01em;
    flex: 1;
  }

  .search-result-path {
    font-size: 11px;
    font-weight: 400;
    color: #86868b;
  }

  .search-empty {
    font-size: 14px;
    color: #86868b;
    padding: 12px 0;
  }

  /* ── Dark Mode Overrides for Specific Pages (e.g. Insights) ── */
  .nav-shell.nav-dark-mode {
    --nav-text-color: #f5f5f7;
    --nav-scrolled-bg: rgba(26,26,31,0.72);
    --nav-border-color: rgba(255,255,255,0.1);
  }
  
  .nav-shell:not(.nav-dark-mode) {
    --nav-text-color: #1d1d1f;
    --nav-scrolled-bg: rgba(255,255,255,0.72);
    --nav-border-color: rgba(0,0,0,0.06);
  }

  /* Apply the variables */
  .nav-shell .nav-wordmark,
  .nav-shell .nav-btn,
  .nav-shell .nav-search-icon,
  .nav-shell .nav-mobile-btn,
  .nav-shell .nav-resume-btn,
  .nav-shell .nav-social-btn {
    color: var(--nav-text-color);
  }
  
  /* Make the logo wordmark white on dark mode */
  .nav-shell.nav-dark-mode .nav-wordmark img {
    filter: invert(1);
  }

  /* Adjust scrolled background for dark mode */
  .nav-shell.nav-dark-mode.scrolled {
    background: var(--nav-scrolled-bg);
    border-color: var(--nav-border-color);
  }
  
  /* When panel is open, revert to light mode temporarily so dropdowns are readable */
  .nav-shell.nav-dark-mode.panel-open .nav-wordmark,
  .nav-shell.nav-dark-mode.panel-open .nav-btn,
  .nav-shell.nav-dark-mode.panel-open .nav-search-icon,
  .nav-shell.nav-dark-mode.panel-open .nav-mobile-btn,
  .nav-shell.nav-dark-mode.panel-open .nav-resume-btn,
  .nav-shell.nav-dark-mode.panel-open .nav-social-btn {
    color: #1d1d1f;
  }
  .nav-shell.nav-dark-mode.panel-open .nav-wordmark img {
    filter: none;
  }
`;

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled,     setScrolled]     = useState(false);
  const [activeDD,     setActiveDD]     = useState(null);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [searchOpen,   setSearchOpen]   = useState(false);
  const [searchQuery,  setSearchQuery]  = useState("");

  const ddTimer = useRef(null);
  const searchRef = useRef(null);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Body lock for mobile or search
  useEffect(() => {
    document.body.classList.toggle("nav-locked", mobileOpen || searchOpen);
    return () => document.body.classList.remove("nav-locked");
  }, [mobileOpen, searchOpen]);

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen) {
      setTimeout(() => searchRef.current?.focus(), 80);
    } else {
      setSearchQuery("");
    }
  }, [searchOpen]);

  // Escape key closes search
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setActiveDD(null);
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const go = useCallback((path) => {
    setActiveDD(null);
    setMobileOpen(false);
    setSearchOpen(false);
    navigate(path);
  }, [navigate]);

  // Search filtering
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return SEARCH_PAGES.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.keywords.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const isActive = (path) => location.pathname === path ||
    (path === "/overview" && (location.pathname === "/" || location.pathname === "/home"));

  // Dropdown hover handlers
  const handleItemEnter = (label) => {
    clearTimeout(ddTimer.current);
    setActiveDD(label);
  };
  const handleItemLeave = () => {
    ddTimer.current = setTimeout(() => setActiveDD(null), 180);
  };
  const handleDDEnter = () => clearTimeout(ddTimer.current);

  const isDarkPage = location.pathname.startsWith("/insights");

  const shellClass = [
    "nav-shell",
    isDarkPage ? "nav-dark-mode" : "",
    scrolled && !activeDD && !searchOpen ? "scrolled" : "",
    (activeDD || searchOpen)             ? "panel-open" : "",
  ].filter(Boolean).join(" ");

  // Search icon SVG
  const SearchSVG = () => (
    <svg width="15" height="15" viewBox="0 0 18 18" fill="none">
      <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <>
      <style>{CSS}</style>

      {/* ── Search overlay ── */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <m.div
              className="search-overlay-bg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSearchOpen(false)}
            />
            <m.div
              className="search-container"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease }}
            >
              <div className="search-inner">
                {/* Input */}
                <div className="search-input-row">
                  <span className="search-input-icon"><SearchSVG /></span>
                  <input
                    ref={searchRef}
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && searchResults.length > 0) {
                        go(searchResults[0].path);
                      }
                    }}
                  />
                  <button className="search-close" onClick={() => setSearchOpen(false)}>Cancel</button>
                </div>

                {/* Results */}
                <div className="search-results">
                  {!searchQuery.trim() ? (
                    <>
                      <div className="search-section-title">Quick Links</div>
                      {QUICK_LINKS.map((link) => (
                        <button key={link.label} className="search-result-item" onClick={() => go(link.path)}>
                          <span className="search-result-title">{link.label}</span>
                          <span className="search-result-arrow">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                        </button>
                      ))}
                    </>
                  ) : searchResults.length > 0 ? (
                    <>
                      <div className="search-section-title">Pages</div>
                      {searchResults.map((page) => (
                        <button key={page.path} className="search-result-item" onClick={() => go(page.path)}>
                          <span className="search-result-title">{page.title}</span>
                          <span className="search-result-path">{page.path}</span>
                          <span className="search-result-arrow">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5L8 6L4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          </span>
                        </button>
                      ))}
                    </>
                  ) : (
                    <div className="search-empty">No results found for "{searchQuery}"</div>
                  )}
                </div>
              </div>
            </m.div>
          </>
        )}
      </AnimatePresence>

      {/* ── Mobile sheet ── */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            className="nav-mobile-sheet"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease }}
          >
            <button className="nav-mobile-close" onClick={() => setMobileOpen(false)}>✕</button>

            {MOBILE_NAV.slice(0, 5).map((item, i) => (
              <m.button
                key={item.label}
                className="nav-mobile-link"
                onClick={() => go(item.path)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease }}
              >
                {item.label}
              </m.button>
            ))}

            <div className="nav-mobile-divider" />

            {MOBILE_NAV.slice(5).map((item, i) => (
              <m.button
                key={item.label}
                className="nav-mobile-link"
                onClick={() => go(item.path)}
                style={{ fontSize: "clamp(22px, 5vw, 34px)", fontWeight: 500, opacity: 0.5 }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 0.5, y: 0 }}
                transition={{ delay: 0.25 + i * 0.05, duration: 0.4, ease }}
              >
                {item.label}
              </m.button>
            ))}

            <m.div 
              className="nav-mobile-socials"
              style={{ display: 'flex', gap: '24px', marginTop: '40px', flexWrap: 'wrap' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4, ease }}
            >
              <a href={socialLinks.github.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1d1d1f' }}><Github size={24} strokeWidth={1.5} /></a>
              <a href={socialLinks.linkedin.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1d1d1f' }}><Linkedin size={24} strokeWidth={1.5} /></a>
              <a href={socialLinks.twitter.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1d1d1f' }}><Twitter size={24} strokeWidth={1.5} /></a>
              <a href={socialLinks.youtube.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1d1d1f' }}><Youtube size={24} strokeWidth={1.5} /></a>
              <a href={socialLinks.instagram.url} target="_blank" rel="noopener noreferrer" style={{ color: '#1d1d1f' }}><Instagram size={24} strokeWidth={1.5} /></a>
              <a href={socialLinks.email.url} style={{ color: '#1d1d1f' }}><Mail size={24} strokeWidth={1.5} /></a>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ── Navbar ── */}
      <nav className={shellClass}>
        <div className="nav-inner">

          {/* Logo */}
          <button className="nav-wordmark" onClick={() => go("/overview")} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src={logoImg} alt="Logo" style={{ height: '24px', width: '24px', borderRadius: '6px' }} />
            <span style={{ fontSize: '13px', fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--nav-text-color)' }}>TheNameIsBhagavan</span>
          </button>

          {/* Desktop links */}
          <div className="nav-links">
            {PRIMARY_NAV.map((item) => {
              if (item.dropdown) {
                const open = activeDD === item.label;
                return (
                  <div
                    key={item.label}
                    className="nav-item"
                    onMouseEnter={() => handleItemEnter(item.label)}
                    onMouseLeave={handleItemLeave}
                  >
                    <button
                      className={`nav-btn ${open ? "active" : ""}`}
                      onClick={() => go(item.dropdown[0].path)}
                    >
                      {item.label}
                      {/* tiny chevron */}
                      <svg style={{ marginLeft: 5, opacity: 0.5, transition: "transform 0.2s", transform: open ? "rotate(180deg)" : "rotate(0deg)" }} width="10" height="6" viewBox="0 0 10 6" fill="none">
                        <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    <AnimatePresence>
                      {open && (
                        <m.div
                          className="nav-dropdown"
                          initial={{ opacity: 0, y: -8, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0,  scale: 1 }}
                          exit={{ opacity: 0, y: -8, scale: 0.98 }}
                          transition={{ duration: 0.22, ease }}
                          onMouseEnter={handleDDEnter}
                          onMouseLeave={handleItemLeave}
                        >
                          {item.dropdown.map((sub, idx) => (
                            <React.Fragment key={sub.label}>
                              {idx > 0 && <div className="nav-dropdown-divider" />}
                              <button
                                className="nav-dropdown-item"
                                onClick={() => go(sub.path)}
                              >
                                <span className="nav-dropdown-label">{sub.label}</span>
                                <span className="nav-dropdown-sub">{sub.sub}</span>
                              </button>
                            </React.Fragment>
                          ))}
                        </m.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <div key={item.label} className="nav-item">
                  <button
                    className={`nav-btn ${isActive(item.path) ? "active" : ""}`}
                    onClick={() => go(item.path)}
                    onMouseEnter={() => setActiveDD(null)}
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="nav-actions">
            {/* Search icon */}
            <button
              className="nav-search-icon"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <SearchSVG />
            </button>

            {/* Social Icons */}
            <a
              href={socialLinks.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn"
              data-social="github"
              aria-label="GitHub Profile"
            >
              <Github size={18} strokeWidth={1.75} color="currentColor" />
            </a>
            <a
              href={socialLinks.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn"
              data-social="linkedin"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} strokeWidth={1.75} color="currentColor" />
            </a>
            <a
              href={socialLinks.twitter.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn"
              data-social="twitter"
              aria-label="X (Twitter) Profile"
            >
              <Twitter size={18} strokeWidth={1.75} color="currentColor" />
            </a>
            <a
              href={socialLinks.youtube.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn"
              data-social="youtube"
              aria-label="YouTube Channel"
            >
              <Youtube size={18} strokeWidth={1.75} color="currentColor" />
            </a>
            <a
              href={socialLinks.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-social-btn"
              data-social="instagram"
              aria-label="Instagram Profile"
            >
              <Instagram size={18} strokeWidth={1.75} color="currentColor" />
            </a>
            <a
              href={socialLinks.email.url}
              className="nav-social-btn"
              data-social="email"
              aria-label="Send Email"
            >
              <Mail size={18} strokeWidth={1.75} color="currentColor" />
            </a>

            <button
              className="nav-resume-btn"
              onClick={() => go("/resume")}
              aria-label="Resume"
            >
              <FileText size={18} strokeWidth={1.75} color="currentColor" />
            </button>

            {/* Mobile toggle */}
            <button
              className="nav-mobile-btn"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
            >
              <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                <path d="M1 1H21M1 8H21M1 15H21" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>

        </div>
      </nav>
    </>
  );
}

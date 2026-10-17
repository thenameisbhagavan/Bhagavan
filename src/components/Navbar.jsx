import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import logoImg from "../assets/logo.png";
import { socialLinks } from "../constants/socialLinks";

// ─────────────────────────────────────────────
// DIRECT NAVIGATION ARCHITECTURE
// ─────────────────────────────────────────────

const PRIMARY_NAV = [
  { label: "Overview",       path: "/" },
  { label: "Projects",       path: "/work" },
  { label: "Experience",     path: "/experience" },
  { label: "Innovation",     path: "/innovation" },
  { label: "Certifications", path: "/credentials" },
  { label: "Connect",        path: "/connect" },
];

const MOBILE_NAV = [
  { label: "Overview",       path: "/" },
  { label: "Projects",       path: "/work" },
  { label: "Experience",     path: "/experience" },
  { label: "Innovation",     path: "/innovation" },
  { label: "Certifications", path: "/credentials" },
  { label: "Connect",        path: "/connect" },
  { label: "Resume",         path: "/resume" },
];

// ─────────────────────────────────────────────
// SEARCH INDEX — every page is searchable
// ─────────────────────────────────────────────
const SEARCH_PAGES = [
  { title: "Overview",                  path: "/",                  keywords: "home about profile introduction hero" },
  { title: "Projects",                  path: "/work",              keywords: "projects work portfolio careeros aurabot veritas voltdrive agrivision assessment" },
  { title: "DV Assessment Platform",    path: "/work/data-valley-assessment-platform", keywords: "datavalley assessment enterprise evaluation nextjs react mongodb" },
  { title: "CareerOS",                  path: "/work/careeros",      keywords: "careeros intelligence system career trajectory ai" },
  { title: "AuraOS",                    path: "/work/auraos",        keywords: "auraos spatial ai os memory context chatbot" },
  { title: "VERITAS",                   path: "/work/veritas",       keywords: "veritas explainable intelligence fact tracing reasoning" },
  { title: "VoltDrive - EV Experience", path: "/work/voltdrive",     keywords: "voltdrive electric vehicle ev showroom automotive" },
  { title: "Experience",                path: "/experience",        keywords: "experience career timeline data valley technical trainer blackbucks studyowl pbr vits" },
  { title: "Innovation",                path: "/innovation",        keywords: "innovation research engineering lab vegacode experiments" },
  { title: "Certifications",           path: "/credentials",       keywords: "certifications awards credentials google aws infosys ibm" },
  { title: "Academic Archive",          path: "/academic-archive",   keywords: "education university degree btech cmm provisional marks" },
  { title: "Technology Ecosystem",      path: "/ecosystem",         keywords: "stack architecture tools python react node fastapi layers" },
  { title: "Resume",                    path: "/resume",            keywords: "resume cv download pdf curriculum vitae" },
  { title: "Vision",                    path: "/vision",            keywords: "future goals mission direction roadmap perspective philosophy" },
  { title: "Connect",                   path: "/connect",           keywords: "contact email message hire collaboration" },
  { title: "Engineering Journal",       path: "/journal",           keywords: "blog articles engineering journal writing insights systems" },
  { title: "Signal",                    path: "/signal",            keywords: "signal observing workflow tools reading desk current thinking" },
];

const QUICK_LINKS = [
  { label: "Projects",          path: "/work" },
  { label: "Experience",        path: "/experience" },
  { label: "Innovation",        path: "/innovation" },
  { label: "Certifications",    path: "/credentials" },
  { label: "Architecture",      path: "/ecosystem" },
  { label: "Resume",            path: "/resume" },
  { label: "Connect",           path: "/connect" },
];

const ease = [0.16, 1, 0.3, 1];

// ─────────────────────────────────────────────
// COMPACT BRAND TREATMENT: [RED B LOGO] Bhagavan (Apple-grade Typography)
// ─────────────────────────────────────────────
const TBLogo = () => (
  <div className="tb-logo-container">
    <div className="tb-logo-mark">
      <img 
        src={logoImg} 
        alt="Bhagavan" 
      />
    </div>
    <span className="brand-text">
      Bhagavan
    </span>
  </div>
);

// ─────────────────────────────────────────────
// STYLES
// ─────────────────────────────────────────────
const CSS = `
  /* ── Navbar shell ── */
  .nav-shell {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 64px;
    z-index: 9000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                backdrop-filter 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                border-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), 
                box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    border-bottom: 1px solid transparent;
  }
  
  /* Reduced motion */
  @media (prefers-reduced-motion: reduce) {
    .nav-shell, .nav-wordmark, .nav-btn, .nav-search-icon, .nav-mobile-btn, .nav-resume-btn, .brand-text, .nav-resume-icon, .nav-resume-arrow {
      transition-duration: 0.01ms !important;
      transform: none !important;
    }
  }

  .nav-shell.scrolled {
    background: var(--nav-scrolled-bg, rgba(255, 255, 255, 0.88));
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border-bottom: 1px solid var(--nav-border-color, rgba(0, 0, 0, 0.06));
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  }
  
  .nav-shell.panel-open {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(40px) saturate(180%);
    -webkit-backdrop-filter: blur(40px) saturate(180%);
    border-bottom: 1px solid transparent;
  }

  /* ── Inner row ── */
  .nav-inner {
    width: 100%;
    max-width: 1440px;
    padding: 0 40px;
    height: 100%;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    position: relative;
    z-index: 9010;
  }

  /* ── Brand Wordmark & Apple Advanced Typography ── */
  .nav-wordmark {
    justify-self: start;
    display: inline-flex;
    align-items: center;
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
    flex-shrink: 0;
    outline: none;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
    text-decoration: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }
  .nav-wordmark:hover { 
    opacity: 0.92;
  }
  .nav-wordmark:active {
    transform: scale(0.97);
  }
  .nav-wordmark:focus-visible { 
    outline: 2px solid #e50914; 
    outline-offset: 4px; 
    border-radius: 6px; 
  }

  .tb-logo-container {
    display: inline-flex;
    align-items: center;
    gap: 9px;
  }

  .tb-logo-mark {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), filter 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    filter: drop-shadow(0 1px 2px rgba(229, 9, 20, 0.18));
  }
  .tb-logo-mark img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
  .nav-wordmark:hover .tb-logo-mark {
    transform: scale(1.05) translateY(-0.5px);
    filter: drop-shadow(0 3px 8px rgba(229, 9, 20, 0.28));
  }

  .brand-text {
    font-family: var(--font-display, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif);
    font-size: 17.5px;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1;
    color: #111111;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    transition: color 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    display: inline-flex;
    align-items: center;
  }
  .nav-wordmark:hover .brand-text {
    color: #000000;
  }

  /* Dark mode brand adaptation */
  .nav-shell.nav-dark-mode .brand-text {
    color: #f5f5f7;
  }
  .nav-shell.nav-dark-mode .nav-wordmark:hover .brand-text {
    color: #ffffff;
  }

  /* ── Desktop links ── */
  .nav-links {
    justify-self: center;
    display: flex;
    align-items: center;
    gap: 28px;
    height: 100%;
  }

  /* Responsive spacing across desktop & tablet widths */
  @media (max-width: 1120px) {
    .nav-links { gap: 20px; }
    .nav-btn { font-size: 13.5px; }
    .nav-inner { padding: 0 28px; }
  }

  @media (max-width: 980px) {
    .nav-links { gap: 14px; }
    .nav-btn { font-size: 13px; }
    .nav-inner { padding: 0 20px; }
  }

  @media (max-width: 860px) { 
    .nav-links { display: none; }
    .nav-inner { padding: 0 16px; }
  }

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
    padding: 6px 4px;
    height: auto;
    display: inline-flex;
    align-items: center;
    font-family: var(--font-system, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif);
    font-size: 14px;
    font-weight: 500;
    color: var(--nav-text-color, #111111);
    opacity: 0.92;
    letter-spacing: -0.01em;
    cursor: pointer;
    white-space: nowrap;
    transition: color 0.2s cubic-bezier(0.16, 1, 0.3, 1), 
                opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), 
                transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    outline: none;
  }
  .nav-btn:hover { 
    opacity: 1;
    color: #e50914;
    transform: translateY(-1px);
  }
  .nav-btn.active {
    opacity: 1;
    color: var(--nav-text-color, #111111);
    font-weight: 650;
  }
  .nav-btn.active::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 4px;
    right: 4px;
    height: 2px;
    background: #e50914;
    border-radius: 99px;
  }
  .nav-btn:focus-visible {
    outline: 2px solid #e50914;
    outline-offset: 3px;
    border-radius: 4px;
  }

  /* ── Right actions ── */
  .nav-actions {
    justify-self: end;
    display: flex;
    align-items: center;
    gap: 14px;
    flex-shrink: 0;
  }

  /* ── Search Button ── */
  .nav-search-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    background: none;
    border: none;
    border-radius: 8px;
    padding: 0;
    cursor: pointer;
    color: var(--nav-text-color, #111111);
    opacity: 0.88;
    transition: opacity 0.2s ease, transform 0.2s ease, color 0.2s ease;
    outline: none;
    flex-shrink: 0;
  }
  .nav-search-icon:hover {
    opacity: 1;
    color: #e50914;
    transform: scale(1.05);
  }
  .nav-search-icon:focus-visible {
    outline: 2px solid #e50914;
    outline-offset: 2px;
    border-radius: 4px;
  }

  /* ── Redesigned Sophisticated Resume CTA ── */
  .nav-resume-btn {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    height: 33px;
    padding: 0 11px 0 9px;
    background: #ffffff;
    border: 1px solid rgba(229, 9, 20, 0.4);
    border-radius: 7px;
    cursor: pointer;
    color: #1d1d1f;
    transition: background-color 0.18s cubic-bezier(0.16, 1, 0.3, 1), 
                border-color 0.18s cubic-bezier(0.16, 1, 0.3, 1),
                color 0.18s cubic-bezier(0.16, 1, 0.3, 1),
                transform 0.18s cubic-bezier(0.16, 1, 0.3, 1), 
                box-shadow 0.18s cubic-bezier(0.16, 1, 0.3, 1);
    outline: none;
    flex-shrink: 0;
    text-decoration: none;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(229, 9, 20, 0.04);
  }

  .nav-resume-icon {
    flex-shrink: 0;
    color: #e50914;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.18s cubic-bezier(0.16, 1, 0.3, 1), transform 0.18s ease;
  }

  .nav-resume-text {
    color: #1d1d1f;
    font-family: var(--font-system, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif);
    font-weight: 600;
    font-size: 12.5px;
    letter-spacing: -0.015em;
    line-height: 1;
    transition: color 0.18s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .nav-resume-arrow {
    flex-shrink: 0;
    color: rgba(229, 9, 20, 0.72);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.18s cubic-bezier(0.16, 1, 0.3, 1), transform 0.18s cubic-bezier(0.16, 1, 0.3, 1);
    margin-left: -1px;
  }

  /* Hover state: smooth transition to solid favicon-red */
  .nav-resume-btn:hover {
    background: #e50914;
    border-color: #e50914;
    transform: translateY(-1px);
    box-shadow: 0 4px 14px rgba(229, 9, 20, 0.28);
  }
  .nav-resume-btn:hover .nav-resume-icon {
    color: #ffffff;
    transform: translateY(-0.5px);
  }
  .nav-resume-btn:hover .nav-resume-text {
    color: #ffffff;
  }
  .nav-resume-btn:hover .nav-resume-arrow {
    color: #ffffff;
    transform: translateX(1.5px);
  }

  /* Pressed state */
  .nav-resume-btn:active {
    background: #c70812;
    border-color: #c70812;
    transform: scale(0.97) translateY(0);
    box-shadow: 0 2px 6px rgba(229, 9, 20, 0.2);
  }
  .nav-resume-btn:active .nav-resume-icon,
  .nav-resume-btn:active .nav-resume-text,
  .nav-resume-btn:active .nav-resume-arrow {
    color: #ffffff;
  }

  /* Focus state */
  .nav-resume-btn:focus-visible {
    outline: 2px solid #e50914;
    outline-offset: 2px;
  }

  /* Dark mode */
  .nav-shell.nav-dark-mode .nav-resume-btn {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(229, 9, 20, 0.6);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }
  .nav-shell.nav-dark-mode .nav-resume-text {
    color: #ffffff;
  }
  .nav-shell.nav-dark-mode .nav-resume-icon {
    color: #ff3b30;
  }
  .nav-shell.nav-dark-mode .nav-resume-arrow {
    color: rgba(255, 255, 255, 0.7);
  }
  .nav-shell.nav-dark-mode .nav-resume-btn:hover {
    background: #e50914;
    border-color: #e50914;
  }
  .nav-shell.nav-dark-mode .nav-resume-btn:hover .nav-resume-text,
  .nav-shell.nav-dark-mode .nav-resume-btn:hover .nav-resume-icon,
  .nav-shell.nav-dark-mode .nav-resume-btn:hover .nav-resume-arrow {
    color: #ffffff;
  }

  @media (max-width: 480px) {
    .nav-actions {
      gap: 9px;
    }
    .nav-resume-btn {
      height: 32px;
      padding: 0 9px 0 7px;
      gap: 4px;
    }
    .nav-resume-text {
      font-size: 11.5px;
    }
  }

  /* ── Mobile menu toggle ── */
  .nav-mobile-btn {
    display: none;
    background: none;
    border: none;
    padding: 6px;
    cursor: pointer;
    color: var(--nav-text-color, #111111);
    transition: opacity 0.2s ease, color 0.2s ease;
    outline: none;
  }
  .nav-mobile-btn:hover { opacity: 0.6; }
  .nav-mobile-btn:focus-visible {
    outline: 2px solid #e50914;
    outline-offset: 2px;
    border-radius: 4px;
  }
  @media (max-width: 860px) {
    .nav-mobile-btn { display: inline-flex; align-items: center; justify-content: center; }
  }

  /* ── Mobile full-screen sheet ── */
  .nav-mobile-sheet {
    position: fixed;
    inset: 0;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(40px) saturate(200%);
    -webkit-backdrop-filter: blur(40px) saturate(200%);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    padding: 90px 32px 50px;
    overflow-y: auto;
  }

  .nav-mobile-links-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 10px;
  }

  .nav-mobile-link {
    font-size: clamp(28px, 6.5vw, 44px);
    font-weight: 700;
    letter-spacing: -0.035em;
    color: #111111;
    background: none;
    border: none;
    text-align: left;
    padding: 8px 0;
    cursor: pointer;
    line-height: 1.15;
    transition: opacity 0.2s ease, transform 0.2s ease, color 0.2s ease;
    text-decoration: none;
    display: block;
    font-family: var(--font-display, "SF Pro Display", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif);
  }
  .nav-mobile-link:hover {
    color: #e50914;
    transform: translateX(6px);
  }
  .nav-mobile-link.active {
    color: #e50914;
  }

  .nav-mobile-resume-link {
    color: #e50914 !important;
    font-weight: 700 !important;
    margin-top: 16px;
    padding-top: 16px;
    border-top: 1px solid rgba(0, 0, 0, 0.08);
  }

  .nav-mobile-close {
    position: absolute;
    top: 20px;
    right: 24px;
    background: rgba(0, 0, 0, 0.05);
    border: none;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 16px;
    color: #111111;
    transition: background 0.2s ease, transform 0.2s ease;
    outline: none;
  }
  .nav-mobile-close:hover { 
    background: rgba(0, 0, 0, 0.1); 
    transform: scale(1.05);
  }
  .nav-mobile-close:focus-visible {
    outline: 2px solid #e50914;
    outline-offset: 2px;
  }

  /* ── Body lock ── */
  body.nav-locked { overflow: hidden; }

  /* ══════════════════════════════════════════
     APPLE SEARCH OVERLAY
     ══════════════════════════════════════════ */
  .search-overlay-bg {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    z-index: 9050;
    cursor: pointer;
  }

  .search-container {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 9060;
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(40px) saturate(200%);
    -webkit-backdrop-filter: blur(40px) saturate(200%);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  }

  .search-inner {
    max-width: 740px;
    margin: 0 auto;
    padding: 0 32px;
  }

  .search-input-row {
    display: flex;
    align-items: center;
    gap: 12px;
    height: 52px;
  }

  .search-input-icon {
    flex-shrink: 0;
    color: #86868b;
    display: flex;
    align-items: center;
  }

  .search-input {
    flex: 1;
    background: none;
    border: none;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: -0.015em;
    color: #111111;
    padding: 0;
    caret-color: #e50914;
    font-family: inherit;
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
    color: #e50914;
    cursor: pointer;
    padding: 6px 4px;
    transition: opacity 0.15s ease;
    white-space: nowrap;
    outline: none;
  }
  .search-close:hover { opacity: 0.7; }

  .search-results {
    padding: 16px 0 24px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    max-height: 480px;
    overflow-y: auto;
  }

  .search-section-title {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.08em;
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
    background: rgba(0, 0, 0, 0.04);
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
    color: #e50914;
  }

  .search-result-title {
    font-size: 14px;
    font-weight: 500;
    color: #111111;
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
    padding: 16px 0;
  }

  /* ── Dark Mode Overrides for Dark-Themed Routes ── */
  .nav-shell.nav-dark-mode {
    --nav-text-color: #ffffff;
    --nav-scrolled-bg: rgba(13, 13, 18, 0.88);
    --nav-border-color: rgba(255, 255, 255, 0.08);
  }
  
  .nav-shell:not(.nav-dark-mode) {
    --nav-text-color: #111111;
    --nav-scrolled-bg: rgba(255, 255, 255, 0.88);
    --nav-border-color: rgba(0, 0, 0, 0.06);
  }

  .nav-shell .nav-wordmark .brand-text,
  .nav-shell .nav-btn,
  .nav-shell .nav-search-icon,
  .nav-shell .nav-mobile-btn {
    color: var(--nav-text-color);
  }
  
  .nav-shell.nav-dark-mode.scrolled {
    background: var(--nav-scrolled-bg);
    border-color: var(--nav-border-color);
    backdrop-filter: blur(20px) saturate(140%);
    -webkit-backdrop-filter: blur(20px) saturate(140%);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
  }
`;

// ─────────────────────────────────────────────
// COMPONENT
// ─────────────────────────────────────────────
export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [searchOpen,  setSearchOpen]  = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Escape key closes search & mobile menu
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const go = useCallback((path) => {
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

  const isActive = (path) => {
    return location.pathname === path ||
      (path === "/" && (location.pathname === "/overview" || location.pathname === "/home")) ||
      (path === "/work" && location.pathname.startsWith("/work/"));
  };

  // Dynamic theme detection for pages with dark canvas
  const [activeNavTheme, setActiveNavTheme] = useState("light");

  useEffect(() => {
    const timer = setTimeout(() => {
      const sections = Array.from(document.querySelectorAll("[data-nav-theme]"));
      
      if (sections.length === 0) {
        const isDark = location.pathname.startsWith("/work/voltdrive") || 
                       location.pathname.startsWith("/work/careeros") || 
                       location.pathname.startsWith("/work/auraos") || 
                       location.pathname.startsWith("/work/veritas") || 
                       location.pathname === "/journal";
        setActiveNavTheme(isDark ? "dark" : "light");
        return;
      }

      let initialTheme = "light";
      for (const section of sections) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          initialTheme = section.getAttribute("data-nav-theme");
          break;
        }
      }
      setActiveNavTheme(initialTheme);

      const observer = new IntersectionObserver(
        (entries) => {
          const visibleEntries = entries.filter(e => e.isIntersecting);
          if (visibleEntries.length === 0) return;
          
          visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          const topEntry = visibleEntries[0];
          
          if (topEntry.intersectionRatio > 0) {
            setActiveNavTheme(topEntry.target.getAttribute("data-nav-theme") || "light");
          }
        },
        {
          root: null,
          rootMargin: "-20% 0px -20% 0px",
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        }
      );

      sections.forEach(s => observer.observe(s));
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const shellClass = [
    "nav-shell",
    activeNavTheme === "dark" && !mobileOpen ? "nav-dark-mode" : "",
    scrolled && !searchOpen ? "scrolled" : "",
    searchOpen ? "panel-open" : "",
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
                    placeholder="Search systems, experience, notes..."
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
            transition={{ duration: 0.35, ease }}
          >
            <button className="nav-mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close menu">✕</button>

            <div className="nav-mobile-links-wrapper">
              {MOBILE_NAV.map((item, i) => {
                const isResume = item.label === "Resume";
                const isCurrent = isActive(item.path);
                return (
                  <m.button
                    key={item.label}
                    className={`nav-mobile-link ${isResume ? "nav-mobile-resume-link" : ""} ${isCurrent ? "active" : ""}`}
                    onClick={() => go(item.path)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.35, ease }}
                  >
                    {item.label}
                  </m.button>
                );
              })}
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ── Navbar ── */}
      <nav className={shellClass} role="navigation" aria-label="Primary Navigation">
        <div className="nav-inner">

          {/* Left: Red B Logo & "Bhagavan" */}
          <button className="nav-wordmark apple-pressable" onClick={() => go("/")} aria-label="Bhagavan — Home">
            <TBLogo />
          </button>

          {/* Center: Direct Navigation Links */}
          <div className="nav-links">
            {PRIMARY_NAV.map((item) => {
              const itemIsActive = isActive(item.path);
              return (
                <div key={item.label} className="nav-item">
                  <button
                    className={`nav-btn apple-pressable ${itemIsActive ? "active" : ""}`}
                    onClick={() => go(item.path)}
                    aria-current={itemIsActive ? "page" : undefined}
                  >
                    {item.label}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right: Search & Red Resume CTA */}
          <div className="nav-actions">
            {/* Search icon */}
            <button
              className="nav-search-icon apple-pressable"
              onClick={() => setSearchOpen(true)}
              aria-label="Search portfolio"
              title="Search"
            >
              <SearchSVG />
            </button>

            {/* Redesigned Document-Action Resume CTA */}
            <button
              className="nav-resume-btn apple-pressable"
              onClick={() => go("/resume")}
              aria-label="View Resume document"
              title="Resume"
            >
              <FileText className="nav-resume-icon" size={13.5} strokeWidth={2} />
              <span className="nav-resume-text">Resume</span>
              <ArrowRight className="nav-resume-arrow" size={11} strokeWidth={2.2} />
            </button>

            {/* Mobile menu toggle */}
            <button
              className="nav-mobile-btn apple-pressable"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
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

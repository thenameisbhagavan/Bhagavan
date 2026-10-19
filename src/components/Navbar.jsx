import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { m, AnimatePresence, LayoutGroup } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import logoImg from "../assets/logo.png";
import "../styles/Navbar.css";

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

// ─────────────────────────────────────────────
// SEARCH INDEX — complete portfolio surface
// ─────────────────────────────────────────────
const SEARCH_PAGES = [
  { title: "Overview",                  path: "/",                  keywords: "home about profile introduction hero bio software engineer" },
  { title: "Projects",                  path: "/work",              keywords: "projects work portfolio careeros aurabot veritas voltdrive agrivision assessment flagship" },
  { title: "DV Assessment Platform",    path: "/work/data-valley-assessment-platform", keywords: "datavalley assessment enterprise evaluation nextjs react mongodb" },
  { title: "CareerOS",                  path: "/work/careeros",      keywords: "careeros intelligence system career trajectory ai resume parsing" },
  { title: "AuraOS",                    path: "/work/auraos",        keywords: "auraos spatial ai os memory context chatbot generative" },
  { title: "VERITAS",                   path: "/work/veritas",       keywords: "veritas explainable intelligence fact tracing reasoning verification" },
  { title: "VoltDrive - EV Experience", path: "/work/voltdrive",     keywords: "voltdrive electric vehicle ev showroom automotive 3d threejs" },
  { title: "Experience",                path: "/experience",        keywords: "experience career timeline data valley technical trainer blackbucks studyowl pbr vits" },
  { title: "Innovation",                path: "/innovation",        keywords: "innovation research engineering lab vegacode experiments patents" },
  { title: "Certifications",           path: "/credentials",       keywords: "certifications awards credentials google aws infosys ibm academic" },
  { title: "Academic Archive",          path: "/academic-archive",   keywords: "education university degree btech cmm provisional marks transcripts" },
  { title: "Technology Ecosystem",      path: "/ecosystem",         keywords: "stack architecture tools python react node fastapi layers system design" },
  { title: "Resume",                    path: "/resume",            keywords: "resume cv download pdf curriculum vitae profile summary" },
  { title: "Vision",                    path: "/vision",            keywords: "future goals mission direction roadmap perspective philosophy thesis" },
  { title: "Connect",                   path: "/connect",           keywords: "contact email message hire collaboration social github linkedin" },
  { title: "Engineering Journal",       path: "/journal",           keywords: "blog articles engineering journal writing insights systems architecture" },
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

// Precision Search SVG Symbol
const SearchSVG = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [scrolled,         setScrolled]         = useState(false);
  const [mobileOpen,       setMobileOpen]       = useState(false);
  const [searchOpen,       setSearchOpen]       = useState(false);
  const [searchQuery,      setSearchQuery]      = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  const searchInputRef = useRef(null);

  // ── Scroll elevation detection ──
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Lock body scroll when mobile sheet or search modal is open ──
  useEffect(() => {
    if (mobileOpen || searchOpen) {
      document.body.classList.add("nav-locked");
    } else {
      document.body.classList.remove("nav-locked");
    }
    return () => document.body.classList.remove("nav-locked");
  }, [mobileOpen, searchOpen]);

  // ── Focus search input on open ──
  useEffect(() => {
    if (searchOpen) {
      setHighlightedIndex(0);
      const timer = setTimeout(() => searchInputRef.current?.focus(), 60);
      return () => clearTimeout(timer);
    } else {
      setSearchQuery("");
      setHighlightedIndex(0);
    }
  }, [searchOpen]);

  // ── Route change reset ──
  useEffect(() => {
    setMobileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const go = useCallback(
    (path) => {
      setMobileOpen(false);
      setSearchOpen(false);
      navigate(path);
    },
    [navigate]
  );

  // ── Keyboard shortcuts: ⌘K or / to open search, Escape to close ──
  useEffect(() => {
    const handleKeyDown = (e) => {
      // ⌘K or Ctrl+K
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
        return;
      }

      // '/' to open search (when not in an active input/textarea)
      if (
        e.key === "/" &&
        !searchOpen &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        setSearchOpen(true);
        return;
      }

      // Escape key closes modals
      if (e.key === "Escape") {
        if (searchOpen) {
          e.preventDefault();
          setSearchOpen(false);
        } else if (mobileOpen) {
          e.preventDefault();
          setMobileOpen(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [searchOpen, mobileOpen]);

  // ── Search filtering ──
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_PAGES.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.keywords.toLowerCase().includes(q) ||
        p.path.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Reset highlight index when results change
  useEffect(() => {
    setHighlightedIndex(0);
  }, [searchResults.length]);

  // Handle arrow key navigation in search results
  const handleSearchKeyDown = (e) => {
    const items = searchQuery.trim() ? searchResults : QUICK_LINKS;
    if (items.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev + 1) % items.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((prev) => (prev - 1 + items.length) % items.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = items[highlightedIndex];
      if (target) {
        go(target.path);
      }
    }
  };

  // ── Active destination checker ──
  const isActive = (path) => {
    if (path === "/") {
      return (
        location.pathname === "/" ||
        location.pathname === "/overview" ||
        location.pathname === "/home"
      );
    }
    if (path === "/work") {
      return location.pathname === "/work" || location.pathname.startsWith("/work/");
    }
    return location.pathname === path;
  };

  // ── Dynamic theme detection for pages with dark canvas ──
  const [activeNavTheme, setActiveNavTheme] = useState("light");

  useEffect(() => {
    const timer = setTimeout(() => {
      const sections = Array.from(document.querySelectorAll("[data-nav-theme]"));

      if (sections.length === 0) {
        const isDark =
          location.pathname.startsWith("/work/voltdrive") ||
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
          const visibleEntries = entries.filter((e) => e.isIntersecting);
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
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        }
      );

      sections.forEach((s) => observer.observe(s));
      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const shellClassName = [
    "nav-shell",
    activeNavTheme === "dark" && !mobileOpen ? "nav-dark-mode" : "",
    scrolled && !searchOpen ? "scrolled" : "",
    searchOpen ? "panel-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <LayoutGroup id="bhagavan-navigation">
      {/* ── Spotlight Search Command Palette ── */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <m.div
              className="nav-search-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setSearchOpen(false)}
              aria-hidden="true"
            />
            <div className="nav-search-modal-container">
              <m.div
                className="nav-search-modal"
                initial={{ opacity: 0, scale: 0.98, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                role="dialog"
                aria-modal="true"
                aria-label="Search Portfolio"
              >
                {/* Search Input Bar */}
                <div className="nav-search-input-wrap">
                  <span className="nav-search-input-icon">
                    <SearchSVG size={16} />
                  </span>
                  <input
                    ref={searchInputRef}
                    className="nav-search-input"
                    type="text"
                    placeholder="Search systems, articles, experience, credentials..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchKeyDown}
                    aria-label="Search query"
                  />
                  <kbd className="nav-search-kbd">ESC</kbd>
                  <button
                    className="nav-search-cancel-btn"
                    onClick={() => setSearchOpen(false)}
                    aria-label="Close search"
                  >
                    Cancel
                  </button>
                </div>

                {/* Search Results / Quick Links Pane */}
                <div className="nav-search-results-pane">
                  {!searchQuery.trim() ? (
                    <>
                      <div className="nav-search-group-title">Quick Destinations</div>
                      {QUICK_LINKS.map((link, idx) => (
                        <button
                          key={link.label}
                          className={`nav-search-item ${idx === highlightedIndex ? "highlighted" : ""}`}
                          onClick={() => go(link.path)}
                          onMouseEnter={() => setHighlightedIndex(idx)}
                        >
                          <div className="nav-search-item-left">
                            <span className="nav-search-item-title">{link.label}</span>
                            <span className="nav-search-item-path">{link.path}</span>
                          </div>
                          <div className="nav-search-item-right">
                            <ArrowRight size={13} strokeWidth={2} />
                          </div>
                        </button>
                      ))}
                    </>
                  ) : searchResults.length > 0 ? (
                    <>
                      <div className="nav-search-group-title">
                        Results ({searchResults.length})
                      </div>
                      {searchResults.map((page, idx) => (
                        <button
                          key={page.path}
                          className={`nav-search-item ${idx === highlightedIndex ? "highlighted" : ""}`}
                          onClick={() => go(page.path)}
                          onMouseEnter={() => setHighlightedIndex(idx)}
                        >
                          <div className="nav-search-item-left">
                            <span className="nav-search-item-title">{page.title}</span>
                            <span className="nav-search-item-path">{page.path}</span>
                          </div>
                          <div className="nav-search-item-right">
                            <ArrowRight size={13} strokeWidth={2} />
                          </div>
                        </button>
                      ))}
                    </>
                  ) : (
                    <div className="nav-search-empty">
                      No matching pages found for "{searchQuery}".
                    </div>
                  )}
                </div>
              </m.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* ── Refined Mobile Menu Sheet ── */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            className="nav-mobile-sheet"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Sheet Header */}
            <div className="nav-mobile-header">
              <button
                className="nav-brand"
                onClick={() => go("/")}
                aria-label="Bhagavan — Home"
              >
                <div className="nav-brand-mark">
                  <img src={logoImg} alt="" aria-hidden="true" />
                </div>
                <span className="nav-brand-text">Bhagavan</span>
              </button>

              <button
                className="nav-mobile-close-btn"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
              >
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 3L13 13M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Sheet Body */}
            <div className="nav-mobile-body">
              {/* Quick Search Tap */}
              <button
                className="nav-mobile-search-bar"
                onClick={() => {
                  setMobileOpen(false);
                  setSearchOpen(true);
                }}
                aria-label="Open search dialog"
              >
                <SearchSVG size={15} />
                <span style={{ flex: 1 }}>Search portfolio...</span>
                <kbd className="nav-search-kbd">⌘K</kbd>
              </button>

              {/* Main Navigation Destinations */}
              <div className="nav-mobile-links-list">
                {PRIMARY_NAV.map((item, idx) => {
                  const itemIsActive = isActive(item.path);
                  return (
                    <m.button
                      key={item.label}
                      className={`nav-mobile-nav-link ${itemIsActive ? "active" : ""}`}
                      onClick={() => go(item.path)}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: idx * 0.03 + 0.04,
                        duration: 0.24,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      aria-current={itemIsActive ? "page" : undefined}
                    >
                      <span>{item.label}</span>
                      {itemIsActive && <div className="nav-mobile-nav-link-dot" />}
                    </m.button>
                  );
                })}
              </div>

              {/* Mobile Footer with Document Action CTA */}
              <div className="nav-mobile-footer">
                <button
                  className="nav-mobile-resume-btn"
                  onClick={() => go("/resume")}
                  aria-label="View Resume document"
                >
                  <FileText size={15} strokeWidth={2} className="nav-resume-icon" />
                  <span>Resume & Credentials</span>
                  <ArrowRight size={13} strokeWidth={2.2} className="nav-resume-arrow" />
                </button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ── Primary Navigation Bar ── */}
      <header className={shellClassName} role="banner">
        <nav className="nav-inner" aria-label="Primary Navigation">
          {/* Left: Brand Identity (B Logo + Wordmark) */}
          <button
            className="nav-brand"
            onClick={() => go("/")}
            aria-label="Bhagavan — Overview (Home)"
          >
            <div className="nav-brand-mark">
              <img src={logoImg} alt="TheNameIsBhagavan logo" />
            </div>
            <span className="nav-brand-text">Bhagavan</span>
          </button>

          {/* Center: Desktop Navigation Destinations */}
          <div className="nav-links-container" role="menubar">
            {PRIMARY_NAV.map((item) => {
              const itemIsActive = isActive(item.path);
              return (
                <div key={item.label} className="nav-link-item" role="none">
                  <button
                    className={`nav-link-btn ${itemIsActive ? "active" : ""}`}
                    onClick={() => go(item.path)}
                    role="menuitem"
                    aria-current={itemIsActive ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {itemIsActive && (
                      <m.div
                        layoutId="navActiveIndicator"
                        className="nav-active-indicator"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right: Actions (Search + Resume CTA + Mobile Menu Toggle) */}
          <div className="nav-actions">
            {/* Search Icon Control (40px clickable area) */}
            <button
              className="nav-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search portfolio (Press ⌘K or /)"
              title="Search (⌘K)"
            >
              <SearchSVG size={16} />
            </button>

            {/* Document-Action Resume CTA (40px high) */}
            <button
              className="nav-resume-cta"
              onClick={() => go("/resume")}
              aria-label="View Resume document"
              title="Resume"
            >
              <FileText className="nav-resume-icon" size={14} strokeWidth={2} />
              <span className="nav-resume-label">Resume</span>
              <ArrowRight className="nav-resume-arrow" size={11.5} strokeWidth={2.2} />
            </button>

            {/* Mobile Menu Toggle (40px touch target) */}
            <button
              className="nav-mobile-toggle"
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
                <path
                  d="M2.5 5.5H15.5M2.5 12.5H15.5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>
    </LayoutGroup>
  );
}

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { m, AnimatePresence, LayoutGroup } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import logoImg from "../assets/logo.png";
import "../styles/Navbar.css";

// ─────────────────────────────────────────────
// DIRECT NAVIGATION ARCHITECTURE (7 DESTINATIONS)
// ─────────────────────────────────────────────
const PRIMARY_NAV = [
  { label: "Overview",       path: "/" },
  { label: "Work",           path: "/work" },
  { label: "Experience",     path: "/experience" },
  { label: "Vision",         path: "/vision" },
  { label: "Innovation",     path: "/innovation" },
  { label: "Credentials",    path: "/credentials" },
  { label: "Connect",        path: "/connect" },
];

// ─────────────────────────────────────────────
// SEARCH INDEX — Complete Portfolio Surface
// ─────────────────────────────────────────────
const SEARCH_PAGES = [
  { title: "Overview",                  path: "/",                  keywords: "home about profile introduction hero bio software engineer ai data science" },
  { title: "Selected Work & Systems",   path: "/work",              keywords: "projects work portfolio dv labs assessment careeros aurabot veritas voltdrive agrivision flagship" },
  { title: "DV Labs Platform",          path: "/work/dv-labs-platform", keywords: "dv labs company project milestone locked viva defense enterprise platform" },
  { title: "DV Labs Assessment Engine", path: "/work/data-valley-assessment-platform", keywords: "datavalley assessment enterprise evaluation nextjs react mongodb 40 questions timer" },
  { title: "CareerOS",                  path: "/work/careeros",      keywords: "careeros intelligence system career trajectory ai resume parsing" },
  { title: "AuraOS",                    path: "/work/auraos",        keywords: "auraos spatial ai os memory context chatbot generative" },
  { title: "VERITAS",                   path: "/work/veritas",       keywords: "veritas explainable intelligence fact tracing reasoning verification" },
  { title: "VoltDrive - EV Experience", path: "/work/voltdrive",     keywords: "voltdrive electric vehicle ev showroom automotive 3d threejs" },
  { title: "Experience & Timeline",     path: "/experience",        keywords: "experience career timeline data valley technical trainer blackbucks studyowl pbr vits" },
  { title: "Vision & Philosophy",       path: "/vision",            keywords: "future goals mission direction roadmap perspective philosophy thesis" },
  { title: "Innovation & Labs",         path: "/innovation",        keywords: "innovation research engineering lab vegacode experiments patents" },
  { title: "Credentials & Awards",      path: "/credentials",       keywords: "certifications awards credentials google aws infosys ibm academic" },
  { title: "Academic Archive",          path: "/academic-archive",   keywords: "education university degree btech cmm provisional marks transcripts" },
  { title: "Resume & Documents",        path: "/resume",            keywords: "resume cv download pdf curriculum vitae profile summary" },
  { title: "Connect & Collaboration",   path: "/connect",           keywords: "contact email message hire collaboration social github linkedin" },
  { title: "Engineering Journal",       path: "/journal",           keywords: "blog articles engineering journal writing insights systems architecture" },
  { title: "Signal",                    path: "/signal",            keywords: "signal observing workflow tools reading desk current thinking" },
];

const QUICK_LINKS = [
  { label: "Work",              path: "/work" },
  { label: "Experience",        path: "/experience" },
  { label: "Vision",            path: "/vision" },
  { label: "Innovation",        path: "/innovation" },
  { label: "Credentials",       path: "/credentials" },
  { label: "Resume",            path: "/resume" },
  { label: "Connect",           path: "/connect" },
];

// Minimal Precision Apple Search SVG Icon (14px)
const SearchSVG = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M14.5 14.5L11.2 11.2M12.8 6.9C12.8 10.1585 10.1585 12.8 6.9 12.8C3.64152 12.8 1 10.1585 1 6.9C1 3.64152 3.64152 1 6.9 1C10.1585 1 12.8 3.64152 12.8 6.9Z"
      stroke="currentColor"
      strokeWidth="1.5"
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
      setScrolled(window.scrollY > 8);
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
    scrolled ? "scrolled" : "",
    searchOpen ? "panel-open" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <LayoutGroup id="apple-nav-system">
      {/* ── Apple Spotlight Search Command Palette ── */}
      <AnimatePresence>
        {searchOpen && (
          <>
            <m.div
              className="nav-search-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.16 }}
              onClick={() => setSearchOpen(false)}
              aria-hidden="true"
            />
            <div className="nav-search-modal-container">
              <m.div
                className="nav-search-modal"
                initial={{ opacity: 0, scale: 0.98, y: -8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -8 }}
                transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                role="dialog"
                aria-modal="true"
                aria-label="Search Portfolio"
              >
                {/* Search Input Bar */}
                <div className="nav-search-input-wrap">
                  <span className="nav-search-input-icon">
                    <SearchSVG size={15} />
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

      {/* ── Apple-Grade Mobile Menu Sheet ── */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            className="nav-mobile-sheet"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-modal="true"
            aria-label="Navigation Menu"
          >
            {/* Sheet Header */}
            <div className="nav-mobile-header">
              <button
                className="nav-brand"
                onClick={() => go("/")}
                aria-label="TheNameIsBhagavan — Home"
              >
                <div className="nav-brand-mark">
                  <img src={logoImg} alt="" aria-hidden="true" />
                </div>
                <span className="nav-brand-text">TheNameIsBhagavan</span>
              </button>

              <button
                className="nav-mobile-close-btn"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
              >
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 3L13 13M13 3L3 13"
                    stroke="currentColor"
                    strokeWidth="1.8"
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
                <SearchSVG size={14} />
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
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: idx * 0.025 + 0.04,
                        duration: 0.2,
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

              {/* Mobile Footer with Refined Document Action */}
              <div className="nav-mobile-footer">
                <button
                  className="nav-mobile-resume-btn"
                  onClick={() => go("/resume")}
                  aria-label="View Resume document"
                >
                  <FileText size={14} strokeWidth={2} className="nav-resume-icon" />
                  <span>View Resume & Credentials</span>
                  <ArrowRight size={13} strokeWidth={2} className="nav-resume-arrow" />
                </button>
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>

      {/* ── Primary Global Navigation Bar (Apple.com Precision System) ── */}
      <header className={shellClassName} role="banner">
        <nav className="nav-inner" aria-label="Global Navigation">
          
          {/* ZONE 1 (LEFT): Brand Identity (Red B Logo + TheNameIsBhagavan Wordmark) */}
          <div className="nav-zone-left">
            <button
              className="nav-brand"
              onClick={() => go("/")}
              aria-label="TheNameIsBhagavan — Overview (Home)"
            >
              <div className="nav-brand-mark">
                <img src={logoImg} alt="TheNameIsBhagavan" />
              </div>
              <span className="nav-brand-text">TheNameIsBhagavan</span>
            </button>
          </div>

          {/* ZONE 2 (CENTER): Primary Navigation Links (Mathematically Centered) */}
          <div className="nav-zone-center" role="menubar">
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
                        layoutId="appleNavActiveIndicator"
                        className="nav-active-indicator"
                        transition={{ type: "spring", stiffness: 450, damping: 36 }}
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </div>

          {/* ZONE 3 (RIGHT): Minimal Search + Refined Apple-Style Resume Action */}
          <div className="nav-zone-right">
            {/* Minimal Search Control */}
            <button
              className="nav-search-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search portfolio (Press ⌘K or /)"
              title="Search (⌘K)"
            >
              <SearchSVG size={14} />
            </button>

            {/* Refined Apple-Style Resume Action Pill */}
            <button
              className="nav-resume-cta"
              onClick={() => go("/resume")}
              aria-label="View Resume document"
              title="Resume"
            >
              <FileText className="nav-resume-icon" size={11} strokeWidth={2} />
              <span className="nav-resume-label">Resume</span>
              <ArrowRight className="nav-resume-arrow" size={10} strokeWidth={2.2} />
            </button>

            {/* Minimal Apple 2-Line Mobile Menu Control */}
            <button
              className={`nav-mobile-toggle ${mobileOpen ? "is-open" : ""}`}
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              <span className="nav-toggle-bar bar-1" aria-hidden="true"></span>
              <span className="nav-toggle-bar bar-2" aria-hidden="true"></span>
            </button>
          </div>

        </nav>
      </header>
    </LayoutGroup>
  );
}

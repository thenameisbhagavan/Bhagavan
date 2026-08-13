import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { m } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { getAllArticles } from '../data/articles';
import BrandSignature from '../components/BrandSignature';
import JournalSearch from '../components/journal/JournalSearch';
import '../styles/EngineeringJournal.css';

// ─── Motion ───────────────────────────────────────────────────────────────────
const appleEase = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden:  { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.0, ease: appleEase } },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const FROM_THE_BUILD = [
  { num: "01", name: "CareerOS", desc: "Career Intelligence", trace: ["Why I Built It", "The Architecture", "What Changed"] },
  { num: "02", name: "AuraOS", desc: "Persistent AI Memory", trace: ["The Core Problem", "Memory Layer", "Product Experience"] },
  { num: "03", name: "VERITAS", desc: "Reasoning & Evidence", trace: ["Information Gap", "Evidence Networks", "Explainable Output"] },
  { num: "04", name: "VoltDrive", desc: "Digital Product Experience", trace: ["The Interface", "State Management", "Performance"] }
];

const FIELD_NOTES = [
  "A good abstraction removes complexity. A bad abstraction hides it.",
  "AI without context is autocomplete with better marketing.",
  "The interface is part of the system.",
  "Shipping exposes assumptions that architecture diagrams cannot."
];

// ─── Page Component ───────────────────────────────────────────────────────────
export default function EngineeringJournal() {
  const articles = getAllArticles();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k')) && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(articles.map(a => a.category));
    return ['All', ...Array.from(cats)];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    let res = articles;
    if (activeCategory !== 'All') {
      res = res.filter(a => a.category === activeCategory);
    }
    return res.sort((a, b) => new Date(b.published) - new Date(a.published));
  }, [articles, activeCategory]);

  const series = useMemo(() => {
    const seriesMap = new Map();
    articles.forEach(a => {
      if (a.series) {
        if (!seriesMap.has(a.series)) seriesMap.set(a.series, []);
        seriesMap.get(a.series).push(a);
      }
    });
    const expectedOrder = ["CareerOS", "AuraOS", "VERITAS", "VoltDrive", "Engineering Philosophy", "Python Engineering"];
    return Array.from(seriesMap.entries()).sort((a, b) => {
      let indexA = expectedOrder.indexOf(a[0]);
      let indexB = expectedOrder.indexOf(b[0]);
      if (indexA === -1) indexA = 999;
      if (indexB === -1) indexB = 999;
      return indexA - indexB;
    });
  }, [articles]);

  const archiveByYearMonth = useMemo(() => {
    const grouped = {};
    articles.forEach(a => {
      const date = new Date(a.published);
      const year = date.getFullYear();
      const month = date.toLocaleDateString('en-US', { month: 'long' });
      if (!grouped[year]) grouped[year] = {};
      if (!grouped[year][month]) grouped[year][month] = [];
      grouped[year][month].push(a);
    });
    // Sort years descending
    const sortedYears = Object.keys(grouped).sort((a, b) => b - a);
    return sortedYears.map(year => {
      // Sort months within year (dummy sort assuming recent articles naturally order well, or write a month-index sort)
      const months = Object.keys(grouped[year]).sort((a, b) => {
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        return monthNames.indexOf(b) - monthNames.indexOf(a);
      });
      return { year, months: months.map(m => ({ month: m, articles: grouped[year][m] })) };
    });
  }, [articles]);

  const currentIssue = articles.find(a => a.featured) || articles[0];

  return (
    <div className="journal-page">
      <Helmet>
        <title>Engineering Journal | TheNameIsBhagavan</title>
        <meta name="description" content="Engineering deep dives, architecture patterns, and lessons learned from building production AI systems." />
        <link rel="canonical" href="https://thenameisbhagavan.in/journal" />
      </Helmet>

      {searchOpen && <JournalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} articles={articles} />}

      <div className="j-bounds">
        
        {/* ══════════════════════════════════════════════════════
            1. HERO
        ══════════════════════════════════════════════════════ */}
        <section className="j-hero">
          <m.div className="jh-meta" initial="hidden" animate="visible" variants={fadeUp}>
            ENGINEERING JOURNAL / 2026<br/>
            SYSTEMS · ARCHITECTURE · AI · PRODUCT ENGINEERING
          </m.div>

          <div className="jh-grid">
            <div className="jh-main">
              <m.h1 className="jh-headline" initial="hidden" animate="visible" variants={fadeUp}>
                I write about what happens between an idea and a system.
              </m.h1>
              <m.p className="jh-sub" initial="hidden" animate="visible" variants={fadeUp}>
                Architecture decisions, experiments, failures, reasoning patterns, and the engineering lessons behind the products I build.
              </m.p>
            </div>
            <m.div className="jh-index" initial="hidden" animate="visible" variants={fadeUp}>
              <div className="jhi-item">
                <span className="jhi-num">01</span>
                <span className="jhi-title">SYSTEMS</span>
              </div>
              <div className="jhi-item">
                <span className="jhi-num">02</span>
                <span className="jhi-title">ARCHITECTURE</span>
              </div>
              <div className="jhi-item">
                <span className="jhi-num">03</span>
                <span className="jhi-title">EXPERIMENTS</span>
              </div>
              <div className="jhi-item">
                <span className="jhi-num">04</span>
                <span className="jhi-title">PERSPECTIVE</span>
              </div>
            </m.div>
          </div>
        </section>

      </div>

      {/* ══════════════════════════════════════════════════════
          2. CONTROL BAR
      ══════════════════════════════════════════════════════ */}
      <div className="j-control-bar">
        <div className="j-bounds">
          <div className="jcb-inner">
            <div className="jcb-left">THE JOURNAL</div>
            <div className="jcb-center">
              {categories.map((cat, i) => (
                <button 
                  key={i} 
                  className={`jcb-cat ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  [{cat.toUpperCase()}]
                </button>
              ))}
            </div>
            <button className="jcb-right" onClick={() => setSearchOpen(true)}>
              SEARCH / ⌘K
            </button>
          </div>
        </div>
      </div>

      <div className="j-bounds">

        {/* ══════════════════════════════════════════════════════
            3. CURRENT ISSUE
        ══════════════════════════════════════════════════════ */}
        <section className="j-current">
          <m.div className="j-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            CURRENT ISSUE
          </m.div>

          <Link to={`/journal/${currentIssue.slug}`} className="jc-container">
            <m.div className="jc-info" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="jc-meta">
                <span className="jcm-item">ISSUE 0{articles.indexOf(currentIssue) + 1}</span>
                <span className="jcm-item">{currentIssue.category}</span>
                <span className="jcm-item">{new Date(currentIssue.published).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</span>
                <span className="jcm-item">{currentIssue.readTime} read</span>
              </div>
              <h2 className="jc-title">{currentIssue.title}</h2>
              <p className="jc-thesis">{currentIssue.excerpt}</p>
              <div className="jc-read">
                READ ARTICLE <ArrowRight size={16} className="jc-arrow" />
              </div>
            </m.div>

            <m.div className="jc-image-wrapper" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <img src={currentIssue.image || '/images/journal/featured/careeros-hero.jpg'} alt={currentIssue.title} className="jc-image" />
            </m.div>
          </Link>
        </section>

        {/* ══════════════════════════════════════════════════════
            4. THE NOTEBOOK (ARTICLE LIST)
        ══════════════════════════════════════════════════════ */}
        <section className="j-notebook">
          <m.div className="j-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            THE NOTEBOOK
          </m.div>

          <div className="jn-list">
            {filteredArticles.slice(0, 10).map((article, i) => (
              <m.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <Link to={`/journal/${article.slug}`} className="jn-row">
                  <span className="jn-num">{(filteredArticles.length - i).toString().padStart(2, '0')}</span>
                  <span className="jn-title">{article.title}</span>
                  <span className="jn-cat">{article.category}</span>
                  <span className="jn-time">{article.readTime} read</span>
                  <span className="jn-date">{new Date(article.published).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase()}</span>
                  <ArrowRight size={16} className="jn-arrow" />
                </Link>
              </m.div>
            ))}
          </div>
        </section>

      </div>

      {/* ══════════════════════════════════════════════════════
          5. SERIES INDEX
      ══════════════════════════════════════════════════════ */}
      <section className="j-series">
        <div className="j-bounds">
          <m.div className="j-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            SERIES / INDEX
          </m.div>

          <div className="js-list">
            {series.map(([seriesName, seriesArticles], i) => (
              <m.div key={i} className="js-row" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <span className="js-num">{(i + 1).toString().padStart(2, '0')}</span>
                <span className="js-title">{seriesName}</span>
                <span className="js-desc">{seriesArticles[0]?.category || 'Engineering'}</span>
                <span className="js-count">{(seriesArticles.length).toString().padStart(2, '0')} essays</span>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <div className="j-bounds">

        {/* ══════════════════════════════════════════════════════
            6. FROM THE BUILD
        ══════════════════════════════════════════════════════ */}
        <section className="j-build">
          <m.div className="j-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            FROM THE BUILD
          </m.div>
          <m.h2 className="jb-headline" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Some ideas are easier to understand when you can see the system they came from.
          </m.h2>

          <div className="jb-grid">
            {FROM_THE_BUILD.map((sys, i) => (
              <m.div key={i} className="jb-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                <div className="jbi-header">
                  <div className="jbi-num">{sys.num}</div>
                  <div className="jbi-name">{sys.name}</div>
                  <div className="jbi-desc">{sys.desc}</div>
                </div>
                <div className="jbi-trace">
                  {sys.trace.map((node, j) => (
                    <React.Fragment key={j}>
                      <div className="jbi-node">{node}</div>
                      {j < sys.trace.length - 1 && <ArrowDown size={14} className="jbi-arrow" />}
                    </React.Fragment>
                  ))}
                </div>
              </m.div>
            ))}
          </div>
        </section>

      </div>

      {/* ══════════════════════════════════════════════════════
          7. FIELD NOTES
      ══════════════════════════════════════════════════════ */}
      <section className="j-notes">
        <div className="j-bounds">
          <div className="jn-grid">
            <m.div className="jn-left" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="j-label">FIELD NOTES</div>
              <p className="jn-left-desc">
                Short observations from building software, studying systems, and learning what breaks.
              </p>
            </m.div>
            
            <div className="jn-right-list">
              {FIELD_NOTES.map((note, i) => (
                <m.div key={i} className="jnr-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                  <div className="jnr-num">0{i + 1}</div>
                  <div className="jnr-text">{note}</div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="j-bounds">

        {/* ══════════════════════════════════════════════════════
            8. ARCHITECTURE NOTES
        ══════════════════════════════════════════════════════ */}
        <section className="j-arch">
          <m.div className="j-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            ARCHITECTURE NOTES
          </m.div>

          <div className="ja-grid">
            <m.div className="ja-diagram" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="jad-node">INPUT</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">CONTEXT</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">REASONING</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">DECISION</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">OUTPUT</span>
            </m.div>

            <m.div className="ja-diagram" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="jad-node">QUESTION</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">EVIDENCE</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">MODEL</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">SYSTEM</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">PRODUCT</span>
            </m.div>

            <m.div className="ja-diagram" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <span className="jad-node">USER</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">INTERFACE</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">API</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">INTELLIGENCE</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">DATA</span>
              <ArrowDown className="jad-arrow" size={14} />
              <span className="jad-node">OUTCOME</span>
            </m.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            9. PUBLICATION ARCHIVE
        ══════════════════════════════════════════════════════ */}
        <section className="j-archive">
          <m.div className="j-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            ARCHIVE
          </m.div>

          {archiveByYearMonth.map((yearData, yIdx) => (
            <div key={yIdx} className="jarch-group">
              <m.div className="jarch-year" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                {yearData.year}
              </m.div>

              {yearData.months.map((monthData, mIdx) => (
                <div key={mIdx}>
                  <m.div className="jarch-month" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                    {monthData.month}
                  </m.div>
                  <div className="jarch-list">
                    {monthData.articles.map((article, aIdx) => (
                      <m.div key={aIdx} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
                        <Link to={`/journal/${article.slug}`} className="jn-row">
                          <span className="jn-num">{(monthData.articles.length - aIdx).toString().padStart(2, '0')}</span>
                          <span className="jn-title">{article.title}</span>
                          <span className="jn-cat">{article.category}</span>
                          <span className="jn-time">{article.readTime} read</span>
                          <span className="jn-date">{new Date(article.published).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }).toUpperCase()}</span>
                          <ArrowRight size={16} className="jn-arrow" />
                        </Link>
                      </m.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </section>

      </div>

      {/* ══════════════════════════════════════════════════════
          10. WHAT I WRITE ABOUT
      ══════════════════════════════════════════════════════ */}
      <section className="j-topics">
        <div className="j-bounds">
          <m.div className="j-label" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            WHAT I WRITE ABOUT
          </m.div>
          
          <div className="jt-grid">
            <m.div className="jt-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="jt-title">AI SYSTEMS</div>
              <div className="jt-desc">Building systems that reason, remember, retrieve, and act.</div>
            </m.div>
            <m.div className="jt-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="jt-title">ARCHITECTURE</div>
              <div className="jt-desc">The structures that make intelligent software reliable.</div>
            </m.div>
            <m.div className="jt-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="jt-title">PRODUCT ENGINEERING</div>
              <div className="jt-desc">Turning technical systems into usable products.</div>
            </m.div>
            <m.div className="jt-item" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
              <div className="jt-title">ENGINEERING PHILOSOPHY</div>
              <div className="jt-desc">The principles that influence what I build and why.</div>
            </m.div>
          </div>
        </div>
      </section>

      <div className="j-bounds">

        {/* ══════════════════════════════════════════════════════
            11. PUBLICATION STATUS & CLOSING
        ══════════════════════════════════════════════════════ */}
        <section className="j-closing">
          
          <m.div className="j-status-block" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <div className="jsb-label">FORMAT</div><div className="jsb-value">ENGINEERING JOURNAL</div>
            <div className="jsb-label">FOCUS</div><div className="jsb-value">AI SYSTEMS + PRODUCT ENGINEERING</div>
            <div className="jsb-label">UPDATED</div><div className="jsb-value">2026</div>
            <div className="jsb-label">STYLE</div><div className="jsb-value">LONG-FORM + FIELD NOTES</div>
            <div className="jsb-label">STATUS</div><div className="jsb-value">ACTIVELY BUILDING</div>
          </m.div>

          <m.h2 className="jc-thesis-text" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            Build it.<br/>
            Understand it.<br/>
            Write it down.
          </m.h2>

          <m.p className="jc-sub" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            The systems change.<br/>
            The engineering principles keep evolving.
          </m.p>

          <m.div className="jc-links" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}>
            <Link to="/work" className="jc-link">
              EXPLORE THE SYSTEMS <ArrowRight size={16} />
            </Link>
            <Link to="/vision" className="jc-link">
              EXPLORE THE VISION <ArrowRight size={16} />
            </Link>
          </m.div>

        </section>

        <BrandSignature />
      </div>
    </div>
  );
}

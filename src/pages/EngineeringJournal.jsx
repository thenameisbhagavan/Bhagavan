import React, { useState, useMemo, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { m, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ChevronRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { getAllArticles } from '../data/articles';
import BrandSignature from '../components/BrandSignature';
import JournalSearch from '../components/journal/JournalSearch';
import FeaturedCarousel from '../components/journal/FeaturedCarousel';
import '../styles/EngineeringJournal.css';

const ease = [0.16, 1, 0.3, 1];
const sectionEase = [0.22, 1, 0.36, 1];

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: sectionEase } }
};

export default function EngineeringJournal() {
  const articles = getAllArticles();
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');

  const featuredEcosystemData = useMemo(() => [
    {
      category: "Career Intelligence",
      headline: "Engineering CareerOS",
      subtitle: "AI Career Intelligence Platform.",
      link: "/journal/why-i-built-careeros",
      image: "/images/journal/featured/careeros-hero.jpg",
      objectPosition: "center"
    },
    {
      category: "Personal Intelligence",
      headline: "Engineering AuraOS",
      subtitle: "Persistent AI memory and reasoning systems.",
      link: "/journal/building-auraos",
      image: "/images/journal/featured/auraos-hero.jpg",
      objectPosition: "center"
    },
    {
      category: "Explainable AI",
      headline: "Engineering VERITAS",
      subtitle: "Explainable AI and evidence networks.",
      link: "/journal/why-veritas-exists",
      image: "/images/journal/featured/veritas-hero.jpg",
      objectPosition: "center"
    },
    {
      category: "Frontend Engineering",
      headline: "Engineering VoltDrive",
      subtitle: "Premium automotive frontend experience.",
      link: "/journal/designing-voltdrive",
      image: "/images/journal/featured/voltdrive-hero.jpg",
      objectPosition: "65% center"
    },
    {
      category: "Engineering Ecosystem",
      headline: "Engineering the Intelligence Ecosystem",
      subtitle: "The architecture behind the products.",
      link: "/work",
      image: "/images/journal/featured/ecosystem-hero.jpg",
      objectPosition: "center"
    }
  ], []);

  const categories = useMemo(() => {
    const cats = new Set(articles.map(a => a.category));
    return ['All', ...Array.from(cats)];
  }, [articles]);

  const series = useMemo(() => {
    const seriesMap = new Map();
    articles.forEach(a => {
      if (a.series) {
        if (!seriesMap.has(a.series)) seriesMap.set(a.series, []);
        seriesMap.get(a.series).push(a);
      }
    });
    
    // Enforce equal visual importance and correct ordering as requested
    const expectedOrder = [
      "CareerOS", 
      "AuraOS", 
      "VERITAS", 
      "VoltDrive",
      "Engineering Philosophy",
      "Engineering Journey",
      "Python Engineering",
      "Building in Public",
      "Engineering Leadership",
      "Career & Learning",
      "Research & Opinions"
    ];
    
    return Array.from(seriesMap.entries()).sort((a, b) => {
      let indexA = expectedOrder.indexOf(a[0]);
      let indexB = expectedOrder.indexOf(b[0]);
      if (indexA === -1) indexA = 999;
      if (indexB === -1) indexB = 999;
      return indexA - indexB;
    });
  }, [articles]);

  const filteredArticles = useMemo(() => {
    let res = articles.filter(a => !a.featured);
    if (activeCategory !== 'All') {
      res = res.filter(a => a.category === activeCategory);
    }
    return res.sort((a, b) => new Date(b.published) - new Date(a.published));
  }, [articles, activeCategory]);

  const archiveByMonth = useMemo(() => {
    const grouped = {};
    articles.forEach(a => {
      const date = new Date(a.published);
      const monthYear = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
      if (!grouped[monthYear]) grouped[monthYear] = [];
      grouped[monthYear].push(a);
    });
    return Object.entries(grouped).sort((a, b) => new Date(b[0]) - new Date(a[0]));
  }, [articles]);

  // Keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Allow / or CMD+K / CTRL+K
      if ((e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key === 'k')) && !['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="journal-page">
      <Helmet>
        <title>Engineering Journal | TheNameIsBhagavan</title>
        <meta name="description" content="Engineering deep dives, architecture patterns, and lessons learned from building production AI systems." />
        <link rel="canonical" href="https://thenameisbhagavan.in/journal" />
      </Helmet>

      {/* COMMAND PALETTE SEARCH */}
      {searchOpen && <JournalSearch isOpen={searchOpen} onClose={() => setSearchOpen(false)} articles={articles} />}

      {/* COMMAND PALETTE TRIGGER */}
      <div className="journal-search-trigger-container">
        <button className="journal-search-trigger" onClick={() => setSearchOpen(true)} aria-label="Search Journal (Cmd+K)">
          <span className="trigger-left"><Search size={16} /> Search Journal...</span>
          <span className="trigger-right"><kbd>⌘K</kbd></span>
        </button>
      </div>

      {/* HERO SECTION */}
      <section className="journal-hero">
        <m.h1 
          className="journal-hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          Engineering<br/>Journal.
        </m.h1>
        <m.p 
          className="journal-hero-subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
        >
          Architecture, algorithms, and the pursuit of intelligent systems.
        </m.p>
        
        <m.div 
          className="journal-hero-stats"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
        >
          <div className="stat-item">
            <span className="stat-label">Latest Update</span>
            <span className="stat-value">August 2026</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">{articles.length} Articles</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-value">{series.length} Series</span>
          </div>
        </m.div>
      </section>

      {/* FEATURED ARTICLE (CINEMATIC SHOWCASE) */}
      <m.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <FeaturedCarousel items={featuredEcosystemData} />
      </m.div>

      {/* ENGINEERING SERIES */}
      <m.section 
        className="journal-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="journal-section-header">
          <h3 className="journal-section-title">Engineering Series</h3>
        </div>
        <div className="journal-series-grid">
          {series.map(([seriesName, seriesArticles], idx) => {
            // Calculate a fake progress for the visual (in real life this would be user progress)
            // Just for the Apple Books premium feel, we'll show completion of 0 or a fixed value for now,
            // or simply just a static "0 / N" for a new visitor.
            const total = seriesArticles.length;
            const completed = 0; // Assume 0 for static site visitor
            const fillCount = Math.round((completed / total) * 10) || 0;
            const emptyCount = 10 - fillCount;
            const progressBar = '█'.repeat(fillCount) + '░'.repeat(emptyCount);

            return (
              <m.div 
                key={seriesName} 
                className="journal-series-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease }}
              >
                <div className="series-header">
                  <BookOpen size={24} className="series-icon" />
                  <h4 className="series-title">{seriesName}</h4>
                </div>
                <div className="series-progress-container">
                  <span className="series-progress-bar">{progressBar}</span>
                  <span className="series-count">{completed} / {total}</span>
                </div>
                <div className="series-list">
                  {seriesArticles.slice(0, 3).map(a => (
                    <Link key={a.slug} to={`/journal/${a.slug}`} className="series-item">
                      {a.title}
                    </Link>
                  ))}
                </div>
              </m.div>
            );
          })}
        </div>
      </m.section>

      {/* LATEST RESEARCH (GRID) */}
      <m.section 
        className="journal-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="journal-section-header">
          <h3 className="journal-section-title">Collections</h3>
          
          <div className="journal-filters">
            {categories.map(cat => (
              <button 
                key={cat} 
                className={`journal-filter-chip ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="journal-grid">
          {filteredArticles.map((article, idx) => (
            <m.div 
              key={article.slug}
              className="journal-grid-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.1, duration: 0.6, ease }}
              onClick={() => navigate(`/journal/${article.slug}`)}
            >
              <div className="grid-card-visual">
                <img src={article.coverImage} alt={article.title} loading="lazy" />
              </div>
              <div className="grid-card-content">
                <div className="grid-card-meta">
                  <span className="grid-card-cat">{article.category}</span>
                  <span className="grid-card-time"><Clock size={12}/> {article.readingTime}</span>
                </div>
                <h4 className="grid-card-title">{article.title}</h4>
                <p className="grid-card-desc">{article.description}</p>
              </div>
            </m.div>
          ))}
        </div>
      </m.section>

      {/* TIMELINE ARCHIVE */}
      <m.section 
        className="journal-section journal-archive"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="journal-section-header">
          <h3 className="journal-section-title">Timeline</h3>
        </div>
        <div className="archive-timeline">
          {archiveByMonth.map(([monthYear, monthArticles]) => (
            <details key={monthYear} className="archive-month-group" open={monthYear === archiveByMonth[0][0]}>
              <summary className="archive-month-header">
                <span className="archive-month-title">{monthYear}</span>
                <span className="archive-month-count">{monthArticles.length} Articles</span>
              </summary>
              <div className="archive-month-content">
                {monthArticles.map((article) => (
                  <Link key={article.slug} to={`/journal/${article.slug}`} className="archive-row">
                    <div className="archive-date">
                      {new Date(article.published).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className="archive-title">{article.title}</div>
                    <div className="archive-category">{article.category}</div>
                  </Link>
                ))}
              </div>
            </details>
          ))}
        </div>
      </m.section>

      {/* JOURNAL FOOTER */}
      <footer className="journal-footer">
        <div className="journal-footer-content">
          <div className="journal-footer-stats">
            <span>{articles.length} Articles</span>
            <span>{series.length} Series</span>
            <span>Updated Weekly</span>
          </div>
          <div className="journal-footer-links">
            <Link to="/journal/about">About Journal</Link>
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">RSS</a>
            <a href="https://github.com/TheNameIsBhagavan" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/thenameisbhagavan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>

      <BrandSignature />
    </div>
  );
}

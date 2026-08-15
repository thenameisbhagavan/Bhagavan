import React, { useEffect, useRef, useState, useMemo } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { Search, FileText, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../../styles/JournalSearch.css';

export default function JournalSearch({ isOpen, onClose, articles }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Lock body scroll when palette is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const filtered = useMemo(() => {
    if (!query) return articles.slice(0, 5); // Show top 5 by default
    const q = query.toLowerCase();
    return articles.filter(a => {
      const titleMatch = (a.title || '').toLowerCase().includes(q);
      const excerptMatch = (a.excerpt || a.description || '').toLowerCase().includes(q);
      const seriesMatch = (a.series || '').toLowerCase().includes(q);
      const typeMatch = (a.articleType || '').toLowerCase().includes(q);
      const tagsMatch = a.tags && a.tags.some(t => t.toLowerCase().includes(q));
      const bodyMatch = (a.searchableText || '').toLowerCase().includes(q);

      return titleMatch || excerptMatch || seriesMatch || typeMatch || tagsMatch || bodyMatch;
    }).slice(0, 8); // Max 8 results
  }, [query, articles]);

  const handleSelect = (slug) => {
    onClose();
    navigate(`/journal/${slug}`);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <m.div 
            className="command-palette-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            onClick={onClose}
          />
          <div className="command-palette-wrapper" onClick={onClose}>
            <m.div 
              className="command-palette"
              onClick={e => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="command-input-row">
                <Search size={20} className="command-icon" />
                <input
                  ref={inputRef}
                  className="command-input"
                  placeholder="Search articles, topics, and series..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && filtered.length > 0) {
                      handleSelect(filtered[0].slug);
                    }
                  }}
                />
                <button className="command-esc" onClick={onClose}>ESC</button>
              </div>

              <div className="command-results">
                {filtered.length > 0 ? (
                  <>
                    <div className="command-section-title">
                      {query ? 'Results' : 'Suggested Articles'}
                    </div>
                    <div className="command-list">
                      {filtered.map((article, i) => (
                        <button 
                          key={article.slug}
                          className="command-item"
                          onClick={() => handleSelect(article.slug)}
                        >
                          <FileText size={18} className="command-item-icon" />
                          <div className="command-item-content">
                            <span className="command-item-title">{article.title}</span>
                            <span className="command-item-cat">{article.category}</span>
                          </div>
                          <ArrowRight size={16} className="command-item-arrow" />
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="command-empty">
                    <p>No results found for "{query}"</p>
                  </div>
                )}
              </div>
              
              <div className="command-footer">
                <div className="command-footer-left">
                  <span>Search across {articles.length} engineering articles</span>
                </div>
              </div>
            </m.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

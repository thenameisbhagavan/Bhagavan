import React from 'react';
import { m } from 'framer-motion';
import { AlertCircle, ArrowRight, Zap, Database, GitMerge, FileText } from 'lucide-react';

const appleEase = [0.22, 1, 0.36, 1];

// ─── 1. Technical Callout ──────────────────────────────────────────────────
export function TechnicalCallout({ type = 'NOTE', title, children }) {
  const getIcon = () => {
    switch (type.toUpperCase()) {
      case 'DECISION': return <GitMerge size={16} className="tco-icon decision" />;
      case 'TRADE-OFF': return <ArrowRight size={16} className="tco-icon tradeoff" />;
      case 'WARNING': return <AlertCircle size={16} className="tco-icon warning" />;
      case 'IMPLEMENTED': return <Database size={16} className="tco-icon implemented" />;
      case 'EXPERIMENTAL': return <Zap size={16} className="tco-icon experimental" />;
      default: return <FileText size={16} className="tco-icon note" />;
    }
  };

  return (
    <aside className={`technical-callout type-${type.toLowerCase()}`}>
      <div className="tco-header">
        {getIcon()}
        <span className="tco-label">{type.toUpperCase()}</span>
        {title && <span className="tco-title">— {title}</span>}
      </div>
      <div className="tco-body">
        {children}
      </div>
    </aside>
  );
}

// ─── 2. System Status ────────────────────────────────────────────────────────
export function SystemStatus({ status = 'Implemented', version }) {
  const normalized = status.toUpperCase();
  return (
    <div className={`system-status-badge status-${normalized.toLowerCase()}`}>
      <span className="ssb-dot" />
      <span className="ssb-label">{normalized}</span>
      {version && <span className="ssb-version">{version}</span>}
    </div>
  );
}

// ─── 3. Metric Card ──────────────────────────────────────────────────────────
export function MetricCard({ label, value, suffix, trend }) {
  return (
    <div className="metric-card">
      <div className="mc-label">{label}</div>
      <div className="mc-value-row">
        <span className="mc-value">{value}</span>
        {suffix && <span className="mc-suffix">{suffix}</span>}
      </div>
      {trend && <div className="mc-trend">{trend}</div>}
    </div>
  );
}

// ─── 4. Metric Grid ──────────────────────────────────────────────────────────
export function MetricGrid({ children }) {
  return (
    <div className="metric-grid">
      {children}
    </div>
  );
}

// ─── 5. Code Presentation Block ──────────────────────────────────────────────
export function CodeBlock({ language, code, title }) {
  return (
    <div className="editorial-code-block">
      {title && (
        <div className="ecb-header">
          <span className="ecb-title">{title}</span>
          <span className="ecb-lang">{language}</span>
        </div>
      )}
      <div className="ecb-body">
        <pre><code className={`language-${language}`}>{code}</code></pre>
      </div>
    </div>
  );
}

// ─── 6. Comparison Table ─────────────────────────────────────────────────────
export function ComparisonTable({ headers = [], rows = [] }) {
  return (
    <div className="comparison-table-wrapper">
      <table className="comparison-table">
        <thead>
          <tr>
            {headers.map((h, i) => <th key={i}>{h}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => <td key={j}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── 7. Related Articles Block ───────────────────────────────────────────────
export function RelatedArticles({ articles = [] }) {
  if (!articles || articles.length === 0) return null;
  return (
    <div className="related-articles-graph">
      <div className="rag-label">RELATED SYSTEMS</div>
      <div className="rag-grid">
        {articles.map((art, i) => (
          <a key={i} href={`/journal/${art.slug}`} className="rag-item">
            <div className="ragi-series">{art.series}</div>
            <div className="ragi-title">{art.title}</div>
          </a>
        ))}
      </div>
    </div>
  );
}

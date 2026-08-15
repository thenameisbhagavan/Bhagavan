import React from 'react';
import { m } from 'framer-motion';

const appleEase = [0.22, 1, 0.36, 1];

// Helper to safely parse data prop which might be a JSON string
const parseData = (data) => {
  if (typeof data === 'string') {
    try {
      return JSON.parse(data.replace(/&quot;/g, '"'));
    } catch (e) {
      console.error('Failed to parse diagram data:', e);
      return null;
    }
  }
  return data;
};

// ─── 1. Architecture Flow Diagram ──────────────────────────────────────────
export function ArchitectureDiagram({ data, direction = 'vertical', title, accessibleText }) {
  const parsed = parseData(data);
  if (!parsed || !parsed.nodes) return <DiagramFallback title={title || parsed?.title} text={accessibleText || parsed?.accessibleText} />;

  const nodes = parsed.nodes;
  const dir = parsed.direction || direction;
  const diagramTitle = title || parsed.title;
  const a11yText = accessibleText || parsed.accessibleText || `Architecture diagram showing ${nodes.length} steps.`;

  return (
    <figure className={`architecture-diagram dir-${dir}`} role="figure" aria-label={diagramTitle || 'Architecture Diagram'}>
      {diagramTitle && <figcaption className="diagram-title">{diagramTitle}</figcaption>}
      <div className="sr-only">{a11yText}</div>
      <div className="ad-container" aria-hidden="true">
        {nodes.map((node, i) => (
          <React.Fragment key={i}>
            <m.div 
              className={`ad-node type-${node.type || 'default'}`}
              initial={{ opacity: 0, y: dir === 'vertical' ? 10 : 0, x: dir === 'horizontal' ? 10 : 0 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: appleEase }}
            >
              <div className="adn-label">{node.label}</div>
              {node.subtext && <div className="adn-subtext">{node.subtext}</div>}
            </m.div>
            {i < nodes.length - 1 && (
              <m.div 
                className="ad-connector"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.1 }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  {dir === 'vertical' ? (
                    <path d="M12 4v16m0 0l-4-4m4 4l4-4" strokeLinecap="round" strokeLinejoin="round" />
                  ) : (
                    <path d="M4 12h16m0 0l-4-4m4 4l-4 4" strokeLinecap="round" strokeLinejoin="round" />
                  )}
                </svg>
              </m.div>
            )}
          </React.Fragment>
        ))}
      </div>
    </figure>
  );
}

// ─── 2. Matrix/Quadrant Diagram ──────────────────────────────────────────────
export function DecisionMatrix({ data, title, accessibleText }) {
  const parsed = parseData(data);
  if (!parsed || !parsed.quadrants || parsed.quadrants.length !== 4) {
    return <DiagramFallback title={title || parsed?.title} text={accessibleText || parsed?.accessibleText} />;
  }

  const quads = parsed.quadrants;
  const diagramTitle = title || parsed.title;
  const a11yText = accessibleText || parsed.accessibleText || 'Decision matrix with four quadrants.';

  return (
    <figure className="decision-matrix" role="figure" aria-label={diagramTitle || 'Decision Matrix'}>
      {diagramTitle && <figcaption className="diagram-title">{diagramTitle}</figcaption>}
      <div className="sr-only">{a11yText}</div>
      <div className="dm-grid" aria-hidden="true">
        {quads.map((q, i) => (
          <div key={i} className="dm-quadrant">
            <div className="dmq-title">{q.title}</div>
            <div className="dmq-desc">{q.desc}</div>
          </div>
        ))}
      </div>
    </figure>
  );
}

// ─── 3. Timeline / Evolution ─────────────────────────────────────────────────
export function Timeline({ data, title, accessibleText }) {
  const parsed = parseData(data);
  if (!parsed || !parsed.events) return <DiagramFallback title={title || parsed?.title} text={accessibleText || parsed?.accessibleText} />;

  const events = parsed.events;
  const diagramTitle = title || parsed.title;
  const a11yText = accessibleText || parsed.accessibleText || `Timeline showing ${events.length} events.`;

  return (
    <figure className="editorial-timeline" role="figure" aria-label={diagramTitle || 'Timeline'}>
      {diagramTitle && <figcaption className="diagram-title">{diagramTitle}</figcaption>}
      <div className="sr-only">{a11yText}</div>
      <div className="etl-container" aria-hidden="true">
        {events.map((ev, i) => (
          <div key={i} className="etl-event">
            <div className="etl-marker" />
            <div className="etl-content">
              <div className="etl-date">{ev.date}</div>
              <div className="etl-title">{ev.title}</div>
              <div className="etl-desc">{ev.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </figure>
  );
}

// ─── 4. Diagram Fallback ─────────────────────────────────────────────────────
export function DiagramFallback({ title, text }) {
  return (
    <aside className="diagram-fallback" role="note">
      <div className="df-title">{title || 'Technical Diagram'}</div>
      <div className="df-text">{text || 'Visual representation omitted. See surrounding text for architectural details.'}</div>
    </aside>
  );
}

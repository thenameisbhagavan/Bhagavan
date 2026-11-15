import React from 'react';

/**
 * KineticTypography — Apple Editorial Typographic Motion
 * Provides word-level and line-level choreographed reveals with full screen-reader accessibility.
 * Preserves clean semantics and guarantees 100% visible fallback on initial load.
 */
export default function KineticTypography({
  children,
  as: Component = 'h2',
  className = '',
  style = {},
  delay = 0,
  stagger = 0.05,
  duration = 0.8,
  type = 'lines', // 'words' | 'lines'
  ...props
}) {
  const text = typeof children === 'string' ? children : '';

  if (!text) {
    return (
      <Component className={className} style={{ opacity: 1, ...style }} {...props}>
        {children}
      </Component>
    );
  }

  const accessibilityProps = {
    'aria-label': text,
    role: 'text',
  };

  if (type === 'lines') {
    const lines = text.split('\n');
    return (
      <Component className={className} style={{ opacity: 1, ...style }} {...accessibilityProps} {...props}>
        {lines.map((line, lineIdx) => (
          <span 
            key={lineIdx} 
            style={{ display: 'block', overflow: 'hidden' }}
            aria-hidden="true"
          >
            <span
              style={{
                display: 'block',
                opacity: 1,
                transform: 'translateY(0)',
                animation: `es-hero-line-reveal ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay + lineIdx * stagger}s backwards`
              }}
            >
              {line}
            </span>
          </span>
        ))}
      </Component>
    );
  }

  // Word-level split
  const words = text.split(' ');

  return (
    <Component className={className} style={{ opacity: 1, ...style }} {...accessibilityProps} {...props}>
      <span aria-hidden="true" style={{ display: 'inline' }}>
        {words.map((word, wordIdx) => (
          <span 
            key={wordIdx} 
            style={{ 
              display: 'inline-block', 
              overflow: 'hidden', 
              verticalAlign: 'top',
              marginRight: wordIdx < words.length - 1 ? '0.28em' : '0' 
            }}
          >
            <span
              style={{
                display: 'inline-block',
                opacity: 1,
                transform: 'translateY(0)',
                animation: `es-hero-line-reveal ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay + wordIdx * stagger}s backwards`
              }}
            >
              {word}
            </span>
          </span>
        ))}
      </span>
    </Component>
  );
}

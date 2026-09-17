import React from 'react';
import MaskReveal from './MaskReveal';

export default function TextReveal({
  text,
  className = '',
  style = {},
  duration = 1.1,
  stagger = 0.08,
  as: Component = 'h2',
  ...props
}) {
  if (typeof text !== 'string') {
    return (
      <Component className={className} style={style} {...props}>
        {text}
      </Component>
    );
  }

  const lines = text.split('\n');

  return (
    <Component className={className} style={style} {...props}>
      {lines.map((line, i) => (
        <MaskReveal key={i} duration={duration} delay={i * stagger}>
          <span>{line}</span>
        </MaskReveal>
      ))}
    </Component>
  );
}

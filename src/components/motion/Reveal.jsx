import React from 'react';
import { useReveal } from '../../motion/useScroll';

export default function Reveal({
  children,
  className = '',
  style = {},
  y = 32,
  opacity = 0,
  scale = 0.98,
  duration = 1.0,
  stagger = 0,
  start = 'top 85%',
  once = true,
  ease = 'power3.out',
  as: Component = 'div',
  ...props
}) {
  const ref = useReveal({ y, opacity, scale, duration, stagger, start, once, ease });

  return (
    <Component ref={ref} className={className} style={{ willChange: 'transform, opacity', ...style }} {...props}>
      {children}
    </Component>
  );
}

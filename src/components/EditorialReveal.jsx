import React from 'react';
import { useInViewMotion } from '../hooks/useInViewMotion';
import '../styles/motion.css';

/**
 * EditorialReveal
 * A lightweight CSS-driven wrapper for typography and layout elements.
 * Replaces expensive `framer-motion` whileInView listeners.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {number} props.stagger - Index for stagger delay (1-5)
 * @param {string} props.className - Additional classes
 * @param {boolean} props.as - Element type (default 'div')
 */
export default function EditorialReveal({ 
  children, 
  stagger = 0, 
  className = '', 
  as: Component = 'div',
  ...props 
}) {
  // useClass=true bypasses React re-renders by mutating the DOM classList directly.
  const [ref] = useInViewMotion({ once: true, useClass: true, threshold: 0.1 });
  
  const staggerClass = stagger > 0 ? `motion-reveal-stagger-${Math.min(stagger, 5)}` : '';
  
  return (
    <Component 
      ref={ref} 
      className={`motion-reveal ${staggerClass} ${className}`} 
      {...props}
    >
      {children}
    </Component>
  );
}

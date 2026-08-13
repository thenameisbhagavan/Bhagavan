import React from 'react';
import { m } from 'framer-motion';
import { useTransitionRegistry, appleEase } from './RouteTransition';

/**
 * EditorialFade
 * Fades in and optionally moves up slightly, respecting the transition registry.
 */
export function EditorialFade({ children, delay = 0, yOffset = 16, duration = 0.9, ...props }) {
  const { isFirstVisit } = useTransitionRegistry();

  if (!isFirstVisit) {
    return <div {...props}>{children}</div>;
  }

  return (
    <m.div
      initial={{ opacity: 0, y: yOffset }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration, delay, ease: appleEase }}
      {...props}
    >
      {children}
    </m.div>
  );
}

/**
 * LineDraw
 * Animates scaleX or scaleY from 0 to 1.
 */
export function LineDraw({ direction = 'horizontal', delay = 0, duration = 0.8, className = '', ...props }) {
  const { isFirstVisit } = useTransitionRegistry();
  const isHorz = direction === 'horizontal';

  const baseStyle = {
    backgroundColor: 'rgba(0,0,0,0.15)',
    transformOrigin: isHorz ? 'left center' : 'top center',
    width: isHorz ? '100%' : '1px',
    height: isHorz ? '1px' : '100%',
  };

  if (!isFirstVisit) {
    return <div className={className} style={baseStyle} {...props} />;
  }

  return (
    <m.div
      className={className}
      style={baseStyle}
      initial={isHorz ? { scaleX: 0 } : { scaleY: 0 }}
      animate={isHorz ? { scaleX: 1 } : { scaleY: 1 }}
      transition={{ duration, delay, ease: appleEase }}
      {...props}
    />
  );
}

/**
 * SequenceReveal
 * Staggers children elements.
 */
export function SequenceReveal({ children, stagger = 0.08, delay = 0, yOffset = 10, ...props }) {
  const { isFirstVisit } = useTransitionRegistry();

  if (!isFirstVisit) {
    return <div {...props}>{children}</div>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: appleEase } }
  };

  // Clone children to inject childVariants
  const animatedChildren = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    return (
      <m.div variants={childVariants} style={{ display: 'inline-block' }}>
        {child}
      </m.div>
    );
  });

  return (
    <m.div variants={containerVariants} initial="hidden" animate="visible" {...props}>
      {animatedChildren}
    </m.div>
  );
}

/**
 * MaskReveal
 * Reveals content via clip-path.
 */
export function MaskReveal({ children, delay = 0, duration = 1.2, startClip = 'inset(0 49% 0 49%)', endClip = 'inset(0 0% 0 0%)', ...props }) {
  const { isFirstVisit } = useTransitionRegistry();

  if (!isFirstVisit) {
    return <div {...props}>{children}</div>;
  }

  return (
    <m.div
      initial={{ clipPath: startClip }}
      animate={{ clipPath: endClip }}
      transition={{ duration, delay, ease: appleEase }}
      {...props}
    >
      {children}
    </m.div>
  );
}

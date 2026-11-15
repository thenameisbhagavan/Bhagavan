import React from 'react';
import { useSpringTilt } from '../../motion/useScroll';

/**
 * SpringTilt — Apple & Framer-style 3D Spring Tilt Micro-Interaction
 * Gently tilts elements based on pointer movement and settles with spring physics on leave.
 */
export default function SpringTilt({
  children,
  className = '',
  style = {},
  maxTilt = 3.5,
  scale = 1.012,
  as: Component = 'div',
  ...props
}) {
  const ref = useSpringTilt({ maxTilt, scale });

  return (
    <Component
      ref={ref}
      className={`spring-tilt-container ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        ...style
      }}
      {...props}
    >
      {children}
    </Component>
  );
}

import React from 'react';
import { useParallax } from '../../motion/useScroll';

export default function Parallax({
  children,
  className = '',
  style = {},
  speed = 0.2,
  as: Component = 'div',
  ...props
}) {
  const ref = useParallax(speed);

  return (
    <Component ref={ref} className={className} style={{ willChange: 'transform', ...style }} {...props}>
      {children}
    </Component>
  );
}

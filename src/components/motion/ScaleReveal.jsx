import React from 'react';
import { useScaleReveal } from '../../motion/useScroll';

export default function ScaleReveal({
  children,
  className = '',
  style = {},
  as: Component = 'div',
  ...props
}) {
  const ref = useScaleReveal();

  return (
    <Component ref={ref} className={className} style={{ willChange: 'transform, opacity', ...style }} {...props}>
      {children}
    </Component>
  );
}

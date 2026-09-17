import React from 'react';
import { useMagneticInteraction } from '../../motion/useScroll';

export default function MagneticLink({
  children,
  className = '',
  style = {},
  strength = 0.35,
  as: Component = 'div',
  ...props
}) {
  const ref = useMagneticInteraction(strength);

  return (
    <Component ref={ref} className={`magnetic-wrapper ${className}`} style={{ display: 'inline-block', position: 'relative', ...style }} {...props}>
      {children}
    </Component>
  );
}

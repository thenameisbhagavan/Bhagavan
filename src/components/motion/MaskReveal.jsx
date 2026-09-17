import React from 'react';
import { useTextReveal } from '../../motion/useScroll';

export default function MaskReveal({
  children,
  className = '',
  style = {},
  duration = 1.2,
  delay = 0,
  as: Component = 'div',
  ...props
}) {
  const innerRef = useTextReveal({ duration, delay });

  return (
    <div style={{ overflow: 'hidden', display: 'block', position: 'relative', ...style }} className={className}>
      <Component ref={innerRef} style={{ willChange: 'transform, opacity' }} {...props}>
        {children}
      </Component>
    </div>
  );
}

import React from 'react';
import { usePinSection } from '../../motion/useScroll';

export default function PinSection({
  children,
  className = '',
  style = {},
  pinSpacing = true,
  end = '+=100%',
  ...props
}) {
  const { containerRef, pinRef } = usePinSection({ pinSpacing, end });

  return (
    <div ref={containerRef} className={`pin-section-container ${className}`} style={{ position: 'relative', ...style }} {...props}>
      <div ref={pinRef} className="pin-section-content">
        {children}
      </div>
    </div>
  );
}

import React, { useRef, useState } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';

/**
 * AppleMagneticButton
 * An ultra-premium Apple Keynote-quality magnetic hover & specular sheen wrapper.
 * Provides buttery-smooth GPU-accelerated spring physics and tactile active press feedback.
 */
export default function AppleMagneticButton({
  children,
  className = '',
  style = {},
  maxDistance = 8,
  onClick,
  ...props
}) {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for magnetic pull
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Apple keynote spring physics
  const springConfig = { stiffness: 380, damping: 26, mass: 0.45 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Calculate magnetic offset clamped to maxDistance
    const deltaX = (e.clientX - centerX) * 0.25;
    const deltaY = (e.clientY - centerY) * 0.25;
    x.set(Math.max(-maxDistance, Math.min(maxDistance, deltaX)));
    y.set(Math.max(-maxDistance, Math.min(maxDistance, deltaY)));

    // Update CSS variables for radial specular sheen
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;
    ref.current.style.setProperty('--mouse-x', `${mouseX}%`);
    ref.current.style.setProperty('--mouse-y', `${mouseY}%`);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <m.div
      ref={ref}
      className={`apple-pressable ${className}`}
      style={{
        ...style,
        x: smoothX,
        y: smoothY,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      {...props}
    >
      {children}
    </m.div>
  );
}

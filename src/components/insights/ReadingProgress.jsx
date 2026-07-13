import React from 'react';
import { m, useScroll, useSpring } from 'framer-motion';

export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="reading-progress-bar">
      <m.div 
        className="reading-progress-indicator" 
        style={{ scaleX }} 
      />
    </div>
  );
}

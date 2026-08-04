import React, { useState, useEffect } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import '../styles/ScrollToTopElevator.css';

export default function ScrollToTopElevator() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      // Show elevator button as soon as user starts scrolling down (> 60px)
      if (currentScrollY > 60) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Calculate scroll progress (0 to 100)
      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollY / scrollHeight) * 100));
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // SVG ring properties
  const radius = 23;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <m.button
          className="apple-scroll-elevator apple-pressable"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 26
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label="Scroll to top of page"
          title="Scroll to Top"
        >
          <div className="scroll-elevator-wrapper">
            {/* Ambient Glow behind elevator */}
            <div className="scroll-elevator-glow" />

            {/* Circular Scroll Progress Ring (2026 Apple VisionOS style) */}
            <svg className="scroll-progress-ring" viewBox="0 0 52 52">
              {/* Background Track */}
              <circle
                cx="26"
                cy="26"
                r={radius}
                fill="none"
                stroke="rgba(0, 0, 0, 0.1)"
                strokeWidth="2"
              />
              {/* Animated Progress Stroke */}
              <circle
                cx="26"
                cy="26"
                r={radius}
                fill="none"
                stroke="#0071E3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
              />
            </svg>

            {/* High-Contrast Apple VisionOS Capsule Button */}
            <div className="scroll-elevator-btn">
              <span className="scroll-elevator-icon">
                <ArrowUp size={20} strokeWidth={2.5} />
              </span>
            </div>
          </div>
        </m.button>
      )}
    </AnimatePresence>
  );
}

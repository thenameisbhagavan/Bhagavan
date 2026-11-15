import React, { useState, useEffect, useRef } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import '../styles/ScrollToTopElevator.css';

export default function ScrollToTopElevator() {
  const [isVisible, setIsVisible] = useState(false);
  const circleRef = useRef(null);
  const rafRef = useRef(null);
  const isVisibleRef = useRef(false);

  const radius = 23;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const updateProgress = () => {
      const currentScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      const shouldBeVisible = currentScrollY > 80;
      if (shouldBeVisible !== isVisibleRef.current) {
        isVisibleRef.current = shouldBeVisible;
        setIsVisible(shouldBeVisible);
      }

      if (circleRef.current && scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollY / scrollHeight) * 100));
        const offset = circumference - (progress / 100) * circumference;
        circleRef.current.style.strokeDashoffset = offset;
      }
    };

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        updateProgress();
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [circumference]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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

            {/* Circular Scroll Progress Ring (2024 Apple VisionOS style) */}
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
                ref={circleRef}
                cx="26"
                cy="26"
                r={radius}
                fill="none"
                stroke="#0071E3"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
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

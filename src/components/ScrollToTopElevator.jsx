import React, { useState, useEffect, useRef } from "react";
import { m as Motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import "../styles/ScrollToTopElevator.css";

export default function ScrollToTopElevator() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOverDark, setIsOverDark] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const circleRef = useRef(null);
  const rafRef = useRef(null);
  const isVisibleRef = useRef(false);
  const isDarkRef = useRef(false);
  const lastPctRef = useRef(0);

  const radius = 20.5;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const updateProgress = () => {
      const currentScrollY =
        window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

      const shouldBeVisible = currentScrollY > 120;
      if (shouldBeVisible !== isVisibleRef.current) {
        isVisibleRef.current = shouldBeVisible;
        setIsVisible(shouldBeVisible);
      }

      if (scrollHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScrollY / scrollHeight) * 100));
        if (circleRef.current) {
          const offset = circumference - (progress / 100) * circumference;
          circleRef.current.style.strokeDashoffset = offset;
        }
        const rounded = Math.round(progress);
        if (rounded !== lastPctRef.current) {
          lastPctRef.current = rounded;
          setScrollPct(rounded);
        }
      }

      // Detect whether bottom-right elevator sits over a dark section/footer
      const probeY = window.innerHeight - 44;
      const themedNodes = document.querySelectorAll("[data-nav-theme]");
      let darkUnderneath = false;
      for (let i = 0; i < themedNodes.length; i++) {
        const rect = themedNodes[i].getBoundingClientRect();
        if (rect.top <= probeY && rect.bottom >= probeY) {
          darkUnderneath = themedNodes[i].getAttribute("data-nav-theme") === "dark";
        }
      }
      if (darkUnderneath !== isDarkRef.current) {
        isDarkRef.current = darkUnderneath;
        setIsOverDark(darkUnderneath);
      }
    };

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        updateProgress();
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [circumference]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.button
          type="button"
          className={`apple-scroll-elevator ${isOverDark ? "theme-dark-glass" : "theme-pearl-glass"}`}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.72, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.72, y: 16 }}
          transition={{
            type: "spring",
            stiffness: 420,
            damping: 28,
          }}
          whileTap={{ scale: 0.92 }}
          aria-label="Scroll back to top"
          title={`Back to top (${scrollPct}%)`}
        >
          <span className="scroll-elevator-label" aria-hidden="true">
            Top &middot; {scrollPct}%
          </span>

          <span className="scroll-elevator-medallion">
            <svg className="scroll-progress-ring" viewBox="0 0 44 44" aria-hidden="true">
              <circle
                className="scroll-ring-track"
                cx="22"
                cy="22"
                r={radius}
                fill="none"
                strokeWidth="1.5"
              />
              <circle
                ref={circleRef}
                className="scroll-ring-progress"
                cx="22"
                cy="22"
                r={radius}
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={circumference}
              />
            </svg>

            <span className="scroll-elevator-icon">
              <ArrowUp size={16} strokeWidth={2.25} />
            </span>
          </span>
        </Motion.button>
      )}
    </AnimatePresence>
  );
}

import React, { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Lock, ChevronLeft, ChevronRight } from "lucide-react";

export default function CertificateViewer({ 
  isOpen, 
  documents = [], 
  currentIndex = 0, 
  onClose, 
  onNavigate 
}) {
  const currentDoc = documents[currentIndex];

  const handlePrevious = useCallback((e) => {
    if (e) e.stopPropagation();
    if (currentIndex > 0) onNavigate(currentIndex - 1);
  }, [currentIndex, onNavigate]);

  const handleNext = useCallback((e) => {
    if (e) e.stopPropagation();
    if (currentIndex < documents.length - 1) onNavigate(currentIndex + 1);
  }, [currentIndex, documents.length, onNavigate]);

  const handleKey = useCallback((e) => {
    if (e.key === "Escape") onClose();
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
  }, [onClose, handlePrevious, handleNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, handleKey]);

  return (
    <AnimatePresence>
      {isOpen && currentDoc && (
        <motion.div
          className="aa-inspect"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="Document Inspection"
        >
          <div className="aa-inspect-bar">
            <div className="aa-inspect-brand">Academic Archive</div>
            <button
              className="aa-inspect-close"
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              aria-label="Close"
            >
              CLOSE <X size={14} />
            </button>
          </div>

          <div className="aa-inspect-nav-area left" onClick={handlePrevious}>
            {currentIndex > 0 && (
              <button className="aa-inspect-nav-btn" aria-label="Previous Document">
                <ChevronLeft size={24} strokeWidth={1.5} />
              </button>
            )}
          </div>

          <motion.div
            key={currentDoc.id}
            className="aa-inspect-body"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentDoc.image}
              alt={currentDoc.title || "Academic Record"}
              className="aa-inspect-img"
              draggable={false}
            />
          </motion.div>

          <div className="aa-inspect-nav-area right" onClick={handleNext}>
            {currentIndex < documents.length - 1 && (
              <button className="aa-inspect-nav-btn" aria-label="Next Document">
                <ChevronRight size={24} strokeWidth={1.5} />
              </button>
            )}
          </div>

          <div className="aa-inspect-footer">
            <div className="aa-inspect-meta">
              {currentDoc.title && <span>{currentDoc.title}</span>}
              {currentDoc.subtitle && <span>{currentDoc.subtitle}</span>}
            </div>
            
            <div className="aa-inspect-right-group">
              <div className="aa-inspect-privacy">
                <Lock size={10} />
                <span>Sensitive information redacted</span>
              </div>
              <div className="aa-inspect-counter">
                {String(currentIndex + 1).padStart(2, '0')} / {String(documents.length).padStart(2, '0')}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

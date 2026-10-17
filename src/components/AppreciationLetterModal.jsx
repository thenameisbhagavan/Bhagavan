import React, { useState, useEffect, useCallback } from "react";
import { X, ZoomIn, ZoomOut, RotateCcw, ArrowUpRight, Download } from "lucide-react";
import "../styles/DocumentViewerModal.css";

export default function AppreciationLetterModal({ 
  isOpen, 
  onClose, 
  imgSrc = "/images/experience/pbr-vits-appreciation-letter.png",
  downloadSrc = "/images/experience/pbr-vits-appreciation-letter.jpg",
  title = "PBR VITS Appreciation Letter",
  meta = "IQAC · October 10, 2026"
}) {
  const [zoomLevel, setZoomLevel] = useState(1);

  // Keyboard navigation & accessibility
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if ((e.ctrlKey || e.metaKey) && e.key === "+") {
        e.preventDefault();
        setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "-") {
        e.preventDefault();
        setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
      }
      if ((e.ctrlKey || e.metaKey) && e.key === "0") {
        e.preventDefault();
        setZoomLevel(1);
      }
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll while modal is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setZoomLevel(1);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleZoomIn = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.min(prev + 0.25, 2.5));
  };

  const handleZoomOut = (e) => {
    e.stopPropagation();
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleResetZoom = (e) => {
    e.stopPropagation();
    setZoomLevel(1);
  };

  return (
    <div 
      className="dvm-overlay" 
      onClick={onClose} 
      role="dialog" 
      aria-modal="true" 
      aria-label="Official Letter of Appreciation — PBR VITS, Kavali"
    >
      {/* Floating Header Bar */}
      <header className="dvm-header" onClick={(e) => e.stopPropagation()}>
        <div className="dvm-header-left">
          <button 
            className="dvm-btn-icon" 
            onClick={onClose} 
            aria-label="Close document viewer"
            title="Close (Esc)"
          >
            <X size={18} />
          </button>
        </div>

        <div className="dvm-header-center">
          <span className="dvm-doc-title">{title}</span>
          {meta && (
            <>
              <div className="dvm-divider" aria-hidden="true"></div>
              <span className="dvm-doc-meta">{meta}</span>
            </>
          )}
          <div className="dvm-divider" aria-hidden="true"></div>
          <div className="dvm-zoom-controls" role="group" aria-label="Zoom controls">
            <button 
              className="dvm-btn-icon-small" 
              onClick={handleZoomOut} 
              aria-label="Zoom Out" 
              title="Zoom Out"
            >
              <ZoomOut size={13} />
            </button>
            <span 
              className="dvm-zoom-text" 
              onClick={handleResetZoom} 
              title="Reset Zoom to 100%"
            >
              {Math.round(zoomLevel * 100)}%
            </span>
            <button 
              className="dvm-btn-icon-small" 
              onClick={handleZoomIn} 
              aria-label="Zoom In" 
              title="Zoom In"
            >
              <ZoomIn size={13} />
            </button>
          </div>
        </div>

        <div className="dvm-header-right">
          <a 
            href={imgSrc} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="dvm-btn-icon" 
            title="Open Full Image in New Tab"
            aria-label="Open Full Image in New Tab"
          >
            <ArrowUpRight size={17} />
          </a>
          <a 
            href={downloadSrc} 
            download="visodhaya_appreciation_letter.jpg" 
            className="dvm-btn-icon" 
            title="Download Original Appreciation Letter"
            aria-label="Download Original Appreciation Letter"
          >
            <Download size={17} />
          </a>
        </div>
      </header>

      {/* Main Document Canvas */}
      <main className="dvm-viewport" onClick={onClose}>
        <div 
          className="dvm-document-container"
          style={{ transform: `scale(${zoomLevel})` }}
          onClick={(e) => e.stopPropagation()}
        >
          <img 
            src={imgSrc} 
            alt="Official Letter of Appreciation issued by Internal Quality Assurance Cell, PBR VITS Kavali to Mr. G. Siva Satya Sai Bhagavan for AI Innovation and Startup Opportunities technical talk" 
            className="dvm-document-img" 
            loading="eager"
            decoding="async"
          />
        </div>
      </main>
    </div>
  );
}

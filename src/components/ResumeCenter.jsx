import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import { m, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import { useInView } from 'react-intersection-observer';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import '../styles/ResumeCenter.css';

import masterPdf from '../assets/thenameisbhagavanresume(master).pdf';
import aiPdf from '../assets/thenameisbhagavanAIresume.pdf';
import mlPdf from '../assets/thenameisbhagavanaimlresume.pdf';
import fullstackPdf from '../assets/thenameisbhagavanfullstackresume.pdf';
import backendPdf from '../assets/thenameisbhagavanpythonbackend.pdf';

// Lazy load the worker only when this component is mounted
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const resumes = [
  {
    id: 'master',
    title: 'Professional Resume',
    subtitle: 'Complete Engineering Profile',
    desc: 'A comprehensive overview of my engineering journey including AI, Machine Learning, Backend, and Full Stack development.',
    pdfUrl: masterPdf,
    downloadName: 'Professional_Resume.pdf'
  },
  {
    id: 'ai',
    title: 'AI Engineer',
    subtitle: 'Artificial Intelligence & Intelligent Systems',
    desc: 'Focused on Generative AI, Intelligent Systems, RAG, NLP, Computer Vision, and AI application development.',
    pdfUrl: aiPdf,
    downloadName: 'AI_Engineer_Resume.pdf'
  },
  {
    id: 'ml',
    title: 'Machine Learning Engineer',
    subtitle: 'ML • Deep Learning • Computer Vision',
    desc: 'Focused on machine learning, model development, feature engineering, data processing, and intelligent systems.',
    pdfUrl: mlPdf,
    downloadName: 'Machine_Learning_Engineer_Resume.pdf'
  },
  {
    id: 'fs',
    title: 'Full Stack Developer',
    subtitle: 'React • MERN • Software Engineering',
    desc: 'Focused on scalable web applications, frontend, backend, REST APIs, databases, and deployment.',
    pdfUrl: fullstackPdf,
    downloadName: 'Full_Stack_Developer_Resume.pdf'
  },
  {
    id: 'py',
    title: 'Python Backend Developer',
    subtitle: 'FastAPI • Flask • Backend Engineering',
    desc: 'Focused on Python backend development, APIs, databases, authentication, and scalable backend systems.',
    pdfUrl: backendPdf,
    downloadName: 'Python_Backend_Developer_Resume.pdf'
  }
];

// Apple Easing
const appleEase = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: appleEase } }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.98, filter: 'blur(10px)' },
  visible: { opacity: 1, scale: 1, filter: 'blur(0px)', transition: { duration: 0.4, ease: appleEase } },
  exit: { opacity: 0, scale: 0.98, filter: 'blur(10px)', transition: { duration: 0.3, ease: appleEase } }
};

// --- Components ---

const PdfSkeleton = () => <div className="rc-skeleton" aria-hidden="true"></div>;

const PdfError = () => (
  <div className="rc-error-state">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
    <span>Preview Unavailable</span>
  </div>
);

// Memoized responsive preview card to avoid unnecessary re-renders
const ResponsivePdfPreview = memo(({ pdfUrl }) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(280);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true, // Only trigger once to load the PDF
    rootMargin: '200px 0px', // Load slightly before it comes into view
  });

  // Combine refs
  const setRefs = (node) => {
    containerRef.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="rc-preview-container" ref={setRefs}>
      {inView ? (
        <Document
          file={pdfUrl}
          loading={<PdfSkeleton />}
          error={<PdfError />}
          className="rc-pdf-doc"
        >
          <Page 
            pageNumber={1} 
            width={width} 
            renderTextLayer={false} 
            renderAnnotationLayer={false}
            loading={<PdfSkeleton />}
          />
        </Document>
      ) : (
        <PdfSkeleton />
      )}
      <div className="rc-preview-overlay"></div>
    </div>
  );
});

// Fullscreen Modal Viewer
const ResumeModal = ({ activePdf, closePreview, zoomSteps }) => {
  const [numPages, setNumPages] = useState(null);
  const [zoomIndex, setZoomIndex] = useState(1); // Default to 100% (index 1)
  const [isLoaded, setIsLoaded] = useState(false);
  const scale = zoomSteps[zoomIndex];

  // Disable body scroll
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePreview();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [closePreview]);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setIsLoaded(true);
  };

  const handleZoomOut = () => setZoomIndex(prev => Math.max(0, prev - 1));
  const handleZoomIn = () => setZoomIndex(prev => Math.min(zoomSteps.length - 1, prev + 1));

  return (
    <m.div 
      className="rc-modal-backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closePreview}
    >
      <button className="rc-modal-close" onClick={closePreview} aria-label="Close Preview Modal">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      
      <m.div 
        className="rc-modal-content"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="rc-modal-controls">
          <span id="modal-title" className="rc-modal-title">{activePdf.title} Preview</span>
          <div className="rc-modal-actions">
            <button 
              className="rc-zoom-btn" 
              onClick={handleZoomOut} 
              disabled={zoomIndex === 0}
              aria-label="Zoom Out"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </button>
            <span className="rc-zoom-text" aria-live="polite">{Math.round(scale * 100)}%</span>
            <button 
              className="rc-zoom-btn" 
              onClick={handleZoomIn} 
              disabled={zoomIndex === zoomSteps.length - 1}
              aria-label="Zoom In"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
            </button>
          </div>
        </div>
        
        <div className="rc-modal-pdf-wrapper" tabIndex="0">
          <Document
            file={activePdf.pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            loading={<PdfSkeleton />}
            error={<PdfError />}
          >
            {/* Progressive Rendering: Always render page 1, render rest only after load success */}
            <Page 
              pageNumber={1} 
              scale={scale}
              renderTextLayer={true}
              renderAnnotationLayer={true}
              className="rc-modal-page"
              loading={<PdfSkeleton />}
            />
            {isLoaded && numPages > 1 && Array.from(new Array(numPages - 1), (el, index) => (
              <Page 
                key={`page_${index + 2}`} 
                pageNumber={index + 2} 
                scale={scale}
                renderTextLayer={true}
                renderAnnotationLayer={true}
                className="rc-modal-page"
                loading={<PdfSkeleton />}
              />
            ))}
          </Document>
        </div>
      </m.div>
    </m.div>
  );
};

export default function ResumeCenter() {
  const [activePdf, setActivePdf] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const zoomSteps = useMemo(() => [0.8, 1.0, 1.25, 1.5, 1.75, 2.0], []);

  const openPreview = (resume) => setActivePdf(resume);
  const closePreview = () => setActivePdf(null);

  // If user prefers reduced motion, disable stagger and use simple fade variants
  const activeContainerVariants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  } : containerVariants;

  const activeCardVariants = shouldReduceMotion ? {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  } : cardVariants;

  return (
    <section className="resume-center-section" aria-labelledby="resume-center-heading">
      <m.div 
        className="rc-header"
        initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 30 }}
        whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: appleEase }}
      >
        <div className="rc-label" aria-hidden="true">Professional Profiles</div>
        <h2 id="resume-center-heading" className="rc-title">One Engineer.<br/>Five Perspectives.</h2>
        <p className="rc-subtitle">
          Different opportunities require different strengths. Each resume is carefully tailored for a specific engineering role while representing the same professional journey.
        </p>
      </m.div>

      <m.div 
        className="rc-grid"
        variants={activeContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {resumes.map((resume) => (
          <m.div key={resume.id} className="rc-card-wrapper" variants={activeCardVariants}>
            <div className="rc-card">
              <ResponsivePdfPreview pdfUrl={resume.pdfUrl} />
              
              <h3 className="rc-card-title">{resume.title}</h3>
              <p className="rc-card-subtitle">{resume.subtitle}</p>
              <p className="rc-card-desc">{resume.desc}</p>
              
              <div className="rc-btn-group">
                <m.button 
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                  onClick={() => openPreview(resume)} 
                  className="rc-btn rc-btn-secondary" 
                  aria-label={`Preview ${resume.title}`}
                >
                  Preview
                </m.button>
                <m.a 
                  whileTap={shouldReduceMotion ? {} : { scale: 0.96 }}
                  href={resume.pdfUrl} 
                  download={resume.downloadName} 
                  className="rc-btn rc-btn-primary" 
                  aria-label={`Download ${resume.title}`}
                >
                  Download
                </m.a>
              </div>
            </div>
          </m.div>
        ))}
      </m.div>

      <AnimatePresence>
        {activePdf && (
          <ResumeModal 
            activePdf={activePdf} 
            closePreview={closePreview} 
            zoomSteps={zoomSteps}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

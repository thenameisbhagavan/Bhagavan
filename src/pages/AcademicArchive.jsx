import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import "../styles/AcademicArchive.css";
import { ACADEMIC_JOURNEY } from "../data/academicData";
import CertificateViewer from "../components/academic/CertificateViewer";
import SEO from "../components/SEO";

/* ── Animation tokens ── */
const reveal = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10%" },
  transition: { duration: 0.85, delay: d, ease: [0.22, 1, 0.36, 1] },
});

const enter = (d = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay: d, ease: [0.22, 1, 0.36, 1] },
});

/* ── Data ── */
const ssc = ACADEMIC_JOURNEY.find(s => s.id === "secondary");
const inter = ACADEMIC_JOURNEY.find(s => s.id === "intermediate");
const btech = ACADEMIC_JOURNEY.find(s => s.id === "undergraduate");

/* ── Artifact Component ── */
function Artifact({ image, alt, onClick, large = false, className = "" }) {
  return (
    <div
      className={`aa-artifact ${large ? "aa-artifact-lg" : ""} ${className}`}
      onClick={onClick}
    >
      <img src={image} alt={alt} className="aa-artifact-img" loading="lazy" decoding="async" />
      <div className="aa-artifact-inspect">
        INSPECT RECORD <ArrowRight size={11} />
      </div>
    </div>
  );
}

/* ── Archive Rail ── */
function ArchiveRail({ active }) {
  const nodes = [
    { num: "01", name: "Foundation" },
    { num: "02", name: "Formation" },
    { num: "03", name: "Engineering" },
  ];

  return (
    <div className="aa-rail">
      <div className="aa-rail-line" />
      <div
        className="aa-rail-marker"
        style={{ top: `${active * 64 + 22}px` }}
      />
      {nodes.map((n, i) => (
        <div key={n.num} className={`aa-rail-node ${active === i ? "active" : ""}`}>
          <div className="aa-rail-num">{n.num}</div>
          <div className="aa-rail-name">{n.name}</div>
        </div>
      ))}
    </div>
  );
}

export default function AcademicArchive() {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);
  
  const [activeChapter, setActiveChapter] = useState(0);
  const [activeYear, setActiveYear] = useState(0);
  const [showOpening, setShowOpening] = useState(true);
  const [preview, setPreview] = useState({ visible: false, image: null, x: 0, y: 0 });

  const ch1 = useRef(null);
  const ch2 = useRef(null);
  const ch3 = useRef(null);

  // Flatten all documents for the viewer navigation
  const allDocuments = useMemo(() => {
    const docs = [];
    
    docs.push({
      id: 'ssc',
      image: ssc.primaryImage,
      title: "Secondary School Certificate",
      subtitle: "2020",
    });

    docs.push({
      id: 'inter',
      image: inter.primaryImage,
      title: "Intermediate Pass Certificate",
      subtitle: "2020 — 2022",
    });

    docs.push({
      id: 'btech-cmm',
      image: btech.primaryImage,
      title: "Consolidated Marks Memorandum",
      subtitle: "B.Tech · 2022 — 2026",
    });

    if (btech.provisionalImage) {
      docs.push({
        id: 'btech-pc',
        image: btech.provisionalImage,
        title: "Provisional Certificate",
        subtitle: "B.Tech · 2026",
      });
    }

    btech.years.forEach(yr => {
      yr.semesters.forEach(sem => {
        sem.records.forEach(record => {
          docs.push({
            id: record.id,
            image: record.image,
            title: record.name,
            subtitle: sem.title,
          });
        });
      });
    });

    const supporting = [...(ssc.supporting || []), ...(inter.supporting || [])];
    supporting.forEach(doc => {
      docs.push({
        id: doc.id,
        image: doc.image,
        title: doc.title,
        subtitle: "Supporting Record",
      });
    });

    return docs;
  }, []);

  const openDocument = (id) => {
    const idx = allDocuments.findIndex(d => d.id === id);
    if (idx !== -1) {
      setViewerIndex(idx);
      setViewerOpen(true);
    }
  };

  /* Opening sequence */
  useEffect(() => {
    const t = setTimeout(() => setShowOpening(false), 1200);
    return () => clearTimeout(t);
  }, []);

  /* Chapter observer */
  useEffect(() => {
    const refs = [ch1, ch2, ch3];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = refs.findIndex(r => r.current === entry.target);
            if (idx !== -1) setActiveChapter(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px" }
    );
    refs.forEach(r => { if (r.current) observer.observe(r.current); });
    return () => observer.disconnect();
  }, []);

  /* Hover preview handler */
  const handleRowHover = useCallback((e, image) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPreview({
      visible: true,
      image,
      x: rect.right + 24,
      y: rect.top + rect.height / 2 - 100,
    });
  }, []);

  const hidePreview = useCallback(() => {
    setPreview(p => ({ ...p, visible: false }));
  }, []);

  const currentYear = btech.years[activeYear];
  const allSupporting = [...(ssc.supporting || []), ...(inter.supporting || [])];

  return (
    <motion.div
      className="aa-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5 }}
    >
      <SEO 
        description="Academic archive of Bhagavan. Engineering education foundations, including a B.Tech in Artificial Intelligence & Data Science and early technical projects."
      />

      {/* ━━━ OPENING STATE ━━━ */}
      <AnimatePresence>
        {showOpening && (
          <motion.div
            className="aa-opening"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div className="aa-opening-id" {...enter(0.1)}>Archive / 001</motion.div>
            <motion.div className="aa-opening-title" {...enter(0.25)}>
              The Academic{"\n"}Archive
            </motion.div>
            <motion.div className="aa-opening-year" {...enter(0.4)}>2020 — 2026</motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ━━━ ARCHIVE RAIL ━━━ */}
      <ArchiveRail active={activeChapter} />

      {/* ━━━ HOVER PREVIEW ━━━ */}
      <div
        className={`aa-preview ${preview.visible ? "visible" : ""}`}
        style={{ left: preview.x, top: preview.y }}
      >
        {preview.image && <img src={preview.image} alt="" />}
      </div>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           HERO — Artifact Composition
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="aa-hero">
        <div className="aa-hero-text">
          <motion.div className="aa-hero-eyebrow" {...enter(0.6)}>Academic Archive</motion.div>
          <motion.div className="aa-hero-date" {...enter(0.7)}>2020 — 2026</motion.div>
          <motion.h1 className="aa-hero-statement" {...enter(0.8)}>
            The Foundation{"\n"}Behind the Engineer.
          </motion.h1>
          <motion.div className="aa-hero-count" {...enter(1.0)}>
            ARCHIVE · {allDocuments.length} RECORDS
          </motion.div>
        </div>

        <motion.div
          className="aa-hero-artifact"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Artifact
            image={btech.primaryImage}
            alt="Consolidated Marks Memorandum"
            onClick={() => openDocument('btech-cmm')}
          />
        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           01 / FOUNDATION — Secondary
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="aa-section" ref={ch1}>
        <motion.div className="aa-ch-num" {...reveal()}>01 / FOUNDATION</motion.div>
        <motion.h2 className="aa-ch-title" {...reveal(0.06)}>
          Secondary{"\n"}Education
        </motion.h2>
        <motion.p className="aa-ch-sub" {...reveal(0.12)}>
          The first formal milestone in the academic journey.
        </motion.p>

        <div className="aa-composition">
          <motion.div {...reveal(0.16)}>
            <div className="aa-ch-meta">
              <div className="aa-ch-meta-row">
                <span className="aa-ch-meta-key">Year</span>
                <span className="aa-ch-meta-val">2020</span>
              </div>
              <div className="aa-ch-meta-row">
                <span className="aa-ch-meta-key">Board</span>
                <span className="aa-ch-meta-val">{ssc.board}</span>
              </div>
              <div className="aa-ch-meta-row">
                <span className="aa-ch-meta-key">State</span>
                <span className="aa-ch-meta-val">{ssc.state}</span>
              </div>
              <div className="aa-ch-meta-row">
                <span className="aa-ch-meta-key">Record</span>
                <span className="aa-ch-meta-val">Secondary School Certificate</span>
              </div>
            </div>
          </motion.div>
          <motion.div {...reveal(0.22)}>
            <Artifact
              image={ssc.primaryImage}
              alt="SSC Certificate"
              onClick={() => openDocument('ssc')}
            />
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           02 / FORMATION — Intermediate
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="aa-section" ref={ch2}>
        <motion.div className="aa-ch-num" {...reveal()}>02 / FORMATION</motion.div>
        <motion.h2 className="aa-ch-title" {...reveal(0.06)}>
          Intermediate{"\n"}Education
        </motion.h2>

        <div className="aa-composition-reverse">
          <motion.div {...reveal(0.12)}>
            <Artifact
              image={inter.primaryImage}
              alt="Intermediate Certificate"
              onClick={() => openDocument('inter')}
            />
          </motion.div>
          <motion.div {...reveal(0.18)}>
            <div className="aa-meta-stack">
              <strong>MPC</strong>
              <div>Mathematics</div>
              <div>Physics</div>
              <div>Chemistry</div>
              <div className="aa-meta-stack-sub">
                {inter.board}<br />{inter.state}<br />2020 — 2022
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           TRANSITION — Engineering
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="aa-transition">
        <motion.div className="aa-transition-arrow" {...reveal()}>2022 → 2026</motion.div>
        <motion.h2 className="aa-transition-headline" {...reveal(0.08)}>
          The Formation{"\n"}of an Engineer
        </motion.h2>
        <motion.div className="aa-transition-ground" {...reveal(0.16)}>
          <div>B.Tech · Artificial Intelligence & Data Science</div>
          <div>Ramachandra College of Engineering · JNTUK</div>
        </motion.div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           03 / ENGINEERING — B.Tech (Dark)
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="aa-section aa-section-dark" ref={ch3}>
        <motion.div className="aa-ch-num" {...reveal()}>03 / ENGINEERING</motion.div>
        <motion.h2 className="aa-ch-title" {...reveal(0.06)}>
          B.Tech
        </motion.h2>
        <motion.p className="aa-ch-sub" {...reveal(0.12)} style={{ color: 'rgba(255,255,255,0.4)' }}>
          Artificial Intelligence & Data Science
        </motion.p>

        {/* Specification Line */}
        <motion.div className="aa-specs" {...reveal(0.18)} style={{ padding: '64px 0' }}>
          <div className="aa-specs-inner">
            <div className="aa-spec">
              <div className="aa-spec-val" style={{ color: '#f5f5f7' }}>7.57</div>
              <div className="aa-spec-key">CGPA</div>
            </div>
            <div className="aa-spec">
              <div className="aa-spec-val" style={{ color: '#f5f5f7' }}>2026</div>
              <div className="aa-spec-key">COMPLETED</div>
            </div>
            <div className="aa-spec">
              <div className="aa-spec-val" style={{ color: '#f5f5f7' }}>AI & DS</div>
              <div className="aa-spec-key">DISCIPLINE</div>
            </div>
            <div className="aa-spec">
              <div className="aa-spec-val" style={{ color: '#f5f5f7' }}>First Class</div>
              <div className="aa-spec-key">RESULT</div>
            </div>
          </div>
        </motion.div>

        {/* Consolidated Record */}
        <motion.div {...reveal(0.2)} style={{ marginTop: 64 }}>
          <div className="aa-ch-num" style={{ textAlign: 'center', marginBottom: 12 }}>ACADEMIC RECORD · CONSOLIDATED</div>
          <Artifact
            image={btech.primaryImage}
            alt="Consolidated Marks Memorandum"
            onClick={() => openDocument('btech-cmm')}
            large
          />
          <div style={{ textAlign: 'center', marginTop: 32, fontSize: 13, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.3)' }}>
            ONE RECORD · EIGHT SEMESTERS · FOUR YEARS
          </div>
        </motion.div>

        {/* Provisional Certificate */}
        {btech.provisionalImage && (
          <motion.div {...reveal(0.1)} style={{ marginTop: 100 }}>
            <div className="aa-ch-num" style={{ textAlign: 'center', marginBottom: 12 }}>PROVISIONAL CERTIFICATE</div>
            <Artifact
              image={btech.provisionalImage}
              alt="Provisional Certificate"
              onClick={() => openDocument('btech-pc')}
              large
            />
          </motion.div>
        )}
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
           ARCHIVE INDEX — with hover preview
           ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="aa-index">
        <motion.div className="aa-index-heading" {...reveal()}>The Record</motion.div>

        <div className="aa-index-nav">
          {btech.years.map((yr, i) => (
            <button
              key={yr.id}
              className={`aa-index-tab ${activeYear === i ? "active" : ""}`}
              onClick={() => setActiveYear(i)}
            >
              {yr.title}
            </button>
          ))}
        </div>

        <div>
          {currentYear.semesters.map((sem) =>
            sem.records.map((record, ri) => (
              <div
                className="aa-index-row"
                key={record.id}
                onClick={() => openDocument(record.id)}
                onMouseEnter={(e) => handleRowHover(e, record.image)}
                onMouseLeave={hidePreview}
              >
                <div className="aa-index-num">{String(ri + 1).padStart(2, "0")}</div>
                <div className="aa-index-title">{sem.title}</div>
                <div className="aa-index-type">{record.name}</div>
                <div className="aa-index-arrow">→</div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* ━━━ SUPPORTING ━━━ */}
      {allSupporting.length > 0 && (
        <section className="aa-supporting">
          <motion.div className="aa-supporting-heading" {...reveal()}>Supporting Records</motion.div>
          {allSupporting.map((doc) => (
            <div
              className="aa-supporting-row"
              key={doc.id}
              onClick={() => openDocument(doc.id)}
              onMouseEnter={(e) => handleRowHover(e, doc.image)}
              onMouseLeave={hidePreview}
            >
              <span>{doc.title}</span>
              <span className="aa-supporting-arrow">→</span>
            </div>
          ))}
        </section>
      )}

      {/* ━━━ ENDING ━━━ */}
      <section className="aa-ending">
        <motion.div className="aa-ending-quote" {...reveal()}>
          The foundation is documented.
        </motion.div>
        <motion.div className="aa-ending-quote-sub" {...reveal(0.08)}>
          The direction is engineering.
        </motion.div>
        <motion.div className="aa-ending-tags" {...reveal(0.16)}>
          <span>2020 — 2026</span>
          <span>Academic Foundation</span>
          <span>AI & Data Science</span>
          <span>Engineering</span>
        </motion.div>
        <motion.div className="aa-ending-ctas" {...reveal(0.22)}>
          <Link to="/experience" className="aa-cta-a">
            Explore the Engineering Journey <ArrowRight size={14} />
          </Link>
          <Link to="/journal" className="aa-cta-b">
            Read the Engineering Journal <ArrowRight size={14} />
          </Link>
        </motion.div>
      </section>

      {/* ━━━ INSPECTION SYSTEM ━━━ */}
      <CertificateViewer
        isOpen={viewerOpen}
        documents={allDocuments}
        currentIndex={viewerIndex}
        onClose={() => setViewerOpen(false)}
        onNavigate={setViewerIndex}
      />
    </motion.div>
  );
}

import React, { useState, useEffect, useRef } from "react";
import { m } from "framer-motion";
import { Briefcase, Award, Trophy, Code, GraduationCap, Rocket } from "lucide-react";

const MILESTONES = [
  { year: '2025', type: 'FINAL YEAR PROJECT', icon: Rocket, color: '168,85,247', title: 'Leave Automation System — Microsoft Power Apps', org: 'B.Tech Capstone Project', desc: 'Architected an enterprise-grade leave management system automating multi-level approval workflows, role-based access control, and email notifications using the Microsoft Power Platform ecosystem.', tags: ['Power Apps', 'Power Automate', 'SharePoint', 'Enterprise'] },
  { year: '2025', type: 'INTERNSHIP', icon: Briefcase, color: '74,222,128', title: 'MERN Stack Engineering Intern', org: 'StudyOwl Education Pvt Ltd', desc: 'Engineered production-ready React components and Node.js/Express REST APIs. Built reusable frontend architecture and backend data integration layers.', tags: ['React', 'Node.js', 'Express', 'MongoDB'] },
  { year: '2025', type: 'INTERNSHIP', icon: Briefcase, color: '59,130,246', title: 'AI/ML Computer Vision Engineer', org: 'SmartBridge (Remote)', desc: 'Developed CNN-based Smart Sorting image classification models using TensorFlow/Keras. Deployed trained models via Flask for real-time inference predictions.', tags: ['TensorFlow', 'CNN', 'Flask', 'Computer Vision'] },
  { year: '2025', type: 'CERTIFICATION', icon: Award, color: '250,204,21', title: 'Google & IBM Generative AI Certifications', org: 'Professional Certifications', desc: 'Mastered LLM architectures, prompt engineering, AI application lifecycles, and enterprise AI integration patterns.', tags: ['Google AI', 'IBM', 'LLMs', 'GenAI'] },
  { year: '2024', type: 'HACKATHON', icon: Trophy, color: '239,68,68', title: '24-Hour National Hackathon Participant', org: 'Brainovision × Ramachandra College', desc: 'Collaborated with a 5-member team as freshers to architect and deploy a complete full-stack real-time marketplace under extreme time constraints.', tags: ['Hackathon', 'Full Stack', 'Real-time'] },
  { year: '2024', type: 'INTERNSHIP', icon: Briefcase, color: '6,182,212', title: 'Machine Learning & Data Science Intern', org: 'Blackbucks (Remote)', desc: 'Performed advanced data preprocessing, feature engineering, and built predictive ML models. Improved model accuracy through Scikit-learn pipelines and data cleaning.', tags: ['Scikit-learn', 'Pandas', 'Data Science'] },
  { year: '2024', type: 'PROJECT', icon: Code, color: '16,185,129', title: 'Production AI Projects Portfolio', org: 'Self-Directed Engineering', desc: 'Built career recommendation systems, fake news detectors, and fruit disease classifiers — all deployed as production-style Flask APIs, not just notebooks.', tags: ['NLP', 'CNN', 'Flask API', 'Production'] },
  { year: '2022', type: 'EDUCATION', icon: GraduationCap, color: '255,255,255', title: 'B.Tech — AI & Data Science', org: 'Ramachandra College of Engineering, Eluru', desc: 'Began a rigorous 4-year journey into artificial intelligence, machine learning, data structures, and software engineering fundamentals.', tags: ['AIDS', 'B.Tech', '75% CGPA'] },
];

function AnimatedCounter({ target, suffix = '' }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const num = parseInt(target) || 0;
        const duration = 1800;
        const step = Math.max(1, Math.floor(num / (duration / 30)));
        let current = 0;
        const timer = setInterval(() => {
          current += step;
          if (current >= num) { setCount(num); clearInterval(timer); }
          else setCount(current);
        }, 30);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

function TimelineNode({ milestone: m, index, isMobile }) {
  const Icon = m.icon;
  return (
    <m.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [.16, 1, .3, 1] }}
      style={{ position: 'relative', marginBottom: '0.5rem', padding: '1.8rem', borderRadius: '18px', border: '1px solid transparent', transition: 'all 0.4s cubic-bezier(.16,1,.3,1)' }}
      onMouseEnter={e => {
        e.currentTarget.style.background = 'rgba(255,255,255,.02)';
        e.currentTarget.style.borderColor = `rgba(${m.color},.15)`;
        e.currentTarget.style.backdropFilter = 'blur(12px)';
        e.currentTarget.style.boxShadow = `0 8px 32px rgba(0,0,0,0.3), inset 0 0 30px rgba(${m.color},0.03)`;
        const dot = e.currentTarget.querySelector('.tl-dot');
        if (dot) { dot.style.transform = 'scale(1.6)'; dot.style.boxShadow = `0 0 20px rgba(${m.color},0.7)`; }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.style.borderColor = 'transparent';
        e.currentTarget.style.backdropFilter = 'none';
        e.currentTarget.style.boxShadow = 'none';
        const dot = e.currentTarget.querySelector('.tl-dot');
        if (dot) { dot.style.transform = 'scale(1)'; dot.style.boxShadow = `0 0 10px rgba(${m.color},0.4)`; }
      }}
    >
      {/* Timeline dot */}
      <div className="tl-dot" style={{ position: 'absolute', left: isMobile ? '-1.85rem' : '-3.35rem', top: '2.2rem', width: '11px', height: '11px', borderRadius: '50%', background: `rgba(${m.color},0.9)`, border: '2px solid #000', boxShadow: `0 0 10px rgba(${m.color},0.4)`, transition: 'all 0.3s ease', zIndex: 3 }} />
      {/* Type badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', marginBottom: '.8rem', flexWrap: 'wrap' }}>
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.35rem', fontSize: '.62rem', color: `rgba(${m.color},0.9)`, fontFamily: 'monospace', letterSpacing: '.1em', padding: '.25rem .7rem', background: `rgba(${m.color},0.06)`, borderRadius: '6px', border: `1px solid rgba(${m.color},0.12)` }}>
          <Icon size={11} strokeWidth={2} /> {m.year} · {m.type}
        </span>
      </div>
      {/* Title & org */}
      <h3 style={{ fontSize: '1.15rem', fontWeight: 600, color: '#fff', marginBottom: '.3rem', letterSpacing: '-.02em' }}>{m.title}</h3>
      <div style={{ fontSize: '.85rem', color: `rgba(${m.color},0.7)`, fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', marginBottom: '.8rem' }}>{m.org}</div>
      {/* Description */}
      <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.48)', lineHeight: 1.75, maxWidth: '600px', fontWeight: 300, marginBottom: '1rem' }}>{m.desc}</p>
      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.4rem' }}>
        {m.tags.map((tag, ti) => (
          <span key={ti} style={{ fontSize: '.62rem', padding: '.2rem .6rem', borderRadius: '6px', border: `1px solid rgba(${m.color},0.15)`, color: `rgba(${m.color},0.7)`, background: `rgba(${m.color},0.04)`, fontFamily: 'monospace', letterSpacing: '.03em' }}>{tag}</span>
        ))}
      </div>
    </m.div>
  );
}

export default function AITimeline({ isMobile }) {
  const stats = [
    { val: '4', label: 'Internships', suffix: '' },
    { val: '6', label: 'Projects Built', suffix: '+' },
    { val: '4', label: 'Certifications', suffix: '' },
    { val: '1', label: 'Hackathon Finals', suffix: '' },
  ];
  return (
    <section id="ai-timeline" style={{ padding: isMobile ? '5rem 1.5rem' : '8rem 4rem', maxWidth: '1400px', margin: '0 auto' }} data-nav-theme="light">
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.25)', letterSpacing: '.16em', textTransform: 'uppercase', fontFamily: 'monospace', marginBottom: '1.5rem' }}>AI Engineer Timeline</div>
        <h2 style={{ fontSize: 'clamp(2rem,3.5vw,3rem)', fontWeight: 500, letterSpacing: '-.04em', color: '#fff', lineHeight: 1.12, maxWidth: '600px', marginBottom: '1.2rem' }}>
          From B.Tech Graduate 2026 to<br />
          <span style={{ fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', fontWeight: 300, fontSize: 'clamp(2.1rem,3.6vw,3.1rem)' }}>production builder</span>
        </h2>
        <p style={{ fontSize: '.92rem', color: 'rgba(255,255,255,.4)', maxWidth: '520px', lineHeight: 1.7, fontWeight: 300 }}>
          A trajectory defined by shipping real products — not just completing coursework. Every milestone represents production-level output.
        </p>
      </div>

      {/* Achievement counters */}
      <m.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        style={{ display: 'grid', gridTemplateColumns: isMobile ? 'repeat(2,1fr)' : 'repeat(4,1fr)', gap: '1rem', marginBottom: '3.5rem' }}>
        {stats.map((s, i) => (
          <div key={i} className="liquid-glass" style={{ padding: '1.5rem', borderRadius: '14px', border: '1px solid rgba(255,255,255,.06)', textAlign: 'center', transition: 'all 0.3s ease' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(74,222,128,0.3)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,.06)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <div style={{ fontSize: '2rem', fontWeight: 300, color: '#fff', fontFamily: "'Source Serif 4',Georgia,serif", fontStyle: 'italic', lineHeight: 1, marginBottom: '.4rem' }}>
              <AnimatedCounter target={s.val} suffix={s.suffix} />
            </div>
            <div style={{ fontSize: '.65rem', color: 'rgba(255,255,255,.4)', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '.08em' }}>{s.label}</div>
          </div>
        ))}
      </m.div>

      {/* Timeline */}
      <div style={{ position: 'relative', paddingLeft: isMobile ? '1.8rem' : '3.2rem', maxWidth: '850px' }}>
        {/* Vertical line */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: isMobile ? '0.2rem' : '1.6rem', width: '2px', background: 'linear-gradient(to bottom, rgba(74,222,128,0.6), rgba(59,130,246,0.4), rgba(168,85,247,0.3), rgba(255,255,255,0.05))', borderRadius: '2px' }} />
        {MILESTONES.map((m, i) => (
          <TimelineNode key={i} milestone={m} index={i} isMobile={isMobile} />
        ))}
      </div>
    </section>
  );
}

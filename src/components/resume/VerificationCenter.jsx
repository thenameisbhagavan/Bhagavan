import React from 'react';
import { m } from 'framer-motion';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../../styles/VerificationCenter.css';

// ─── Animation Config ────────────────────────────────────────────────────────
const VC_EASE = [0.22, 1, 0.36, 1];

const vcFadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: VC_EASE } },
};

const vcStagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

function Reveal({ children, className }) {
  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={vcStagger}
    >
      {children}
    </m.div>
  );
}

// ─── Components ─────────────────────────────────────────────────────────────

function VerificationCard({ title, description, items }) {
  return (
    <m.article className="vc-card" variants={vcFadeUp}>
      <header className="vc-card-header">
        <h4 className="vc-card-title">{title}</h4>
        {description && <p className="vc-card-desc">{description}</p>}
      </header>
      <ul className="vc-list">
        {items.map((item, idx) => (
          <li key={idx}>
            <div className="vc-list-item">
              <CheckCircle2 size={18} className="vc-icon-check" />
              <span>{item.label}</span>
            </div>
            {item.subItems && (
              <div className="vc-sub-grid">
                {item.subItems.map((sub, sIdx) => (
                  <span key={sIdx} className="vc-sub-badge">{sub}</span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </m.article>
  );
}

// ─── Main Section ───────────────────────────────────────────────────────────

export default function VerificationCenter() {
  return (
    <section className="verification-center" aria-label="Verification Center" data-nav-theme="light">
      <div className="res-constrain">
        
        {/* HEADER */}
        <Reveal className="vc-header">
          <div className="vc-header-content">
            <div className="vc-header-text">
              <m.h3 className="vc-title" variants={vcFadeUp}>Verification Center</m.h3>
              <m.p className="vc-subtitle" variants={vcFadeUp}>Verified Academic & Professional Credentials</m.p>
            </div>
            
            <m.div className="vc-trust-indicator" variants={vcFadeUp}>
              <div className="vc-trust-meta">
                <div className="vc-trust-meta-item">
                  <span className="vc-trust-meta-label">Status</span>
                  <span className="vc-trust-meta-value vc-status-badge vc-status-verified">VERIFIED</span>
                </div>
                <div className="vc-trust-meta-item">
                  <span className="vc-trust-meta-label">Last Updated</span>
                  <span className="vc-trust-meta-value">August 2026</span>
                </div>
              </div>
              <p className="vc-trust-text">
                Official academic and professional credentials maintained for recruitment verification.
              </p>
            </m.div>
          </div>
        </Reveal>

        {/* CHAPTER 1: ACADEMIC TIMELINE */}
        <Reveal className="vc-chapter">
          <m.h4 className="vc-chapter-title" variants={vcFadeUp}>Academic Journey</m.h4>
          <div className="vc-timeline" role="list">
            
            <m.article className="vc-timeline-item" variants={vcFadeUp} role="listitem">
              <h5 className="vc-timeline-org">Ramachandra College of Engineering</h5>
              <div className="vc-timeline-loc">Eluru</div>
              <div className="vc-timeline-degree">Bachelor of Technology</div>
              <div className="vc-timeline-major">Artificial Intelligence & Data Science</div>
              <div className="vc-timeline-meta">JNTUK (R20)</div>
              
              <dl className="vc-timeline-dl">
                <dt className="vc-timeline-dt">CGPA</dt>
                <dd className="vc-timeline-dd">7.8 / 10</dd>
                <dt className="vc-timeline-dt">Status</dt>
                <dd className="vc-timeline-dd vc-status-badge vc-status-verified">VERIFIED</dd>
              </dl>
            </m.article>

            <m.article className="vc-timeline-item" variants={vcFadeUp} role="listitem">
              <h5 className="vc-timeline-org">Sri Vidhya Junior College</h5>
              <div className="vc-timeline-loc">Gudivada</div>
              <div className="vc-timeline-degree">Intermediate (MPC)</div>
              
              <dl className="vc-timeline-dl">
                <dt className="vc-timeline-dt">Status</dt>
                <dd className="vc-timeline-dd vc-status-badge vc-status-verified">VERIFIED</dd>
              </dl>
            </m.article>

            <m.article className="vc-timeline-item" variants={vcFadeUp} role="listitem">
              <h5 className="vc-timeline-org">Montessori English Medium High School</h5>
              <div className="vc-timeline-loc">Gudivada</div>
              <div className="vc-timeline-degree">Secondary School Certificate (SSC)</div>
              
              <dl className="vc-timeline-dl">
                <dt className="vc-timeline-dt">Status</dt>
                <dd className="vc-timeline-dd vc-status-badge vc-status-verified">VERIFIED</dd>
              </dl>
            </m.article>

          </div>
        </Reveal>

        {/* CHAPTER 2 & 3: VERIFICATION CARDS */}
        <Reveal className="vc-chapter">
          <m.h4 className="vc-chapter-title" variants={vcFadeUp}>Official Records</m.h4>
          <m.p className="vc-chapter-desc" variants={vcFadeUp}>
            Official records and supporting documentation are securely maintained and can be shared for recruitment or institutional verification.
          </m.p>
          
          <div className="vc-card-grid">
            <VerificationCard 
              title="Academic Records"
              items={[
                { label: 'Secondary School Certificate' },
                { label: 'SSC Marks Memo' },
                { label: 'Intermediate Certificate' },
                { label: 'Intermediate Marks Memo' },
                { 
                  label: 'Semester Grade Cards',
                  subItems: ['1-1', '1-2', '2-1', '2-2', '3-1', '3-2', '4-1', '4-2']
                },
                { label: 'Consolidated Marks Memo' },
                { label: 'Provisional Certificate' }
              ]}
            />
            <VerificationCard 
              title="Professional Credentials"
              items={[
                { label: 'Resume (Latest Version)' },
                { label: 'Industry Internship Certificates' },
                { label: 'Professional Certifications' },
                { label: 'Engineering Portfolio' },
                { label: 'GitHub Profile' },
                { label: 'Engineering Journal Publications' }
              ]}
            />
          </div>
        </Reveal>

        {/* CHAPTER 4: VERIFICATION SUMMARY */}
        <Reveal className="vc-chapter">
          <m.h4 className="vc-chapter-title" variants={vcFadeUp}>Verification Summary</m.h4>
          <div className="vc-summary-grid">
            
            <m.article className="vc-summary-item" variants={vcFadeUp}>
              <div className="vc-summary-header">
                <span className="vc-summary-label">Academic Journey</span>
                <span className="vc-status-badge vc-status-verified">VERIFIED</span>
              </div>
              <p className="vc-summary-desc">Official university academic milestones.</p>
            </m.article>

            <m.article className="vc-summary-item" variants={vcFadeUp}>
              <div className="vc-summary-header">
                <span className="vc-summary-label">Official Academic Records</span>
                <span className="vc-status-badge vc-status-available">AVAILABLE</span>
              </div>
              <p className="vc-summary-desc">Transcripts & degree certificates.</p>
            </m.article>

            <m.article className="vc-summary-item" variants={vcFadeUp}>
              <div className="vc-summary-header">
                <span className="vc-summary-label">Professional Credentials</span>
                <span className="vc-status-badge vc-status-verified">VERIFIED</span>
              </div>
              <p className="vc-summary-desc">Industry experience and certifications.</p>
            </m.article>

            <m.article className="vc-summary-item" variants={vcFadeUp}>
              <div className="vc-summary-header">
                <span className="vc-summary-label">Portfolio</span>
                <span className="vc-status-badge vc-status-live">LIVE</span>
              </div>
              <p className="vc-summary-desc">Continuously updated engineering portfolio.</p>
            </m.article>

            <m.article className="vc-summary-item" variants={vcFadeUp}>
              <div className="vc-summary-header">
                <span className="vc-summary-label">Engineering Journal</span>
                <span className="vc-status-badge vc-status-published">PUBLISHED</span>
              </div>
              <p className="vc-summary-desc">Technical articles and architectures.</p>
            </m.article>

            <m.article className="vc-summary-item" variants={vcFadeUp}>
              <div className="vc-summary-header">
                <span className="vc-summary-label">GitHub</span>
                <span className="vc-status-badge vc-status-public">PUBLIC</span>
              </div>
              <p className="vc-summary-desc">Open source projects and code repositories.</p>
            </m.article>

            <m.article className="vc-summary-item" variants={vcFadeUp}>
              <div className="vc-summary-header">
                <span className="vc-summary-label">Resume</span>
                <span className="vc-status-badge vc-status-current">CURRENT</span>
              </div>
              <p className="vc-summary-desc">Regularly updated resume version.</p>
            </m.article>

            <m.article className="vc-summary-item vc-summary-full" variants={vcFadeUp}>
              <div className="vc-summary-header">
                <span className="vc-summary-label">Recruitment Status</span>
                <span className="vc-status-badge vc-status-ready">OPEN</span>
              </div>
              <span className="vc-summary-value">Open to Software Engineering Opportunities</span>
            </m.article>

          </div>
        </Reveal>

        {/* PRIMARY CTA & PRIVACY */}
        <Reveal className="vc-cta-section">
          <m.h3 className="vc-cta-headline" variants={vcFadeUp}>Need official verification?</m.h3>
          <m.p className="vc-cta-desc" variants={vcFadeUp}>
            Academic and professional records are securely maintained and can be shared during recruitment or institutional verification.
          </m.p>
          <m.div className="vc-cta-actions" variants={vcFadeUp}>
            <Link to="/connect" className="vc-cta-btn-primary">
              Request Academic & Professional Verification <ArrowRight size={20} />
            </Link>
            <Link to="/connect" className="vc-cta-btn-secondary">
              Visit Connect <ArrowRight size={16} />
            </Link>
          </m.div>
          <m.p className="vc-privacy" variants={vcFadeUp}>
            Official academic and professional records are shared only during legitimate recruitment or institutional verification processes.
          </m.p>
        </Reveal>

      </div>
    </section>
  );
}

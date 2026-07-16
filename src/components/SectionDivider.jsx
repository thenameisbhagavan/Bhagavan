import React from 'react';
import { m } from 'framer-motion';

const SectionDivider = ({ label = "THENAMEISBHAGAVAN" }) => {
  return (
    <div style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      padding: '2rem 0',
      pointerEvents: 'none',
      userSelect: 'none'
    }}>
      <m.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="dark-text-muted-heavy"
        style={{
          fontSize: '0.65rem',
          fontWeight: 700,
          letterSpacing: '0.3em',
          color: 'rgba(0,0,0,0.2)',
          textTransform: 'uppercase'
        }}
      >
        {label}
      </m.div>
    </div>
  );
};

export default SectionDivider;

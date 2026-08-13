import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const isJournal = window.location.pathname.startsWith('/journal');

  if (isJournal) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#000', color: '#fff', textAlign: 'center', padding: '2rem' }}>
        <Helmet>
          <title>404 - Research Not Found | Engineering Journal</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem', letterSpacing: '-0.02em' }}>Research Not Found</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#86868b' }}>The document you are looking for has been moved or does not exist.</p>
        <Link to="/journal" style={{ padding: '0.75rem 1.5rem', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', borderRadius: '9999px', textDecoration: 'none', fontWeight: '500', transition: 'all 0.2s ease' }}>
          Return to Engineering Journal
        </Link>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#000', color: '#fff', textAlign: 'center', padding: '2rem' }}>
      <Helmet>
        <title>404 - Page Not Found | TheNameIsBhagavan</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#a1a1aa' }}>The future you're looking for hasn't been built yet.<br/><br/><span style={{ fontSize: '1.5rem', color: '#fff' }} className="brand-cursive">— TheNameIsBhagavan</span></p>
      <Link to="/" style={{ padding: '0.75rem 1.5rem', background: '#fff', color: '#000', borderRadius: '9999px', textDecoration: 'none', fontWeight: '600', transition: 'background 0.2s ease' }}>
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;

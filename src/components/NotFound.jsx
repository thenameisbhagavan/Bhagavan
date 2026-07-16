import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', background: '#000', color: '#fff', textAlign: 'center', padding: '2rem' }}>
      <Helmet>
        <title>404 - Page Not Found | TheNameIsBhagavan</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <h1 style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.5rem', marginBottom: '2rem', color: '#a1a1aa' }}>The future you're looking for hasn't been built yet.<br/><br/><span style={{ fontSize: '1rem', color: '#fff' }}>— TheNameIsBhagavan</span></p>
      <Link to="/" style={{ padding: '0.75rem 1.5rem', background: '#fff', color: '#000', borderRadius: '9999px', textDecoration: 'none', fontWeight: '600', transition: 'background 0.2s ease' }}>
        Return Home
      </Link>
    </div>
  );
};

export default NotFound;

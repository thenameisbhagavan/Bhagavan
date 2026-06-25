import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { m } from 'framer-motion';
import useIsMobile from './hooks/useIsMobile';

export default function AppShell({ children }) {
  const isMobile = useIsMobile();
  const animDuration = isMobile ? 45 : 20;
  const animDuration2 = isMobile ? 55 : 25;

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#fbfbfd', color: '#1d1d1f' }}>
      
      {/* Premium Ambient Background System (Apple Light Theme) */}
      {/* Premium Ambient Background System (Apple Light Theme) */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {/* Soft light diffusion top left - NO CSS BLUR FOR PERFORMANCE */}
        <m.div 
          animate={{ x: ['-2%', '2%', '-2%'], y: ['-2%', '2%', '-2%'] }}
          transition={{ duration: animDuration, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            top: '-20%', left: '-10%', width: '60%', height: '60%',
            background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)',
            borderRadius: '50%',
            willChange: 'transform'
          }} 
        />
        {/* Soft light diffusion bottom right - NO CSS BLUR FOR PERFORMANCE */}
        <m.div 
          animate={{ x: ['2%', '-2%', '2%'], y: ['2%', '-2%', '2%'] }}
          transition={{ duration: animDuration2, repeat: Infinity, ease: 'linear' }}
          style={{
            position: 'absolute',
            bottom: '-10%', right: '-10%', width: '70%', height: '70%',
            background: 'radial-gradient(circle, rgba(0,0,0,0.02) 0%, transparent 60%)',
            borderRadius: '50%',
            willChange: 'transform'
          }} 
        />
        {/* Extreme subtle noise grain for premium print feel - DISABLED ON MOBILE */}
        {!isMobile && (
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.015, mixBlendMode: 'multiply',
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
          }} />
        )}
      </div>

      <Navbar />

      <main style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        {children}
        <Footer />
      </main>
    </div>
  );
}

import React from 'react';

export const LiquidGlassAsset = () => {
  return (
    <div className="asset-liquid-glass">
      <div className="liquid-orb liquid-orb-1"></div>
      <div className="liquid-orb liquid-orb-2"></div>
      <div className="liquid-orb liquid-orb-3"></div>
      <div className="liquid-glass-overlay"></div>
    </div>
  );
};

export const NeuralNetworkAsset = () => {
  return (
    <div className="asset-neural-network">
      <div className="neural-background"></div>
      <svg className="neural-svg" viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="neuralGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.05)" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        
        {/* Layer 1 Nodes */}
        <circle cx="200" cy="150" r="4" fill="#fff" />
        <circle cx="200" cy="300" r="4" fill="#fff" />
        <circle cx="200" cy="450" r="4" fill="#fff" />
        
        {/* Layer 2 Nodes */}
        <circle cx="400" cy="100" r="6" fill="#fff" />
        <circle cx="400" cy="250" r="6" fill="#fff" />
        <circle cx="400" cy="400" r="6" fill="#fff" />
        <circle cx="400" cy="500" r="6" fill="#fff" />
        
        {/* Layer 3 Nodes */}
        <circle cx="600" cy="200" r="4" fill="#fff" />
        <circle cx="600" cy="350" r="4" fill="#fff" />
        
        {/* Connections Layer 1 -> 2 */}
        <path d="M200 150 L400 100" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        <path d="M200 150 L400 250" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        <path d="M200 300 L400 100" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        <path d="M200 300 L400 250" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        <path d="M200 300 L400 400" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        <path d="M200 450 L400 250" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        <path d="M200 450 L400 400" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        <path d="M200 450 L400 500" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        
        {/* Connections Layer 2 -> 3 */}
        <path d="M400 100 L600 200" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        <path d="M400 250 L600 200" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        <path d="M400 250 L600 350" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        <path d="M400 400 L600 200" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        <path d="M400 400 L600 350" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        <path d="M400 500 L600 350" stroke="url(#neuralGrad)" strokeWidth="1.5" />
        
        {/* Glows */}
        <circle cx="400" cy="250" r="30" fill="url(#nodeGlow)" />
        <circle cx="600" cy="350" r="25" fill="url(#nodeGlow)" />
      </svg>
      <div className="neural-overlay"></div>
    </div>
  );
};

export const PremiumImage = ({ article }) => {
  if (article.assetType === 'image-ui') {
    return (
      <div className="premium-image-container ui-showcase">
        <img src={article.heroImage} alt={article.title} className="image-contain ui-screenshot" loading="lazy" />
      </div>
    );
  }
  
  if (article.assetType === 'image-diagram') {
    return (
      <div className="premium-image-container diagram-showcase">
        <img src={article.heroImage} alt={article.title} className="image-contain diagram-img" loading="lazy" />
      </div>
    );
  }

  if (article.assetType === 'image-browser') {
    return (
      <div className="premium-image-container ui-showcase" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="browser-showcase ui-screenshot" style={{ width: '100%', paddingTop: 0, display: 'flex', flexDirection: 'column' }}>
          <div className="browser-chrome" style={{ position: 'relative' }}>
            <div className="browser-dots">
              <span></span><span></span><span></span>
            </div>
          </div>
          <div style={{ position: 'relative', background: '#1c1c21', display: 'flex' }}>
            <img src={article.heroImage} alt={article.title} style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} loading="lazy" />
          </div>
        </div>
      </div>
    );
  }

  // Fallback to standard cover
  return <img src={article.heroImage} alt={article.title} className="editorial-asset-image" loading="lazy" />;
};

export const RenderAsset = ({ article }) => {
  if (article.assetType === 'LiquidGlass') return <LiquidGlassAsset />;
  if (article.assetType === 'NeuralNetwork') return <NeuralNetworkAsset />;
  return <PremiumImage article={article} />;
};

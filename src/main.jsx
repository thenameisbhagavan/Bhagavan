import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

import { LazyMotion, domAnimation } from 'framer-motion';

const rootElement = document.getElementById('root');

const app = (
  <StrictMode>
    <BrowserRouter>
      <LazyMotion features={domAnimation}>
        <App />
      </LazyMotion>
    </BrowserRouter>
  </StrictMode>
);

if (rootElement.hasChildNodes()) {
  // We are dealing with prerendered HTML (from Puppeteer).
  // Because our app uses a GlobalLoader on initial mount, hydration will fail 
  // catastrophically (mismatch between prerendered page vs client loader state).
  // To fix the blank screen crash, we clear the prerendered DOM and use createRoot.
  // SEO bots will still see the prerendered HTML perfectly before JS executes.
  rootElement.innerHTML = '';
}

createRoot(rootElement).render(app);

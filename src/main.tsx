import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Performance monitoring
const startTime = performance.now();

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// Log performance metrics
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const loadTime = performance.now() - startTime;
    console.log(`App loaded in ${loadTime.toFixed(2)}ms`);
    
    // Report Web Vitals if available
    if ('web-vital' in window) {
      // This would integrate with web-vitals library if added
    }
  });
}
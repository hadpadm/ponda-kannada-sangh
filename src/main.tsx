// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

console.log('[main] starting app mount');

function mountApp() {
  const rootEl = document.getElementById('root');
  if (!rootEl) {
    console.error('[main] ERROR: #root element not found in DOM. App will append a fallback #root.');
    const fallback = document.createElement('div');
    fallback.id = 'root';
    document.body.appendChild(fallback);
    return createRoot(fallback);
  }

  console.log('[main] mounting to #root');
  return createRoot(rootEl);
}

try {
  const root = mountApp();

  try {
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log('[main] App rendered successfully');
  } catch (renderErr) {
    console.error('[main] App render failed — showing fallback UI', renderErr);
    root.render(
      <div style={{ padding: 20, fontFamily: 'sans-serif' }}>
        <h2>Site temporarily unavailable</h2>
        <p>There was an error rendering the app. Check console for details.</p>
      </div>
    );
  }
} catch (err) {
  console.error('[main] fatal error during mount', err);
  document.body.innerHTML = '<div style="padding:20px;font-family:sans-serif">Fatal error during app mount — see console.</div>';
}

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("PayFlow Environment Secured.");
  } catch (error) {
    console.error("Initialization Failed:", error);
    rootElement.innerHTML = `
      <div style="height:100vh; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:20px; font-family:sans-serif; background:#ffffff;">
        <h1 style="color:#ef4444; font-size:18px; font-weight:bold;">Session Error</h1>
        <p style="color:#64748b; font-size:12px; margin-top:8px;">Please refresh the page to restart PayFlow.</p>
        <button onclick="location.reload()" style="margin-top:20px; padding:12px 24px; background:#2563eb; color:white; border:none; border-radius:12px; font-weight:bold; cursor:pointer;">Refresh</button>
      </div>
    `;
  }
}
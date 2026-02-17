import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Critical: Root element not found in DOM.");
}

try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Critical Terminal Launch Failure:", error);
  rootElement.innerHTML = `
    <div style="padding: 40px; color: #ef4444; font-family: 'Inter', sans-serif; text-align: center; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; background: #f8fafc;">
      <div style="font-size: 48px; margin-bottom: 20px;">⚠️</div>
      <h1 style="font-weight: 900; letter-spacing: -0.025em; color: #1e293b;">SYSTEM BOOT FAILURE</h1>
      <p style="font-size: 14px; color: #64748b; max-width: 300px; line-height: 1.6;">${error instanceof Error ? error.message : "The application failed to initialize due to a protocol mismatch."}</p>
      <button onclick="location.reload()" style="margin-top: 32px; padding: 12px 24px; background: #0891b2; color: white; border: none; border-radius: 12px; font-weight: 800; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; cursor: pointer; box-shadow: 0 10px 15px -3px rgba(8, 145, 178, 0.3);">
        Retry Handshake
      </button>
    </div>
  `;
}
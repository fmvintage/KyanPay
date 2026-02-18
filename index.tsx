import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("Critical: Could not find the 'root' element in index.html.");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("PayFlow Terminal Initialized Successfully.");
  } catch (error) {
    console.error("Mounting Error:", error);
    rootElement.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: 'Inter', sans-serif; text-align: center; color: #1e293b; background: #f8fafc; padding: 20px;">
        <div style="font-size: 48px; margin-bottom: 24px;">🚫</div>
        <h1 style="font-weight: 900; letter-spacing: -0.05em; margin-bottom: 8px;">BOOT SEQUENCE INTERRUPTED</h1>
        <p style="color: #64748b; font-size: 14px; max-width: 320px; line-height: 1.6;">The application encountered a runtime mismatch. This usually happens when the browser fails to resolve modern JavaScript modules.</p>
        <div style="background: #fee2e2; color: #ef4444; padding: 12px; border-radius: 8px; font-family: monospace; font-size: 11px; margin-top: 20px; text-align: left; width: 100%; max-width: 300px; overflow-x: auto;">
          ${error instanceof Error ? error.message : "Unknown Module Error"}
        </div>
        <button onclick="location.reload()" style="margin-top: 32px; padding: 12px 32px; background: #2563eb; color: white; border: none; border-radius: 12px; font-weight: 800; font-size: 12px; text-transform: uppercase; cursor: pointer; box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.3);">
          Re-initialize Session
        </button>
      </div>
    `;
  }
}
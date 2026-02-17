import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Critical Runtime Error:", error);
  rootElement.innerHTML = `
    <div style="padding: 20px; color: #ef4444; font-family: sans-serif; text-align: center;">
      <h1 style="font-weight: 800;">System Boot Failure</h1>
      <p style="font-size: 14px; color: #64748b;">${error instanceof Error ? error.message : "An unexpected error occurred during terminal launch."}</p>
      <button onclick="location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #0891b2; color: white; border: none; border-radius: 8px; font-weight: bold; cursor: pointer;">
        Retry Connection
      </button>
    </div>
  `;
}

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import Google Fonts CSS via JS
import '@fontsource/anton'; // npm install @fontsource/anton

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import GraphPage from './pages/GraphPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GraphPage />
  </React.StrictMode>,
);

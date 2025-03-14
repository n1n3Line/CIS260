// This file is the entry point for the React application. It renders the App component into the DOM.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Optional: Import global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
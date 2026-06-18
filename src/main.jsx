import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';     // <--- Must be here
import './responsive.css'; // <--- Must be here
import 'bootstrap/dist/css/bootstrap.min.css'; // <--- Ensure bootstrap is loaded

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
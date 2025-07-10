import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthProvider } from './context/AuthContext';
import { ShipmentsProvider } from './context/ShipmentsContext';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <ShipmentsProvider>
        <App />
      </ShipmentsProvider>
    </AuthProvider>
  </React.StrictMode>
);

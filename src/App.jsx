import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import CreateShipment from './pages/CreateShipment';
import TrackShipment from './pages/TrackShipment';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { AuthContext } from './context/AuthContext';
import './styles/app.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNav = location.pathname === '/' || location.pathname === '/register';
  return (
    <>
      {!hideNav && <Navbar />}
      <div style={{ display: 'flex', minHeight: '100vh' }}>
        {!hideNav && <Sidebar />}
        <main style={{ flex: 1 }}>{children}</main>
      </div>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-shipment" element={<CreateShipment />} />
          <Route path="/track-shipment" element={<TrackShipment />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;

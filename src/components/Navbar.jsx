import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/dashboard">ShipmentApp</Link>
      </div>
      <div className="navbar-links">
        {user ? (
          <>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/create-shipment">Create Shipment</Link>
            <Link to="/track-shipment">Track Shipment</Link>
          </>
        ) : (
          <>
            <Link to="/">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

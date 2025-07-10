import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';


const Sidebar = () => {
  const { user, logout } = useContext(AuthContext);

  if (!user) return null;

  return (
    <aside className="sidebar">
      <div className="sidebar-user">
        <p>Welcome, <strong>user</strong></p>
      </div>
      <nav className="sidebar-nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create-shipment">Create Shipment</Link>
        <Link to="/track-shipment">Track Shipment</Link>
        <button className="logout-btn" onClick={() => logout()}>Logout</button>
      </nav>
    </aside>
  );
};

export default Sidebar;

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShipmentsContext } from '../context/ShipmentsContext';

const Dashboard = () => {
  const { shipments } = useContext(ShipmentsContext);

  return (
    <div className="dashboard-container">
      <h2>Welcome to Your Dashboard</h2>
      <div className="dashboard-links">
        <Link to="/create-shipment">Create New Shipment</Link>
        <Link to="/track-shipment">Track a Shipment</Link>
      </div>
      <h3>Your Shipments</h3>
      {shipments.length === 0 ? (
        <p>No shipments yet. Create one to get started!</p>
      ) : (
        <ul>
          {shipments.map((shipment) => (
            <li key={shipment.id} style={{ marginBottom: '10px' }}>
              <strong>To:</strong> {shipment.receiver} | <strong>Address:</strong> {shipment.address} | <strong>Status:</strong> {shipment.status} <br />
              <span style={{ fontSize: '0.9em', color: '#555' }}>Tracking ID: {shipment.id}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;

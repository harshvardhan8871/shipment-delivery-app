import React, { useState, useContext } from 'react';
import { ShipmentsContext } from '../context/ShipmentsContext';

const TrackShipment = () => {
  const { findShipmentById } = useContext(ShipmentsContext);
  const [trackingId, setTrackingId] = useState('');
  const [shipment, setShipment] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = findShipmentById(trackingId);
    if (found) {
      setShipment(found);
      setError('');
    } else {
      setShipment(null);
      setError('Shipment not found');
    }
  };

  return (
    <div className="track-shipment">
      <h2>Track Shipment</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Tracking ID"
          value={trackingId}
          onChange={(e) => setTrackingId(e.target.value)}
          required
        />
        <button type="submit">Track</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {shipment && (
        <div className="status-result">
          <p><strong>Sender:</strong> {shipment.sender}</p>
          <p><strong>Receiver:</strong> {shipment.receiver}</p>
          <p><strong>Package Size:</strong> {shipment.packageSize}</p>
          <p><strong>Address:</strong> {shipment.address}</p>
          <p><strong>Status:</strong> {shipment.status}</p>
          <p><strong>Tracking ID:</strong> {shipment.id}</p>
        </div>
      )}
    </div>
  );
};

export default TrackShipment;

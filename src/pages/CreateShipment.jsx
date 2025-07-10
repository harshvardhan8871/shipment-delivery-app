import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShipmentsContext } from '../context/ShipmentsContext';

const CreateShipment = () => {
  const { addShipment } = useContext(ShipmentsContext);
  const [shipment, setShipment] = useState({
    sender: '',
    receiver: '',
    packageSize: '',
    address: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setShipment({ ...shipment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!shipment.sender || !shipment.receiver || !shipment.packageSize || !shipment.address) {
      setError('All fields are required');
      return;
    }
    addShipment(shipment);
    setShipment({ sender: '', receiver: '', packageSize: '', address: '' });
    navigate('/dashboard');
  };

  return (
    <div className="shipment-form">
      <h2>Create Shipment</h2>
      <form onSubmit={handleSubmit}>
        <input name="sender" type="text" placeholder="Sender Name" value={shipment.sender} onChange={handleChange} required />
        <input name="receiver" type="text" placeholder="Receiver Name" value={shipment.receiver} onChange={handleChange} required />
        <input name="packageSize" type="text" placeholder="Package Size" value={shipment.packageSize} onChange={handleChange} required />
        <input name="address" type="text" placeholder="Delivery Address" value={shipment.address} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default CreateShipment;

import React, { createContext, useState, useEffect, useContext } from 'react';
import { AuthContext } from './AuthContext';

export const ShipmentsContext = createContext();

export const ShipmentsProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    if (user) {
      const stored = localStorage.getItem(`shipments_${user.email}`);
      setShipments(stored ? JSON.parse(stored) : []);
    } else {
      setShipments([]);
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(`shipments_${user.email}` , JSON.stringify(shipments));
    }
  }, [shipments, user]);

  const addShipment = (shipment) => {
    const newShipment = {
      ...shipment,
      id: Date.now().toString(),
      status: 'Created',
    };
    setShipments((prev) => [...prev, newShipment]);
    return newShipment;
  };

  const findShipmentById = (id) => {
    return shipments.find((s) => s.id === id);
  };

  return (
    <ShipmentsContext.Provider value={{ shipments, addShipment, findShipmentById }}>
      {children}
    </ShipmentsContext.Provider>
  );
}; 
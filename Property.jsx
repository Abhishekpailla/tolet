// src/pages/Property.jsx
import React, { useEffect, useState } from 'react';
import '../styles/Property.css'; // ✅ Make sure this file exists

const Property = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const dummyData = Array.from({ length: 6 }).map((_, i) => ({
      id: i + 1,
      title: `Property ${i + 1}`,
      cost: 5000 + i * 1000,
      location: 'City Center',
    }));
    setProperties(dummyData);
  }, []);

  return (
    <div className="property-page">
      <div className="property-header">
        <h2>Available Properties</h2>
      </div>
      <div className="property-list">
        {properties.map((prop) => (
          <div className="property-card" key={prop.id}>
            <h3>{prop.title}</h3>
            <p>Rent: ₹{prop.cost}</p>
            <p>Location: {prop.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Property;

// ShowFlights.js

import React from 'react';
import './ShowFlights.css';

const ShowFlights = () => {
  const flights = [
    { id: 1, airline: 'Airline 1', departure: 'City 1', destination: 'City 2', price: '$500' },
    { id: 2, airline: 'Airline 2', departure: 'City 2', destination: 'City 3', price: '$600' },
    { id: 3, airline: 'Airline 3', departure: 'City 3', destination: 'City 1', price: '$550' },
    // Add more flights as needed
  ];

  return (
    <div className="show-flights-container">
      <h2>Available Flights</h2>
      <div className="card-container">
        {flights.map(flight => (
          <div key={flight.id} className="card">
            <div className="card-body">
              <h5 className="card-title">{flight.airline}</h5>
              <p className="card-text">From: {flight.departure}</p>
              <p className="card-text">To: {flight.destination}</p>
              <p className="card-text">Price: {flight.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowFlights;

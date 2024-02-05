// Home.js

import React, { useState } from 'react';
import './Home.css';
import Login from './Login'; // Import the Login component

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleClickGetStarted = () => {
    // Set showLogin to true when the button is clicked
    setShowLogin(true);
  };

  return (
    <div className="home-container">
      {/* Header and App Bar - Assuming you have these components */}

      {/* Main Content */}
      <div className="main-content">
        {/* Conditionally render either the Home content or the Login component */}
        {showLogin ? (
          <Login />
        ) : (
          <div className="content-overlay">
            <h1>Welcome to AirEase Airlines</h1>
            <p>Book your flights with ease and comfort</p>

            {/* Get Started Button */}
            <button className="get-started-button" onClick={handleClickGetStarted}>
              Get Started
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;

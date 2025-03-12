// src/components/FuturePotential.js
import React from 'react';
import './FuturePotential.css';
import visionImage from './assets/vision.jpg'; // Ensure the correct path to your image

function FuturePotential() {
  return (
    <div className="future-potential-container" id='vision'>
      <h1 className="main-headingfutu">Our Vision</h1>
      <div className="vision-section">
        {/* Left Side Image */}
        <div className="vision-image-container">
          <img src={visionImage} alt="Our Vision" className="vision-image" />
        </div>

        {/* Right Side Content */}
        <div className="vision-content">
          <p>
            At EcoPlex, we envision a sustainable future where innovation and responsibility converge to replace conventional plastics with eco-friendly alternatives.
          </p>
          <p>
            We aim to empower industries to reduce their carbon footprint and embrace a circular economy. Together, we strive to create a cleaner, greener world for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FuturePotential;

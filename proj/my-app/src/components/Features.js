// src/components/Features.js
import React from 'react';
import './Features.css';
import feature1 from './assets/feature5.jpg';
import feature2 from './assets/feature2.jpg';
import feature3 from './assets/feature1.jpeg';
import feature4 from './assets/feature3.jpg';
import feature5 from './assets/feature4.jpg';

function Features() {
  return (
    <div className="features-container">
      <h1 className="main-headingfre">Why Choose J-WIN?</h1>
      <div className="features-section">
        <div className="feature-item">
          <img src={feature1} alt="Circular Economy" className="feature-image" />
          <p>Circular Economy</p>
        </div>
        <div className="feature-item">
          <img src={feature2} alt="Sustainable Feedstocks" className="feature-image" />
          <p className='check'>Superior Mechanical Properties</p>
        </div>
        <div className="feature-item">
          <img src={feature3} alt="Reduced CO2 Emission" className="feature-image" />
          <p>Reduced CO2 Emission</p>
        </div>
        <div className="feature-item">
          <img src={feature4} alt="Global Standards" className="feature-image" />
          <p>Global Standards</p>
        </div>
        <div className="feature-item">
          <img src={feature5} alt="Superior Mechanical Properties" className="feature-image" />
          <p>Sustainable Feedstocks</p>
        </div>
      </div>
    </div>
  );
}

export default Features;

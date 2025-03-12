// src/components/Applications.js
import React from 'react';
import './Application.css';
import appi1 from './assets/appi1.jpg';
import appi2 from './assets/appi2.jpg';
import appi3 from './assets/appi3.jpg';
import appi4 from './assets/appi4.jpg';
import appi5 from './assets/appi5.jpg';
import appi6 from './assets/appi6.jpg';

function Applications() {
  return (
    <div className="applications-container">
      <h1 className="main-headingapp">Versatile Applications Across Industries</h1>
      <p className="subheadingapp">
        From coffee capsules to hygiene products, J-WIN is engineered to meet diverse industry needs while ensuring sustainability at every step.
      </p>
      <div className="applications-section">
        {/* Left Side */}
        <div className="applications-left">
          <div className="application-box">
            <img src={appi1} alt="Food Packaging" className="application-image" />
            <div className="application-content">
              <h3>Food packaging</h3>
              <span>(compostable containers, cutlery)</span>
            </div>
          </div>
          <div className="application-box">
            <img src={appi2} alt="Hygiene Products" className="application-image" />
            <div className="application-content">
              <h3>Hygiene products</h3>
              <span>(diapers, wipes)</span>
            </div>
          </div>
          <div className="application-box">
            <img src={appi3} alt="Textiles" className="application-image" />
            <div className="application-content">
              <h3>Textiles</h3>
              <span>(breathable fibers for clothing)</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="applications-right">
          <div className="application-box right-box">
            <div className="application-content">
              <h3>Medical devices</h3>
              <span>(biocompatible sutures, implants)</span>
            </div>
            <img src={appi4} alt="Medical Devices" className="application-image appichk1" />
          </div>
          <div className="application-box right-box">
            <div className="application-content">
              <h3>3D printing filaments</h3>
              <span>(precision prototyping)</span>
            </div>
            <img src={appi5} alt="3D Printing Filaments" className="application-image" />
          </div>
          <div className="application-box right-box">
            <div className="application-content">
              <h3>Landscape and agriculture</h3>
              <span>(plastic pots, yard waste bags)</span>
            </div>
            <img src={appi6} alt="Landscape and Agriculture" className="application-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applications;

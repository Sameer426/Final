// src/components/ProductDescription.js
import React from 'react';
import './ProductDescription.css';
import bannerImage from './assets/img2.jpg'; // Ensure the correct path to your image

function ProductDescription() {
  return (
    <div className="product-description-container">
      <h1 className="main-headinggg">Transforming the Future with Sustainable Innovation</h1>
      <h2 className="subheadinggg">Introduction to J-WIN</h2>
      <div className="description-section">
        <div className="image-container">
          <img src={bannerImage} alt="Sustainable Feedstocks" className="description-image" />
        </div>
        <div className="description-content">
          <h3>What is J-WIN?</h3>
          <p>
            J-WIN is a revolutionary biopolymer made from renewable feedstocks like corn starch, offering a low-carbon, sustainable alternative to petroleum-based plastics. 
          </p>
          <p>
          Designed for high-performance applications, J-WIN combines innovation with environmental stewardship to redefine the future of materials.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDescription;

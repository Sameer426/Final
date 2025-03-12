// src/App.js
import React from 'react';
import Header from './components/Header';
import ProductDescription from './components/ProductDescription';
import Features from './components/Features';
import Impacts from './components/Impacts';
import Application from './components/Application';
import TeamMembers from './components/TeamMembers';
import FuturePotential from './components/FuturePotential';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div id="home">
          <ProductDescription />
        </div>
        <div id="product">
          {/* ProductDescription or similar component */}
        </div>
        <div id="features">
          <Features />
        </div>
        <div id="impacts">
          <Impacts />
        </div>
        <div id="application">
          <Application />
        </div>
        <div id="future">
          <FuturePotential />
        </div>
        <div id="team">
          <TeamMembers />
        </div>
        <div>
          <Footer/>
        </div>
      </main>
    </div>
  );
}

export default App;

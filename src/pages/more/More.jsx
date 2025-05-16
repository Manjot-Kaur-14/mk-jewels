import React from "react";
import "./more.css";

function More() {
  return (
    <div>
    
      {/* Sections */}
      <section className="full-screen-image">
        <img src="images/172big.png" alt="Pretty in Pink" />
      </section>

      <section className="collection-section">
        <h2>MK Collections</h2>
        <p>Explore our newly launched collection</p>
        <div className="collection-layout">
          <div className="left-image"><img src="images/1.png" alt="Diamond Earrings" /></div>
          <div className="right-images">
            <div className="right-image"><img src="images/2.png" alt="Auspicious Jewellery" /></div>
            <div className="right-image"><img src="images/3.png" alt="Daily wear Chains" /></div>
          </div>
        </div>
      </section>

      <section className="perfect-match">
        <h2>Find Your Perfect Match</h2>
        <p>Shop by Categories</p>
        <div className="category-container">
          <div className="category-wrapper">
            <div className="category-card"><img src="images/4.png" alt="Earrings" /></div>
            <p className="category-label">EARRINGS</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card"><img src="images/5.png" alt="Rings" /></div>
            <p className="category-label">FINGER RINGS</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card"><img src="images/6.png" alt="Pendants" /></div>
            <p className="category-label">PENDANTS</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card"><img src="images/7.png" alt="Mangalsutra" /></div>
            <p className="category-label">MANGALSUTRA</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card"><img src="images/8.png" alt="Bracelets" /></div>
            <p className="category-label">BRACELETS</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card"><img src="images/9.png" alt="Bangles" /></div>
            <p className="category-label">BANGLES</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card"><img src="images/10.png" alt="Chains" /></div>
            <p className="category-label">CHAINS</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card"><img src="images/11.png" alt="View All" /></div>
            <p className="category-label">VIEW ALL</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default More;

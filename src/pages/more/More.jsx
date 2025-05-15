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

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-links">
            <h3>Useful Links</h3>
            <ul>
              <li><a href="#">Delivery Information</a></li>
              <li><a href="#">International Shipping</a></li>
              <li><a href="#">Payment Options</a></li>
              <li><a href="#">Track your Order</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Find a Store</a></li>
            </ul>
          </div>
          <div className="footer-info">
            <h3>Information</h3>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Offers & Contest Details</a></li>
              <li><a href="#">Help & FAQs</a></li>
              <li><a href="#">About Us</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>1800-123-4567</p>
            <h4>Chat With Us</h4>
            <p>+91 9876543210</p>
            <div className="footer-icons">
              <a href="#"><img src="images/whatsapp.png" alt="WhatsApp" /></a>
              <a href="#"><img src="images/email.png" alt="Email" /></a>
              <a href="#"><img src="images/chat.png" alt="Chat" /></a>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <span>Social</span>
          <a href="#"><img src="images/insta.png" alt="Instagram" /></a>
          <a href="#"><img src="images/fb.png" alt="Facebook" /></a>
          <a href="#"><img src="images/yt.png" alt="YouTube" /></a>
        </div>
        <div className="footer-bottom">
          <p>© 2025 YourJewels. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default More;

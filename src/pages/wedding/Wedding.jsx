import "./wedding.css"

function Wedding() {
  return (
    <>
      <div>
        <section className="hero-banner">
          <img src="images/157big.png" alt="Into Eternity Collection" />
        </section>

        {/* Handpicked for the Bride Section */}
        <section className="bride-collection">
          <h2>
            <img src="images/158.png" alt="Decoration" className="deco-icon" />
            Handpicked for the Bride
          </h2>
          <div className="bride-grid">
            <div className="bride-card">
              <img src="images/159.png" alt="Necklace Set" />
              <p>Necklace Set</p>
            </div>
            <div className="bride-card">
              <img src="images/160.png" alt="Long Necklace" />
              <p>Long Necklace</p>
            </div>
            <div className="bride-card">
              <img src="images/161.png" alt="Bangles" />
              <p>Bangles</p>
            </div>
            <div className="bride-card">
              <img src="images/162.png" alt="Diamond" />
              <p>Diamond</p>
            </div>
            <div className="bride-card">
              <img src="images/163.png" alt="Mangalsutra" />
              <p>Mangalsutra</p>
            </div>
            <div className="bride-card">
              <img src="images/164.png" alt="Accessories" />
              <p>Accessories</p>
            </div>
          </div>
        </section>

        {/* FOOTER START */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-links">
              <h3>Useful Links</h3>
              <ul>
                <li><a href="/delivery-information.html">Delivery Information</a></li>
                <li><a href="/international-shipping.html">International Shipping</a></li>
                <li><a href="/payment-options.html">Payment Options</a></li>
                <li><a href="/track-order.html">Track your Order</a></li>
                <li><a href="/returns.html">Returns</a></li>
                <li><a href="/find-store.html">Find a Store</a></li>
              </ul>
            </div>

            <div className="footer-info">
              <h3>Information</h3>
              <ul>
                <li><a href="/blog.html">Blog</a></li>
                <li><a href="/offers.html">Offers & Contest Details</a></li>
                <li><a href="/faqs.html">Help & FAQs</a></li>
                <li><a href="/about.html">About Us</a></li>
              </ul>
            </div>

            <div className="footer-contact">
              <h3>Contact Us</h3>
              <p>1800-123-4567</p><br />
              <h4>Chat With Us</h4>
              <p>+91 9876543210</p><br />
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
            <p>&copy; 2025 YourJewels. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Wedding;

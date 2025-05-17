import { Link } from "react-router"
import "./footer.css"
function Footer() {
  return (
    <>
    {/* <!-- FOOTER START --> */}
<footer className="footer">
  <div className="footer-container">
    <div className="footer-links">
      <h3>Useful Links</h3>
      <ul>
        <li><Link to="/delivery-information">Delivery Information</Link></li>
        <li><Link to="/international-shipping">International Shipping</Link></li>
        <li><Link to="/payment-options">Payment Options</Link></li>
        <li><Link to="/track-order">Track your Order</Link></li>
        <li><Link to="/returns">Returns</Link></li>
      </ul>
    </div>

    <div className="footer-info">
      <h3>Information</h3>
      <ul>
        <li><Link to="/offers">Offers & Contest Details</Link></li>
        <li><Link to="/helpfaqs">Help & FAQs</Link></li>
        <li><Link to="/aboutus">About Us</Link></li>
      </ul>
    </div>

    <div className="footer-contact">
      <h3>Contact Us</h3>
      <p>1800-123-4567</p><br/>
      <h4>Chat With Us</h4>
      <p>+91 9876543210</p><br/>
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
    </>
  )
}

export default Footer
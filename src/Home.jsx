function Home() {
  return (
    <>
    <div>
            {/* <!-- Top Header --> */}
<header className="main-header">
    <div className="top-row">
      <div className="logo">
        <img src="mk-jewels/images/tanishq-logo.png" alt="MK Jewels Logo" />
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for Gold Jewellery, Diamond Jewellery, and more..."
        />
        <button><i className="fas fa-search"></i></button>
      </div>
      <div className="header-icons">
            <i className="fas fa-gem"></i>
            <i className="fas fa-store"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-user"></i>
            <div className="cart-icon">
              <i className="fas fa-shopping-bag"></i>
              <span className="badge">0</span>
            </div>
          </div>
    </div>

    {/* <!-- Bottom Navigation --> */}
    <nav className="bottom-nav">
      <a href="index.html">
        <img src="mk-jewels/images/jewellery.svg" alt="All Jewellery" />
        <span>All Jewellery</span>
      </a>
      <a href="gold.html">
        <img src="mk-jewels/images/gold.svg" alt="Gold" />
        <span>Gold</span>
      </a>
      <a href="diamond.html">
        <img src="mk-jewels/images/diamond.svg" alt="Diamond" />
        <span>Diamond</span>
      </a>
      <a href="earrings.html">
        <img src="mk-jewels/images/earrings.svg" alt="Earrings" />
        <span>Earrings</span>
      </a>
      <a href="rings.html">
        <img src="mk-jewels/images/rings.svg" alt="Rings" />
        <span>Rings</span>
      </a>
      <a href="dailywear.html">
        <img src="mk-jewels/images/dailywear.svg" alt="Daily Wear" />
        <span>Daily Wear</span>
      </a>
      <a href="collection.html">
        <img src="mk-jewels/images/collection.svg" alt="Collections" />
        <span>Collections</span>
      </a>
      <a href="wedding.html">
        <img src="mk-jewels/images/wedding.svg" alt="Wedding" />
        <span>Wedding</span>
      </a>
      <a href="gifting.html">
        <img src="mk-jewels/images/gifting.svg" alt="Gifting" />
        <span>Gifting</span>
      </a>
      <a href="more.html">
        <img src="mk-jewels/images/more.svg" alt="More" />
        <span>More</span>
      </a>
    </nav>
  </header>

      {/* <!-- Full-screen image section --> */}
      <section className="full-screen-image">
        <img
          src="mk-jewels/images/cover2.png"
          alt="Pretty in Pink"
        />
        <div className="image-overlay">
          <h1>Pretty in Pink</h1>
          <p>Everyday elegance, wrapped in the prettiest shades of pink</p>
          <button>Shop Now</button>
        </div>
      </section>

      {/* <!-- Tanishq Collections Section --> */}
      <section className="collection-section">
        <h2>Tanishq Collections</h2>
        <p>Explore our newly launched collection</p>
        <div className="collection-layout">
          <div className="left-image">
            <img
              src="C:\Users\MANJOT KAUR\Documents\reactjs\jewellery-project\mk-jewels/images\1.png"
              alt="Diamond Earrings"
            />
          </div>
          <div className="right-mk-jewels/images">
            <div className="right-image">
              <img
                src="C:\Users\MANJOT KAUR\Documents\reactjs\jewellery-project\mk-jewels/images\2.png"
                alt="Auspicious Jewellery"
              />
            </div>
            <div className="right-image">
              <img
                src="C:\Users\MANJOT KAUR\Documents\reactjs\jewellery-project\mk-jewels/images\3.png"
                alt="Daily wear Chains"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="perfect-match">
        <h2>Find Your Perfect Match</h2>
        <p>Shop by Categories</p>
        <div className="category-container">
          <div className="category-wrapper">
            <div className="category-card">
              <img src="mk-jewels/images/4.png" alt="Earrings" />
            </div>
            <p className="category-label">EARRINGS</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card">
              <img src="mk-jewels/images/5.png" alt="Finger Rings" />
            </div>
            <p className="category-label">FINGER RINGS</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card">
              <img src="mk-jewels/images/6.png" alt="Pendants" />
            </div>
            <p className="category-label">PENDANTS</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card">
              <img src="mk-jewels/images/7.png" alt="Mangalsutra" />
            </div>
            <p className="category-label">MANGALSUTRA</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card">
              <img src="mk-jewels/images/8.png" alt="Bracelets" />
            </div>
            <p className="category-label">BRACELETS</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card">
              <img src="mk-jewels/images/9.png" alt="Bangles" />
            </div>
            <p className="category-label">BANGLES</p>
          </div>
          <div className="category-wrapper">
            <div className="category-card">
              <img src="mk-jewels/images/10.png" alt="Chains" />
            </div>
            <p className="category-label">CHAINS</p>
          </div>
           <div className="category-wrapper">
            <div className="category-card">
              <img src="mk-jewels/images/11.png" alt="View All" />
            </div>
            <p className="category-label">VIEW ALL</p>
          </div>
          </div>
      </section>

     <section className="tanishq-world">
  <h2>Tanishq World</h2>
  <p>A companion for every occasion</p>

  <div className="world-grid-custom">
    {/* <!-- Left side --> */}
    <div className="column">
      <div className="world-box short-box">
        <img src="mk-jewels/images/12.png" alt="Wedding"/>
        <div className="box-overlay">Wedding</div>
      </div>
      <div className="world-box tall-box">
        <img src="mk-jewels/images/14.png" alt="Office Wear"/>
        <div className="box-overlay">Gold</div>
      </div>
    </div>

    {/* <!-- Right side --> */}
    <div className="column">
      <div className="world-box tall-box">
        <img src="mk-jewels/images/13.png" alt="Diamond"/>
        <div className="box-overlay">Office Wear </div>
      </div>
      <div className="world-box short-box">
        <img src="mk-jewels/images/15.png" alt="Everyday"/>
        <div className="box-overlay">Everyday</div>
      </div>
    </div>
  </div>
</section>

<section className="new-arrivals">
  <div className="background-container">
    <img src="mk-jewels/images/16.png" alt="Rings Background" className="background-img"/>

    <div className="text-overlay">
      <h2>New Arrivals</h2>
      <div className="badge">💎 500+ New Items</div>
      <p>New Arrivals Dropping Daily, Monday through Friday.<br/>Explore the Latest Launches Now!</p>
    </div>

    {/* <!-- Overlapping Cards --> */}
    <div className="overlap-cards">
      <div className="card">
        <div className="image-container">
          <img src="mk-jewels/images/17.png" alt="Mangalsutra"/>
          <div className="image-text">Mangalsutra</div>
        </div>
      </div>

      <div className="card">
        <div className="image-container">
          <img src="mk-jewels/images/18.png" alt="Pendants"/>
          <div className="image-text">Pendants</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className= "assurance-box">
  <div className="assurance-content">
    <div className="left-box">
      <h2><span className="brand">Tanishq</span> <span className="highlight">Assurance</span></h2>
      <p>Crafted by experts, cherished by you</p>
    </div>
    <div className="right-box">
      <div className="assurance-item">
        <img src="mk-jewels/images/19.png" alt="Quality Craftsmanship"/>
        <p><strong>Quality</strong><br/>Craftsmanship</p>
      </div>
      <div className="assurance-item">
        <img src="mk-jewels/images/20.png" alt="Ethically Sourced"/>
        <p><strong>Ethically</strong><br/>Sourced</p>
      </div>
      <div className="assurance-item">
        <img src="mk-jewels/images/21.png" alt="100% Transparency"/>
        <p><strong>100%</strong><br/>Transparency</p>
      </div>
    </div>
  </div>
</section>

{/* <!-- FOOTER START --> */}
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
      <p>1800-123-4567</p><br/>
      <h4>Chat With Us</h4>
      <p>+91 9876543210</p><br/>
      <div className="footer-icons">
        <a href="#"><img src="mk-jewels/images/whatsapp.png" alt="WhatsApp" /></a>
        <a href="#"><img src="mk-jewels/images/email.png" alt="Email" /></a>
        <a href="#"><img src="mk-jewels/images/chat.png" alt="Chat" /></a>
      </div>
    </div>

  <div className="footer-social">
    <span>Social</span>
    <a href="#"><img src="mk-jewels/images/insta.png" alt="Instagram" /></a>
    <a href="#"><img src="mk-jewels/images/fb.png" alt="Facebook" /></a>
    <a href="#"><img src="mk-jewels/images/yt.png" alt="YouTube" /></a>
  </div>

  <div className="footer-bottom">
    <p>&copy; 2025 YourJewels. All rights reserved.</p>
  </div>
</footer>

    </div>

    </>
  );
}
export default Home;

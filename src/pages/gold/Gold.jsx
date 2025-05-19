import { Link } from "react-router";
import "./gold.css"
function Gold() {
  return (
    <>
    <div>
{/* <!-- Breadcrumb section --> */}
<div className="breadcrumb-top">
  <div className="breadcrumb-container">
    <div className="breadcrumb">
      <span>Home</span>
      <i className="fas fa-chevron-right"></i>
      <span className="active">Gold</span>
    </div>
  </div>
</div>

{/* <!-- Title & Filter Bar --> */}
  <div className="gold-header">
    <div className="gold-header-container">
      <div className="gold-title">
        <h2>Gold</h2>
        <span>(8528 results)</span>
      </div>

      <div className="filter-bar">
        <div className="filter-btn">
          <i className="fas fa-filter"></i> Filter
          <i className="fas fa-chevron-down"></i>
        </div>
        <div className="filter-tag">₹25,000 – ₹50,000</div>
        <div className="filter-tag">+ Women</div>
        <div className="filter-tag">+ Gold Jewellery</div>
        <div className="filter-tag">+ 22</div>
        <div className="show-more">+Show More</div>

        <div className="sort-by">
          Sort By: <strong>Best Matches</strong>
          <i className="fas fa-chevron-down"></i>
        </div>
      </div>
      {/* <!-- Product Grid --> */}
    <div className="product-grid-container">
      <div className="product-grid">
    
    <div className="product-card">
      <Link to="/product/g001">
          <img src="images/22.png" alt="Enticing Petite Drop Earrings" id="g001" />
        </Link>
      <div className="details">
        <div className="title">Lattice Glow Gold Drop Earrings</div>
        <div className="price">₹ 41652</div>
      </div>
    </div>

    <div className="product-card">
      <Link to="/product/g002">
          <img src="images/23.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
      <div className="details">
        <div className="title">Enticing Petite Drop Earrings</div>
        <div className="price">₹ 39900 <span className="stock">Only 1 left!</span></div>
      </div>
    </div>

    <div className="product-card">
      <Link to="/product/g003">
          <img src="images/24.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
      <div className="details">
        <div className="title">Leaf Motif Gold Drop Earrings</div>
        <div className="price">₹ 43109 <span className="stock">Only 1 left!</span></div>
      </div>
    </div>
    {/* <!-- Product 4 --> */}
<div className="product-card">
  <Link to="/product/g004">
          <img src="images/25.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Enchanted Grid Gold Stud Earrings</div>
    <div className="price">₹ 32589</div>
  </div>
</div>

{/* <!-- Product 5 --> */}
<div className="product-card">
  <Link to="/product/g005">
          <img src="images/26.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Radiant Drop Earrings</div>
    <div className="price">₹ 42433 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 6 --> */}
<div className="product-card">
  <Link to="/product/g006">
          <img src="images/27.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Artistry Gold Drop Earrings</div>
    <div className="price">₹ 42216</div>
  </div>
</div>

{/* <!-- Product 7 --> */}
<div className="product-card">
  <Link to="/product/g007">
          <img src="images/28.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Artistry Gold Drop Earrings</div>
    <div className="price">₹ 42216</div>
  </div>
</div>

{/* <!-- Product 8 --> */}
<div className="product-card">
  <Link to="/product/g008">
          <img src="images/29.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Netted Miracles Hoop Earrings</div>
    <div className="price">₹ 37070 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 9 --> */}
<div className="product-card">
  <Link to="/product/g009">
          <img src="images/30.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Surreal Gold Pendant</div>
    <div className="price">₹ 19645</div>
  </div>
</div>

{/* <!-- Product 10 --> */}
<div className="product-card">
  <Link to="/product/g010">
          <img src="images/31.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Minimalistic Leaf Motif Gold Pendant</div>
    <div className="price">₹ 19987</div>
  </div>
</div>

{/* <!-- Product 11 --> */}
<div className="product-card">
  <Link to="/product/g011">
          <img src="images/32.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Glimmering Gold Pendant</div>
    <div className="price">₹ 44425 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 12 --> */}
<div className="product-card">
  <Link to="/product/g012">
          <img src="images/33.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Abstract Ripple Gold Pendant</div>
    <div className="price">₹ 32941</div>
  </div>
</div>

{/* <!-- Product 13 --> */}
<div className="product-card">
  <Link to="/product/g013">
          <img src="images/34.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Golden Flame Pendant</div>
    <div className="price">₹ 13545</div>
  </div>
</div>

{/* <!-- Product 14 --> */}
<div className="product-card">
  <Link to="/product/g014">
          <img src="images/35.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Dainty Gold Pendant with Om and Ganesha Design</div>
    <div className="price">₹ 17414 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 15 --> */}
<div className="product-card">
  <Link to="/product/g015">
          <img src="images/36.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Charming Delicate Pendant</div>
    <div className="price">₹ 14277</div>
  </div>
</div>

{/* <!-- Product 16 --> */}
<div className="product-card">
  <Link to="/product/g016">
          <img src="images/37.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Luminous Charm Pendant</div>
    <div className="price">₹ 28997</div>
  </div>
</div>

{/* <!-- Product 17 --> */}
<div className="product-card">
  <Link to="/product/g017">
          <img src="images/38.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Glorious 22 Karat Yellow Gold Floral Ring</div>
    <div className="price">₹ 41652 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 18 --> */}
<div className="product-card">
  <Link to="/product/g018">
          <img src="images/39.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Unique 22 Karat Yellow Gold Leaf Finger Ring</div>
    <div className="price">₹ 23928</div>
  </div>
</div>

{/* <!-- Product 19 --> */}
<div className="product-card">
  <Link to="/product/g019">
          <img src="images/40.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Pleasing 22 Karat Yellow Gold Leaf Pattern Finger Ring</div>
    <div className="price">₹ 26364</div>
  </div>
</div>

{/* <!-- Product 20 --> */}
<div className="product-card">
  <Link to="/product/g020">
          <img src="images/41.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Surreal Leaf Ring</div>
    <div className="price">₹ 28270</div>
  </div>
</div>

{/* <!-- Product 21 --> */}
<div className="product-card">
  <Link to="/product/g021">
          <img src="images/42.png" alt="Petite Drop Earrings" id="g002" />
        </Link>
  <div className="details">
    <div className="title">Luminous Nature Ring</div>
    <div className="price">₹ 27824</div>
  </div>
</div>
<div className="load-more-btn-container">
  <button className="load-more-btn">Load More</button>
</div>
    </div>

<section className="tq-assurance">
  <h1 className="tq-heading">The MK Assurance</h1>
  <p className="tq-subtext">Crafted by experts, cherished by you.</p>
  <div className="tq-features">
    <div className="tq-feature">
      <img src="images/43.png" alt="Tanishq Exchange"/>
      <p>MK<br/>Exchange</p>
    </div>
    <div className="tq-feature">
      <img src="images/44.png" alt="Purity Guarantee"/>
      <p>Purity<br/>Guarantee</p>
    </div>
    <div className="tq-feature">
      <img src="images/45.png" alt="Easy Replacements"/>
      <p>Easy<br/>Replacements</p>
    </div>
    <div className="tq-feature">
      <img src="images/46.png" alt="Lifetime Maintenance"/>
      <p>Lifetime<br/>Maintenance</p>
    </div>
  </div>
</section>

    </div>

    <div className="gold-collection-info-box">
  <h2>Explore Our Gold Collection</h2>
  <p>Gold has captivated hearts for centuries, and its enduring allure continues today. At Tanishq, we celebrate this timeless tradition with a meticulously crafted collection of <strong>gold jewelry</strong>, offering a piece for every occasion and personal style.</p>

  <h2>Timeless Gold Jewelry for Every Occasion</h2>
  <p>Choose from our diverse range of gold jewelry, where each piece is designed to add a touch of elegance and sophistication to your look:</p>

  <h3>Gold Rings</h3>
  <p>From classic bands and intricate engagement rings to statement cocktail rings, find the perfect symbol of love, commitment, or personal style in our <strong>gold ring design</strong> collection.</p>

  <h3>Gold Earrings</h3>
  <p>Discover a world of possibilities with our stunning collection of gold earrings. Choose from delicate studs to elaborate <strong>bridal gold earrings design</strong>, and find the perfect pair to complement your face shape and personal taste.</p>

  <h3>Gold Necklaces</h3>
  <p>Elevate your look with a beautiful gold necklace. We offer a variety of styles, from delicate chains to statement <strong>women gold necklace design</strong>, and a range of lengths to suit every neckline and outfit.</p>

  <h3>Gold Pendants</h3>
  <p>Express your individuality with a captivating <strong>gold pendant.</strong> Explore classic motifs, modern designs, personalized pieces, or gemstone-encrusted pendants for a touch of sparkle.</p>

  <h3>Gold Chains</h3>
  <p>Add a touch of timeless elegance with a gold chain. Choose from classic styles, bold statement pieces, or delicate <strong>gold chains</strong> for everyday wear.</p>

  <h3>Gold Bangles</h3>
  <p>Embrace tradition and heritage with our exquisite collection of gold bangles. Explore a variety of <strong>gold bangles latest design,</strong> from sleek and modern to intricately crafted bangles inspired by regional motifs</p>

  <h3>Gold Coins</h3>
  <p>Invest in the timeless value of gold with our collection of <strong>gold coins.</strong> These beautiful and auspicious pieces are perfect for gifting or adding to your personal collection.</p>

  <h2>Perfect Gifts for Loved Ones</h2>
  <p>Gold jewelry makes a thoughtful and lasting gift for any occasion. Celebrate birthdays, anniversaries, graduations, or simply show your love and appreciation with a piece from our collection.</p>

  <h2>Explore Nav-raani Collections</h2>
  <p>For an air of royalty, delve into the exquisite Nav-raani collection, featuring handcrafted pieces are a celebration of rich Indian heritage. Each piece is a masterful homage to Indian artistry, allowing you to embrace your inner royalty or gift a piece steeped in history and cultural significance.</p>
</div>
      </div>
      </div>

</div>
    </>
  )
}

export default Gold;
import { Link } from "react-router";
import "./dailywear.css"
function Dailywear() {
  return (
    <>

{/* <!-- Breadcrumb section --> */}
<div className="breadcrumb-top">
  <div className="breadcrumb-container">
    <div className="breadcrumb">
      <span>Home</span>
      <i className="fas fa-chevron-right"></i>
      <span className="active">GlamDays</span>
    </div>
  </div>
</div>

{/* <!-- Title & Filter Bar --> */}
  <div className="dailywear-header">
    <div className="dailywear-header-container">
      <div className="dailywear-title">
        <h2>GlamDays</h2>
        <span>(3107 results)</span>
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
      <Link to="/product/g085">
          <img src="images/111.png" alt="Enticing Petite Drop Earrings" id="g085" />
        </Link>
      <div className="details">
        <div className="title">Hexa Spark Diamond Stud Earrings</div>
        <div className="price">₹ 30093</div>
      </div>
    </div>

    <div className="product-card">
      <Link to="/product/g086">
          <img src="images/112.png" alt="Petite Drop Earrings" id="g086" />
        </Link>
      <div className="details">
        <div className="title">Twinkle Dome Diamond Jhumka Earrings for Kids</div>
        <div className="price">₹ 63021 <span className="stock">Only 1 left!</span></div>
      </div>
    </div>

    <div className="product-card">
      <Link to="/product/g087">
          <img src="images/113.png" alt="Petite Drop Earrings" id="g087" />
        </Link>
      <div className="details">
        <div className="title">Floral Flare Gold Stud Earrings</div>
        <div className="price">₹ 34791 <span className="stock">Only 1 left!</span></div>
      </div>
    </div>
    {/* <!-- Product 4 --> */}
<div className="product-card">
  <Link to="/product/g088">
          <img src="images/114.png" alt="Petite Drop Earrings" id="g088" />
        </Link>
  <div className="details">
    <div className="title">Scalloped Shine Gold Drop Earring</div>
    <div className="price">₹ 45810</div>
  </div>
</div>

{/* <!-- Product 5 --> */}
<div className="product-card">
  <Link to="/product/g089">
          <img src="images/115.png" alt="Petite Drop Earrings" id="g089" />
        </Link>
  <div className="details">
    <div className="title">Breathtaking Onyx Stone Diamond Stud Earrings for Kids</div>
    <div className="price">₹ 41423 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 6 --> */}
<div className="product-card">
  <Link to="/product/g090">
          <img src="images/116.png" alt="Petite Drop Earrings" id="g090" />
        </Link>
  <div className="details">
    <div className="title">Floral Swing Gold Drop Earrings</div>
    <div className="price">₹ 53668</div>
  </div>
</div>

{/* <!-- Product 7 --> */}
<div className="product-card">
  <Link to="/product/g091">
          <img src="images/117.png" alt="Petite Drop Earrings" id="g091" />
        </Link>
  <div className="details">
    <div className="title">Radiant Rhombus Gold Stud Earrings</div>
    <div className="price">₹ 78012</div>
  </div>
</div>

{/* <!-- Product 8 --> */}
<div className="product-card">
  <Link to="/product/g092">
          <img src="images/118.png" alt="Petite Drop Earrings" id="g092" />
        </Link>
  <div className="details">
    <div className="title">Concentric Beads Drop Earrings</div>
    <div className="price">₹ 50438 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 9 --> */}
<div className="product-card">
  <Link to="/product/g093">
          <img src="images/119.png" alt="Petite Drop Earrings" id="g093" />
        </Link>
  <div className="details">
    <div className="title">Surreal Diamond Stud Earrings</div>
    <div className="price">₹ 21359</div>
  </div>
</div>

{/* <!-- Product 10 --> */}
<div className="product-card">
  <Link to="/product/g094">
          <img src="images/120.png" alt="Petite Drop Earrings" id="g094" />
        </Link>
  <div className="details">
    <div className="title">Enchanting Floral Diamond Stud Earrings for Kids</div>
    <div className="price">₹ 27796</div>
  </div>
</div>

{/* <!-- Product 11 --> */}
<div className="product-card">
  <Link to="/product/g095">
          <img src="images/121.png" alt="Petite Drop Earrings" id="g095" />
        </Link>
  <div className="details">
    <div className="title">Radiant Geometric Diamond Stud Earrings</div>
    <div className="price">₹ 30205 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 12 --> */}
<div className="product-card">
  <Link to="/product/g096">
          <img src="images/122.png" alt="Petite Drop Earrings" id="g096" />
        </Link>
  <div className="details">
    <div className="title">Glorious Flower Diamond Stud Earrings for Kids</div>
    <div className="price">₹ 28626</div>
  </div>
</div>

{/* <!-- Product 13 --> */}
<div className="product-card">
  <Link to="/product/g097">
          <img src="images/123.png" alt="Petite Drop Earrings" id="g097" />
        </Link>
  <div className="details">
    <div className="title">Dazzling Floral Diamond Stud Earrings</div>
    <div className="price">₹ 27565</div>
  </div>
</div>

{/* <!-- Product 14 --> */}
<div className="product-card">
  <Link to="/product/g098">
          <img src="images/124.png" alt="Petite Drop Earrings" id="g098" />
        </Link>
  <div className="details">
    <div className="title">Flawless Floral Diamond Stud Earrings</div>
    <div className="price">₹ 31344 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 15 --> */}
<div className="product-card">
  <Link to="/product/g099">
          <img src="images/125.png" alt="Petite Drop Earrings" id="g099" />
        </Link>
  <div className="details">
    <div className="title">Luminous Elegance Diamond Drop Earrings</div>
    <div className="price">₹ 37507</div>
  </div>
</div>

{/* <!-- Product 16 --> */}
<div className="product-card">
  <Link to="/product/g100">
          <img src="images/126.png" alt="Petite Drop Earrings" id="g100" />
        </Link>
  <div className="details">
    <div className="title">Spiral Swirl Gold Stud Earrings</div>
    <div className="price">₹ 47242</div>
  </div>
</div>

{/* <!-- Product 17 --> */}
<div className="product-card">
  <Link to="/product/g101">
          <img src="images/127.png" alt="Petite Drop Earrings" id="g101" />
        </Link>
  <div className="details">
    <div className="title">Tulip Loop Gold Stud Earrings</div>
    <div className="price">₹ 31185 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 18 --> */}
<div className="product-card">
  <Link to="/product/g102">
          <img src="images/128.png" alt="Petite Drop Earrings" id="g102" />
        </Link>
  <div className="details">
    <div className="title">Golden Ruffles Gold Drop Earrings</div>
    <div className="price">₹ 182931</div>
  </div>
</div>

{/* <!-- Product 19 --> */}
<div className="product-card">
  <Link to="/product/g103">
          <img src="images/129.png" alt="Petite Drop Earrings" id="g103" />
        </Link>
  <div className="details">
    <div className="title">Radiant Halo Gold Drop Earrings</div>
    <div className="price">₹ 164896</div>
  </div>
</div>

{/* <!-- Product 20 --> */}
<div className="product-card">
  <Link to="/product/g104">
          <img src="images/130.png" alt="Petite Drop Earrings" id="g104" />
        </Link>
  <div className="details">
    <div className="title">Textured Arc Gold Stud Earrings</div>
    <div className="price">₹ 59856</div>
  </div>
</div>

{/* <!-- Product 21 --> */}
<div className="product-card">
  <Link to="/product/g105">
          <img src="images/131.png" alt="Petite Drop Earrings" id="g105" />
        </Link>
  <div className="details">
    <div className="title">Petal Heart Gold Stud Earrings</div>
    <div className="price">₹ 27471</div>
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

    <div className="dailywear-collection-info-box">
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

    </>
  )
}

export default Dailywear
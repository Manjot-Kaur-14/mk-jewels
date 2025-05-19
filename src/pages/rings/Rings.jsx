import { Link } from "react-router";
import "./rings.css"

function Rings() {
  return (
    <>
{/* <!-- Breadcrumb section --> */}
<div class="breadcrumb-top">
  <div class="breadcrumb-container">
    <div class="breadcrumb">
      <span>Home</span>
      <i class="fas fa-chevron-right"></i>
      <span class="active">Rings</span>
    </div>
  </div>
</div>

{/* <!-- Title & Filter Bar --> */}
  <div class="rings-header">
    <div class="rings-header-container">
      <div class="rings-title">
        <h2>Rings</h2>
        <span>(4601 results)</span>
      </div>

      <div class="filter-bar">
        <div class="filter-btn">
          <i class="fas fa-filter"></i> Filter
          <i class="fas fa-chevron-down"></i>
        </div>
        <div class="filter-tag">₹25,000 – ₹50,000</div>
        <div class="filter-tag">+ Women</div>
        <div class="filter-tag">+ Gold Jewellery</div>
        <div class="filter-tag">+ 22</div>
        <div class="show-more">+Show More</div>

        <div class="sort-by">
          Sort By: <strong>Best Matches</strong>
          <i class="fas fa-chevron-down"></i>
        </div>
      </div>

{/* <!-- Product Grid --> */}
    <div className="product-grid-container">
      <div className="product-grid">
    
    <div className="product-card">
      <Link to="/product/g064">
          <img src="images/90.png" alt="Enticing Petite Drop Earrings" id="g064" />
        </Link>
      <div className="details">
        <div className="title">Hexa Spark Diamond Stud Earrings</div>
        <div className="price">₹ 30093</div>
      </div>
    </div>

    <div className="product-card">
      <Link to="/product/g065">
          <img src="images/91.png" alt="Petite Drop Earrings" id="g065" />
        </Link>
      <div className="details">
        <div className="title">Twinkle Dome Diamond Jhumka Earrings for Kids</div>
        <div className="price">₹ 63021 <span className="stock">Only 1 left!</span></div>
      </div>
    </div>

    <div className="product-card">
      <Link to="/product/g066">
          <img src="images/92.png" alt="Petite Drop Earrings" id="g066" />
        </Link>
      <div className="details">
        <div className="title">Floral Flare Gold Stud Earrings</div>
        <div className="price">₹ 34791 <span className="stock">Only 1 left!</span></div>
      </div>
    </div>
    {/* <!-- Product 4 --> */}
<div className="product-card">
  <Link to="/product/g067">
          <img src="images/93.png" alt="Petite Drop Earrings" id="g067" />
        </Link>
  <div className="details">
    <div className="title">Scalloped Shine Gold Drop Earring</div>
    <div className="price">₹ 45810</div>
  </div>
</div>

{/* <!-- Product 5 --> */}
<div className="product-card">
  <Link to="/product/g068">
          <img src="images/94.png" alt="Petite Drop Earrings" id="g068" />
        </Link>
  <div className="details">
    <div className="title">Breathtaking Onyx Stone Diamond Stud Earrings for Kids</div>
    <div className="price">₹ 41423 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 6 --> */}
<div className="product-card">
  <Link to="/product/g069">
          <img src="images/95.png" alt="Petite Drop Earrings" id="g069" />
        </Link>
  <div className="details">
    <div className="title">Floral Swing Gold Drop Earrings</div>
    <div className="price">₹ 53668</div>
  </div>
</div>

{/* <!-- Product 7 --> */}
<div className="product-card">
  <Link to="/product/g070">
          <img src="images/96.png" alt="Petite Drop Earrings" id="g070" />
        </Link>
  <div className="details">
    <div className="title">Radiant Rhombus Gold Stud Earrings</div>
    <div className="price">₹ 78012</div>
  </div>
</div>

{/* <!-- Product 8 --> */}
<div className="product-card">
  <Link to="/product/g071">
          <img src="images/97.png" alt="Petite Drop Earrings" id="g071" />
        </Link>
  <div className="details">
    <div className="title">Concentric Beads Drop Earrings</div>
    <div className="price">₹ 50438 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 9 --> */}
<div className="product-card">
  <Link to="/product/g072">
          <img src="images/98.png" alt="Petite Drop Earrings" id="g072" />
        </Link>
  <div className="details">
    <div className="title">Surreal Diamond Stud Earrings</div>
    <div className="price">₹ 21359</div>
  </div>
</div>

{/* <!-- Product 10 --> */}
<div className="product-card">
  <Link to="/product/g073">
          <img src="images/99.png" alt="Petite Drop Earrings" id="g073" />
        </Link>
  <div className="details">
    <div className="title">Enchanting Floral Diamond Stud Earrings for Kids</div>
    <div className="price">₹ 27796</div>
  </div>
</div>

{/* <!-- Product 11 --> */}
<div className="product-card">
  <Link to="/product/g074">
          <img src="images/100.png" alt="Petite Drop Earrings" id="g074" />
        </Link>
  <div className="details">
    <div className="title">Radiant Geometric Diamond Stud Earrings</div>
    <div className="price">₹ 30205 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 12 --> */}
<div className="product-card">
  <Link to="/product/g075">
          <img src="images/101.png" alt="Petite Drop Earrings" id="g075" />
        </Link>
  <div className="details">
    <div className="title">Glorious Flower Diamond Stud Earrings for Kids</div>
    <div className="price">₹ 28626</div>
  </div>
</div>

{/* <!-- Product 13 --> */}
<div className="product-card">
  <Link to="/product/g076">
          <img src="images/102.png" alt="Petite Drop Earrings" id="g076" />
        </Link>
  <div className="details">
    <div className="title">Dazzling Floral Diamond Stud Earrings</div>
    <div className="price">₹ 27565</div>
  </div>
</div>

{/* <!-- Product 14 --> */}
<div className="product-card">
  <Link to="/product/g077">
          <img src="images/103.png" alt="Petite Drop Earrings" id="g077" />
        </Link>
  <div className="details">
    <div className="title">Flawless Floral Diamond Stud Earrings</div>
    <div className="price">₹ 31344 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 15 --> */}
<div className="product-card">
  <Link to="/product/g078">
          <img src="images/104.png" alt="Petite Drop Earrings" id="g078" />
        </Link>
  <div className="details">
    <div className="title">Luminous Elegance Diamond Drop Earrings</div>
    <div className="price">₹ 37507</div>
  </div>
</div>

{/* <!-- Product 16 --> */}
<div className="product-card">
  <Link to="/product/g079">
          <img src="images/105.png" alt="Petite Drop Earrings" id="g079" />
        </Link>
  <div className="details">
    <div className="title">Spiral Swirl Gold Stud Earrings</div>
    <div className="price">₹ 47242</div>
  </div>
</div>

{/* <!-- Product 17 --> */}
<div className="product-card">
  <Link to="/product/g080">
          <img src="images/106.png" alt="Petite Drop Earrings" id="g080" />
        </Link>
  <div className="details">
    <div className="title">Tulip Loop Gold Stud Earrings</div>
    <div className="price">₹ 31185 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 18 --> */}
<div className="product-card">
  <Link to="/product/g081">
          <img src="images/107.png" alt="Petite Drop Earrings" id="g081" />
        </Link>
  <div className="details">
    <div className="title">Golden Ruffles Gold Drop Earrings</div>
    <div className="price">₹ 182931</div>
  </div>
</div>

{/* <!-- Product 19 --> */}
<div className="product-card">
  <Link to="/product/g082">
          <img src="images/108.png" alt="Petite Drop Earrings" id="g082" />
        </Link>
  <div className="details">
    <div className="title">Radiant Halo Gold Drop Earrings</div>
    <div className="price">₹ 164896</div>
  </div>
</div>

{/* <!-- Product 20 --> */}
<div className="product-card">
  <Link to="/product/g083">
          <img src="images/109.png" alt="Petite Drop Earrings" id="g083" />
        </Link>
  <div className="details">
    <div className="title">Textured Arc Gold Stud Earrings</div>
    <div className="price">₹ 59856</div>
  </div>
</div>

{/* <!-- Product 21 --> */}
<div className="product-card">
  <Link to="/product/g084">
          <img src="images/110.png" alt="Petite Drop Earrings" id="g084" />
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

    <div class="rings-collection-info-box">
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

export default Rings;
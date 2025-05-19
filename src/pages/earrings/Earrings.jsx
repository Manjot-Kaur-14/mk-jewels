import { Link } from "react-router";
import "./earrings.css"

function Earrings() {
  return (
    <>

{/* <!-- Breadcrumb section --> */}
<div className="breadcrumb-top">
  <div className="breadcrumb-container">
    <div className="breadcrumb">
      <span>Home</span>
      <i className="fas fa-chevron-right"></i>
      <span className="active">Earrings</span>
    </div>
  </div>
</div>

{/* <!-- Title & Filter Bar --> */}
  <div className="earrings-header">
    <div className="earrings-header-container">
      <div className="earrings-title">
        <h2>Earrings</h2>
        <span>(4843 results)</span>
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
      <Link to="/product/g043">
          <img src="images/68.png" alt="Enticing Petite Drop Earrings" id="g043" />
        </Link>
      <div className="details">
        <div className="title">Hexa Spark Diamond Stud Earrings</div>
        <div className="price">₹ 30093</div>
      </div>
    </div>

    <div className="product-card">
      <Link to="/product/g044">
          <img src="images/69.png" alt="Petite Drop Earrings" id="g044" />
        </Link>
      <div className="details">
        <div className="title">Twinkle Dome Diamond Jhumka Earrings for Kids</div>
        <div className="price">₹ 63021 <span className="stock">Only 1 left!</span></div>
      </div>
    </div>

    <div className="product-card">
      <Link to="/product/g045">
          <img src="images/70.png" alt="Petite Drop Earrings" id="g045" />
        </Link>
      <div className="details">
        <div className="title">Floral Flare Gold Stud Earrings</div>
        <div className="price">₹ 34791 <span className="stock">Only 1 left!</span></div>
      </div>
    </div>
    {/* <!-- Product 4 --> */}
<div className="product-card">
  <Link to="/product/g046">
          <img src="images/71.png" alt="Petite Drop Earrings" id="g046" />
        </Link>
  <div className="details">
    <div className="title">Scalloped Shine Gold Drop Earring</div>
    <div className="price">₹ 45810</div>
  </div>
</div>

{/* <!-- Product 5 --> */}
<div className="product-card">
  <Link to="/product/g047">
          <img src="images/72.png" alt="Petite Drop Earrings" id="g047" />
        </Link>
  <div className="details">
    <div className="title">Breathtaking Onyx Stone Diamond Stud Earrings for Kids</div>
    <div className="price">₹ 41423 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 6 --> */}
<div className="product-card">
  <Link to="/product/g048">
          <img src="images/73.png" alt="Petite Drop Earrings" id="g048" />
        </Link>
  <div className="details">
    <div className="title">Floral Swing Gold Drop Earrings</div>
    <div className="price">₹ 53668</div>
  </div>
</div>

{/* <!-- Product 7 --> */}
<div className="product-card">
  <Link to="/product/g049">
          <img src="images/74.png" alt="Petite Drop Earrings" id="g049" />
        </Link>
  <div className="details">
    <div className="title">Radiant Rhombus Gold Stud Earrings</div>
    <div className="price">₹ 78012</div>
  </div>
</div>

{/* <!-- Product 8 --> */}
<div className="product-card">
  <Link to="/product/g050">
          <img src="images/75.png" alt="Petite Drop Earrings" id="g050" />
        </Link>
  <div className="details">
    <div className="title">Concentric Beads Drop Earrings</div>
    <div className="price">₹ 50438 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 9 --> */}
<div className="product-card">
  <Link to="/product/g051">
          <img src="images/76.png" alt="Petite Drop Earrings" id="g051" />
        </Link>
  <div className="details">
    <div className="title">Surreal Diamond Stud Earrings</div>
    <div className="price">₹ 21359</div>
  </div>
</div>

{/* <!-- Product 10 --> */}
<div className="product-card">
  <Link to="/product/g052">
          <img src="images/77.png" alt="Petite Drop Earrings" id="g052" />
        </Link>
  <div className="details">
    <div className="title">Enchanting Floral Diamond Stud Earrings for Kids</div>
    <div className="price">₹ 27796</div>
  </div>
</div>

{/* <!-- Product 11 --> */}
<div className="product-card">
  <Link to="/product/g053">
          <img src="images/78.png" alt="Petite Drop Earrings" id="g053" />
        </Link>
  <div className="details">
    <div className="title">Radiant Geometric Diamond Stud Earrings</div>
    <div className="price">₹ 30205 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 12 --> */}
<div className="product-card">
  <Link to="/product/g054">
          <img src="images/79.png" alt="Petite Drop Earrings" id="g054" />
        </Link>
  <div className="details">
    <div className="title">Glorious Flower Diamond Stud Earrings for Kids</div>
    <div className="price">₹ 28626</div>
  </div>
</div>

{/* <!-- Product 13 --> */}
<div className="product-card">
  <Link to="/product/g055">
          <img src="images/80.png" alt="Petite Drop Earrings" id="g055" />
        </Link>
  <div className="details">
    <div className="title">Dazzling Floral Diamond Stud Earrings</div>
    <div className="price">₹ 27565</div>
  </div>
</div>

{/* <!-- Product 14 --> */}
<div className="product-card">
  <Link to="/product/g056">
          <img src="images/81.png" alt="Petite Drop Earrings" id="g056" />
        </Link>
  <div className="details">
    <div className="title">Flawless Floral Diamond Stud Earrings</div>
    <div className="price">₹ 31344 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 15 --> */}
<div className="product-card">
  <Link to="/product/g057">
          <img src="images/82.png" alt="Petite Drop Earrings" id="g057" />
        </Link>
  <div className="details">
    <div className="title">Luminous Elegance Diamond Drop Earrings</div>
    <div className="price">₹ 37507</div>
  </div>
</div>

{/* <!-- Product 16 --> */}
<div className="product-card">
  <Link to="/product/g058">
          <img src="images/83.png" alt="Petite Drop Earrings" id="g058" />
        </Link>
  <div className="details">
    <div className="title">Spiral Swirl Gold Stud Earrings</div>
    <div className="price">₹ 47242</div>
  </div>
</div>

{/* <!-- Product 17 --> */}
<div className="product-card">
  <Link to="/product/g059">
          <img src="images/84.png" alt="Petite Drop Earrings" id="g059" />
        </Link>
  <div className="details">
    <div className="title">Tulip Loop Gold Stud Earrings</div>
    <div className="price">₹ 31185 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 18 --> */}
<div className="product-card">
  <Link to="/product/g060">
          <img src="images/85.png" alt="Petite Drop Earrings" id="g060" />
        </Link>
  <div className="details">
    <div className="title">Golden Ruffles Gold Drop Earrings</div>
    <div className="price">₹ 182931</div>
  </div>
</div>

{/* <!-- Product 19 --> */}
<div className="product-card">
  <Link to="/product/g061">
          <img src="images/86.png" alt="Petite Drop Earrings" id="g061" />
        </Link>
  <div className="details">
    <div className="title">Radiant Halo Gold Drop Earrings</div>
    <div className="price">₹ 164896</div>
  </div>
</div>

{/* <!-- Product 20 --> */}
<div className="product-card">
  <Link to="/product/g062">
          <img src="images/87.png" alt="Petite Drop Earrings" id="g062" />
        </Link>
  <div className="details">
    <div className="title">Textured Arc Gold Stud Earrings</div>
    <div className="price">₹ 59856</div>
  </div>
</div>

{/* <!-- Product 21 --> */}
<div className="product-card">
  <Link to="/product/g063">
          <img src="images/88.png" alt="Petite Drop Earrings" id="g063" />
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

    <div className="earrings-collection-info-box">
  <h2>Rings: A Circle of Stories</h2>
  <p>Rings adorn the fingers of women and men alike, marking life's momentous occasions and whispering tales of love, achievement, and self-discovery. At Tanishq, we believe every ring tells a story, and our collection is specially crafted for you to celebrate yours. Explore our platform to buy gold rings, and diamond rings, effortlessly. Whether you're searching for engagement rings, men's rings, or diamond engagement rings, our array of exquisite designs ensures there's something for every occasion and preference.</p>

  <h2>Earrings for All Occasions:</h2>
  <p>Going out for a night out, a casual get-together, or just a normal day at the office, no matter your vibe, there's a pair of Tanishq earrings waiting to become your signature piece. Unleash your creativity and embrace the #MKLOOK with our stunning and fashionable earrings. </p>

  <h3>Reimagine Your Old Gold with Tanishq's Exchange Program</h3>
  <p>Tanishq's Exchange Program enables customers to trade in their old gold from any jeweller for newer designs, at the same time ensuring they receive the best possible value for their gold.</p>

  <h3>Gold Earrings</h3>
  <p>Discover a world of possibilities with our stunning collection of gold earrings. Choose from delicate studs to elaborate <strong>bridal gold earrings design</strong>, and find the perfect pair to complement your face shape and personal taste.</p>


  <h2>Perfect Gifts for Loved Ones</h2>
  <p>Gold jewelry makes a thoughtful and lasting gift for any occasion. Celebrate birthdays, anniversaries, graduations, or simply show your love and appreciation with a piece from our collection.</p>

</div>
</div>
      </div>

    </>
  )
}

export default Earrings;
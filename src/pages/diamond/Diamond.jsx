import { Link } from "react-router";
import "./diamond.css"
function Diamond() {
  return (
    <>

{/* <!-- Breadcrumb section --> */}
<div className="breadcrumb-top">
  <div className="breadcrumb-container">
    <div className="breadcrumb">
      <span>Home</span>
      <i className="fas fa-chevron-right"></i>
      <span className="active">Diamond</span>
    </div>
  </div>
</div>

{/* <!-- Title & Filter Bar --> */}
  <div className="diamond-header">
    <div className="diamond-header-container">
      <div className="diamond-title">
        <h2>Diamond</h2>
        <span>(7882 results)</span>
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
      <Link to="/product/g022">
          <img src="images/47.png" alt="Enticing Petite Drop Earrings" id="g022" />
        </Link>
      <div className="details">
        <div className="title">Glamorous Floral Diamond Stud Earrings with Rock Crystal</div>
        <div className="price">₹ 37555</div>
      </div>
    </div>

    <div className="product-card">
      <Link to="/product/g023">
          <img src="images/48.png" alt="Petite Drop Earrings" id="g023" />
        </Link>
      <div className="details">
        <div className="title">Modish Links Diamond Ring</div>
        <div className="price">₹ 34463 <span className="stock">Only 1 left!</span></div>
      </div>
    </div>

    <div className="product-card">
      <Link to="/product/g024">
          <img src="images/49.png" alt="Petite Drop Earrings" id="g024" />
        </Link>
      <div className="details">
        <div className="title">Geometric Versatility Diamond Drop Earrings</div>
        <div className="price">₹ 94439 <span className="stock">Only 1 left!</span></div>
      </div>
    </div>
    {/* <!-- Product 4 --> */}
<div className="product-card">
  <Link to="/product/g025">
          <img src="images/50.png" alt="Petite Drop Earrings" id="g025" />
        </Link>
  <div className="details">
    <div className="title">Shimmering Links Diamond Drop Earrings</div>
    <div className="price">₹ 104579</div>
  </div>
</div>

{/* <!-- Product 5 --> */}
<div className="product-card">
  <Link to="/product/g026">
          <img src="images/51.png" alt="Petite Drop Earrings" id="g026" />
        </Link>
  <div className="details">
    <div className="title">Convertible Chic Diamond Drop Earrings</div>
    <div className="price">₹ 128741 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 6 --> */}
<div className="product-card">
  <Link to="/product/g027">
          <img src="images/52.png" alt="Petite Drop Earrings" id="g027" />
        </Link>
  <div className="details">
    <div className="title">Teardrop Shaped Yellow Gold and Diamond Pendant</div>
    <div className="price">₹ 21883</div>
  </div>
</div>

{/* <!-- Product 7 --> */}
<div className="product-card">
  <Link to="/product/g028">
          <img src="images/53.png" alt="Petite Drop Earrings" id="g028" />
        </Link>
  <div className="details">
    <div className="title">Dazzling Diamond Mangalsutra</div>
    <div className="price">₹ 74983</div>
  </div>
</div>

{/* <!-- Product 8 --> */}
<div className="product-card">
  <Link to="/product/g029">
          <img src="images/54.png" alt="Petite Drop Earrings" id="g029" />
        </Link>
  <div className="details">
    <div className="title">Floral Swirl Diamond Mangalsutra</div>
    <div className="price">₹ 121943 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 9 --> */}
<div className="product-card">
  <Link to="/product/g030">
          <img src="images/55.png" alt="Petite Drop Earrings" id="g030" />
        </Link>
  <div className="details">
    <div className="title">Luxe Curves Diamond Bangle</div>
    <div className="price">₹ 187356</div>
  </div>
</div>

{/* <!-- Product 10 --> */}
<div className="product-card">
  <Link to="/product/g031">
          <img src="images/56.png" alt="Petite Drop Earrings" id="g031" />
        </Link>
  <div className="details">
    <div className="title">Woven Sparkles Tennis Bracelet</div>
    <div className="price">₹ 285218</div>
  </div>
</div>

{/* <!-- Product 11 --> */}
<div className="product-card">
  <Link to="/product/g032">
          <img src="images/57.png" alt="Petite Drop Earrings" id="g032" />
        </Link>
  <div className="details">
    <div className="title">Sparkling Boxes Tennis Bracelet"</div>
    <div className="price">₹ 296510 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 12 --> */}
<div className="product-card">
  <Link to="/product/g033">
          <img src="images/58.png" alt="Petite Drop Earrings" id="g033" />
        </Link>
  <div className="details">
    <div className="title">Little Bloom Diamond Stud Earrings for Kids</div>
    <div className="price">₹ 28690</div>
  </div>
</div>

{/* <!-- Product 13 --> */}
<div className="product-card">
  <Link to="/product/g034">
          <img src="images/59.png" alt="Petite Drop Earrings" id="g034" />
        </Link>
  <div className="details">
    <div className="title">Little Glam Diamond Stud Earrings for Kids</div>
    <div className="price">₹ 31150</div>
  </div>
</div>

{/* <!-- Product 14 --> */}
<div className="product-card">
  <Link to="/product/g035">
          <img src="images/60.png" alt="Petite Drop Earrings" id="g035" />
        </Link>
  <div className="details">
    <div className="title">Floral Circle Diamond Drop Earrings</div>
    <div className="price">₹ 46671 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 15 --> */}
<div className="product-card">
  <Link to="/product/g036">
          <img src="images/61.png" alt="Petite Drop Earrings" id="g036" />
        </Link>
  <div className="details">
    <div className="title">Sparkling Diamond Stud Earrings</div>
    <div className="price">₹ 42747</div>
  </div>
</div>

{/* <!-- Product 16 --> */}
<div className="product-card">
  <Link to="/product/g037">
          <img src="images/62.png" alt="Petite Drop Earrings" id="g037" />
        </Link>
  <div className="details">
    <div className="title">Vintage Charm Diamond Finger Ring</div>
    <div className="price">₹ 50960</div>
  </div>
</div>

{/* <!-- Product 17 --> */}
<div className="product-card">
  <Link to="/product/g038">
          <img src="images/63.png" alt="Petite Drop Earrings" id="g038" />
        </Link>
  <div className="details">
    <div className="title">Dazzling Halo Diamond Finger Ring</div>
    <div className="price">₹ 43610 <span className="stock">Only 1 left!</span></div>
  </div>
</div>

{/* <!-- Product 18 --> */}
<div className="product-card">
  <Link to="/product/g039">
          <img src="images/64.png" alt="Petite Drop Earrings" id="g039" />
        </Link>
  <div className="details">
    <div className="title">Blush Radiance Diamond Finger Ring</div>
    <div className="price">₹ 33837</div>
  </div>
</div>

{/* <!-- Product 19 --> */}
<div className="product-card">
  <Link to="/product/g040">
          <img src="images/65.png" alt="Petite Drop Earrings" id="g040" />
        </Link>
  <div className="details">
    <div className="title">Crossover Diamond Finger Ring</div>
    <div className="price">₹ 52125</div>
  </div>
</div>

{/* <!-- Product 20 --> */}
<div className="product-card">
  <Link to="/product/g041">
          <img src="images/66.png" alt="Petite Drop Earrings" id="g041" />
        </Link>
  <div className="details">
    <div className="title">Sparkling Embrace Diamond Finger Ring</div>
    <div className="price">₹ 55001</div>
  </div>
</div>

{/* <!-- Product 21 --> */}
<div className="product-card">
  <Link to="/product/g042">
          <img src="images/67.png" alt="Petite Drop Earrings" id="g042" />
        </Link>
  <div className="details">
    <div className="title">Enchanting Floral Diamond Finger Ring</div>
    <div className="price">₹ 52994</div>
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
    <div className="diamond-collection-info-box">
  <h2>Unleash Your Inner Sparkle With MK Diamond Touch</h2>
  <p>Diamonds- the timeless masterpiece that reflects lasting beauty in every facet. MK celebrates every story of elegance and love where the boundaries of luxury are redrawn. We unveil a dazzling world of diamond collections, meticulously crafted to capture every heart's desire. We curate only <strong>authentic diamond rings, natural diamond necklaces, and real diamond mangalsutras,</strong> each boasting the captivating magic of all tastes and styles. Whether you seek the grandeur of an affluent diamond masterpiece or the delicate charm of an<strong> affordable diamond ring,</strong> we have the true value of these precious stones.</p>

  <h2>Explore Our Exquisite Collection</h2>
  <p>At MK, we offer a vast array of <strong>authentic diamonds </strong> that reflect the true essence of sophistication. Whether you are searching for a timeless piece to mark a special occasion or a stunning everyday wear accessory, our collection caters to all tastes and styles.</p>

  <h3>Jewellery for Every Moment</h3>
  <p><strong>Casual elegance collection:</strong>  From a delicate pair of studs to a shimmering pendant necklace, our casual wear collection offers a piece for every mood and occasion ensuring that only natural diamonds dazzle as you carry them. Discover flawless diamond pieces that gracefully elevate you, enhancing your natural beauty with an elegant touch of sophistication.</p>

  <h3>ENHANCE YOUR ONLINE DIAMOND SHOPPING JOURNEY WITH MK</h3>
  <p>Explore our extensive collections at MK featuring everything from timeless solitaires to contemporary masterpieces, each curated with trust to celebrate sophistication and your unique style. With MK's secure transactions, expert guidance, and unwavering commitment to quality, you can embrace the allure of genuine beauty and let our diamonds be a part of you forever. Discover your perfect diamond online exclusively at MK.</p>

  <h3>Reimagine Your Old Gold with Tanishq's Exchange Program</h3>
  <p>MK's Exchange Program enables customers to trade in their old gold from any jeweller for newer designs, at the same time ensuring they receive the best possible value for their gold.</p>

  <h3>Diamond Pendants</h3>
  <p>Express your individuality with a captivating <strong>diamond pendant.</strong> Explore classic motifs, modern designs, personalized pieces, or gemstone-encrusted pendants for a touch of sparkle.</p>

  <h3>Diamond Chains</h3>
  <p>Add a touch of timeless elegance with a diamond chain. Choose from classic styles, bold statement pieces, or delicate <strong>diamond chains</strong> for everyday wear.</p>

  <h2>Perfect Gifts for Loved Ones</h2>
  <p>Diamond jewelry makes a thoughtful and lasting gift for any occasion. Celebrate birthdays, anniversaries, graduations, or simply show your love and appreciation with a piece from our collection.</p>

</div>
</div>
</div>


    </>
  )
}

export default Diamond;
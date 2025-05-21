import { Link } from "react-router";
import "./home.css";
function Home() {
  return (
    <>
      <div>
        {/* <!-- Full-screen image section --> */}
        <section className="full-screen-image">
          <img src="images/cover1.png" alt="Pretty in Pink" />
        </section>

        {/* <!-- Tanishq Collections Section --> */}
        <section className="collection-section">
          <h2>MK Collections</h2>
          <p>Explore our newly launched collection</p>
          <div className="collection-layout">
            <div className="left-image">
              <Link to="/earrings">
                <img
                  src="images/1.png"
                  alt="Diamond Earrings"
                  style={{ cursor: "pointer" }}
                />
              </Link>
            </div>
            <div className="right-images">
              <div className="right-image">
                <Link to="/collections">
                  <img
                    src="images/2.png"
                    alt="Auspicious Jewellery"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </div>
              <div className="right-image">
                <Link to="/dailywear">
                  <img
                    src="images/3.png"
                    alt="Daily wear Chains"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
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
                <Link to="/earrings">
                  <img
                    src="images/4.png"
                    alt="Earrings"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </div>
              <p className="category-label">EARRINGS</p>
            </div>
            <div className="category-wrapper">
              <div className="category-card">
                <Link to="/rings">
                  <img
                    src="images/5.png"
                    alt="Finger Rings"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </div>
              <p className="category-label">FINGER RINGS</p>
            </div>
            <div className="category-wrapper">
              <div className="category-card">
                <Link to="/dailywear">
                  <img
                    src="images/6.png"
                    alt="Pendants"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </div>
              <p className="category-label">PENDANTS</p>
            </div>
            <div className="category-wrapper">
              <div className="category-card">
                <Link to="/gold">
                  <img
                    src="images/7.png"
                    alt="Mangalsutra"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </div>
              <p className="category-label">MANGALSUTRA</p>
            </div>
            <div className="category-wrapper">
              <div className="category-card">
                <Link to="/diamond">
                  <img
                    src="images/8.png"
                    alt="Bracelets"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </div>
              <p className="category-label">BRACELETS</p>
            </div>
            <div className="category-wrapper">
              <div className="category-card">
                <Link to="/dailywear">
                  <img
                    src="images/9.png"
                    alt="Bangles"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </div>
              <p className="category-label">BANGLES</p>
            </div>
            <div className="category-wrapper">
              <div className="category-card">
                <Link to="/dailywear">
                  <img
                    src="images/10.png"
                    alt="Chains"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </div>
              <p className="category-label">CHAINS</p>
            </div>
            <div className="category-wrapper">
              <div className="category-card">
                <Link to="/diamond">
                  <img
                    src="images/11.png"
                    alt="View All"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
              </div>
              <p className="category-label">DIAMOND WEAR</p>
            </div>
          </div>
        </section>

        <section className="tanishq-world">
          <h2>MK World</h2>
          <p>A companion for every occasion</p>

          <div className="world-grid-custom">
            {/* <!-- Left side --> */}
            <div className="column">
              <Link to="/wedding">
                <div className="world-box short-box">
                  <img src="images/12.png" alt="Wedding" />
                  <div className="box-overlay">Wedding</div>
                </div>
              </Link>
              <Link to="/gold">
                <div className="world-box tall-box">
                  <img src="images/14.png" alt="Gold" />
                  <div className="box-overlay">Gold</div>
                </div>
              </Link>
            </div>

            {/* <!-- Right side --> */}
            <div className="column">
              <Link to="/dailywear">
                <div className="world-box tall-box">
                  <img src="images/13.png" alt="Office Wear" />
                  <div className="box-overlay">Office Wear</div>
                </div>
              </Link>
              <Link to="/diamond">
                <div className="world-box short-box">
                  <img src="images/15.png" alt="Diamond" />
                  <div className="box-overlay">Everyday</div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <section className="new-arrivals">
          <div className="background-container">
            <img
              src="images/16.png"
              alt="Rings Background"
              className="background-img"
            />

            <div className="text-overlay">
              <h2>New Arrivals</h2>
              <div className="badge">💎 500+ New Items</div>
              <p>
                New Arrivals Dropping Daily, Monday through Friday.
                <br />
                Explore the Latest Launches Now!
              </p>
            </div>

            {/* <!-- Overlapping Cards --> */}
            <div className="overlap-cards">
              <div className="card">
                <div className="image-container">
                  <Link to="/gold">
                  <img
                    src="images/17.png"
                    alt="Mangalsutra"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
                  <div className="image-text">Mangalsutra</div>
                </div>
              </div>

              <div className="card">
                <div className="image-container">
                  <Link to="/dailywear">
                  <img
                    src="images/18.png"
                    alt="Pendants"
                    style={{ cursor: "pointer" }}
                  />
                </Link>
                  <div className="image-text">Pendants</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="assurance-box">
          <div className="assurance-content">
            <div className="left-box">
              <h2>
                <span className="brand">MK</span>{" "}
                <span className="highlight">Assurance</span>
              </h2>
              <p>Crafted by experts, cherished by you</p>
            </div>
            <div className="right-box">
              <div className="assurance-item">
                <img src="images/19.png" alt="Quality Craftsmanship" />
                <p>
                  <strong>Quality</strong>
                  <br />
                  Craftsmanship
                </p>
              </div>
              <div className="assurance-item">
                <img src="images/20.png" alt="Ethically Sourced" />
                <p>
                  <strong>Ethically</strong>
                  <br />
                  Sourced
                </p>
              </div>
              <div className="assurance-item">
                <img src="images/21.png" alt="100% Transparency" />
                <p>
                  <strong>100%</strong>
                  <br />
                  Transparency
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default Home;

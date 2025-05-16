import "./gifting.css";

function Gifting() {
  return (
    <>
      <div>
        <section className="hero-banner">
          <img src="images/165big.png" alt="Into Eternity Collection" />
        </section>

        <section className="special-moments">
          <h2>Find The Perfect Piece To Celebrate Life’s Special Moments</h2>
          <img
            src="images/166.png"
            alt="Decorative Divider"
            className="divider"
          />

          <div className="moments-grid">
            <div className="moment-item">
              <img src="images/167.png" alt="Heartfelt" />
              <p>Heartfelt</p>
            </div>
            <div className="moment-item">
              <img src="images/168.png" alt="Timeless" />
              <p>Timeless</p>
            </div>
            <div className="moment-item">
              <img src="images/169.png" alt="Precious" />
              <p>Precious</p>
            </div>
            <div className="moment-item">
              <img src="images/170.png" alt="Treat For Self" />
              <p>Treat For Self</p>
            </div>
            <div className="moment-item">
              <img src="images/171.png" alt="Anniversary" />
              <p>Anniversary</p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default Gifting;

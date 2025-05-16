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

      
      </div>
    </>
  );
}

export default Wedding;

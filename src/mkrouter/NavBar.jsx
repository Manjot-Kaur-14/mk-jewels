import { NavLink, Outlet } from "react-router";
function NavBar() {
  return (
    <>
      <header class="main-header">
    <div class="top-row">
      <div class="logo">
        
        <img src="images/mklogo.png" alt="MK Jewels Logo" />
      </div>
      <div class="search-bar">
        <input
          type="text"
          placeholder="Search for Gold Jewellery, Diamond Jewellery, and more..."
        />
        <button><i class="fas fa-search"></i></button>
      </div>
      <div class="header-icons">
            <i class="fas fa-gem"></i>
            <i class="fas fa-store"></i>
            <i class="fas fa-heart"></i>
            <i class="fas fa-user"></i>
            <div class="cart-icon">
              <i class="fas fa-shopping-bag"></i>
              <span class="badge">0</span>
            </div>
          </div>
    </div>

    {/* <!-- Bottom Navigation --> */}
    <nav class="bottom-nav">
      <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="/">
            <img src="images/jewellery.svg" alt="All Jewellery" />
        <span>All Jewellery</span>
          </NavLink>
      {/* <a href="index.html">
        <img src="images/jewellery.svg" alt="All Jewellery" />
        <span>All Jewellery</span>
      </a> */}
      <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="/gold">
            <img src="images/gold.svg" alt="Gold" />
        <span>Gold</span>
          </NavLink>
     
      <a href="diamond.html">
        <img src="images/diamond.svg" alt="Diamond" />
        <span>Diamond</span>
      </a>
      <a href="earrings.html">
        <img src="images/earrings.svg" alt="Earrings" />
        <span>Earrings</span>
      </a>
      <a href="rings.html">
        <img src="images/rings.svg" alt="Rings" />
        <span>Rings</span>
      </a>
      <a href="dailywear.html">
        <img src="images/dailywear.svg" alt="Daily Wear" />
        <span>Daily Wear</span>
      </a>
      <a href="collection.html">
        <img src="images/collection.svg" alt="Collections" />
        <span>Collections</span>
      </a>
      <a href="wedding.html">
        <img src="images/wedding.svg" alt="Wedding" />
        <span>Wedding</span>
      </a>
      <a href="gifting.html">
        <img src="images/gifting.svg" alt="Gifting" />
        <span>Gifting</span>
      </a>
      <a href="more.html">
        <img src="images/more.svg" alt="More" />
        <span>More</span>
      </a>
    </nav>
  </header>
      
    <Outlet/>

    </>
  );
}

export default NavBar;

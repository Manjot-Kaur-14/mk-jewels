import { NavLink, Outlet, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setShowCart } from "../redux/cartSlice";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const elements = useSelector((state) => state.product.itemList);
  const state = useSelector((state) => state.product.showCart);

  const showElements = () => {
    dispatch(setShowCart(state));
    navigate("/cart");
  };

  const goToLogin = () => {
    navigate("/loginform");
  };

  return (
    <>
      <header className="main-header">
        <div className="top-row">
          <div className="logo">
            <img src="images/mklogo.png" alt="MK Jewels Logo" />
          </div>
          {/* <div className="search-bar">
            <input
              type="text"
              placeholder="Search for Gold Jewellery, Diamond Jewellery, and more..."
            />
            <button><i className="fas fa-search"></i></button>
          </div> */}
          <div className="header-icons">
            <i className="fas fa-gem"></i>
            <i className="fas fa-store"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-user" onClick={goToLogin}></i> {/* 👈 Updated */}
            <div className="cart-icon" onClick={showElements}>
              <i className="fas fa-shopping-bag"></i>
              <span className="badge">{elements.length}</span>
            </div>
          </div>
        </div>

        <nav className="bottom-nav">
      <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="//">
            <img src="images/jewellery.svg" alt="All Jewellery" />
        <span>All Jewellery</span>
          </NavLink>

      <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="gold">
            <img src="images/gold.svg" alt="Gold" />
        <span>Gold</span>
          </NavLink>
     
     <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="diamond">
           <img src="images/diamond.svg" alt="Diamond" />
        <span>Diamond</span>
          </NavLink>

      <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="earrings">
           <img src="images/earrings.svg" alt="Earrings" />
        <span>Earrings</span>
          </NavLink>
 
      <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="rings">
           <img src="images/rings.svg" alt="Rings" />
        <span>Rings</span>
          </NavLink>

      <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="dailywear">
           <img src="images/dailywear.svg" alt="Daily Wear" />
        <span>Daily Wear</span>
          </NavLink>
  
      <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="collections">
           <img src="images/collection.svg" alt="Collections" />
        <span>Collections</span>
          </NavLink>

      <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="wedding">
           <img src="images/wedding.svg" alt="Wedding" />
        <span>Wedding</span>
          </NavLink>

      <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="gifting">
           <img src="images/gifting.svg" alt="Gifting" />
        <span>Gifting</span>
          </NavLink>

          <NavLink className={({isActive})=> isActive?'custom-active link':'link'} to="more">
           <img src="images/more.svg" alt="More" />
        <span>More</span>
          </NavLink>

    </nav>
      </header>

      <Outlet />
    </>
  );
}

export default NavBar;

import { useNavigate } from "react-router";
import "./cartempty.css";
import { useSelector } from "react-redux";

const CartEmpty = () => {
  const navigate = useNavigate();
  const userName = useSelector((state) => state.user.username);


  return (
    <div className="cart-empty-wrapper">
      <div className="cart-empty">
        <img
          src="images/emptycart.png"
          alt="Empty Cart"
          className="cart-image"
        />
        <h2>Your Cart is Empty</h2>
        <div className="cart-buttons">
          <button className="outline-button" onClick={() => navigate("//")}>
            Continue Shopping
          </button>
        { !userName &&  <button className="solid-button" onClick={() => navigate("/loginform")}>
            Login To View Your Cart
          </button>
        }
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;

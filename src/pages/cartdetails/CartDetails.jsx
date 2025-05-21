import "./cartdetails.css";
import { useSelector } from "react-redux";
import IndividualAdded from "./IndividualAdded";
import CartEmpty from "../login/CartEmpty";
import { useNavigate } from "react-router";

const CartDetails = () => {
  const navigate = useNavigate();
  const elements = useSelector((state) => state.product.itemList);

  // Calculate total price
  const totalPrice = elements.reduce((acc, item) => acc + item.totalPrice, 0);

  if (elements.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className="container">
      <div className="top-section">
        {/* Left Section */}
        <div className="left-section">
          <ul>
            {elements.map((item) => (
              <li key={item.id}>
                <IndividualAdded
                  name={item.name}
                  height={item.height}
                  imageurl={item.imageurl}
                  gross_weight={item.gross_weight}
                  price={item.price}
                  quantity={item.quantity}
                  totalPrice={item.totalPrice}
                  id={item.id}
                />
              </li>
            ))}
          </ul>

          {/* ✅ Feature Icons - only once */}
          <div className="feature-icons">
            <div className="feature-item">
              <img src="images/178.png" alt="Purity Guaranteed" />
              <div>
                <strong>Purity Guaranteed</strong>
                <p>on every online purchase</p>
              </div>
            </div>
            <div className="feature-item">
              <img src="images/179.png" alt="Secure Delivery" />
              <div>
                <strong>Secure Delivery</strong>
                <p>by our trusted partners</p>
              </div>
            </div>
            <div className="feature-item">
              <img src="images/180.png" alt="Secure Payments" />
              <div>
                <strong>Easy & Secure Payments</strong>
                <p>backed by the trust of TATA</p>
              </div>
            </div>
          </div>
        </div>

        {/* ✅ Order Summary - only once */}
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-details">
            <p>
              Sub Total <span>₹ {totalPrice}</span>
            </p>
            <p>
              Delivery Charge <span className="free">FREE</span>
            </p>
            <p className="total-line">
              <strong>TOTAL (Incl of all Taxes.)</strong>
              <span>
                <strong>₹ {totalPrice}</strong>
              </span>
            </p>
            <button
              className="proceed-checkout"
              onClick={() => navigate("/checkout-success")}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;

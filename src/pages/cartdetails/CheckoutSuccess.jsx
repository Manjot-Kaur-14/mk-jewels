import "./checkoutsuccess.css"; 
import { Link } from "react-router";

const CheckoutSuccess = () => {
  return (
    <div className="checkout-success-container">
      <h1>Order Confirmed!</h1>
      <p>Thank you for your purchase. Your order has been successfully placed.</p>
      <p>We are currently processing your order. Once it's ready for dispatch, we'll notify you with the delivery details.</p>
      <p>If you have any questions, feel free to contact our support team.</p>

      <Link to="//" className="back-home-button">Back to Home</Link>
    </div>
  );
};

export default CheckoutSuccess;

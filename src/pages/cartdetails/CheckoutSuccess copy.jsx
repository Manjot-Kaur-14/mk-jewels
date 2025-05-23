import { useDispatch, useSelector } from "react-redux";
import "./checkoutsuccess.css"; 
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";
import { removeAll } from "../../redux/cartSlice";

const CheckoutSuccess = () => {
   const navigate = useNavigate();
   const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.username);
  console.log("userName",userName)
  useEffect(()=> {
   if(!userName) {
    navigate("/loginform");
   }

   if(userName){
    // dispatch(removeAll())
   }

 })


 

  return (
    <div className="checkout-success-container">
      <h1> {userName}! Your Order Confirmed! </h1>
      <p>Thank you for your purchase. Your order has been successfully placed.</p>
      <p>We are currently processing your order. Once it's ready for dispatch, we'll notify you with the delivery details.</p>
      <p>If you have any questions, feel free to contact our support team.</p>

      <Link to="//" className="back-home-button">Back to Home</Link>
    </div>
  );
};

export default CheckoutSuccess;

import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import "./checkoutsuccess.css"; 
import { Link, useNavigate } from "react-router";
import { useEffect } from "react";
import { removeAll } from "../../redux/cartSlice";


// toast.configure();

const handleToken = async (token, adresses) => {
  const res = await axios.post("https://ed6l3.sse.codesandbox.io/checkout", {
    token
  });
  const { status } = res.data;
  if (status === "success") {
    toast("Success ! Check emails for details", {
      type: "success"
    });
  } else {
    toast("Something went wrong", {
      type: "failure"
    });
  }
};

export default function CheckoutSuccess() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
  const userName = useSelector((state) => state.user.username);
  console.log("userName",userName)
  const elements = useSelector((state) => state.product.itemList);

  // Calculate total price
  const totalPrice = elements.reduce((acc, item) => acc + item.totalPrice, 0);
  useEffect(()=> {
   if(!userName) {
    navigate("/loginform");
   }

   if(userName){
    // dispatch(removeAll())
   }

 })

  return (
    <>
   

    <div className="checkout-success-container">
      <h1> {userName}! Your Order Confirmed! </h1>
      <p>Thank you for your purchase. Your order has been successfully placed.</p>
      <p>We are currently processing your order. Once it's ready for dispatch, we'll notify you with the delivery details.</p>
      <p>If you have any questions, feel free to contact our support team.</p>

    </div>

     <div className="App" style={{textAlign:"center" }}>
      <StripeCheckout
        stripeKey="pk_test_51JGNLWBVnEa8wQ1y8ZGMn9tw57qHCROwaNVr5eplb1UvQsN410gJpXPyNW8yFgNQZeM7twAoAjZ7LosccszLnDMz00pIIh0lL0"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={totalPrice}
        name="Buy product"
        currency='inr'
      />
      <br />
      <br />
      <br />
      <Link to="//" className="back-home-button">Back to Home</Link>
      
      <br />
      <br />
    </div>
    </>
  );
}

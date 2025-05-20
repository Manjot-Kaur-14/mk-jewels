import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";
import { IoMdClose } from "react-icons/io";
import "./individualadded.css";

const IndividualAdded = ({
  name,
  price,
  quantity,
  totalPrice,
  id,
  imageurl,
  gross_weight,
  height,
}) => {
  const dispatch = useDispatch();

  const increment = () => {
  dispatch(addToCart({ name, price, id, height, gross_weight, imageurl }));
};

  const decrement = () => {
    dispatch(removeFromCart({ id, quantity, totalPrice, price }));
  };

  return (
    // ✅ Only individual item
<div className="cart-card">
  <div className="card-left">
    <img src={imageurl} alt={name} className="product-img" />
  </div>
  <div className="card-center">
    <div className="product-price">{price}</div>
    <div className="product-name">{name}</div>
    <div className="product-details">
      Height: {height}, 
      Weight: {gross_weight}
    </div>
  </div>
  <div className="card-right">
    <div className="qty-label">
      Qty: <strong>{quantity}</strong>
    </div>
    <button className="remove-btn" onClick={decrement}>
      <IoMdClose size={20} />
    </button>
  </div>
</div>

        
  );
};
export default IndividualAdded;
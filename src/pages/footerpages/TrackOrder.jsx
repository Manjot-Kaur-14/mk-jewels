import "./TrackOrder.css";
import "./trackorder.css";  // Make sure to create this CSS file

const TrackOrder = () => {
  return (
    <div className="track-order-container">
      <h1>Track Your Order</h1>
      <p className="description">
        Please enter your details below to access your order. If you are experiencing issues to view your order, please contact our Customer Service team.
      </p>
      <hr />

      <form className="track-form">
        <input type="email" placeholder="Email Address *" required />
        <input type="text" placeholder="Order Number *" required />
        <button type="submit">TRACK ORDER</button>
      </form>
    </div>
  );
};

export default TrackOrder;

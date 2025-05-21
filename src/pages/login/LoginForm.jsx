import { useState } from "react";
import "./loginform.css";
import { useNavigate } from "react-router";
import { login } from "../../redux/loginSlice";
import { useDispatch, useSelector } from "react-redux";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
    const dispatch = useDispatch(); // to store data into redux


  const handleLogin = () => {
    console.log("Username:", username);
    console.log("Phone:", phone);
    console.log("Address:", address);
    dispatch(login({username:username,phone:phone,address:address}))
   navigate("/cart"); // 👈 Navigate to CartDetails
  
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h1>Welcome to MK Jewels!</h1>
        <p>Login to get exclusive MK Jewels privileges</p>
        
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input
            type="address"
            id="address"
            placeholder="Enter your Address here"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginForm;

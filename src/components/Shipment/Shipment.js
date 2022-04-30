import { getAuth } from "firebase/auth";
import React, { useState } from "react";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState(" ");
  const [name, setName] = useState(" ");
  const [address, setAddress] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePhoneBlur = (event) => {
    setPhone(event.target.value);
  };

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleAddressBlur = (event) => {
    setAddress(event.target.value);
  };
  const handleCreateUser = (event) => {
    event.preventDefault();
    const shipping = { user, email, address, phone };
  };

  return (
    <div className="form-container" onSubmit={handleCreateUser}>
      <div>
        <h1 className="form-title">Shipping Address</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="name">Name</label>
            <input onBlur={handleNameBlur} type="email" name="email" required />
            <br />
            <label htmlFor="name">Phone no:</label>
            <input onBlur={handlePhoneBlur} type="text" name="phone" required />
            <br />
            <label htmlFor="email">Email</label>
            <input
              value={user?.email}
              readOnly
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              required
            />
            <br />
            <label htmlFor="address">Address</label>
            <input onBlur={handleAddressBlur} type="text" required />
          </div>

          <input
            className="submit-button"
            type="submit"
            value="Add to shipping"
          />
        </form>
        <p></p>
      </div>
    </div>
  );
};

export default Shipment;

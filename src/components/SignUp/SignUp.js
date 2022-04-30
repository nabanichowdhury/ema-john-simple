import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./SignUp.css";

const SignUp = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [confirmPassword, setConfirmPassword] = useState(" ");
  const [error, setError] = useState(" ");
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };
  if (user) {
    navigate("/home");
  }
  const handleCreateUser = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("your password did't match");
      return;
    }
    if (password.length < 6) {
      setError("Use password having charecter more than 6");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div>
      <div className="form-container">
        <div>
          <h1 className="form-title">Sign Up</h1>
          <form action="" onSubmit={handleCreateUser}>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input onBlur={handleEmailBlur} type="email" required />
              <br />
              <label htmlFor="password">Password</label>
              <input onBlur={handlePasswordBlur} type="password" required />
              <br />
              <label htmlFor="password">Confirm Password</label>
              <input
                onBlur={handleConfirmPasswordBlur}
                type="password"
                required
              />
            </div>
            <p style={{ color: "red" }}>{error}</p>
            <input className="submit-button" type="submit" value="Sign Up" />
          </form>
          <p>
            Already have an account?
            <Link className="create-link" to="/login">
              Login to your account
            </Link>
          </p>
          <div className="or">
            <div className="hr"></div>
            <div>or</div>
            <div className="hr"></div>
          </div>

          <button className="submit-button-google" type="submit">
            <div>
              <img src="https://img.icons8.com/color/48/000000/google-logo.png" />
            </div>
            <div>Sign up with Google</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

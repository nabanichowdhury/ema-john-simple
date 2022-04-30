import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Login</h1>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />
            <br />
            <label htmlFor="password">Password</label>
            <input type="password" required />
          </div>
          <input className="submit-button" type="submit" value="Login" />
        </form>
        <p>
          New to ema-john?
          <Link className="create-link" to="/signup">
            Create an account
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
          <div>Continue with Google</div>
        </button>
      </div>
    </div>
  );
};

export default Login;

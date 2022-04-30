import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Login</h1>
        <form action="" onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              required
            />
            <br />
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" required />
          </div>
          <p style={{ color: "red" }}>{error?.message}</p>
          <p>{loading && "Loading....."}</p>
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

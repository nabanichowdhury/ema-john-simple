import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/order">Orders</Link>
        <Link to="/offers"> Offers</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Header;

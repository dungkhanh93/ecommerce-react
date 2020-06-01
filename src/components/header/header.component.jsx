import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.style.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <NavLink exact className="option" to="/shop">
        Shop
      </NavLink>
      <NavLink exact className="option" to="/pages/contact">
        Contact
      </NavLink>
    </div>
  </div>
);

export default Header;

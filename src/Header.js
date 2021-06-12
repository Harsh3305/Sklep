import "./Header.css";
import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="logo"
          src="https://www.linkpicture.com/q/95bd133d439c4ba3b6dd494d2b4bda16.png"
          alt=""
        />
      </Link>
      <input type="text" className="serch_box" />
      <img
        className="search_icon"
        src="https://www.linkpicture.com/q/search_3.png"
        alt=""
      />
      <Link to="/cart">
        <img
          className="cart_icon"
          src="https://www.linkpicture.com/q/carts.png"
          alt=""
        />
      </Link>
      <Link to="/login">
        <img
          className="cart_icon"
          src="https://www.linkpicture.com/q/user_2.png"
          alt=""
        />
      </Link>
    </nav>
  );
}

export default Header;

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
      <input
        type="text"
        placeholder="Search Products, Brands and more"
        className="serch_box"
      />

      <Link to="/search_result">
        <img
          className="search_icon"
          src="https://www.linkpicture.com/q/search_3.png"
          alt=""
        />
      </Link>
      <>
        <div className="cart_cointainer">
          <Link to="/cart">
            <div>
              <img
                className="cart_icon"
                src="https://www.linkpicture.com/q/carts.png"
                alt=""
              ></img>
              <span className="cart_items">0 items</span>
            </div>
          </Link>
        </div>
        <Link to="/login">
          <img
            className="login"
            src="https://www.linkpicture.com/q/user_2.png"
            alt=""
          />
        </Link>
      </>
    </nav>
  );
}

export default Header;

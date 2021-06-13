import React from "react";
import "./Product.css";
import { Link } from "react-router-dom";
function Product({ id, title, price, category, description, image, ...rest }) {
  console.log("Extra", rest);
  return (
    <div className="product_box">
      <Link to="/product/:{id}">
        <img
          src={image}
          className="product_image"
          alt="retrieval basket transparent png hd @transparentpng.com"
        ></img>
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
          {/* <img src={image}></img> */}
        </p>
      </Link>

      <img
        // onClick="myFunction({id})"
        src="https://www.transparentpng.com/thumb/add-to-cart-button/okgCXZ-retrieval-basket-transparent-png-hd-.png"
        className="add_to_cart"
        alt="retrieval basket transparent png hd @transparentpng.com"
      ></img>
    </div>
  );
}

export default Product;

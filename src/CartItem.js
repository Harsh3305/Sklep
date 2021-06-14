import React from "react";

function CartItem({ id, title, image, price, ...rest }) {
  return (
    <div className="Cart">
      <img
        src={image}
        className="product_image"
        alt="retrieval basket transparent png hd @transparentpng.com"
      ></img>
      <p>{title}</p>
      <p className="product_price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
    </div>
  );
}
export default CartItem;

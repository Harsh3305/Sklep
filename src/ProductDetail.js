import React from "react";

function ProductDetail({ id, image, title, price, description, ...rest }) {
  return (
    <div>
      <img alt="product_image" src={image} />
      <h1>{title}</h1>
      <div>
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
          {/* <img src={image}></img> */}
        </p>
      </div>
      <p>{description}</p>
    </div>
  );
}
export default ProductDetail;

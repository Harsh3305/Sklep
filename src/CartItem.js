import React from "react";
import "./CartItem.css";
function CartItem({ id, title, image, price, ...rest }) {
  return (
    <div className="Cart">
      
      <img
        src={image}
        className="product_image_cart"
        alt="retrieval basket transparent png hd @transparentpng.com"
      ></img>
      <p className="Titlevalue">Product:-{title}</p>
      <h1 className="product_price_cart">Price:-${price}</h1>
    <div className="delete">
    <img 
        src="https://www.linkpicture.com/q/delete_4.png"        
        alt="retrieval basket transparent png hd @transparentpng.com"
      ></img>
    </div>
      
        
      
    </div>
  );
}
export default CartItem;

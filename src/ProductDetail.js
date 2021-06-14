import React from "react";
// , image, title, price, description,
function ProductDetail({ id, allProduct, ...rest }) {
  return (
    <div>
      <div>
        {allProduct.slice(id - 1, id).map((ele) => {
          return (
            <>
              <h1>{ele.id}</h1>
              <h1>{ele.title}</h1>
              <div>
                <p className="product_price">
                  <small>$</small>
                  <strong>{ele.price}</strong>
                  <img src={ele.image} alt=""></img>
                </p>
              </div>
              <p>{ele.description}</p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default ProductDetail;

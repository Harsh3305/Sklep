import React from "react";
import "./Home.css";
import Product from "./Product";
import CategoriesTiles from "./CategoryTile";

function Home({ allProducts, ...rest }) {
  return (
    <>
      <div className="home"></div>

      <div>
        <CategoriesTiles />

        <div className="product_row">
          {allProducts.slice(0, 3).map((ele) => {
            return (
              <Product
                id={ele.id}
                title={ele.title}
                price={ele.price}
                image={ele.image}
              />
            );
          })}
        </div>
        <div className="product_row">
          {allProducts.slice(4, 8).map((ele) => {
            return (
              <Product
                id={ele.id}
                title={ele.title}
                price={ele.price}
                image={ele.image}
              />
            );
          })}
        </div>
        <div className="product_row">
          {allProducts.slice(9, 11).map((ele) => {
            return (
              <Product
                id={ele.id}
                title={ele.title}
                price={ele.price}
                image={ele.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Home;

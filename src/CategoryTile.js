import React from "react";
import { Link } from "react-router-dom";
import "./CategoryTile.css";

const Category = ({ image, link, ...rest }) => {
  return (
    <div className="categoryTile">
      <Link to={link}>
        <img src={image} alt="categoty_tile" />
      </Link>
    </div>
  );
};

function CategoriesTiles() {
  return (
    <p className="categoryFrame">
      <Category
        image="https://image.shutterstock.com/image-vector/drivein-romantic-cinema-cartoon-couple-600w-1946454835.jpg"
        link="/banner_click"
      ></Category>
      <Category
        image="https://image.shutterstock.com/image-vector/drivein-romantic-cinema-cartoon-couple-600w-1946454835.jpg"
        link="/banner_click"
      ></Category>
      <Category
        image="https://image.shutterstock.com/image-vector/drivein-romantic-cinema-cartoon-couple-600w-1946454835.jpg"
        link="/banner_click"
      ></Category>
    </p>
  );
}

export default CategoriesTiles;

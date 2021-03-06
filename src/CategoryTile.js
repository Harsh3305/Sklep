import React from "react";
import { Link } from "react-router-dom";
import "./CategoryTile.css";
import "react-slideshow-image/dist/styles.css";

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
        image="https://www.linkpicture.com/q/4_134.png"
        link="/banner_click/electronics"
      ></Category>
      <Category
        image="https://cdn.discordapp.com/attachments/853297032106475530/853627670713597962/unknown.png"
        link="/banner_click/jewelry"
      ></Category>
      <Category
        image="https://cdn.discordapp.com/attachments/853297032106475530/853627815073546240/unknown.png"
        link="/banner_click/men"
      ></Category>
      <Category
        image="https://www.linkpicture.com/q/1_381.png"
        link="/banner_click/women"
      ></Category>
      {/* <Slideshow></Slideshow> */}
    </p>
  );
}

export default CategoriesTiles;

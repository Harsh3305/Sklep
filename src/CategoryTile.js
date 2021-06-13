import React from "react";
import { Link } from "react-router-dom";
import "./CategoryTile.css";
import "react-slideshow-image/dist/styles.css";
// const images = [
//   "https://www.linkpicture.com/q/95bd133d439c4ba3b6dd494d2b4bda16.png",
//   "images/slide_2.png",
//   "images/slide_3.png",
//   "images/slide_4.png",
// ];

// const Slideshow = () => {
//   return (
//     <div className="slide-container">
//       <Slide>
//         <div className="each-slide">
//           <div style={{ backgroundImage: `url(${slideImages[0]})` }}>
//             <span>Slide 1</span>
//           </div>
//         </div>
//         <div className="each-slide">
//           <div style={{ backgroundImage: `url(${slideImages[1]})` }}>
//             <span>Slide 2</span>
//           </div>
//         </div>
//         <div className="each-slide">
//           <div style={{ backgroundImage: `url(${slideImages[2]})` }}>
//             <span>Slide 3</span>
//           </div>
//         </div>
//       </Slide>
//     </div>
//   );
// };

// const Slideshow = () => {
//   return (
//     <div className="slide-container">
//       <Zoom scale={0.4}>
//         {images.map((each, index) => (
//           // console.log(each)
//           <img key={index} style={{ width: "100%" }} src={each} alt="" />
//         ))}
//       </Zoom>
//     </div>
//   );
// };

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

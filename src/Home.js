import React from "react";
import "./Home.css";
import Product from "./Product";
import CategoriesTiles from "./CategoryTile";

function Home() {
  return (
    <>
      <div className="home"></div>

      <div>
        <CategoriesTiles />

        <div className="product_row">
          <Product
            id="1234552"
            title="bag"
            price={100}
            image="https://www.linkpicture.com/q/freestocks-_3Q3tsJ01nc-unsplash.jpg"
          />
          <Product
            id="1234552"
            title="bag"
            price={100}
            image="https://www.linkpicture.com/q/freestocks-_3Q3tsJ01nc-unsplash.jpg"
          />
          <Product
            id="1234552"
            title="bag"
            price={100}
            image="https://www.linkpicture.com/q/freestocks-_3Q3tsJ01nc-unsplash.jpg"
          />
          <Product
            id="1234552"
            title="bag"
            price={100}
            image="https://www.linkpicture.com/q/freestocks-_3Q3tsJ01nc-unsplash.jpg"
          />
        </div>
        <div className="product_row">
          <Product
            id="1234552"
            title="bag"
            price={100}
            image="https://firebasestorage.googleapis.com/v0/b/sklep-a919b.appspot.com/o/kisspng-backpack-gucci-baggage-tote-bag-5af9284b2baf76.7911121415262782191789.png?alt=media&token=41855d10-98f6-45f8-bfed-cb0caf11e850"
          />
          <Product
            id="1234552"
            title="bag"
            price={100}
            image="https://firebasestorage.googleapis.com/v0/b/sklep-a919b.appspot.com/o/kisspng-backpack-gucci-baggage-tote-bag-5af9284b2baf76.7911121415262782191789.png?alt=media&token=41855d10-98f6-45f8-bfed-cb0caf11e850"
          />
          <Product
            id="1234552"
            title="bag"
            price={100}
            image="https://firebasestorage.googleapis.com/v0/b/sklep-a919b.appspot.com/o/kisspng-backpack-gucci-baggage-tote-bag-5af9284b2baf76.7911121415262782191789.png?alt=media&token=41855d10-98f6-45f8-bfed-cb0caf11e850"
          />
          <Product
            id="1234552"
            title="bag"
            price={100}
            image="https://firebasestorage.googleapis.com/v0/b/sklep-a919b.appspot.com/o/kisspng-backpack-gucci-baggage-tote-bag-5af9284b2baf76.7911121415262782191789.png?alt=media&token=41855d10-98f6-45f8-bfed-cb0caf11e850"
          />
          <Product
            id="1234552"
            title="bag"
            price={100}
            image="https://firebasestorage.googleapis.com/v0/b/sklep-a919b.appspot.com/o/kisspng-backpack-gucci-baggage-tote-bag-5af9284b2baf76.7911121415262782191789.png?alt=media&token=41855d10-98f6-45f8-bfed-cb0caf11e850"
          />
          <Product
            id="1234552"
            title="bag"
            price={100}
            image="https://firebasestorage.googleapis.com/v0/b/sklep-a919b.appspot.com/o/kisspng-backpack-gucci-baggage-tote-bag-5af9284b2baf76.7911121415262782191789.png?alt=media&token=41855d10-98f6-45f8-bfed-cb0caf11e850"
          />
        </div>
        <div className="product_row">
          <Product
            id="1234552"
            title="bag"
            price={100}
            image="https://www.lg.com/in/images/plp-b2c/in-4kmonitors-hero-1-d.jpg"
          />
          <Product
            id="1234552"
            title="bag"
            price={100}
            image="https://www.lg.com/in/images/plp-b2c/in-4kmonitors-hero-1-d.jpg"
          />
        </div>
      </div>
    </>
  );
}

export default Home;

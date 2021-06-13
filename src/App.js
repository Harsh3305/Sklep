// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    var result = () => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setProductData(json);
        });
    };
    result();
  }, []);

  return (
    <Router>
      <div className="Sklep">
        <Switch>
          <Route path="/checkout">
            <Header />
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            {/* <h1>Login</h1> */}
            <Login />
          </Route>
          <Route path="/product_detail">
            <Header />
            <h1>Product Detail</h1>
          </Route>
          <Route path="/search_result">
            <Header />
            <h1>Search Result</h1>
          </Route>
          <Route path="/cart">
            <Header />
            <h1>Cart</h1>
          </Route>
          <Route path="/banner_click/electronics">
            <Header />
            {/* ShowProductsIncategory(productData={productData}, category=
            {"electronics"} ) */}
            <ShowProductsIncategory
              productData={productData}
              category={"electronics"}
            />
          </Route>

          <Route path="/banner_click/women">
            <Header />
            <ShowProductsIncategory
              productData={productData}
              category={"women's clothing"}
            />
          </Route>

          <Route path="/banner_click/men">
            <Header />
            <ShowProductsIncategory
              productData={productData}
              category={"men's clothing"}
            />
          </Route>

          <Route path="/banner_click/jewelry">
            <Header />
            <ShowProductsIncategory
              productData={productData}
              category={"jewelery"}
            />
          </Route>
          <Route path="/">
            <Header />
            {/* <>
              <Home />
            </> */}
            {/* <add /> */}
            {/* <span className="bannerContainer"> */}
            <AddBanner allProduct={productData}></AddBanner>
            {/* <AddBanner></AddBanner> */}
            {/* </span> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const ShowProductsIncategory = ({ productData, category, ...rest }) => {
  return (
    <div>
      {productData.map((ele) => {
        return (
          ele.category === category && (
            <Product
              id={ele.id}
              title={ele.title}
              price={ele.price}
              image={ele.image}
            />
          )
        );
      })}
    </div>
  );
};

const AddBanner = ({ allProduct, ...rest }) => {
  // console.log(rest);
  return (
    <>
      <Home allProducts={allProduct}></Home>
    </>
  );
};

export default App;

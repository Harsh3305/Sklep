// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Product from "./Product";
import CartItem from "./CartItem";
import ProductDetail from "./ProductDetail";
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

  const [UsersData, setUsersData] = useState([]);

  useEffect(() => {
    var result = () => {
      fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setUsersData(json);
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
            <Login usersDetail={UsersData} />
          </Route>

          <Route exact path="/product_detail/1">
            <Header />
            <ProductDetail id={1} allProduct={productData} />
          </Route>

          <Route exact path="/product_detail/2">
            <Header />
            <ProductDetail id={2} allProduct={productData} />
          </Route>

          <Route exact path="/product_detail/3">
            <Header />
            <ProductDetail id={3} allProduct={productData} />
          </Route>
          <Route exact path="/product_detail/4">
            <Header />
            <ProductDetail id={4} allProduct={productData} />
          </Route>
          <Route exact path="/product_detail/5">
            <Header />
            <ProductDetail id={5} allProduct={productData} />
          </Route>
          <Route exact path="/product_detail/6">
            <Header />
            <ProductDetail id={6} allProduct={productData} />
          </Route>

          <Route exact path="/product_detail/7">
            <Header />
            <ProductDetail id={7} allProduct={productData} />
          </Route>

          <Route exact path="/product_detail/8">
            <Header />
            <ProductDetail id={8} allProduct={productData} />
          </Route>

          <Route exact path="/product_detail/9">
            <Header />
            <ProductDetail id={9} allProduct={productData} />
          </Route>

          <Route exact path="/product_detail/10">
            <Header />
            <ProductDetail id={10} allProduct={productData} />
          </Route>
          <Route exact path="/product_detail/11">
            <Header />
            <ProductDetail id={11} allProduct={productData} />
          </Route>

          <Route exact path="/product_detail/12">
            <Header />
            <ProductDetail id={12} allProduct={productData} />
          </Route>

          <Route exact path="/product_detail/13">
            <Header />
            <ProductDetail id={13} allProduct={productData} />
          </Route>
          <Route exact path="/product_detail/14">
            <Header />
            <ProductDetail id={14} allProduct={productData} />
          </Route>
          <Route exact path="/product_detail/15">
            <Header />
            <ProductDetail id={15} allProduct={productData} />
          </Route>
          <Route exact path="/product_detail/16">
            <Header />
            <ProductDetail id={16} allProduct={productData} />
          </Route>

          <Route exact path="/product_detail/17">
            <Header />
            <ProductDetail id={17} allProduct={productData} />
          </Route>

          <Route exact path="/product_detail/18">
            <Header />
            <ProductDetail id={18} allProduct={productData} />
          </Route>

          <Route exact path="/product_detail/19">
            <Header />
            <ProductDetail id={19} allProduct={productData} />
          </Route>

          <Route exact path="/product_detail/20">
            <Header />
            <ProductDetail id={20} allProduct={productData} />
          </Route>

          <Route path="/search_result">
            <Header />
            <h1>Search Result</h1>
          </Route>
          <Route path="/cart">
            <Header />
            {/* <h1>Cart</h1> */}
            <Cart />
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

const Cart = ({ id, ...rest }) => {
  return <CartItem />;
};

export default App;

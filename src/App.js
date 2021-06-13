// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
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
            <h1>banner_click electronics</h1>
          </Route>

          <Route path="/banner_click/women">
            <Header />
            <h1>banner_click women</h1>
          </Route>

          <Route path="/banner_click/men">
            <Header />
            <h1>banner_click men</h1>
          </Route>

          <Route path="/banner_click/jewelry">
            <Header />
            <h1>banner_click jewelry</h1>
          </Route>
          <Route path="/">
            <Header />
            {/* <>
              <Home />
            </> */}
            {/* <add /> */}
            {/* <span className="bannerContainer"> */}
            <AddBanner></AddBanner>
            {/* <AddBanner></AddBanner> */}
            {/* </span> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const AddBanner = ({ number_of_banner, ...rest }) => {
  // console.log(rest);
  return (
    <>
      {/* <span className="bannerContainer"> */}
      {/* <Home></Home> */}
      <Home></Home>

      {/* </span> */}
    </>
  );
};

export default App;

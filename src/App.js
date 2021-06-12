// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="Sklep">
        <Switch>
          <Route path="/checkout">
            <h1>Checkout</h1>
          </Route>
          <Route path="/login">
            <h1>Login</h1>
          </Route>
          <Route path="/product_detail">
            <h1>Product Detail</h1>
          </Route>
          <Route path="/search_result">
            <h1>Product Detail</h1>
          </Route>
          <Route path="/cart">
            <h1>Cart</h1>
          </Route>
          <Route path="/">
            <Header />
            <h1>Home</h1>
          </Route>
        </Switch>

        {/* <Switch>
          <Router path="/login">
            <h1>Login</h1>
          </Router>
        </Switch> */}
      </div>
    </Router>
  );
}

// function logIn() {}

export default App;

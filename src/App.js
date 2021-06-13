// import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
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
            <h1>Login</h1>
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
          <Route path="/">
            <Header />

            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// function logIn() {}

export default App;

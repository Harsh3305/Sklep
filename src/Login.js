import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDeault();
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          alt=""
          className="login_logo"
          src="https://firebasestorage.googleapis.com/v0/b/sklep-a919b.appspot.com/o/logo.png?alt=media&token=ac698d2f-0acb-468f-a6ee-1094be6c845b"
        ></img>
      </Link>
      <h1>SignIn</h1>
      <div className="login_container">
        <form>
          <h5>UserName</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit" onClick={signIn}>
            Log In
          </button>
          <p>
            By continuing, you agree to Sklep's Conditions of Use and Privacy
            Notice.
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;

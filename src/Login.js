import React from "react";
import ReactDOM from "react-dom";
import { useState, useEffect } from "react";
import "./Login.css";
import App from "./App";
import { Link } from "react-router-dom";

function Login({ usersDetail, ...rest }) {
  const [email, setEmail] = useState("johnd");
  const [password, setPassword] = useState("m38rmF$");
  const [user, setUser] = useState(false);
  console.log(usersDetail);
  const [path, setPath] = useState("/login");

  useEffect(() => {
    setPath("/");
  }, [user]);

  // const signIn = (e) => {
  //   e.preventDefault();
  //   console.log(email);
  //   console.log(password);

  //   usersDetail.map((ele) => {
  //     console.log(ele);

  //     if (ele.username === email && ele.password === password) {
  //       console.log(ele.username === email && ele.password === password);
  //       setUser(user || true);
  //     } else {
  //       console.log(user);
  //     }
  //   });
  // };

  return (
    <div className="login_">
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
          <Link to={"/"}>
            Log In
            {/* <button type="submit">Log In</button> */}
          </Link>
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

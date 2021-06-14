import React from "react";
import { Link } from "react-router-dom";
import "./Welcome.css";
function Welcome() {
  return (
    <div>
      <Link to="/login">
        <img
          className="welcome_image"
          alt="Welcome"
          src="https://cdn.discordapp.com/attachments/853310564758978574/853860982181986334/undraw_welcome_3gvl.png"
        />
        <img alt="" />
      </Link>
    </div>
  );
}

export default Welcome;

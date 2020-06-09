import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import logo from "../components/Assets/img/logo.png";
import user from "../components/Assets/img/user.png";
function Header() {
  return (
    <div className="Header">
      <header className="App-header">
        <div className="Header-Container">
          <img
            src={logo}
            height="100"
            width="100"
            alt="Hacker Music Logo"
          ></img>
          <br></br>
          <span>Hacker Music</span>
        </div>
        <div className="Header-Container">
          <img src={user} height="100" width="100" alt="User Profile Pic"></img>
          <br></br>
          <span>airborne17th</span>
        </div>
        <div className="Header-Container">
          <a href="#">Home</a>
          <br></br>
          <a href="about.html">About</a>
          <br></br>
          <a href="#">Profile</a>
          <br></br>
          <button className="button">Log Off</button>
        </div>
      </header>
    </div>
  );
}

export default Header;

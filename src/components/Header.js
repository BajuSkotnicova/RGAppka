import React from "react";
import "./Header.css";
import logo from "../pictures/logo.png";

function Header() {
  return (
    <>
      <div className="header">
        <img className="header_icon" src={logo} alt="" />
        <h1>Beskydy trochu jinak</h1>
      </div>
    </>
  );
}

export default Header;

import React from "react";
import "./Header.css";
import logo from "./pictures/logo.png";
import { signInWithGoogle } from "./firebase";
//import Button from "@mui/material/Button";

function Header() {
  return (
    <>
      <div className="header">
        <img className="header_icon" src={logo} />
        <h1>TrailsByMe</h1>
      </div>

      <div className="header_right">
        <button onClick={signInWithGoogle} className="Button">
          {" "}
          Sign in
        </button>

        <h2>{localStorage.getItem("name")} </h2>
        <img src={localStorage.getItem("profilePic")} />
      </div>
    </>
  );
}

export default Header;

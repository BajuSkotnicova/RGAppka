import React from "react";
import "./Header.css";
import logo from "./pictures/logo.png";
import Button from "@mui/material/Button";
import { auth, provider } from "./firebase";

function handleAuth() {
  auth
    .signInWithPopup(provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      alert(error.message);
    });
}

function Header() {
  return (
    <>
      <div className="header">
        <img className="header_icon" src={logo} />
        <h1>TrailsByMe</h1>
      </div>

      <div className="header_right">
        <Button onClick={handleAuth} variant="outlined">
          Login
        </Button>
      </div>
    </>
  );
}

export default Header;

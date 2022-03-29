import React from "react";
import "./Button.css";
import { signInWithGoogle, signInWithFacebook } from "../firebase";

function Button() {
  return (
    <>
      <div className="header_right">
        <button onClick={signInWithGoogle} className="Button">
          {" "}
          Sign in with Google
        </button>

        <h2>{localStorage.getItem("name")} </h2>
        <img src={localStorage.getItem("profilePic")} alt="" />
      </div>

      <div className="header_right2">
        <button onClick={signInWithFacebook} className="button">
          {" "}
          Sign in with FB
        </button>
      </div>
    </>
  );
}

export default Button;

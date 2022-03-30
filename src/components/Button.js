import React from "react";
import "./Button.css";
import { signInWithGoogle, signInWithFacebook } from "../firebase";

function Button() {
  return (
    <>
      <div className="Signin">
        <button
          className="Button"
          variant="outlined"
          onClick={(signInWithGoogle, signInWithFacebook)}
        >
          {" "}
          Přihlášení
        </button>

        <h2>{localStorage.getItem("name")} </h2>
        <img src={localStorage.getItem("profilePic")} alt="" />
      </div>
    </>
  );
}

export default Button;

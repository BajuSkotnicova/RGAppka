import React from "react";
import { signInWithGoogle, signInWithFacebook } from "../firebase";
import { GoogleLoginButton } from "react-social-login-buttons";
import { FacebookLoginButton } from "react-social-login-buttons";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>
        <div className="title">
          <h1>Chceš se přihlásit?</h1>
        </div>
        <div className="body">
          <p>Přihlaš se via Facebook nebo Google.</p>
        </div>
        <div className="footerModal">
          <FacebookLoginButton onClick={signInWithFacebook} />
          <GoogleLoginButton onClick={signInWithGoogle} />
          <div className="userInfo">
            <h2>{localStorage.getItem("name")} </h2>
            <img src={localStorage.getItem("profilePic")} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;

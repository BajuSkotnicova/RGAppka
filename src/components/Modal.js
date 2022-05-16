import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { signInWithGoogle, signInWithFacebook, auth } from "../firebase";
import { GoogleLoginButton } from "react-social-login-buttons";
import { FacebookLoginButton } from "react-social-login-buttons";
import "./Modal.css";

function Modal({ setOpenModal }) {
  const [user, loading, error] = useAuthState(auth);

  const modalCloser = (func) => {
    if (typeof func === "function") func();
    setOpenModal(false);
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={modalCloser}>X</button>
        </div>
        <div className="title">
          <h1>Chceš se přihlásit?</h1>
        </div>
        <div className="body">
          <p>Přihlaš se via Facebook nebo Google.</p>
        </div>
        <div className="footerModal">
          <FacebookLoginButton onClick={signInWithFacebook} />
          <GoogleLoginButton onClick={() => modalCloser(signInWithGoogle)} />
        </div>
      </div>
    </div>
  );
}

export default Modal;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserAuth } from "../firebase";
import { GoogleLoginButton } from "react-social-login-buttons";
import { FacebookLoginButton } from "react-social-login-buttons";
import "./Modal.css";

function Modal({ setOpenModal }) {
  /* const [user, loading, error] = useAuthState(auth);*/

  const { signInWithGoogle, signInWithFacebook, user } = UserAuth();
  const navigate = useNavigate();

  const handleSignInWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
    }
  };
  const handleSignInWithFacebook = async () => {
    try {
      await signInWithFacebook();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

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
          <FacebookLoginButton onClick={handleSignInWithFacebook} />
          <GoogleLoginButton
            onClick={() => modalCloser(handleSignInWithGoogle)}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;

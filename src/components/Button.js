import React, { useState } from "react";
import "./Button.css";
import Modal from "../components/Modal";

function Button() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="Signin">
        <button
          className="OpenButton"
          variant="outlined"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          Přihlášení
        </button>
        {modalOpen && <Modal setOpenModal={setModalOpen} />}
      </div>
    </>
  );
}

export default Button;

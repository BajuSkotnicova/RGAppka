import React from "react";
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
  FacebookIcon,
  EmailIcon,
  WhatsappIcon,
} from "react-share";
import "./ModalShare.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalContainerShare">
      <div className="titleCloseBtnShare">
        <button
          onClick={() => {
            setOpenModal(false);
          }}
        >
          X
        </button>
      </div>

      <div className="footer">
        <FacebookShareButton>
          <FacebookIcon
            size={32}
            round={true}
            onClick={() => {
              setOpenModal(false);
            }}
          />
        </FacebookShareButton>
        <WhatsappShareButton>
          <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>
        <EmailShareButton>
          <EmailIcon size={32} round={true} />
        </EmailShareButton>
      </div>
    </div>
  );
}

export default Modal;

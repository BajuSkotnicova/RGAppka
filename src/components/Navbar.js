import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { GiMountains } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Button } from "./Button";
import Modal from "../components/Modal";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobilMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobilMenu}>
            <GiMountains className="navbar-icon" />
            Beskydy trochu jinak
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobilMenu}>
                Domů
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/trails" className="nav-links" onClick={closeMobilMenu}>
                Trasy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/prihlaseni"
                className="nav-links-mobile"
                onClick={closeMobilMenu}
              >
                Přihlášení
              </Link>
            </li>
          </ul>
          {button && (
            <Button
              buttonStyle="btn--outline"
              onClick={() => {
                setModalOpen(true);
              }}
            >
              Přihlášení
            </Button>
          )}
          {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
      </nav>
    </>
  );
}

export default Navbar;

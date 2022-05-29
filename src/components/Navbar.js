import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, logOut } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import HikingIcon from "@mui/icons-material/Hiking";
import { GiMountains } from "react-icons/gi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Button } from "./Button";
import Modal from "../components/Modal";
import "./Navbar.css";
import { HOME_PATH, TRAILS_PATH, SAVED_TRAILS_PATH } from "../Paths";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      logOut();
      navigate(HOME_PATH);
    } catch (error) {
      console.log(error);
    }
  };
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
          <Link to={HOME_PATH} className="navbar-logo" onClick={closeMobilMenu}>
            <GiMountains className="navbar-icon" />
            Beskydy trochu jinak
          </Link>
          <div className="menu-icon">
            <button href="#" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to={HOME_PATH}
                className="nav-links"
                onClick={closeMobilMenu}
              >
                Domů
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={TRAILS_PATH}
                className="nav-links"
                onClick={closeMobilMenu}
              >
                Trasy
              </Link>
            </li>
            <li className="nav-item">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="nav-links-mobile" onClick={closeMobilMenu}>
                Přihlášení
              </a>
            </li>
            <li className="nav-item">
              {user && (
                <Link
                  to={SAVED_TRAILS_PATH}
                  className="nav-links"
                  onClick={closeMobilMenu}
                >
                  <HikingIcon /> Moje Trasy
                </Link>
              )}
            </li>
          </ul>
          {button && !user && (
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
          {user && (
            <Button buttonStyle="btn--outline" onClick={handleLogout}>
              Odhlášení
            </Button>
          )}
          <p className="userInfo"> {user?.displayName}</p>
          {user && (
            // eslint-disable-next-line jsx-a11y/img-redundant-alt
            <img
              className="profilePic"
              src={user?.photoURL}
              alt="Profile picture"
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

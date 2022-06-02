import React, { useState, useMemo } from "react";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SpeedIcon from "@mui/icons-material/Speed";
import ShareIcon from "@mui/icons-material/Share";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "./TrailsItem.css";
import ModalShare from "./ModalShare";
import Image from "../components/Image";
import { useUser, toggleTrailLike } from "../context/userContext";
import { Link } from "react-router-dom";
import { DETAIL_PATH } from "../Paths";

function TrailsItem({
  uid,
  imageURL,
  lenght,
  altitude,
  difficulty,
  title,
  description,
  peak,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const { userData } = useUser();
  const isLiked = useMemo(() => userData?.savedTrails.includes(uid), [
    userData,
  ]);
  return (
    <>
      <div className="trailsItem__container">
        <div className="trailsItem">
          <Image imageURL={imageURL} />
          <div className="trailsItem_icons">
            <SwapCallsIcon className="trailsItem__length" />
            <p> {lenght} km </p>
            <NorthEastIcon className="trailsItem__altitude" />
            <p> {altitude} m </p>
            <SpeedIcon className="trailsItem__difficulty" />
            <p> {difficulty} </p>
          </div>
          <div className="trailsItem__info">
            <div className="trailsItem__infoTop">
              <Link to={`${DETAIL_PATH}/${uid}`}>
                <h2>{title}</h2>
              </Link>
              <p>{description}</p>
            </div>
            <div className="trailsItem__infoBottom">
              <div className="trailsItem__share">
                <ShareIcon
                  className="trailsItem__share openModalBtn"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                />
                {modalOpen && <ModalShare setOpenModal={setModalOpen} />}
              </div>
              <div
                className="trailsItem__save"
                onClick={() => toggleTrailLike(userData, uid)}
                onKeyUp
                role="button"
                tabIndex="0"
              >
                {isLiked ? <StarIcon /> : <StarBorderIcon />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TrailsItem;

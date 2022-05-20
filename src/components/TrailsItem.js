import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { UserAuth } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SpeedIcon from "@mui/icons-material/Speed";
import ShareIcon from "@mui/icons-material/Share";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  EmailShareButton,
  FacebookShareButton,
  WhatsappShareButton,
} from "react-share";
import "../components/TrailsItem.css";
import { db } from "../firebase";
function TrailsItem({
  img,
  lenght,
  altitude,
  difficulty,
  title,
  description,
  location,
}) {
  /*const Trail = ({ item }) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);

    const { user } = UserAuth();

    const trailID = doc(db, "users", `${user?.email}`);

    const saveTrail = async () => {
      if (user?.email) {
        setLike(!like);
        setSaved(true);
        await updateDoc(trailID, {
          savedTrails: arrayUnion({
            id: item.id,
            vrchol: item.vrchol,
          }),
        });
      } else {
        alert("Prosím přihlaš se aby sis mohl uložit trasu");
      }
    };*/

  return (
    <>
      <div className="trailsItem__container">
        <div className="trailsItem">
          <img src={img} alt="" />

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
              <h2>{title}</h2>

              <p>{description}</p>
              <h3> {location} </h3>
            </div>

            <div className="trailsItem__infoBottom">
              <div className="trailsItem__share">
                <ShareIcon className="trailsItem__share" />
              </div>
              <div className="trailsItem__save">
                <StarBorderIcon /> <GradeIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrailsItem;

import React from "react";

import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SpeedIcon from "@mui/icons-material/Speed";
import ShareIcon from "@mui/icons-material/Share";
import GradeIcon from "@mui/icons-material/Grade";
import "../components/TrailsItem.css";

function TrailsItem({
  img,
  lenght,
  altitude,
  difficulty,
  title,
  description,
  location,
}) {
  return (
    <>
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
              <GradeIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrailsItem;

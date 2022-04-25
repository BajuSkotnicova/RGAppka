import React from "react";

import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SpeedIcon from "@mui/icons-material/Speed";
import ShareIcon from "@mui/icons-material/Share";
import GradeIcon from "@mui/icons-material/Grade";
import "../components/TrailsItem.css";

function TrailsItem({
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
        <SwapCallsIcon className="trailsItem__length" />
        <p> {lenght} </p>
        <NorthEastIcon className="trailsItem__altitude" />
        <p> {altitude} </p>
        <SpeedIcon className="trailsItem__difficulty" />
        <p> {difficulty} </p>

        <div className="trailsItem__info">
          <div className="strailsItem__infoTop">
            <h2>{title}</h2>
            <p>____</p>
            <p>{description}</p>
            <h3> {location} </h3>
          </div>

          <div className="strailsItem__infoBottom">
            <div className="trailsItem__share">
              <ShareIcon className="strailsItem__share" />
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

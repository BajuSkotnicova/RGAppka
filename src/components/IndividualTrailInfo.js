import React from "react";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SpeedIcon from "@mui/icons-material/Speed";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

function IndividualTrailInfo({
  img,
  title,
  lenght,
  altitude,
  difficulty,
  description,
  tips,
}) {
  return (
    <div className="container">
      <img src={img} alt="" />
      <div classname="container_infoTop">
        <h2>{title}</h2>
      </div>
      <div className="container_infoBasic">
        <SwapCallsIcon className="trailsItem__length" />
        <p> {lenght} km </p>
        <NorthEastIcon className="trailsItem__altitude" />
        <p> {altitude} m </p>
        <SpeedIcon className="trailsItem__difficulty" />
        <p> {difficulty} </p>
      </div>
      <div className="container_infoBottom">
        <h3>Popis Trasy</h3>
        <p> {description} </p>
      </div>
      <div className="container_infoRight">
        <LightbulbIcon />
        <h3>Tip!</h3>
        <p> {tips} </p>
      </div>
    </div>
  );
}

export default IndividualTrailInfo;

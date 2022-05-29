import React from "react";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SpeedIcon from "@mui/icons-material/Speed";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import "./IndividualTrailInfo.css";

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
    <div className="containerTrail">
      <img src={img} alt="" />
      <div className="containerTrail_infoTop">
        <h2>{title}</h2>
      </div>
      <div className="containerTrail_infoBasic">
        <SwapCallsIcon className="Trail__length" />
        <p> {lenght} km </p>
        <NorthEastIcon className="Trail__altitude" />
        <p> {altitude} m </p>
        <SpeedIcon className="tTrail__difficulty" />
        <p> {difficulty} </p>
      </div>
      <div className="containerTrail_infoBottom">
        <h3>Popis Trasy</h3>
        <p> {description} </p>
      </div>
      <div className="containerTrail_infoRight">
        <LightbulbIcon />
        <p> {tips} </p>
      </div>
    </div>
  );
}

export default IndividualTrailInfo;

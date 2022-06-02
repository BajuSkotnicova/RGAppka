import React from "react";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SpeedIcon from "@mui/icons-material/Speed";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Image from "../components/Image";
import Maps from "../components/Map";
import "./IndividualTrailInfo.css";

function IndividualTrailInfo({
  uid,
  imageURL,
  title,
  lenght,
  altitude,
  difficulty,
  descriptionL,
  tips,
}) {
  return (
    <div className="containerTrail">
      <h2>{title}</h2>
      <Image imageURL={imageURL} />
      <div className="containerTrail_infoTop">
        <h3>Základní informace</h3>
      </div>
      <div className="containerTrail_infoBasic">
        <SwapCallsIcon className="Trail__length" />
        <p> {lenght} km </p>
        <NorthEastIcon className="Trail__altitude" />
        <p> {altitude} m </p>
        <SpeedIcon className="Trail__difficulty" />
        <p> {difficulty} </p>
      </div>
      <div className="containerTrail_map">
        <Maps />
      </div>
      <div className="containerTrail_infoBottom">
        <h3>Popis Trasy</h3>
        <p> {descriptionL} </p>
      </div>

      <div className="containerTrail_infoRight">
        <div className="tip">
          <LightbulbIcon />{" "}
        </div>

        <p> {tips} </p>
      </div>
    </div>
  );
}

export default IndividualTrailInfo;

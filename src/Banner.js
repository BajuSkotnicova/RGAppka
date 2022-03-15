import React from "react";
import "./Banner.css";
import Button from "@mui/material/Button";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_info">
        <h1>Wandering where your next hike´s gonna be?</h1>
        <h5>let´s join me and discover new trails</h5>
        <Button variant="outlined">Explore</Button>
      </div>
    </div>
  );
}

export default Banner;

import React from "react";
import "./Banner.css";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div className="banner">
      <div className="banner_info">
        <h1>Beskydský Mont Blanc</h1>
      </div>
      <div className="banner-btns">
        <Link to="/trasy">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Prozkoumat
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Banner;

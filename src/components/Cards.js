import React from "react";
import "../components/Cards.css";

function Cards({ title, description }) {
  return (
    <div className="card">
      <div className="card__info">
        <h2>{title}</h2>
        <h4>{description}</h4>
      </div>
    </div>
  );
}

export default Cards;

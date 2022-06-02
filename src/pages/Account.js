import React from "react";
import SavedTrails from "../components/SavedTrails";
import "./Account.css";

function Account(props) {
  return (
    <>
      <div className="containerInfo">
        <h2>Moje trasy </h2>
        <SavedTrails {...props} />
      </div>
    </>
  );
}

export default Account;

import React from "react";
import SavedTrails from "../components/SavedTrails";

function Account() {
  return (
    <>
      <div className="containerInfo">
        <h2>Moje trasy </h2>
        <SavedTrails />
      </div>
    </>
  );
}

export default Account;

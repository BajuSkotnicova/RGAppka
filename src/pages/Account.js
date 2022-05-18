import React from "react";
import SavedTrails from "../components/SavedTrails";
import { Button } from "../components/Button";
import { UserAuth } from "../firebase";

const Account = () => {
  const { logOut, user } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>
        <h1>Moje trasy</h1>
        <p>Ahoj, {user?.displayName} </p>
        <p> {user?.displayPhotoUrl}</p>
      </div>
      <SavedTrails />
      <Button buttonStyle="btn--outline" onClick={{ handleSignOut }}>
        Odhlásit se
      </Button>
    </div>
  );
};

export default Account;

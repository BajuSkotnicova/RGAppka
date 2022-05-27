import React from "react";
import SavedTrails from "../components/SavedTrails";
import { Button } from "../components/Button";
import { useAuthState } from "react-firebase-hooks/auth";

const Account = () => {
  const [user, loading, error] = useAuthState(auth);

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
      </div>
      <SavedTrails />
      <Button buttonStyle="btn--outline" onClick={{ handleSignOut }}>
        Odhlásit se
      </Button>
    </div>
  );
};

export default Account;

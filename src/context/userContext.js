import React, { useState, useEffect } from "react";
import { auth, getDocument, getCollection } from "../firebase";
import {
  where,
  query,
  arrayUnion,
  arrayRemove,
  updateDoc,
} from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
const UserContext = React.createContext();
const userCollection = getCollection("users");
const UserProvider = ({ children }) => {
  const [currentUserData, setCurrentUserData] = useState();
  const [user] = useAuthState(auth);
  const q = query(userCollection, where("uid", "==", user?.uid || ""));
  const [usersValue, usersLoading] = useCollectionData(q);
  useEffect(() => {
    if (!usersLoading && usersValue && usersValue.length > 0) {
      setCurrentUserData(usersValue[0]);
      return;
    }
    setCurrentUserData(null);
  }, [usersValue, usersLoading]);
  return (
    <UserContext.Provider
      value={{ userData: currentUserData, currentUser: user }}
    >
      {children}
    </UserContext.Provider>
  );
};
const useUser = () => {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
const toggleTrailLike = async (userData, trailID) => {
  const userDocRef = getDocument("users", `${userData?.uid}`);
  if (userData) {
    if (userData && userData.savedTrails.includes(trailID)) {
      await updateDoc(userDocRef, { savedTrails: arrayRemove(trailID) });
    } else {
      await updateDoc(userDocRef, { savedTrails: arrayUnion(trailID) });
    }
  } else {
    alert("Prosím přihlaš se aby sis mohl uložit trasu");
  }
};
export { useUser, UserProvider, toggleTrailLike };

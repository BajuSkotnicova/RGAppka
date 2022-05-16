import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const SavedTrails = () => {
  const [trails, setTrails] = useState([]);
  const { user } = useAuthState();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setTrails(doc.data()?.SavedTrails);
    });
  }, [user?.email]);
  const trailRef = doc(db, "users", `${user?.email}`);
  const deleteTrail = async (passedID) => {
    try {
      const result = trails.filter((vrchol) => vrchol.id !== passedID);
      await updateDoc(trailRef, {
        SavedTrails: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return <div></div>;
};

export default SavedTrails;

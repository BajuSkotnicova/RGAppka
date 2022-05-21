import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useAuthState } from "react-firebase-hooks/auth";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const SavedTrails = () => {
  const [trails, setTrails] = useState([]);
  [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setTrails(doc.data()?.SavedTrails);
    });
  }, [user?.user]);
  const trailRef = doc(db, "users", `${user?.user}`);
  const deleteTrail = async (passedID) => {
    try {
      const result = trails.filter((item) => item.id !== passedID);
      await updateDoc(trailRef, {
        SavedTrails: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <p onClick={() => deleteTrail(item.id)}>
        {" "}
        <AiOutlineClose />
      </p>
    </div>
  );
};

export default SavedTrails;

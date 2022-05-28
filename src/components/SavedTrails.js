import React, { useState, useEffect } from "react";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { AiOutlineClose } from "react-icons/ai";

const SavedTrails = () => {
  const [trails, setTrails] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.uid}`), (doc) => {
      setTrails(doc.data()?.SavedTrails);
    });
  }, [user?.uid]);

  const trailRef = doc(db, "users", `${user?.uid}`);
  const deleteTrail = async (passedID) => {
    try {
      const result = trails.filter((doc) => doc.id !== passedID);
      await updateDoc(trailRef, {
        savedShows: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {trails.map((doc) => (
        <div>
          <img ImageURL={doc?.imageURL} />

          <p> {doc?.title} </p>

          <p onClick={() => deleteTrail(doc.id)}>
            {" "}
            <AiOutlineClose />{" "}
          </p>
        </div>
      ))}
    </>
  );
};

export default SavedTrails;

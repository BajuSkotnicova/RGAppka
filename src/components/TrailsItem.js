import React, { useState } from "react";
import { useDownloadURL } from "react-firebase-hooks/storage";

import { storageRef } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SpeedIcon from "@mui/icons-material/Speed";
import ShareIcon from "@mui/icons-material/Share";
import GradeIcon from "@mui/icons-material/Grade";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useAuthState } from "react-firebase-hooks/auth";
import "../components/TrailsItem.css";
import { db, auth } from "../firebase";
import ModalShare from "../components/ModalShare";

const Image = ({ imageURL }) => {
  const [value, loading, error] = useDownloadURL(storageRef(imageURL));
  if (loading) return <div>...</div>;
  if (error) return <div>chyba</div>;
  return <img src={value} alt="Preview" />;
};
function TrailsItem({
  item,
  imageURL,
  lenght,
  altitude,
  difficulty,
  title,
  description,
}) {
  const [modalOpen, setModalOpen] = useState(false);

  const [like, setLike] = useState(false);
  const [user] = useAuthState(auth);
  const [saved, setSaved] = useState(false);

  const trailID = doc(db, "users", `${user?.email}`);

  const savedTrails = async () => {
    if (user?.email) {
      setLike(!like);
      setSaved(true);
      await updateDoc(trailID, {
        savedTrails: arrayUnion({
          id: item.id,
          title: item.title,
        }),
      });
    } else {
      alert("Prosím přihlaš se aby sis mohl uložit trasu");
    }
  };

  return (
    <>
      <div className="trailsItem__container">
        <div className="trailsItem">
          <Image imageURL={imageURL} />​
          <div className="trailsItem_icons">
            <SwapCallsIcon className="trailsItem__length" />
            <p> {lenght} km </p>
            <NorthEastIcon className="trailsItem__altitude" />
            <p> {altitude} m </p>
            <SpeedIcon className="trailsItem__difficulty" />
            <p> {difficulty} </p>
          </div>
          <div className="trailsItem__info">
            <div className="trailsItem__infoTop">
              <h2>{title}</h2>​<p>{description}</p>
            </div>
            <div className="trailsItem__infoBottom">
              <div className="trailsItem__share">
                <ShareIcon
                  className="trailsItem__share"
                  className="openModalBtn"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                />
                {modalOpen && <ModalShare setOpenModal={setModalOpen} />}
              </div>
              <div className="trailsItem__save" onClick={savedTrails}>
                {like ? <StarIcon /> : <StarBorderIcon />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TrailsItem;

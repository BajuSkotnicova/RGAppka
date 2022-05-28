import React, { useState, useMemo } from "react";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { storageRef } from "../firebase";
import { arrayUnion, doc, arrayRemove, updateDoc } from "firebase/firestore";
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import SpeedIcon from "@mui/icons-material/Speed";
import ShareIcon from "@mui/icons-material/Share";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import "../components/TrailsItem.css";
import { db } from "../firebase";
import ModalShare from "../components/ModalShare";

const Image = ({ imageURL }) => {
  const [value, loading, error] = useDownloadURL(storageRef(imageURL));
  if (loading) return <div>...</div>;
  if (error) return <div>chyba</div>;
  return <img src={value} alt="Preview" />;
};
function TrailsItem({
  id,
  imageURL,
  lenght,
  altitude,
  difficulty,
  title,
  description,
  userData,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const like = useMemo(() => userData?.savedTrails.find((t) => t.id === id), [
    userData,
  ]);
  const userDocId = useMemo(() => doc(db, "users", `${userData?.uid}`), [
    userData,
  ]);
  const savedTrails = async () => {
    if (userData) {
      if (userData && userData.savedTrails.find((st) => st.id === id)) {
        await updateDoc(userDocId, {
          savedTrails: arrayRemove({
            id,
            title,
            imageURL,
          }),
        });
      } else {
        await updateDoc(userDocId, {
          savedTrails: arrayUnion({
            id,
            title,
            imageURL,
          }),
        });
      }
    } else {
      alert("Prosím přihlaš se aby sis mohl uložit trasu");
    }
  };
  return (
    <>
      <div className="trailsItem__container">
        <div className="trailsItem">
          <Image imageURL={imageURL} />
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
              <h2>{title}</h2>
              <p>{description}</p>
            </div>
            <div className="trailsItem__infoBottom">
              <div className="trailsItem__share">
                <ShareIcon
                  className="trailsItem__share openModalBtn"
                  onClick={() => {
                    setModalOpen(true);
                  }}
                />
                {modalOpen && <ModalShare setOpenModal={setModalOpen} />}
              </div>
              <p className="trailsItem__save" onClick={savedTrails}>
                {like ? <StarIcon /> : <StarBorderIcon />}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TrailsItem;

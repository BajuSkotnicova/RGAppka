import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { toggleTrailLike, useUser } from "../context/userContext";
import Image from "../components/Image";
import "./SavedTrails.css";

import pic from "../pictures/running-man.png";

const SavedTrails = ({ trails, loading, error }) => {
  const { userData } = useUser();

  if (error) return <div>Něco se pokazilo.</div>;
  if (loading) return <div>načítám</div>;

  const savedTrails = trails.filter((trail) =>
    userData.savedTrails.includes(trail.uid)
  );
  if (!savedTrails || savedTrails.length === 0) {
    return (
      <div className="noTrails">
        Zatím nemáš uloženy žádné trasy. Utíkej si nějaké uložit
        <img src={pic} alt="pictures" className="image" />
      </div>
    );
  }
  return (
    <>
      <div className="savedTrails">
        {savedTrails.map((trail) => (
          <div className="savedTrailsInfo" key={trail.uid}>
            <Image imageURL={trail?.imageURL} />
            <div className="savedTrailsInfoBottom">
              <p> {trail?.title} </p>
              <button onClick={() => toggleTrailLike(userData, trail.uid)}>
                <AiOutlineClose />
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default SavedTrails;

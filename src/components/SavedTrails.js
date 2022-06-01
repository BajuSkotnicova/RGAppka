import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { AiOutlineClose } from "react-icons/ai";
import { toggleTrailLike, useUser } from "../context/userContext";
import { addUidConverter, getCollection } from "../firebase";
import Image from "../components/Image";
import "./SavedTrails.css";

const SavedTrails = () => {
  const collection = getCollection("trails");
  const [trails, loading, error] = useCollectionData(
    collection.withConverter(addUidConverter),
    { snapshotListenOptions: { includeMetadataChanges: true } }
  );
  const { userData } = useUser();
  if (error) return <div>Něco se pokazilo.</div>;
  if (loading) return <div>načítám</div>;
  const savedTrails = trails.filter((trail) =>
    userData.savedTrails.includes(trail.uid)
  );
  if (!savedTrails || savedTrails.length === 0) {
    return <div className="noTrails">Zatím nemáš uloženy žádné trasy</div>;
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

import React from "react";
import IndividualTrailInfo from "../components/IndividualTrailInfo";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addUidConverter, getCollection } from "../firebase";
import "./Detail.css";

function Detail() {
  const collection = getCollection("trails");
  const [trails, loading, error] = useCollectionData(
    collection.withConverter(addUidConverter),
    { snapshotListenOptions: { includeMetadataChanges: true } }
  );
  if (error) return <div>Sorry something went wrong.</div>;
  if (loading) return <div>loading</div>;
  if (!trails || trails.length === 0) return <div>No trails Yet</div>;
  return (
    <div className="detail">
      {trails.map((item) => (
        <IndividualTrailInfo key={item.uid} {...item} />
      ))}
    </div>
  );
}

export default Detail;

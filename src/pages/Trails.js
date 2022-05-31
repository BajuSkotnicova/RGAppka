import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { addUidConverter, getCollection } from "../firebase";
import "../pages/Trails.css";
import Search from "../components/Search";
import TrailsData from "../Data.json";
import TrailsItem from "../components/TrailsItem";
import "./Trails.css";
function Trails() {
  const collection = getCollection("trails");
  const [trails, loading, error] = useCollectionData(
    collection.withConverter(addUidConverter),
    { snapshotListenOptions: { includeMetadataChanges: true } }
  );
  if (error) return <div>Sorry something went wrong.</div>;
  if (loading) return <div>loading</div>;
  if (!trails || trails.length === 0) return <div>No trails Yet</div>;
  return (
    <>
      <Search placeholder="Napiš vrchol..." data={TrailsData} />
      <div className="trails">
        {trails.map((item) => (
          <TrailsItem key={item.uid} {...item} />
        ))}
      </div>
    </>
  );
}
export default Trails;

import React from "react";
import { useParams } from "react-router-dom";
import IndividualTrailInfo from "../components/IndividualTrailInfo";
import "./Detail.css";

function Detail({ trails, loading, error }) {
  const { id } = useParams();
  console.log("id: ", id, trails);

  if (error) return <div>Sorry something went wrong.</div>;
  if (loading) return <div>loading</div>;
  if (!trails || trails.length === 0) return <div>No trails Yet</div>;

  const currentTrail = trails.find((t) => t?.uid === id);
  if (!currentTrail) return <div>Trail with this id {id} doesnt exist</div>;
  console.log("currentTrail: ", currentTrail);

  return (
    <div className="detail">
      <IndividualTrailInfo key={currentTrail.uid} {...currentTrail} />
    </div>
  );
}

export default Detail;

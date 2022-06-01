import React from "react";
import "../pages/Trails.css";
import Search from "../components/Search";

import TrailsItem from "../components/TrailsItem";
import "./Trails.css";

function Trails({ trails, loading, error }) {
  if (error) return <div>Sorry something went wrong.</div>;
  if (loading) return <div>loading</div>;
  if (!trails || trails.length === 0) return <div>No trails Yet</div>;
  return (
    <>
      <Search placeholder="Napiš vrchol..." />
      <div className="trails">
        {trails.map((item) => (
          <TrailsItem key={item.uid} {...item} />
        ))}
      </div>
    </>
  );
}
export default Trails;

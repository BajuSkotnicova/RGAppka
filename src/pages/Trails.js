import React from "react";
import "../pages/Trails.css";
import useSearch from "../components/Search";
import TrailsItem from "../components/TrailsItem";
import "./Trails.css";

function Trails({ trails, loading, error }) {
  const [filteredData, Search] = useSearch(trails);

  if (error) return <div>Sorry something went wrong.</div>;
  if (loading) return <div>loading</div>;
  if (!trails || trails.length === 0) return <div>No trails Yet</div>;

  return (
    <>
      <Search placeholder="Napiš trasu..." data={trails} />
      <div className="trails">
        {filteredData?.length === 0 && <div>Too much filtering</div>}
        {filteredData.map((item) => (
          <TrailsItem key={item.uid} {...item} />
        ))}
      </div>
    </>
  );
}
export default Trails;

import React from "react";
import { useDownloadURL } from "react-firebase-hooks/storage";
import { storageRef } from "../firebase";
const Image = ({ imageURL }) => {
  const [value, loading, error] = useDownloadURL(storageRef(imageURL));
  if (loading) return <div>...</div>;
  if (error) return <div>chyba</div>;
  return <img src={value} alt="Preview" />;
};

export default Image;

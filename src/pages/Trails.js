import React, { useState, useEffect } from "react";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { app, auth } from "../firebase";
import "../pages/Trails.css";
import Search from "../components/Search";
import TrailsData from "../Data.json";
import TrailsItem from "../components/TrailsItem";
function Trails() {
  const [data, setData] = useState([]);
  const [user, userLoading] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "trails"),
    { snapshotListenOptions: { includeMetadataChanges: true } }
  );
  const [usersValue, usersLoading] = useCollection(
    collection(getFirestore(app), "users"),
    { snapshotListenOptions: { includeMetadataChanges: true } }
  );
  useEffect(() => {
    const tempData = usersValue?.docs
      ?.find((doc) => doc?.id === user?.uid)
      ?.data();
    setUserData(tempData || null);
  }, [usersValue, user]);
  if (!loading && !error && data.length === 0) {
    setData(value.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }
  if (loading || usersLoading || userLoading) return <div>loading</div>;
  return (
    <>
      <Search placeholder="Napiš vrchol..." data={TrailsData} />
      <div className="trails">
        {data.map((item) => (
          <TrailsItem key={item.id} {...item} userData={userData} />
        ))}
      </div>
    </>
  );
}
export default Trails;

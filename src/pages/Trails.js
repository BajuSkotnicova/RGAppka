import React from "react";
import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { app } from "../firebase";
import "../pages/Trails.css";
import Search from "../components/Search";
import TrailsData from "../Data.json";
import TrailsItem from "../components/TrailsItem";

/*const TRAILS_DATA = [
  {
    id: 1,
    img: pic1,
    lenght: 20,
    altitude: 900,
    difficulty: "lehká",
    title: "Naučná stezka Ondřejník Skalka",
    description:
      "Popis na 3 řádky. Moc se tu toho nezmestí ale možná se to využije. S 3mi řadkami to vypadá takhle",
    location: "chata Ondřejník -> Skalka",
    path: "/trasa1",
  },
  {
    id: 2,
    img: pic1,
    lenght: 18,
    altitude: 600,
    difficulty: "lehká",
    title: "Naučná stezka Ondřejník Skalka",
    description:
      "Popis na 3 řádky. Moc se tu toho nezmestí ale možná se to využije. S 3mi řadkami to vypadá takhle",
    location: "chata Ondřejník -> Skalka",
    path: "/trasa2",
  },
  {
    id: 3,
    img: pic1,
    lenght: 28,
    altitude: 1200,
    difficulty: "střední",
    title: "Naučná stezka Ondřejník Skalka",
    description:
      "Popis na 3 řádky. Moc se tu toho nezmestí ale možná se to využije. S 3mi řadkami to vypadá takhle",
    location: "chata Ondřejník -> Skalka",
    path: "/trasa3",
  },
  {
    id: 4,
    img: pic1,
    lenght: 16,
    altitude: 270,
    difficulty: "lehká",
    title: "Naučná stezka Ondřejník Skalka",
    description:
      "Popis na 3 řádky. Moc se tu toho nezmestí ale možná se to využije. S 3mi řadkami to vypadá takhle",
    location: "chata Ondřejník -> Skalka",
    path: "/trasa4",
  },
  {
    id: 5,
    img: pic1,
    lenght: 27,
    altitude: 900,
    difficulty: "střední",
    title: "Naučná stezka Ondřejník Skalka",
    description:
      "Popis na 3 řádky. Moc se tu toho nezmestí ale možná se to využije. S 3mi řadkami to vypadá takhle",
    location: "chata Ondřejník -> Skalka",
    path: "/trasa5",
  },
  {
    id: 6,
    img: pic1,
    lenght: 40,
    altitude: 1950,
    difficulty: "těžká",
    title: "Naučná stezka Ondřejník Skalka",
    description:
      "Popis na 3 řádky. Moc se tu toho nezmestí ale možná se to využije. S 3mi řadkami to vypadá takhle",
    location: "chata Ondřejník -> Skalka",
    path: "/trasa6",
  },
];*/

function Trails() {
  const [data, setData] = React.useState([]);

  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "trails"),
    { snapshotListenOptions: { includeMetadataChanges: true } }
  );
  if (!loading && !error && data.length === 0) {
    setData(value.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  if (loading) return <div>loading</div>;

  return (
    <>
      <Search placeholder="Napiš vrchol..." data={TrailsData} />
      <div className="trails">
        {data.map((item) => (
          <TrailsItem key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}

export default Trails;

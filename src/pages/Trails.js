import React from "react";
import "../pages/Trails.css";
import TrailsItem from "../components/TrailsItem";

function Trails() {
  return (
    <div className="trails">
      <TrailsItem
        lenght={16}
        altitude={270}
        difficulty="lehká"
        title="Naučná stezka Ondřejník Skalka"
        description="Popis na 3 řádky. Moc se tu toho nezmestí ale možná se to využije. S 3mi řadkami to vypadá takhle"
        location="chata Ondřejník -> Skalka"
        path="/trasa1"
      />
      <TrailsItem
        lenght={16}
        altitude={270}
        difficulty="lehká"
        title="Naučná stezka Ondřejník Skalka"
        description="Popis na 3 řádky. Moc se tu toho nezmestí ale možná se to využije. S 3mi řadkami to vypadá takhle"
        location="chata Ondřejník -> Skalka"
        path="/trasa3"
      />

      <TrailsItem
        lenght={16}
        altitude={270}
        difficulty="lehká"
        title="Naučná stezka Ondřejník Skalka"
        description="Popis na 3 řádky. Moc se tu toho nezmestí ale možná se to využije. S 3mi řadkami to vypadá takhle"
        location="chata Ondřejník -> Skalka"
        path="/trasa3"
      />
      <TrailsItem
        lenght={16}
        altitude={270}
        difficulty="lehká"
        title="Naučná stezka Ondřejník Skalka"
        description="Popis na 3 řádky. Moc se tu toho nezmestí ale možná se to využije. S 3mi řadkami to vypadá takhle"
        location="chata Ondřejník -> Skalka"
        path="/trasa4"
      />
      <TrailsItem
        lenght={27}
        altitude={900}
        difficulty="střední"
        title="Naučná stezka Ondřejník Skalka"
        description="Popis na 3 řádky. Moc se tu toho nezmestí ale možná se to využije. S 3mi řadkami to vypadá takhle"
        location="chata Ondřejník -> Skalka"
        path="/trasa5"
      />
      <TrailsItem
        lenght={40}
        altitude={1950}
        difficulty="těžká"
        title="Naučná stezka Ondřejník Skalka"
        description="Popis na 3 řádky. Moc se tu toho nezmestí ale možná se to využije. S 3mi řadkami to vypadá takhle"
        location="chata Ondřejník -> Skalka"
        path="/trasa6"
      />
    </div>
  );
}

export default Trails;

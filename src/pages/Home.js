import React from "react";
import "./Home.css";
import Cards from "../components/Cards";

function Home() {
  return (
    <div className="homeSection">
      <Cards
        title="Navštiv originální místa"
        description="v beskydech se nachází množství zajimavých míst o kterých jen málokto ví."
      />
      <Cards
        title="Sdílej s přáteli"
        description="v beskydech se nachází množství zajimavých míst o kterých jen málokto ví.."
      />
      <Cards
        title="Vytvoř si itinerář"
        description="v beskydech se nachází množství zajimavých míst o kterých jen málokto ví.."
      />
      <Cards
        title="Zvol si trasu podle svých možností"
        description="v beskydech se nachází množství zajimavých míst o kterých jen málokto ví.."
      />
    </div>
  );
}

export default Home;

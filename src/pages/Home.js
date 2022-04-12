import React from "react";
import "./Home.css";
import Cards from "../components/Cards";
import card1 from "../pictures/card1.png";
import card2 from "../pictures/card2.png";
import card3 from "../pictures/card3.png";
import card4 from "../pictures/card4.png";

function Home() {
  return (
    <div className="homeSection">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Cards
              src={card1}
              title="Navštiv originální místa"
              description="v beskydech se nachází
      množství zajimavých míst o kterých jen málokto ví."
            />
            <Cards
              src={card2}
              title="Sdílej s přáteli"
              description="v beskydech se nachází množství
      zajimavých míst o kterých jen málokto ví.."
            />
            <Cards
              src={card3}
              title="Vytvoř si itinerář"
              description="v beskydech se nachází množství
      zajimavých míst o kterých jen málokto ví.."
            />
            <Cards
              src={card4}
              title="Zvol si trasu podle svých možností"
              description="v beskydech se
      nachází množství zajimavých míst o kterých jen málokto ví.."
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import "./Home.css";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import card1 from "../pictures/card1.png";
import card2 from "../pictures/card2.png";
import card3 from "../pictures/card3.png";
import card4 from "../pictures/card4.png";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../components/SliderData";

function Home() {
  return (
    <>
      <Banner />

      <div className="homeSection">
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <Cards
                src={card1}
                title="Navštiv originální místa"
                description="v Beskydech se nachází
      množství zajimavých míst o kterých jen málokdo ví."
              />
              <Cards
                src={card2}
                title="Sdílej s přáteli"
                description="poděl se s přáteli o svá nová oblíbená místa."
              />
              <Cards
                src={card3}
                title="Vytvoř si itinerář"
                description="udělej si seznam míst, které chceš navštívít."
              />
              <Cards
                src={card4}
                title="Zvol si trasu podle svých možností"
                description="Chceš něco nenáročného nebo nějakou pořádnou makačku? Každý si vybere."
              />
            </ul>
          </div>
        </div>
      </div>

      <ImageSlider slides={SliderData} />
    </>
  );
}

export default Home;

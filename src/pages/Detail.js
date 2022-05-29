import React from "react";
import pic from "../pictures/pic5v3.jpg";
import IndividualTrailInfo from "../components/IndividualTrailInfo";
import "./Detail.css";

function Detail() {
  return (
    <div className="detail">
      <IndividualTrailInfo
        img={pic}
        title="Okolo Trávného"
        lenght="35"
        altitude="1461"
        difficulty="těžká"
        description="Pojď si s námi dát do těla a vydej se na okruh kolem přehrady Šance, vrcholu Trávného a vystoupej na Lysou horu.Pojď si s námi dát do těla a vydej se na okruh kolem přehrady Šance, vrcholu Trávného a vystoupej na Lysou horu"
        tips="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nunc tincidunt ante vitae massa. Ut tempus purus at lorem. Donec quis nibh at felis congue commodo. In sem justo, commodo ut, suscipit at, pharetra vitae, orci"
      />
    </div>
  );
}

export default Detail;

import React from "react";
import { Map, PathLayer, Path, MouseControl } from "react-mapycz";

function Maps() {
  return (
    <div>
      <Map height="250px" center={{ lat: 49.536, lng: 18.499 }} zoom={11}>
        <MouseControl zoom={true} />
        <PathLayer>
          <Path
            id="1"
            coords={[
              { lat: 49.5140981, lng: 18.4164992 },
              { lat: 49.5149342, lng: 18.5272853 },
              { lat: 49.5348797, lng: 18.5252253 },
              { lat: 49.5544178, lng: 18.5102644 },
              { lat: 49.5751128, lng: 18.4908453 },
              { lat: 49.5140981, lng: 18.4164992 },
            ]}
            criterion="turist2"
            dynamicRoute={true}
          />
        </PathLayer>
        <PathLayer>
          <Path
            id="2"
            coords={[
              { lat: 49.5941353, lng: 18.5248642 },
              { lat: 49.5942139, lng: 18.6021883 },
              { lat: 49.6326553, lng: 18.59349 },
              { lat: 49.6216747, lng: 18.5587347 },
              { lat: 49.6206153, lng: 18.5333342 },
              { lat: 49.5941353, lng: 18.5248642 },
            ]}
            criterion="turist2"
            dynamicRoute={true}
          />
        </PathLayer>

        <PathLayer>
          <Path
            id="3"
            coords={[
              { lat: 49.5847283, lng: 18.3389308 },
              { lat: 49.5878453, lng: 18.3207497 },
              { lat: 49.5848961, lng: 18.3128103 },
              { lat: 49.5545319, lng: 18.2985625 },
              { lat: 49.5472653, lng: 18.2990772 },
              { lat: 49.5508847, lng: 18.3084331 },
              { lat: 49.5847283, lng: 18.3389308 },
            ]}
            criterion="turist2"
            dynamicRoute={true}
          />
        </PathLayer>

        <PathLayer>
          <Path
            id="4"
            coords={[
              { lat: 49.5486086, lng: 18.3379908 },
              { lat: 49.5271608, lng: 18.3355233 },
              { lat: 49.5134817, lng: 18.3372828 },
              { lat: 49.4945936, lng: 18.3564125 },
              { lat: 49.5203983, lng: 18.3772692 },
              { lat: 49.5486086, lng: 18.3379908 },
            ]}
            criterion="turist2"
            dynamicRoute={true}
          />
        </PathLayer>

        <PathLayer>
          <Path
            id="5"
            coords={[
              { lat: 49.5260361, lng: 18.6372236 },
              { lat: 49.5147675, lng: 18.6054956 },
              { lat: 49.5551519, lng: 18.6196578 },
              { lat: 49.5645053, lng: 18.6396561 },
              { lat: 49.5533144, lng: 18.6489258 },
              { lat: 49.5430122, lng: 18.6359656 },
              { lat: 49.5260361, lng: 18.6372236 },
            ]}
            criterion="turist2"
            dynamicRoute={true}
          />
        </PathLayer>
      </Map>
    </div>
  );
}

export default Maps;

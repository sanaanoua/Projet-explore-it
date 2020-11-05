import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import UseMaps from "./UseMaps";

function MapPage() {
  return (
    <div className="container-map-page">
      <div className="content-map-page">
        <Link to="/" className="return-landing-page"></Link>
        <p className="next-pos">PROCHAIN POINT: GRAND PLACE</p>
        <p className="dist-next-pos">200M</p>
      </div>
      <UseMaps className="map-container" />
      <Slider />
    </div>
  );
}

export default MapPage;

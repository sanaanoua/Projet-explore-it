import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import UseMaps from "./UseMaps";
import { motion, AnimatePresence } from "framer-motion";

function MapPage() {
  return (
    <motion.div
      exit={{ x: "+100vw" }}
      animate={{ x: 0 }}
      initial={{ x: "=100vw" }}
      transition={{ transition: "linear" }}
      className="container-map-page"
    >
      <div className="content-map-page">
        <Link to="/" className="return-landing-page"></Link>
        <p className="next-pos">PROCHAIN POINT: GRAND PLACE</p>
        <p className="dist-next-pos">200M</p>
      </div>
      <UseMaps className="map-container" />
      <Slider />
    </motion.div>
  );
}

export default MapPage;

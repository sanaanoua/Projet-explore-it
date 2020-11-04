import React from "react";
import { Link } from "react-router-dom";

function Card() {
  return (
    <div className="Card">
      <img className="card_image" src="image.jpg" />
      <div className="Content">
        <h1>Temps de découverte</h1>
        <div className="btn">
          <button>1h</button>
          <button>2h</button>
          <button>4h</button>
        </div>
        <Link to="/map">
          <button>genere ton parcours</button>
        </Link>
      </div>
    </div>
  );
}
export default Card;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import image_girl from "./Assets/girl_travel.jpg";
import Button from "./Button";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  

  render() {
    return (
      <div className="card">
        <img className="card_image" src={image_girl} alt="girl_travel" />
        <div className="content">
          <p className="card_title">Temps de découverte</p>

          <div className="button_container">
            <Button time={1} handleClick={this.props.handleTime}></Button>
            <Button time={2} handleClick={this.props.handleTime}></Button>
            <Button time={4} handleClick={this.props.handleTime}></Button>
          </div>
          <Link
            to={{
              pathname: "/MapPage",
              state: {
                tripTime: this.state.tripTime
              },
            }}
          >
            {" "}
            <button className="button_parcours">Genere ton parcours</button>
          </Link>
        </div>
      </div>
    );
  }
}
export default Card;

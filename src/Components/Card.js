import React, { Component } from "react";
import { Link } from "react-router-dom";
import image_girl from "./Assets/girl_travel.jpg";
import Button from "./Button";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripHour: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(time, e) {
    console.log(time);
    this.setState({ tripHour: time });
  }

  render() {
    return (
      <div className="card">
        <img className="card_image" src={image_girl} alt="girl_travel" />
        <div className="content">
          <p className="card_title">Temps de découverte</p>

          <div className="button_container">
            <Button time={1} handleClick={this.handleClick}></Button>
            <Button time={2} handleClick={this.handleClick}></Button>
            <Button time={4} handleClick={this.handleClick}></Button>
          </div>
          <Link
            to={{
              pathname: "/MapPage",
              state: {
                tripTime: this.state.tripHour,
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

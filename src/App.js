import React, { Component } from "react";
import "./App_Color.css";
import MapPage from "./Components/MapPage";
import LandingPage from "./Components/LandingPage";
import { AnimatePresence } from "framer-motion";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripTime: -1,
      myPosition: null,
      trip: null,
    };

    this.handleTime = this.handleTime.bind(this);
    this.handleTrip = this.handleTrip.bind(this);
  }

  componentDidMount = () => {
    this.setMyPosition();
  };

  handleTime(time, e) {
    this.setState({ tripTime: time });
  }

  handleTrip(newTrip) {
    this.setState({ trip: newTrip });
  }

  componentDidUpdate() {}

  setMyPosition = () => {
    let res;
    navigator.geolocation.getCurrentPosition((position) => {
      res = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.setState({ myPosition: res });
    });
  };

  render() {
    return (
      <div className="App">
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <LandingPage
                  tripTime={this.state.tripTime}
                  handleTime={this.handleTime}
                />
              )}
            />
            <Route
              path="/MapPage"
              render={() => (
                <MapPage {...this.state} handleTrip={this.handleTrip} />
              )}
            />
          </Switch>
        </AnimatePresence>
      </div>
    );
  }
}

export default App;

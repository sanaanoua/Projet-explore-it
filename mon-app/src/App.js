import React from "react";
import "./App.css";
import Maps from "./components/Maps";
import LandingPage from "./components/LandingPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/map" component={Maps}></Route>
      </Switch>
    </div>
  );
}

export default App;

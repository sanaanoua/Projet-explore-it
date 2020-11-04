import React from "react";
import "./App.css";
import UseMaps from "./components/useMaps";
import LandingPage from "./components/LandingPage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/map" component={UseMaps}></Route>
      </Switch>
    </div>
  );
}

export default App;

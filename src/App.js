import React from 'react';
import './App.css';
import MainMap from './Components/MainMap'
import Map from './Components/Map'
import LandingPage from './Components/LandingPage';
import { Switch,Route, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/map" component={Map}></Route>
      </Switch>

    
    </div>

  )
  
}

export default App;

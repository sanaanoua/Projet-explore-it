import React from 'react';
import './App.css';
import MapPage from './Components/MapPage'
import LandingPage from './Components/LandingPage';

import { Switch,Route, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
      <Switch>
        <Route exact path="/" component={LandingPage}></Route>
        <Route path="/MapPage" component={MapPage}></Route>
      </Switch>
    
    </div>

  )
}

export default App;

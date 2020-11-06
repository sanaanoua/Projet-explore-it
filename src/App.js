import React from 'react';
import './App.css';
import MapPage from './Components/MapPage'
import LandingPage from './Components/LandingPage';
import { motion, AnimatePresence } from "framer-motion";

import { Switch,Route, useLocation, } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <div className="App">
     <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" component={LandingPage}></Route>
          <Route path="/MapPage" component={MapPage}></Route>
        </Switch>
      </AnimatePresence>
    
    </div>

  )
}

export default App;

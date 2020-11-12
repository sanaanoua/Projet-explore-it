import React, { Component } from 'react';
import './App.css';
import MapPage from './Components/MapPage'
import LandingPage from './Components/LandingPage';
import { motion, AnimatePresence } from "framer-motion";
import { Switch,Route, useLocation, } from 'react-router-dom';

 class App extends Component {
   constructor(props) {
     super(props)   
     this.state = {
        time:1, 
        myPosition: null, 
        trip: null, 
        currentStep:0, 
     }
   } 

  render() {
    return (
      <div className="App">
       <AnimatePresence exitBeforeEnter>
          {/* <Switch location={location} key={location.pathname}> */}
          <Switch>
            <Route exact path="/" component={LandingPage}>

            </Route>
            <Route path="/MapPage" component={MapPage}></Route>
          </Switch>
        </AnimatePresence>
      
      </div>
    )
  
  }
}

export default App

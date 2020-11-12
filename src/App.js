import React, { Component } from 'react';
import './App.css';
import MapPage from './Components/MapPage'
import LandingPage from './Components/LandingPage';
import { AnimatePresence } from "framer-motion";
import { Switch,Route } from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        tripTime : -1,
        myPosition : null,
        trip : null,
        currentStep: 0
    }

    this.handleTime = this.handleTime.bind(this);
    this.handleTrip = this.handleTrip.bind(this);
  }
  
  handleTime(time,e){
    console.log("App time",time);
    this.setState({ tripTime: time });
  }

  handleTrip(newTrip,){
    console.log("App trip :",newTrip);
    this.setState({ trip: newTrip});
  }

  componentDidUpdate(){
    console.log("App didUpdate tripTime :",this.state.tripTime);
  }


  
  render(){
  return (
      <div className="App">
      <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route exact path="/" 
                     render={() =>  <LandingPage 
                      tripTime = {this.state.tripTime}
                      handleTime = {this.handleTime} />}
            />
            <Route path="/MapPage" 
                    render={() => <MapPage
                       {...this.state}
                       handleTrip = {this.handleTrip}
                      />}
            />
          </Switch>
        </AnimatePresence>
      
      </div>
    )
  }
}

export default App;

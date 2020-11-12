import React, { Component } from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
import Map from "./Map";
import { motion } from "framer-motion";

class MapPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepDistance: 0,
      currentStep: 0,
      arrayTripInfo: [],
      hasName: false,
      isQuizAvailable: false
    };
    this.handleStepDistance = this.handleStepDistance.bind(this);
    this.handleTrip = this.handleTrip.bind(this);
    this.handleIsQuizAvailable = this.handleIsQuizAvailable.bind(this);
  }

  handleStepDistance(distance){
    this.setState({stepDistance : distance.text})
    if(distance.value<10){
      this.setState({ isQuizAvailable: true})
      this.setState({ currentStep: this.state.currentStep + 1})
    }else{
      this.setState({ isQuizAvailable: false})
    }
  }

  handleTrip(newArray){
    this.setState({arrayTripInfo: newArray})
    console.log(this.state.arrayTripInfo);
    console.log(this.state.arrayTripInfo[this.state.currentStep]);
    this.setState({ hasName : true});
  }
 
  handleIsQuizAvailable(){
    this.setState({isQuizAvailable : !this.state.isQuizAvailable})
  }


  componentDidUpdate(){    
  }

  render() {
    return (
      <motion.div
        exit={{ x: "+100vw" }}
        animate={{ x: 0 }}
        initial={{ x: "+100vw" }}
        transition={{ transition: "linear" }}
        className="container-map-page"
      >
        <div className="content-map-page">
          <Link to="/" className="return-landing-page"></Link>
          <p className="next-pos">
            {this.state.hasName ? 
              this.state.arrayTripInfo[this.state.currentStep].name 
              : "No next step"
            } 
          </p>

          <p className="dist-next-pos">{this.state.stepDistance}</p>
        </div>
        <Map className="map-container" 
          stepDistance={this.state.stepDistance} 
          {...this.props} 
          handleTrip={this.handleTrip}
          handleStepDistance={this.handleStepDistance}
        />
        <Slider 
          {...this.props}
          isQuizAvailable={this.state.isQuizAvailable}
          handleIsQuizAvailable={this.handleIsQuizAvailable}/>
      </motion.div>
    );
  }
}

export default MapPage;

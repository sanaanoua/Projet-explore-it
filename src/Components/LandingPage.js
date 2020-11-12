import React from "react";
import Card from "./Card";
import logo from "./Assets/Explore_it_logo.jpg";
import { motion } from "framer-motion";

class LandingPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    
    }
  }


  render() {
    return (
      <motion.div
        exit={{ x: "-100vh" }}
        animate={{ x: 0 }}
        initial={{ x: "-100vw" }}
        transition={{ transition: "linear" }}
        className="container"
      >
        <img className="logo" src={logo} alt="logo" />
        <Card 
          tripTime={this.props.tripTime}
          handleTime = {this.props.handleTime}  
        />
      </motion.div>
    );
  }
}
export default LandingPage;

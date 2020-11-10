import { render } from '@testing-library/react';
import React, { Component } from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom';
import UseMaps from './UseMaps';
import {motion, AnimatePresence } from "framer-motion";
import { isThisQuarter } from 'date-fns';

 class MapPage extends Component {
    constructor(props){
    super(props);
    this.state = {
        tripTime : props.location.state.tripTime,
        };

    }

   
   

    render(){
        return(
        <motion.div
            exit={{ x: "+100vw" }}
            animate={{ x: 0 }}
            initial={{ x: "=100vw" }}
            transition={{ transition: "linear" }}
            className="container-map-page"
        >
       

            <div className="content-map-page">
                <Link to="/" className="return-landing-page"></Link>
                <p className="next-pos">NEXT : GRAND PLACE</p>
                <p className="dist-next-pos">200M</p>
            </div>
            <UseMaps className="map-container" />
            <Slider />
        </motion.div>
        )
    }   
    
}

export default MapPage;


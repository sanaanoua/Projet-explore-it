import React from 'react'
import Card from './Card'
import {Swicth, Route } from 'react-router-dom';


class LandingPage extends React.Component {

render() {
        return (
   
        <div className="Container">
                <img className="logo" src="../Assets/Explore_it_logo.JPG"/>
                <Card />
        </div>
        )
    } 
}
export default LandingPage; 
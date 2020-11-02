import React from 'react'
import Card from './Card'
import {Swicth, Route } from 'react-router-dom';
import logo from './Assets/Explore_it_logo.jpg'

class LandingPage extends React.Component {

render() {
        return (
   
        <div className="container">
                <img className="logo" src={logo} alt="logo"/>
                <Card />
        </div>
        )
    } 
}
export default LandingPage; 
import { render } from '@testing-library/react';
import React, { Component } from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom';
import UseMaps from './UseMaps';

 class MapPage extends Component {
    constructor(props){
    super(props);
    this.state = {
        tripTime : props.location.state.tripTime
        }
    }

    componentDidMount() {
        console.log("mappage triphour" + this.state.tripTime);
    }
    

    render(){
        return (
            <div className="container_map_page">
                <div className="content_map_page">
                <Link to="/">
                    <div className="logo_on_map"/>
                </Link> 
                {/* SearchBar to implemented*/}
            </div>
                <UseMaps tripTime={this.state.tripTime}/>
                <Slider />
            </div>  
        )
    }   
}


export default MapPage;


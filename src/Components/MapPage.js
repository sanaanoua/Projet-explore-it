import { render } from '@testing-library/react';
import React, { Component } from 'react'
import Slider from './Slider'
import { Link } from 'react-router-dom';
import UseMaps from './UseMaps';

 function MapPage({ tripHour }) {
    

    return (
        <div className="container_map_page">
            <div className="content_map_page">
            <Link to="/">
                <div className="logo_on_map"/>
            </Link> 
            {/* SearchBar to implemented*/}
        </div>
            <UseMaps />
            <Slider />
        </div>  
    )
}


export default MapPage;



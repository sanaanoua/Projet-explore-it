import { render } from '@testing-library/react';
import React, { Component } from 'react'
import Map from './Map'
import ModalQuiz from './ModalQuiz'
import Slider from './Slider'

 function MapPage(pr) {
 
    return (
        <div>
            <Map />
            <Slider />
        </div>  
    )
}


export default MapPage;







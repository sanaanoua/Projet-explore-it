import React from 'react';


function CenterToSelf () {

    let myPos = {};

    navigator.geolocation.getCurrentPosition(
        (position) => {
            
            myPos ={
                lat: position.coords.latitude,
                lng: position.coords.longitude
            }
        })
    
     console.log(myPos)
     return myPos
}

export default CenterToSelf;
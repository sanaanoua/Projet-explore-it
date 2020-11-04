import React from 'react';


// Function to locate the user to his/her specific geographical (lat/lng) point
// navigator.geolocation use the browser build in localisation of the user
function Compass ({panTo}) {
    return (
        <button className="compass" onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    panTo({
                       lat: position.coords.latitude,
                       lng: position.coords.longitude
                   })
                } )
               
            }}> 
        </button>
    )
}

export default Compass;
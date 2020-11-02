import React from 'react';


function CenterToSelf () {


    const mapRef = React.useRef();
    const onMapLoad = React.useCallback( (map) => {
        mapRef.current = map;
    }, [])


    const panToButton = document.getElementById("setCenter");
    panToButton.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        };
        onMapLoad.setCenter(pos);
        onMapLoad.setZoom(20);
        });
    });

    return( 
        <button className="compass" id="setCenter">
            center on position
        </button>
    )

}

export default CenterToSelf;
import { useState, useEffect } from 'react'

function useMyPosition() {
    const [myPosition, setMyPosition] = useState();

    useEffect( () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setMyPosition({
                    lat: position.coords.lat,
                    lng: position.coords.lng
                })
            }
        )
    })

    return myPosition;
}

export default useMyPosition;
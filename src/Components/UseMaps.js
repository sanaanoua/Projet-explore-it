import React, { useEffect, useRef, useState } from "react";
import Map from "./Map";

function UseMaps({ tripTime }) {
  const [origin, setOrigin] = useState({ lat: 50.649896, lng: 3.923982 });
  const [destination, setDestination] = useState({
    lat: 50.645545,
    lng: 3.541155,
  });
  const [waypts, setWaypts] = useState([]);

  // Get a radius for seeking point of interest base on the time (tripTime)
  let newRadius = 1000;
  switch(tripTime){
    case 1 : 
        newRadius=5000;
        break;
    case 2 : 
        newRadius=10000;
        break;
    case 4 :
        newRadius=15000;
        break;
  }
  console.log(newRadius);

  let newArrayResult = [];

  const getPlaces = () => (map) => {
    let request = {
      location: { lat: -33.8670522, lng: 151.1957362 },
      // location: { lat: 50.649896, lng: 3.923982 },
      radius: newRadius,
      types: ["restaurant"],
    };

    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
        console.log(results);

      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log("status" + status);
        return results;
      }
    });
  }

  newArrayResult = getPlaces();
  console.log(newArrayResult);

  const displayRoute = (origin, destination) => (map) => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      draggable: true,
      map: map
    });
    const option = {
      origin: origin,
      destination: destination,
      waypoints: [
        { location: "49 Route de Flobecq, Ath" },
        { location: "15 Rue de vicinal, Ath "}
      ],
      optimizeWaypoints: true,
      travelMode: window.google.maps.TravelMode.WALKING,
    };
    const calculateAndDisplayRoute = (
      directionsRenderer,
      directionsService,
      option
    ) => {
      directionsService.route(option, (result, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(result);
        }
      });
    };
    calculateAndDisplayRoute(directionsRenderer, directionsService, option);
  };

  const handleClick = () => {
    console.log("ouais ouais ouais");
    setOrigin({ lat: 50.749896, lng: 3.823982 });
    setDestination({ lat: 50.745545, lng: 3.741155 });
    console.log(origin, destination);
   
  };

  const mapProps = {
    onMount1: getPlaces(),
    onMount2: displayRoute(origin, destination),
  };

  return (
    <>
      <Map {...mapProps} />
      <button className="setdirection" onClick={handleClick}></button>
    </>
  );
}

export default UseMaps;
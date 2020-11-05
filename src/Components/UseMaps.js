import React, { useEffect, useRef, useState } from "react";
import Map from "./Map";

function UseMaps({ tripTime }) {
  const [origin, setOrigin] = useState({ lat: 50.649896, lng: 3.923982 });
  const [destination, setDestination] = useState({
    lat: 50.645545,
    lng: 3.541155,
  });

  console.log(tripTime);
  // Get a radius for seeking point of interest base on the time
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

  const [waypts, setWaypts] = useState([
       { lat: 50.555555, lng: 4.454545 },
    { lat: 51.555555, lng: 3.922589 },
  ]);
  
  useEffect(() => {
      getPlaces();
  })


  const getPlaces = () => (map) => {
    let request = {
      location: { lat: 50.649896, lng: 3.923982 },
      radius: newRadius,
      types: ["restaurant"],
    };

    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      console.log(results);

      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log("status" + status);
      }
    });
  }

  const displayRoute = (origin, destination) => (map) => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      map: map
    });
    const option = {
      origin: origin,
      destination: destination,
      //waypoints: waypts,
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
      <button onClick={handleClick}> change roads </button>
    </>
  );
}

export default UseMaps;
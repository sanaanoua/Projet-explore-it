import React, { useEffect, useRef, useState } from "react";
import Map from "./Map";
import { Link } from 'react-router-dom';
import axios from 'axios';

function UseMaps({ mapProps }) {
  const [origin, setOrigin] = useState({ lat: 50.649896, lng: 3.923982 });
  const [destination, setDestination] = useState({
    lat: 50.645545,
    lng: 3.541155,
  });

  const [waypts, setWaypts] = useState([]);
 

  const getPlaces = () => (map) => {
    let request = {
      location: { lat: 50.649896, lng: 3.923982 },
      radius: "10000",
      types: ["restaurant"],
    };
    const service = new window.google.maps.places.PlacesService(map);
    service.nearbySearch(request, (results, status) => {
      console.log(results);
     
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        console.log("status" + status);
      }
    });
  };

  const displayRoute = (origin, destination) => (map) => {
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      map: map,
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
    setOrigin({ lat: 50.749896, lng: 3.823982 });
    setDestination({ lat: 50.745545, lng: 3.741155 });
    console.log(origin, destination);
    console.log("ouais ouais ouais");
  };

  mapProps = {
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
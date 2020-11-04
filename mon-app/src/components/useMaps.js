import React, { useEffect, useRef, useState } from "react";
import Maps from "./Maps";

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
    setOrigin({ lat: 51.654346, lng: 3.9645344 });
    setDestination({ lat: 50.644464, lng: 3.546415 });
    console.log(origin, destination);
    console.log("ouais ouais ouais");
  };

  mapProps = {
    onMount1: getPlaces(),
    onMount2: displayRoute(origin, destination),
  };

  return (
    <>
      <Maps {...mapProps} />
      <button onClick={handleClick}> change roads </button>
    </>
  );
}

export default UseMaps;

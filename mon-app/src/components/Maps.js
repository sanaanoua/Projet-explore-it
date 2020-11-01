import React, { useEffect } from "react";
import mapStyles from "./mapStyles";
import { Link } from "react-router-dom";

function App() {
  //load Google Maps after the html
  useEffect(() => {
    loadMap();
  });
  //init the map on window
  const loadMap = () => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_API_KEY}&callback=initMap`
    );
    window.initMap = getLocation;
  };
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const pos = new window.google.maps.LatLng(
        position.coords.latitude,
        position.coords.longitude
      );
      return initMap(pos);
    });
  };
  //charge the Google Maps script
  const loadScript = (url) => {
    const script = window.document.createElement("script");
    script.src = url;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
  };
  //init the map with the option
  const initMap = (location) => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: location,
      zoom: 20,
      //minZoom: 15,
      //maxZoom: 15,
      styles: mapStyles,
      disableDefaultUI: true,
    });
    //direction for roads
    const directionsService = new window.google.maps.DirectionsService();
    const directionsRenderer = new window.google.maps.DirectionsRenderer({
      map: map,
    });
    calculateAndDisplayRoute(directionsRenderer, directionsService, location);
    const panToButton = document.getElementById("setCenter");
    panToButton.addEventListener("click", () => {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        map.setCenter(pos);
        map.setZoom(20);
      });
    });
  };
  //put direction services in direction renderer
  const calculateAndDisplayRoute = (
    directionsRenderer,
    directionsService,
    location
  ) => {
    let end = new window.google.maps.LatLng(50.649896, 3.923982);
    let waypts = [];
    const step = new window.google.maps.LatLng(50.676533, 3.936587);
    waypts.push({
      location: step,
    });
    directionsService.route(
      {
        origin: location,
        destination: end,
        waypoints: waypts,
        optimizeWaypoints: true,
        travelMode: window.google.maps.TravelMode.WALKING,
      },
      (result, status) => {
        if (status === "OK") {
          directionsRenderer.setDirections(result);
        } else {
          window.alert("directions request failed due to " + status);
        }
      }
    );
  };
  return (
    <div className="containerMap">
      <div className="map" id="map"></div>
      <button className="setCenter" id="setCenter">
        center on position
      </button>
      <Link to="/">
        <button> Return </button>
      </Link>
    </div>
  );
}

export default App;

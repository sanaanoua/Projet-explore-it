import React, { useEffect } from "react";
import mapStyles from "./mapStyles";
import { Link } from "react-router-dom";
import CenterToSelf from "./CenterToSelf";
import axios from "axios";

function Map() {

  //load Google Maps after the html
  useEffect(() => {
    loadMap();
  });

  //init the map on window
  const loadMap = () => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&callback=initMap`
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
      zoom: 5,
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

  
  function getDataBase() {
    console.log("HYE HEY HEY");
    //getInfoAroundUs();

    // create a local variable of the coord of the user --> to be able to settle the origin
    let myCoord = { lat: -33.8670522, lng: 151.1957362};

    //https://cors-anywhere.herokuapp.com/{type_your_url_here} 

    // !!! answer complicated to read for now (28-18-2020)
    //axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`)
    // 
    //axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=100&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
    
    // Add the  " https://cors-anywhere.herokuapp.com/{type_your_url_here} "  for making in work -> wait for the use a proxy?
    let url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=1000&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
    console.log(url);
    
    axios.get(url)
        .then(res => {
            console.log("Hello" , res);
            return  res.data;
        })
        .then(data => {
            // show what is in the data retreive (answer from the request)
            console.log(data)
            // create a local variable handling the data 
            let localPoints = data.results;
            // show what is in the data
            console.log(localPoints)
            // relocate the map on the "myCoord" lat / lng 
            
            // get the lat and lng of places
            console.log(localPoints[0].geometry.location)

            // localPoints.map( (element) => {
            //     return(

            //         <InfoWindow position={{
            //             lat: element.geometry.location.lat,
            //             lng: element.geometry.location.lng
            //         }}>
            //             <div>{element.name}</div>
            //         </InfoWindow>
            //     )
            // })   
                 
            })
        .catch(error => {
            console.log(error.response)
        });
}


  return (
    <div className="containerMap">
      <div className="map" id="map"></div>
      <button className="compass" id="setCenter">
        center on position
      </button>
      <Link to="/">
        <button> Return </button>
      </Link>
      <button onClick={getDataBase}>Data</button>
    </div>
  );
}

export default Map;
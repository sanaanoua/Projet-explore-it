import React, { Component, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker, InfoWindow, DirectionsRenderer, DirectionsService, withScriptJS, withGoogelMap } from '@react-google-maps/api';
import MapOptionSytle from './MapOptionStyle'
// For date management
import {formatRelative} from "date-fns";
import usePlacesAutocomplete, { getGeocode, getLatLng} from "use-places-autocomplete";
import {  
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
    ComboboxOptionText,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
import Compass from './Compass';


const libraries = ['places'];
const mapCountainerStyle = {
    width: "100vw",
    height: "100vh",
}

const center = {
    lat: 50.8503,
    lng: 4.3517,
  };

  const options = {
    styles: MapOptionSytle,
    // disableDefaultUI allow to hide the default UI such "+/-" "little man for street view"
    disableDefaultUI: true,
    zoomControl : true,
    // scaleControl: true,
    rotateControl: true

  }

//   const DirectionsService = new google.maps.DirectionsService();
 

export default function MainMap() {

    const { isLoaded, loadError} = useLoadScript({
        googleMapsApiKey : process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });         

    const [markers, setMarkers] = React.useState([]);
    // State to be able to display a infobox for a selected marker
    const [selected, setSelected] = React.useState(null);
    // State that manage the position on the user
    const [myPosition, setMyPosition] = React.useState({});
    // State that manage the points to visit
    const [points, setPoints] = React.useState(null);
    // 

    useEffect(() => {
        // if(points !== null ){
        //     console.log(points);
        //     points.map( (element) => {
        //        const spot = {
        //             lat: element.geometry.location.lat,
        //             lng: element.geometry.location.let
        //         }
        //         console.log(spot)
        //         setMarkers(spot);
        //     })
        // }

    })

    // To avoid recreate a "onClick" on each render of the app
    // If we don't overwrite in square bracket, it will always call a default
    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [...current, 
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date()
            }
        ]);
    } , []);  

    function getDataBase() {
        console.log("HYE HEY HEY");

        //https://cors-anywhere.herokuapp.com/{type_your_url_here} 

        // !!! answer complicated to read for now (28-18-2020)
        //axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}&libraries=places&callback=initMap`)
        // 
        //axios.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=100&type=restaurant&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
        
        // Add the  " https://cors-anywhere.herokuapp.com/{type_your_url_here} "  for making in work -> wait for the use a proxy?
        let url = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?`
        console.log(url);
        const params = {
        location: "50.8503,4.3517",
        radius: "1000",
        type: "restaurant",
        key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  
    }
        axios.get(url, {params})
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
                setPoints(localPoints)
                // get the lat and lng of places
                console.log(localPoints[0].geometry.location)

                })
            .catch(error => {
                console.log(error.response)
            });
    }
    
    // allow to call the map in the code without re-rendering the map
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback( (map) => {
        mapRef.current = map;
    }, [])

    // allow user to reset their position on the map
    // for a specific place put in argument (from the search bar)
    const panTo = React.useCallback(({lat, lng}) => {
        // get the lat / lng from the place
        mapRef.current.panTo({lat, lng});
        // set the strength of the zoom
        mapRef.current.setZoom(15);
    })

    
    // Function that allow user to search a place by typing value in the search bar
    function Search({ panTo }) {

        // return an object that we can deconstrut 
        // ready : is this result set up, ready to go,
        // value : what the user typein
        // suggestion : what is getting bak from the search with a status and data themself
        // function to setthe value and function to clear the suggestion
        const {
            ready,
            value,
            suggestions: {status, data},
            setValue,
            clearSuggestions
        } = usePlacesAutocomplete({
            requestOptions: {
                location: { lat: () => 43.653225,  lng: () => -79.383186, },
                radius : 200 * 1000,
            }
        });

        return (
            <div className="search">
                <Combobox 
                    onSelect={async (address) => {
                        // get the address , put should not fetch the date
                        setValue(address, false);
                        clearSuggestions();

                        try{
                            const results = await getGeocode({address});
                            const { lat, lng } = await getLatLng(results[0]);
                            console.log(lat, lng);
                            panTo({lat, lng});
                        } catch(error) {
                            console.log("error search!")
                        }
                    }}
                >
                    <ComboboxInput 
                        value={value}
                        onChange={(e) => {
                            setValue(e.target.value);
                        }}
                        disaabled={!ready}
                        placeholder="Enter an adress"
                    />
                    <ComboboxPopover>
                        <ComboboxList>
                            {status === "OK" &&
                                data.map(({ id,description }) => (
                                    <ComboboxOption key={id} value={description}/>
                            ))}
                        </ComboboxList>
                    </ComboboxPopover>
            </Combobox>
            </div>
        )
    }

    if(loadError) return "Error loading maps";
    if(!isLoaded) return "Loading Maps";

    // function generateParcours() {

    //     const DirectionsService = new window.google.maps.DirectionsService();

    //     DirectionsService.route({
    //         origin: new window.google.maps.LatLng(41.8507300, -87.6512600),
    //         destination: new window.google.maps.LatLng(41.8525800, -87.6514100),
    //         travelMode: window.google.maps.TravelMode.DRIVING,
    //       }, (result, status) => {
    //         if (status === window.google.maps.DirectionsStatus.OK) {
              
    //             setMyPosition : result,
             
    //         } else {
    //           console.error(`error fetching directions ${result}`);
    //         }
    //       });

    //   }

   

      

return (
    <div className="container_on_map">

        <div className="content_on_map">
            <Link to="/">
                <div className="logo_on_map"/>
            </Link>    
            <Search panTo={panTo} />
            <Compass panTo={panTo} myPosition={myPosition}/>
            <button onClick={getDataBase}>Data</button>
            <button > Pos </button>
        </div>
        

        <GoogleMap className="google_map"
            mapContainerStyle={mapCountainerStyle}
            zoom={10} 
            center={center}
            options={options}
            onClick={onMapClick}
            onLoad={onMapLoad}
            >
            
            {/* Allow to set a marker each time we click on the map */}
            {markers.map((marker) => {
               // setSelected(marker);
                return(
                <Marker
                    key={marker.time.toISOString()} 
                    position={{ lat:marker.lat, lng: marker.lng}}
                    // Beug in icon display
                    // icon={{
                    //     url:("../logo.svg"),
                    //     scaledSize: new window.google.maps.Size(30,30),
                    //     origin: new window.google.maps.Point(0, 0),
                    //     anchor: new window.google.maps.Point(15,15)
                    // }}
                    onClick= {() => {
                        setSelected(marker);
                    }}
                />
                ) 
                })}

            {/* Display a infobox when the marker is selected and display a h2 tag + p tag with time of the click */}
            {selected ? (
                <InfoWindow 
                    position={{ lat: selected.lat, lng: selected.lng}} 
                    onCloseClick={() => {
                        setSelected(null);
                    }}
                >
                    <div>
                        <h2>Awsome point </h2>
                        <p>Spotted {formatRelative(selected.time, new Date())}</p>
                    </div>
                </InfoWindow>
                ) : null}
        </GoogleMap>
    </div>)
}
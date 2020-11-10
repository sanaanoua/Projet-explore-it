import React from "react";
import { Loader } from "@googlemaps/js-api-loader";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPosition: null,
      map: null,
      originDir: null,
      destinationDir: { lat: 50.671502399999994, lng: 3.8925397999999998 },
      waypts: [],
      raduisPlace: 1000,
      isDisplay: false,
    };
    this.setUserPosition();
  }

  componentDidMount() {
    //chage le url dans le script si il n'existe pas encore
    if (!window.google) {
      const loader = new Loader({
        apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        version: "weekly",
        libraries: ["places"],
      });
      loader.load().then(() => {
        this.onLoad();
        this.getPlaces();
      });
    } else {
      this.onLoad();
      this.getPlaces();
    }
    console.log("did mount ");
  }

  componentDidUpdate(prevState) {}

  componentWillUnmount() {}

  //charger la map
  onLoad = () => {
    const mapOptions = {
      center: this.state.myPosition,
      zoom: 20,
      //minZoom: 20,
      disableDefaultUI: true,
    };
    this.setState({
      map: new window.google.maps.Map(
        document.getElementById("map"),
        mapOptions
      ),
    });
  };

  //mettre à jour les raduis pour les places
  setRaduis = () => {
    console.log("setRaduis");
    switch (this.props.tripTime) {
      case 1:
        this.setState({ raduisPlace: 5000 });
        break;
      case 2:
        this.setState({ raduisPlace: 10000 });
        break;
      case 4:
        this.setState({ raduisPlace: 15000 });
        break;
    }
    console.log(this.state.raduisPlace);
  };

  //prendre la position de l'utilisateur
  setUserPosition = () => {
    console.log("setUserPosition");
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        myPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
      this.setState({
        destinationDir: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
      console.log(this.state.myPosition);
    });
  };

  //resortir les places pour faire le chemin (avec get places)

  getPlaces = () => {
    console.log("getPlaces");
    this.setRaduis();
    let request = {
      location: this.state.myPosition,
      radius: this.state.raduisPlace,
      types: ["restaurant"],
    };
    const service = new window.google.maps.places.PlacesService(this.state.map);
    service.nearbySearch(request, (results, status) => {
      //console.log(results);

      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.map((e, i) => {
          if (i < 5) {
            console.log(i);
            this.setState({
              waypts: [...this.state.waypts, { location: e.vicinity }],
            });
          } //else if (i === 5) {
          //   this.setState({
          //     destinationDir: { location: e.geometry.location },
          //   });
          // }
        });
        console.log(results);
        console.log(this.state.waypts);
        console.log(this.state.destinationDir);
        this.setState({ isDisplay: true });
      }
      this.displayRoute();
    });
  };

  //afficher la route
  displayRoute = () => {
    console.log("displayRoute");
    const optionForDirection = {
      origin: this.state.myPosition,
      destination: this.state.destinationDir,
      waypoints: this.state.waypts,
      travelMode: window.google.maps.TravelMode.WALKING,
      optimizeWaypoints: true,
    };
    new window.google.maps.DirectionsService().route(
      optionForDirection,
      (result, status) => {
        if (status === "OK") {
          new window.google.maps.DirectionsRenderer({
            map: this.state.map,
          }).setDirections(result);
        }
        //his.state.map.setCenter(this.state.myPosition);
      }
    );
  };

  handleClick = () => {
    this.setState({
      destinationDir: { location: "Chaussée de Bruxelles 335, Petit-Enghien" },
    });
  };

  render() {
    console.log("JE SUIS RENDER");
    return (
      <>
        <div id="map" className="map" />
        <button className="setdirection" onClick={this.handleClick}></button>
      </>
    );
  }
}
export default Map;

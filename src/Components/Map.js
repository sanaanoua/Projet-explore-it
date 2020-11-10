import React from "react";
import { Loader } from "@googlemaps/js-api-loader";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myPosition: null,
      map: null,
      originDir: null,
      destinationDir: null,
      waypts: [],
      raduisPlace: 1000,
      isDisplay: false,
    };
    this.setUserPosition();
  }

  componentDidMount() {
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

  componentDidUpdate(prevState) {
    // if (
    //   prevState.originDir != this.state.originDir ||
    //   prevState.destinationDir != this.state.destinationDir
    // ) {
    //   console.log("j'ai update ");
    //   this.displayRoute();
    // } else if (this.state.isDisplay) {
    //   this.displayRoute();
    // }
  }

  componentWillUnmount() {}

  onLoad = () => {
    const mapOptions = {
      center: { lat: 50.649896, lng: 3.923982 },
      zoom: 20,
      disableDefaultUI: true,
    };
    this.setState({
      map: new window.google.maps.Map(
        document.getElementById("map"),
        mapOptions
      ),
    });
  };

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

  setUserPosition = () => {
    console.log("setUserPosition");
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        myPosition: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
      console.log(this.state.myPosition);
    });
  };

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
          }
        });
        console.log(this.state.waypts);
        this.setState({ isDisplay: true });
      }
    });
  };

  displayRoute = () => {
    console.log("displayRoute");
    const optionForDirection = {
      origin: this.state.originDir,
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
      }
    );
  };

  handleClick = () => {
    this.setState({ originDir: { lat: 50.843647, lng: 4.354276 } });
    this.setState({ destinationDir: { lat: 50.85011, lng: 4.35863 } });
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

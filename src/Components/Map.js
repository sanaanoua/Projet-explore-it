import React from "react";
import { Loader } from "@googlemaps/js-api-loader";

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      service: null,
      renderer: null,
      matrix: null,
      myPosition: { lat: 0, lng: 0 },
      lastStep: null,
      arrayTrip: [],
      arrayTripInfo: [],
      currentStep: 0,
      raduisPlace: 1000,
      stepDistance: null,
      stepTime: null,
    };
    this.myRef = React.createRef();
    this.setUserPosition();
    this.trackUserPosition();
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
  }

  componentDidUpdate(prevProps, prevState) {
    if (window.google) {
      if (prevState.arrayTrip.length !== this.state.arrayTrip.length) {
        this.displayRoute();
        this.getDistance();
      } else if (
        prevState.myPosition.lat !== this.state.myPosition.lat ||
        prevState.myPosition.lng !== this.state.myPosition.lng
      ) {
        this.displayRoute();
        this.getDistance();
      }
    }
  }


  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.arrayTrip.length !== this.state.arrayTrip.length) {
  //     this.displayRoute();
  //     this.getDistance();
  //   }else if(prevProps.stepDistance !== this.props.stepDistance){
  //     this.displayRoute();
  //     this.getDistance();
  //   }
  //   this.trackUserPosition();
  // }

  componentWillUnmount() {}

  // Load the map 
  onLoad = () => {
    const mapOptions = {
      center: this.state.myPosition,
      zoom: 20,
      //minZoom: 20,
      disableDefaultUI: true,
    };
    this.setState({
      map: new window.google.maps.Map(this.myRef.current, mapOptions),
    });
    this.setState({ service: new window.google.maps.DirectionsService() });
    this.setState({
      renderer: new window.google.maps.DirectionsRenderer({
        map: this.state.map,
       // draggable: true,
      }),
    });
    this.setState({ matrix: new window.google.maps.DistanceMatrixService() });
  };

  // Set the radius around the user posistion
  setRaduis = () => {
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
      default :
        this.setState({ raduisPlace: 1000});
    }
  };

 // Allow to track the user position
  trackUserPosition = () => {
    navigator.geolocation.watchPosition((pos) => {
      this.setState({
        myPosition: { lat: pos.coords.latitude, lng: pos.coords.longitude },
      });
    });
  };

  setUserPosition = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        lastStep: {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
  };

  getPlaces = () => {
    this.setRaduis();
    let request = {
      location: this.state.lastStep,
      radius: this.state.raduisPlace,
      types: ["restaurant"],
    };
    const service = new window.google.maps.places.PlacesService(this.state.map);
    service.nearbySearch(request, (results, status) => {
      this.props.handleTrip(results);
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        results.map((e, i) => {
          if (i < 5) {
            this.setState({
              arrayTrip: [...this.state.arrayTrip, { placeId: e.place_id}],
            });
            this.setState({
              arrayTripInfo: [...this.state.arrayTripInfo, { name : e.name, placeId : e.place_id, photos: e.photos}]
            })
            this.props.handleTrip(this.state.arrayTripInfo);
          }
        });
      }

      this.setState({
        arrayTrip: [...this.state.arrayTrip, this.state.lastStep],
      });
    });
  };


  // Display the road on the map
  displayRoute = () => {
    const optionForDirection = {
      origin: this.state.myPosition,
      destination: this.state.arrayTrip[this.state.currentStep],
      travelMode: window.google.maps.TravelMode.WALKING,
      optimizeWaypoints: true,
    };
    this.state.service.route(optionForDirection, (result, status) => {
      if (status === "OK") {
        this.state.renderer.setDirections(result);
      }
    });
  };

  // Show the distance until the next step
  getDistance = () => {
    const option = {
      origins: [this.state.myPosition],
      destinations: [this.state.arrayTrip[this.state.currentStep]],
      travelMode: "WALKING",
    };
    this.state.matrix.getDistanceMatrix(option, (result, status) => {
      if (status === "OK") {
        console.log("map",result.rows[0].elements[0].distance )
         this.props.handleStepDistance(result.rows[0].elements[0].distance);
      }
    });
  };

  // Recenter the map on the user position with the click button
  handleReCenter = () => {
    this.state.map.setCenter(
      this.state.myPosition
    )
    this.state.map.setZoom(20);
  };



  render() {
    return (
      <>
        <div id="map" className="map" ref={this.myRef} />
        <button className="setdirection" onClick={this.handleReCenter}></button>
      </>
    );
  }
}
export default Map;
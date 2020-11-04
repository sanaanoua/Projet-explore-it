


// var geocoder;
// var map;
// var markers = Array();
// var infos = Array();
// var directionDisplay;
// var directionsService = new google.maps.DirectionsService();
 
 
// function initialize() {
//     // Check connexion
//         var status = navigator.onLine;
//         if (status) {
//         } else {
//             alert("Pas de connexion internet");
//         }
 
//         directionsDisplay = new google.maps.DirectionsRenderer();
 
//     // prepare Geocoder
//         geocoder = new google.maps.Geocoder();
 
//         // set initial position (ville)
//         var myLatlng = new google.maps.LatLng(34.2500000, -6.5833330);
 
//         var myOptions = { // default map options
//             zoom: 14,
//             center: myLatlng,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
 
//         map = new google.maps.Map(document.getElementById('gmap_canvas'), myOptions);
//         directionsDisplay.setMap(map);
 
//         google.maps.event.addListener(map, 'rightclick', function (event) {
//             clearOverlays();
//             placeMarker(event.latLng);
//         });
 
//   /*
//         var origineC = new google.maps.LatLng(34.6880454862, -6.0044980421);
//         var myCity = new google.maps.Circle({
//           center: origineC,
//           radius:68000,
//           strokeColor:"#0000FF",
//           strokeOpacity:0.6,
//           strokeWeight:2,
//           fillColor:"#0000FF",
//           fillOpacity:0.1
//           });
 
//         myCity.setMap(map);*/
 
// }
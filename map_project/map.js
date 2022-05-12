// Initialize and add the map
function initMap() {

  const USA = { lat: 39.816, lng: -101.034 };
  var statesobj = {"AK": [new google.maps.LatLng(40.0187, -141.0205),
    new google.maps.LatLng(70.1292, -141.7291),
    new google.maps.LatLng(-30.4515, -144.8163)]}

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: USA,
  });
  const marker = new google.maps.Marker({
    position: USA,
    map: map,
  });
}
window.initMap = initMap;
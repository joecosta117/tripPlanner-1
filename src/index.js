const mapboxgl = require("mapbox-gl");
const buildMarker = require('./marker');

mapboxgl.accessToken = "pk.eyJ1IjoidmFoYWttZWR6IiwiYSI6ImNqbWk2b3lpdTAxdGczdm9jZ3poZ3pqY3gifQ.0dPoFUt1OyfdiaAzNLRgxg";

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], 
  zoom: 12, 
  style: "mapbox://styles/mapbox/streets-v10"
});

const markerDomEl = document.createElement("div");
markerDomEl.style.width = "32px";
markerDomEl.style.height = "39px";
markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
// markerDomEl.style.backgroundImage = `url${markerImage(type)}`;

// new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map); 

module.exports = map;
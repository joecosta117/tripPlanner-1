const mapboxgl = require("mapbox-gl");
const map = require('./index')

mapboxgl.accessToken = "pk.eyJ1IjoidmFoYWttZWR6IiwiYSI6ImNqbWk2b3lpdTAxdGczdm9jZ3poZ3pqY3gifQ.0dPoFUt1OyfdiaAzNLRgxg";

const icons = {
	hotel: "http://i.imgur.com/D9574Cu.png",
	restaurant: "http://i.imgur.com/cqR6pUI.png",
	activity: "http://i.imgur.com/WbMOfMl.png"
};

const markerImage = (type) => {
	if (type === "hotel") {
		return icons.hotel;
	} else if (type === "restaurant") {
		return icons.restaurant;
	} else if (type === "activity") {
		return icons.activity;
	}
}

const buildMarker = (type, coord) => {
	return new map({
		container: "map",
		center: coord,
		zoom: 12,
		style: "mapbox://styles/mapbox/streets-v10"
		type: markerImage(type);
	})
}

const marker = buildMarker("activity", [0.009151, 89.705086]); // or [-87.6354, 41.8885]
marker.addTo(map);

	



module.exports = buildMarker;
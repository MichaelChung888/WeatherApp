mapboxgl.accessToken = 'pk.eyJ1IjoibWljaGFlbGNodW5nODg4IiwiYSI6ImNsbHR0ODB6NjFlZWkzcXRoMmlyaDdqZzEifQ.ltkmzaX0xOFt4fGqyG0NmA';

const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        zoom: 9 // starting zoom
});

function changeMap (lat, lon) {
    map.setCenter([lon, lat]);
}
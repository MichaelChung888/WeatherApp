//import { fetchWeatherData } from "./fetch.js";

/* DYNAMIC SEARCH BAR */
const mapPin = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mapPin">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
</svg>`

const loadingIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
    <circle cx="50" cy="50" fill="none" stroke="#e15b64" stroke-width="7" r="29" stroke-dasharray="136.659280431156 47.553093477052">
    <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1.8518518518518516s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
    </circle>
</svg>
`

const input = document.querySelector("input");
const searchBox = document.querySelector(".search_box");
const loading = document.querySelector(".loading-icon");
const searchTimer = 350;
var searchTimeout = null;

input.addEventListener("input", () => {

    if (searchTimeout) clearTimeout(searchTimeout);
    loading.innerHTML = loadingIcon;

    const text = input.value;
    const geoURL = `https://api.openweathermap.org/geo/1.0/direct?q=${text}&limit=10&appid=c146e1932e9071b367bdd296b9ca5296`

    if (text) {
        searchTimeout = setTimeout(() => {
            searchBox.innerHTML = "";
            loading.innerHTML = ""
            fetch(geoURL).then(response => response.json()).then(data => {
                input.style.borderRadius = "25px 25px 0 0";
                if (data.length === 0) {
                    searchBox.innerHTML += `
                    <li>${mapPin} <span class="span1">No results...</span></li>
                `;
                } else {
                    for(let { name, lat, lon, state, country } of data) {
                        searchBox.innerHTML += `
                            <li onclick="fetchWeatherData(null, [${lat},${lon}])">${mapPin} <span class="span1">${name} <span class="span2"> ${state || ""} ${country}</span></span></li>
                        `;
                    }
                }
            });  
        }, searchTimer);
    } else {
        loading.innerHTML = ""
        searchBox.innerHTML = "";
        input.style.borderRadius = "50px";
    }

});

input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        fetchWeatherData(input.value, null);
        input.value = "";
        searchBox.innerHTML = "";
        loading.innerHTML = ""
        input.style.borderRadius = "50px";
        if (searchTimeout) clearTimeout(searchTimeout);
        
    }
});

document.addEventListener("click", e => {
    const svg = document.querySelector(".search svg");
    if (e.target === svg || e.target === input) { }
    else {
        searchBox.innerHTML = "";
        input.style.borderRadius = "50px";
    }
});



//On DOM load
document.addEventListener("DOMContentLoaded", () => {
    CurrentLocation();
});



//Current location
function CurrentLocation() {
    const options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      };

    navigator.geolocation.getCurrentPosition(pos => {
        fetchWeatherData(null, [pos.coords.latitude, pos.coords.longitude]);
    }, err => {
        console.log(err);
    }, options);
}

document.querySelector(".current").addEventListener("click", () => {
    CurrentLocation();
});
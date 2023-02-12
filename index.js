//     Leaflet Map & User Location     //
if (navigator.geolocation) { // If user's page accepts geoloaction
    
    navigator.geolocation.getCurrentPosition( // If true then:
        
        function (position) { // Get user's Longitude and Latitude
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude} Longitude: ${longitude}`); // See if it is grabbing User's Longitude and Latitude

            // Show Leaflet Map in Browser
            var map = L.map('map').setView([latitude, longitude], 13); // Set the map coords to User location
            var marker = L.marker([latitude, longitude]).addTo(map);   // Set a marker to the coords of the User location

            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);

        });
  } else { // If false then:
    console.log("Geolocation is not supported by this browser.");
  }

    //     API     //
async function main(){
    let response = await fetch ('https://api.foursquare.com/v3/places/search')
    let search = await response.json()
}

function areaSearch() {
    let searchMenu = document.getElementById('searchMenu')
    const searchBar = document.createElement('input')
    const searchButton = document.createElement('button')
    searchBar.placeholder = 'Place'
    searchButton.textContent = 'Search'

    searchMenu.append(searchBar)
    searchMenu.append(searchButton)
}

areaSearch()

const sdk = require('api')('@fsq-developer/v1.0#17kgj534lcjp10ly');

sdk.placeSearch({ ll: latitude, longitude, radius: '8100' })
    .then(({ data }) => console.log(data))
    .catch(err => console.error(err));
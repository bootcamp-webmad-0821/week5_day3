function initMap() {

    const map = new google.maps.Map(
        document.querySelector('#myMap'),
        {
            zoom: 10,
            center: directions.ironhackMAD.coords,
            styles: mapStyles.silver
        }
    )

    getRestaurants(map)
}


function getRestaurants(map) {

    axios
        .get('/api/restaurants')
        .then(response => printRestaurants(response.data, map))
        .catch(err => console.log(err))
}


function printRestaurants(restaurants, map) {

    restaurants.forEach(elm => {

        let position = {
            lat: elm.location.coordinates[0],
            lng: elm.location.coordinates[1]
        }

        new google.maps.Marker({ map, position, title: elm.name })
    })
}




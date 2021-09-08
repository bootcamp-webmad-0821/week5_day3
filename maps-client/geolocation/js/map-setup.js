let map

const printMap = () => {
    map = new google.maps.Map(
        document.querySelector('#myMap'), { zoom: 15, center: directions.ironhackBCN.coords }
    )
}

const getCoords = () => {
    navigator.geolocation.getCurrentPosition(
        position => centerMap(position.coords),
        error => console.log('ERROR', error)
    )
}

const centerMap = ({ latitude, longitude }) => {
    const position = { lat: latitude, lng: longitude }
    map.setCenter(position)

    new google.maps.Marker({ position, map })
}

initMap = () => {
    printMap()
    getCoords()
}
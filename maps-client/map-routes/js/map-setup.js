let map

const printRouteInfo = ({ routes }) => {

    const { duration, steps } = routes[0].legs[0]

    document.querySelector('#routeDetails h1').innerHTML += ` - duración estimada ${duration.text}`

    let text = ''
    steps.forEach(elm => text += `<li>${elm.instructions}</li>`)
    document.querySelector('#routeDetails ul').innerHTML = text
}


const getRouteDetails = () => {

    const routeDetails = {
        origin: { lat: 41.3977381, lng: 2.190471916 },
        destination: 'Fabrik Madrid',
        travelMode: 'DRIVING'
    }

    const directionsService = new google.maps.DirectionsService

    directionsService.route(
        routeDetails,
        result => {
            printRouteInfo(result)
            drawRoute(result)
        }
    )
}


const drawRoute = details => {

    const directionsDisplay = new google.maps.DirectionsRenderer

    directionsDisplay.setDirections(details)
    directionsDisplay.setMap(map)
}



function initMap() {
    map = new google.maps.Map(
        document.querySelector('#myMap'), { zoom: 15, center: directions.ironhackBCN.coords, styles: mapStyles.silver },
    )
    getRouteDetails()
}


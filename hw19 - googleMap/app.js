// const DNIPRO = new google.maps.LatLng(48.44919859, 35.0255331);
let map;

function initMap() {
    let marker, infoWindow, poly, polyLine, polygone;
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 48.44919859, lng: 35.0255331 },
        zoom: 11,
    });
    map.addListener('click', e => {
        console.log(e, e.latLng.lat(), e.latLng.lng());
    });

    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
    });
    document.getElementById("route").addEventListener("click", () => {
        makeRoute(directionsService, directionsRenderer);
    });

}

function getGeoLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                };
                console.log(pos);
            },
            () => {
                console.error('Error: The Geolocation service failed.');
            }
        );
    } else {
        console.error('Error: Your browser doesn\'t support geolocation.');
    }
}

function geocodeAddress(geocoder, map) {
    const address = document.getElementById("address").value;
    geocoder.geocode({ address: address }, (results, status) => {
        if (status === 'OK') {
            console.log(results[0]);
            map.panTo(results[0].geometry.location);
            new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
            });
        } else {
            console.warn(`Geocode was not successful for the following reason: ${status}`);
        }
    });
}

function makeRoute(directionsService, directionsRenderer) {
    directionsService.route(
        {
            origin: document.getElementById("from").value,
            destination: document.getElementById("to").value,
            travelMode: google.maps.TravelMode.WALKING,
        },
        (result, status) => {
            if (status === 'OK' && result) {
                directionsRenderer.setDirections(result);
                let way = result.routes[0].overview_path;
                let i;

                let marker = new google.maps.Marker({
                    position: { lat: 0, lng: 0 },
                    map,
                    icon: 'https://img.icons8.com/emoji/48/000000/butterfly-emoji.png'
                });

                for (let i = 0; i < way.length; i++) {
                    setTimeout(function moveMarker() {
                        let position = new google.maps.LatLng(way[i].lat(), way[i].lng());
                        marker.setPosition(position);
                    }, i * 500+1000)
                }
            } else {
                console.warn(`Directions request failed due to ${status}`);
            }
        }
    );

}
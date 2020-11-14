mapboxgl.accessToken = 'pk.eyJ1IjoiY2FuY2Fsa2FuIiwiYSI6ImNraGdiZWZmaDBic2syeG85N2FjMGxydTMifQ.aJF8hvFxHHLSou71rmPEUg';
navigator.geolocation.getCurrentPosition(succesLocation, errorLocation, {
    enableHighAccuracy: true
})

function succesLocation(position) {
    console.log(position)
    // setupLocation([position.coords.longitude, position.coords.latitude])
    setupLocation([29.0963, 37.7830])

}

function errorLocation(position) {
    setupLocation([28.9784, 41.0082])

}

function setupLocation(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 14

    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, );
    map.addControl(
        new MapboxDirections({
            accessToken: mapboxgl.accessToken
        }),
        'top-left'
    );

}
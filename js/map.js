mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvY2FsbDgiLCJhIjoiY2p4dTA5bTRyMTA5bTNmbnk4MW1zYmR1eCJ9.GTJaoIEnmoe4qbqiQZMP1A';
var map = new mapboxgl.Map({
container : 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [85.323959,27.717245],
zoom: 12,
});

new mapboxgl.Marker()
.setLngLat([85.328103,27.721303])
.addTo(map);

new mapboxgl.Marker()
.setLngLat([85.314188,27.671577])
.addTo(map);

new mapboxgl.Marker()
.setLngLat([85.527748,27.633224])
.addTo(map);



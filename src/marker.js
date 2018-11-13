const mapboxgl = require('mapbox-gl');

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFuZHlnZWUyNyIsImEiOiJjam9nOWZ6bXMwY3Q1M3Bwand2NmQ3ZTBwIn0.XYBXmMllj3TFJ7g5eJ0iUQ';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available.
});

// hotel
const hotel = document.createElement('div');
hotel.style.width = '32px';
hotel.style.height = '39px';
hotel.style.backgroundImage = 'url(http://i.imgur.com/D9574Cu.png)';
// restaurant
const restaurant = document.createElement('div');
restaurant.style.width = '32px';
restaurant.style.height = '39px';
restaurant.style.backgroundImage = 'url(http://i.imgur.com/cqR6pUI.png)';
// activity
const activity = document.createElement('div');
activity.style.width = '32px';
activity.style.height = '39px';
activity.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';

module.exports = {
  createMarker: (type, coor) => {
    if (type === 'hotel') {
      new mapboxgl.Marker(hotel).setLngLat(coor).addTo(map);
    }
    if (type === 'restaurant') {
      new mapboxgl.Marker(restaurant).setLngLat(coor).addTo(map);
    }
    if (type === 'activity') {
      new mapboxgl.Marker(activity).setLngLat(coor).addTo(map);
    }
  },
};

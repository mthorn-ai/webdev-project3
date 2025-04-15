let map;
let infoWindow;
function initMap() {
  const bounds = new google.maps.LatLngBounds(
    { lat: 41.8552, lng: -87.6672 }, // Southwest corner
    { lat: 41.8953, lng: -87.5804 }  // Northeast corner
  );

  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.8731, lng: -87.6235}, 
    zoom: 14,
    restriction: {
      latLngBounds: bounds,
      strictBounds: false
    }
  });

  infoWindow = new google.maps.InfoWindow();

  const searsTowerMarker = new google.maps.Marker({
    position: { lat: 41.8789, lng: -87.6360 },
    map: map,
    title: 'Sears Tower',
    icon: 'https://img.icons8.com/?size=50&id=VY24tukSwq9E&format=png&color=000000'
  });

  searsTowerMarker.addListener('click', () => {
    infoWindow.setContent(
      "<h3>Sears Tower</h3><br>I've somehow never been here despite living near Chicago my whole life. So, this one is a no-brainer.");
    infoWindow.open(map, searsTowerMarker);
  })


  const planetariumMarker = new google.maps.Marker({
    position: { lat: 41.8664, lng: -87.6067 },
    map: map,
    title: 'Adler Planetarium',
    icon: 'https://img.icons8.com/?size=50&id=iDIkjrN4Bd06&format=png&color=000000'
  });

  planetariumMarker.addListener('click', () => {
    infoWindow.setContent('<h3>Adler Planetarium</h3><br>I am most interested in this one because the field of astronomy is super interesting to me.');
    infoWindow.open(map, planetariumMarker);
  })

  const fieldMarker = new google.maps.Marker({
    position: { lat: 41.8663, lng: -87.6170 },
    map: map,
    title: 'Field Museum',
    icon: 'https://img.icons8.com/?size=50&id=GD0z1w8YDJsX&format=png&color=000000'
  });

  fieldMarker.addListener('click', () => {
    infoWindow.setContent("<h3>Field Museum</h3><br>I think I went here once on a field trip in elementary school. I'm pretty sure it has dinosaurs. Who doesn't like dinosaurs?");
    infoWindow.open(map, fieldMarker);
  })
  
}
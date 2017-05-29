
var map, laboratoria;
      function initMap() {
        map = new google.maps.Map(document.getElementById("map"), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 18
        });
        laboratoria = new google.maps.InfoWindow;
        var marker = new google.maps.Marker({
          position: laboratoria,
          map: map
        });
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            laboratoria.setPosition(pos);
            laboratoria.setContent('Te encuentras aquí');
            laboratoria.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, laboratoria, map.getCenter());
          });
        } else {
          handleLocationError(false, laboratoria, map.getCenter());
        }
      }

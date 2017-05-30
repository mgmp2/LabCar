
      function initMap() {
        var map, miUbicacion;
        map = new google.maps.Map(document.getElementById("map"), {
          center: {lat: -34.397, lng: -150.644},
          zoom: 18
        });
        miUbicacion = new google.maps.InfoWindow;
        var marker = new google.maps.Marker({
          position: miUbicacion,
          map: map
        });
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            miUbicacion.setPosition(pos);
            miUbicacion.setContent('Te encuentras aquí');
            miUbicacion.open(map);
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, miUbicacion, map.getCenter());
          });
        } else {
          handleLocationError(false, miUbicacion, map.getCenter());
        }



        var inputPartida = document.getElementById("input-partida");
        var inputDestino = document.getElementById("input-destino");

        new google.maps.places.Autocomplete(inputPartida);
        new google.maps.places.Autocomplete(inputDestino);

        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var calculateAndDisplayRoute = function(directionsService, directionsDisplay) {
          directionsService.route ({
            origin: inputPartida.value,
            destination: inputDestino.value,
            travelMode: 'DRIVING'
          });
        }

        directionsDisplay.setMap(map);

        var trazarRuta = function() {
          calculateAndDisplayRoute(directionsService, directionsDisplay);

        }
        document.getElementById("trazar-ruta").addEventListener("click", trazarRuta)


      }

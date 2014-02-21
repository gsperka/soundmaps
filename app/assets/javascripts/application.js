//= require jquery

$(document).ready(function() {
  var geocoder,
      address;

  $('#geocoder').submit(function(event) {
    event.preventDefault();
    address = $('#geocoder input[name = location]').val();
    codeAddress();
  });

  function initialize() {
    geocoder = new google.maps.Geocoder();
    var mapOptions = {
      center: new google.maps.LatLng(0 , 0),
      zoom: 3
    };

  map = new google.maps.Map(document.getElementById("map-canvas"),
        mapOptions);

    function createMarker(point,map, html) {
      var marker = new google.maps.Marker({position: point, map: map});

      var infoWindow = new google.maps.InfoWindow();

      google.maps.event.addListener(infoWindow, 'domready', audioSetup);

      google.maps.event.addListener(marker, "click", function() {
        infoWindow.setContent(html);
        infoWindow.setPosition(point);
        infoWindow.open(map);
      });
      return marker;
    }

    for(var i = 0; i < tracks.length; i++) {
      var point = new google.maps.LatLng(tracks[i].latitude , tracks[i].longitude);
      var marker = new createMarker(point, map, "<button href='#' data-link='"+tracks[i].url+"' class='play'>Play</button><br><p>"+tracks[i].title+"</p><br><p>"+tracks[i].description+"</p>");
      marker.setMap(map);

    }


  }

  function codeAddress() {
    console.log(geocoder);
    geocoder.geocode( { 'address': address}, function(results, status) {
      console.log(status);
      if (status == google.maps.GeocoderStatus.OK) {
        map.setCenter(results[0].geometry.location);
        map.setZoom(13);
        var marker = new google.maps.Marker({
            map: map,
            position: results[0].geometry.location
        });
        var infoWindow = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, "click", function() {
          infoWindow.setContent('<a href="/tracks/new">Create New Track</a>');
          infoWindow.setPosition(results[0].geometry.location);
          infoWindow.open(map);
        });
      return marker;
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
  google.maps.event.addDomListener(window, 'load', initialize);


  function audioSetup(){
    $(".play").click(function(event){
      $("#player").attr("src", $(event.target).data("link"))
    })
  }

});

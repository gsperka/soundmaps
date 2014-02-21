//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require_tree .


$(document).ready(function() {
  var geocoder,
      address;
  $('#geocoder').submit(function(event) {
    event.preventDefault();
    address = $('#geocoder input[name = location]').val();
    codeAddress();
  });


  $('#login_modal').hide();
  $('#signup_modal').hide();
  $("#overlay").hide();

  $('#login_modal').css({'margin-left': '-' + (($('#login_modal').width() / 2) + parseInt($("#login_modal").css('padding-left'))) + 'px'});
  $('#login_modal').css({'margin-top': '-' + ($('#login_modal').width() / 2) + 'px'});

  $('#signup_modal').css({'margin-left': '-' + (($('#signup_modal').width() / 2) + parseInt($("#signup_modal").css('padding-left'))) + 'px'});
  $('#signup_modal').css({'margin-top': '-' + ($('#signup_modal').width() / 2) + 'px'});

  $('#signin').click(function(){
      $('#login_modal').show();
      $("#overlay").show();
  });

  $('#signup').click(function(){
      $('#signup_modal').show();
      $("#overlay").show();
  });

  $("#overlay, #nav").click(function(){
    $('#login_modal').hide();
    $('#signup_modal').hide();
    $("#overlay").hide();
  })


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
    geocoder.geocode( { 'address': address}, function(results, status) {
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

//= require turbolinks


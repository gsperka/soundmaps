//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require_tree .
//= require turbolinks

$(document).ready(function() {

  var geocoder,
      map,
      address,
      markers = new Array(),
      user_markers = new Array();

  $('#geocoder').submit(function(event) {
    event.preventDefault();
    address = $('#geocoder input[name = location]').val();
    codeAddress();
  });

  $('#login_modal').hide();
  $('#signup_modal').hide();
  $("#overlay").hide();
  $("#audio_modal").hide();

  $('#login_modal').css({'margin-left': '-' + (($('#login_modal').width() / 2) + parseInt($("#login_modal").css('padding-left'))) + 'px'});
  $('#login_modal').css({'margin-top': '-' + ($('#login_modal').width() / 2) + 'px'});

  $('#signup_modal').css({'margin-left': '-' + (($('#signup_modal').width() / 2) + parseInt($("#signup_modal").css('padding-left'))) + 'px'});
  $('#signup_modal').css({'margin-top': '-' + ($('#signup_modal').width() / 2) + 'px'});

  $('#audio_modal').css({'margin-left': '-' + (($('#audio_modal').width() / 2) + parseInt($("#audio_modal").css('padding-left'))) + 'px'});
  $('#audio_modal').css({'margin-top': '-' + ($('#audio_modal').width() / 2) + 'px'});

  $('#signin').click(function(){
      $('#login_modal').show();
      $("#overlay").show();
  });

  $('#signup').click(function(){
      $('#signup_modal').show();
      $("#overlay").show();
  });

  $('#map-canvas').on('click', '.audio_link', function(){
      $("#audio_modal").show();
      $("#overlay").show();
  });

  $("#overlay, #nav").click(function(){
    $('#login_modal').hide();
    $('#signup_modal').hide();
    $('#audio_modal').hide();
    $("#overlay").hide();

  })

  $('#toggle_markers').click(function() {
    if(markers[1].getVisible() == true) {
      for(var i = 0; i < markers.length; i++) markers[i].setVisible(false);
    }
    else {
      for(var i = 0; i < markers.length; i++) markers[i].setVisible(true);
    }
  })

  $('#toggle_user_markers').click(function() {
    for(var i = 0; i < markers.length; i++) markers[i].setVisible(false);

    if(user_markers[1].getVisible() == true) {
      for(var i = 0; i < markers.length; i++) user_markers[i].setVisible(false);
    }
    else {
      for(var i = 0; i < markers.length; i++) user_markers[i].setVisible(true);
    }
  })


  function initialize() {
    geocoder = new google.maps.Geocoder();
    var mapOptions = {
      center: new google.maps.LatLng(0 , 0),
      zoom: 3
    };

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

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
      markers.push(marker)
    }
    for(var i = 0; i < user_tracks.length; i++) {
      var point = new google.maps.LatLng(user_tracks[i].latitude , user_tracks[i].longitude);
      var marker = new createMarker(point, map, "<button href='#' data-link='"+user_tracks[i].url+"' class='play'>Play</button><br><p>"+user_tracks[i].title+"</p><br><p>"+user_tracks[i].description+"</p>");
      marker.setVisible(false)
      user_markers.push(marker)
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
          infoWindow.setContent("<button href='#' class='audio_link'>Create New Track</button>");
          infoWindow.setPosition(results[0].geometry.location);
          infoWindow.open(map);
          var latitude = (results[0].geometry.location.d);
          var longitude = (results[0].geometry.location.e);
          document.getElementById('lon').value = longitude;
          document.getElementById('lat').value = latitude;
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

      $("#player").attr("src", $(event.target).data("link"));
      $("#player").attr("type", 'audio/mp3');
    })
  }


});




function initMap() {
 // var wsw = {lat: -36.853507, lng: 174.766542};
 var uluru = {lat: -36.84178580235538, lng: 174.76166383170494};
  	var map = new google.maps.Map(document.getElementById("map"), {
  		center: uluru,
  		zoom: 15
  	});
 var contentString = '<div id="content">'+
 		'<div id="placeMarker">'+
 		'</div>'+
 		'<h5>Auckland bookstore</h5>'+
 		'<div>'+
 		'<p>21 Queen Street, Auckland, 6001</p>'+
 		'</div>'+
 		'</div>';
 	var infowindow = new google.maps.InfoWindow({
 		content: contentString
 	});
  	var marker = new google.maps.Marker({
  	position: uluru,
  	map: map,
  	animation: google.maps.Animation.DROP
  	});
 	marker.addListener('click', function() {
 	infowindow.open(map, marker);
 	});
  }

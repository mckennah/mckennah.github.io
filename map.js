//chapter 10

"use strict";

//global variables
var waitForUser;


//function loadDirections() {
//	geoTest();
//}

function geoTest() {
	waitForUser = setTimeout(fail, 10000);
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(createDirections, fail, {timeout: 10000});
	} else {
		fail();
	}
	
	
}

function createDirections(position) {
	clearTimeout(waitForUser);
	console.log("Longitude: " + position.coords.longitude);
	console.log("Latitude: " + position.coords.latitude);
	var currPosAlt = position.coords.altitude;
	var currPosLat = position.coords.latitude;
	var currPosLng = position.coords.longitude;
	var mapOptions = { 
		center: new google.maps.LatLng(currPosLat, currPosLng),
		zoom: 14 //using 19 gets extremely close, like zoomed in on my exact apartment building close. 14 is close but not too close
		};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
	
	document.getElementById("map-values").innerHTML = "<p>Your latitude is: " + currPosLat + ".</p>";
	document.getElementById("map-values").innerHTML += "<p>Your longitude is: " + currPosLng + ".</p>";
	document.getElementById("map-values").innerHTML += "<p>Your altitude is: " + currPosAlt + ".</p>";
	document.getElementById("map-values").innerHTML += "<p><i>Altitude is usually only available on devices with GPS enabled.</i></p>"; 
		//I think Bing maps can show altitude
		//for future use if altitude is needed: https://msdn.microsoft.com/en-us/library/jj158959.aspx
		//need more exp with using different APIs though Gooogle is most popular
}

function fail() {
	console.log("Geolocation information not available or not authorized.");
	document.getElementById("map").innerHTML = "Sorry, but we're unable to access your current location";
}



function setUpPage() {
	geoTest();
	createEventListeners();
}

function createEventListeners() {
	
}


//runs setup of functions when page finishes loading
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}
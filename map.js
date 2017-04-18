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

	var currPosLat = position.coords.latitude;
	var currPosLng = position.coords.longitude;
	var mapOptions = { 
		center: new google.maps.LatLng(currPosLat, currPosLng),
		zoom: 14
		};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
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
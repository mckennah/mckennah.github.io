"use strict"; //interpret document in strict mode
//global variables
var formValidity = true;

//remove default values and formatiing from state and delivery date fields
function removeSelectDefaults() {
	var emptyBoxes = document.getElementsByTagName("select");
	for (var i = 0; i < emptyBoxes.length; i++) {
		emptyBoxes[i].selectedIndex = -1;
	}
}


function copyShippingAddress() {
	var shippingInputElements = document.querySelectorAll("#shippingAdd input");
	var billingInputElements = document.querySelectorAll("#billingAdd input");
		if (document.getElementById("sameAddr").checked) {
			for (var i = 0; i < shippingInputElements.length; i++) {
				billingInputElements[i + 1].value = 
					shippingInputElements[i].value;
			}
			document.querySelector("#billingAdd select").value = 
				document.querySelector("#shippingAdd select").value;
		} else {
			for (var i = 0; i < shippingInputElements.length; i++) {
				billingInputElements[i + 1].value = "";
			}
		 document.querySelector("#billingAdd select").selectedIndex = -1;
		}
}

//validate form function
function validateForm(evt) {
	if (evt.preventDefault) {
		evt.preventDefault(); //prevents form from submitting
	} else {
		evt.returnValue = false; //prevents form from submitting IE8
	}
formValidity = true; //reset value
	if (formValidity === true) {
		document.getElementById("errorText").innerHTML = "";
		document.getElementById("errorText").style.display = "none";
		document.getElementsByTagName("form")[0].submit();
	} else {
		document.getElementById("errorText").innerHTML = "Please fix the indicated problems and resubmit your information.";
		document.getElementById("errorText").style.display = "block";
		scroll(0,0);
	}
function validateForm(evt) {
	if (evt.preventDefault) {
		ect.preventDefault();
	} else {
		evt.returnValue = false;
	}
formValidity = false; //reset
function validateForm(evt) {
	if (evt.preventDefault) {
		evt.preventDefault(); //prevent submit
	} else {
		evt.returnValue = false; //IE8 prevent submit
	}
formValidity = true; //reset
}
}
}

function createEventListeners() {
	var same = document.getElementById("sameAddr");
		if (same.addEventListener) {
			same.addEventListener("click", copyShippingAddress, false);	
		} else if (same.attachEvent) {
			same.attachEvent("onclick", copyShippingAddress);
		}
	var form = document.getElementsByTagName("form")[0];
		if (form.addEventListener) {
			form.addEventListener("submit", validateForm, false);
		} else if (form.attachEvent) {
			form.attachEvent("onsubmit", validateForm);
		}
}

function setUpPage() {
	removeSelectDefaults();
	createEventListeners();
}
//runs setup of functions when page finishes loading
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}
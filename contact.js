"use strict"; //interpret document in strict mode

//global vairables
var formValidity = true;
var errorDiv = "";

//remove default select value
function removeSelectDefaults(){
	var emptyBoxes = document.getElementsByTagName("select");
		for (var i = 0; i <emptyBoxes.length; i++) {
			emptyBoxes[i].selectedIndex = -1;
		}
}

//validate message
function validateMessage() {
	//var errorDiv = document.querySelector("#contactinfo");
	var msgBox = document.getElementById("messageText");
		try {
			if ((msgBox.value === "") || (msgBox.value === msgBox.placeholder)) {
				throw "Please enter message.";
			} else {
				errorDiv.style.display = "none";
				msgBox.style.background = "white";
			}
		}
		catch (msg) {
			errorDiv.style.display = "block";
			errorDiv.innerHTML = msg;
			msgBox.style.background = "rgb(255,233,233)";
			formValidity = false;
		}
}


//validate required fields
function validateRequired() {
	var inputElements = document.querySelectorAll("#contactinfo input");
	var errorDiv = document.getElementById("errorText");
	var elementCount = inputElements.length;
	var requiredValidity = true;
	var currentElement;
	
	try {
		for (var i = 0; i < elementCount; i++) {
			//validate all input elements in fieldset
			currentElement = inputElements[i];
				if (currentElement.value === "") {
					currentElement.style.background = "rgb(255,233,233)";
					requiredValidity = false;
				} else {
					currentElement.style.background = "white";
				}
		}
		if (requiredValidity === false) {
			throw "Please complete all fields.";
		}
		errorDiv.style.display = "none";
		errorDiv.innerHTML = "";
	}
	catch(msg) {
		errorDiv.style.display = "block";
		errorDiv.innerHTML = msg;
		formValidity = false;
	}
}

//validate form
function validateForm(evt) {
	if (evt.preventDefault) {
		evt.preventDefault(); //prevents submission
	} else {
		evt.returnValue = false; //IE8 prevents submission
	}
	formValidity = true; //reset
	validateRequired();
		if (formValidity === true) {
			document.getElementsByTagName("form")[0].submit();
		}
	validateMessage();
}



//create event listeners
function createEventListenersSubmit() {
	var form = document.getElementsByTagName("form")[0];
		if (form.addEventListener) {
			form.addEventListener("submit", validateForm, false);
		} else if (form.attachEvent) {
			form.attachEvent("onsubmit", validateForm);
		}
}

function setUpPage () {
	removeSelectDefaults();
	createEventListenersSubmit();
}
//runs set up when page loads
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent){
	window.attachEvent("onload", setUpPage);
}

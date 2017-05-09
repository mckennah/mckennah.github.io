"use strict"; //interpret document in strict mode

//global vairables
var formValidity = true;

//remove default select value
function removeSelectDefaults(){
	var emptyBoxes = document.getElementsByTagName("select");
		for (var i = 0; i <emptyBoxes.length; i++) {
			emptyBoxes[i].selectedIndex = -1;
		}
}

//validate message
function validateMessage() {
	var errorDiv = document.getElementById("errorMsg");
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
			msgBox.style.background = "rgb(255,165,165)";
			formValidity = false;
		}
}


//validate required fields
function validateRequired() {
	var inputElements = document.querySelectorAll("#contactinfo input");
	var errorDiv = document.getElementById("errorMsg");
	var elementCount = inputElements.length;
	var requiredValidity = true;
	var currentElement;
	
	try {
		for (var i = 0; i < elementCount; i++) {
			//validate all input elements in fieldset
			currentElement = inputElements[i];
				if (currentElement.value === "") {
					currentElement.style.background = "rgb(255,165,165)";
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

//validate first name against XSS
function validateFName() {
	var nameInput = document.getElementById("firstname");
	var errorDiv = document.getElementById("errorMsg");
	var fNameCheck = /^[A-Za-z ]{1,16}$/; //letters and spaces
	try {
		if (fNameCheck.test(nameInput.value) === false) {
			throw "Please provide a valid first name";
		}
		nameInput.style.background = "";
		errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
	}
	catch(msg) {
		//display error message
      errorDiv.innerHTML = msg;
      errorDiv.style.display = "block";
      //change input style
      nameInput.style.background = "rgb(255,165,165)";
	}
}

//validate last name against XSS
function validateLName() {
	var nameInput = document.getElementById("lastname");
	var errorDiv = document.getElementById("errorMsg");
	var lNameCheck = /^[A-Za-z ]{1,20}$/; //letters and spaces
	try {
		if (lNameCheck.test(nameInput.value) === false) {
			throw "Please provide a valid last name";
		}
		nameInput.style.background = "";
		errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
	}
	catch(msg) {
		//display error message
      errorDiv.innerHTML = msg;
      errorDiv.style.display = "block";
      //change input style
      nameInput.style.background = "rgb(255,165,165)";
	}
}

//validate entered email for proper @ 
function validateEmail() {
   var emailInput = document.getElementById("email");
   var errorDiv = document.getElementById("errorMsg");
   var emailCheck = /^[_\w\-]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
   try {
	if (emailCheck.test(emailInput.value) === false) {
		throw "Please provide a valid email address";
	}

      //remove any email error styling and message
      emailInput.style.background = "";
      errorDiv.innerHTML = "";
      errorDiv.style.display = "none";
      //convert email address to lowercase
	emailInput.value = emailInput.value.toLowerCase();

   }
   catch(msg) {
      //display error message
      errorDiv.innerHTML = msg;
      errorDiv.style.display = "block";
      //change input style
      emailInput.style.background = "rgb(255,165,165)";
   }
}

//validate message box against XSS
function validateMBox() {
	var textInput = document.getElementById("messageText");
	var errorDiv = document.getElementById("errorMsg");
	var mBoxCheck = /^[A-Za-z0-9!@#$%^&*()_ ]{1,250}$/; 
	try {
		if (mBoxCheck.test(textInput.value) === false) {
			throw "Please enter proper message."; 
		}
		textInput.style.background = "";
		errorDiv.innerHTML = "";
        errorDiv.style.display = "none";
	}
	catch(msg) {
		//display error message
      errorDiv.innerHTML = msg;
      errorDiv.style.display = "block";
      //change input style
      textInput.style.background = "rgb(255,165,165)";
	}
}





//create event listeners
function createEventListenersSubmit() {
	var form = document.getElementsByTagName("form")[0];
		if (form.addEventListener) {
			form.addEventListener("submit", validateForm, false);
		} else if (form.attachEvent) {
			form.attachEvent("onsubmit", validateForm);
		}
	var emailInput = document.getElementById("email");
	if (emailInput.addEventListener) {
      emailInput.addEventListener("change", validateEmail, false); 
   } else if (emailInput.attachEvent) {
      emailInput.attachEvent("onchange", validateEmail);
   }
   var FNameInput = document.getElementById("firstname");
	if (FNameInput.addEventListener) {
      FNameInput.addEventListener("change", validateFName, false); 
   } else if (FNameInput.attachEvent) {
      FNameInput.attachEvent("onchange", validateFName);
   }
   var LNameInput = document.getElementById("lastname");
	if (LNameInput.addEventListener) {
      LNameInput.addEventListener("change", validateLName, false); 
   } else if (LNameInput.attachEvent) {
      LNameInput.attachEvent("onchange", validateLName);
   }
   var mBoxInput = document.getElementById("messageText");
	if (mBoxInput.addEventListener) {
      mBoxInput.addEventListener("change", validateMBox, false); 
   } else if (mBoxInput.attachEvent) {
      mBoxInput.attachEvent("onchange", validateMBox);
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

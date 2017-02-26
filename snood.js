// global variables
var i = [1];
// global variables tracking status of each form section
var greyhoundYNComplete = true;
var msmtCalcComplete = true;
var climateComplete = true;

// global variables referencing left-side p elements
var recommendSizeElement = document.getElementById("recommendSize");
var explanationElement = document.getElementById("explanation");

//global variable referencing the inches measurement box
var msmtBox = document.forms[0].snoodMeasurement;



// check if greyhound yes/no radio button is selected
function verifyGreyhoundYN() {
   testFormCompleteness();
}

// check if head shape option is selected
function verifyHeadShape() {
   testFormCompleteness();
}

//verify snood measurement entry is between 5 & 60
function verifyMsmtCalcComplete() {
   testFormCompleteness();  
var validity = true;
var messageText = "";
	try {
		if(!(msmtBox.value > 5)) {
			throw "Please enter a measurement greater than 5.";
		}
		if(!(msmtBox.value < 60)) {
			throw "Please enter a measurement less than 60"
		}
	}
	catch(message) {
		validity = false;
		messageText = message;
		msmtBox.value = ""; // remove erroneous entry from input box
	}
	finally {
		msmtCalcComplete = validity;
		explanationElement.innerHTML = explanation;
		recommendHeadElement.innerHTML = ""; //remove any former recommendation text
		testFormCompleteness();
	}
}


function measureSnood() { // function to tell user what size snood for their hound
var i = document.getElementById("snoodMeasurement").value;
	if (i <=9) {
	document.getElementById("recommendHead").innerHTML = "Extra-Small"
	} else if (i <=12) {
	document.getElementById("recommendHead").innerHTML = "Small";
	} else if (i<=18) {
	document.getElementById("recommendHead").innerHTML = "Medium";
	} else if (i<=24) {
	document.getElementById("recommendHead").innerHTML = "Large";
	} else if (i<=33) {
	document.getElementById("recommendHead").innerHTML = "Extra-Large";
	} else {
	document.getElementById("recommendHead").innerHTML = "that your dog lose weight";
	} 
}

// check if greyhound yes/no radio button is selected
function verifyGClimate() {
   testFormCompleteness();
}






var btn = document.getElementById("button");
	if (btn.addEventListener) { //to make it work when button is clicked
	btn.addEventListener("click", measureSnood, false);
	}
	else if (btn.attachEvent) { //for those weirdos who use old versions of IE
	btn.attachEvent("onclick", measureSnood)
	}
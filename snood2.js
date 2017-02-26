// global variables
var inchesComplete = true;
var greyYNComplete = true;
//var headComplete = true;
var climateComplete = true;

var recommendSizeElement = document.getElementById("recommendSize"); //size recommendation
var explanationElement = document.getElementById("explanation"); //explanation of size & fabric/head hole recomendation

var inchesFieldset = document.getElementsByTagName("fieldset")[0];
var greyYNFieldset = document.getElementsByTagName("fieldset")[1];
var climateFieldset = document.getElementsByTagName("fieldset")[2];

var inchesBox = document.forms[0].inches; //inches input box



//verify that inches entry is greater than 1 and less than 40
function verifyInches() {
   testFormCompleteness();  
var validity = true;
var explanationText = "";
	try {
		if(!(inchesBox.value >= 1 && inchesBox.value <=40)) {
			throw "Please enter measurement between 0 and 40 inches";
		}
	}
	catch(explanation) {
		validity = false;
		explanationText = explanation;
		inchesBox.value = ""; // remove erroneous entry from input box
	}
	finally {
		inchesComplete = validity;
		explanationElement.innerHTML = explanationText;
		recommendSizeElement.innerHTML = ""; //remove any former recommendation heading
		testFormCompleteness();
	}
}

// verify that user has selected that they're shopping for a greyhound or not
function verifyGreyYN() {
   testFormCompleteness();
}

//need to work more on this later
/*function verifyHead() {
	testFormCompleteness();
var validity = true;
var explanationText = "";
var head = document.getElementById("headShapeSelect");

	try {
		if(head.selectedIndex == 0) {
		throw "Please select a head shape";
		}
	catch(explanation) {
		validity = false;
		explanationText = explanation;
	}
	finally {
		headComplete = validity;
		explanationElement.innerHTML = explanationText
		recommendSizeElement.innerHTML = "";
		testFormCompleteness();
	}
}
}*/


// verify that a climate is selected
function verifyClimate() {
   testFormCompleteness();
}

//check if all form sections are completed
function testFormCompleteness() {
   if (inchesComplete && greyYNComplete && climateComplete) {
      createRecommendation();
   }
}

// generate snood recommendation based on user input
function createRecommendation() {
	if (inchesBox.value <=9) {
		recommendSizeElement = "Extra-Small";
		explanationElement = "An snood in size extra-small";
	} else if (inchesBox.value <=12) {
		recommendSizeElement = "Small";
		explanationElement = "An snood in size small";
	} else if (inchesBox.value <=18) {
		recommendSizeElement = "Medium";
		explanationElement = "An snood in size medium";
	} else if (inchesBox.value <=24) {
		recommendSizeElement = "Large";
		explanationElement = "An snood in size large";
	} else if (inchesBox.value <=33) {
		recommendSizeElement = "Extra-Large";
		explanationElement = "An snood in size extra-large";
	} else {
		recommendSizeElement = "None Available";
		explanationElement = "We currently don't carry snoods large enough for your porky pet. We would recommend a weight-managment diet and rigorous exercise routine.";
	} 

	if (document.getElementById("mild").checked) { // add fabric type based on climate
	  explanationElement.innerHTML += ", in a loose-knit fabric, perfect for general use.";
	} else if (document.getElementById("dry").checked) {
      explanationElement.innerHTML += ", in a lightweight fabric or our looser knits, perfect for regions with dry winters.";
	} else if (document.getElementById("wet").checked) {
      explanationElement.innerHTML += ", in a waterproof fabric, perfect for regions with wet winters.";
	} else if (document.getElementById("cold").checked) {
      explanationElement.innerHTML += ", in a heavy fabric or our tighter knits, perfect for regions with cold winters.";
	} else if (document.getElementById("harsh").checked) {
      explanationElement.innerHTML += ". We would recommend a double layer with a tight-knit snood underneath a waterproof snood to keep your pooch warm and dry.";
   }
   
   	if (document.getElementById("Greyhound").checked) {
		explanationElement.innerHTML += "Our standard snood is built for Greyhounds.";
	} else if (document.getElementById("Non-Greyhound").checked) {
		explanationElement.innerHTML += "Our 'Jumbo Noggin' snood option will fit your non-greyhound pooch.";
	}
}

//create event listeners for all input elements 
function createEventListeners() {
   inchesBox.value = ""; //clears inches text box on page load
   if (inchesBox.addEventListener) {
     inchesBox.addEventListener("input", verifyInches, false); 
   } else if (inchesBox.attachEvent)  {
     inchesBox.attachEvent("onchange", verifyInches);
   }
   
   var greyYNBox;
   for (var i = 0; i < 2; i++) {
      greyYNBox = greyYNFieldset.getElementsByTagName("input")[i];
      greyYNBox.checked = false;      
      if (greyYNBox.addEventListener) {
        greyYNBox.addEventListener("change", verifyGreyYN, false); 
      } else if (greyYNBox.attachEvent)  {
        greyYNBox.attachEvent("onchange", verifyGreyYN);
      }
   }
   var climateBox;
   for (var i = 0; i < 5; i++) {
      climateBox = climateFieldset.getElementsByTagName("input")[i];
      climateBox.checked = false;      
      if (climateBox.addEventListener) {
        climateBox.addEventListener("change", verifyClimate, false); 
      } else if (climateBox.attachEvent)  {
        climateBox.attachEvent("onchange", verifyClimate);
      }
   }
}

var btn = document.getElementById("button");
	if (btn.addEventListener) { //to make it work when button is clicked
	btn.addEventListener("click", createRecommendation, false);
	}
	else if (btn.attachEvent) { //users of old versions of IE
	btn.attachEvent("onclick", createRecommendation)
	}


	
	
/* create event listeners when page finishes loading 
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}*/
// global variables
var inchesComplete = true;
var greyYNComplete = true;
var climateComplete = true;
var i = [1];

var recommendSizeElement = document.getElementById("recommendSize"); //size recommendation
var messageElement = document.getElementById("message"); //message of size & fabric recomendation
var message2Element = document.getElementById("message2"); //message of head hole recomendation

var inchesFieldset = document.getElementsByTagName("fieldset")[0];
var greyYNFieldset = document.getElementsByTagName("fieldset")[1];
var climateFieldset = document.getElementsByTagName("fieldset")[2];

var inchesBox = document.forms[0].inches; //inches input box



//verify that inches entry is greater than 1 and less than 40
function verifyInches() {
   testFormCompleteness();  
			var validity = true;
			var messageText = "";
				try {
					if(!(inchesBox.value >= 1 && inchesBox.value <=40)) {
						throw "Please enter measurement between 0 and 40 inches";
					}
				}
				catch(message) {
					validity = false;
					messageText = message;
					inchesBox.value = ""; // remove erroneous entry from input box
				}
				finally {
					inchesComplete = validity;
					messageElement.innerHTML = messageText;
					recommendSizeElement.innerHTML = ""; //remove any former recommendation heading
					testFormCompleteness();
				}
			}

// verify that user has selected that they're shopping for a greyhound or not
function verifyGreyYN() {
   testFormCompleteness();
}




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
						recommendSizeElement.innerHTML = "Extra-Small";
						messageElement.innerHTML = "A snood in size extra-small";
			} else if (inchesBox.value <=12) {
						recommendSizeElement.innerHTML = "Small";
						messageElement.innerHTML = "A snood in size small";
			} else if (inchesBox.value <=18) {
						recommendSizeElement.innerHTML = "Medium";
						messageElement.innerHTML = "A snood in size medium";
			} else if (inchesBox.value <=24) {
						recommendSizeElement.innerHTML = "Large";
						messageElement.innerHTML = "A snood in size large";
			} else if (inchesBox.value <=33) {
						recommendSizeElement.innerHTML = "Extra-Large";
						messageElement.innerHTML = "A snood in size extra-large";
			} else {
						recommendSizeElement.innerHTML = "None Available";
						messageElement.innerHTML = "We currently don't carry snoods large enough for your porky pet. We would recommend a weight-managment diet and rigorous exercise routine.";
			} 

	if (document.getElementById("mild").checked) { // add fabric type based on climate
	  messageElement.innerHTML += ", in a loose-knit fabric, perfect for general use.";
	} else if (document.getElementById("dry").checked) {
      messageElement.innerHTML += ", in one of our looser knits, perfect for regions with dry winters.";
	} else if (document.getElementById("wet").checked) {
      messageElement.innerHTML += ", in a waterproof fabric, perfect for regions with wet winters.";
	} else if (document.getElementById("cold").checked) {
      messageElement.innerHTML += ", in a heavy fabric or our tighter knits, perfect for regions with cold winters.";
	} else if (document.getElementById("harsh").checked) {
      messageElement.innerHTML += ". We would recommend a double layer with a tight-knit snood underneath a waterproof snood to keep your pooch warm and dry.";
   }
   
   	if (document.getElementById("greyhound").checked) {
		message2Element.innerHTML = "Our standard snood is built for Greyhounds.";
	} else if (document.getElementById("non-greyhound").checked) {
		message2Element.innerHTML = "Our 'Jumbo Noggin' snood option will fit your non-greyhound pooch.";
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




	
	
// create event listeners when page finishes loading 
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}
// global variables
var inchesComplete = true;
var greyYNComplete = true;
//var climateComplete = true;
var i = [1];

var recommendSizeElement = document.getElementById("recommendSize"); //size recommendation
var messageElement = document.getElementById("message"); //message of size recomendation
var message2Element = document.getElementById("message2"); //message of head hole recomendation

var inchesFieldset = document.getElementsByTagName("fieldset")[0];
var greyYNFieldset = document.getElementsByTagName("fieldset")[1];
//var climateFieldset = document.getElementsByTagName("fieldset")[2];

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

/*
// verify that a climate is selected
function verifyClimate() {
   testFormCompleteness();
}
*/

// verify that user has selected that they're shopping for a greyhound or not
function verifyGreyYN() {
   testFormCompleteness();
}





//check if all form sections are completed
function testFormCompleteness() {
			if (inchesComplete && greyYNComplete) {
				createRecommendation();
			}
}

// generate snood recommendation based on user input

function createRecommendation() {
//add size based on input
		if (inchesBox.value <=8) {
						recommendSizeElement.innerHTML = "Extra-Small";
						messageElement.innerHTML = "A snood in size extra-small.";
			} else if (inchesBox.value <=14) {
						recommendSizeElement.innerHTML = "Small";
						messageElement.innerHTML = "A snood in size small.";
			} else if (inchesBox.value <=22) {
						recommendSizeElement.innerHTML = "Medium";
						messageElement.innerHTML = "A snood in size medium.";
			} else if (inchesBox.value <=30) {
						recommendSizeElement.innerHTML = "Large";
						messageElement.innerHTML = "A snood in size large.";
			} else if (inchesBox.value <=40) {
						recommendSizeElement.innerHTML = "Extra-Large";
						messageElement.innerHTML = "A snood in size extra-large.";
			} 
/*to be fixed
// add fabric type based on climate
		if (document.getElementById("mild").checked) { 
						messageElement.innerHTML += ", in a loose-knit fabric, perfect for general use.";
			} else if (document.getElementById("wet").checked) {
						messageElement.innerHTML += ", in a waterproof fabric, perfect for regions with wet winters.";
			} else if (document.getElementById("cold").checked) {
						messageElement.innerHTML += ". We would recommend a double layer with a tight-knit snood underneath a waterproof snood to keep your pooch warm and dry.";
			} else {
				messageElement.innerHTML += ".";
   }	
*/		
		
//add recomendation based on breed
   	if (document.getElementById("greyhound").checked) {
			message2Element.innerHTML = "Our standard snood is built for Greyhounds, Salukis, Whippets, and Italian Greyhounds.";
	} else if (document.getElementById("non-greyhound").checked) {
				message2Element.innerHTML = "Our 'Jumbo Noggin' snood option will fit your non-greyhound pooch.";
	}
}




/*might do a button later

var btn = document.getElementById("button");
	if (btn.addEventListener) { //to make it work when button is clicked
	btn.addEventListener("click", testFormCompleteness, false);
	}
	else if (btn.attachEvent) { //for users of old versions of IE
	btn.attachEvent("onclick", testFormCompleteness)
	}

*/


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
}
  /*
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
*/



	
// create event listeners when page finishes loading 
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}

/*I used the try, catch, and throw method in this project. 
It will tell the user to enter a value within the defined limits listed, 
and clear the previous erroneous value. */
// global variables
var inchesComplete = true;
var greyYNComplete = true;

var i = [1];

var recommendSizeElement = document.getElementById("recommendSize"); //size recommendation
var messageElement = document.getElementById("message"); //message of size recomendation
var message2Element = document.getElementById("message2"); //message of head hole recomendation
var inchesFieldset = document.getElementsByTagName("fieldset")[0];
var greyYNFieldset = document.getElementsByTagName("fieldset")[1];

var color = []; 
var arrayString;

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
			document.getElementById("snoodChoice").style.display = "block";
			document.getElementById("recommendSize").style.display = "block";
			document.getElementById("message").style.display = "block";	
//add recommendation based on breed
   	if (document.getElementById("greyhound").checked) {
			message2Element.innerHTML = "Our standard snood is built for Greyhounds, Salukis, Whippets, and Italian Greyhounds.";
	} else if (document.getElementById("non-greyhound").checked) {
				message2Element.innerHTML = "Our 'Jumbo Noggin' snood option will fit your non-greyhound pooch.";
	}
	document.getElementById("message2").style.display = "block";
}

//add color(s) to recommendation
function addSelectedColors(event) {
   if (event === undefined) { //iE8
      event = window.event;
   }
	var callerElement = event.target || event.srcElement;
	var colorName = callerElement.value;
	if (callerElement.checked) { //if checked, add to array
	
		color.push(colorName);

      //add selected colors to recommendation side
      var newColor = document.createElement("li");
      newColor.innerHTML = colorName;
      document.getElementById("message3").appendChild(newColor);
      //make recommenadation side visible
      document.getElementById("snoodChoice").style.display = "block";
	  document.getElementById("recommendColors").style.display = "block";
	  document.getElementById("message3").style.display = "block";
	} else { //if color is deselected
		var listItems = document.querySelectorAll("#message3 li");
		for (var i = 0; i < listItems.length; i++) {
			if (listItems[i].innerHTML === colorName) {
	
				color.splice(i, 1); //remove element at index i from array

            listItems[i].parentNode.removeChild(listItems[i]);
            break;
         }
      }
   }
}

//convert form input to strings for submission
function convertToString() {
	//convert color array to string
	arrayString = color.toString();
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
  
  var colors = document.getElementsByName("colors");
   if (colors[0].addEventListener) {
      for (var i = 0; i < colors.length; i++) {
         colors[i].addEventListener("change", addSelectedColors, false);
      }
   } else if (colors[0].attachEvent) {
      for (var i = 0; i < colors.length; i++) {
         colors[i].attachEvent("onchange", addSelectedColors);
      }
   }
   var button = document.getElementById("btn");
   if (button.addEventListener) {
	   button.addEventListener("click", convertToString, false);
   } else if (button.attachEvent) {
	   button.attachEvent("onclick", convertToString);
   }
}




	
// create event listeners when page finishes loading 
if (window.addEventListener) {
   window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
   window.attachEvent("onload", createEventListeners);
}

/*I used the try, catch, and throw method in this project. 
It will tell the user to enter a value within the defined limits listed, 
and clear the previous erroneous value. */
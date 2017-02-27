function fillInchesCalc() {		
		if (inchesBox.value <=9) {
						inchesCalc = "Extra-Small";
						inchesCalc2 = "A snood in size extra-small";
			} else if (inchesBox.value <=12) {
						inchesCalc = "Small";
						inchesCalc2 = "A snood in size small";
			
			
			} else if (inchesBox.value <=18) {
						inchesCalc = "Medium";
						inchesCalc2 = "A snood in size medium";
			
			
			} else if (inchesBox.value <=24) {
						inchesCalc = "Large";
						inchesCalc2 = "A snood in size large";
			
			
			} else if (inchesBox.value <=33) {
						inchesCalc = "Extra-Large";
						inchesCalc2 = "A snood in size extra-large";
			
			} else {
						inchesCalc = "None Available";
						inchesCalc2 = "We currently don't carry snoods large enough for your porky pet. We would recommend a weight-managment diet and rigorous exercise routine.";
			}
}

function fillClimateCalc() {// add fabric type based on climate
		if (document.getElementById("mild").checked) { 
						climateCalc = ", in a loose-knit fabric, perfect for general use.";
		} else if (document.getElementById("wet").checked) {
						climateCalc = ", in a waterproof fabric, perfect for regions with wet winters.";
		} else if {
						climateCalc = ". We would recommend a double layer with a tight-knit snood underneath a waterproof snood to keep your pooch warm and dry.";
   }
}

function fillGreyYN() {
	   	if (document.getElementById("greyhound").checked) {
			greyYN = "Our standard snood is built for Greyhounds.";
	} else  {
				greyYN = "Our 'Jumbo Noggin' snood option will fit your non-greyhound pooch.";
	}
}
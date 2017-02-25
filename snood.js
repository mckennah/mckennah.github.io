// global variables
var i = [1];














function measureSnood() { // function to tell user what size snood for their hound
var i = document.getElementById("snoodMeasurement").value;
	if (i <=5) {
	document.getElementById("msmtCalc").innerHTML = "We recommend size 'Extra-Small'"
	} else if (i <=10) {
	document.getElementById("msmtCalc").innerHTML = "We recommend size 'Small'";
	} else if (i<=16) {
	document.getElementById("msmtCalc").innerHTML = "We recommend size 'Medium'";
	} else if (i<=24) {
	document.getElementById("msmtCalc").innerHTML = "We recommend size 'Large'";
	} else if (i<=33) {
	document.getElementById("msmtCalc").innerHTML = "We recommend size 'Extra-Large'";
	} else {
	document.getElementById("msmtCalc").innerHTML = "We recommend your dog lose weight";
	} 
}
var btn = document.getElementById("button");
	if (btn.addEventListener) { //to make it work when button is clicked
	btn.addEventListener("click", measureSnood, false);
	}
	else if (btn.attachEvent) { //for those weirdos who use old versions of IE
	btn.attachEvent("onclick", measureSnood)
	}
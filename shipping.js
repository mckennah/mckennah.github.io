"use strict";

var dateObject = new Date();
var countup;
var shippingTicket = {
		calcCost: updateTotalCost
};

function displayCalendar(whichMonth) {
	var date;
	var dateToday = new Date();
	var dayOfWeek;
	var daysInMonth;
	var dateCells;
	var captionValue;
	var month;
	var year;
	
	var monthArray = ["January", "February", "March", "April",
		"May", "June", "July", "August", "September", "October",
		"November", "December"];
	
	if (whichMonth === -1) {
		dateObject.setMonth(dateObject.getMonth() - 1);
	} else if (whichMonth === 1) {
		dateObject.setMonth(dateObject.getMonth() + 1); 
	} //this if/else statement allows users to navigate to the
	 //previous/next month using buttons in calendar widget
	
	month = dateObject.getMonth();
	year = dateObject.getFullYear();
	dateObject.setDate(1);
	dayOfWeek = dateObject.getDay();
	captionValue = monthArray[month] + " " + year;
	document.querySelector("#cal table caption").innerHTML = captionValue;
	
	if (month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11) { //31 day months
			daysInMonth = 31;
		} else if (month === 1) { //Feb
			if (year % 4 === 0) { //leapyear
				if (year % 100 === 0) {
					if (year % 400 === 0) {
						daysInMonth = 29;
					} else {
						daysInMonth = 28;
					}
				} else {
					daysInMonth = 29;
				}
			} else {
				daysInMonth = 28;
			}
		} else { //30 day months
			daysInMonth = 30;
		}
	
	dateCells = document.getElementsByTagName("td");
		for (var i = 0; i < dateCells.length; i++) {
			//clear existing table dates
			dateCells[i].innerHTML = "";
			dateCells[i].className = "";
		}
		for (var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
			//add dates to days cells
			dateCells[i].innerHTML = dateObject.getDate();
			dateCells[i].className = "date";
			if (dateObject < dateToday) {
				dateCells[i].className = "pastdate";
			}
		date = dateObject.getDate() + 1;
		dateObject.setDate(date);
		}
		dateObject.setMonth(dateObject.getMonth() - 1);
		//reset month to month shown
		document.getElementById("cal").style.display = "block";
		//display calendar if it's not visible
}

function selectDate(event) {
	if (event === undefined) { //idenfity element that called function which you can use to
// identify the date the user selected in the calendar widget
// for IE8 
		event = window.event;
	}
	var callerElement = event.target || event.srcElement;
	
	if (callerElement.innerHTML === "") {
		//cell contains no date so dont close calendar
		document.getElementById("cal").style.display = "block";
		return false;
	}
	dateObject.setDate(callerElement.innerHTML);
/* 
	This code below creates a fullDateToday variable whose value
	is a Date object with the current date and time, and then
	it creates a dateToday variable with the value set to the
	year, month and day from the fullDateToday variable. It then
	creates a selectedDate variable set the the y,m,d of the date
	selected by the user. The if statement checks if the selected date
	is before todays date  and in the past. If so the claendar remains
	displayed and the function ends. In all other cases, the value of the
	pick a date text box is set to the date in the Date object, using the
	toLocaleDateString() method to format the date according to the user's
	local conventions.
*/	
	var fullDateToday = new Date();
	var dateToday = Date.UTC(fullDateToday.getFullYear(), 
		fullDateToday.getMonth(), fullDateToday.getDate());
	var selectedDate = Date.UTC(dateObject.getFullYear(), 
		dateObject.getMonth(), dateObject.getDate());
	if ( dateToday <= selectedDate) {
		document.getElementById("cal").style.display = "block";
		return false;
	}
	document.getElementById("tripDate").value = dateObject.toLocaleDateString();

countup = setInterval(updateCountup, 1000);
document.getElementById("countupSection").style.display = "block";
hideCalendar();
shippingTicket.date = dateObject.toLocaleDateString();
document.getElementById("selectedDate").innerHTML = shippingTicket.date;
document.getElementById("dateSection").style.display = "block";
} 
/*
	Above in countup
	The first statement uses the setInterval() method of the Window object to
	call the updateCountup() function when a user selects a valid date, and
	to repeatedly call the function every second (every 1000 millisecs). This 
	simulates the behavior of a digital timer. The setInterval() method is set
	as the value of the global countup variabe so it can be cancelled later.
	The second statement makes the web page element containing the counter visible.
*/

function hideCalendar() {
	document.getElementById("cal").style.display = "none";
}

//next and previous month buttons
function prevMo() {
	displayCalendar(-1);
}
function nextMo() {
	displayCalendar(1);
}

function updateTotalCost() {
	var expressCost = 50; //express shipping
	var totalCost = expressCost / 10; //non-express shipping
	var shortTotalCost = totalCost.toFixed(0); //removes decimal places.. there could be some in the future if I decide to change shipping costs
document.getElementById("creditLabel").innerHTML = "Express shipping $" + expressCost.toLocaleString();
document.getElementById("cashLabel").innerHTML = "Budget shipping $" + shortTotalCost.toLocaleString();
	
}

/*
	The first statement sets the value of dateToday to the current date
	and time. The second creates a dateElapsed variable containing the current
	year, month, date. The third statement creates
	a dateShipped variable with a calue containg the y, m, and d selected.
*/
function updateCountup() {
	var dateToday = new Date();
	var dateElapsed = Date.UTC(dateToday.getFullYear(), 
		dateToday.getMonth(), dateToday.getDate());
	var dateShipped = Date.UTC(dateObject.getFullYear(), 
		dateObject.getMonth(), dateObject.getDate()); 
	if ((dateElapsed - dateShipped) < 1000) {//for those that don't click what I want
		clearInterval(countup);
		document.getElementById("countupSection").style.display = "none";
	}
	//years
	var yearsSince = Math.floor((dateElapsed - dateShipped) / (86400000 * 365));
	document.getElementById("countup").innerHTML = yearsSince + " year(s)";
	//months
	var fractionalYear = (dateElapsed - dateShipped) % (86400000 * 365);
	var monthsSince = Math.floor((fractionalYear) / ((86400000 * 365) / 12));
	document.getElementById("countup").innerHTML += ", " + monthsSince + " month(s)";
	//days
	var fractionalMonth = ((fractionalYear) % ((86400000 * 365) / 12))
	var daysSince = Math.floor((fractionalMonth) / 86400000);
	document.getElementById("countup").innerHTML += ", and " + daysSince + " day(s)";
	

}


function createTicket() { //makes ticket display
	document.getElementById("shippingTicket").style.display = "block";
	shippingTicket.calcCost();
}


function createEventListeners() {
	var dateField = document.getElementById("tripDate");
		if (dateField.addEventListener) {
			dateField.addEventListener("click", displayCalendar, false);
		} else if (dateField.attachEvent) {
			dateField.attachEvent("onclick", displayCalendar);
		}
	var dateCells = document.getElementsByTagName("td");
		if (dateCells[0].addEventListener) {
			for (var i = 0; i < dateCells.length; i++) {
				dateCells[i].addEventListener("click", selectDate, false);
			}
		} else if (dateCells[0].attachEvent) {
			for (var i = 0; i < dateCells.length; i++) {
				dateCells[i].attachEvent("onclick", selectDate);
			}
		}

var closeButton = document.getElementById("close");
	if (closeButton.addEventListener) {
		closeButton.addEventListener("click", hideCalendar, false);
	} else if (closeButton.attachEvent) {
		closeButton.attachEvent("onclick", hideCalendar);
	}

var prevLink = document.getElementById("prev");
var nextLink = document.getElementById("next");
if (prevLink.addEventListener) {
	prevLink.addEventListener("click", prevMo, false);
} else if (prevLink.attachEvent) {
	prevLink.attachEvent("onclick", prevMo);
}
if (nextLink.addEventListener) {
	nextLink.addEventListener("click", nextMo, false);
} else if (nextLink.attachEvent) {
	nextLink.attachEvent("onclick", nextMo);
}

var generateButton = document.getElementById("btn");
	if (generateButton.addEventListener) {
		generateButton.addEventListener("click", createTicket, false);
	} else if (nameButton.attachEvent) {
		generateButton.attachEvent("onclick", createTicket);
	}
}

if (window.addEventListener) {
	window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", createEventListeners);
}
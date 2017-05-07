function countdownTimer() {
var dateToday = new Date();
var dateCurrent = Date.UTC(dateToday.getFullYear(), dateToday.getMonth(), dateToday.getDate(), dateToday.getHours(), dateToday.getMinutes(), dateToday.getSeconds());
var dateFuture = Date.UTC(2017, 11, 21, 8, 27, 0);

//Months
var monthsUntil = Math.floor((dateFuture - dateCurrent)/(86400000 * 30));
document.getElementById("countdownText").innerHTML = monthsUntil + " month(s), ";

//Days
var fractionalMonth = ((dateFuture - dateCurrent) % (86400000 * 30));
var daysUntil = Math.floor(fractionalMonth / 86400000);
document.getElementById("countdownText").innerHTML += daysUntil + " day(s), ";

//Hours
var fractionalDay = (fractionalMonth % 86400000);
var hoursUntil = Math.floor(fractionalDay / 3600000);
document.getElementById("countdownText").innerHTML += hoursUntil + " hour(s), ";

//Minutes
var fractionalHour = (fractionalDay % 3600000);
var minutesUntil = Math.floor(fractionalHour / 60000);
document.getElementById("countdownText").innerHTML += minutesUntil + " minute(s), and ";

//Seconds
var fractionalMinute = fractionalHour % 60000;
var secondsUntil = Math.floor(fractionalMinute / 1000);
document.getElementById("countdownText").innerHTML += secondsUntil + " second(s).";

}

//runs funtions after page loads
function setUpPage() {
	countdownTimer();
}

//runs setup of functions when page finishes loading
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}
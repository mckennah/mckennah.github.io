











function setUpPage() {
	initHighlighting();
	initHighlightingOnLoad();
}
//runs setup of functions when page finishes loading
if (window.addEventListener) {
	window.addEventListener("load", setUpPage, false);
} else if (window.attachEvent) {
	window.attachEvent("onload", setUpPage);
}
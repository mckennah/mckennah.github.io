//to calculate the cost of a collar selected, along with any add-ons
	function calcTotal() {
	var orderTotal = 0;
	var orderTotalRounded = 0;
	//defining those as zero first
	var size1 = document.getElementById("size1"); //size S
	var size2 = document.getElementById("size2"); //size M
	var size3 = document.getElementById("size3"); //size L
	var leash = document.getElementById("leash"); //leash add on
	var gold = document.getElementById("gold"); //gold hardware add on
	//Cost of the items is put in below
		(size1.checked) ? (orderTotal += 18) : (orderTotal += 0); //cost of small size is added or not based on whether it is checkedd or not
		(size2.checked) ? (orderTotal += 24) : (orderTotal += 0); //cost of medium size is added or not based on whether it is checkedd or not
		(size3.checked) ? (orderTotal += 30) : (orderTotal += 0); //cost of large size is added or not based on whether it is checkedd or not
		(leash.checked) ? (orderTotal += 22) : (orderTotal += 0); //cost of leash is added or not based on whether it is checkedd or not
		(gold.checked) ? (orderTotal += 7) : (orderTotal += 0); //cost of gold hardware is added or not based on whether it is checkedd or not
	var tempeTaxRate = 0.081; //tempe's tax rate

	var orderTotal = orderTotal + (orderTotal * tempeTaxRate); //need to add in the tax to the total
//this is so I don't get the weird decimal issues. The example in the book would not show a 0 in the cents ex. 22.10 was 22.1
//to prove there was an issue with this try doing a large collar with gold hardware. I think that's the only instance
	var orderTotalRounded = (Math.round(orderTotal*(100))/(100)).toFixed(2);//turns it from decimal number to integer and back after rounding
	
	alert("Your custom order total is $" + orderTotalRounded + "!");//order total is rounded because only two decimals allowed
	}

document.getElementById("submit").
	addEventListener("click", calcTotal, false);


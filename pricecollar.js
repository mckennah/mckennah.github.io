//to calculate the cost of a collar selected, along with any add-ons
	function calcTotal() {
	var orderTotal = 0;
	var size1 = document.getElementById("size1"); //size S
	var size2 = document.getElementById("size2"); //size M
	var size3 = document.getElementById("size3"); //size L
	var leash = document.getElementById("leash"); 
	var gold = document.getElementById("gold");
		(size1.checked) ? (orderTotal += 18) : (orderTotal += 0);
		(size2.checked) ? (orderTotal += 24) : (orderTotal += 0);
		(size3.checked) ? (orderTotal += 30) : (orderTotal += 0);
		(leash.checked) ? (orderTotal += 22) : (orderTotal += 0);
		(gold.checked) ? (orderTotal += 7) : (orderTotal += 0);
	var tempeTaxRate = 0.081;
//need to add in the tax to the total
	var orderTotal = orderTotal + (orderTotal * tempeTaxRate); 
//this is so I don't get the weird decimal issues. The example in the book would not show a 0 in the cents ex. 22.10 was 22.1
	var orderTotalRounded = (Math.round(orderTotal*Math.pow(10,2))/Math.pow(10,2)).toFixed(2);
	
	alert("Your custom order total is $" + orderTotalRounded + " Thanks!"); //always nice to thank the customers
	}

document.getElementById("submit").
	addEventListener("click", calcTotal, false);


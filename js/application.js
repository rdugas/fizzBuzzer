$(document).ready(function(){
	alert("let's get buzzed");

	var valueEntered = prompt("Please enter a number: ");
	var numericValueEntered = +valueEntered;
	console.log(typeof valueEntered);
	console.log(typeof numericValueEntered);

	if ( isNaN(numericValueEntered) || (numericValueEntered % 1) != 0) {
		alert("Your value is non numeric or not a whole number, please enter a whole number.");
		window.location.reload(true); 
	}
	else
	{
		fizzbuzz(numericValueEntered);
s	} 
		

	function fizzbuzz(countToNumber) {

		for (var myNumber = 1; myNumber <= countToNumber; myNumber++) {

			if (dividedByEvenly(myNumber, 3) && dividedByEvenly(myNumber, 5)) {
				$("section").append(" FIZZ BUZZ , ");
			}
			else if (dividedByEvenly(myNumber, 3)){
				$("section").append(" fizz , ");
			}
			else if (dividedByEvenly(myNumber, 5)){
				$("section").append(" buzz , ");
			}
			else {
				$("section").append(myNumber + " , ");
			}
		}

		$("section").append("The End!");
	}	

	function dividedByEvenly(numerator, denominator){
		return (numerator % denominator == 0);
	}

});
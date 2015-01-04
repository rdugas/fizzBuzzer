$(document).ready(function(){
	alert("let's get buzzed");

	var numberEntered = +prompt("Please enter a number: ");

	console.log(typeof numberEntered);

	if (typeof numberEntered == "number") {
		alert("you entered: " + numberEntered + "it's a number")
	}
	else
	{
		alert("you did not enter a number");
	} 
		


	for (var myNumber = 1; myNumber <= 100; myNumber++) {

		if (dividedByEvenly(myNumber, 3) && dividedByEvenly(myNumber, 5)) {
			$("section").append("FIZZ BUZZ, ");
		}
		else if (dividedByEvenly(myNumber, 3)){
			$("section").append("fizz, ");
		}
		else if (myNumber == 100){
			$("section").append("buzz. THE END!!!");
		}
		else if (dividedByEvenly(myNumber, 5)){
			$("section").append("buzz, ");
		}
		else {
			$("section").append(myNumber + " ,");
		}
	};

	function dividedByEvenly(numerator, denominator){
		if (numerator % denominator == 0)
			{return true};
	}

});
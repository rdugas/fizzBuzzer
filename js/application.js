$(document).ready(function(){
	alert("let's get buzzed");

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
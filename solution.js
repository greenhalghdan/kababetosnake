function isEven(num){
	return num % 2 === 0;
}

function factorial(num){
	//define a resault variable
	var result = 1;
	//calculate factorial and store value in result
	for(var i = 2; i <= num; i++){
		result *= i;
	}
	//return the resault variable 
	return result;
}

//factorial(4) 4 x 3 x 2 x 1


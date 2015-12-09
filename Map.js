function doubleAll(numbers){
	Array.prototype.map(numbers)*2;
}

function doubleAll(numbers){
	return numbers.map(function(n){
		return n * 2;
	});
}

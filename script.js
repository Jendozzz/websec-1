function ButtonClick() {
	console.log("1");
	let number1 = document.getElementById("input1").value;
	let number2 = document.getElementById("input2").value;

	let num1 = parseFloat(number1);
	let num2 = parseFloat(number2);

	let selectType = document.getElementById("select").value;
	let result = 0;

	if (!isNaN(num1) && !isNaN(num2)) {
		if (selectType === "plus") {
			result = num1 + num2;
		}
		if (selectType === "minus") {
			result = num1 - num2;
		}
		if (selectType === "mul") {
			result = num1 * num2;
		}
		if (selectType === "div") {
			if (Math.abs(num2) > Number.EPSILON) {
				result = num1 / num2;
			}
			else result = "Cannot div by 0!";
		}
	}
	else {
		result = "Error! You didn't enter a number";
	}
	document.getElementById("results").value = result;
}
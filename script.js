function ButtonClick() {
	let number1 = document.getElementById("input1").value;
	let number2 = document.getElementById("input2").value;

	let num1 = parseFloat(number1);
	let num2 = parseFloat(number2);

	let selectType = document.getElementById("select").value;

	if (!isNaN(num1) && !isNaN(num2)) {
		if (selectType == "plus") {
			document.getElementById("results").value = num1 + num2;
		}
		if (selectType == "minus") {
			document.getElementById("results").value = num1 - num2;
		}
		if (selectType == "mul") {
			document.getElementById("results").value = num1 * num2;
		}
		if (selectType == "div") {
			if (num2 != 0) {
				document.getElementById("results").value = num1 / num2;
			}
			else document.getElementById("results").value = "Cannot div by 0!";
		}
	}
	else {
		document.getElementById("results").value = "Error! You didn't enter a number";
	}
	console.log(num1);
	console.log(num2);
}
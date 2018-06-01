var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

function setGradient () {
	body.style.background = 
		"linear-gradient(to right, " + 
		color1.value + ", " + 
		color2.value + ")";

		css.textContent = body.style.background + ";";
}

function genRndColor () {
	console.log("New color");
	// generate random number between 0 and 1 and convert it to hexidecimal
	var rndValue = Math.random().toString(16);
	console.log(rndValue);
	// add zeros to right in case random number has less than 6 digits after decimal
	var addZeros = rndValue + "000000";
	console.log(addZeros);
	// extract the first 6 digits after the decimal point
	var sixDigit = addZeros.slice(2,8);
	console.log(sixDigit);
	var hexString = "#" + sixDigit;
	console.log(hexString);
	return hexString;
}

function setRndColor () {
	color1.value = genRndColor();
	color2.value = genRndColor();
	setGradient();
}

color1.addEventListener("input", setGradient)
color2.addEventListener("input", setGradient)
random.addEventListener("click", setRndColor);
setGradient();

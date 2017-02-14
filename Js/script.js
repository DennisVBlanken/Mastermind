
//all vars

var color = "";
var Guess1 = "";
var Guess2 = "";
var Guess3 = "";
var Guess4 = "";
var status = 0;
var Status1 = document.getElementById("Status1");
var Status2 = document.getElementById("Status2");
var Status3 = document.getElementById("Status3");
var Status4 = document.getElementById("Status4");
var myArray = ['red', 'green', 'blue', 'yellow', 'grey', 'white'];
var theCode = [myArray[Math.floor(Math.random() * myArray.length)], myArray[Math.floor(Math.random() * myArray.length)], myArray[Math.floor(Math.random() * myArray.length)], myArray[Math.floor(Math.random() * myArray.length)]];
var Found = 0;
console.log(theCode);

//all functions

function setColor(x) {
	color = x
}

function setcolor1(ele) {
    ele.style.background = color;
    Guess1 = color;
}

function setcolor2(ele) {
    ele.style.background = color;
    Guess2 = color;
}

function setcolor3(ele) {
    ele.style.background = color;
    Guess3 = color;
}

function setcolor4(ele) {
    ele.style.background = color;
    Guess4 = color;
}

function CheckAnswer() {
	// put the Guesses in an array
	var Guesses = [Guess1, Guess2, Guess3, Guess4];
	// check for how many of the guesses are in the code
	console.log(found1, found2, found3, found4);
	if (theCode.includes(Guesses[0])) { Found = Number(Found) + 1}
	if (theCode.includes(Guesses[1])) { Found = Number(Found) + 1}
	if (theCode.includes(Guesses[2])) { Found = Number(Found) + 1}
	if (theCode.includes(Guesses[3])) { Found = Number(Found) + 1}
	console.log(Found)
	// make the small circles white if there are any
	if (Found === 1) {
	Status2.style.background = "white";
	}
	if (Found === 2) {
	Status2.style.background = "white";
	Status1.style.background = "white";
	}
	if (Found === 3) {
	Status2.style.background = "white";
	Status1.style.background = "white";
	Status4.style.background = "white";
	}
	if (Found === 4) {
	Status2.style.background = "white";
	Status1.style.background = "white";
	Status4.style.background = "white";
	Status3.style.background = "white";
	}
	// check for how many guesses are in the correct spot
	if (Guesses[0] === theCode[0]) {
		console.log("Guess1 is correct");
		status = Number(status) + 1;
	}
	if (Guesses[1] === theCode[1]) {
		console.log("Guess2 is correct");
		status = Number(status) + 1;
	}
	if (Guesses[2] === theCode[2]) {
		console.log("Guess3 is correct");
		status = Number(status) + 1;
	}
	if (Guesses[3] === theCode[3]) {
		console.log("Guess4 is correct");
		status = Number(status) + 1;
	}
	if (Guesses[0,1,2,3] === theCode[0,1,2,3]) {
		console.log("You Win!!");
	}
	// make the small circles red if there are any correct
	if (status === "1") {
		Status2.style.background = "red";
	}
	if (status === "2") {
		Status1.style.background = "red";
		Status2.style.background = "red";
	}
	if (status === "3") {
		Status1.style.background = "red";
		Status2.style.background = "red";
		Status4.style.background = "red";
	}
	if (status === "4") {
		Status1.style.background = "red";
		Status2.style.background = "red";
		Status3.style.background = "red";
		Status4.style.background = "red";
	}

}
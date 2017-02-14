
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
	var Guesses = [Guess1, Guess2, Guess3, Guess4];
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
	console.log(status);
	if (status === "1") {
		console.log(Status1)
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
	var found1 = theCode.includes(Guesses[0]);
	var found2 = theCode.includes(Guesses[1]);
	var found3 = theCode.includes(Guesses[2]);
	var found4 = theCode.includes(Guesses[3]);
	console.log(found1, found2, found3, found4);
}
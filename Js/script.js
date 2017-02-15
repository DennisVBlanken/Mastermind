
//all vars

var color = "";
var Guess1 = "";
var Guess2 = "";
var Guess3 = "";
var Guess4 = "";
var guesses = [];
var row = 1;
var status = 0;
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

function showAnswer() {

}

function CheckAnswer() {
	if (guesses[0] == theCode[0] & guesses[1] == theCode[1] & guesses[2] == theCode[2] & guesses[3] == theCode[3]) {
		showAnswer();
	} else {
		CheckPos1();
		if (row <=9) {
			document.getElementById("Row" + row + "Pos1").click = "";
			document.getElementById("Row" + row + "Pos2").click = "";
			document.getElementById("Row" + row + "Pos3").click = "";
			document.getElementById("Row" + row + "Pos4").click = "";
			row = row + 1;
			document.getElementById("Row" + row + "Pos1").click = function() { setcolor1(this)};
			document.getElementById("Row" + row + "Pos2").click = function() { setcolor2(this)};
			document.getElementById("Row" + row + "Pos3").click = function() { setcolor3(this)};
			document.getElementById("Row" + row + "Pos4").click = function() { setcolor4(this)};
		} else {
			showAnswer(); // <===== not done
		}
	}
}

function CheckPos1() {
	if (guesses[0] == theCode[0]) {
		CheckPos2();
		document.getElementById("Row" + row + "Status1").style.background = "red";
	} else {
		if (guesses[0] == theCode[1] || guesses[0] == theCode[2] || guesses[0] == theCode[3]) {
			document.getElementById("Row" + row + "Status1").style.background = "White";
		}
		CheckPos2();
	}
}

function CheckPos2() {
	if (guesses[1] == theCode[1]) {
		CheckPos3();
		document.getElementById("Row" + row + "Status2").style.background = "red";
	} else {
		if (guesses[1] == theCode[0] || guesses[1] == theCode[2] || guesses[1] == theCode[3]) {
			document.getElementById("Row" + row + "Status2").style.background = "White";
		}
		CheckPos3();
	}
}

function CheckPos3() {
	if (guesses[2] == theCode[2]) {
		CheckPos4();
		document.getElementById("Row" + row + "Status3").style.background = "red";
	} else {
		if (guesses[2] == theCode[0] || guesses[2] == theCode[1] || guesses[2] == theCode[3]) {
			document.getElementById("Row" + row + "Status3").style.background = "White";
		}
		CheckPos4();
	}
}

function CheckPos4() {
	if (guesses[3] == theCode[3]) {
		document.getElementById("Row" + row + "Status4").style.background = "red";
	} else {
		if (guesses[3] == theCode[0] || guesses[3] == theCode[1] || guesses[3] == theCode[2]) {
			document.getElementById("Row" + row + "Status4").style.background = "White";
		}
	}
}
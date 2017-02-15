
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
	alert("Congratulations, You Win!");
	for (var i = 0; i<=3; i++) {
		var colour = theCode[i];
		switch(colour) {
			case "red":
				document.getElementById('answer' + i).style.background = 'red';
				break;
			case "green":
				document.getElementById('answer' + i).style.background= 'green';
				break;
			case "blue":
				document.getElementById('answer' + i).style.background= 'blue';
				break;
			case "yellow":
				document.getElementById('answer' + i).style.background= 'yellow';
				break;
			case "grey":
				document.getElementById('answer' + i).style.background = 'grey';
				break;
			case "white":
				document.getElementById('answer' + i).style.background = 'white';
				break;
		}
	}
}

function CheckAnswer() {
	guesses = [Guess1, Guess2, Guess3, Guess4];
	if (guesses[0] == theCode[0] & guesses[1] == theCode[1] & guesses[2] == theCode[2] & guesses[3] == theCode[3]) {
		showAnswer();
	} else {
		CheckPos1();
		if (row <=9) {
			console.log(row)
			document.getElementById("Row" + row + "Pos1").onclick = "";
			document.getElementById("Row" + row + "Pos2").onclick = "";
			document.getElementById("Row" + row + "Pos3").onclick = "";
			document.getElementById("Row" + row + "Pos4").onclick = "";
			row++;
			console.log(row)
			document.getElementById("Row" + row + "Pos1").onclick = function() { setcolor1(this)};
			document.getElementById("Row" + row + "Pos2").onclick = function() { setcolor2(this)};
			document.getElementById("Row" + row + "Pos3").onclick = function() { setcolor3(this)};
			document.getElementById("Row" + row + "Pos4").onclick = function() { setcolor4(this)};
			console.log(document.getElementById("Row" + row + "Pos1"))
		} else {
			showAnswer(); // <===== not done
		}
	}
}

function CheckPos1() {
	if (guesses[0] == theCode[0]) {
		CheckPos2();
		console.log("test")
		document.getElementById("Row" + row + "Status2").style.background = "red";
	} else {
		if (guesses[0] == theCode[1] || guesses[0] == theCode[2] || guesses[0] == theCode[3]) {
			document.getElementById("Row" + row + "Status2").style.background = "White";
		}
		CheckPos2();
		console.log("test1")
	}
}

function CheckPos2() {
	if (guesses[1] == theCode[1]) {
		CheckPos3();
		document.getElementById("Row" + row + "Status1").style.background = "red";
	} else {
		if (guesses[1] == theCode[0] || guesses[1] == theCode[2] || guesses[1] == theCode[3]) {
			document.getElementById("Row" + row + "Status1").style.background = "White";
		}
		CheckPos3();
	}
}

function CheckPos3() {
	if (guesses[2] == theCode[2]) {
		CheckPos4();
		document.getElementById("Row" + row + "Status4").style.background = "red";
	} else {
		if (guesses[2] == theCode[0] || guesses[2] == theCode[1] || guesses[2] == theCode[3]) {
			document.getElementById("Row" + row + "Status4").style.background = "White";
		}
		CheckPos4();
	}
}

function CheckPos4() {
	if (guesses[3] == theCode[3]) {
		document.getElementById("Row" + row + "Status3").style.background = "red";
	} else {
		if (guesses[3] == theCode[0] || guesses[3] == theCode[1] || guesses[3] == theCode[2]) {
			document.getElementById("Row" + row + "Status3").style.background = "White";
		}
	}
}
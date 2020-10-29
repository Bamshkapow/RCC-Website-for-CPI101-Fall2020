/**
 * welcome
 */
var name = window.prompt("please enter you name");
while (name == null || name == undefined || name == "" || name.length > 15) {
	alert("name can't be empty, and the length less 15");
	name = window.prompt("please enter you name");
}
function set_welcome() {
	document.getElementById("welcome").innerHTML = name + ",Welcome to play Paper Scissors Rock game!";
}

/**
 * change select
 */
function change_select(your_select) {
	document.getElementById("your_select").innerHTML = your_select;
}


/**
 * get computer
 */
var total_time = 0;
var paper_time = 0;
var scissors_time = 0;
var rock_time = 0;
function play() {
	document.getElementById("computer_gen1").innerHTML = "";
	document.getElementById("computer_gen2").innerHTML = "";
	
	var computer_gen = new Array("Paper", "Scissors", "Rock");
	var random_id = Math.floor(Math.random() * 3);
	document.getElementById("computer_gen1").innerHTML = computer_gen[random_id];
	document.getElementById("computer_gen2").innerHTML = computer_gen[random_id];
	
	var your_select = document.getElementById("your_select").innerHTML;
	if (your_select == null || your_select == undefined || your_select == "") {
		alert("pleace select your answer");
		document.getElementById("computer_gen1").innerHTML = "";
		document.getElementById("computer_gen2").innerHTML = "";
		return false;
	}
	
	total_time += 1;
	if (your_select == "Scissors") {
		scissors_time += 1
	}
	if (your_select == "Paper") {
		paper_time += 1
	}
	if (your_select == "Rock") {
		rock_time += 1
	}
	
	document.getElementById('total_time').innerHTML = total_time;
	document.getElementById('scissors_time').innerHTML = scissors_time;
	document.getElementById('paper_time').innerHTML = paper_time;
	document.getElementById('rock_time').innerHTML = rock_time;
	
	if (your_select == "Paper") {
		if (computer_gen[random_id] == "Scissors") {
			alert("You Lose");
		} else if (computer_gen[random_id] == "Paper") {
			alert("Draw");
		} else {
			alert("You Win");
		}
	}
	if (your_select == "Scissors") {
		if (computer_gen[random_id] == "Scissors") {
			alert("Draw");
		} else if (computer_gen[random_id] == "Paper") {
			alert("You Win");
		} else {
			alert("You Lose");
		}
	}
	if (your_select == "Rock") {
		if (computer_gen[random_id] == "Scissors") {
			alert("You Win");
		} else if (computer_gen[random_id] == "Paper") {
			alert("You Lose");
		} else {
			alert("Draw");
		}
	}
}
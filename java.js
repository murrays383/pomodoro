let object = {
	work: "yes",
	rest: "no",
	started: "no",
};

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let background = document.querySelector("body");
let header = document.querySelector("h1");
let buttonContainer = document.querySelector("#button-container");

start.addEventListener("click", countdownStart);

stop.addEventListener("click", stopCountdown);

function countdown() {
	minute = document.querySelector("#minute");
	minuteNumber = parseFloat(minute.textContent);
	console.log(minuteNumber);

	let seconds = document.querySelector("#seconds");
	let secondsNumber = parseFloat(seconds.textContent);

	if (secondsNumber === 0 && minuteNumber !== 0) {
		if (minuteNumber <= 10) {
			secondsNumber = 59;
			seconds.textContent = secondsNumber;
			minuteNumber -= 1;
			minute.textContent = "0" + minuteNumber;
		} else {
			secondsNumber = 59;
			seconds.textContent = secondsNumber;
			minuteNumber -= 1;
			minute.textContent = minuteNumber;
		}
	} else if (secondsNumber <= 10 && secondsNumber > 0) {
		secondsNumber -= 1;
		seconds.textContent = "0" + secondsNumber;
	} else if (minuteNumber === 0 && secondsNumber === 0) {
		if (object.work === "yes") {
			stopCountdown();
			minute.textContent = "05";
			seconds.textContent = "00";
			object.work = "no";
			object.rest = "yes";
			object.started = "no";
		} else {
			stopCountdown();
			minute.textContent = "25";
			seconds.textContent = "00";
			object.work = "yes";
			object.rest = "no";
			object.started = "no";
		}
	} else {
		secondsNumber -= 1;
		seconds.textContent = secondsNumber;
	}
}

function countdownStart() {
	resetBtn();

	if (object.started === "no" && object.work === "yes") {
		myInterval = setInterval(countdown, 1000);
		object.started = "yes";
		background.setAttribute("style", "background-color:#BFFF00");
		header.textContent = "work work work";
	} else if (object.started === "no" && object.work === "no") {
		myInterval = setInterval(countdown, 1000);
		object.started = "yes";
		background.setAttribute(
			"style",
			"background-image:url('https://www.freevector.com/uploads/vector/preview/19574/CartoonClouds_01_Preview.jpg')"
		);
		header.textContent = "take a break";
	}
}

function stopCountdown() {
	if (object.started === "yes") {
		clearInterval(myInterval);
		object.started = "no";
		background.setAttribute("style", "background-color:white");
		header.textContent = "pomodoro timer";
	}
}
function resetBtn() {
	if (document.getElementById("reset-button") === null) {
		let resetButton = document.createElement("button");
		buttonContainer.appendChild(resetButton);
		resetButton.setAttribute("id", "reset-button");
		resetButton.textContent = "Reset?";
		let resetB = document.querySelector("#reset-button");
		resetB.addEventListener("click", reset);
	}
}

function reset() {
	clearInterval(myInterval);
	minute.textContent = "25";
	seconds.textContent = "00";

	background.setAttribute("style", "background-color:white");
	header.textContent = "pomodoro timer";

	(object.work = "yes"), (object.rest = "no"), (object.started = "no");
	let remove = document.getElementById("reset-button");
	remove.parentNode.removeChild(remove);
}

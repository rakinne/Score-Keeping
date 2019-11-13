var playerOne = document.getElementById("player_one");
var playerTwo = document.getElementById("player_two");

var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");

var reset = document.getElementById("reset");

var p1Score = 0;
var p2Score = 0;

var gameOver = false;

var winningScore = 5;

var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");

playerOne.addEventListener("click", function() {
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore) {
			p1Display.classList.add("winner");
			gameOver = true;
		}

		p1Display.textContent = p1Score;
	}
});

playerTwo.addEventListener("click", function() {
	if(!gameOver) {
		p2Score++;
	}
	if(p2Score === winningScore) {
		p2Display.classList.add("winner");
		gameOver = true;
	}

	p2Display.textContent = p2Score
})

reset.addEventListener("click", function() {
	gameOver = false;
	p1Score = 0;
	p1Display.textContent = p1Score;
	p1Display.classList.remove("winner");
	p2Score = 0;
	p2Display.textContent = p2Score;
	p2Display.classList.remove("winner");
})

numInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = numInput.value;
	winningScore = Number(numInput.value);
})
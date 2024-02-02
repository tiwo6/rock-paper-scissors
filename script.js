function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length)
    return choices[random];
}

let playerChoices = document.querySelector(".playerSelection");
let newGame = document.querySelector("#newGame");
let currentGame = document.querySelector("#currentGame");
let playerScoreboard = document.querySelector("#playerScoreboard");
let computerScoreboard = document.querySelector("#computerScoreboard");
let winner = document.querySelector("#winner");
let playerScore = null;
let computerScore = null;

playerChoices.addEventListener('click', function(e) {
    let game = playRound(e.target.value, getComputerChoice());
    currentGame.textContent = game;
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;
    checkScore();
});

newGame.addEventListener('click', function(e) {
    location.reload();
})

function checkScore() {
    if (playerScore == 5) {
        winner.textContent = "Player";
        document.querySelectorAll('.playerSelection button').forEach(elem => {
            elem.disabled = true;
        });
    } else if (computerScore == 5) {
        winner.textContent = "Computer";
        document.querySelectorAll('.playerSelection button').forEach(elem => {
            elem.disabled = true;
          });
    }
}

function playRound(playerSelection, computerSelection) {
    // Check for valid input from user
    if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
        return "Your choice is not allowed";
    }

    // Calculate match!
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        computerScore += 1;
        return "You Lose! Paper beats Rock!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        playerScore += 1;
        return "You Win! Paper beats Rock!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        playerScore += 1;
        return "You Win! Rock beats Scissors!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        computerScore += 1;
        return "You Lose! Rock beats Scissors!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        playerScore += 1;
        return "You Win! Scissors beats Paper!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        computerScore += 1;
        return "You Lose! Scissors beats Paper!";
    }
    else {
        return "Tie";
    }
}
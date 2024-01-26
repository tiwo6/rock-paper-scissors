function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * choices.length)
    return choices[random];
}

function getPlayerChoice() {
    const player_coice = prompt("Choose between Rock, Paper or Scissors")
    return player_coice[0].toUpperCase() + player_coice.slice(1).toLowerCase();
}

function playRound(playerSelection, computerSelection) {
    // Check for valid input from user
    if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors") {
        return "Your choice is not allowed";
    }

    // Calculate match!
    if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You Lose! Paper beats Rock!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You Win! Paper beats Rock!";
    }
    else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You Lose! Rock beats Scissors!";
    }
    else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper!";
    }
    else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You Lose! Scissors beats Paper!";
    }
    else {
        return "Tie";
    }
    

}

let rounds = 5;

function game() {
    for (let i = 1; i <= rounds; i++) {
        const player_choice = getPlayerChoice();
        const computer_choice = getComputerChoice();
        result = playRound(player_choice, computer_choice);
        if (result != "Tie") {
            console.log("Round " + i.toString() + ":" + result);
        }
        else {
            i--;
            console.log("Tie! Play again!")
        }
    }
}

game();


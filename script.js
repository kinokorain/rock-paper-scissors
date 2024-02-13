function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function GetComputerChoice() {
    let result = getRandomInt(3);
    if (result === 0) return "Rock";
    if (result === 1) return "Paper";
    if (result === 2) return "Scissors";
}

function PlayRound(playerSelection, computerSelection) {
    if ((playerSelection === "ROCK") && (computerSelection === "Rock")) {
        return "TRR";
    }
    if ((playerSelection === "PAPER") && (computerSelection === "Paper")) {
        return "TPP";
    }
    if ((playerSelection === "SCISSORS") && (computerSelection === "Scissors")) {
        return "TSS";
    }

    if ((playerSelection === "ROCK") && (computerSelection === "Scissors")) {
        return "WRS";
    }
    if ((playerSelection === "PAPER") && (computerSelection === "Rock")) {
        return "WPR";
    }
    if ((playerSelection === "SCISSORS") && (computerSelection === "Paper")) {
        return "WSP";
    }

    if ((playerSelection === "ROCK") && (computerSelection === "Paper")) {
        return "LRP";
    }
    if ((playerSelection === "PAPER") && (computerSelection === "Scissors")) {
        return "LPS";
    }
    if ((playerSelection === "SCISSORS") && (computerSelection === "Rock")) {
        return "LSR";
    }
    return "Wrong value"
}

//(playerChoice.toUpperCase() !== "ROCK") || (playerChoice.toUpperCase() !== "PAPER") || (playerChoice.toUpperCase() !== "SCISSORS")

function PlayGame() {
    let playerChoice, computerChoice, roundResult;
    let playerScore = 0, computerScore = 0;

    while (playerScore + computerScore < 5) {
        let inputFlag = 1;
        while (inputFlag) {
            playerChoice = prompt("Rock, Paper or Scissors?");
            if (playerChoice === null) {
                console.log("Cancelled the game.");
                return "C";
            }
            if ((playerChoice.toUpperCase() === "ROCK") || (playerChoice.toUpperCase() === "PAPER") || (playerChoice.toUpperCase() === "SCISSORS")) {
                inputFlag = 0;
            }
        }
        computerChoice = GetComputerChoice();
        console.log("You chose " + playerChoice);
        console.log("Computer chose " + computerChoice);
        roundResult = PlayRound(playerChoice.toUpperCase(), computerChoice);
        switch (roundResult) {
            case "TRR":
                {
                    console.log("Tie! Both parties chose Rock.");
                    break;
                }
            case "TPP":
                {
                    console.log("Tie! Both parties chose Paper");
                    break;
                }
            case "TSS":
                {
                    console.log("Tie! Both parties chose Scissors");
                    break;
                }
            case "WRS":
                {
                    console.log("You win! Rock beats Scissors");
                    playerScore++;
                    console.log("Current score: " + playerScore + " : " + computerScore);
                    break;
                }
            case "WPR":
                {
                    console.log("You win! Paper beats Rock");
                    playerScore++;
                    console.log("Current score: " + playerScore + " : " + computerScore);
                    break;
                }
            case "WSP":
                {
                    console.log("You win! Scissors beats Paper");
                    playerScore++;
                    console.log("Current score: " + playerScore + " : " + computerScore);
                    break;
                }
            case "LRP":
                {
                    console.log("You lost. Paper beats Rock");
                    computerScore++;
                    console.log("Current score: " + playerScore + " : " + computerScore);
                    break;
                }
            case "LPS":
                {
                    console.log("You lost. Scissors beats Paper");
                    computerScore++;
                    console.log("Current score: " + playerScore + " : " + computerScore);
                    break;
                }
            case "LSR":
                {
                    console.log("You lost. Rock beats Scissors");
                    computerScore++;
                    console.log("Current score: " + playerScore + " : " + computerScore);
                    break;
                }
            default:
                {
                    console.log("Error. Something went wrong while playing the roud.")
                    break;
                }
        }
    }
    if (computerScore < playerScore) {
        console.log("Congratulations! :^) You won!!");
        return "W";
    }
    else {
        console.log("Sadge :^( You lost the game...");
        return "L";
    }
}

PlayGame();
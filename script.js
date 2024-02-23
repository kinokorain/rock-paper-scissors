function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function GetComputerChoice() {
    let result = getRandomInt(3);
    if (result === 0) return "Rock";
    if (result === 1) return "Paper";
    if (result === 2) return "Scissors";
}

var playerScore = 0, computerScore = 0;

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

let showRoundResult = document.querySelector("#round-result");
let showPlayerScore = document.querySelector("#player-score");
let showComputerScore = document.querySelector("#computer-score");
let showGameResult = document.querySelector("#game-result");
function handleRound(roundResult) {
    switch (roundResult) {
        case "TRR":
            {
                showRoundResult.textContent = "Tie! Both parties chose Rock.";
                showPlayerScore.textContent = "Your score: " + playerScore;
                showComputerScore.textContent = "Opponent's score: " + computerScore;
                break;
            }
        case "TPP":
            {
                showRoundResult.textContent = "Tie! Both parties chose Paper";
                showPlayerScore.textContent = "Your score: " + playerScore;
                showComputerScore.textContent = "Opponent's score: " + computerScore;
                break;
            }
        case "TSS":
            {
                showRoundResult.textContent = "Tie! Both parties chose Scissors";
                showPlayerScore.textContent = "Your score: " + playerScore;
                showComputerScore.textContent = "Opponent's score: " + computerScore;
                break;
            }
        case "WRS":
            {
                showRoundResult.textContent = "You win! Rock beats Scissors";
                playerScore++;
                showPlayerScore.textContent = "Your score: " + playerScore;
                showComputerScore.textContent = "Opponent's score: " + computerScore;
                break;
            }
        case "WPR":
            {
                showRoundResult.textContent = "You win! Paper beats Rock";
                playerScore++;
                showPlayerScore.textContent = "Your score: " + playerScore;
                showComputerScore.textContent = "Opponent's score: " + computerScore;
                break;
            }
        case "WSP":
            {
                showRoundResult.textContent = "You win! Scissors beats Paper";
                playerScore++;
                showPlayerScore.textContent = "Your score: " + playerScore;
                showComputerScore.textContent = "Opponent's score: " + computerScore;
                break;
            }
        case "LRP":
            {
                showRoundResult.textContent = "You lost. Paper beats Rock";
                computerScore++;
                showPlayerScore.textContent = "Your score: " + playerScore;
                showComputerScore.textContent = "Opponent's score: " + computerScore;
                break;
            }
        case "LPS":
            {
                showRoundResult.textContent = "You lost. Scissors beats Paper";
                computerScore++;
                showPlayerScore.textContent = "Your score: " + playerScore;
                showComputerScore.textContent = "Opponent's score: " + computerScore;
                break;
            }
        case "LSR":
            {
                showRoundResult.textContent = "You lost. Rock beats Scissors";
                computerScore++;
                showPlayerScore.textContent = "Your score: " + playerScore;
                showComputerScore.textContent = "Opponent's score: " + computerScore;
                break;
            }
        default:
            {
                showRoundResult.textContent = "Error. Something went wrong while playing the roud.";
                break;
            }
    }
    if (playerScore + computerScore >= 5) {
        if (playerScore > computerScore) {
            showGameResult.textContent = "Congratulations! You've won :^)";
            showPlayerScore.textContent = "Your score: " + playerScore;
            showComputerScore.textContent = "Opponent's score: " + computerScore;
        }

        if (playerScore < computerScore) {
            showGameResult.textContent = "Sadge! You've lost :^(";
            showPlayerScore.textContent = "Your score: " + playerScore;
            showComputerScore.textContent = "Opponent's score: " + computerScore;
        }
        showRoundResult.textContent = "";
        showPlayerChoice.textContent = "You chose: "
        showComputerChoice.textContent = "Opponent chose: "
        playerScore = 0;
        computerScore = 0;
    }
}

let rockButton = document.querySelector("#Rock-button");
let paperButton = document.querySelector("#Paper-button");
let scissorsButton = document.querySelector("#Scissors-button");
let roundResult;
let showPlayerChoice = document.querySelector("#your-choice");
let showComputerChoice = document.querySelector("#opponent-choice");

rockButton.addEventListener("click", () => {
    let currentComputerChoice = GetComputerChoice()
    showPlayerChoice.textContent = "You chose: Rock"
    showComputerChoice.textContent = "Opponent chose: " + currentComputerChoice;
    roundResult = PlayRound("ROCK", currentComputerChoice);
    handleRound(roundResult);
});


paperButton.addEventListener("click", () => {
    let currentComputerChoice = GetComputerChoice()
    showPlayerChoice.textContent = "You chose: Paper"
    showComputerChoice.textContent = "Opponent chose: " + currentComputerChoice;
    roundResult = PlayRound("PAPER", currentComputerChoice);
    handleRound(roundResult);
});

scissorsButton.addEventListener("click", () => {
    let currentComputerChoice = GetComputerChoice()
    showPlayerChoice.textContent = "You chose: Scissros"
    showComputerChoice.textContent = "Opponent chose: " + currentComputerChoice;
    roundResult = PlayRound("SCISSORS", currentComputerChoice);
    handleRound(roundResult);
});


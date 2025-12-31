
// Getting the computer choice function
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

function getHumanChoice() {
    return prompt("Enter rock, paper, or scissors:");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("It's a tie")
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`)
    } else {
        computerScore++;
        console.log(`You lose. ${computerChoice} beats ${humanChoice}.`)
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`--- Round ${i + 1} ---`);

        const humanChoice = getHumanChoice();
        if (humanChoice === null) {
            console.log("Game cancelled.");
            return; // stops the whole game cleanly
        }

        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);

        console.log(`Score -> You: ${humanScore} | Computer: ${computerScore}`);
    }

    console.log("------- GAME OVER -------");
    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore === computerScore) {
        console.log("Draw!");
    } else {
        console.log("Computer wins the game!");
    }
}

    playGame();



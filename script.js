
// Getting the computer choice function
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);

    return choices[randomIndex];
}

let humanScore = 0;
let computerScore = 0;

const resultsDiv = document.querySelector("#results");
const scoreDiv = document.querySelector("#score");
const buttons = document.querySelectorAll("button")

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
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

    updateScore();
    checkWinner();
}

function updateScore(){
    scoreDiv.textContent = `Score -> You :${humanScore} | Computer: ${computerScore}`
}

function checkWinner(){
    if(humanScore === 5 || computerScore === 5){
        if(humanScore > computerScore){
            resultsDiv.textContent = "You win the game!";
        } else{
            resultsDiv.textContent = "Computer wins the game."
        }
        buttons.forEach(button => button.disabled = true);
    }
}

buttons.forEach(button =>{
    button.addEventListener('click', () =>{
        playRound(button.dataset.choice);
    });
});





// this function makes the computer choose a random option from choices
// anonymous function allows the choice to instantiate the computer's move
// let computerPlay = () => {
//     return choices[Math.floor(Math.random()*choices.length)];
// };

// function game() {

//     let playerScore = 0;
//     let computerScore = 0;
//     while (true) {
//         let playerSelection = prompt("Enter your choice");
//         computerSelection = computerPlay();
//         let roundResult = playRound(playerSelection, computerSelection);
//         if (playerSelection == computerSelection) {
//             console.log("Tie. Try again");
//         } else if (roundResult == true) {
//             playerScore++;
//             console.log(`${capitalize(playerSelection)} beats ${capitalize(computerSelection)}`);
//         } else {
//             computerScore++;
//             console.log(`${capitalize(playerSelection)} is beaten by ${capitalize(computerSelection)}`);
//         }
//         console.log(`Current score: ${playerScore} - ${computerScore}`)
//         if (playerScore == 5 || computerScore == 5) {
//             break;
//         }
//     };

//     if (playerScore > computerScore) {
//         console.log("CONGRATULATIONS! You win");
//     } else {
//         console.log("Sorry. You lost.");
//     }
// }

let choices = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const buttons = [rockBtn, paperBtn, scissorsBtn];
const gameStatus = document.querySelector('.log');

const playerScore = document.querySelector('.player');
const pcScore = document.querySelector('.computer');

let playerChoice;
let computerChoice;
let playing = true;

let computerPlay = () => {
    return choices[Math.floor(Math.random()*choices.length)];
};

const capitalize = (string) => {
    return string.at(0).toUpperCase() + string.substring(1);
}

const playRound = (playerSelection, computerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return false;
    } else if (computerSelection == "rock") {
        if (playerSelection == "paper") {
            return true;
        } else if (playerSelection == "scissors") {
            return false;
        }
    } else if (computerSelection == "paper") {
        if (playerSelection == "rock") {
            return false;
        } else if (playerSelection == "scissors") {
            return true;
        } 
    } else if (computerSelection == "scissors") {
        if (playerSelection == "rock") {
            return true;
        } else if (playerSelection == "paper") {
            return false;
        }
    } else {
        return false;
    }
};

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        playerChoice = e.target.innerText;
        computerChoice = computerPlay();
        if (playing) {
            if (playerScore.textContent == 5 || pcScore.textContent == 5) {
                gameStatus.textContent = `${(playerScore.textContent == 5) ? 'player' : 'computer'} wins!`
                playing = false;
            } else if (playRound(playerChoice, computerChoice) == true) {
                gameStatus.textContent = `${playerChoice} beats ${capitalize(computerChoice)}`;
                playerScore.textContent = Number(playerScore.textContent) + 1;
            } else {
                gameStatus.textContent = `${playerChoice} is beaten by ${capitalize(computerChoice)}`;
                pcScore.textContent = Number(pcScore.textContent) + 1;
            }
        }
    })
})

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
    button.addEventListener('click', () => {
        playerChoice = button.innerText;
        computerChoice = computerPlay();
        if (playing) {
            if (capitalize(playerChoice) == capitalize(computerChoice)) {
                gameStatus.textContent = "Tie!";
            } else if (playRound(playerChoice, computerChoice) == true) {
                gameStatus.textContent = `${playerChoice} beats ${capitalize(computerChoice)}`;
                playerScore.textContent = Number(playerScore.textContent) + 1;
                if (playerScore.textContent == 5 || pcScore.textContent == 5) {
                    gameStatus.textContent = `${(playerScore.textContent == 5) ? 'Player' : 'Computer'} wins!`
                    playing = false;
                }
            } else {
                gameStatus.textContent = `${playerChoice} is beaten by ${capitalize(computerChoice)}`;
                pcScore.textContent = Number(pcScore.textContent) + 1;
                if (playerScore.textContent == 5 || pcScore.textContent == 5) {
                    gameStatus.textContent = `${(playerScore.textContent == 5) ? 'Player' : 'Computer'} wins!`
                    playing = false;
                }
            }
        }
    })
})

const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

// Function to initialize score displays
function initializeScoreDisplay() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}
function playBackgroundMusic() {
    document.getElementById("backgroundMusic").play();
}

// Call the initializeScoreDisplay function when the page loads
window.onload = initializeScoreDisplay;

function playGame(playerchoice) {
    const computerchoice = choices[Math.floor(Math.random() * 3)];
    let result = "";

    if(playerchoice === computerchoice){
        result = "It's a tie!";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerchoice === "scissors") ? "You win!" : "You lose!";
                break;
            case "paper":
                result = (computerchoice === "rock") ? "You win!" : "You lose!";
                break;
            case "scissors":
                result = (computerchoice === "paper") ? "You win!" : "You lose!";
                break;
        }
    }
    playerdisplay.textContent = `Player: ${playerchoice}`;
    computerdisplay.textContent = `Computer: ${computerchoice}`;
    resultdisplay.textContent = result;

    // Remove existing text color classes
    resultdisplay.classList.remove("greentext", "redtext");

    // Apply text color class based on the result
    switch(result){
        case "You win!":
            resultdisplay.classList.add("greentext");
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
            break;
        case "You lose!":
            resultdisplay.classList.add("redtext");
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            break;
    }
}

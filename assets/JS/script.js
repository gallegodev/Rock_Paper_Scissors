/**Global variables */

let userScore = 0;
let computerScore = 0;

let userScoreSpan = document.getElementById("user-score");
let computerScoreSpan = document.getElementById("computer-score");

let rockDiv = document.getElementById("rock");
let paperDiv = document.getElementById("paper");
let scissorsDiv = document.getElementById("scissors");

let restartBtn = document.getElementById('restartBtn');

/**Functions */

/**Computer choice function */

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


/**Function that decides the winner */
function game(userChoice) {
    let computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        /**changes the innertext if its a tie */
        let changeFrase = document.getElementById("mainFrase");
        changeFrase.innerHTML = "Its a tie!";
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            /**changes the innertext if computer wins */
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${computerChoice} beats ${userChoice}, Anubis Won!`;
            /**Increment score if computer wins */
            computerScore++;
            computerScoreSpan.innerHTML = computerScore;
        } else {
            /**changes the innertext if player wins */
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${userChoice} beats ${computerChoice}, Challenger Won!`;
            /**Increment score if player wins */
            userScore++;
            userScoreSpan.innerHTML = userScore;
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            /**changes the innertext if computer wins */
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${computerChoice} beats ${userChoice}, Anubis Won!`;
            /**Increment score if computer wins */
            computerScore++;
            computerScoreSpan.innerHTML = computerScore;
        } else {
            /**changes the innertext if player wins */
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${userChoice} beats ${computerChoice}, Challenger Won!`;
            /**Increment score if player wins */
            userScore++;
            userScoreSpan.innerHTML = userScore;
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            /**changes the innertext if computer wins */
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${computerChoice} beats ${userChoice}, Anubis Won!`;
            /**Increment score if computer wins */
            computerScore++;
            computerScoreSpan.innerHTML = computerScore;
        } else {
            /**changes the innertext if player wins */
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${userChoice} beats ${computerChoice}, Challenger Won!`;
            /**Increment score if player wins */
            userScore++;
            userScoreSpan.innerHTML = userScore;
        }
    }
    /**Stops the match and gives a text to determine the match winner */
    if (userScore === 5){
        game = false;
        let changeFrase = document.getElementById("victoryFrase");
            changeFrase.innerHTML = "Challenger won  the match!";
    } else if (computerScore === 5){
        game = false;
        let changeFrase = document.getElementById("victoryFrase");
            changeFrase.innerHTML = "Anubis won the match!";
    }
}


/**Function to create event listeners on the rock, paper, scissors buttons */

function main() {
    rockDiv.addEventListener('click', function () {
        game("rock");
        
    });

    paperDiv.addEventListener('click', function () {
        game("paper");
        
    });

    scissorsDiv.addEventListener('click', function () {
        game("scissors");
        
    });
    
    
}



/**Function for restart buttom */

restartBtn.addEventListener('click', restart);

function restart() {
    location.reload();
}


main();
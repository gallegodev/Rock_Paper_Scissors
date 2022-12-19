/**Global variables */

let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");

let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

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
            computerScore_span.innerHTML = computerScore;
        } else {
            /**changes the innertext if player wins */
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${userChoice} beats ${computerChoice}, Challenger Won!`;
            /**Increment score if player wins */
            userScore++;
            userScore_span.innerHTML = userScore;
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            /**changes the innertext if computer wins */
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${computerChoice} beats ${userChoice}, Anubis Won!`;
            /**Increment score if computer wins */
            computerScore++;
            computerScore_span.innerHTML = computerScore;
        } else {
            /**changes the innertext if player wins */
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${userChoice} beats ${computerChoice}, Challenger Won!`;
            /**Increment score if player wins */
            userScore++;
            userScore_span.innerHTML = userScore;
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            /**changes the innertext if computer wins */
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${computerChoice} beats ${userChoice}, Anubis Won!`;
            /**Increment score if computer wins */
            computerScore++;
            computerScore_span.innerHTML = computerScore;
        } else {
            /**changes the innertext if player wins */
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${userChoice} beats ${computerChoice}, Challenger Won!`;
            /**Increment score if player wins */
            userScore++;
            userScore_span.innerHTML = userScore;
        }
    }

}


/**Function to create event listeners on the rock, paper, scissors buttons */

function main() {
    rock_div.addEventListener('click', function () {
        game("rock");

    });

    paper_div.addEventListener('click', function () {
        game("paper");
    });

    scissors_div.addEventListener('click', function () {
        game("scissors");
    });

}

/**Function for restart buttom */

restartBtn.addEventListener('click', restart);

function restart() {
    location.reload();
}


main();
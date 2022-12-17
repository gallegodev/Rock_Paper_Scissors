/**Global variables */

let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");

let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

/**Functions */

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        let changeFrase = document.getElementById("mainFrase");
        changeFrase.innerHTML = "Its a tie!";
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${computerChoice} beats ${userChoice}, Anubis Won!`;
            computerScore++;
            computerScore_span.innerHTML = computerScore;
        } else {
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${userChoice} beats ${computerChoice}, Challenger Won!`;
            userScore++;
            userScore_span.innerHTML = userScore;
        }
    } else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${computerChoice} beats ${userChoice}, Anubis Won!`;
            computerScore++;
            computerScore_span.innerHTML = computerScore;
        } else {
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${userChoice} beats ${computerChoice}, Challenger Won!`;
            userScore++;
            userScore_span.innerHTML = userScore;
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${computerChoice} beats ${userChoice}, Anubis Won!`;
            computerScore++;
            computerScore_span.innerHTML = computerScore;
        } else {
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `${userChoice} beats ${computerChoice}, Challenger Won!`;
            userScore++;
            userScore_span.innerHTML = userScore;
        }
    }

}




function main() {
    rock_div.addEventListener('click', function () {
        game("rock");

    })

    paper_div.addEventListener('click', function () {
        game("paper");
    })

    scissors_div.addEventListener('click', function () {
        game("scissors");
    })

}

main();
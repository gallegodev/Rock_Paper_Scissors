/**Global variables */

let userScore = 0;
let computerScore = 0;
let userScore_span = document.getElementById("user-score");
let computerScore_span = document.getElementById("computer-score");
let scoreBoard_div = document.querySelector(".score-board");
let result_div = document.querySelector(".result");
let rock_div = document.getElementById("rock");
let paper_div = document.getElementById("paper");
let scissors_div = document.getElementById("scissors");

/**Functions */

function getComputerChoice() {
    let choices = ['rock', 'paper', 'scissors'];
    let randomNumber =Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(userChoice);
}
game("d")

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
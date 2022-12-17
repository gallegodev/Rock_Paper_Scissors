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

/**Buttons Functions */

rock_div.addEventListener('click', function() {
    console.log("You are pressing the Rock!!!")
})

paper_div.addEventListener('click', function() {
    console.log("You are pressing the Paper!!!")
})

scissors_div.addEventListener('click', function() {
    console.log("You are pressing the Scissors!!!")
})
//Make a variable to store the choice
//Random a number from 0-2
//Write a choice into the variable based on the number
function getComputerChoice(){
    let choice;
    let choiceNum = Math.floor(Math.random()*3);
    switch (choiceNum){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
        default:
            console.log("Something went horribly wrong!");
            break;
    }
    return choice;
}

//Make a couple of if statements
//Check for input validity
//Compare the selections
//Return an outcome of the round
function playRound(playerSelection, computerSelection){

    const hdr = document.querySelector('.scoreboard');
    const results = document.querySelector('.results');

    if(playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors") return "Enter a valid choice!";

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){

        hdr.textContent = "Draw! Try again!";
        return 0;

    }
    else if((playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") || (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") || (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock")){
        
        hdr.textContent = `You won! ${playerSelection} beats ${computerSelection}! Good job!`;
        return 1;
    }
    else{
        
        hdr.textContent = `You lost! ${computerSelection} beats ${playerSelection}! Try again!`;
        return -1;
    }
}


//Make 3 event listeners
//Assign correct input to each one
//Call playRound() with the correct arguments on click
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector(".rock-button");
const paperBtn = document.querySelector(".paper-button");
const scissorsBtn = document.querySelector(".scissors-button");

function game(choice){
    const hdr = document.querySelector('.scoreboard');
    let outcome = playRound(choice, getComputerChoice());
    const player = document.querySelector('.human-score');
    const computer = document.querySelector('.computer-score');
    if(outcome === 1) {
        ++playerScore;
        player.textContent = playerScore;
    }
    else if(outcome === -1){
        ++computerScore;
        computer.textContent = computerScore;
    }
    if(playerScore >= 5){
        rockBtn.setAttribute('disabled', true);
        paperBtn.setAttribute('disabled', true);
        scissorsBtn.setAttribute('disabled', true);
        hdr.textContent = "You win! Good job!"
    }
    if(computerScore >= 5){
        rockBtn.setAttribute('disabled', true);
        paperBtn.setAttribute('disabled', true);
        scissorsBtn.setAttribute('disabled', true);
        hdr.textContent = "You lost! Try again!"
    }
}


rockBtn.addEventListener('click', () => {
    game('rock');
});
paperBtn.addEventListener('click', () => {
    game('paper');
});
scissorsBtn.addEventListener('click', () => {
    game('scissors');
});



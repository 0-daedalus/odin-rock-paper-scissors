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

    const hdr = document.querySelector('h1');
    hdr.style.color = "red";
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

const rockBtn = document.querySelector(".rock-button");
const paperBtn = document.querySelector(".paper-button");
const scissorsBtn = document.querySelector(".scissors-button");

rockBtn.addEventListener('click', () => playRound('rock', getComputerChoice()));
paperBtn.addEventListener('click', () => playRound('paper', getComputerChoice()));
scissorsBtn.addEventListener('click', () => playRound('scissors', getComputerChoice()));
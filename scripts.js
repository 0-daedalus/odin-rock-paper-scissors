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
//Compare the selections
//Return an outcome of the round
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        console.log("Draw! Try again!");
        return "Draw! Try again!";
    }
    else if((playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") || (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") || (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock")){
        console.log(`You won! ${playerSelection} beats ${computerSelection}! Good job!`);
        return `You won! ${playerSelection} beats ${computerSelection}! Good job!`;
    }
    else{
        console.log(`You lost! ${computerSelection} beats ${playerSelection}! Try again!`);
        return `You lost! ${computerSelection} beats ${playerSelection}! Try again!`;
    }
}

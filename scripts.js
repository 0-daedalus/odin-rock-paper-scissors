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
    if(playerSelection.toLowerCase() != "rock" && playerSelection.toLowerCase() != "paper" && playerSelection.toLowerCase() != "scissors") return "Enter a valid choice!";

    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        
        console.log("Draw! Try again!");
        return 0;
    }
    else if((playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors") || (playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper") || (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock")){
        
        console.log(`You won! ${playerSelection} beats ${computerSelection}! Good job!`);
        return 1;
    }
    else{
        
        console.log(`You lost! ${computerSelection} beats ${playerSelection}! Try again!`);
        return -1;
    }
}

//Make 2 variables to store scores
//Use a for loop to call playRound 5 times
//Update score based on the outcome of the round
//Report a winner or loser at the end


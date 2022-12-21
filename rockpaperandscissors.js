const game_options = [`rock`, `paper`, `scissors`]; //for computer choice in getComputerChoice() function

function playRound(playerSelection, computerSelection){//Make a round of Rock Paper Scissors
    if (playerSelection === computerSelection){
        console.log(`Tie! Seems we have a ` + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ` situation!`);
    } else if (playerSelection === `rock`){
        if (computerSelection === `paper`){
            console.log(`You Lose! Paper beats Rock`);
            return false;
        } else {
            console.log(`You Win! Rock beats Scissors`);
            return true;
        }
    } else if (playerSelection === `paper`){
        if (computerSelection === `scissors`){
            console.log(`You Lose! Scissors beats Paper`);
            return false;
        } else {
            console.log(`You Win! Paper beats Rock`);
            return true;
        }
    } else {
        if (computerSelection === `rock`){
            console.log(`You Lose! Rock beats Scissors`);
            return false;
        } else {
            console.log(`You Win! Scissors beats Paper`);
            return true;
        }
    }
}

// playRound(`rock`, `paper`);
// playRound(`paper`, `rock`);
// playRound(`paper`, `paper`);

let playerChoice;  //Player's choice variable
let computerChoice; //Computer's choice variable
let playerScore = 0;
let computerScore = 0;

for (let i = 1; i <= 5; i++){
    console.log(`Round ` + i);
    playerChoice = prompt(`Rock, Paper or Scissors? `);
    let computerAux = Math.floor(Math.random() * 3) + 1;
    computerChoice = game_options[computerAux];
    let matchScore = playRound(playerChoice, computerChoice);
    if (matchScore === true){
        playerScore++;
    } else {
        computerScore++;
    }
    console.log(`Player ` + playerScore + ` ✕ ` + computerScore ` Computer`);
}

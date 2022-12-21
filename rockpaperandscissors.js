const game_options = [`rock`, `paper`, `scissors`]; //for computer choice in getComputerChoice() function

function playRound(playerSelection, computerSelection){//Make a round of Rock Paper Scissors
    console.log(`You chose ` + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1));
    console.log(`Computer chose ` + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
    if (playerSelection === computerSelection){
        console.log(`Tie! Seems we have a ` + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ` situation!`);
        return 2;
    } else if (playerSelection === `rock`){
        if (computerSelection === `paper`){
            console.log(`You Lose! Paper beats Rock`);
            return 0;
        } else {
            console.log(`You Win! Rock beats Scissors`);
            return 1;
        }
    } else if (playerSelection === `paper`){
        if (computerSelection === `scissors`){
            console.log(`You Lose! Scissors beats Paper`);
            return 0;
        } else {
            console.log(`You Win! Paper beats Rock`);
            return 1;
        }
    } else {
        if (computerSelection === `rock`){
            console.log(`You Lose! Rock beats Scissors`);
            return 0;
        } else {
            console.log(`You Win! Scissors beats Paper`);
            return 1;
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
    let computerAux = Math.floor(Math.random() * 3);
    console.log(computerAux);
    computerChoice = game_options[computerAux];
    let matchScore = playRound(playerChoice, computerChoice);
    switch(matchScore){
        case 0:
            computerScore++;
            break;
        case 1:
            playerScore++;
            break;
        case 2:
            playerScore++;
            computerScore++;
            break;
    }
    console.log(`Player ` + playerScore + ` x ` + computerScore + ` Computer`);
}

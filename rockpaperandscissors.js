const game_options = [`rock`, `paper`, `scissors`]; //for computer choice in getComputerChoice() function

function playRound(playerSelection, computerSelection){//Make a round of Rock Paper Scissors
    if (playerSelection === computerSelection){
        console.log(`Tie! Seems we have a ` + playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1) + ` situation!`);
    } else if (playerSelection === `rock`){
        if (computerSelection === `paper`){
            console.log(`You Lose! Paper beats Rock`);
        } else {
            console.log(`You Win! Rock beats Scissors`);
        }
    } else if (playerSelection === `paper`){
        if (computerSelection === `scissors`){
            console.log(`You Lose! Scissors beats Paper`);
        } else {
            console.log(`You Win! Paper beats Rock`);
        }
    } else {
        if (computerSelection === `rock`){
            console.log(`You Lose! Rock beats Scissors`);
        } else {
            console.log(`You Win! Scissors beats Paper`);
        }
    }
}



let playerChoice = prompt(`Rock, Paper or Scissors? `); //Player's choice
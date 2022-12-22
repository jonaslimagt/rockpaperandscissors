const game_options = [`rock`, `paper`, `scissors`]; //for computer choice

function playRound(game_options){//Make a round of Rock Paper Scissors
    let playerChoice = prompt(`Rock, Paper or Scissors? `).toLowerCase();
    while (playerChoice != `rock` && playerChoice != `paper` && playerChoice != `scissors`){
        playerChoice = prompt(`Invalid choice! Try again: `);
    }
    let computerChoice = game_options[Math.floor(Math.random() * game_options.length)];
    console.log(`You chose ` + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1));
    console.log(`Computer chose ` + computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1));
    if (playerChoice === computerChoice){
        console.log(`Tie! Seems we have a ` + playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1) + ` situation!`);
        console.log(`The round is undefined. Let's try again!`)
        let score = playRound(game_options);
        return score;
    } else if (playerChoice === `rock`){
        if (computerChoice === `paper`){
            console.log(`You Lose! Paper beats Rock`);
            return false;
        } else {
            console.log(`You Win! Rock beats Scissors`);
            return true;
        }
    } else if (playerChoice === `paper`){
        if (computerChoice === `scissors`){
            console.log(`You Lose! Scissors beats Paper`);
            return false;
        } else {
            console.log(`You Win! Paper beats Rock`);
            return true;
        }
    } else {
        if (computerChoice === `rock`){
            console.log(`You Lose! Rock beats Scissors`);
            return false;
        } else {
            console.log(`You Win! Scissors beats Paper`);
            return true;
        }
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++){
        console.log(`Round ` + i);
        let matchScore = playRound(game_options);
        switch(matchScore){
            case false:
                computerScore++;
                break;
            case true:
                playerScore++;
                break;
        }
        console.log(`Player ` + playerScore + ` x ` + computerScore + ` Computer`);
        if (playerScore == 3){
            console.log(`You Win the Match! Congratulations!`)
            break;
        } else if (computerScore == 3){
            console.log(`You Lose the Match! Maybe you will have more luck in the next time`);
            break;
        }
    }
}

game();

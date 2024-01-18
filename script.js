const gameChoices = ['rock', 'paper', 'scissors'];



let tie = 0;
function getComputerChoice(option){
    return option[Math.floor(Math.random() * option.length)];
}

function playRound(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return 'It\'s a tie ! You both chose '+ playerSelection + '!';
    }
    // computer wins
    else if (playerSelection == 'rock' && computerSelection == 'paper'||
    playerSelection == 'paper' && computerSelection == 'scissors'||
    playerSelection == 'scissors' && computerSelection == 'rock'   
    ){
        return 'You lose, ' + computerSelection + ' beats ' + playerSelection;
    }
    else {
        return 'You Win !, ' + playerSelection + ' beats ' + computerSelection + '!';
    }
}

// const playerSelection = "rock";

// console.log(playRound(playerSelection, computerSelection).gameString);



function game(){

    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++){
        
        const playerChoice = prompt("Enter Your Choice: ")
        const computerSelection = getComputerChoice(gameChoices);
        const ans = playRound(playerChoice, computerSelection);
        
        console.log(ans);

        if (ans.includes('Win')){
            playerScore++;
        } else if (ans.includes('lose')){
            computerScore++;
        }
    }
    if (playerScore > computerScore){
        console.log('You win the game !!!!');
    } else if (playerScore < computerScore){
        console.log('You lost the game :( ');
    } else {
        console.log('tie game');
    }
}

game();
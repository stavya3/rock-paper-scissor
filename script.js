const gameChoices = ['rock', 'paper', 'scissors'];



let tie = 0;
function getComputerChoice(gameChoices){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

let roundWinner;
// actual Game
function playRound(playerSelection){

    // Get the computer choice
    const computerSelection = getComputerChoice(gameChoices);


    if (playerSelection == computerSelection){
        roundWinner = 'tie';
        return('It\'s a tie ! You both chose '+ playerSelection + '!');
        
    }
    // computer wins
    else if (playerSelection == 'rock' && computerSelection == 'paper'||
    playerSelection == 'paper' && computerSelection == 'scissors'||
    playerSelection == 'scissors' && computerSelection == 'rock'   
    ){
        roundWinner = 'computer'
        return('You lose, ' + computerSelection + ' beats ' + playerSelection);

    }
    else {
        roundWinner = 'player'
        return('You Win !, ' + playerSelection + ' beats ' + computerSelection + '!');
    }
}

// const playerSelection = "rock";

// console.log(playRound(playerSelection).gameString);



function clickFunction(playerSelection, computerSelection){
    
}

function updateChoice(playerSelection, computerSelection){
    switch(playerSelection){
        case 'rock':
            playerDisp.textContent = "Rock";
            break;
        case 'paper':
            playerDisp.textContent = "Paper";
            break;
        case 'scissors':
            playerDisp.textContent = "Scissors";
            break;
    }

    switch(computerSelection){
        case 'rock':
            compDisp.textContent = "Rock";
            break;
        case 'paper':
            compDisp.textContent = "Paper";
            break;
        case 'scissors':
            compDisp.textContent = "Scissors";
            break;

    }
}
function updateScore(roundWinner){
    let playerScore = 0;
    let computerScore = 0;
    
    if (roundWinner === 'tie'){
        
    }
}

// function game(){

//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++){
        
//         const playerChoice = prompt("Enter Your Choice: ")
//         const computerSelection = getComputerChoice(gameChoices);
//         const ans = playRound(playerChoice, computerSelection);
        
//         console.log(ans);

//         if (ans.includes('Win')){
//             playerScore++;
//         } else if (ans.includes('lose')){
//             computerScore++;
//         }
//     }
//     if (playerScore > computerScore){
//         console.log('You win the game !!!!');
//     } else if (playerScore < computerScore){
//         console.log('You lost the game :( ');
//     } else {
//         console.log('tie game');
//     }
// }

// game();

var rock = document.querySelector("#rock");
var pap = document.querySelector("#paper");
var sci = document.querySelector("#scissors");

rock.addEventListener("click", () => playRound("rock"));
pap.addEventListener("click", () => playRound("paper"));
sci.addEventListener("click", () => playRound("scissors"));

var playerDisp = document.querySelector(".playerDisp");
var compDisp = document.querySelector(".compDisp");


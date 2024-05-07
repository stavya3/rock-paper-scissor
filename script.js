const gameChoices = ['rock', 'paper', 'scissors'];



let tie = 0;
function getComputerChoice(gameChoices){
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

let playerScore = 0;
let computerScore = 0;
let roundWinner='';

var playerDisp = document.querySelector("#playerDisp");
var compDisp = document.querySelector("#compDisp");
let disp = document.querySelector("#detail");



// actual Game
function playRound(playerSelection){

    // Get the computer choice
    const computerSelection = getComputerChoice(gameChoices);


    if (playerSelection == computerSelection){
        roundWinner = 'tie';
        //return('It\'s a tie ! You both chose '+ playerSelection + '!');
        
    }
    // computer wins
    else if (playerSelection == 'rock' && computerSelection == 'paper'||
    playerSelection == 'paper' && computerSelection == 'scissors'||
    playerSelection == 'scissors' && computerSelection == 'rock'   
    ){
        roundWinner = 'computer';
        computerScore++;
        //return('You lose, ' + computerSelection + ' beats ' + playerSelection);

    }
    else {
        roundWinner = 'player'
        playerScore++;
        //return('You Win !, ' + playerSelection + ' beats ' + computerSelection + '!');
    }

    updateScoreMessage(roundWinner, playerSelection, computerSelection);
}

function endGame(){
    return playerScore === 5 || computerScore === 5;
}

// const playerSelection = "rock";

// console.log(playRound(playerSelection).gameString);

function updateScore(roundWinner){
    // This function will take in the roundWinner and then print the intermediate win/lose message and will also print the score
    if (roundWinner === 'tie'){
        msg.textContent = "It's a tie";
        msg.style.color = "black";
    }
    

    else if (roundWinner === 'player'){
        msg.textContent = "you WIN!";
        msg.style.color = "green";
    }
    else if (roundWinner === 'computer'){
        msg.textContent = "you lose :(";
        msg.style.color = "red";
    }
    
    playerDisp.textContent = `Player: ${playerScore}`;
    compDisp.textContent = `Computer: ${computerScore}`;
}

function updateScoreMessage(winner, playerSelection, computerSelection){
    if (winner === 'player'){
        disp.textContent = `${playerSelection} beats ${computerSelection}`;
        return;
    }
    else if (winner === 'computer'){
        disp.textContent = `${computerSelection} beats ${playerSelection}`;
        return;
    }
    else {
        disp.textContent = `${playerSelection} ties with ${computerSelection}`;
        return;
    }
}



function clickFunction(playerSelection){

    if (endGame()){
        if (playerScore === 5){
            msg.style.color = "green"
            msg.textContent = "YOU WON THE GAME!";
            return;
        } else {
            msg.style.color = "red";
            msg.textContent = "you lost the game :(";
            return;
        }
    }
    playRound(playerSelection);
    updateScore(roundWinner);
    
}

// function updateChoice(playerSelection, computerSelection){
//     switch(playerSelection){
//         case 'rock':
//             playerDisp.textContent = "Rock";
//             break;
//         case 'paper':
//             playerDisp.textContent = "Paper";
//             break;
//         case 'scissors':
//             playerDisp.textContent = "Scissors";
//             break;
//     }

//     switch(computerSelection){
//         case 'rock':
//             compDisp.textContent = "Rock";
//             break;
//         case 'paper':
//             compDisp.textContent = "Paper";
//             break;
//         case 'scissors':
//             compDisp.textContent = "Scissors";
//             break;

//     }
// }


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

rock.addEventListener("click", () => clickFunction("rock"));
pap.addEventListener("click", () => clickFunction("paper"));
sci.addEventListener("click", () => clickFunction("scissors"));

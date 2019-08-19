const play_array = ['rock', 'paper', 'scissors'];
function computerPlay(){
    let randNumber = Math.floor(Math.random() * 3);
    return play_array[randNumber]
}
function playerPlay(){
    let playerInput = prompt("Choose rock, paper, or scissors");
    for(let i=0; i< play_array.length; i++){
        if (playerInput.toLowerCase() == play_array[i]) {
            return playerInput.toLowerCase();
        }
    }
}
let movements = {
    "rock":"paper",
    "paper": "scissors",
    "scissors":"rock",
}
function playRound(){
    const computerSelection = computerPlay();
    const playerSelection = playerPlay();
    if (computerSelection == playerSelection){
        return "draw";
    }
    if (movements[computerSelection] == playerSelection){
        return 'player';
    }
    else if (movements[playerSelection] == computerSelection){
        return 'comp';
    }
}

function game(playRound){
    let i =0;
    let compCounter = 0;
    let playerCounter = 0;
    while (i < 5) {
        let gameRound = playRound();
        console.log(gameRound);
        if (gameRound == "player"){
            playerCounter++;
        }
        else if (gameRound == "comp"){
            compCounter++;
        }
        i++;
    }
    if (playerCounter > compCounter){
        return "You Won";
    }else if (compCounter > playerCounter) {
        return "You Lose";
    }else {
        return "Draw";
    }
}
console.log(game(playRound));
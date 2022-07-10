

let pcScore = 0;
let playerScore = 0;
var computerSelection = function () {
    const results = ["ROCK", "PAPER", "SCISSORS"]

    return results[Math.floor(Math.random() * results.length)]
}

function gameplay(computerSelection, playerSelection) {

    if (computerSelection === playerSelection) {
        return "Draw"
    }
    else if ((computerSelection === "PAPER") && (playerSelection === "ROCK")) {
        pcScore++;
        return "computer has won"
    }
    else if ((computerSelection === "SCISSORS") && (playerSelection === "ROCK")) {
        playerScore++;
        return "player has won"
    }
    else if ((computerSelection === "ROCK") && (playerSelection === "ROCK")) {
        return "Draw"
    }
    else if ((computerSelection === "PAPER") && (playerSelection === "PAPER")) {
        return "Draw"
    }
    else if ((computerSelection === "SCISSORS") && (playerSelection === "PAPER")) {
        pcScore++;
        return "computer has won"
    }
    else if ((computerSelection === "ROCK") && (playerSelection === "PAPER")) {
        playerScore++;
        return "player has won"
    }
    else if ((computerSelection === "PAPER") && (playerSelection === "SCISSORS")) {
        playerScore++;
        return "player has won"
    }
    else if ((computerSelection === "SCISSORS") && (playerSelection === "SCISSORS")) {
        return "Draw"
    }
    else {
        pcScore++;
        return "computer has won"
    }



}
function game(selection) {
    if (selection != "ROCK" && selection != "PAPER" && selection != "SCISSORS") {
        alert("Wrong choice")

    }
    else {
        return gameplay(computerSelection(), selection)

    }

}


for (let i = 0; i < 5; i++) {
    var playerSelection = prompt("Enter Paper, Rock Or Scissors");
    playerSelection = playerSelection.toUpperCase()
    console.log(game(playerSelection))
    console.log(`playerScore is : ${playerScore} ::::: computerScore is : ${pcScore}`)
    if (playerScore > pcScore) {
        console.log("You are the winner")

    }
    else if (pcScore > playerScore) {
        console.log("Computer is the winner")
    }
    else {
        console.log("Draw")
    }

}


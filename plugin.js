const btn1 = document.querySelector('.btn-1')
const btn2 = document.querySelector('.btn-2')
const btn3 = document.querySelector('.btn-3')
const main = document.querySelector('.main')
const result = document.querySelector('.result')
const winner = document.querySelector('.winner')
const youScore = document.querySelector('.you')
const comScore = document.querySelector('.com')




let pcScore = 0;
let playerScore = 0;
var computerPlay = function () {
    const results = ["ROCK", "PAPER", "SCISSORS"]

    return results[Math.floor(Math.random() * results.length)]
}

function gameplay(computerSelection, playerSelection) {
    if (pcScore == 5) {
        return "computer is winner"
    }
    else if (playerScore == 5) {
        return "you are winner"
    }
    

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
function game(playerSelection) {
        playerSelection = playerSelection.toUpperCase()
        const computerSelection = computerPlay()
      
        //result.textContent += `playerScore is : ${playerScore} ::::: computerScore is : ${pcScore}`
   
        result.textContent = `${gameplay(computerSelection, playerSelection)}`
        youScore.textContent = `${playerScore}`
        comScore.textContent = `${pcScore}`
}

btn1.addEventListener('click', (e) => {
    game(e.target.outerText)
})
btn2.addEventListener('click', (e) => {
    game(e.target.outerText)
})
btn3.addEventListener('click', (e) => {
    game(e.target.outerText)
})

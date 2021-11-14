/**
 * Rock paper scissors for the Odin Project
 */

function computerPlay() {
    const arr = ['Rock', 'Paper', 'Scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}


function playRound(playerSelection, computerSelection) {
    console.log('player:',playerSelection, 'computer:', computerSelection);

    const table = {
        'rock': ''+1,
        'paper': ''+2,
        'scissors': ''+3,
    }

    let key = table[playerSelection.toLowerCase()] + table[computerSelection.toLowerCase()]
    let result;

    switch (key) {
        case '11':
        case '22':
        case '33':
             result = [`It's a tie`, 0];
            break;
        case '13':
        case '32':
        case '21':
            result = [`You win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`, 1]
            break;
        case '12':
        case '23':
        case '31':
            result = [`You lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`, -1];
            break;
        default:
            result = ['Error', 0];
            break;
    }
    return result
}

function game(playerSelection, computerSelection) {
    let playerResult, computerResult = 0;
    
}

let playerScore = document.querySelector('.player');
let computerScore = document.querySelector('.computer');
let message = document.querySelector('.result-message');
// message.textContent = ""



const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // console.log(typeof e.target.id);

    })
})
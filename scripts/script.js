/**
 * Rock paper scissors for the Odin Project
 */

function computerPlay() {
    const arr = ['Rock', 'Paper', 'Scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

// console.log(computerPlay())

function playRound(playerSelection, computerSelection) {
    console.log('player:',playerSelection, 'computer', computerSelection);
    
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
             result = `It's a tie`;            
            break;
        case '13':
        case '32':
        case '21':
            result = `You win! ${playerSelection.toLowerCase()} beats ${computerSelection.toLowerCase()}`
            break;
        case '12':
        case '23':
            result = `You lose! ${computerSelection.toLowerCase()} beats ${playerSelection.toLowerCase()}`;
            break;
        default:
            result = 'Error';
            break;
    }
    return result
}

let playerSelection = 'rock'
let computerSelection = computerPlay()
console.log(playRound(playerSelection, computerSelection))
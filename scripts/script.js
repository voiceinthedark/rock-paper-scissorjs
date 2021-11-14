/**
 * Rock paper scissors for the Odin Project
 */

function computerPlay() {
    const arr = ['Rock', 'Paper', 'Scissors']
    return arr[Math.floor(Math.random() * arr.length)]
}

// console.log(computerPlay())

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

// let playerSelection = 'rock'
// let computerSelection = computerPlay()
// console.log(playRound(playerSelection, computerSelection))

function game() {
    let result = 0
    let playerSelection;
    for(let i = 0; i < 5; i++){
        playerSelection = prompt(`rock, paper or scissors?`, 'rock')
        result += playRound(playerSelection, computerPlay())[1]
    }
    console.log(result);
    return result > 0 ? 'Player Wins' : result < 0 ? 'Computer wins' : 'It\'s a tie'
}

// console.log(game());
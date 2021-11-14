/**
 * Rock paper scissors for the Odin Project
 */

let playerScore = document.querySelector(".player");
let computerScore = document.querySelector(".computer");
let message = document.querySelector(".result-message");
let resetButton = document.querySelector("#reset");
let resultDiv = document.querySelector('.result');
const buttons = document.querySelectorAll(".btn");
resetButton.classList.toggle("hide");

window.onload = () => {

    let observer = new MutationObserver((mutations) => {
        let playerScoreValue = +playerScore.textContent;
        let computerScoreValue = +computerScore.textContent;
        mutations.forEach((mutation) => {
            // console.log(mutation.type);
            if (
              playerScoreValue === 5 ||
              computerScoreValue === 5
            ) {
                buttons.forEach((button) => {
                    //   console.log('disabling buttons');                  
                    if(button.id !== 'reset'){
                        button.disabled = true;
                    }
                });
                message.textContent = playerScoreValue > computerScoreValue 
                ? 'Player Wins!' : 'Computer Wins!';              
                resetButton.classList.remove("hide");
                return;
            }
        });
    });

    let config = {childList: true, subtree: true};
    observer.observe(resultDiv, config);    
};

function computerPlay() {
  const arr = ["Rock", "Paper", "Scissors"];
  return arr[Math.floor(Math.random() * arr.length)];
}

function playRound(playerSelection, computerSelection) {
  //   console.log("player:", playerSelection, "computer:", computerSelection);

  const table = {
    rock: "" + 1,
    paper: "" + 2,
    scissors: "" + 3,
  };

  let key =
    table[playerSelection.toLowerCase()] +
    table[computerSelection.toLowerCase()];
  let result;

  switch (key) {
    case "11":
    case "22":
    case "33":
      result = {
        player: null,
        message: `Player's ${playerSelection.toUpperCase()} ties NPC's ${computerSelection.toUpperCase()}`,
        score: 0,
      };
      break;
    case "13":
    case "32":
    case "21":
      result = {
        player: "pc",
        message: `Player's ${playerSelection.toUpperCase()} beats NPC's ${computerSelection.toUpperCase()}`,
        score: 1,
      };
      break;
    case "12":
    case "23":
    case "31":
      result = {
        player: "npc",
        message: `NPC's ${computerSelection.toUpperCase()} beats Player's ${playerSelection.toUpperCase()}`,
        score: 1,
      };
      break;
    default:
      result = null;
      break;
  }
  return result;
}



let playerResult = 0;
let computerResult = 0;
let result = null;

function game(playerSelection) {

  result = playRound(playerSelection, computerPlay());

  if (result.player === "pc") {
    playerResult += result.score;
  } else if (result.player === "npc") {
    computerResult += result.score;
  }
  
  return [playerResult, computerResult];
}

buttons.forEach((btn) => {
    if(btn.id !== 'reset'){
        btn.addEventListener("click", (e) => {
          [playerResult, computerResult] = game(e.target.id);
          // console.log(playerScore, computerScore);
          playerScore.textContent = "" + playerResult;
          computerScore.textContent = "" + computerResult;
          message.textContent = result.message;
        });        
    }  
});

resetButton.addEventListener('click', (e) => {
    playerScore.textContent = '0';
    computerScore.textContent = '0';
    message.textContent = 'Let\'s play!';
    resetButton.classList.add('hide');    

     buttons.forEach((button) => {
    //    console.log("disabling buttons");
       if (button.id !== "reset") {
         button.disabled = false;
       }
     });

     playerResult = computerResult = 0;
})

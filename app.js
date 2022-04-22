const selectionBtns = document.querySelectorAll('button');
const result = document.querySelector('.result');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');

let playerWinCount = 0;
let computerWinCount = 0;

function computerPlay() {
  const choices = ['Rock', 'Scissors', 'Paper'];

  // generate random number between index 0 to 2
  let randomInx = Math.floor(Math.random() * 3);

  computer.innerText = choices[randomInx].toUpperCase();
  return choices[randomInx];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  // when user select rock
  if (player === 'rock') {
    if (computer === 'rock') {
      return "It's tie! Rock ties with rock";
    } else if (computer === 'scissors') {
      playerWinCount++;
      return 'You won! Rock beats scissors';
    } else if (computer === 'paper') {
      computerWinCount++;
      return 'You Lose! Rock beaten by paper';
    }
  }

  // when user select scissors
  if (player === 'scissors') {
    if (computer === 'scissors') {
      return "It's tie! scissors ties with scissors";
    } else if (computer === 'paper') {
      playerWinCount++;
      return 'You won! scissors beats paper';
    } else if (computer === 'rock') {
      computerWinCount++;
      return 'You Lose! scissors beaten by rock';
    }
  }

  // when user select paper
  if (player === 'paper') {
    if (computer === 'paper') {
      return "It's tie! Paper ties with paper";
    } else if (computer === 'rock') {
      playerWinCount++;
      return 'You won! Paper beats rock';
    } else if (computer === 'scissors') {
      computerWinCount++;
      return 'You Lose! Paper beaten by scissors';
    }
  }
}

function game() {
  for (let btn of selectionBtns) {
    btn.addEventListener('click', () => {
      const computerSelection = computerPlay();
      let selectBtnVal = btn.id;
      player.innerText = btn.id.toUpperCase();
      result.innerText = playRound(selectBtnVal, computerSelection);

      // Display current score each side
      playerScore.innerText = playerWinCount;
      computerScore.innerText = computerWinCount;

      if (playerWinCount >= 5 || computerWinCount >= 5) {
        winner();
      }
    });
  }

  // let playerSelection = prompt(
  //   'Type one of the options: Rock | Papaer | scissors'
  // );
  // const computerSelection = computerPlay();
  // console.log(playRound(playerSelection, computerSelection));
  //   after 5 game play, ends game and display the result
  // winner();
}

function winner() {
  if (playerWinCount > computerWinCount) {
    console.log('Player Win');
  } else if (playerWinCount < computerWinCount) {
    console.log('Computer Win');
  }
  playerWinCount = 0;
  computerWinCount = 0;
}

game();

const selectionBtns = document.querySelectorAll('button');
const computerSelections = document.querySelectorAll('.selection-box');

const result = document.querySelector('.result');
const player = document.querySelector('#player');
const computer = document.querySelector('#computer');

const playerScore = document.querySelector('.player-score');
const computerScore = document.querySelector('.computer-score');
const againBtn = document.querySelector('.again-btn-container');
const playAgain = document.querySelector('.play-again');

let playerWinCount = 0;
let computerWinCount = 0;

function computerPlay() {
  const choices = ['Rock', 'Scissors', 'Paper'];

  // generate random number between index 0 to 2
  let randomInx = Math.floor(Math.random() * 3);

  return choices[randomInx];
}

function playRound(playerSelection, computerSelection) {
  resetClassName();

  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  // computer status update (active)
  for (let select of computerSelections) {
    if (select.innerText.toLowerCase() === computer) {
      select.classList.add('active');
    }
  }

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
  // set default value for score
  playerScore.innerText = 0;
  computerScore.innerText = 0;

  for (let btn of selectionBtns) {
    btn.addEventListener('click', () => {
      const computerSelection = computerPlay();
      let selectBtnVal = btn.id;

      result.innerText = playRound(selectBtnVal, computerSelection);

      if (btn.innerText.toLowerCase() === btn.id) {
        btn.classList.add('active');
      }

      // Display current score each side
      playerScore.innerText = playerWinCount;
      computerScore.innerText = computerWinCount;

      if (playerWinCount >= 5 || computerWinCount >= 5) {
        winner();
      }
    });
  }
}

function winner() {
  const playAgainBtn = document.createElement('button');
  playAgainBtn.textContent = 'PLAY AGAIN';
  playAgainBtn.classList.add('play-again');
  againBtn.appendChild(playAgainBtn);

  if (playerWinCount > computerWinCount) {
    result.innerText = 'Player Win ✌';
  } else if (playerWinCount < computerWinCount) {
    result.innerText = 'Computer Win 🖥';
  }
  playerWinCount = 0;
  computerWinCount = 0;

  gameOver();

  // re-start game
  playAgainBtn.addEventListener('click', gameRestart);
}

function gameOver() {
  selectionBtns.forEach(btn => (btn.disabled = true));
}

function gameRestart() {
  selectionBtns.forEach(btn => (btn.disabled = false));

  const playAgain = document.querySelector('.play-again');
  againBtn.removeChild(playAgain);

  result.innerText = '';
  playerScore.innerText = '0';
  computerScore.innerText = '0';
  resetClassName();
}

function resetClassName() {
  // reset player class status (active) before next play
  for (let btn of selectionBtns) {
    btn.classList.remove('active');
  }

  // reset computer class status (active) before next play
  for (let select of computerSelections) {
    select.classList.remove('active');
  }
}

game();

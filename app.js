let playerWinCount = 0;
let computerWinCount = 0;

function computerPlay() {
  const choices = ['Rock', 'Scissor', 'Paper'];

  // generate random number between index 0 to 2
  let randomInx = Math.floor(Math.random() * 3);

  return choices[randomInx];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toLowerCase();
  const computer = computerSelection.toLowerCase();

  // when user select rock
  if (player === 'rock') {
    if (computer === 'rock') {
      return "It's tie! Rock ties with rock";
    } else if (computer === 'scissor') {
      playerWinCount++;
      return 'You won! Rock beats scissor';
    } else if (computer === 'paper') {
      computerWinCount++;
      return 'You Lose! Rock beaten by paper';
    }
  }

  // when user select scissor
  if (player === 'scissor') {
    if (computer === 'scissor') {
      return "It's tie! Scissor ties with scissor";
    } else if (computer === 'paper') {
      playerWinCount++;
      return 'You won! Scissor beats paper';
    } else if (computer === 'rock') {
      computerWinCount++;
      return 'You Lose! Scissor beaten by rock';
    }
  }

  // when user select paper
  if (player === 'paper') {
    if (computer === 'paper') {
      return "It's tie! Paper ties with paper";
    } else if (computer === 'rock') {
      playerWinCount++;
      return 'You won! Paper beats rock';
    } else if (computer === 'scissor') {
      computerWinCount++;
      return 'You Lose! Paper beaten by scissor';
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      'Type one of the options: Rock | Papaer | Scissor'
    );
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  //   after 5 game play, ends game and display the result
  winner();
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

const readline = require("readline-sync");
const VALID_CHOICES  = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

function displayWinner(choice, computerChoice) {
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt('You won!');
  } else if ((choice === 'scissors' && computerChoice === 'rock') ||
            (choice === 'rock' && computerChoice === 'paper') ||
            (choice === 'paper' && computerChoice === 'scissors')) {
    prompt('Computer won!');
  } else {
    prompt("It's a tie!");
  }
}

let keepGoing = true;
while (keepGoing) {
  // Get the user choice:
  prompt(`Choose one of: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.prompt();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.prompt();
  }

  // Get the computer choice:
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  // Display who the winner is:
  displayWinner(choice, computerChoice);

  prompt("Would you like to play again? (y/n)");
  let answer = readline.prompt().toLowerCase();
  prompt(answer);

  while (answer[0] !== 'y' && answer[0] !== 'n') {
    prompt("Please choose 'y' or 'n'");
    answer = readline.prompt();
  }

  // Terminate the loop:
  if (answer[0] === 'n') {
    keepGoing = false;
  }
}
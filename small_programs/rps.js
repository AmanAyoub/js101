const readline = require("readline-sync");
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  // Get the user choice:
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.prompt();

  while (!VALID_CHOICES.includes(choice)) {
    prompt("That's not a valid choice");
    choice = readline.prompt();
  }

  // Get the compute choice:
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  prompt(`You chose: ${choice} computer chose: ${computerChoice}`);

  // Display winner
  if ((choice === 'rock' && computerChoice === 'scissors') ||
      (choice === 'paper' && computerChoice === 'rock') ||
      (choice === 'scissors' && computerChoice === 'paper')) {
    prompt("You won!");
  } else if ((choice === 'scissors' && computerChoice === 'rock') ||
            (choice === 'rock' && computerChoice === 'paper') ||
            (choice === 'paper' && computerChoice === 'scissors')) {
    prompt("Computer won!");
  } else {
    prompt("It's a tie!");
  }

  prompt("Do you want to play again? (y/n)");
  let playAgain = readline.prompt().toLowerCase();

  while (playAgain[0] !== 'y' && playAgain[0] !== 'n') {
    prompt("Choose: y/n");
    playAgain = readline.prompt().toLowerCase();
  }

  // Terminate the loop:
  if (playAgain[0] === 'n') break;
}
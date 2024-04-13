const readline = require("readline-sync");
const VALID_CHOICES  = ['rock', 'paper', 'scissors'];

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt(`Choose one of: ${VALID_CHOICES.join(', ')}`);
let choice = readline.prompt();

while (!VALID_CHOICES.includes(choice)) {
  prompt("That's not a valid choice");
  choice = readline.prompt();
}

let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
let computerChoice = VALID_CHOICES[randomIndex];

prompt(`You chose ${choice}. Computer chose ${computerChoice}.`);
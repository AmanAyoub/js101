const readline = require('readline-sync');
const MESSAGE = require('./mortgage_messages.json');

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return number.trim() === '' ||
         Number(number) < 0   ||
         Number.isNaN(Number(number));
}

prompt(MESSAGE.welcome);

while (true) {
  prompt('---------------------------------');

  prompt(MESSAGE.amount);
  let amount = readline.question();

  while (isInvalidNumber(amount)) {
    prompt(MESSAGE.invalidNumber);
    amount = readline.question();
  }

  prompt(MESSAGE.interestRate);
  prompt(MESSAGE.example);
  let interestRate = readline.question();

  while (isInvalidNumber(interestRate)) {
    prompt(MESSAGE.invalidNumber);
    interestRate = readline.question();
  }

  prompt(MESSAGE.loanDuration);
  let years = readline.question();

  while (isInvalidNumber(years)) {
    prompt(MESSAGE.invalidNumber);
    years = readline.question();
  }

  let annualInterestRate = Number(interestRate) / 100;
  let monthlyInterestRate = annualInterestRate / 12;
  let months = Number(years) * 12;

  let monthlyPayment = Number(amount) *
                  (monthlyInterestRate /
                  (1 - Math.pow((1 + monthlyInterestRate), (-Number(months)))));

  prompt(`${MESSAGE.monthlyPayment}${monthlyPayment.toFixed(2)}`);

  prompt(MESSAGE.anotherCalculation);
  let answer = readline.question().toLowerCase();
  
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt(MESSAGE.yesOrNo);
    answer = readline.question().toLowerCase();
  }

  if (answer[0] === 'n') break;
}
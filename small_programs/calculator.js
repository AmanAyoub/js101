// Ask the user for the first number.
// Ask the user for the second number.
// Ask the use for the operation to perform.
// Log the result to the console.js

let readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt("What's the first number?");
let number1 = readline.question();

while (invalidNumber(number1)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

prompt("What's the second number?");
let number2 = readline.question();

while (invalidNumber(number2)) {
  prompt("Hmmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

prompt("What operation would you like to perform?\n1) Add 2) Subtract 3) Multiply 4) Divide");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt("Hmmm... that doesn't look like a valid number");
  operation = readline.question();
}

let output;
switch (operation) {
  case "1":
    output = Number(number1) + Number(number2);
    break;
  case "2":
    output = Number(number1) - Number(number2);
    break;
  case "3":
    output = Number(number1) * Number(number2);
    break;
  case "4":
    output = Number(number1) / Number(number2);
    break;
}

prompt(output); //
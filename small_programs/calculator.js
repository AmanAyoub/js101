let message = require("./calculator_messages.json");
let readline = require("readline-sync");
const LANGUAGE = 'en';

function messages(lang, msg) {
  return message[lang][msg];
}

function prompt(key) {
  let message = messages(LANGUAGE, key);
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

function getNumber(enterNumMessage) {
  prompt(enterNumMessage);
  let number = readline.question();

  while (invalidNumber(number)) {
    prompt("incorrectNumber");
    number = readline.question();
  }

  return number;
}

function getOperation() {
  prompt("operation");
  let operation = readline.question();

  while (!['1', '2', '3', '4'].includes(operation)) {
    prompt("invalidOperator");
    operation = readline.question();
  }

  return operation;
}

function performCalculation(operation, number1, number2) {
  let result;
  switch (operation) {
    case "1":
      result = Number(number1) + Number(number2);
      break;
    case "2":
      result = Number(number1) - Number(number2);
      break;
    case "3":
      result = Number(number1) * Number(number2);
      break;
    case "4":
      result = Number(number1) / Number(number2);
      break;
  }

  if (result === Infinity || -Infinity) {
    result = "Sorry, the calculation of these numbers can't be done."
  }
  return result;
}

function performNewCalculation() {
  prompt("anotherOperation");
  let answer = readline.question();

  if (LANGUAGE === 'en') {
    while (answer.toLowerCase() !== "yes" && answer.toLowerCase() !== "no" && answer.toLowerCase() !== 'y' && answer.toLowerCase() !== 'n') {
      prompt("yesOrNo");
      answer = readline.question();
    }
  } else if (LANGUAGE === 'it') {
    while (answer[0].toLowerCase() !== 's' && answer[0].toLowerCase() !== 'n') {
      prompt("yesOrNo");
      answer = readline.question();
    }
  }

  return answer;
}

while (true) {
  let number1 = getNumber("firstNumber");

  let number2 = getNumber("secondNumber");
  let operation = getOperation();

  let output = performCalculation(operation, number1, number2);
  console.log("=>" + output)
  let calculateAgain = performNewCalculation();

  if (calculateAgain[0].toLowerCase() === 'n') break;
}
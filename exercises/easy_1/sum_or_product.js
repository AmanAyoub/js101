function computeSum(num) {
  let result = 0;

  for (let iterator = 1; iterator < num; iterator++) {
    result += iterator;
  }

  return result;
}

function computeProduct(num) {
  let result = 1;

  for (let iterator = 1; iterator < num; iterator++) {
    result *= iterator;
  }

  return result;
}

function invalidChoice(choice) {
  return (choice[0].toLowerCase() !== "s") && (choice[0].toLowerCase() !== "p");
}

function invalidNumber(num) {
  return (num <= 0);
}

const readline = require("readline-sync");

while (true) {
  // Ask for an integer number:
  console.log("Please enter an integer greater than 0:");
  let intNumber = parseInt(readline.prompt());

  while (invalidNumber(intNumber)) {
    console.log("please enter an integer greater than 0:");
    intNumber = parseInt(readline.prompt());
  }

  // Ask for operation to perform:
  console.log('Enter "s" to compute the sum, or "p" to compute the product.');
  let operation = readline.prompt();

  while (invalidChoice(operation)) {
    console.log("Choose: s/p");
    operation = readline.prompt();
  }

  // Compute and display the result:
  if (operation[0].toLowerCase() === 's') {
    let sum = computeSum(intNumber);
    console.log(`The sum of the integers between 1 and ${intNumber} is ${sum}.`);
  } else {
    let product = computeProduct(intNumber);
    console.log(`The product of the integers between 1 and ${intNumber} is ${product}.`);
  }

  // Ask for another operation:
  console.log("Would you like to perform another operation? (y/n)");
  let computeAgain = readline.prompt();

  while (computeAgain[0].toLowerCase() !== "y" && computeAgain[0].toLowerCase() !== "n") {
    console.log("Choose: y/n");
    computeAgain = readline.prompt();
  }

  // Terminate the loop:
  if (computeAgain[0].toLowerCase() === "n") break;
}
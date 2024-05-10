/*
Write a program that prompts the user for two positive integers,
and then prints the results of the following operations on those two numbers:
addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.
*/

let readline = require("readline-sync");

console.log("Enter the first integer:");
let firstNumber = parseInt(readline.question());

console.log("Enter the second integer:");
let secondNumber = parseInt(readline.question());

console.log(`==> ${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`==> ${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`==> ${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`==> ${firstNumber} / ${secondNumber} = ${firstNumber / secondNumber}`);
console.log(`==> ${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(`==> ${firstNumber} ** ${secondNumber} = ${firstNumber ** secondNumber}`);
// Build a program that logs when the user will retire
// and how many more years the user has to work until retirement.

let readline = require("readline-sync");

let age = Number(readline.question("What is your age? "));
let retirementAge = Number(readline.question("At what age would you like to retire?"));

console.log(`It's 2024. You will retire in ${(retirementAge - age) + 2024}.`);
console.log(`You have only ${retirementAge - age} years of work to go!`);
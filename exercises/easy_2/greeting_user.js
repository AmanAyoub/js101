/*
Write a program that will ask for user's name.
The program will then greet the user.
If the user writes "name!" then the computer yells back to the user.
*/

let readline = require("readline-sync");

console.log("What is your name?");
let name = readline.question();

let lastCharacter = name.length - 1;

if (name[lastCharacter] === '!') {
  name = name.replace('!', '')
  console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${name}.`);
}
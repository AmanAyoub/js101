/*
Create a simple madlib program that prompts for a noun, a verb, an adverb,
and an adjective, and injects them into a story that you create.
*/

let readline = require("readline-sync");

console.log("Enter a noun:");
let noun = readline.question();

console.log("Enter a verb:");
let verb = readline.question();

console.log("Enter an adjective:");
let adjective = readline.question();

console.log("Enter an adverb:");
let adverb = readline.question();

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
`);

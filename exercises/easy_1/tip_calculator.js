const readline = require("readline-sync");

console.log("What is the bill?");
let billAmount = Number(readline.prompt());

console.log("What is the tip percentage?");
let tipPercentage = Number(readline.prompt());

let tip = (tipPercentage / 100) * billAmount;
let total = tip + billAmount;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);

// The toFixed() method rounds the string to specified number of decimals.
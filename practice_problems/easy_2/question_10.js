// Question:
// Write a one-line expression to count the number of lower-case t characters in each of the following strings:
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

// Solution:
statement1.split('').filter(character => character === 't').length; // 2
statement2.split('').filter(character => character === 't').length; // 0
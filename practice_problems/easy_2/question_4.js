// Question:
// Starting with the string:

let famousWords = "seven years ago...";
// show two different ways to put the expected "Four score and " in front of it.

// Solution:
// using "+" operator:
famousWords = "Four score and " + famousWords;
// Logs: 'Four score and seven years ago...'

famousWords = "seven years ago...";

// using concat() method:
famousWords = "Four score and ".concat(famousWords);
// Logs: 'Four score and seven years ago...'
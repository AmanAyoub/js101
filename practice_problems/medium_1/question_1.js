// Question:
// Write a program that outputs The Flintstones Rock! 10 times, with each line indented 1 space to the right of the line above it.
// The output should start out like this:

// The Flintstones Rock!
//  The Flintstones Rock!
//   The Flintstones Rock!
//    The Flintstones Rock!
//     ...

// Solution:

let flintstones = "The Flinstones Rock!";

for (let spaces = ''; spaces.length < 10; spaces += ' ') {
  console.log(`${spaces} ${flintstones}`);
}
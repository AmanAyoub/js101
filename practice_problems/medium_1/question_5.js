// Question: 
// What will the following two lines of code output?

console.log(0.3 + 0.6);
console.log(0.3 + 0.6 === 0.9);

// Solution:
// My answer: This will log 0.9 and the true.

// Solution:
// Most floating point representations used on computers lack a certain amount of precision,
// and that can yield unexpected results like these. In this case, the output was:

// 0.8999999999999999
// false
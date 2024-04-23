// Question: 
// What is the output of the following code?
let answer = 42;

function messWithIt(someNumber) {
  return (someNumber += 8);
}

let newAnswer = messWithIt(answer);

console.log(answer - 8);

// Solution:
// This logs 34
// The function `messWithIt()` takes a primitve value and this acts as pass by value
// Anything we do inside the function doesn't affect the global variable `answer`
// So the operation on line 11 looks like `42 - 8` => 34
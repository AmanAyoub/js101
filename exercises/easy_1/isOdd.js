// Write a function that checks if the absolute value of an integer is odd.

function isOdd(number) {
  return Boolean(number % 2);
}

console.log(isOdd(5)); // true
console.log(isOdd(6)); // false
console.log(isOdd(-7)); // true

/*
The function isOdd checks if a number is odd by returning
true if the number modulo 2 is not equal to 0, and false otherwise.
*/
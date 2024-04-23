// Question: 
// What do you think the following code will output?
let nanArray = [NaN];

console.log(nanArray[0] === NaN);

// Solution:
// The above code logs false, JS doesn't let us to use `==` or `===` to determine whether a value is NaN.
// NaN is only the return value of converting strings to numbers operations that can't be done.

// To check whether a value is NaN we can use the Math.isNaN() method:
console.log(Math.isNaN(nanArray[0])); // true
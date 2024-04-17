// Question:
// Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

// Bonus:
let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

/* Solution:
First code snippet won't raise an error.

Line 10 will return `undefined` since element indexed 4 in the array is empty.
*/
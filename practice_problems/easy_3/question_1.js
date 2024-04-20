// Question:
// Write three different ways to remove all of the elements from the following array:
let numbers = [1, 2, 3, 4];

// Solution:
// using shift() method:
while (numbers.length) {
  numbers.shift()
}
console.log(numbers); // []

numbers = [1, 2, 3, 4];

// using pop() method:
while (numbers.length) {
  numbers.pop();
}
console.log(numbers); // []

numbers = [1, 2, 3 , 4];

// using splice() method:
numbers.splice(0, numbers.length);
console.log(numbers); // []

numbers = [1, 2, 3 , 4];

// changing the array length to 0:
numbers.length = 0;
console.log(numbers); // []
// Question:
// What does the last line in the following code output?
let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

// Solution:
// The line 8 will log the object: { first: [1, 2]}

// On line 4, we assign `numArray` to the value of "first" property in the object which is an array of one element.
// The `numArray` doesn't reference the array directly instead it contains the address of where the memory is stored.
// When we use push() method on line 5 to add `2` to the array referenced by `numArray`, this mutates the original array.
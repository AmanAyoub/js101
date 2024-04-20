// Question:
// Examine the following code carefully.
// Can you identify all of the variables, primitive values, and objects that exist when this code executes?
let arr = [1, 2, 3];
let newArr = arr;

const num = arr[0];
let newNum = num;

function double(num) {
  return num * 2;
}

double(newNum);

// Solution:
// variables:
// - `arr` declared on line 4
// - `newArr` declared on line 5
// - `num` declared on line 7
// - `newNum` declared on line 8
// - `double()` function declared on line 10
// - `num` the parameter of `double()` function

// primitive values:
// `1`, `2`, and `3` the elements of array referenced by `arr` on line 1
// `1` the value of `num` on line 7
// `0` accessing the zero index of array referenced by `arr` on line 7
// `1` value of `newNum` on line 8
// `1` the value of `num` parameter inside the `double()` function
// `2` the right side operand of `*` operator on line 11
// `2` the return value of `double(newNum)` function invocation on line 14

// object:
// the array: [1, 2, 3] referenced by `arr`
// `double()` function
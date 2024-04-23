// Question:
// What will the following code output?
let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

// Solution:
// My answer:
// This logs: [{ first: "value1" }, { second: "value2" }, 3, 4, 5]

/*
- `arr1` is initialized to an array
- `arr2` is assigned to the return value of `arr1.slice()`
The slice method returns a copy of the array referenced by `arr1`, so now both `arr1` and `arr2`
reference different arrays in different memory locations.

Mutating the array referenced by `arr2` doesn't affect the array referenced by `arr1`.
That's why when we log the `arr1` we get the initial value of `arr1` which is: `[{ first: "value1" }, { second: "value2" }, 3, 4, 5]`.
*/

// Solution:
// The output will be:
// [{ first: 42 }, { second: "value2" }, 3, 4, 5];
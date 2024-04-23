// Question:
// What will the following code output?
let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

// Solution:
// This will log the string 'hello there'.

/*
When line 2 runs both `str1` and `str2` has the same values but in different memory locations.
Reassigning doesn't affect the other since they're in different memory locations and are independent.
*/
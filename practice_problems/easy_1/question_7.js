// Question:
// Determine whether the name Dino appears in the strings below -- check each string separately:
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

// Solution:
// We can use the `includes()` method to check whether a contains a specified substring:
console.log(str1.includes('Dino')); // Logs: false
console.log(str2.includes('Dino')); // Logs: true
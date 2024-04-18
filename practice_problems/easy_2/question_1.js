// Question:
// Given a string, return a new string that replaces every occurrence of the word "important" with "urgent":
let advice = "Few things in life are as important as house training your pet dinosaur.";

// Solution:
// replaceAll() method replaces every occurence of pattern with a specific string:
let modifiedAdvice = advice.replaceAll('important', 'urgent');

console.log(modifiedAdvice);
// Logs: 'Few things in life are as urgent as house training your pet dinosaur.'
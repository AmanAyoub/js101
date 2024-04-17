// Question:
// Using the following string, create a new string that contains all lowercase
// letters except for the first character, which should be capitalized.
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

// Solution:
let newStr = munstersDescription[0].toUpperCase() +
  munstersDescription.substring(1).toLowerCase();

console.log(newStr); // Logs: The munsters are creepy and spooky.
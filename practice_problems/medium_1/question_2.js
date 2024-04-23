// Question: 
// Starting with the string:
let munstersDescription = "The Munsters are creepy and spooky.";

// Return a new string that swaps the case of all of the letters:
// `tHE mUNSTERS ARE CREEPY AND SPOOKY.`;

// Solution;

munstersDescription = 
  munstersDescription
    .split('')
    .map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    }
    ).join('');

console.log(munstersDescription); // tHE mUNSTERS ARE CREEPY AND SPOOKY.
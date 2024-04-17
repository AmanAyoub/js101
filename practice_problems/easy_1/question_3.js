// Question: 
// Determine whether the following object of people and their age contains an entry for 'Spot':
let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

// Solution:
// Object.hasOwnProperty() method returns true if a specified property is within an object, false otherwise.
ages.hasOwnProperty('Spot'); // returns: false
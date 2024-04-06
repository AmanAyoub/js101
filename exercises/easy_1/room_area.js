const readline = require("readline-sync");

console.log("Enter the length of the room in meters:");
let lengthInMeter = Number(readline.prompt());

console.log("Enter the width of the room in meters:");
let widthInMeter = Number(readline.prompt());

let roomInMeters = lengthInMeter * widthInMeter;
let roomInFeets = roomInMeters * 10.7639;

console.log(`The area of the room is ${roomInMeters.toFixed(2)} square meters (${roomInFeets.toFixed(2)} square feet).`);

// On lines 4 & 7, we used the Number() function to convert the input to number.
// On line 12, the toFixed() method rounds the string to a specified number of decimals.
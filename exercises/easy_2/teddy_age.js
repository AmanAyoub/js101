// Build a program that randomly generates Teddy's age, and logs it to the console.
// Have the age be a random number between 20 and 120 (inclusive).

function randomBetween(min, max) {
  if (min > max) {
    min = max;
    max = min;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(randomBetween(120, 20));
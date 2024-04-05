// Log all even numbers from 1 to 99, with each number on a separate line.

// Using a for loop:
for (let number = 1; number <= 99; number++) {
  if (number % 2 === 0) {
    console.log(number);
  }
}

// Using a while loop:
let num = 1;
while (num <= 99) {
  if (num % 2 === 0) {
    console.log(num);
  }
  num++;
}
// Question:
// Create an array from this object that contains only two elements: Barney's name and Barney's number:
let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

// Solution:
// using for...in loop:
let barney = [];

for (let prop in flintstones) {
  if (prop === 'Barney') {
    barney.push(prop, flintstones[prop]);
  }

}

console.log(barney); // Logs: ['Barney', 2]

// using entries() method:
barney = Object.entries(flintstones).filter(array => array[0] === 'Barney').shift();
console.log(barney); // Logs: [ 'Barney', 2 ]
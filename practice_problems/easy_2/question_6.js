// Question:
// Create a new array that contains all of the below values, but in an un-nested format: 
let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

// console.log(flintstones); // ["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

// Solution:
let flintstonesCopy = [];

flintstones.forEach(nestedArr => {
  if (typeof nestedArr === 'string'){
    flintstonesCopy.push(nestedArr)
  } else {
    flintstonesCopy.push(...nestedArr);
  }
});

// using flat() method:
let newFlintstones = flintstones.flat();
console.log(newFlintstones);
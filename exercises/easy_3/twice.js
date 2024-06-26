/*
Write a function that returns the number provided as an argument multiplied by two, 
unless the argument is a double number; otherwise, return the double number as-is.
*/

function twice(number) {
  let str = String(number);
  if (str.slice(0, str.length / 2) !== str.slice(str.length / 2)) return number * 2;
  
  return number
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
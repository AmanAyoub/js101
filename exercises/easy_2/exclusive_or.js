// write a function named xor that takes two arguments, 
// and returns true if exactly one of its arguments is truthy, false otherwise.

function xor(value1, value2) {
  if (value1 && value2) return false;
  if (value1 || value2) return true;

  return false;
}

console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true

console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true
console.log(xor(0, false) === false);     // true
console.log(xor(0, 0) === false);         // true
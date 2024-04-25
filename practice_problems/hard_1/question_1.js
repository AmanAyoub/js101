// Question:
// Will the following functions return the same results?
function first() {
  return {
    prop1: "hi there",
  };
}

function second() {
  return
  {
    prop1: "hi there";
  }
}

console.log(first());
console.log(second());

// Solution:
// No, these functions return different values, `first()` function returns the object: `{prop1: 'hi there'}`.
// While the `second()` function returns `undefined`.

// Why? Because on line 10 we haven't used a semicolon, so the JS engine will insert a semicolon implicitly,
// that causes the function to terminate and return `undefine`.
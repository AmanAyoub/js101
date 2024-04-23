function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
// What will the following function invocation return?

bar(foo());

// Solution:
// Line 10 the bar() function invocation return 'no'.

// `foo()` function always returns 'yes', and that return value is passed to the function bar on line 10.
// Inside the bar() function the `param` now contains 'yes', on line 6 we check whether `param` is equal to 'no',
// using ternary operator. Since `param` contains 'yes' that becomes false, so now the return value is "no".
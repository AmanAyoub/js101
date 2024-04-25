// Question:
// Can you identify all of the variables, primitive values, and objects in the following code?
function boo(scare) {
  let myBoo = scare.toUpperCase() + "!!!";
  console.log(myBoo);
}

const halloweenCollection = {
  greet: "Happy Halloween",
  scare: "Boo",
  wish: "May all your pumpkins be glowing",
};

let myBoo = boo(halloweenCollection["greet"]);

// Solution:
/*
variables:
- `boo` function declared on line 3
- `scare` parameter of `boo()` function
- `myBoo` local variable declared on line 4
- `halloweenCollection` declared on line 8
- `myBoo` global variable declared on line 14

primitive values:
- `'greet'` property of object referenced by `halloweenCollection`
- `'Happy Halloween'` the value of `halloweenCollection.greet`
- `'scare'` property of object referenced by `halloweenCollection`
- `'Boo'` the value of `halloweenCollection.scare`
- ''wish'` property of object referenced by `halloweenCollection`
- `'May all your pumpkins be glowing'` the value of `halloweenCollection`
- `'greet'` on line 14
- `'Happy Halloween'` the value of `scare` parameter inside the boo() function
- `'!!!'` on line 4
- `'HAPPY HALLOWEEN!!!'` the value of local variable myBoo on line 4
- `undefined` the value of global variable myBoo on line 14
- `HAPPY HALLOWEEN` the return value of `scare.toUpperCase()` on line 4
- `'HAPPY HALLOWEEN!!!'` the string passed to `console.log()` method on line 5
// objects:
- `boo()` function
- the object referenced by `halloweenCollection` on line 8
*/
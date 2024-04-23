// Question:
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });

  console.log(vvval);
}

messWithDemographics(munsters);

// Did the family's data get ransacked? Why or why not?

// Solution:
// This will log the mutated object, the function `messWithDemographics()` does change the object referenced by munsters.
/*
On line 10, Object.values(demoObject) returns an array of 5 elements that each contains a nested object.
The objects are not stored directly inside the array, instead they're pointers or memory addresses are stored.
Since the array elements references the original object, When we use the forEach() method to modify the nested objects
it also affects the original object referenced by munsters.
This mutation occurs when Spot invokes the function `messWithDemographics()`.
*/
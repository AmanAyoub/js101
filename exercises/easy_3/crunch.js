/*
Write a function that takes a string argument and returns a new string that contains the value of
the original string with all consecutive duplicate characters collapsed into a single character.
*/

function crunch(string) {
  let characters = string.split("");
  let crunchedStr = "";

  for (let index = 0; index < characters.length; index++) {
    const element = characters[index];

    if (element === crunchedStr[crunchedStr.length - 1]) continue;
    crunchedStr += element;
  }

  return crunchedStr;
}


console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));                           // ""
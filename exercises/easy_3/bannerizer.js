// Write a function that will take a short line of text, and write it to the console log within a box.

function logInBox(string) {
  let firstLine = "+-";
  let secondLine = "| ";
  let thirdLine = "| " + string + " |";
  let fourthLine = "| ";
  let fifthLine = "+-";

  for (let counter = 0; counter < string.length; counter++) {
    firstLine += "-";
    secondLine += " ";
    fourthLine += " ";
    fifthLine += "-";
  }

  firstLine += "-+";
  secondLine += " |";
  fourthLine += " |";
  fifthLine += " +";

  console.log(`${firstLine}\n${secondLine}\n${thirdLine}\n${fourthLine}\n${fifthLine}`);
}

logInBox("Hello world!");
/* Logs:
+--------------+
|              |
| Hello world! |
|              |
+------------- +
*/
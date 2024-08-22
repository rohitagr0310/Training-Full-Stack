const prompt = require("prompt-sync")();

const input = prompt("Enter a number: ");

const number = parseFloat(input);

if (number > 0) {
  console.log("The number is positive");
} else if (number < 0) {
  console.log("The number is negative");
} else if (number == 0) {
  console.log("The number is zero");
} else {
  console.log("Invalid Number");
}

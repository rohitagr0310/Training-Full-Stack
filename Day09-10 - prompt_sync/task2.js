const prompt = require("prompt-sync")();

const input = prompt("Enter your age: ");

const age = parseFloat(input);

if (age >= 18) {
  console.log("You are eligible to vote.");
} else if (age < 18 && age > 0) {
  console.log("You are not eligible to vote.");
} else {
  console.log("Invalid input.");
}

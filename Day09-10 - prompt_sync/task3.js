const prompt = require("prompt-sync")();

const input = prompt("Enter a number: ");

const number = parseInt(input);

if (number % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}

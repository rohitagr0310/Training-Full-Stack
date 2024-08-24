const prompt = require("prompt-sync")();

const num1 = parseFloat(prompt("Enter the first number: "));
const num2 = parseFloat(prompt("Enter the second number: "));
const operator = prompt("Enter an operator (+, -, *, /): ");

let result;

if (operator === "+") {
  result = num1 + num2;
  console.log(`The result is: ${result}`);
} else if (operator === "-") {
  result = num1 - num2;
  console.log(`The result is: ${result}`);
} else if (operator === "*") {
  result = num1 * num2;
  console.log(`The result is: ${result}`);
} else if (operator === "/") {
  if (num2 !== 0) {
    result = num1 / num2;
    console.log(`The result is: ${result}`);
  } else {
    console.log("Division by zero is not allowed.");
  }
} else {
  console.log("Invalid input.");
}

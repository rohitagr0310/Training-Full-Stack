const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter a number: "));

const option = parseInt(
  prompt("Do you want up or down - \n1 for up\n2 for down")
);

function pattern_up(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += "* ";
    }
    console.log(row);
  }
}

function pattern_down(n) {
  for (let i = n; i <= 1; i--) {
    let row = "";
    for (let j = i; j <= 1; j--) {
      row += "* ";
    }
    console.log(row);
  }
}

switch (option) {
  case 1:
    pattern_up(number);
    break;

  case 2:
    pattern_down(number);
    break;
  default:
    console.log("Invalid option");
    break;
}

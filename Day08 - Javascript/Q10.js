// Function that returns "Weekend" if the number is 6 (Saturday) or 7 (Sunday),
// and "Weekday" if the number is between 1 and 5, using a switch statement
function getDayType(day) {
  switch (day) {
    case 6:
    case 7:
      return "Weekend";
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Weekday";
    default:
      return "Invalid day";
  }
}

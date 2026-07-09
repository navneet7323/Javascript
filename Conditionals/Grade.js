let marks = 39;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 80) {
  console.log("Grade B");
} else if (marks >= 70 || marks >= 60) {
  console.log("Grade C");
} else if (marks >= 59 || marks >= 50) {
  console.log("Grade D");
} else if (marks >= 49 || marks >= 40) {
  console.log("Grade E");
} else {
  console.log("Fail");
}

let day = 10;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Webnesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid Day");
}

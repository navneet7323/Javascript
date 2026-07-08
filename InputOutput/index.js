// alert("message");

// let name = "NAVNEET";

// alert("Hello" + name);

// let userName = prompt("Enter your name");

// alert("Hello " + userName);

// let age = prompt("Enter your age");
// console.log(typeof age);

// let result = confirm("Do You want to continue?");

// console.log(result);

// let deleteAccount = confirm("Delete account?");

// if (deleteAccount) {
//   alert("Account deleted");
// } else {
//   alert("Cancelled");
// }

let randomNumber = Math.floor(Math.random() * 10) + 1;

let userGuess = Number(prompt("Guess a number between 1 to 10"));

if (userGuess === randomNumber) {
  alert("🎉 Correct Guess!");
} else {
  alert("Wrong Guess! Number was " + randomNumber);
}

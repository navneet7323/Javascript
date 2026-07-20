console.log("Start");

let result = 10 / 0;

console.log(a);

console.log("End");

console.log("Start");

try {
  console.log(a);
} catch (err) {
  console.log("A is not defined");
}

console.log("End");

try {
  let age = 12;

  if (age < 18) {
    throw new Error("You must be 18+");
  }
} catch (err) {
  console.log(err.message);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }

  return a / b;
}

try {
  console.log(divide(10, 2));
} catch (err) {
  console.log(err.message);
}

try {
  let result = 10 / 0;
  console.log(result);

  console.log(user.name);
} catch (error) {
  console.log("An error occurred:", error.message);
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 1));
} catch (error) {
  console.log(error.message);
}

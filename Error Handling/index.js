console.lo;
g(a);

// /without Error Handling

console.log("Start");

let result = 10 / 0;

console.log(a);

console.log("End");

// with error handling

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

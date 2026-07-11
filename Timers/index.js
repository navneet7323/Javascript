console.log("Start");

setTimeout(() => {
  console.log("Hello after 3 Second");
}, 3000);

console.log("End");
console.log("\n");

function greet() {
  console.log("Welcome");
}
console.log("\n");
setTimeout(greet, 3000);

function hello(name) {
  console.log("hello", name);
}

setTimeout(hello, 2000, "Navneet");

let timer = setTimeout(() => {
  console.log("this won't run");
}, 5000);

clearTimeout(timer);

let count = 5;

function countdown() {
  console.log(count);

  count--;

  if (count >= 0) {
    setTimeout(countdown, 1000);
  }
}

countdown();

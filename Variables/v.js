let name = "Navneet";
let price = 22;
console.log(name);
console.log(price);

var n = "John";
console.log(n);

var age = 20;
var age = 25;
console.log(age);

let score = 10;
score = 20;
console.log(score);

const pi = 3.14;
console.log(pi);

//naming rule
let userName;
let age1;
let $price;
let _value;

// global  scope

let greet = "ram";
function hello() {
  console.log(greet);
}

hello();

//Function scope

function test() {
  let item = "mango";

  console.log(item);
}

test();

// console.log(item); // cannot acess

//Block scope
{
  let city = "banglore";

  console.log(city);
}

//console.log(city); // cannot acess



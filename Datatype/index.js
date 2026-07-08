let name = "Navneet";
let age = 22;
let isStudent = true;

console.log(typeof name);
console.log(typeof age);
console.log(typeof isStudent);
console.log(`my name is ${name} and age is ${age}`);

let canVote = age >= 18;
console.log(canVote);

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1);
console.log(id2);
console.log(id1 === id2);

let bigNumber = 123456789012345678901234567890n;

console.log(bigNumber);
console.log(typeof bigNumber);

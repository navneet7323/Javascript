// function greet(name) {
//   return "hello" + " " + name;
// }

// function person(callgreet) {
//   return callgreet("Navneet");
// }

// console.log(person(greet));
// const numbers = [10, 20, 30, 40, 50];

// for (let i = 0; i <= numbers.length - 1; i++) {
//   console.log(numbers[i]);
// }

// console.log("\n");

// let numb = numbers.map((num) => {
//   return num * 2;
// });

// console.log(numb);

// const names = ["navneet", "riya", "rahul"];

// const upper = names.map((name) => name.toUpperCase());

// console.log(upper);

// let fruits = ["Mango", "Banana", "Litchi", "Gauva"];
// let operation = fruits.map((fruit) => fruit.toString());
// console.log(operation);

// let price = [1, 2, 3, 4, 5, 6, 7, 8];
// let even = price.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(even);

const numbers = [3, 9, 2, 15, 7];

// const max = numbers.reduce((acc, current) => {
//   return current > acc ? current : acc;
// });

// console.log(max);

// let search = numbers.find((num) => num > 5);

// console.log(search);

// let oneCon = numbers.some((num) => num > 7);
// console.log(oneCon);

// let allCon = numbers.every((num) => num > 0);
// console.log(allCon);// check all the condition is ture

// numbers.forEach(function (num, i) {
//   console.log(num * 2, i);
// });

const employees = [
  { id: 1, name: "Navneet", salary: 50000, active: true },
  { id: 2, name: "Riya", salary: 60000, active: false },
  { id: 3, name: "Rahul", salary: 70000, active: true },
];

let names = employees.map((emp) => emp.name);
console.log(names);

let which_active = employees.filter((emp) => emp.active);
console.log(which_active);

const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

console.log(totalSalary);

const search = employees.find((emp) => emp.id === 2);

console.log(search);

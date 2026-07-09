let arr = [11, 22, 33, 44, 55, 66, 77];
let arr2 = arr.push(99, 100);
console.log(arr);

let num = [2, 3, 4, 5];
let num2 = num.pop();
console.log(num);

let val = [6, 7, 8, 9, 0];
let val2 = val.shift();
console.log(val);

let fruits = ["apple", "kiwi", "mango"];

let newFruits = fruits.unshift("Banana");

console.log(fruits);

let item = ["phone", "books", "table", "laptop"];
let newItem = item.slice(0, 2);
console.log(newItem);
console.log(item);

let food = ["rice", "daal", "sabji"];
let newFood = food.splice(0, 2);
console.log(newFood);
console.log(food);

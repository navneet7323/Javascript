function greet() {
  console.log("hello");
}
greet();

let add = function (a, b) {
  return a + b;
};

let sum = add(2, 5);
console.log(sum);

let mul = (x, y) => x * y;
let result = mul(4, 3);
console.log(result);

function guest(name = "Guest") {
  console.log("Hello " + name);
}
guest();
guest("Navneet");



function numbers(...nums){
  console.log(nums)
}

numbers(1,2,3,4,5,6,7,8);
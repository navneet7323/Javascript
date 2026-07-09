let name = "NAVNEET";

let age = 22;

let city = "Banglore";

console.log(name.length);
console.log(age.toString().length);
console.log(name.indexOf("EE"));

let product = "Laptop";

let val = product.slice(0, 2);
let val2 = product.slice(-2);
console.log(val);
console.log(val2);

let text = "LearnReact";

let textVal = text.substring(0, 5);
let textVal2 = text.substring(-1);
let textVal3 = text.substring(-5);
console.log(textVal);
console.log(textVal2);
console.log(textVal3);

let skill = "HTML";

let NewSkill = skill.replace("HTML", "CSS");

console.log(skill);
console.log(NewSkill);

let bro = "     Golu  ji     ";
console.log(bro.trim());

let FullName = "Navneet Kumar Singh";

console.log(FullName.split());
console.log(FullName.split().length);
console.log(FullName.length);

let lang = "      JavaScript       ";
console.log(lang.includes("Script"));
console.log(lang.includes("Java"));

let result = lang.trim().toUpperCase().slice(0, 4);

console.log(result);

let knlg = "HTML,CSS,JS,REACT";

let arr = knlg.split(",");

console.log(arr);

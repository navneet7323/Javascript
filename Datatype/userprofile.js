let name = "Navneet";

let age = 22;

let city = "Bangalore";

let married = false;

console.log("User Profile");

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`City: ${city}`);
console.log(`Married: ${married}`);

document.getElementById("profile").innerHTML = `

<h2>Name: ${name}</h2>

<p>Age: ${age}</p>

<p>City: ${city}</p>

<p>Married: ${married}</p>

`;

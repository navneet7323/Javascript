localStorage.setItem("Username", "Navneet");

let user = localStorage.getItem("Username");

console.log(user);

localStorage.removeItem("Username");

const userProfile = { name: "Navneet", age: 25 };

localStorage.setItem("user", JSON.stringify(userProfile));

let getData = localStorage.getItem("user");

let finalUser = JSON.parse(getData);

console.log(finalUser);

const student = {
  name: "abcd",
  rollNo: 1234,
  class: 6,
  section: "A",
};

localStorage.setItem("details", JSON.stringify(student));

let getDetails = localStorage.getItem("details");

let final = JSON.parse(getDetails);

console.log(final);

const family = {
  brother: "Avinandan",
  mother: "renu",
  father: "Sanjay",
  me: "Navneet",
};

localStorage.setItem("fd", JSON.stringify(family));

let familyData = localStorage.getItem("fd");

let finalData = JSON.parse(familyData);

console.log(finalData);





const form = document.getElementById("userForm");
const username = document.getElementById("username");
const useremail = document.getElementById("useremail");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const user = {
    name: username.value,
    email: useremail.value,
  };

  localStorage.setItem("user", JSON.stringify(user));

  alert("Data Saved Successfully!");

  form.reset();
});

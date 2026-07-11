const myFrom = document.getElementById("myFrom");

const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

myFrom.addEventListener("submit", (event) => {
  event.preventDefault();

  let isValid = true;

  // Name Validation
  if (name.value.trim() === "") {
    nameError.textContent = "Name is required";
    name.classList.add("error");
    name.classList.remove("success");
    isValid = false;
  } else {
    nameError.textContent = "";
    name.classList.remove("error");
    name.classList.add("success");
  }

  // Email Validation
  if (email.value.trim() === "") {
    emailError.textContent = "Email is required";
    email.classList.add("error");
    email.classList.remove("success");
    isValid = false;
  } else {
    emailError.textContent = "";
    email.classList.remove("error");
    email.classList.add("success");
  }

  // Password Validation
  if (password.value.trim() === "") {
    passwordError.textContent = "Password is required";
    password.classList.add("error");
    password.classList.remove("success");
    isValid = false;
  } else {
    passwordError.textContent = "";
    password.classList.remove("error");
    password.classList.add("success");
  }

  if (isValid) {
    alert("Form submitted successfully!");

    myFrom.reset();

    name.classList.remove("success");
    email.classList.remove("success");
    password.classList.remove("success");
  }
});

const gender = document.querySelector('input[name="gender"]:checked');

console.log(gender.value);

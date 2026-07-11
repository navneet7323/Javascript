const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const city = document.getElementById("city").value;
  const agree = document.getElementById("agree").checked;

  if (name === "") {
    alert("Enter Name");
    return;
  }

  if (!email.includes("@")) {
    alert("Invalid Email");
    return;
  }

  if (password.length < 8) {
    alert("Password must be at least 8 characters");
    return;
  }

  if (!agree) {
    alert("Accept Terms");
    return;
  }

  const user = {
    name,
    email,
    password,
    city,
  };

  console.log(user);

  localStorage.setItem("user", JSON.stringify(user));

  alert("Registration Successful");

  form.reset();
});

localStorage.setItem("name", "Navneet Kumar");

document.getElementById("demo").innerHTML = localStorage.getItem("name");

localStorage.removeItem("name");

function clickcount() {
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 1;
  }
  document.getElementById("demo").innerHTML = localStorage.clickcount;
}
localStorage.clear();

let user = {
  Username: "nk123",
  password: "qwerty",
};

localStorage.setItem("user", JSON.stringify(user));

let getData = localStorage.getItem("user");

let data = JSON.parse(getData);

data.Username = "wertyuio";
localStorage.removeItem("Username");
console.log(data);

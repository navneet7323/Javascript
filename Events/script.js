let heading = document.getElementById("title");
function changeText() {
  heading.innerHTML = "welcome js";
}

let btn = document.getElementById("btn");
btn.onclick = function () {
  alert("hello");
};

let sub = document.getElementById("sub");
sub.addEventListener("click", (e) => {
  alert("buttton CLicked");
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX);
  console.log(e.clientY);
});

let city = document.querySelector("#city");

city.addEventListener("change", function () {
  console.log(city.value);
});

let box = document.querySelector("#box");

box.addEventListener("keydown", function (e) {
  console.log(e.key);
});




let text = document.querySelector("#text");

let count = document.querySelector("#count");

text.addEventListener("input", function () {
  count.innerHTML = text.value.length;
});

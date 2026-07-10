// 1. Changing text
const heading = document.getElementById("title");
function Changetext() {
  heading.innerHTML = "DOM is Easy";
}

// 2. Changing text with HTML tags
const heading1 = document.getElementById("title1");
function hi() {
  heading1.innerHTML = "<i>Welcome</i>";
}

// 3. Changing text using textContent
const heading2 = document.getElementById("title2");
function learn() {
  heading2.textContent = "javaScript";
}

// 4. Styling elements
const box = document.getElementById("box");
const greet = document.getElementById("greet");

greet.style.color = "red";
greet.style.background = "black";
greet.style.fontSize = "70px";

box.classList.add("active");

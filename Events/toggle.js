let btn = document.querySelector("button");
let body = document.querySelector("body");
let currMode = "light";

btn.addEventListener("click", () => {
  if (currMode === "light") {
    body.classList.add("dark");
    body.classList.remove("light");
    currMode = "dark";
  } else {
    currMode = "light";

    body.classList.add("light");
    body.classList.remove("dark");
  }
  console.log(currMode);
});


let para=document.querySelector('p');


para.addEventListener("mouseenter", () => {
  if (currMode === "light") {
    para.classList.add("dark");
    para.classList.remove("light");
    currMode = "dark";
  } else {
    currMode = "light";

    para.classList.add("light");
    para.classList.remove("dark");
  }
  console.log(currMode);
});
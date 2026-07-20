const btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX, evt.clientY);

  console.log("btn1 was clicked");
  let a = 25;
  a++;
  console.log(a);
};

let box = document.querySelector("div");
box.onmouseover = () => {
  console.log("you are inside div");
};

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
  console.log("btn 2 was clicked-handler1");
});

btn2.addEventListener("click", () => {
  console.log("btn 2 was clicked-Handler2");
});

const handler3 = () => {
  console.log("btn 2 was clicked-Handler3");
};
btn2.addEventListener("click", handler3);
btn2.removeEventListener("click", handler3);

btn2.addEventListener("click", () => {
  console.log("btn 2 was clicked-Handler4");
});

const button = document.querySelector("#mybtn");

button.addEventListener(
  "click",
  () => {
    console.log("it will log only once");
  },
  { once: true },
);

let modeBtn = document.getElementById("mode");
let currMode = "light";

modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    document.querySelector("body").style.backgroundColor = "black";
    currMode = "dark";
  } else {
    currMode = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currMode);
});

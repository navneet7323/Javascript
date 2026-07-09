let count = 0;

const h2 = document.getElementById("count");

function increase() {
  count++;
  h2.textContent = count;
}

function decrease() {
  count--;
  h2.textContent = count;
}

function reset() {
  count = 0;
 h2.textContent = count;
}

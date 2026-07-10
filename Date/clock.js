const time = document.getElementById("time");
function digitalClock() {
  let now = new Date();

  let hours = now.getHours();
  let mintues = now.getMinutes();
  let second = now.getSeconds();

  hours = String(hours).padStart(2, "0");
  mintues = String(mintues).padStart(2, "0");
  second = String(second).padStart(2, "0");

  time.innerHTML = ` ${hours}:${mintues}:${second}`;
}
digitalClock();
setInterval(digitalClock, 1000);

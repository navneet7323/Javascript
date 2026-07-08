function btn() {
  let name = document.getElementById("name").value;

  let birthYear = Number(document.getElementById("brithYear").value);

  let currentYear = new Date().getFullYear();

  let year = currentYear - birthYear;
  if (currentYear === 0 || currentYear > birthYear) {
    document.getElementById("result").innerHTML = "Enter valid brith year";
    return;
  }
  document.getElementById("result").innerHTML =
    `name = ${name} and age = ${year}`;
}

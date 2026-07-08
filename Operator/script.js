function calculate(operator) {
  let num1 = Number(document.getElementById("num1").value);

  let num2 = Number(document.getElementById("num2").value);

  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;

    case "-":
      result = num1 - num2;
      break;

    case "*":
      result = num1 * num2;
      break;

    case "/":
      result = num1 / num2;
      break;

    default:
      result = "Invalid Operator";
  }

  document.getElementById("result").innerText = "Result = " + result;
}

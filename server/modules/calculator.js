function calculator(inputs) {
  switch (operators) {
    case "+":
      return InputA + InputB;
      break;

    case "-":
        return InputA - InputB;
      break;

    case "*":
        return InputA * InputB;
      break;

    case "/":
        return InputA / InputB;
      break;
  }
}

module.exports = calculator;

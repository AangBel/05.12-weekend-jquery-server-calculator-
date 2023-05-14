
function calculator(inputA, operators, inputB) {

  console.log(inputA, operators, inputB);
  console.log("calculator is working");

  switch (operators) {
    case "+":
      return Number(inputA) + Number(inputB);
      break;

    case "-":
      return  inputA - inputB;
      break;

    case "*":
      return inputA * inputB;
      break;

    case "/":
      return inputA / inputB;
      break;
  }
}

module.exports = calculator;

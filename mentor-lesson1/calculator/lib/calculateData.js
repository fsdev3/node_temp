const calculate = (op, numbers) => {
  switch (op) {
    case "sum":
      return numbers.reduce((total, number) => total + number);
    case "sub":
      return numbers.reduce((total, number) => total - number);
    case "mult":
      return numbers.reduce((total, number) => total * number);
    case "div":
      return numbers.reduce((total, number) => total / number);
    default:
      "no such operator";
  }
};

module.exports = calculate;

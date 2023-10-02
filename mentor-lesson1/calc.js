// node calc.js sum 1 2 3
// node calc.js sub 100 50 15
// node calc.js mult 1 4 9
// node calc.js div 100 25 2
// console.log(process.argv);

const [operator, ...args] = process.argv.slice(2);
const numbersArr = args.map((number) => Number(number));
// console.log(numbersArr);

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

const result = calculate(operator, numbersArr);
console.log(result);

// const [operator, ...args] = process.argv.slice(2);
// const numbersArr = args.map((number) => Number(number));
// console.log(operator);
// console.log(numbersArr);

// function calculate(op, numbers) {
//   switch (op) {
//     case "sum":
//       return numbers.reduce((total, number) => total + number);
//     case "sub":
//       return numbers.reduce((total, number) => total - number);
//     case "mult":
//       return numbers.reduce((total, number) => total * number);
//     case "div":
//       return numbers.reduce((total, number) => total / number);
//     default:
//       return "unknown operator type";
//   }
// }

// const result = calculate(operator, numbersArr);
// console.log(result);

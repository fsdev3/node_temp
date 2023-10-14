// console.log("hello from Oleg");
// const { calculate, operator, numbersArr } = require("./lib");
// const result = calculate(operator, numbersArr);
// console.log(result);
const objectA = {
  a: 10,
  b: 20,
  city: "London",
  country: "United States",
};
const objectB = objectA;
delete objectA.a;
const userName = "name";
objectA[userName] = "Andy";

// console.log(objectB);

const objOne = {
  city: "London",
  country: "Great Britain",
  greeteng() {
    console.log("Hello!!");
  },
};

const objString = JSON.stringify(objOne);
const objParse = JSON.parse(objString);

// objOne.greeteng();
console.log(objString);
console.log(objParse);

// factorial 5! = 1*2*3*4*5

let fact = function f(n) {
  return n !== 1 ? f(n - 1) * n : n;
};

// fibonacchi 1 1 2 3 5 8 13 21 ...
let fibo = function fibonacchi(n) {
  return n > 2 ? fibonacchi(n - 1) + fibonacchi(n - 2) : 1;
};

function logResultDecorator(func, funcName) {
  return function () {
    const result = func.apply(this, arguments);
    console.log(`Result ${funcName}: ${result}`);
    return result;
  };
}

function countCallDecorator(func, funcName) {
  let count = 0;
  return function () {
    count += 1;
    console.log(`Function ${funcName} was called ${count} times`);
    return func.apply(this, arguments);
  };
}

function timesCallDecorator(func, funcName) {
  return function () {
    const startTime = Date.now();
    const result = func.apply(this, arguments);
    const workedTime = Date.now() - startTime;
    console.log(`Function ${funcName} worked ${workedTime} ms`);
    return result;
  };
}

function cacheDecorator(func) {
  let cache = {};
  return function (n) {
    if (typeof cache[n] === "undefined") {
      cache[n] = func.apply(this, arguments);
    }
    return cache[n];
  };
}

function countDecoratorArguments(func, requiredNumber) {
  return function () {
    let countArgs = arguments.length;
    if (requiredNumber !== countArgs) {
      console.warn("Quantity of arguments not matching required");
      return;
    }
    return func.apply(this, arguments);
  };
}

// fact = logResultDecorator(fact, "factorial");
// fact = cacheDecorator(fact);
// fact = countCallDecorator(fact, "factorial");
// fact = timesCallDecorator(fact, "factorial");
// fact = countDecoratorArguments(fact, 1);
// // fact(6);

// fibo = logResultDecorator(fibo, "fibonacchi");
// fibo = cacheDecorator(fibo);
// fibo = countCallDecorator(fibo, "fibonacchi");
// fibo = timesCallDecorator(fibo, "fibonacchi");
// fibo = countDecoratorArguments(fibo, 1);
// fibo(30);
// fibo(40);
// fibo(40);

const sum = (a, b) => {
  return a + b;
};
// Функция-декоратор для логирования имени вызываемой функции
const logName = (fn) => {
  // Здесь мы возвращаем функцию в теле которой выводим
  // наименование функции-аргумента
  return (...args) => {
    console.log(`Call function "${fn.name}"`);
    return fn(...args);
    // console.log(fn(...args));
  };
};
// Применение декоратора
const wrappedSum = logName(sum);
const result = wrappedSum(2, 3);
// console.log(sum(3, 4));
console.log(result); // 5

const add = (addend1 = 0, addend2 = 0) => addend1 + addend2;

const subtract = (minuend = 0, subtrahend = 0) => minuend - subtrahend;

const sum = (numbers = []) => numbers.reduce((a, b) => a + b, 0);

const multiply = (numbers = []) => numbers.reduce((a, b) => a * b, 1);

const power = (base = 1, exponent = 1) => base ** exponent;

const factorial = (number = 0) => {
  let fact = 1;
  for (let i = number - 1; i > -1; i--) {
    fact *= (number - i);
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

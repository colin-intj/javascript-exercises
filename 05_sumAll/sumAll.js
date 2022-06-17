const sumAll = function(firstNumber, secondNumber) {
  const numbers = [...arguments].sort();

  if (!numbers.every((n) => typeof n === 'number' && n > -1)) {
    return 'ERROR';
  }

  let sum = 0;
  for (let addend = numbers[0]; addend <= numbers[1]; addend++) {
    sum += addend;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;

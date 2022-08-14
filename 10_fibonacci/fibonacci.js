const fibonacci = (n) => {
  if (n < 0) return 'OOPS';
  return ~~(((1 + 5 ** .5) ** n - (1 - 5 ** .5) ** n) / (2 ** n * 5 ** .5));
};

// Do not edit below this line
module.exports = fibonacci;

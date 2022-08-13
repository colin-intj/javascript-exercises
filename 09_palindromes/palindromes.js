const palindromes = (string) => {
  string = string.toLowerCase().replace(/[^a-z]/g, '');
  return string === string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;

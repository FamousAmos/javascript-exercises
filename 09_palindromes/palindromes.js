const palindromes = function (string) {
  filteredString = string.toLowerCase().replace(/[^A-Za-z]/g, "");
  return filteredString.split("").reverse().join("") == filteredString;
};

// Do not edit below this line
module.exports = palindromes;

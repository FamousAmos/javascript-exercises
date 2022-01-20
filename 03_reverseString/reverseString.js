const reverseString = function (str) {
  letters = str.split("");
  result = "";

  for (let i = letters.length - 1; i >= 0; i--) {
    result += letters[i];
  }
  return result;
};

// Do not edit below this line
module.exports = reverseString;

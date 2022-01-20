const removeFromArray = function (arr, ...targets) {
  return arr.filter((val) => !targets.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;

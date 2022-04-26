const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) return str;
  let count = 0;
  let prevChar = str[0];
  let result = "";
  for (let char of str) {
    if (char === prevChar) {
      count++;
      continue;
    }
    result += count === 1 ? prevChar : count + prevChar;
    //if (count === 1) result += prevChar;
    //else result += count +prevChar;
    prevChar = char;
    count = 1;
  }
  //if (count === 1) result += prevChar;
  //  else result += count +prevChar;
  result += count === 1 ? prevChar : count + prevChar;
  return result;
}

module.exports = {
  encodeLine,
};

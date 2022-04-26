const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let count = 0;
  let charsCounted = new Set();
  for (let char of s1) {
    if (charsCounted.has(char)) continue;
    charsCounted.add(char);
    count += Math.min(
      s1.split("").filter((elem) => elem === char).length,
      s2.split("").filter((elem) => elem === char).length
    );
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};

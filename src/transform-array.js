const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw Error("'arr' parameter must be an instance of the Array!");
  let result = [];
  let double = false;
  let discard = false;
  let wasDiscarded = false;
  for (let elem of arr) {
    switch (elem) {
      case "--discard-next":
        discard = true;
        break;
      case "--discard-prev":
        if (result.length !== 0 && !wasDiscarded) result.pop();
        break;
      case "--double-next":
        double = true;
        break;
      case "--double-prev":
        if (result.length !== 0 && !wasDiscarded)
          result.push(result[result.length - 1]);
        break;
      default:
        if (double) {
          result.push(elem);
          double = false;
        }
        if (discard) wasDiscarded = true;
        else result.push(elem);
        discard = false;
    }
  }
  return result;
}

module.exports = {
  transform,
};

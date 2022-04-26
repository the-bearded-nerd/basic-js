const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  //console.log(matrix.length);
  //console.log(matrix[0].length);
  let sum = matrix[0].reduce((prev, curr) => prev + curr, 0);
  console.log(sum);
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i - 1][j] !== 0) sum += matrix[i][j];
    }
  }
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};

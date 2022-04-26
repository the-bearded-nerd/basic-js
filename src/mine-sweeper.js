const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function countMinesNear(y, x, matrix) {
  let count = 0;
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      if (dy === 0 && dx === 0) continue;
      if (!matrix[y + dy]) continue;
      if (matrix[y + dy][x + dx]) count++;
    }
  }
  return count;
}

function minesweeper(matrix) {
  let result = JSON.parse(JSON.stringify(matrix)); //structuredClone(matrix);
  let width = matrix[0].length - 1;
  let height = matrix.length - 1;
  for (let i = 0; i <= height; i++) {
    for (let j = 0; j <= width; j++) {
      result[i][j] = countMinesNear(i, j, matrix);
    }
  }
  return result;
}

module.exports = {
  minesweeper,
};

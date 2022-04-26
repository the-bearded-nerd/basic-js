const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (options === undefined) return str;
  str = String(str);
  let addition = options.hasOwnProperty("addition")
    ? String(options["addition"])
    : "";
  let additionRepeatTimes = options.hasOwnProperty("additionRepeatTimes")
    ? options["additionRepeatTimes"]
    : 1;
  let repeatTimes = options.hasOwnProperty("repeatTimes")
    ? options["repeatTimes"]
    : 1;
  let separator = options.hasOwnProperty("separator")
    ? options["separator"]
    : "+";
  let additionSeparator = options.hasOwnProperty("additionSeparator")
    ? options["additionSeparator"]
    : "|";
  let additionStr = Array(additionRepeatTimes)
    .fill(addition)
    .join(additionSeparator);
  return Array(repeatTimes)
    .fill(str + additionStr)
    .join(separator);
}

module.exports = {
  repeater,
};

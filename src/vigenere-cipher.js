const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct === undefined || direct;
  }
  encrypt(message, key) {
    if (!message || !key) throw Error("Incorrect arguments!");
    let longKey = key;
    let result = "";
    let keyIndex = 0;
    while (longKey.length < message.length) longKey += key;
    for (let i = 0; i < message.length; i++) {
      if (message[i].toUpperCase() >= "A" && message[i].toUpperCase() <= "Z") {
        result += String.fromCharCode(
          ((message[i].toUpperCase().charCodeAt(0) +
            longKey[keyIndex].toUpperCase().charCodeAt(0)) %
            26) +
            "A".charCodeAt(0)
        );
        keyIndex++;
      } else result += message[i];
    }
    return this.direct ? result : result.split("").reverse().join("");
  }
  decrypt(message, key) {
    if (!message || !key) throw Error("Incorrect arguments!");
    let longKey = key;
    let result = "";
    let keyIndex = 0;
    while (longKey.length < message.length) longKey += key;
    for (let i = 0; i < message.length; i++) {
      if (message[i].toUpperCase() >= "A" && message[i].toUpperCase() <= "Z") {
        result += String.fromCharCode(
          (Math.abs(
            message[i].toUpperCase().charCodeAt(0) -
              longKey[keyIndex].toUpperCase().charCodeAt(0) +
              2 * "A".charCodeAt(0)
          ) %
            26) +
            "A".charCodeAt(0)
        );
        keyIndex++;
      } else result += message[i];
    }
    return this.direct ? result : result.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

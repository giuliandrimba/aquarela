var A = require('./letters/A')
var B = require('./letters/B')
var C = require('./letters/C')

exports.A = getPoints(A);
exports.B = getPoints(B);
exports.C = getPoints(C);

function getPoints(letter) {
  var ar = letter.data.split(/[\s\t]/)
  ar.shift()
  return ar;
}

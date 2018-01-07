var A = require('./letters/A')

exports.A = getPoints(A);

function getPoints(letter) {
  var ar = letter.data.split(/[\s\t]/)
  ar.shift()
  return ar;
}

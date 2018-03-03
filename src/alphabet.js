var A = require('./letters/A')
var B = require('./letters/B')
var C = require('./letters/C')
var G = require('./letters/G')
var H = require('./letters/H')
var Q = require('./letters/Q')

exports.A = getPoints(A);
exports.B = getPoints(B);
exports.C = getPoints(C);
exports.G = getPoints(G);
exports.H = getPoints(H);
exports.Q = getPoints(Q);

function getPoints(letter) {
  var ar = letter.data.split(/[\s\t]/)
  ar.shift()
  return ar;
}

var _ = require('underscore');

var all = [];

exports.A = all[0] = getPoints(require('./letters/A'))
exports.B = all[1] = getPoints(require('./letters/B'))
exports.C = all[2] = getPoints(require('./letters/C'))
exports.D = all[3] = getPoints(require('./letters/D'))
exports.E = all[4] = getPoints(require('./letters/E'))
exports.F = all[5] = getPoints(require('./letters/F'))
exports.G = all[6] = getPoints(require('./letters/G'))
exports.H = all[7] = getPoints(require('./letters/H'))
exports.I = all[8] = getPoints(require('./letters/I'))
exports.J = all[9] = getPoints(require('./letters/J'))
exports.K = all[10] = getPoints(require('./letters/K'))
exports.L = all[11] = getPoints(require('./letters/L'))
exports.M = all[12] = getPoints(require('./letters/M'))
exports.N = all[13] = getPoints(require('./letters/N'))
exports.O = all[14] = getPoints(require('./letters/O'))
exports.P = all[15] = getPoints(require('./letters/P'))
exports.Q = all[16] = getPoints(require('./letters/Q'))
exports.R = all[17] = getPoints(require('./letters/R'))
exports.S = all[18] = getPoints(require('./letters/S'))
exports.T = all[19] = getPoints(require('./letters/T'))
exports.U = all[20] = getPoints(require('./letters/U'))
exports.V = all[21] = getPoints(require('./letters/V'))
exports.X = all[22] = getPoints(require('./letters/X'))
exports.Y = all[23] = getPoints(require('./letters/Y'))
exports.W = all[24] = getPoints(require('./letters/W'))
exports.Z = all[25] = getPoints(require('./letters/Z'))

exports.ALL = all

exports.scale = function(scale, letters){
  var result = letters.map((el, i)=>{
    return el * scale;
  })

  return result;
}

function getPoints(letter) {
  var ar = letter.data.split(/[\s\t]/)
  ar.shift()
  return ar;
}


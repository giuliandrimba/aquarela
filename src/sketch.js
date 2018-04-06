var alphabet = require('./alphabet')
var Letter = require('./letter');

var ctx = undefined;
var env = undefined;

var time = undefined;
var current = undefined;

var ALPHABET_LETTERS = alphabet.ALL;
var saved = false;
var letters = [];
var drawnLetters = [];
var TOTAL = ALPHABET_LETTERS.length
var totalDone = 0;

exports.setup = function(_ctx, _env){
  ctx = _ctx;
  env = _env;

  time = Date.now()

  background("rgba(255,255,255,1)");
  
  var x = ctx.canvas.width / 2 - 20;
  var y = ctx.canvas.height - 80;
  // var index = Math.floor(Math.random() * TOTAL);
  var index = 25;
  var letter = new Letter(x, y, alphabet.scale(0.8,ALPHABET_LETTERS[index]), ctx);
  letters.push(letter);
  letter.draw()
  env.save()

  drawnLetters = letters.slice();
}

exports.draw = function() {
  
}

function background(color){
  ctx.fillStyle = color;
  ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}

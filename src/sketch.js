var alphabet = require('./alphabet')
var Letter = require('./letter');

var ctx = undefined;
var env = undefined;

var time = undefined;
var current = undefined;

var ALPHABET_LETTERS = alphabet.ALL;
var saved = false;
var drawnLetters = [];
var TOTAL = ALPHABET_LETTERS.length
var totalDone = 0;

const divisions = 100;

exports.setup = function(_ctx, _env){
  ctx = _ctx;
  env = _env;

  time = Date.now()

  background("rgba(255,255,255,1)");
  
  var letterX = 0 
  var letterY = ctx.canvas.height - 80;
  const height = ctx.canvas.height / divisions;
  for(var i = 0; i < divisions; i++) {
    drawRow(ctx, i, height);
    var letter = new Letter(letterX + Math.random() * 50, letterY, ctx);
    letter.draw()
  }
  // env.save()
}

const drawRow = (ctx, i, height)=> {
  ctx.fillStyle = '#FFFFFF'
  ctx.beginPath();
  let x1 = 0;
  let x2 = ctx.canvas.width;
  let y1 = i * height;
  let y2 = (i * height) + height;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x1, y2);
  ctx.lineTo(x1, y1);
  ctx.fill()
  ctx.stroke()
}

exports.draw = function() {
  
}

function background(color){
  ctx.fillStyle = color;
  ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}

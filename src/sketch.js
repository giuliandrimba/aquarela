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
var letters = "abcdefghijklmnopqrstuvwxyz".toUpperCase()

const divisions = 30;
var LETTER = getRandomletter()
var LETTER = "L"

exports.setup = function(_ctx, _env){
  ctx = _ctx;
  env = _env;

  time = Date.now()

  background("rgba(255,255,255,1)");
  
  var letterX = 0 
  var letterY = ctx.canvas.height - 87;
  const height = ctx.canvas.height / divisions;
  for(var i = 0; i < divisions; i++) {
    ctx.save();
    drawRow(ctx, i, height);
    var letter = new Letter(LETTER, randomNumber() * (0.4 + (i * 0.0001)), letterY, ctx);
    letter.draw()
    ctx.restore();
  }
  env.save()
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
  ctx.clip()
}

exports.draw = function() {
  
}

function randomNumber() {
  var num = Math.floor(Math.random() * 99) + 1; // this will get a number between 1 and 99;
  num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1; // this will add minus sign in 50% of cases
  return num;
}

function getRandomletter() {
  return letters.charAt(Math.random() * letters.length - 1)
}

function background(color){
  ctx.fillStyle = color;
  ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}

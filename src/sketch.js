var alphabet = require('./alphabet')
var Letter = require('./letter');

var ctx = undefined;
var env = undefined;
var imageCanvas = undefined;
var image = undefined;
var texts = []
var NUM_COLS = 20;
var COL_WIDTH = 0;
var NUM_ROWS = 20;
var COL_HEIGHT = 0;

var START_X = 0;
var START_Y = 0;

var letter = undefined;

var time = undefined;
var current = undefined;

exports.setup = function(_ctx, _env){
  ctx = _ctx;
  env = _env;

  COL_WIDTH = 15
  COL_HEIGHT =15;

  NUM_COLS = Math.ceil(ctx.canvas.width / COL_WIDTH)
  NUM_ROWS = Math.ceil(ctx.canvas.height / COL_HEIGHT);

  time = Date.now()

  START_X = ctx.canvas.width / 2 - 11
  START_Y = ctx.canvas.height - 100
  letter = new Letter(START_X, START_Y,alphabet.A, ctx);
  background("#fff");
  letter.draw()
  drawLetter()
}

exports.draw = function() {
  current = Date.now()
  
  if(current > time + 10) {
    time = current
    if(letter.evolve()) {
      background("rgba(255,255,255,0.1)");
      letter.draw()
    }
    // drawLetter()
  }
}

function drawLetter() {
  var total = alphabet.A.length;
  ctx.beginPath();
  // ctx.fillStyle = "rgba(255,255,255,1)";
  ctx.moveTo(START_X + parseFloat(alphabet.A[0]), START_Y + parseFloat(alphabet.A[1]));
  for(var i = 0; i < total; i+= 2) {
    ctx.lineTo(START_X + parseFloat(alphabet.A[i]),START_Y + parseFloat(alphabet.A[i + 1]));
  }
  ctx.stroke();
  // ctx.fill();
}

function background(color){
  ctx.fillStyle = color;
  ctx.fillRect(0,0, ctx.canvas.width, ctx.canvas.height);
}
